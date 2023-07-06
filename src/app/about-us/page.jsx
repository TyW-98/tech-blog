import ProfileCard from "./ProfileCard";
import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
  const testTeamProfile = [
    {
      name: "Jennifer Lawson",
      position: "Chief Technology Officer",
      image: "f1",
    },
    {
      name: "Ethan James",
      position: "Machine Learning Engineer",
      image: "m1",
    },
    {
      name: "Noah Anderson",
      position: "IT Project Manager",
      image: "m2",
    },
    {
      name: "Emily Wilson",
      position: "Senior Data Scientist",
      image: "f2",
    },
    {
      name: "Samuel Kim",
      position: "Cloud Solutions Architect",
      image: "m3",
    },
    {
      name: "Sara Chang",
      position: "UX/UI Designer",
      image: "f3",
    },

    {
      name: "Benjamin Martinez",
      position: "DevOps Engineer",
      image: "m4",
    },
    {
      name: "Ava Smith",
      position: "Full Stack Developer",
      image: "f4",
    },
  ];
  return (
    <main>
      <Image
        src="/images/about/banner.jpg"
        alt="Banner Image"
        width={100}
        height={100}
        className={styles.banner}
      />
      <div className={styles.container}>
        <div className={styles.left}>
          <h3 className={styles.heading}>Who Are We?</h3>
          <p>
            TxInsider is a diverse, global collective of tech enthusiasts,
            innovators, coders, data scientists, and cybersecurity experts. We
            are united by our unending fascination with the dynamic world of
            technology and our commitment to demystify it for a wider audience.
            We believe that the future lies in the digital landscape, and we are
            passionate about empowering individuals to navigate that landscape
            with confidence and curiosity.
            <br></br>
            <br></br>
            Our team hails from various corners of the tech world, bringing
            unique perspectives and expert insights to the table. We thrive at
            the intersection of innovation and accessibility, making it our
            mission to stay at the cutting edge of the tech sphere. We aim to be
            more than just observers; we strive to be active participants in
            shaping the future of technology.
          </p>
        </div>
        <div className={styles.right}>
          <h3 className={styles.heading}>What We Do?</h3>
          <p>
            At TxInsider, we make the complex world of technology accessible to
            all. Whether you're a seasoned tech guru or a novice just beginning
            your digital journey, our platform is designed to engage, educate,
            and inspire. We provide well-researched articles, in-depth tech
            guides, and interactive forums that foster a vibrant community of
            learners and innovators.
            <br></br>
            <br></br>
            Beyond sharing information, we strive to facilitate meaningful
            discussions, promote digital literacy, and spur innovation. We
            understand the potential of technology to transform lives and
            societies, and we are committed to making that potential a reality
            for our audience. Through our work, we aim to empower individuals to
            not just keep pace with technological advancement but to take an
            active role in shaping it. At TxInsider, we're not just about
            envisioning the future—we're about making it happen.
          </p>
        </div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["our-vision"]}>
          <h3 className={styles.heading}>Our Vision</h3>
          <p>
            At TxInsider, we envision ourselves as the digital compass guiding
            technology enthusiasts and professionals around the globe. We aspire
            to be more than just a tech news platform - we aim to be a thriving
            community where ideas are nurtured, knowledge is exchanged, and
            innovation is celebrated. We are committed to breaking down complex
            tech concepts into accessible information, fostering intellectual
            curiosity, and nurturing a passion for technology in our diverse
            readership.
            <br></br>
            <br></br>
            Our goal is to light up the path towards technological enlightenment
            with our rich content, insightful expert analyses, and in-depth tech
            news coverage. We want to stimulate thought, inspire innovation, and
            empower our readers to explore the limitless possibilities of
            technology. In pursuit of this vision, we set ourselves the
            following missions:
            <br></br>
            <br></br>
          </p>
          <p>
            Join us as we strive to make technology more fascinating and
            approachable than ever before. Together, we can power the future,
            today.
          </p>
        </div>
        <div>
          <h3 className={styles.heading}>Meet the Team</h3>
          <div className={styles["teams-container"]}>
            {testTeamProfile.map((profile) => {
              return (
                <ProfileCard
                  key={profile.name}
                  name={profile.name}
                  image={profile.image}
                  position={profile.position}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
