import { I_KMDbResult, I_KobisResult } from "./movieapp-types";

interface I_KMDBData_props {
    movieNm?: string;
    openDt?: string;
};

export interface I_DetailData {
    plots?: string;
    stills?: string[];
    posters?: string[];
};

interface I_MoviesData {
    rank?: string;
    movieId?: string;
    movieNm?: string;
    openDt?: string;
    plots?: string;
    audiAcc?: string;
    posters?: string[];
    stills?: string[];
};

const GetTargetDts = () => {
    //'0' 형식 → '00' 형식으로 변환
    const Modifys = (target: number) => {
        if(target > 9){
            return String(target);
        } else {
            const Edits = "0" + String(target);
            return Edits;
        }
    };

    const NowDate = new Date();

    const FullYears = String(NowDate.getFullYear());
    const Month = Modifys(NowDate.getMonth() + 1);
    const Dates = Modifys(NowDate.getDate() - 1);

    const TargetDt = FullYears + Month + Dates;

    return TargetDt;
};

//KMDb, 영화 상세정보 api data fetch
async function GetKMDBData({movieNm, openDt}: I_KMDBData_props){
    const KMDB_URL = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&";
    const KMDB_Key = process.env.NEXT_PUBLIC_KMDB_API_KEY;

    const DetailFetch = await fetch(
        `${KMDB_URL}&ServiceKey=${KMDB_Key}&title=${movieNm}&releaseDts=${openDt}`
    );

    const Resp = await DetailFetch.json() as I_KMDbResult;

    const GetDetail = await Resp.Data[0].Result[0];

    const DetailData: I_DetailData = {
        posters: GetDetail.posters.split("|"),
        plots: GetDetail.plots.plot[0].plotText,
        stills: GetDetail.stlls.split("|")
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
    const TargetDt = GetTargetDts();

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
            rank: data.rank,
            movieId: data.movieCd,
            movieNm: data.movieNm,
            openDt: data.openDt,
            audiAcc: data.audiAcc,
            plots: KMDbData.plots,
            posters: KMDbData.posters,
            stills: KMDbData.stills
        };

        return Format;
    })

    const Result = Promise.all(MoviesData).then((value) => value);

    return Result;
};

//Kobis, 영화 상세정보 data fetch function
export async function GetMovieDetails(movieId: string){
    const DetailsURL = `${Kobis_basedURL}/movie/searchMovieInfo.json`;

    const DetailFetch = await fetch(
        `${DetailsURL}?key=${KobisKey}&movieCd=${movieId}`
        , {cache: "no-store"}
    );

    const resp = await DetailFetch.json();

    return resp;
};