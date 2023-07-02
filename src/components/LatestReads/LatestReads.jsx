import styles from "./latestreads.module.css";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Link from "next/link";

export default function LatestReads() {
  const testLatestArticles = [
    {
      id: uuidv4(),
      title: "The Dawn of Quantum Internet: A New Connectivity Paradigm",
      image: "test-image",
      summary:
        "Explore the nascent world of quantum internet, a revolutionary technology promising unparalleled levels of security and speed. This piece delves into how quantum entanglement might redefine our concept of connectivity.",
    },
    {
      id: uuidv4(),
      title: "Artificial Intelligence in Agriculture: Reaping the Benefits",
      image: "test-image",
      summary:
        "Unearth the transformative role of AI in modern agriculture. This article investigates how machine learning and predictive analytics are revolutionizing crop management, yield predictions, and farm sustainability.",
    },
    {
      id: uuidv4(),
      title: "Virtual Reality in Education: A Leap into Future Learning",
      image: "test-image",
      summary:
        " Examine the dynamic impact of virtual reality on education. This feature discusses how immersive VR experiences are altering teaching methodologies, enhancing student engagement, and making learning more interactive.",
    },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Latest News</h3>
      <div className={styles["latest-news"]}>
        {testLatestArticles.map((article) => {
          return (
            <div key={article.id} className={styles["article-container"]}>
              <h3>
                <Link
                  href={`/blog/${article.id}`}
                  className={styles.subheading}
                >
                  {article.title}
                </Link>
              </h3>
              <div className={styles["info-container"]}>
                <Image
                  src={`/images/latestArticles/${article.image}.jpg`}
                  alt="article image"
                  width={150}
                  height={150}
                  className={styles["article-image"]}
                />
                <p className={styles.summary}>{article.summary}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
