import React from 'react';

const AvengerDetails = props => {
    return (
        <div className="details-container">
            <p className="details">
                {props.details}
            </p>
        </div>

    );
}

export default AvengerDetails;