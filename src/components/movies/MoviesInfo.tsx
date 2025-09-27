"use client"
import styled from "styled-components";

interface I_InfoBox  {
    infoboxposition: string;
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0px;
    width: 100%;
`;

const DataLabel = styled.div`
    width: 85%;
    padding: 5px 0px;
    font-size: 16px;
    font-weight: bold;
    margin: 3px 0px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
`;

const InfoBox = styled.div<I_InfoBox>`
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 2px solid black;
    border-bottom: ${(props) => props.infoboxposition === "Bottom" ? "2px solid black" : "none"};
`;

const InfoTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    padding: 3px;
    font-size: 16px;
    font-weight: bold;
    background-color: rgb(151, 150, 150);
    border-right: 2px solid black;
`;

const InfoBody = styled.div`
    width: 60%;
    padding: 3px;
    font-size: 15px;
    text-align: center;
    background-color: rgb(187, 187, 187);
`;

const Plots = styled.div`
    width: 80%;
    background-color: white;
    padding: 5px;
    word-spacing: 3px;
`;

interface MoviesInfoProps {
    genres: string[];
    actors: string[];
    director: string;
    plots: string;
};

function MoviesInfo({genres, actors, director, plots}: MoviesInfoProps){
    return (
        <Wrapper>
            <DataLabel>기본 정보</DataLabel>
            <InfoContainer>
                <InfoBox infoboxposition="Top">
                    <InfoTitle>감독</InfoTitle>
                    <InfoBody>{director}</InfoBody>
                </InfoBox>
                <InfoBox infoboxposition="Middle">
                    <InfoTitle>장르</InfoTitle>
                    <InfoBody>{genres.join(", ")}</InfoBody>
                </InfoBox>
                <InfoBox infoboxposition="Bottom">
                    <InfoTitle>출연진</InfoTitle>
                    <InfoBody>{actors.join(", ")}</InfoBody>
                </InfoBox>
            </InfoContainer>
            <DataLabel>줄거리</DataLabel>
            <Plots>{plots}</Plots>
        </Wrapper>
    );
};

export default MoviesInfo;