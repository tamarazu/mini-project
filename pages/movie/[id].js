import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailMovie, getSimilliarMovie } from 'store/actions/movieAction'
import Head from 'components/Detail/Head'
import ListMovie from 'components/Detail/ListMovie'

export default function DetailPage() {
  const router = useRouter()
  const { query } = router
  const { id } = query
  const dispatch = useDispatch()
  const { detailMovie, movie } = useSelector(state => state.movie)
  const api_image = 'https://image.tmdb.org/t/p/'

  useEffect(() => {
    if (id) {
      dispatch(getDetailMovie({id}))
      dispatch(getSimilliarMovie({id}))
    }
  }, [id])

  return (
    <div>
      {
        detailMovie ?
        <>
          <Head data={detailMovie}/>
          <ListMovie data={movie}/>
        </>
        :
        <span></span>
      }
    </div>
  )
}
