"use client"
import styled from "styled-components";

const Container = styled.div`
    width: 85%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1px 5px;
    border-bottom: 2px solid rgb(187, 187, 187);

    img {
        display: block;
        width: 65px;
        height: 80px;
    };
`;

const MovieTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0px 3px;
    margin-left: 5px;

    .infos {
        font-size: 17px;
        font-weight: bold;
        padding: 3px 0px;
        margin: 2px 0px;
    };
`;

interface MoviesHeaderProps {
    movieNm: string;
    poster: string;
    openDt: string;
    showTm: string;
};

function MoviesHeader({movieNm, poster, openDt, showTm}: MoviesHeaderProps){
    const Year = openDt.slice(0, 4);
    const Month = openDt.slice(4, 6);
    const Dates = openDt.slice(6);

    const EditDts = `${Year}.${Month}.${Dates}`;

    return (
        <Container>
            <img src={poster} />
            <MovieTitle>
                <h4 className="infos">{movieNm}</h4>
                <h4 className="infos">개봉 {EditDts} / {showTm}분</h4>
            </MovieTitle>
        </Container>
    );
};

export default MoviesHeader;