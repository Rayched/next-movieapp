import styles from "../../app/styles/movies/Header.module.css";

interface MoviesHeaderProps {
    movieNm: string;
    poster: string;
    openDt: string;
    showTm: string;
};

function MoviesHeader({movieNm, poster, openDt, showTm}: MoviesHeaderProps){
    const Year = openDt.slice(0, 4);
    const Month = openDt.slice(4, 6);
    const Dates = openDt.slice(6);

    const EditDts = `${Year}.${Month}.${Dates}`;

    return (
        <div className={styles.MoviesHeader}>
            <img src={poster} />
            <div className={styles.MoviesTitle}>
                <div className={styles.TitleText}>{movieNm}</div>
                <div className={styles.TitleText}>개봉 {EditDts} / {showTm}분</div>
            </div>
        </div>
    );
};

export default MoviesHeader;