import styled from "styled-components";

interface I_MovieCardProps {
    movieId?: string;
    movieNm?: string;
    posterUrl?: string;
    audiAcc?: string;
};

const MovieCard_Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(250, 250, 250);
    border-radius: 15px;
    width: 280px;
    height: 380px;
    margin: 0px 3px;
`;

const MoviePoster = styled.img`
    display: block;
    padding: 3px 0px;
    margin: 2px 0px;
`;

const MovieInfoBox = styled.div``;

function MovieCard({movieId, movieNm, posterUrl, audiAcc}: I_MovieCardProps){
    return (
        <MovieCard_Container key={movieId}>
            <MoviePoster src={posterUrl}/>
            <MovieInfoBox>
                <h4>{movieNm}</h4>
                <h4>누적: {audiAcc}</h4>
            </MovieInfoBox>
        </MovieCard_Container>
    );
};

export default MovieCard;