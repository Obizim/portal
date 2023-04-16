import Styles from "@/pages/resources/resources.module.css";
import Image from "next/image";
import data from '@/components/dummy.json'

export default function Resources() {
  return (
    <section className={Styles.resources}>
      <h2>Resources</h2>
      <div className={Styles.cards}>
        {data && data.map(res => (<article key={res.id} className={Styles.card}>
            <figure className={Styles.card_image}>
                <Image src={res.image} alt={res.title} width={350} height={150} style={{'objectFit': "cover"}}></Image>
            </figure>
            <div className={Styles.card_header}>
              <a href="#">{res.title}</a>
              <button className={Styles.read_more}>Read more</button>
            </div>
          </article>))}
          
        </div>
    </section>
  );
}
