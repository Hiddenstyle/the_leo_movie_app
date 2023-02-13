import { useState } from 'react';
import './styles/App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search value", searchTerm);
  }

  return (
    <div className='header'>
      <h1 className='headerLogo'>LeoMovies</h1>

      <form className='searchForm'>
        <input type="text" placeholder='Enter movie name' onChange={(event) => setSearchTerm(event.target.value)} />
        <button onClick={handleSearch}>Search</button> 
      </form>
    </div>      
  );

}

export default App;
