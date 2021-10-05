import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

export default function Head({ data }) {
  const api_image = 'https://image.tmdb.org/t/p'
  const { 
    poster_path, 
    backdrop_path,
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
      style={{
        backgroundImage: `url(${api_image + '/original' + backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      }}
    >
      <section className={styles.overlay}>
        <img src={api_image + '/w500' + poster_path }/>
        <div
          className={styles.description}
        >
          <h1>{title} <span>({year})</span></h1>
          <div
            className={styles.categories}
          >
            {
              genres.length ? 
              genres.map((data, index) =>
              <>
                {
                  (index !== (genres.length -1)) ?
                  <>
                    <p>&nbsp;{data.name},</p>
                  </>
                  :
                  <p>&nbsp;{data.name}</p>
                }
              </>
              )
              :
              <span></span>
            }
            <i className="fas fa-circle"></i>
            <p>{hour}h {minute}m</p>
          </div>
          <p
            className={styles.overview}
          >{overview}</p>
        </div>
      </section>
    </div>
  )
  return <span></span>
}
