import React from 'react';
import { Link } from 'react-router-dom';


export default function AvengersList(props) {
    const {avenger, avengerState} = props
    return (
        <div className="characters-list-wrapper">
            {props.avengers.map(avenger => (
                
                <div className="character-card" key={avenger.id}>
                    <img src={avenger.thumbnail} alt={avenger.name} />
                    <h2> 
                        <Link to={`/avengers/${avenger.id}`}>{avenger.name}</Link>
                    </h2>
                    <p>({avenger.nickname})</p>
                </div>
            ))}
            {console.log("AvengerList",props) /** This let me know that the array data was being passed to the avengerlist*/}
        </div>
    )
}

