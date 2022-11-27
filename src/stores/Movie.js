import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  currentMovie: {},
  actionMovies: [], //id: 28
  crimeMovies: [], //id:80
  dramaMovies: [], //id: 18
  wishlist: [],
  isWishlist: false,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState: { value: initialStateValue },
  reducers: {
    setActionMovies: function (state, action) {
      state.value.actionMovies = [...action.payload];
    },
    setCrimeMovies: function (state, action) {
      state.value.crimeMovies = [...action.payload];
    },
    setDramaMovies: function (state, action) {
      state.value.dramaMovies = [...action.payload];
    },
    setCurrentMovie: function (state, action) {
      state.value.currentMovie = action.payload;
    },

    setWishlist: function (state, action) {
      state.value.wishlist.push(action.payload);
      localStorage.setItem('wishList', JSON.stringify(state.value.wishlist));
    },

    delFromWishlist: function (state, action) {
      state.value.wishlist = state.value.wishlist.filter((item) => item.id !== action.payload);
      localStorage.setItem('wishList', JSON.stringify(state.value.wishlist));
    },

    //todo
    setIsWishlist: function (state, action) {
      const list = JSON.parse(localStorage.getItem('wishList'));
      list &&
        list.length &&
        list.forEach(function (element) {
          if (element.id === action.payload) {
            state.value.isWishlist = true;
          } else {
            state.value.isWishlist = false;
          }
        });
    },
  },
});

export const { setActionMovies, setCrimeMovies, setDramaMovies, setCurrentMovie, setWishlist, delFromWishlist, setIsWishlist } = movieSlice.actions;

export default movieSlice.reducer;
