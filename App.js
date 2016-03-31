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
      this.removeFromFavorites(address);
    }
    else {
      this.addToFavorites(address);
    }
  },

  addToFavorites(address) {

    let favorites = this.state.favorites;

    favorites.push({
      address: address,
      timestamp: Date.now()
    });

    this.setState({
      favorites: favorites
    });

    localStorage.favorites = JSON.stringify(favorites);
  },

  removeFromFavorites(address) {
    let favorites = this.state.favorites;
    let index = -1;

    for(let i = 0; i < favorites.length; i++) {
      if (favorites[i]. address == address) {
        index = i;
        break;
      }
    }

    // If it was found, remove it from the favorites array

    if(index !== -1) {
      favorites.splice(index, 1);

      this.setState({
        favorites:favorites
      });

      localStorage.favorites = JSON.stringify(favorites);
    }
  },

  isAddressInFavorites(address) {
    let favorites = this.state.favorites;

    for (let i = 0; i < favorites.length; i++) {
      if(favorites[i].address == address) {
        return true;
      }
    }

    return false;
  }





}
