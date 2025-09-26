import GetNowDate from "./GetNowDate";
import { I_KMDbResult, I_KobisResult, I_MovieInfoResult } from "./movieapp-types"

interface I_KMDBData_props {
    movieNm?: string;
    openDt?: string;
};

export interface I_KmdbRespTypes {
    plots?: string;
    stills?: string[];
    posters?: string[];
    vods?: string[];
};

//Home, Fetch 함수 return type
export interface I_MoviesData {
    rank?: string;
    movieId?: string;
    movieNm?: string;
    openDt?: string;
    audiAcc?: string;
    posters?: string[];
};

//Movies page, Fetch 함수 return type
export interface I_MovieDetailData {
    //Kobis 영화 상세정보 api type
    movieId: string;
    movieNm: string;
    openDt: string;
    showTm: string;
    genres: string[];
    actors: string[];
    directorNm: string;

    //Kmdb 영화 상세정보 api Responce type
    plots: string;
    posters: string[];
    stills: string[];
    vods: string[];
};

//KMDb, 영화 상세정보 api data fetch
async function GetKMDBData({movieNm, openDt}: I_KMDBData_props){
    const KMDB_URL = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&";
    const KMDB_Key = process.env.NEXT_PUBLIC_KMDB_API_KEY;

    const DetailFetch = await fetch(
        `${KMDB_URL}&ServiceKey=${KMDB_Key}&title=${movieNm}&releaseDts=${openDt}`
    );

    const Resp = await DetailFetch.json() as I_KMDbResult;

    const GetDetail = await Resp?.Data[0]?.Result[0];

    const Vods = await GetDetail.vods.vod.map((data) => {
        return data.vodUrl;
    });

    const DetailData: I_KmdbRespTypes = {
        posters: GetDetail.posters.split("|"),
        plots: GetDetail.plots.plot[0].plotText,
        stills: GetDetail.stlls.split("|"),
        vods: Vods
    };

    return DetailData;
}

const Kobis_basedURL = "https://www.kobis.or.kr/kobisopenapi/webservice/rest"
const KobisKey = process.env.NEXT_PUBLIC_KOBIS_API_KEY;

//Movies Data Fetch function
/**
 * 1. 한국영화진흥위원회, 일일 박스오피스 api 통해, 
 *    전날 박스오피스 data를 받아옴.
 *    (한국영화진흥위원회 open api => Kobis api)
 *    (박스오피스 data => Movies)
 * 2. Movies data를 기반으로 새로운 array 생성
 *  - GetKMDBData() 함수 호출 (props => movieNm, openDt)
 *    => Kobis api는 줄거리, 영화 포스터, 스틸컷을 제공 X
 *       Kobis api에서 제공되지 않는 나머지 자료들을
 *       한국영화 데이터베이스 api 사용해서 가져오는 함수
 * 
 *    => movieNm, openDt 활용, 해당 영화의 상세 정보를 받아옴
 *    => plots(줄거리), posters(영화 포스터), stills(스틸컷) return
 */
export async function GetMoviesData(){
    const DailyBoxOffice_URL = `${Kobis_basedURL}/boxoffice/searchDailyBoxOfficeList.json`;
    const TargetDt = GetNowDate().DateInfos.join("");

    const MoviesFetch = await fetch(
        `${DailyBoxOffice_URL}?key=${KobisKey}&targetDt=${TargetDt}`
        , {cache: "no-store"}
    );

    const Resp: I_KobisResult = await MoviesFetch.json();

    const GetData = Resp.boxOfficeResult.dailyBoxOfficeList;

    const MoviesData = GetData.map(async(data) => {
        const KMDbData = await GetKMDBData(
            {movieNm: data.movieNm, openDt: data.openDt}
        ).then();

        const Format: I_MoviesData = {
            rank: data.rank, //박스오피스 순위
            movieId: data.movieCd, //영화 id (movies page 필요)
            movieNm: data.movieNm, //영화 제목
            openDt: data.openDt, //영화 개봉일
            audiAcc: data.audiAcc, //누적 관객 수
            posters: KMDbData.posters, //영화 포스터's
        };

        return Format;
    })

    const Result = Promise.all(MoviesData);

    return Result;
};

//Kobis, 영화 상세정보 data fetch function
export async function GetMovieDetails(movieId: string){
    const DetailsURL = `${Kobis_basedURL}/movie/searchMovieInfo.json`;

    const DetailFetch = await fetch(
        `${DetailsURL}?key=${KobisKey}&movieCd=${movieId}`
        , {cache: "no-store"}
    );

    const resp = await DetailFetch.json() as I_MovieInfoResult;

    const Details = resp.movieInfoResult.movieInfo;

    //Kobis 영화 상세정보 api data 일부 가공
    const Genres = Details.genres.map((data) => data.genreNm);
    const Actors = Details.actors.map((data) => data.peopleNm);

    const KMDbData = await GetKMDBData({
        movieNm: Details.movieNm,
        openDt: Details.openDt
    }).then((value) => value);

    const Result: I_MovieDetailData = {
        //Kobis, 영화 상세정보 api return 값
        movieId: Details.movieCd,
        movieNm: Details.movieNm,
        openDt: Details.openDt,
        showTm: Details.showTm,
        directorNm: Details.directors[0]?.peopleNm,
        genres: Genres,
        actors: Actors,
        //Kmdb, 영화 상세정보 api return 값
        posters: KMDbData.posters,
        plots: KMDbData.plots,
        stills: KMDbData.stills,
        vods: KMDbData.vods,
    };

    return Result;
};