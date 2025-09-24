"use client"

import { useState } from "react";
import styled from "styled-components";
import { I_MovieDetailData } from "../../../fetchs/fetchs";
import MoviesInfo from "../../../components/movies/MoviesInfo";

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
    background-color: ${(props) => props.actives ? "rgb(223, 230, 233)" : "rgb(178, 190, 195)"};
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
    const [isActive, setActive] = useState(true);

    const NestedChange = () => {
        setActive((prev) => !prev);
    };

    return (
        <Container>
            <NestedBtnBox>
                <NestedBtn actives={!isActive} onClick={NestedChange}>상세 정보</NestedBtn>
                <NestedBtn actives={isActive} onClick={NestedChange}>영화 스틸컷</NestedBtn>
            </NestedBtnBox>
            <ContentsArea>
                {
                    isActive ? (
                        <MoviesInfo 
                            genres={movieData.genres}
                            actors={movieData.actors}
                            director={movieData.directorNm}
                            plots={movieData.plots}
                        />
                    ): "영화 스틸컷"
                }
            </ContentsArea>
        </Container>
    );
}

export default MoviesContents;