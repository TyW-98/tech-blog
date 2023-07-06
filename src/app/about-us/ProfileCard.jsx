import styles from "./profilecard.module.css";
import Image from "next/image";

export default function ProfileCard(props) {
  return (
    <div className={styles.container}>
      <Image
        src={`/images/profile-picture/${props.image}.png`}
        alt="profile picture"
        width={100}
        height={100}
        className={styles["profile-picture"]}
      />
      <div className={styles.info}>
        <h3 className={styles.name}>{props.name}</h3>
        <h5 className={styles.position}>{props.position}</h5>
      </div>
    </div>
  );
}
