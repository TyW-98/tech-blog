import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  const iconSize = 37.5;

  return (
    <div className={styles.container}>
      <div className={styles["social-icons-container"]}>
        <Image
          src="./icons/github-icon.svg"
          width={iconSize}
          height={iconSize}
          alt="github"
          className={styles["social-icons"]}
        />
        <Image
          src="./icons/twitter-icon.svg"
          width={iconSize}
          height={iconSize}
          alt="twitter"
          className={styles["social-icons"]}
        />
        <Image
          src="./icons/youtube-icon.svg"
          width={iconSize}
          height={iconSize}
          alt="youtube"
          className={styles["social-icons"]}
        />
      </div>
      <h5>©TyW-98. All rights reserved.</h5>
    </div>
  );
}
