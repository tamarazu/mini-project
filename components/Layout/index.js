import styles from './index.module.scss'
import Link from 'next/link'
import React from 'react'

export default function Index({children}) {
  return (
    <div className={styles.layout}>
      <nav>
        <Link href="/">
          <a> Rebel WatchDB</a>
        </Link>
      </nav>
      <div
        className={styles.content}
      >
        {children}
      </div>
    </div>
  )
}
