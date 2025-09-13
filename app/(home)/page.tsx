import Link from "next/link";
import { GetMoviesData } from "../../fetchs";

export default async function HomePage(){
    const Test = await GetMoviesData();

    return (
        <div>
            <h4>Hello World</h4>
            <ul>
                {
                    Test.map((data) => {
                        return (
                            <li key={data.movieId}>
                                <Link href={`/movies/${data.movieId}`}>
                                    <img src={data.posters[0]} width={"100"}/>
                                    {data.movieNm}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}