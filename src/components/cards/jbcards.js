import Link from "next/link";
// import Image from 'next/image'
import styles from '@/components/cards/jbcards.module.css'

export const JbCards = () => {
    return (
      <section className={styles.cards}>
        <Link href="/jobs/[jbdetail]">
        <div className={styles.card}>
                <div className={styles.card_image}>
                    <img src="https://images.unsplash.com/photo-1471421298428-1513ab720a8e" alt="" />
                </div>

                <div className={styles.contents}>
                    <div className={styles.cl}>
                        <p>Linear</p>
                        <p>2 days ago</p>
                    </div>
                    <h3>Junior Architect</h3>
                    <div className={styles.cl}>
                        <p>London</p>
                        <p>$30,000</p>
                    </div>
                    <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam voluptas cum assumenda perspiciatis quos. Fuga voluptas eum quisquam itaque magni. Vel inventore laudantium architecto magni officia illo sed veniam eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam voluptate est. Fugit voluptatem quasi ex alias eligendi hic unde ullam, facere quam ratione aliquam rerum temporibus eum culpa deserunt!</p>
                </div>
            </div>
            </Link>
      </section>
    );
  };