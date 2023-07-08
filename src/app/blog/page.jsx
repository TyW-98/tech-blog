import BlogCard from "./BlogCard";
import styles from "./page.module.css";
import { v4 as uuidv4 } from "uuid";

export default function Blog() {
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
    },
  ];

  return (
    <main>
      <div>
        <h2>The Latest TxInsider Article</h2>
        <div className={styles["article-list-container"]}>
          {testArticle.map((article) => {
            return <BlogCard article={article} key={article.id} />;
          })}
        </div>
      </div>
    </main>
  );
}
