import React from 'react';

function Food({ fav }) {
  return <h3>I love { fav }.</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Food fav='kimchi' />
      <Food fav='ramen' />
      <Food fav='samgiopsal' />
      <Food fav='chukumi' />
    </div>
  );
}

export default App;
