"use client"

import { useEffect } from "react";
import { I_MoviesData } from "../../../src/fetchs";

type MoviesListProps = {
    Movies: I_MoviesData[];
};

export default function MovieList({Movies}: MoviesListProps){
    useEffect(() => {
        console.log(Movies);
    }, []);
    return (
        <div>
            <ul>
                {
                    Movies.map((data) => {
                        return <li key={data.movieId}>{data.movieNm}</li>
                    })
                }
            </ul>
        </div>
    );
}