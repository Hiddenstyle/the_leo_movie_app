import "../styles/MovieList.css"
const MovieList = ({movieData}) => {

    const POSTER_URL = "https://image.tmdb.org/t/p/w200";

    return(
        <div className="movieList">
            {
                movieData.map(
                    (movie) => (
                        <div className="movieItem" key={movie.id}>
                            <h1 className="title">{movie.title}</h1>
                            <img src={POSTER_URL + movie.poster_path} alt=""></img>
                        </div>
                    )
                )
            }
        </div>    
    )
}

export default MovieList