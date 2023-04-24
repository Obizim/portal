import Link from "next/link";
import styles from '@/components/cards/jbcards.module.css'

export const JbCards = ({posts}) => {
    return (
      <section className={styles.cards}>
        {posts && posts.map(m => <Link key={m._id} href={`/job-boards/${m._id}`}>
        <div className={styles.card}>
                <div className={styles.contents}>
                    <div className={styles.cl}>
                        <p>{m.companyName}</p>
                        <p className={styles.posted}>Posted: {new Date(m.createdAt).toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'})}</p>
                    </div>
                    <h3>{m.jobTitle}</h3>
                    <div className={styles.cl}>
                        <p>{m.location}</p>
                        <p>{m.salary}</p>
                        <p className={styles.type}>{m.type}</p>
                    </div>
                    <div className={styles.description} dangerouslySetInnerHTML={{__html: m.desc}}></div>
                </div>
            </div>
            </Link>)}
        
      </section>
    );
  };