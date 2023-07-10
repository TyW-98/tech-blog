import Link from "next/link";
import styles from "./page.module.css";
import { v4 as uuidv4 } from "uuid";
import CategoricalCard from "./CategoricalCard";
import ArticleCard from "@/components/articleCard/ArticleCard";

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

  const testCategory = [
    {
      id: uuidv4(),
      category: "Artificial Intelligence",
      articles: [
        {
          id: uuidv4(),
          title: "Advancements in AI: The Future of Machine Learning",
        },
        {
          id: uuidv4(),
          title: "Ethical Considerations in AI Development",
        },
        {
          id: uuidv4(),
          title:
            "Natural Language Processing: Bridging the Gap Between Humans and Machines",
        },
        {
          id: uuidv4(),
          title: "AI in Healthcare: Transforming Diagnosis and Treatment",
        },
      ],
    },
    {
      id: uuidv4(),
      category: "Quantum Computing",
      articles: [
        {
          id: uuidv4(),
          title:
            "Introduction to Quantum Computing: A Revolution in Computing Power",
        },
        {
          id: uuidv4(),
          title:
            "Quantum Algorithms: Solving Complex Problems with Quantum Computers",
        },
        {
          id: uuidv4(),
          title:
            "Quantum Supremacy: Unleashing the Potential of Quantum Technology",
        },
        {
          id: uuidv4(),
          title: "Quantum Cryptography: Securing Data in the Quantum Age",
        },
      ],
    },
    {
      id: uuidv4(),
      category: "Blockchain",
      articles: [
        {
          id: uuidv4(),
          title:
            "Exploring the Potential of Blockchain Technology in Supply Chain Management",
        },
        {
          id: uuidv4(),
          title: "Smart Contracts: Automating Transactions with Blockchain",
        },
        {
          id: uuidv4(),
          title:
            "Blockchain in Finance: Revolutionizing the Financial Industry",
        },
        {
          id: uuidv4(),
          title:
            "Blockchain and Identity Management: Enhancing Security and Privacy",
        },
      ],
    },
    {
      id: uuidv4(),
      category: "Internet of Things",
      articles: [
        {
          id: uuidv4(),
          title: "IoT and Smart Homes: Transforming the Way We Live",
        },
        {
          id: uuidv4(),
          title:
            "Securing IoT Devices: Addressing the Challenges of IoT Security",
        },
        {
          id: uuidv4(),
          title:
            "Industrial IoT: The Role of IoT in Revolutionizing Manufacturing",
        },
        {
          id: uuidv4(),
          title: "IoT in Healthcare: Enhancing Patient Care and Monitoring",
        },
      ],
    },
    {
      id: uuidv4(),
      category: "Cybersecurity",
      articles: [
        {
          id: uuidv4(),
          title:
            "The Rising Threats of Cyber Attacks: Protecting Digital Assets",
        },
        {
          id: uuidv4(),
          title:
            "Ethical Hacking: Strengthening Cybersecurity through Vulnerability Assessments",
        },
        {
          id: uuidv4(),
          title:
            "Data Privacy in the Digital Age: A Look into Cybersecurity Regulations",
        },
        {
          id: uuidv4(),
          title: "Cloud Security: Safeguarding Data in the Cloud Environment",
        },
      ],
    },
    {
      id: uuidv4(),
      category: "Data Science",
      articles: [
        {
          id: uuidv4(),
          title:
            "Introduction to Data Science: Unlocking Insights from Big Data",
        },
        {
          id: uuidv4(),
          title: "Machine Learning Algorithms: Building Intelligent Systems",
        },
        {
          id: uuidv4(),
          title:
            "Data Visualization: Communicating Insights through Visual Representations",
        },
        {
          id: uuidv4(),
          title:
            "Predictive Analytics: Forecasting Trends and Patterns in Data",
        },
      ],
    },
  ];

  return (
    <main>
      <div className={styles.container}>
        <section className={styles["latest-article-container"]}>
          <div className={styles.header}>
            <h2>LATEST ARTICLES</h2>
          </div>
          <div className={styles["article-list-container"]}>
            {testArticle.map((article) => {
              return (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className={styles.link}
                >
                  <div className={styles.article}>
                    <ArticleCard article={article} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <section className={styles["category-container"]}>
          {testCategory.map((cat) => {
            return (
              <div className={styles["category-card"]} key={cat.id}>
                <CategoricalCard
                  category={cat.category}
                  articles={cat.articles}
                />
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
