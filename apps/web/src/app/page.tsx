import Image from 'next/image'
import styles from './page.module.css'
import { Test } from 'mocha'
import Testimonial from '@/components/Testimonial/page'
import Hero from '@/components/Hero/page'


export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Testimonial />
    </main>
  )
}
