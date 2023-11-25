import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section>
      <div>
        <img
          className={styles.banner}
          src="/src/assets/banner.png"
          alt="banner"
          width={1200}
        />
      </div>
    </section>
  );
};

export default Banner;
