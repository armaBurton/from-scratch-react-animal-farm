import React from 'react';
import backgroundImg from './background.png';
import AnimalList from '../AnimalList/AnimalList';
import './Main.css';

export default function Main(props) {


  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        <AnimalList animals = { props } />
      }
    </main>
  );
}
