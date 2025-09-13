import Link from "next/link";
import { GetMovieDetails } from "../../../fetchs";

interface I_DetailPageProps {
    plots: string;
    posters: string[];
    stills: string[];
};

async function DetailPage({params}){
    const {movieId} = await params;

    const MovieDetailData = await GetMovieDetails(movieId);

    return (
        <div>
            <h3>Detail Page</h3>
            <h4>{MovieDetailData.movieNm}</h4>
            <ul>
               {
                MovieDetailData.vods.map((urls, idx) => {
                        return (
                            <li key={`video${idx}`}>
                                <Link href={urls}>
                                    예고편 {idx + 1}
                                </Link>
                            </li>
                        );
                })
               } 
            </ul>
            <Link href="/">Home</Link>
        </div>
    );
};

export default DetailPage;