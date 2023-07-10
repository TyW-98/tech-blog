import Subscribe from "@/components/subscribe/Subscribe";
import Article from "./Article";
import OtherArticles from "./OtherArticles";
import styles from "./page.module.css";

export default function BlogContent(props) {
  return (
    <main>
      <div className={styles.container}>
        <Article />
        <Subscribe />
        <OtherArticles />
      </div>
    </main>
  );
}
