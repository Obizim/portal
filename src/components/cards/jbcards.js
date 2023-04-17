import Link from "next/link";
// import { FiHome, FiMapPin } from 'react-icons/fi'
import styles from '@/components/cards/jbcards.module.css'

export const JbCards = ({posts}) => {
    return (
      <section className={styles.cards}>
        {posts && posts.map(m => <><Link key={m._id} href="/jobs/[jbdetail]">
        <div className={styles.card}>
                <div className={styles.contents}>
                    <div className={styles.cl}>
                        <p>{m.companyName}</p>
                        <p className={styles.posted}>Posted: 2 days ago</p>
                    </div>
                    <h3>{m.jobTitle}</h3>
                    <div className={styles.cl}>
                        <p>{m.location}</p>
                        <p>{m.salary}</p>
                        <p className={styles.type}>part-time</p>
                    </div>
                    <p className={styles.description}>{m.desc}</p>
                </div>
            </div>
            </Link></>)}
        
      </section>
    );
  };