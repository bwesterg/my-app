import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                    src="images/pordoi.jpeg"
                    text="Historic Sass Pordoi"
                    label='History'
                    path='/services'
                />
                <CardItem 
                    src="images/furka.jpeg"
                    text="Climbing Paradise Furkapass"
                    label='Expert'
                    path='/services'
                />
            </ul>
            <ul className="cards__items">
                <CardItem 
                    src="images/Grimselsee.jpeg"
                    text="Grimselsee Side Road"
                    label='Intimidating'
                    path='/services'
                />
                <CardItem 
                    src="images/Colfosco.jpeg"
                    text="Beautiful Dolomites"
                    label='Intermediate'
                    path='/services'
                />
                <CardItem 
                    src="images/Stelvio.jpeg"
                    text="Chasing the Giro d'Italia"
                    label='Expert'
                    path='/services'
                />
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Cards;
