import { animate, AnimatePresence, delay, motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

interface I_MovieCardProps {
    movieId?: string;
    movieNm?: string;
    posterUrl?: string;
    audiAcc?: string;
};

const MovieCard_Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(250, 250, 250);
    border-radius: 15px;
    width: 70%;
    max-width: 240px;
    height: 95%;
    margin: 0px 3px;
    position: absolute;
`;

const MoviePoster = styled.img`
    display: block;
    padding: 3px 0px;
    margin: 2px 0px;
    width: 170px;
    height: 220px;
`;

const MovieInfoBox = styled.div``;

const MovieCard_Variants = {
    initial: {
        x: 100,
        transition: {
            delay: 0.5
        }
    },
    animate: {
        x: 0,
        transition: {
            duration: 0.3
        }
    },
    exit: {
        x: -100,
        transition: {
            duration: 0.4
        }
    }
};

function MovieCard({movieId, movieNm, posterUrl, audiAcc}: I_MovieCardProps){
    return (
        <AnimatePresence>
            <MovieCard_Container 
                variants={MovieCard_Variants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Link href={`/movies/${movieId}`}>
                    <MoviePoster src={posterUrl}/>
                </Link>
                <MovieInfoBox>
                    <h4>{movieNm}</h4>
                    <h4>누적: {audiAcc}</h4>
                </MovieInfoBox>
            </MovieCard_Container>
        </AnimatePresence>
    );
};

export default MovieCard;