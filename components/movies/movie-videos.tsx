"use client"

import Link from "next/link";
import styled from "styled-components"

interface I_MovieVideoProps {
    backgroundImgs?: string;
    TrailerURL?: string;
};

const Container = styled.div`
    width: 50%;
    height: 200px;
    border: 1px solid black;
    border-radius: 10px;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-weight: bold;
        text-decoration: none;
    }
`;

const PlayCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    background-color: rgba(209, 204, 204, 0.8);
    width: 50px;
    height: 50px;
    border: 1px solid rgb(182, 180, 180);
    border-radius: 25px;

    &:hover {
        background-color: rgba(182, 180, 204, 0.8);
    };
`;

export default function MovieVideo({backgroundImgs, TrailerURL}: I_MovieVideoProps){
    return (
        <Container>
            <a href={TrailerURL} target="_blank">
                <PlayCircle>▶</PlayCircle>
            </a>
        </Container>
    );
};