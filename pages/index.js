import React from 'react';
import axios from 'axios';
import Link from 'next/link';

const Home = ({ pokemon }) => (
  <div className='hero'>
    <h1>Pokemon!</h1>
    {pokemon.map((pokeman, i) => {
      return (
        <p>
          <Link href={`/pokemon/${i + 1}`}>
            <a>
              {i + 1}. {pokeman.name}
            </a>
          </Link>
        </p>
      );
    })}
  </div>
);

Home.getInitialProps = async () => {
  const pokemon = await axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=964`)
    .then(response => response.data.results);

  return { pokemon };
};

export default Home;
