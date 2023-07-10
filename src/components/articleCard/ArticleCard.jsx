import styles from "./articlecard.module.css";
import Image from "next/image";

export default function ArticleCard(props) {
  return (
    <div className={styles.container}>
      <Image
        src={`/images/blog-card/${props.article.image}`}
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
            <span className={styles.name}>{props.article.author}</span>{" "}
            <span className={styles["created-info"]}>
              {props.article.time} GMT+1 • {props.article.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
