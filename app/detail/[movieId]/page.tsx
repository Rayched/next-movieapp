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

    console.log(MovieDetailData);

    return (
        <div>
            <h3>Detail Page</h3>
            <h4>MovieId: {movieId}</h4>
            <Link href="/">Home</Link>
        </div>
    );
};

export default DetailPage;