import styles from "./Card.module.css";
import { ImPhone } from "react-icons/im";
// import { IoIosText } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

const Card = () => {
  return (
    <section className={styles.card}>
      <div className={styles.contact}>
        <MdAccountCircle className={styles.profile} />
        <div className={styles.details}>
          <h3>Nama Kontak</h3>
          <p>08123456789</p>
        </div>
      </div>
      <div className={styles.action}>
        <button className={styles.btn}>
          <ImPhone className={styles.icon} />
        </button>
        <button className={styles.btn}>
          <MdEmail className={styles.icon} />
        </button>
      </div>
    </section>
  );
};

export default Card;
