//Kobis, 일일 박스오피스 api의 required parameter
//TargetDt return하는 GetNowDate 함수

/**
 * 두자릿 수 미만 숫자 (1 ~ 9)
 * 00 형태로 변환하는 용도의 함수
 */

interface I_NowDateInfo {
    DateInfos: string[];
    DayInfos: string;
};

const Modifys = (modifyTargets: number) => {
    if(modifyTargets >= 10){
        return String(modifyTargets);
    } else {
        return "0" + String(modifyTargets);
    };
};

export default function GetNowDate(){
    const NowDate = new Date();

    const DayTexts = ["일", "월", "화", "수", "목", "금", "토"];
    
    const FullYears = String(NowDate.getFullYear());
    const Month = Modifys(NowDate.getMonth() + 1);
    const Dates = Modifys(NowDate.getDate() - 1);
    const getDays = NowDate.getDay() - 1;

    const NowDateInfo: I_NowDateInfo = {
        DateInfos: [FullYears, Month, Dates],
        DayInfos: DayTexts[getDays]
    };

    return NowDateInfo;
};