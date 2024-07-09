import React from "react";
import styles from "./tracker.module.css";

function Tracker({ streak, prompt, days }) {
  const progressPercentage = (streak / days) * 100;
  return (
    <div className={styles["card"]}>
      {/* <div className={styles["card__wrapper"]}></div> */}
      <div className={styles["card__title"]}>Compose Daily and Win Tokens</div>
      <div className={styles["card__subtitle"]}>
        {prompt}! Earn 500 tokens after 3 days and an extra 1000 tokens after 7
        days. Stay creative and keep composing to unlock your rewards
      </div>
      <div className={styles["card__indicator"]}>
        <svg
          className="w-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.5 6L5.25 5.25H18L18.75 6V7.5H19.5L20.25 8.25V11.25V12V15.75V18.75L19.5 19.5H5.25L4.5 18.75V8.25V6ZM18.75 15.75H15.75C14.5074 15.75 13.5 14.7426 13.5 13.5C13.5 12.2574 14.5074 11.25 15.75 11.25H18.75V9H18H6V18H18.75V15.75ZM17.25 6.75V7.5H6V6.75H17.25ZM15 13.5C15 13.0858 15.3358 12.75 15.75 12.75H18.75V14.25H15.75C15.3358 14.25 15 13.9142 15 13.5Z"
              fill="#ffffff"
            ></path>{" "}
          </g>
        </svg>
        <span className={styles["card__indicator-amount"]}>
          {`Day ${streak} of ${days}`}{" "}
          {days === 7 ? "(1000 Tokens)" : "(500 Tokens)"}
        </span>{" "}
      </div>
      <div className={styles["card__progress"]}>
        <progress max="100" value={progressPercentage}></progress>
      </div>
    </div>
  );
}

export default Tracker;
