import * as types from 'store/types'

const initialState = {
  movie: []
}

export const galaxcio = (state = initialState, action)=> {
  switch (action.type) {
    // case types.SET_POINT_GALAXIO:
    //   return {
    //     ...state,
    //     point: action.payload
    //   }

    default: 
      return state;
  }
}