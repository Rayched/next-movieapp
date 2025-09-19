"use client"

import styled from "styled-components";

interface MoviesInfoProps {
    genres: string[];
    actors: string[];
    director: string;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    margin: 5px 0px;
`;

const InfoBox = styled.div`
    .InfoTitle {
        font-weight: bold;
        font-size: 15px;
    };
`;

function MoviesInfo({genres, actors, director}: MoviesInfoProps){
    return (
        <Container>
            <InfoBox>
                감독 {director}
            </InfoBox>
            <InfoBox>
                장르 {genres.join(", ")}
            </InfoBox>
            <InfoBox>
                출연 {actors.join(", ")}
            </InfoBox>
        </Container>
    );
};

export default MoviesInfo;