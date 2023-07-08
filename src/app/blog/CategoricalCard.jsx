import styles from "./categoricalcard.module.css";
import Link from "next/link";

export default function CategoricalCard(props) {
  return (
    <div className={styles.container}>
      <h1>{props.category}</h1>
      <div className={styles["article-list"]}>
        <ul>
          {props.articles.map((article) => {
            return (
              <li key={article.id}>
                <Link href={`/blog/${article.id}`}>{article.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
