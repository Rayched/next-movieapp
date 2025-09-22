
import styles from "../styles/home/Home.module.css";
import MovieList from "../../components/Home/MovieList";
import GetNowDate from "../../fetchs/GetNowDate";
import { GetMoviesData } from "../../fetchs/fetchs";

export default async function HomePage(){
    const GetTargetDt = GetNowDate();
    const TargetDt = GetTargetDt.DateInfos.join("-");
    const DayText = GetTargetDt.DayInfos;
    const MoviesData = await GetMoviesData();

    return (
        <div className={styles.HomeWrapper}>
            <div className={styles.HomeTitle}>
                <h3>{`${TargetDt} (${DayText})`}</h3>
                <h4>일일 박스오피스</h4>
            </div>
            <div className={styles.HomeMoviesListBox}>
                <MovieList Movies={MoviesData} />
            </div>
        </div>
    );
}