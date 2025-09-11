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
            <h4>MovieNm: {MovieDetailData.movieNm}</h4>
            <ul>
                {
                    MovieDetailData.stills.map((imgURL, idx) => {
                        return (
                            <li key={`img${idx}`}>
                                <img src={imgURL} width={"100"} />
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