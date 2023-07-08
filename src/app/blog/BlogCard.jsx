import styles from "./blogcard.module.css";
import Image from "next/image";

export default function BlogCard(props) {
  return (
    <div className={styles.container}>
      <Image
        src={"/images/blog-card/test-image.jpg"}
        alt="article image"
        width={100}
        height={100}
        className={styles["article-image"]}
      />
      <div className={styles.article}>
        <div className={styles.hero}>
          <h4 className={styles.category}>{props.article.category}</h4>
          <h1>{props.article.title}</h1>
        </div>
        <div className={styles.content}>
          <h5>{props.article.summary}</h5>
          <div className={styles.info}>
            <p>
              {props.article.author} {props.article.time} GMT+1 •{" "}
              {props.article.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
