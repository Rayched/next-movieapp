import styles from "../../app/styles/movies/Infos.module.css";

interface MoviesInfoProps {
    genres: string[];
    actors: string[];
    director: string;
};

function MoviesInfo({genres, actors, director}: MoviesInfoProps){
    return (
        <div className={styles.InfoContainer}>
            <div className={styles.InfoBox}>
                <div className={styles.InfoTitle}>감독</div>
                <div className={styles.InfoBody}>{director}</div>
            </div>
            <div className={styles.InfoBox}>
                <div className={styles.InfoTitle}>장르</div>
                <div className={styles.InfoBody}>{genres.join(", ")}</div>
            </div>
            <div className={styles.InfoBox}>
                <div className={styles.InfoTitle}>출연진</div>
                <div className={styles.InfoBody}>{actors.join(", ")}</div>
            </div>
        </div>
    );
};

export default MoviesInfo;