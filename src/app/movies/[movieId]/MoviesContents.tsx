"use client"

import { useEffect, useState } from "react";
import styled from "styled-components";
import { I_MovieDetailData } from "../../../fetchs/fetchs";
import MoviesInfo from "../../../components/movies/MoviesInfo";
import MovieTrailers from "../../../components/movies/MovieTrailers";

interface I_NestedBtn {
    actives: boolean;
}

const Container = styled.div`
    width: 90dvw;
    height: 80dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NestedBtnBox = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`;

const NestedBtn = styled.div<I_NestedBtn>`
    width: 50%;
    padding: 5px 7px;
    font-weight: bold;
    text-align: center;
    background-color: ${(props) => props.actives ? "rgb(178, 190, 195)" :"rgb(223, 230, 233)" };
    border-top-right-radius: 15px;
`;

const ContentsArea = styled.div`
    width: 95%;
    height: 90%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: rgb(178, 190, 195);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5px;
`;

function MoviesContents({movieData}: {movieData: I_MovieDetailData}){
    const [isInfos, setInfos] = useState(true);
    const [isTrailers, setTrailers] = useState(false);

    const NestedChange = (BtnNm: string) => {
        if(BtnNm === "TrailerBtn"){
            setInfos(false);
            setTrailers(true);
        } else if(BtnNm === "InfoBtn"){
            setInfos(true);
            setTrailers(false);
        }
    };

    useEffect(() => {
        setInfos(true);
        setTrailers(false);
    }, []);

    return (
        <Container>
            <NestedBtnBox>
                <NestedBtn actives={Boolean(isInfos)} onClick={() => NestedChange("InfoBtn")}>
                    상세 정보
                </NestedBtn>
                <NestedBtn actives={Boolean(isTrailers)} onClick={() => NestedChange("TrailerBtn")}>
                    스틸컷 / 예고편
                </NestedBtn>
            </NestedBtnBox>
            <ContentsArea>
                {
                    isInfos ? (
                        <MoviesInfo 
                            genres={movieData.genres}
                            actors={movieData.actors}
                            director={movieData.directorNm}
                            plots={movieData.plots}
                        />
                    ): null
                }
                {
                    isTrailers ? (
                        <MovieTrailers 
                            StillCuts={movieData.stills}
                            Trailers={movieData.vods}
                        /> 
                    ): null
                }
            </ContentsArea>
        </Container>
    );
}

export default MoviesContents;