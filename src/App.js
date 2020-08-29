import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I love {name}.</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://i.ytimg.com/vi/mB8c529pd80/maxresdefault.jpg'
  },
  {
    name: 'Samgyeopsal',
    image: 'https://i.ytimg.com/vi/IsEVv1Jt2Ro/maxresdefault.jpg'
  },
  {
    name: 'Bibimbap',
    image: 'https://i.ytimg.com/vi/6QQ67F8y2b8/maxresdefault.jpg'
  },
  {
    name: 'Doncasu',
    image: 'https://i.ytimg.com/vi/gpWSnNYF-rU/maxresdefault.jpg'
  },
  {
    name: 'Kimbap',
    image: 'https://i.ytimg.com/vi/2G5SAC3UI3M/maxresdefault.jpg'
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
