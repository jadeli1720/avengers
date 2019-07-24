import React from 'react';
import { Route, Link } from 'react-router-dom';

import AvengerDetails from './AvengerDetails';

export default function AvengerPage(props) {
    const id = props.match.params.id;
    // Changes avengers.find to props.avengers.find() with render props
    const avenger = props.avengers.find(avenger => `${avenger.id}` === id);

    return(
        <div className="avengerPage">
            <img
                className="character-image"
                src={avenger.img}
                alt ={avenger.name}
            />

            <div className="character-info-wrapper">
                <h1>{avenger.name}</h1>
                <h4>{avenger.nickname}</h4>
                {/* <p>{avenger.description}</p> */}
                {/**Refactoring the above to add in nested Routes to the page. Then adding the components that correspond to the nested routes */}
            </div>
            <Link to={`/avengers/${props.match.params.id}/details`} >Info</Link>
            <Link to={`/avengers/${props.match.params.id}/movies`} >Movies</Link>

            <Route path="/avengers/:id/details" render={props => <AvengerDetails details={avenger.description} />} />
            <Route path="/avengers/:id/movies" render={props => } />
        </div>
    )
}