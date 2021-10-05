import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.module.scss'

export default function index({ detail }) {
  const router = useRouter()
  const api_image = 'https://image.tmdb.org/t/p/w300'
  const { id, title, poster_path, vote_average } = detail

  const directDetailPage = () => {
    router.push('/movie/' + id)
  }

  return (

    <Link href={'/movie/' + id}>
      <a target="_blank">
      <div 
        className={styles.card}
        // onClick={directDetailPage}
      >
        <img src={api_image + poster_path} alt={title}/>

        <div className={styles.overlay}/>

        <div
          className={styles.text}
        >
          <p>{title}</p>
          <p
            className={styles.vote}
          >
            <i class="fas fa-star"></i> 
            {vote_average}
          </p>
        </div>
      </div>
      </a>
    </Link>
  )
}
