import React from 'react';
import GameCard from './Gamecard';
import './gamecard.css'; 

const gamesData = [
  {
    name: 'FireBoy and WaterGirl',
    gamelink: 'https://www.coolmathgames.com/0-fireboy-and-water-girl-in-the-forest-temple',
    imageUrl: 'https://th.bing.com/th/id/OIP.snEOSQa55vuCUKlA2CNqGwHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    gifUrl: 'https://www.ramascreen.com/wp-content/uploads/2017/08/output_ul7Nrl.gif'
  },
 
  {
    name: 'FireBoy and WaterGirl 4:Crystal temple',
    gamelink: 'https://www.coolmathgames.com/0-fireboy-watergirl-4-crystal-temple',
    imageUrl: 'https://th.bing.com/th/id/OIP.5ov982Yi2zlE6YfyzhhVNQHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    gifUrl: 'https://pogogamesplay.com/wp-content/uploads/2019/03/FireBoyandWaterGirl4.gif'
  },
  {
    name: 'Subway Surfers',
    gamelink: 'https://poki.com/en/g/subway-surfers',
    imageUrl: 'https://th.bing.com/th/id/OIP.YSEUBp5d1EBwZ8z6iQF2jQHaKf?pid=ImgDet&rs=1',
    gifUrl: 'https://www.bing.com/th/id/OGC.f9618a7787d71f7bb2dc3fd1d5aea3e9?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2feC4jHcCCgK4Yo%2fgiphy.gif&ehk=32EB1xs%2fjSU9%2bzHQpGQ2PQbUbAptaUicmEVlcroJLwE%3d'
  },
  {
    name: 'FireBoy and WaterGirl',
    gamelink: 'https://www.coolmathgames.com/0-fireboy-and-water-girl-in-the-forest-temple',
    imageUrl: 'https://th.bing.com/th/id/OIP.snEOSQa55vuCUKlA2CNqGwHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    gifUrl: 'https://www.ramascreen.com/wp-content/uploads/2017/08/output_ul7Nrl.gif'
  },
  {
    name: 'Papas Freezeria',
    gamelink: 'https://www.coolmathgames.com/0-papas-freezeria',
    imageUrl: 'https://images.sftcdn.net/images/t_app-cover-m,f_auto/p/fe70256c-dcd0-11e6-be15-d1ca37779b0e/2655786986/papa-s-freezeria-to-go-screenshot.jpg',
    gifUrl: 'https://img.ibxk.com.br/2017/12/13/papas-freezeria-13161107308429.gif'
  },
  {
    name: 'FireBoy and WaterGirl',
    gamelink: 'https://www.coolmathgames.com/0-fireboy-and-water-girl-in-the-forest-temple',
    imageUrl: 'https://th.bing.com/th/id/OIP.snEOSQa55vuCUKlA2CNqGwHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    gifUrl: 'https://www.ramascreen.com/wp-content/uploads/2017/08/output_ul7Nrl.gif'
  },
  {
    name: 'FireBoy and WaterGirl',
    gamelink: 'https://www.coolmathgames.com/0-fireboy-and-water-girl-in-the-forest-temple',
    imageUrl: 'https://th.bing.com/th/id/OIP.snEOSQa55vuCUKlA2CNqGwHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    gifUrl: 'https://www.ramascreen.com/wp-content/uploads/2017/08/output_ul7Nrl.gif'
  },
  {
    name: 'FireBoy and WaterGirl',
    gamelink: 'https://www.coolmathgames.com/0-fireboy-and-water-girl-in-the-forest-temple',
    imageUrl: 'https://th.bing.com/th/id/OIP.snEOSQa55vuCUKlA2CNqGwHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    gifUrl: 'https://www.ramascreen.com/wp-content/uploads/2017/08/output_ul7Nrl.gif'
  },
  {
    name: 'FireBoy and WaterGirl',
    gamelink: 'https://www.coolmathgames.com/0-fireboy-and-water-girl-in-the-forest-temple',
    imageUrl: 'https://th.bing.com/th/id/OIP.snEOSQa55vuCUKlA2CNqGwHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    gifUrl: 'https://www.ramascreen.com/wp-content/uploads/2017/08/output_ul7Nrl.gif'
  },
  {
    name: 'FireBoy and WaterGirl',
    gamelink: 'https://www.coolmathgames.com/0-fireboy-and-water-girl-in-the-forest-temple',
    imageUrl: 'https://th.bing.com/th/id/OIP.snEOSQa55vuCUKlA2CNqGwHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    gifUrl: 'https://www.ramascreen.com/wp-content/uploads/2017/08/output_ul7Nrl.gif'
  },
  

];

const GameList = () => {
  return (
    <div className="game-list">
      {gamesData.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
    </div>
  );
};

export default GameList;
