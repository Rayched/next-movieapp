import Link from "next/link";
import styles from "../styles/Home.module.css";
import { GetMoviesData } from "../../src/fetchs";
import GetNowDate from "../../src/GetNowDate";
import Movies from "./components/MovieList";
import MovieList from "./components/MovieList";

export default async function HomePage(){
    const GetTargetDt = GetNowDate();
    const TargetDt = GetTargetDt.DateInfos.join("-");
    const DayText = GetTargetDt.DayInfos;
    const MoviesData = await GetMoviesData();

    return (
        <div className={styles.HomeWrapper}>
            <div className={styles.HomeTitle}>
                <h3>영화 목록</h3>
                <h3>기준 일: {`${TargetDt} (${DayText})`}</h3>
            </div>
            <MovieList Movies={MoviesData}/>
        </div>
    );
}