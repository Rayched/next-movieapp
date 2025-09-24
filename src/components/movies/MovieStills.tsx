"use client"

import styled from "styled-components"

//영화 스틸컷 모아두는 Components

const Container = styled.div`
    width: 85%;
    height: 30%;
    border: 1px solid black;
`;

export default function MovieStills(){
    return (
        <Container>
            영화 스틸컷
        </Container>
    );
};