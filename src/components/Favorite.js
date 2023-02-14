import "../styles/Favorite.css"

const Favorite = () => {

    const toggleFav = (e) => {
        e.target.classList.toggle("favSelected");
    };

    return ( 
        <div className="material-symbols-outlined" onClick={toggleFav} >favorite</div>
    );
}
 
export default Favorite;