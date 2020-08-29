import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I love {name}.</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://i.ytimg.com/vi/mB8c529pd80/maxresdefault.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://i.ytimg.com/vi/IsEVv1Jt2Ro/maxresdefault.jpg',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://i.ytimg.com/vi/6QQ67F8y2b8/maxresdefault.jpg',
    rating: 1.5
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://i.ytimg.com/vi/gpWSnNYF-rU/maxresdefault.jpg',
    rating: 4
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://i.ytimg.com/vi/2G5SAC3UI3M/maxresdefault.jpg',
    rating: 2
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;
