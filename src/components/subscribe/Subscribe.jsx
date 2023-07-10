"use client";
import { Fragment, useEffect, useState } from "react";
import styles from "./subscribe.module.css";
import Image from "next/image";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setsubmitted] = useState(false);

  function handleEmailInput(event) {
    const { value } = event.target;
    setEmail((prevEmail) => {
      return {
        value,
      };
    });
  }

  function handleSubmit(event) {
    setsubmitted(true);
  }

  return (
    <div className={styles.container}>
      {submitted ? (
        <Fragment>
          <div className={styles.left}>
            <Image
              className={styles.submittedIcon}
              alt="submited icon"
              width={100}
              height={100}
              src={"/images/subscribe/submitted.gif"}
            />
          </div>
          <div className={styles.right}>
            <h3>
              Thank you for subscribing to our newsletter! We're excited to have
              you on board.
            </h3>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className={styles.left}>
            <Image
              className={styles.mailIcon}
              alt="mail icon"
              width={100}
              height={100}
              src={"/images/subscribe/newsletter-mailbox.png"}
            />
          </div>
          <div className={styles.right}>
            <div className={styles["text-container"]}>
              <h3 className={styles.heading}>
                Join the Tech Innovator's Digest Today
              </h3>
              <h5 className={styles.subheading}>
                Get daily curated insights and breakthroughs from our gurus.
                Power up your tomorrow, today.
              </h5>
            </div>
            <div>
              <input
                type="email"
                className={styles["email-field"]}
                placeholder="email-address"
                onChange={handleEmailInput}
              />
              <button
                className={styles.subscribe}
                type="submit"
                onClick={handleSubmit}
              >
                Join Now
              </button>
            </div>
            <div className={styles.tNc}>
              <p>
                By clicking “Join Now”, you accept our Terms of Service and
                Privacy Policy. You can opt-out at any time.
              </p>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
