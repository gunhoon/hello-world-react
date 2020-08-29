import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I love {name}.</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://i.ytimg.com/vi/mB8c529pd80/maxresdefault.jpg'
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://i.ytimg.com/vi/IsEVv1Jt2Ro/maxresdefault.jpg'
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://i.ytimg.com/vi/6QQ67F8y2b8/maxresdefault.jpg'
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://i.ytimg.com/vi/gpWSnNYF-rU/maxresdefault.jpg'
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://i.ytimg.com/vi/2G5SAC3UI3M/maxresdefault.jpg'
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
