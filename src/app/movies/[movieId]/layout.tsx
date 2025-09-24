import { Params } from "next/dist/server/request/params";
import { GetMovieDetails } from "../../../fetchs/fetchs";
import styles from "../../styles/movies/Movies.module.css";
import MoviesHeader from "../../../components/movies/MoviesHeader";
import { usePathname } from "next/navigation";
import NestedBtns from "../../../components/movies/NestedBtns";

interface I_MoviesLayoutProps {
    params: Params;
    children: React.ReactNode;
};

async function MoviesLayout({params, children}: I_MoviesLayoutProps){
    const {movieId} = params;
    const Details = await GetMovieDetails(String(movieId));

    return (
        <div className={styles.MoviesWrapper}>
            <MoviesHeader 
                movieNm={Details.movieNm}
                openDt={Details.openDt}
                showTm={Details.showTm}
                poster={Details.posters[0]}
            />
            <NestedBtns movieId={Details.movieId}/>
            {children}
        </div>
    );
};

export default MoviesLayout;