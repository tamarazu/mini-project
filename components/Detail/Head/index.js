import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

export default function Head({ data }) {
  const api_image = 'https://image.tmdb.org/t/p'
  const { 
    poster_path, 
    title, 
    genres, 
    release_date, 
    runtime,
    overview
  } = data

  // release date
  const d = new Date(release_date)
  const date = d.getDate()
  const month = d.getMonth()
  const year = d.getFullYear()

  // runtime movie
  const hour = Math.floor(runtime/60)
  const minute = runtime - (hour*60)

return (
    <div
      className={styles.section}
    >
      <img src={api_image + '/w500' + poster_path }/>
      <div>
        <h1>{title} ({year})</h1>
        <div
          className={styles.categories}
        >
          {
            genres.length ? 
            genres.map(data => <p>{data.name}</p>)
            :
            <span></span>
          } |
          <p>{hour}h {minute}m</p>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  )
  return <span></span>
}
