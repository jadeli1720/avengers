import React from 'react';


export default function AvengersList(props) {
    // In order to gain access to the Data.js and use props, must set avengers = to props so that the data passes through along with match, history and location from the render props 
    const {avengers} = props
    return (
        <div className="characters-list-wrapper">
            {/** Because of the const statement above, we can use props.avengers to map. We have access to the array in Data.js*/}
            {props.avengers.map(avenger => (
                
                <div className="character-card" key={avenger.id}>
                    <img src={avenger.thumbnail} alt={avenger.name} />
                    {/* <h2> 
                        <Link to={`/avengers/${avenger.id}`}>{avenger.name}</Link> will be replaced with below code because function on line 27 does essentially the same thing
                    </h2> */}
                    <div className="character-name" onClick={() => routeToAvenger(props, avenger)}>{avenger.name}</div>
                    <p>({avenger.nickname})</p>
                </div>
            ))}
            {console.log("AvengerList",props) /** This let me know that the array data was being passed to the AvengerList*/}
        </div>
    )
}

//Using plain vanilla js to use the built in history object
function routeToAvenger(props, avenger) {
    props.history.push(`/avengers/${avenger.id}`)
}

