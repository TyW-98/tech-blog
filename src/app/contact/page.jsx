"use client";

import { Fragment, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

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

  function splitFieldName(fieldName) {
    const word = fieldName.split(/(?=[A-Z])/);
    const capitaliseWord = word.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitaliseWord.join(" ");
  }

  return (
    <main>
      <div className={styles.container}>
        <Image
          src="/images/contact/contact-us-banner.jpg"
          alt="Banner Image"
          width={100}
          height={100}
          className={styles.banner}
        />
        <h1 className={styles.heading}>Reach Out to Us</h1>
        <form className={styles["contact-form"]}>
          <div className={styles["details"]}>
            {Object.keys(details).map((detailField) => {
              return (
                <div key={detailField} className={styles.field}>
                  <label
                    htmlFor={detailField}
                    className={styles["detail-field-label"]}
                  >
                    {splitFieldName(detailField)}
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
                    {splitFieldName(messageField)}
                  </label>
                  {messageField === "message" ? (
                    <textarea
                      type="text"
                      id={messageField}
                      name={messageField}
                      value={messageInfo[messageField]}
                      className={styles[`${messageField}-field`]}
                      rows={10}
                    ></textarea>
                  ) : (
                    <input
                      type="text"
                      id={messageField}
                      name={messageField}
                      value={messageInfo[messageField]}
                      className={styles[`${messageField}-field`]}
                    ></input>
                  )}
                </div>
              );
            })}
          </div>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
