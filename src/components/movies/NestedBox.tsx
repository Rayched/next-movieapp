"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

interface I_NestedBtn {
    isStills?: boolean;
};

const Container = styled.div`
    width: 45%;
    height: 7%;
    background-color: lightgray;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 5px 0px;
`;

const NestedBtn = styled.div<I_NestedBtn>`
    width: 38%;
    height: 80%;
    border: 2px solid darkgray;
    border-radius: 15px;
    background-color: ${(props) => props.isStills ? "rgb(130, 130, 130)" : "darkgray"};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 4px;
    font-size: 18px;
    font-weight: bold;
    a {
        text-decoration: none;
        color: black;
    }
`;

export default function NestedBox(){
    const URLCheck = usePathname();

    return (
        <Container>
            
        </Container>
    );
}