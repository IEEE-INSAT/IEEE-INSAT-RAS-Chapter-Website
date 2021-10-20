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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="#">Explore</a>
        </div>
      </section>
    </div>
  );
}
