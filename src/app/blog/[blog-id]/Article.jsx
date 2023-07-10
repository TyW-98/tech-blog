import styles from "./article.module.css";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export default function Article() {
  const testArticle = {
    id: uuidv4(),
    title:
      "The Future of Artificial Intelligence: Exploring Its Boundless Potential",
    category: "Artificial Intelligence",
    author: "John Smith",
    date: "June 20, 2023",
    time: "9:00A.M.",
    content:
      "Artificial Intelligence (AI) has come a long way in recent years, and its potential for the future is truly boundless. From self-driving cars to voice-activated virtual assistants, AI is reshaping industries and revolutionizing our daily lives.\n\nOne of the key areas where AI is making a significant impact is in healthcare. With the ability to analyze vast amounts of medical data and identify patterns, AI is assisting in diagnosing diseases and developing personalized treatment plans. AI-powered robots are even being used in surgeries, improving precision and reducing risks.\n\nIn the field of transportation, AI is paving the way for autonomous vehicles. These self-driving cars have the potential to make our roads safer, reduce traffic congestion, and increase fuel efficiency. Companies like Tesla and Waymo are at the forefront of this technological revolution.\n\nAI is also transforming the way we interact with technology. Voice-activated virtual assistants like Siri, Alexa, and Google Assistant have become commonplace, providing us with information, entertainment, and control over smart devices. Natural language processing and machine learning algorithms enable these virtual assistants to understand and respond to human commands.\n\nAs AI continues to advance, ethical considerations are also coming to the forefront. Ensuring the responsible and ethical use of AI technologies is crucial to prevent misuse and protect privacy. It is essential to establish regulations and guidelines to govern the development and deployment of AI systems.\n\nIn conclusion, the future of artificial intelligence holds immense potential. From healthcare to transportation to everyday technology, AI is transforming industries and enhancing our lives. As researchers and engineers continue to push the boundaries of AI, we can expect even more groundbreaking advancements that will shape the future of our society.",
    image: "test-image",
  };

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h5 className={styles.category}>{testArticle.category}</h5>
        <h1 className={styles.header}>{testArticle.title}</h1>
        <div>
          <span className={styles["article-details"]}>
            {testArticle.author} / {testArticle.time} GMT+1 • {testArticle.date}
          </span>
        </div>
        <Image
          src={`/images/article/${testArticle.image}.jpg`}
          alt="Article Image"
          width={100}
          height={100}
          className={styles["article-image"]}
        />
        <div className={styles.content}>{testArticle.content}</div>
      </div>
    </div>
  );
}
