import styles from "../../styles/movies/Movies.module.css";
import MoviesHeader from "../../../components/movies/MoviesHeader";
import { GetMovieDetails } from "../../../fetchs/fetchs";
import MoviesInfo from "../../../components/movies/MoviesInfo";

interface I_DetailPageProps {
    plots: string;
    posters: string[];
    stills: string[];
};

const OpenDtsEdit = (OpenDt?: string) => {
    const Year = OpenDt.slice(0, 4);
    const Month = OpenDt.slice(4, 6);
    const Dates = OpenDt.slice(6);
    
    return `${Year}.${Month}.${Dates}`;
};

async function DetailPage({params}){
    const {movieId} = await params;

    const Details = await GetMovieDetails(movieId);

    console.log(Details);

    return (
        <div className={styles.MoviesWrapper}>
            <div className={styles.PageText}>영화 상세정보</div>
            <MoviesHeader 
                movieNm={Details.movieNm}
                openDt={Details.openDt}
                showTm={Details.showTm}
                poster={Details.posters[0]}
            />
            <MoviesInfo 
                director={Details.directorNm}
                genres={Details.genres}
                actors={Details.actors}
            />
        </div>
    );
};

export default DetailPage;