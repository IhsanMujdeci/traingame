import React from 'react'
import styles from './index.module.scss'

type Props = {
  children: React.ReactNode
}

export function LinearGradient({children}: Props){
  return <div className={styles.LinearGradient}>
    {children}
  </div>
}