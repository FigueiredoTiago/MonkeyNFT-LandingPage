import styles from "./styles.module.css";
import HeroSection from "../../components/HeroSection/index";

const index = () => {
  return (
    <main className={styles.container}>
      {/* <IntroSection /> */}
      <HeroSection />
    </main>
  );
};

export default index;
