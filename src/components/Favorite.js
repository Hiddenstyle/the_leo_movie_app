import { useState } from "react";
import "../styles/Favorite.css"

const Favorite = () => {

    const [active, setActive] = useState(false);

    const toggleFav = () => {
        console.log("Click");
        setActive(!active);
    }

    return ( 
        <div className="material-symbols-outlined" onClick={toggleFav} >favorite</div>
    );
}
 
export default Favorite;