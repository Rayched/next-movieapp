import { GetMoviesData, I_KobisResult } from "../fetchs";

export default async function HomePage(){
    const Test: I_KobisResult = await GetMoviesData();

    console.log(Test);

    return (
        <div>
            <h4>Hello World</h4>
            <ul>
                {
                    Test.boxOfficeResult.dailyBoxOfficeList.map((data) => {
                        return <li key={data.movieCd}>{data.movieNm}</li>
                    })
                }
            </ul>
        </div>
    );
}