"use client"
import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion";
import { useState } from "react";

interface MovieTrailersProps {
    StillCuts: string[];
    Trailers: string[];
};

interface I_StillCutItem {
    bgphotourl: string;
};

interface I_StillCutInfo {
    StillURL: string;
    StillIdx: number;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 5px 0px;
`;

const DataLabel = styled.div`
    width: 85%;
    padding: 5px 0px;
    font-size: 16px;
    font-weight: bold;
    margin: 3px 0px;
`;

const DataBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
    height: 35%;
    max-height: 174px;
    position: relative;
    background-color: rgb(195, 202, 205);
    margin-bottom: 5px;
`;

const SlideBtn = styled.div`
    width: 5%;
    height: 100%;
    background-color: black;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const StillBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
`;

const StillCutItem = styled(motion.div)<I_StillCutItem>`
    width: 100%;
    max-width: 268px;
    height: 100%;
    max-height: 174px;
    margin: 0px 1px;
    background-image: ${(props) => `url(${props.bgphotourl})`};
    background-size: cover;
`;

const TrailerBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const TrailerItem = styled(motion.div)`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 70%;
    background-color: white;
    border: 2px solid rgb(178, 190, 195);
    border-radius: 10px;
    &:hover {
        scale: 1.2;
    };
`;

const ShowBoxWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
`;

const ShowStillCutBox = styled(motion.div)`
    width: 60%;
    height: 75%;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        margin-top: 8px;
    }
`;

function MovieTrailers({StillCuts, Trailers}: MovieTrailersProps){
    //스틸컷 관련 상태
    const [StillIdx, setStillIdx] = useState(0);
    const [ShowStillCuts, SetShowStillCuts] = useState(false);
    const [StillCutInfo, setStillCutInfo] = useState<I_StillCutInfo>();

    //예고편 관련 상태
    const [TrailerIdx, setTrailerIdx] = useState(0);

    const TrailerLength = Trailers.length;
    const StillLength = StillCuts.length;
    const offset = 2;

    const NextStillCuts = () => {
        if(StillIdx * offset + offset >= StillLength){
            setStillIdx(0);
        } else {
            setStillIdx((prev) => prev + 1);
        }
    };

    const PrevStillCuts = () => {
        if(StillIdx === 0){
            setStillIdx(1);
        } else {
            setStillIdx((prev) => prev - 1);
        }
    };

    const StillCutClicks = ({StillIdx, StillURL}: I_StillCutInfo) => {
        setStillCutInfo({
            StillIdx: StillIdx,
            StillURL: StillURL
        });
        SetShowStillCuts(true);
    };

    const CloseStillCuts = () => {
        setStillCutInfo({
            StillIdx: 0,
            StillURL: ""
        });
        SetShowStillCuts(false);
    };

    return (
        <>
            <Container>
                <DataLabel>스틸컷 {`(${StillLength})`}</DataLabel>
                <DataBox key="StillCutsBox">
                    <SlideBtn onClick={PrevStillCuts}>◀</SlideBtn>
                    <AnimatePresence>
                        <StillBox key="StillCutSliders">
                            {
                                StillCuts.slice(StillIdx * offset, StillIdx * offset + offset).map((data, Idx) => {
                                    return (
                                        <StillCutItem 
                                            key={`StillCut_${Idx}`} 
                                            bgphotourl={`${data}`}
                                            layoutId={`StillCut${Idx}`}
                                            onClick={() => StillCutClicks({StillIdx: Idx, StillURL: data})}
                                        />
                                    )
                                })
                            }
                        </StillBox>
                    </AnimatePresence>
                    <SlideBtn onClick={NextStillCuts}>▶</SlideBtn>
                </DataBox>
                <DataLabel>예고편 {`(${TrailerLength})`}</DataLabel>
                <DataBox key="TrailersBox">
                    <SlideBtn>◀</SlideBtn>
                    <TrailerBox key="TrailerSlider">
                        {
                            Trailers.slice(TrailerIdx * 3, TrailerIdx * 3 + 3).map((data, idx) => {
                                return (
                                    <TrailerItem key={`Trailer_${idx}`}>
                                        <h4>예고편 {idx + 1}</h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="70" width="80" viewBox="0 0 640 640">
                                            <path fill="#b2bec3" d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"/>
                                        </svg>
                                    </TrailerItem>
                                );
                            })
                        }
                    </TrailerBox>
                    <SlideBtn>▶</SlideBtn>
                </DataBox>
            </Container>
            {
                ShowStillCuts ? (
                    <ShowBoxWrapper>
                        <ShowStillCutBox 
                            key={StillCutInfo.StillIdx}
                            layoutId={`StillCut${StillCutInfo.StillIdx}`}
                            onClick={CloseStillCuts} 
                        >
                            <img src={StillCutInfo.StillURL} width={"300"} height={"150"}/>
                            <h4>스틸컷 {`${StillCutInfo.StillIdx}`}</h4>
                        </ShowStillCutBox>
                    </ShowBoxWrapper>
                ) :null
            }
        </>
    )
};

export default MovieTrailers;