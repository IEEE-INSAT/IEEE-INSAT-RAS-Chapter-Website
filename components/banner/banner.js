import Link from "next/link";
import styles from "../banner/banner.module.css";
export default function Banner() {
  return (
    <div>
      <section className={styles.showcase}>
        <video muted loop autoPlay>
          <source src="/videos/banner-video-3.mp4" />
        </video>
        <div className={styles.overlay}></div>
        <div className={styles.text}>
          <h2>IEEE RAS </h2>
          <h3>INSAT</h3>
          <p>“Our ambitions exceed Elon Musk's”</p>
          <Link href="/about">
            <a >Explore</a>
          </Link>
        </div>
      </section>
    </div>
  );
}
