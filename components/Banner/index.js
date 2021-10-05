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
      <p> Banner</p>
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
