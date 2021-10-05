import * as types from 'store/types'

const initialState = {
  movie: [],
  similliarMovie: [],
  detailMovie: null,
  creditsMovie: []
}

export const movieReducers = (state = initialState, action)=> {
  switch (action.type) {
    case types.SET_MOVIE:
      return {
        ...state,
        movie: state.movie.concat(action.payload)
      }
    
    case types.SET_SIMILLIAR_MOVIE:
      return {
        ...state,
        similliarMovie: action.payload
      }

    case types.SET_DETAIL_MOVIE:
      return {
        ...state,
        detailMovie: action.payload
      }

    case types.SET_CREDITS_MOVIE:
      return {
        ...state,
        creditsMovie: action.payload
      }
    default: 
      return state;
  }
}