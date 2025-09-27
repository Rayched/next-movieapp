"use client"

import styled from "styled-components";
import MovieCard from "./MovieCard";
import { useState } from "react";
import { I_MoviesData } from "../../fetchs/fetchs";

type MoviesListProps = {
    Movies: I_MoviesData[];
};

const MovieListWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 98%;
    height: 85%;
    margin-top: 5px;
`;

const RanksInfo = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const MovieListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const MovieBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 78%;
    min-height: 350px;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
`;

const MovieBox = styled.div`
    width: 440px;
    height: 78%;
    min-height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(190, 190, 190);
    position: relative;
`;

export default function MovieList({Movies}: MoviesListProps){
    const [NowMovieIdx, setNowMovieIdx] = useState(1);
    const [isNext, setNext] = useState(false);
    const MaxLength = Movies.length;

    //이전 버튼 (◀) Event Listener 함수
    const onPrev = () => {
        if(NowMovieIdx === 1){
            setNowMovieIdx(MaxLength);
        } else {
            setNext(false)
            setNowMovieIdx((value) => value - 1);
        }
    }

    //다음 버튼 (▶) Event Listener 함수
    const onNext = () => {
        if(NowMovieIdx === MaxLength){
            //Movies, Last Item → First Item 이동
            setNowMovieIdx(1);
        } else {
            //Movies, 다음 Item 넘기기
            setNext(true)
            setNowMovieIdx((state) => state + 1);
        }
    };
    return (
        <MovieListWrapper>
            <RanksInfo>
                {`영화 목록 [ ${NowMovieIdx} / ${MaxLength} ]`}
            </RanksInfo>
            <MovieListContainer>
                <MovieBtn onClick={onPrev}>◀</MovieBtn>
                <MovieBox>
                    {
                        Movies.map((data) => {
                            if(Number(data.rank) !== NowMovieIdx){
                                return null;
                            } else {
                                return (
                                    <MovieCard
                                        key={data.movieId}
                                        movieId={data.movieId}
                                        movieNm={data.movieNm}
                                        audiAcc={data.audiAcc}
                                        posterUrl={data.posters[0]}
                                        isNext={isNext}
                                    />
                                );
                            }
                        })
                    }
                </MovieBox>
                <MovieBtn onClick={onNext}>▶</MovieBtn>
            </MovieListContainer>
        </MovieListWrapper>
    );
}