"use client";

import { Fragment, useState } from "react";
import styles from "./page.module.css";

export default function Contact() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [messageInfo, setMessageInfo] = useState({
    subject: "",
    message: "",
  });

  return (
    <main>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <form className={styles["contact-form"]}>
          <div className={styles["details"]}>
            {Object.keys(details).map((detailField) => {
              return (
                <div key={detailField}>
                  <label
                    htmlFor={detailField}
                    className={styles["detail-field-label"]}
                  >
                    {detailField}
                  </label>
                  <input
                    type={detailField === "email" ? "email" : "text"}
                    id={detailField}
                    name={detailField}
                    value={details[detailField]}
                    className={styles["input-field"]}
                  ></input>
                </div>
              );
            })}
          </div>
          <div className={styles["message-info"]}>
            {Object.keys(messageInfo).map((messageField) => {
              return (
                <div key={messageField}>
                  <label
                    htmlFor={messageField}
                    className={styles["message-field-label"]}
                  >
                    {messageField}
                  </label>
                  <input
                    type="text"
                    id={messageField}
                    name={messageField}
                    value={messageInfo[messageField]}
                    className={
                      messageField === "message"
                        ? "message-field"
                        : "subject-field"
                    }
                  ></input>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </main>
  );
}
