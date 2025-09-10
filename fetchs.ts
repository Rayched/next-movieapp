
interface I_DailyBoxOfficeList {
    rnum?: string;
    rank?: string;
    rankInten?: string;
    rankOldAndNew?: string;
    movieCd?: string;
    movieNm?: string;
    openDt?: string;
    salesAmt?: string;
    salesShare?: string;
    salesInten?: string;
    salesChange?: string;
    salesAcc?: string;
    audiCnt?: string;
    audiInten?: string;
    audiChange?: string;
    audiAcc?: string;
    scrnCnt?: string;
    showCnt?: string;
};

export interface I_KobisResult {
    boxOfficeResult?: {
        boxofficeType?: string;
        showRange?: string;
        dailyBoxOfficeList?: I_DailyBoxOfficeList[];
    };
};

const KobisURL = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";

const KobisKey = process.env.NEXT_PUBLIC_KOBIS_API_KEY;

export async function GetMoviesData(){
    const TargetDt = "20250909";

    const Resp = await fetch(`${KobisURL}?key=${KobisKey}&targetDt=${TargetDt}`);

    const GetData = Resp.json();

    return GetData;
}