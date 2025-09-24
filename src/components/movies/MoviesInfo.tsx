"use client"
import styled from "styled-components";

interface I_InfoBox  {
    InfoBoxPositon: string;
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0px;
    width: 75%;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InfoBox = styled.div<I_InfoBox>`
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 2px solid black;
    border-bottom: ${(props) => props.InfoBoxPositon === "Bottom" ? "2px solid black" : "none"};
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

interface MoviesInfoProps {
    genres: string[];
    actors: string[];
    director: string;
    plots: string;
};

function MoviesInfo({genres, actors, director, plots}: MoviesInfoProps){
    return (
        <Wrapper>
            <h4>기본 정보</h4>
            <InfoContainer>
                <InfoBox InfoBoxPositon="Top">
                    <InfoTitle>감독</InfoTitle>
                    <InfoBody>{director}</InfoBody>
                </InfoBox>
                <InfoBox InfoBoxPositon="Middle">
                    <InfoTitle>장르</InfoTitle>
                    <InfoBody>{genres.join(", ")}</InfoBody>
                </InfoBox>
                <InfoBox InfoBoxPositon="Bottom">
                    <InfoTitle>출연진</InfoTitle>
                    <InfoBody>{actors.join(", ")}</InfoBody>
                </InfoBox>
            </InfoContainer>
            <h4>줄거리</h4>
            <div>{plots}</div>
        </Wrapper>
    );
};

export default MoviesInfo;