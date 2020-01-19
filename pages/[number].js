import React from 'react';
import axios from 'axios';
import Link from 'next/link';

const pokemon = ({ pokeman }) => {
  return (
    <>
      <div>
        <h1>{pokeman.name}</h1>
        <img
          src={pokeman.sprites.front_default}
          style={{ height: 400 }}
          alt=''
        />
        <img src={pokeman.sprites.front_shiny} style={{ height: 400 }} alt='' />
        <div>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
      </div>
    </>
  );
};

pokemon.getInitialProps = async ({ query }) => {
  const number = query.number;
  const pokeman = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${number}/`)
    .then(response => response.data);

  return { pokeman };
};

export default pokemon;
