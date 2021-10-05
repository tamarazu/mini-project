import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getMovies
} from 'store/actions/movieAction'
import InfiniteScroll from 'react-infinite-scroller';

import Layout from 'components/Layout/index'
import Banner from 'components/Banner'

export default function Home() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { asPath } = router
  const [page, setPage] = useState(1)
  const {
    movie
  } = useSelector(state => state.movie)

  const loadMoreAction = () => {
    dispatch(getMovies({ page: page + 1 }))
    setPage(page + 1)
  }

  useEffect(() => {
    if (!movie.length) {
      dispatch(getMovies({ page: 1 }))
    }
  }, [dispatch, movie, asPath])

  return (
      <Layout>
        <InfiniteScroll
        initialLoad={false}
        loadMore={loadMoreAction}
        hasMore={true}
        loader={(
          <h1>Loading...</h1>
        )}
      >
        <Banner data={{movie}}/>
      </InfiniteScroll>
      </Layout>
  )
}
