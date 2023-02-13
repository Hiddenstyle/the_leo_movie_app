import Header from './components/Header';
import MovieList from './components/MovieList';
import useFetch from './customHooks/useFetch';

const App = () => {

  const {loadedData} = useFetch("https://api.themoviedb.org/3/search/movie?api_key=6a7b1e38fa6f12bacae44de83e6d1908&query=goonies");

  return (
    <div className='appWrapper'>
      <Header />
      {loadedData && <MovieList movieData={loadedData}/>}
    </div>
  )
}
export default App;