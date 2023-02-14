import { useEffect, useState } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import useFetch from './customHooks/useFetch';

const App = () => {

  const [data, setData] = useState(null);
  
  const getData = (quearyData) => {
    setData("https://api.themoviedb.org/3/search/movie?api_key=6a7b1e38fa6f12bacae44de83e6d1908&query=" + quearyData)
  }

  const {loadedData} = useFetch(data);

  return (
    <div className='appWrapper'>
      <Header getData={getData}/>
     {loadedData && <MovieList movieData={loadedData}/>}
    </div>
  )
}
export default App;