import styles from "../styles/home/Home.module.css"
export default function HomeLoading(){
    return (
        <div className={styles.HomeLoading}>
            <h4>영화 데이터 받아오는 중...</h4>
        </div>
    );
}