"use client"

import styled from "styled-components";

interface MoviesHeaderProps {
    movieNm: string;
    poster: string;
    openDt: string;
    showTm: string;
};

const Container = styled.div`
    width: 85%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1px 5px;
    border-bottom: 2px solid rgb(187, 187, 187);
`;

const PosterBox = styled.img`
    display: block;
    width: 65px;
    height: 80px;
`;

const MovieInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0px 3px;
    margin-left: 5px;
`;

const Infos = styled.div`
    font-size: 17px;
    font-weight: bold;
    padding: 3px 0px;
    margin: 2px 0px;
`;

function MoviesHeader({movieNm, poster, openDt, showTm}: MoviesHeaderProps){
    const Year = openDt.slice(0, 4);
    const Month = openDt.slice(4, 6);
    const Dates = openDt.slice(6);

    const TestDates = `${Year}.${Month}.${Dates}`;

    return (
        <Container>
            <PosterBox src={poster} />
            <MovieInfoBox>
                <Infos>{movieNm}</Infos>
                <Infos>{TestDates} 개봉 / {showTm}분</Infos>
            </MovieInfoBox>
        </Container>
    );
};

export default MoviesHeader;