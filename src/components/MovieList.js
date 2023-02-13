const MovieList = ({movieData}) => {
    return(
        <div className="movieList">
            {
                movieData.map(
                    (movie) => (
                        <div className="movieItem" key={movie.id}>
                            <h1>{movie.title}</h1>
                            <h4>{movie.release_date.substr(0,4)}</h4>
                            <p>{movie.overview}</p>
                        </div>
                    )
                )
            }
        </div>    
    )
}

export default MovieList