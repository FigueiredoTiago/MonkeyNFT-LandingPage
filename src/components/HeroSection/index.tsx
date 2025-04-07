import styles from "./styles.module.css";
import background from "../../assets/img/backgroundHero.svg";
import Container from "../Container/index";
import monkey from "../../assets/img/MonkeyHero.svg";

const index = () => {
  return (
    <section className={styles.hero_section}>
      <img
        src={background}
        alt="background"
        className={styles.background_img}
      />

      <Container>
        {/* colocar navbar aq */}

        <section className={styles.hero_content}>
          <div className={styles.headline}>
            <p>THE LARGEST MONKEY NFT MARKETPLACE</p>
            <h1 className={styles.title}>
              Discover rare
              <span> monkey NFTs</span>
            </h1>
            <p>
              The world’s largest marketplace for monkey character collections
              non fungible token NFTs.
            </p>
          </div>

          <div className={styles.hero_card}>
            <img src={monkey} alt="monkey" />
          </div>
        </section>



      </Container>
    </section>
  );
};

export default index;
