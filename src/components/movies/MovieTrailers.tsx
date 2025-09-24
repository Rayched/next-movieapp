"use client"
import styled from "styled-components";
import {motion} from "framer-motion";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const TrailerBtn = styled.div``;

const TrailerBox = styled.div`
    position: relative;
`;

function MovieTrailers(){
    return (
        <Container></Container>
    )
};

export default MovieTrailers;