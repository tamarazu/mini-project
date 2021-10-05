import React, { useEffect } from 'react'
import styles from './index.module.scss'
import CardMovie from './CardMovie'

export default function Banner({ data }) {
  const { movie } = data

  useEffect(() => {
  }, [])

  return (
    <div
      className={styles.section}
    >
      <h3>Now Playing </h3>
      <div
        className={styles.row}
      >
        {
          movie ?
            movie.map((detail, index) => <CardMovie detail={detail} key={index}/>)
          :
          <span></span>
        }
      </div>
    </div>
  )
}
