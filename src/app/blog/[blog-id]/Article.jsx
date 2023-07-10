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
      "Artificial Intelligence (AI) has rapidly advanced in recent years, reshaping industries and revolutionizing our daily lives. From self-driving cars to voice-activated virtual assistants, AI has demonstrated its transformative power across various domains. In healthcare, AI is making a significant impact by analyzing vast amounts of medical data and identifying patterns that human experts might miss. This allows for more accurate diagnoses and the development of personalized treatment plans. AI-powered robots are also being used in surgeries, assisting surgeons with their precision and reducing the risk of errors, leading to improved patient outcomes.<br /><br />Furthermore, AI has the potential to revolutionize the field of transportation. Autonomous vehicles, driven by AI algorithms, are poised to transform the way we travel. Self-driving cars can navigate through complex road conditions and respond to real-time traffic data, leading to safer and more efficient transportation. These vehicles have the potential to reduce the number of accidents caused by human error and optimize traffic flow, thereby easing congestion and reducing emissions. As we move towards a more sustainable future, AI-powered transportation solutions will play a crucial role.<br /><br />In addition to healthcare and transportation, AI is transforming the way we interact with technology. Voice-activated virtual assistants like Siri, Alexa, and Google Assistant have become an integral part of our lives, providing us with instant access to information, entertainment, and smart home control. These virtual assistants leverage natural language processing and machine learning algorithms to understand and respond to human commands, making our interactions with technology more intuitive and seamless. They are constantly learning and improving, becoming better at understanding context and providing personalized experiences.<br /><br />As AI technologies continue to advance, the potential for its applications is limitless. AI has the ability to revolutionize industries, solve complex problems, and improve our quality of life. However, it is important to address ethical considerations and ensure responsible development and deployment of AI systems. Ensuring transparency, accountability, and fairness will be crucial in harnessing the full potential of AI for the benefit of humanity.",
    image: "test-image",
  };

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h5 className={styles.category}>{testArticle.category}</h5>
        <h1 className={styles.header}>{testArticle.title}</h1>
        <div className={styles["article-details-container"]}>
          <span className={styles["article-details"]}>
            <span className={styles["author-name"]}>{testArticle.author} </span>
            <span className={styles.symbol}>/</span> {testArticle.time} GMT+1 •{" "}
            {testArticle.date}
          </span>
        </div>
      </div>
      <Image
        src={`/images/article/${testArticle.image}.jpg`}
        alt="Article Image"
        width={100}
        height={100}
        className={styles["article-image"]}
      />
      <div className={styles.content}>
        {testArticle.content.split("<br /><br />").map((paragraph, index) => {
          return (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}
