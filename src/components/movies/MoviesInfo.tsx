"use client"

import styled from "styled-components";

interface MoviesInfoProps {
    genres: string[];
    actors: string[];
    director: string;
};

const Container = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3px 0px;
    border: 1.5px solid rgb(122, 122, 122);
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    .InfoTitle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        padding: 3px;
        font-size: 16px;
        font-weight: bold;
        border: 1.5px solid rgb(122, 122, 122);
        background-color: rgb(151, 150, 150);
    };

    .InfoBody {
        font-size: 15px;
        text-align: center;
        padding: 3px;
        width: 60%;
        border: 1px solid rgb(122, 122, 122);
        background-color: rgb(187, 187, 187);
    };
`;

function MoviesInfo({genres, actors, director}: MoviesInfoProps){
    return (
        <Container>
            <InfoBox>
                <div className="InfoTitle">감독</div>
                <div className="InfoBody">{director}</div>
            </InfoBox>
            <InfoBox>
                <div className="InfoTitle">장르</div>
                <div className="InfoBody">{genres.join(", ")}</div>
            </InfoBox>
            <InfoBox>
                <div className="InfoTitle">출연진</div>
                <div className="InfoBody">{actors.join(", ")}</div>
            </InfoBox>
        </Container>
    );
};

export default MoviesInfo;