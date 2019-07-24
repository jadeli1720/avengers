import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
            <h1>Welcome to the Avengers Portal</h1>
            <h4>Danger! This is classified information!</h4>
            <Link to ="/avengers">Enter</Link>
        </div>
    );
}

