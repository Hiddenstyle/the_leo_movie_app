import { useState } from "react";
import '../styles/Header.css';

const Header = ({getData}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        (searchTerm && getData(searchTerm));
    };
    
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
 
export default Header;