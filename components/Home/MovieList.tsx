"use client"

import styled from "styled-components";
import { I_MoviesData } from "../../src/fetchs";
import MovieCard from "./MovieCard";
import { useState } from "react";
import Link from "next/link";

type MoviesListProps = {
    Movies: I_MoviesData[];
};

const MovieListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 98%;
    height: 85%;
    margin-top: 5px;
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
    const [NowMovieIdx, setNowMovieIdx] = useState(0);
    const MaxLength = Movies.length - 1;

    //이전 버튼 (◀) Event Listener 함수
    const onPrev = () => {
        if(NowMovieIdx === 0){
            setNowMovieIdx(MaxLength);
        } else {
            setNowMovieIdx((value) => value - 1);
        }
    }

    //다음 버튼 (▶) Event Listener 함수
    const onNext = () => {
        if(NowMovieIdx === MaxLength){
            //Movies, Last Item → First Item 이동
            setNowMovieIdx(0);
        } else {
            //Movies, 다음 Item 넘기기
            setNowMovieIdx((state) => state + 1);
        }
    };
    return (
        <MovieListContainer>
            <MovieBtn onClick={onPrev}>◀</MovieBtn>
            <MovieBox>
                {
                    Movies.map((data, idx) => {
                        if(idx !== NowMovieIdx){
                            return null;
                        } else {
                            return (
                                <MovieCard
                                    key={data.movieId}
                                    movieId={data.movieId}
                                    movieNm={data.movieNm}
                                    audiAcc={data.audiAcc}
                                    posterUrl={data.posters[0]}
                                />
                            );
                        }
                    })
                }
            </MovieBox>
            <MovieBtn onClick={onNext}>▶</MovieBtn>
        </MovieListContainer>
    );
}