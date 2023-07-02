import Image from "next/image";
import styles from "./carousel.module.css";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function Carousel() {
  const aspectRatio = 1.363636;
  const width = 600;
  const height = width / aspectRatio;

  const testArticles = [
    {
      id: uuidv4(),
      title:
        "Navigating the Digital Frontier: A Deep Dive into Quantum Computing",
    },
    {
      id: uuidv4(),
      title:
        "AI and the Future of Work: Reimagining Industries through Machine Learning",
    },
    {
      id: uuidv4(),
      title: "Cybersecurity in the Era of IoT: Protecting Our Connected World",
    },
    {
      id: uuidv4(),
      title: "The Evolution of Blockchain: Disrupting Finance and Beyond",
    },
    {
      id: uuidv4(),
      title:
        "5G Revolution: The Next Generation of Connectivity and its Impact on Society",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Top Stories</h1>
      <div className={styles["top-container"]}>
        <div className={styles["top-container-left"]}>
          <div className={styles["top-stories"]}>
            <h3>
              Embracing the Technological Revolution: Innovations Shaping Our
              Future
            </h3>
            <p>
              The rapid advancement of technology continues to reshape our
              world, with groundbreaking innovations transforming industries and
              our daily lives. From artificial intelligence and blockchain to 5G
              and the Internet of Things, the latest technological developments
              are propelling us into an era of boundless possibilities. AI
              empowers machines to learn and make autonomous decisions, while
              blockchain ensures trust and transparency in transactions. The
              deployment of 5G networks promises unprecedented speed and
              connectivity, paving the way for a proliferation of IoT devices
              and immersive experiences. With digital health solutions
              revolutionizing healthcare and renewable energy technologies
              driving sustainability, we stand on the precipice of a thrilling
              future, brimming with enhanced efficiency, connectivity, and
              endless opportunities.
            </p>
            <button className={styles["read-more-btn"]}>
              <Link href={"/blog/"} className={styles["read-more-link"]}>
                Read More
              </Link>
            </button>
          </div>
          <div className={styles["top5-stories-container"]}>
            <ul className={styles["top5-stories"]}>
              {testArticles.map((article) => {
                return (
                  <li key={article.id} className={styles["top5-stories-li"]}>
                    <Link
                      className={styles["top5-stories-titles"]}
                      href={`blog/${article.id}`}
                    >
                      {article.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles["top-container-right"]}>
          <Image
            src="/images/carousel/test-image.jpg"
            alt="story-image"
            width={width}
            height={height}
            className={styles["top-story-image"]}
          />
        </div>
      </div>
    </div>
  );
}
