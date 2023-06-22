import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  const pages = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Blog Post",
      url: "/blog",
    },
    {
      id: 3,
      name: "About Us",
      url: "/about-us",
    },
    {
      id: 4,
      name: "Contact",
      url: "/contact",
    },
    {
      id: 5,
      name: "Join Us",
      url: "/register",
    },
    {
      id: 6,
      name: "Login",
      url: "/dashboard",
    },
  ];

  return (
    <div className={styles.container}>
      <div>
        <Link href="/" className={`${styles.navlink} ${styles.branding}`}>
          TxInsider
        </Link>
      </div>

      <div className={styles.navigation}>
        <ul className={styles.navoptions}>
          {pages.map((page) => {
            return (
              <li key={page.id}>
                <Link href={page.url} className={styles.navlink}>
                  {page.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
