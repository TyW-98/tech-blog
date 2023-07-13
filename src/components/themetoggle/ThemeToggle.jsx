"use client";

import { useContext } from "react";
import styles from "./themetoggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <div
      className={`${styles.container} ${
        theme === "dark" ? styles["dark-div"] : styles["light-div"]
      }`}
      onClick={handleTheme}
    >
      <div className={styles.moon}>🌙</div>
      <div
        className={`${styles.indicator} ${
          theme === "dark" ? styles.dark : styles.light
        }`}
      ></div>
      <div className={styles.sun}>😎</div>
    </div>
  );
}
