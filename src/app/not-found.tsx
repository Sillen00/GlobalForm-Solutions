"use client"
import Image from "next/image"
import Button, { IconType } from "~/app/_components/Button"
import styles from "./not-found.module.scss"

export default function NotFound() {
  return (
    <div className={styles.error_container}>
      <Image
        className={styles.image}
        src='/404error.png'
        alt='404'
        width={300}
        height={300}
        priority
      />
      <h2>
        <b>Oh snap!</b> It seems like something went wrong.
      </h2>
      <p>The page you're looking for is lost in a pile of Forms.</p>
      <Button className={styles.button} icon={IconType.Left} href='/'>
        Return Home
      </Button>
    </div>
  )
}
