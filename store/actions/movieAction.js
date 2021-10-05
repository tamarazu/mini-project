import * as types from 'store/types'
import axios from 'axios'

const link = process.env.NEXT_PUBLIC_API_LINK
const api_key = process.env.NEXT_PUBLIC_API_KEY

export const setMovie = (value) => async dispatch => {
  dispatch({
    type: types.SET_MOVIE,
    payload: value
  })
}

export const setSimilliarMovie = (value) => async dispatch => {
  dispatch({
    type: types.SET_SIMILLIAR_MOVIE,
    payload: value
  })
}

export const setDetailMovie = (value) => async dispatch => {
  dispatch({
    type: types.SET_DETAIL_MOVIE,
    payload: value
  })
}

export const getMovies = (value) => async dispatch => {
  try {
    const { data } = await axios({
      method: 'get',
      url: link + `/movie/now_playing`,
      params: {
        api_key,
        page: value.page
      }
    })
    dispatch(setMovie(data.results))
  } catch (err) {
    console.log(err.message);
  }
}

export const getDetailMovie = (value) => async dispatch => {
  try {
    const { data } = await axios({
      method: 'get',
      url: link + `/movie/${value.id}`,
      params: {
        api_key,
        page: value.page
      }
    })
    dispatch(setDetailMovie(data))
  } catch (err) {
    console.log(err.message);
  }
}

export const getSimilliarMovie = (value) => async dispatch => {
  try {
    const { data } = await axios({
      method: 'get',
      url: link + `/movie/${value.id}/similar`,
      params: {
        api_key,
        page: value.page
      }
    })
    console.log(data);
    dispatch(setSimilliarMovie(data.results))
  } catch (err) {
    console.log(err.message);
  }
}

export const getCreditsMovie = (value) => async dispatch => {
  try {
    const { data } = await axios({
      method: 'get',
      url: link + `/movie/${value.id}/similar`,
      params: {
        api_key,
        page: value.page
      }
    })
    console.log(data);
    dispatch(setSimilliarMovie(data.results))
  } catch (err) {
    console.log(err.message);
  }
}