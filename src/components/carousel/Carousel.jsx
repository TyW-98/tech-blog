import Image from "next/image";
import styles from "./carousel.module.css";

export default function Carousel() {
  return (
    <div className={styles.container}>
      <h1>Top Stories</h1>
      <div className={styles["top-container"]}>
        <div className={styles["top-stories"]}>
          <h3>
            Embracing the Technological Revolution: Innovations Shaping Our
            Future
          </h3>
          <p>
            The rapid advancement of technology continues to reshape our world,
            with groundbreaking innovations transforming industries and our
            daily lives. From artificial intelligence and blockchain to 5G and
            the Internet of Things, the latest technological developments are
            propelling us into an era of boundless possibilities. AI empowers
            machines to learn and make autonomous decisions, while blockchain
            ensures trust and transparency in transactions. The deployment of 5G
            networks promises unprecedented speed and connectivity, paving the
            way for a proliferation of IoT devices and immersive experiences.
            With digital health solutions revolutionizing healthcare and
            renewable energy technologies driving sustainability, we stand on
            the precipice of a thrilling future, brimming with enhanced
            efficiency, connectivity, and endless opportunities.
          </p>
          <button className={styles["read-more-btn"]}>Read More</button>
        </div>
        <Image
          src="/images/carousel/test-image.jpg"
          alt="story-image"
          width={450}
          height={330}
          className={styles["top-story-image"]}
        />
      </div>
    </div>
  );
}
