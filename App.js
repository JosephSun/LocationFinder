import React from 'react';
import Search from './Search';
import Map from './Map';
import CurrentLocation from './CurrentLocation';
import LocationList from './LocationList';

class App extends React.Component {
  getInitialState() {
    // Extract the favorite locations from local storage
    let favorites = [];

    if (localStorage.favorites) {
      favorites = JSON.parse(localStorage.favorites);
    }

    // Paris will be the center

    return {
      favorites: favorites,
      currentAddress: 'Paris, France',
      mapCoordinates: {
        lat: 48.856614,
        lng: 2.3522219
      }
    };
  },

  toggleFavorite(address) {
    if(this.isAddressInFavorites(address)) {
      
    }
  }
}
