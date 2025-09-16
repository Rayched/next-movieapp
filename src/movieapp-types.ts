//Movie App, Movies, detail Data Type 모음

//KMDb, 영화 상세정보 api, result types
export interface I_KMDbResult {
    Query?: string;
    TotalCount?: number;
    Data?: [{
        CollName?: string;
        Count?: number;
        TotalCount?: number;
        Result?: I_KMDbResultTypes[];
    }];
};

export interface I_KMDbResultTypes {
    ALIAS?: string;
    Awards1?: string;
    Awards2?: string;
    Codes?: {
        Code?: [{
            CodeNm?: string;
            CodeNo?: string;
        }];
    };
    CommCodes?: {
        CommCode?: [{
            CodeNm?: string;
            CodeNo?: string;
        }];
    };
    DOCID?: string;
    actors?: {
        actor?: [{
            actorEnNm?: string;
            actorId?: string;
            actorNm?: string;
        }];
    };
    audiAcc?: string;
    company?: string;
    directors?: {
        director?: [{
            directorEnNm?: string; 
            directorId?: string;
            directorNm?: string;
        }];
    };
    episodes?: string;
    fLocation?: string;
    genre?: string;
    keywords?: string;
    kmdbUrl?: string;
    modDate?: string;
    movieId?: string;
    movieSeq?: string;
    nation?: string;
    openThtr?: string;
    plots?: {
        plot?: [{
            plotLang?: string;
            plotText?: string;
        }];
    };
    posters?: string;
    prodYear?: string;
    ratedYn?: string;
    rating?: string;
    ratings?:{
        rating?: [{
            ratingDate?: string;
            ratingGrade?: string;
            ratingMain?: string;
            ratingNo?: string;
            releaseDate?: string;
            runtime?: string;
        }]
    };
    regDate?: string;
    repRatDate?: string;
    repRlsDate?: string;
    runtime?: string;
    salesAcc?: string;
    screenArea?: string;
    screenCnt?: string;
    soundtrack?: string;
    staffs?: {
        staff?: [{
            staffEnNm?: string;
            staffEtc?: string;
            staffId?: string;
            staffNm?: string;
            staffRole?: string;
            staffRoleGroup?: string;
        }];
    }
    stat?: [{
        audiAcc?: string;
        salesAcc?: string;
        screenArea?: string;
        statDate?: string;
        statSouce?: string;
    }]
    statDate?: string;
    statSouce?: string;
    stlls?: string;
    themeSong?: string;
    title?: string;
    titleEng?: string;
    titleEtc?: string;
    titleOrg?: string;
    type?: string;
    use?: string;
    vods?: {
        vod?: [{
            vodClass?: string;
            vodUrl?: string;
        }];
    };
};

//Kobis, 일일 박스오피스 api, result types
export interface I_KobisResult {
    boxOfficeResult?: {
        boxofficeType?: string;
        showRange?: string;
        dailyBoxOfficeList?: I_DailyBoxOfficeList[];
    };
};

export interface I_DailyBoxOfficeList {
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

//Kobis, 영화 상세정보 api result types
export interface I_MovieInfoResult {
    movieInfoResult?: {
        movieInfo?: I_MovieInfo;
        source?: string;
    }
};

export interface I_MovieInfo {
    movieCd?: string;
    movieNm?: string;
    movieEnNm?: string;
    movieNmOg?: string;
    showTm?: string;
    prdtYear?: string;
    openDt?: string;
    prdtStatNm?: string;
    typeNm?: string;
    nations?: [{ nationNm?: string; }];
    genres?: [{ genreNm?: string; }];
    directors?: [{
        peopleNm?: string;
        peopleNmEn?: string;
    }];
    actors?: [{
        peopleNm?: string;
        peopleNmEn?: string;
        cast?: string;
        castEn?: string;
    }];
    showTypes?: [{
        showTypeGroupNm?: string;
        showTypeNm?: string;
    }];
    companys?: [{
        companyCd?: string;
        companyNm?: string;
        companyNmEn?: string;
        companyPartNm?: string;
    }];
    audits?: [{
        auditNo?: string;
        watchGradeNm?: string;
    }];
    staffs?: [{
        peopleNm?: string;
        peopleNmEn?: string;
        staffRoleNm?: string;
    }];
};