import React from "react";

function Popup({ selected, closePopup}) {
    return(
        <section className="popup">
            <div className="content">
                <h2>{selected.Titel} <span>({selected.Year})</span></h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster}></img>
                    <p>{selected.Plot}</p>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup
