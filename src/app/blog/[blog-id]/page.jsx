import Subscribe from "@/components/subscribe/Subscribe";
import Article from "./Article";
import styles from "./page.module.css";
import ArticleCard from "@/components/articleCard/ArticleCard";
import { v4 as uuidv4 } from "uuid";

export default function BlogContent(props) {
  const testArticle = [
    {
      id: uuidv4(),
      title: "The Future of Artificial Intelligence in Healthcare",
      category: "Artificial Intelligence",
      summary:
        "Discover how AI is revolutionizing the healthcare industry and transforming patient care.",
      author: "John Smith",
      date: "2023-06-15",
      time: "09:30AM",
      image: "test-image.jpg",
    },
    {
      id: uuidv4(),
      title: "The Latest Advancements in Quantum Computing",
      category: "Quantum Computing",
      summary:
        "Explore the cutting-edge developments in quantum computing and its potential applications.",
      author: "Emily Johnson",
      date: "2023-06-16",
      time: "14:15PM",
      image: "test-image.jpg",
    },
    {
      id: uuidv4(),
      title: "Blockchain Technology: Revolutionizing Data Security",
      category: "Blockchain",
      summary:
        "Learn how blockchain is reshaping the landscape of data security and trust in digital transactions.",
      author: "Michael Brown",
      date: "2023-06-17",
      time: "11:45AM",
      image: "test-image.jpg",
    },
    {
      id: uuidv4(),
      title: "Cybersecurity Best Practices: Protecting Your Digital Assets",
      category: "Cybersecurity",
      summary:
        "Learn essential cybersecurity practices to safeguard your digital assets from threats and vulnerabilities.",
      author: "Emily Thompson",
      date: "2023-06-20",
      time: "4:00PM",
      image: "test-image.jpg",
    },
  ];

  return (
    <main>
      <div className={styles.container}>
        <Article />
        <Subscribe />
        <div className={styles["other-articles-container"]}>
          {testArticle.map((article) => {
            return (
              <div key={article.id}>
                <ArticleCard article={article} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
