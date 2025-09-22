import styles from "../../styles/movies/Movies.module.css";

export default function DetailLoading(){
    return (
        <div className={styles.MoviesLoading}>
            <h4>영화 상세 정보를 불러오는 중 입니다</h4>
            <h4>잠시만 기다려주세요....</h4>
        </div>
    );
};