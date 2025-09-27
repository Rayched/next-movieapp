import { Params } from "next/dist/server/request/params";
import { GetMovieDetails } from "../../../fetchs/fetchs";
import styles from "../../styles/movies/Movies.module.css";
import MoviesContents from "./MoviesContents";
import Link from "next/link";

const GetEditDts = (openDt?: string) => {
    const Year = openDt.slice(0, 4);
    const Month = openDt.slice(4, 6);
    const Dates = openDt.slice(6);

    return `${Year}.${Month}.${Dates}`;
};

async function MoviesPage({params}){
    const {movieId} = params;
    const DetailData = await GetMovieDetails(String(movieId));

    const EditDts = GetEditDts(DetailData.openDt);
    
    return (
        <div className={styles.MoviesWrapper}>
            <header className={styles.MoviesHeader}>
                <img src={DetailData.posters[0]} />
                <div className={styles.MoviesTitle}>
                    <div className={styles.TitleText}>
                        {DetailData.movieNm}
                    </div>
                    <div className={styles.TitleText}>
                        개봉 {EditDts} / {DetailData.showTm}분
                    </div>
                </div>
            </header>
            <main>
                <MoviesContents 
                    movieData={DetailData}
                />
            </main>
        </div>
    );
}

export default MoviesPage;