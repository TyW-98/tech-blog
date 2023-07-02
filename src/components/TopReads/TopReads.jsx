import styles from "./topreads.module.css";
import { v4 as uuidv4 } from "uuid";

export default function TopReads() {
  const testPopularArticles = [
    {
      id: uuidv4(),
      title:
        "How Ai is Revolutionizing Healthcare: Breakthroughs and Challenges",
    },
    {
      id: uuidv4(),
      title: "Decoding Quantum COmputing: The Future of Technology",
    },
    {
      id: uuidv4(),
      title:
        "The Rise of Metaverse: Redefining Virtual Interactions and Digital Spaces",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles["popular-reads"]}>
        <h3>Trending Now</h3>
        {testPopularArticles.map((article, index) => {
          return (
            <div className={styles["popular-story-container"]} key={article.id}>
              <div className={styles.ranking}>{index + 1}</div>
              <div className={styles["popular-story-title"]}>
                {article.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
