import React from 'react';


function RestaurantList(props) {
  const {restaurant} = {...props};

  return (

    <div>

      <h1>

        {restaurant.map(x => (<p> {x.name} </p>))}
        {restaurant.map(x => (<p> {x.Ubication} </p>))}

      </h1>


    </div>


  );
}

export default RestaurantList;
