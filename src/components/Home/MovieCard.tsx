import { animate, AnimatePresence, delay, motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

interface I_MovieCardProps {
    movieId?: string;
    movieNm?: string;
    posterUrl?: string;
    audiAcc?: string;
    isNext: boolean;
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
    width: 14em;
    height: 17em;
`;

const MovieInfoBox = styled.div`
    width: 100%;
    text-align: center;
    font-weight: bold;
`;

const PrevVariants = {
    initial: { x: -100},
    animate: { x: 0, transition: {duration: 0.6}},
    exit: {
        x: 100
    }
};

const Next_Variants = {
    initial: {
        x: 100
    },
    animate: {
        x: 0,
        transition: {
            duration: 0.6
        }
    },
    exit: {
        x: -100,
        transition: {
            delay: 1,
            duration: 0.5
        }
    }
};

function MovieCard({movieId, movieNm, posterUrl, audiAcc, isNext}: I_MovieCardProps){
    return (
        <AnimatePresence>
            <MovieCard_Container 
                variants={isNext ? Next_Variants : PrevVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Link href={`/movies/${movieId}`}>
                    <MoviePoster src={posterUrl}/>
                </Link>
                <MovieInfoBox>
                    <h4>{movieNm}</h4>
                    <h4>누적 관객 {audiAcc}명</h4>
                </MovieInfoBox>
            </MovieCard_Container>
        </AnimatePresence>
    );
};

export default MovieCard;