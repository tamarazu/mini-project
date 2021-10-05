import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailMovie, getSimilliarMovie } from 'store/actions/movieAction'
import HeadComponent from 'components/Detail/Head'
import ListMovie from 'components/Detail/ListMovie'
import Layout from 'components/Layout/index'
import Head from 'next/head'

export default function DetailPage() {
  const router = useRouter()
  const { query } = router
  const { id } = query
  const dispatch = useDispatch()
  const { detailMovie, similliarMovie } = useSelector(state => state.movie)
  const api_image = 'https://image.tmdb.org/t/p/'

  useEffect(() => {
    if (id) {
      dispatch(getDetailMovie({id}))
      dispatch(getSimilliarMovie({id}))
    }
  }, [id])

  return (
    <Layout>
      <Head>
        <title>{detailMovie? detailMovie.title : 'Rebel WatchDB'}</title>
      </Head>
      {
        detailMovie ?
        <>
          <HeadComponent data={detailMovie}/>
          <ListMovie data={similliarMovie}/>
        </>
        :
        <span></span>
      }
    </Layout>
  )
}
