import * as types from 'store/types'

const initialState = {
  movie: [],
  detailMovie: null
}

export const movieReducers = (state = initialState, action)=> {
  switch (action.type) {
    case types.SET_MOVIE:
      return {
        ...state,
        movie: state.movie.concat(action.payload)
      }

    case types.SET_DETAIL_MOVIE:
      return {
        ...state,
        detailMovie: action.payload
      }
    default: 
      return state;
  }
}