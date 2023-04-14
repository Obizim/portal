import Link from "next/link";
// import Image from 'next/image'
import { FiHome, FiMapPin, FiDollarSign } from 'react-icons/fi'
import styles from '@/components/cards/jbcards.module.css'

export const JbCards = () => {
    return (
      <section className={styles.cards}>
        <Link href="/jobs/[jbdetail]">
        <div className={styles.card}>
                <div className={styles.contents}>
                    <div className={styles.cl}>
                        <p><FiHome /> Linear</p>
                        <p className={styles.posted}>Posted: 2 days ago</p>
                    </div>
                    <h3>Junior Architect</h3>
                    <div className={styles.cl}>
                        <p><FiMapPin/> London</p>
                        <p>$30,000</p>
                        <p>time</p>
                    </div>
                    <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam voluptas cum assumenda perspiciatis quos. Fuga voluptas eum quisquam itaque magni. Vel inventore laudantium architecto magni officia illo sed veniam eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam voluptate est. Fugit voluptatem quasi ex alias eligendi hic unde ullam, facere quam ratione aliquam rerum temporibus eum culpa deserunt!</p>
                </div>
            </div>
            </Link>
      </section>
    );
  };