import styles from "./categoricalcard.module.css";
import Link from "next/link";

export default function CategoricalCard(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{props.category}</h1>
      <div>
        <ul className={styles["article-list"]}>
          {props.articles.map((article) => {
            return (
              <li key={article.id} className={styles.article}>
                <Link href={`/blog/${article.id}`} className={styles.title}>
                  {article.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
