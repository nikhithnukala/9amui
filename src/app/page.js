import Image from 'next/image'
import styles from './page.module.css'
import { Login } from '@/Login'
export default function Home() {
  return <div className={styles.clr}>
    <Login/>
  </div>
}
