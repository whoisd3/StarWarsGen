import React, { useState } from 'react';
import './App.css';

const StarWars = () => {
  const [loadedCharacter, setLoadedCharacter] = useState(false);
  const [name, setName] = useState(null);
  const [height, setHeight] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [affiliations, setAffiliations] = useState([]);
  const [image, setImage] = useState(null);

  const getNewCharacter = async () => {
    const randomNumber = Math.floor(Math.random() * 88) + 1; // Adjusted for the new API range
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Character data:', data);
      console.log('Image URL:', data.image);

      setName(data.name);
      setHeight(data.height);
      setHomeworld(data.homeworld || 'Unknown'); // Handle missing homeworld
      setAffiliations(data.affiliations || []); // Handle missing affiliations
      setImage(data.image);
      setLoadedCharacter(true);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div>
      {loadedCharacter && (
        <div>
          <h1>{name}</h1>
          <p>{height} cm</p>
          <p>Homeworld: {homeworld}</p>
          {image && <img src={image} alt={name} />}
          <ul>
            {affiliations.length > 0 ? (
              affiliations.map((affiliation, index) => (
                <li key={index}>{affiliation}</li>
              ))
            ) : (
              <li>No affiliations available</li>
            )}
          </ul>
        </div>
      )}
      <button
        type="button"
        onClick={getNewCharacter}
        className="btn"
      >
        Randomize Character
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;