import Link from "next/link";
import { GetMovieDetails } from "../../../src/fetchs";
import styles from "../../styles/Movies.module.css"
import MovieVideo from "../../../components/movies/movie-videos";
import MoviesHeader from "../../../components/movies/MoviesHeader";
import MoviesInfo from "../../../components/movies/MoviesInfo";

interface I_DetailPageProps {
    plots: string;
    posters: string[];
    stills: string[];
};

async function DetailPage({params}){
    const {movieId} = await params;

    const Details = await GetMovieDetails(movieId);

    console.log(Details);

    return (
        <div className={styles.MoviesWrapper}>
            <h4 className={styles.PageText}>영화 상세정보</h4>
            <MoviesHeader 
                movieNm={Details.movieNm} 
                poster={Details.posters[0]}
                openDt={Details.openDt}
                showTm={Details.showTm}
            />
            <MoviesInfo 
                director={Details.directorNm}
                actors={Details.actors}
                genres={Details.genres}
            />
        </div>
    );
};

export default DetailPage;