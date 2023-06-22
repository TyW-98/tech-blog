import Link from "next/link";

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
    <div className="navbar-container">
      <div className="navbar-branding">
        <Link href="/" className="navbar-link">
          TxInsider
        </Link>
      </div>

      <div className="navbar-navigation">
        <ul>
          {pages.map((page) => {
            return (
              <li key={page.id}>
                <Link href={page.url} className="navbar-link">
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
