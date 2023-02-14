import "../styles/MovieList.css"
const MovieList = ({movieData}) => {

    const POSTER_URL = "https://image.tmdb.org/t/p/w200";

    return(
        <div className="movieList">
            {
                movieData.map(
                    (movie) => (
                        <div className="movieItem" key={movie.id}>
                            <img className="poster" src={POSTER_URL + movie.poster_path} alt=""></img>
                            <h1 className="title">{movie.title}</h1>
                        </div>
                    )
                )
            }
        </div>    
    )
}

export default MovieList