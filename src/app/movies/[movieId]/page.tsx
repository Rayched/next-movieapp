import { GetMovieDetails } from "../../../fetchs/fetchs";

async function MoviesPage({params}){
    const {movieId} = params;
    const DetailData = await GetMovieDetails(movieId);
    
    return (
        <div>Movies</div>
    );
}

export default MoviesPage;