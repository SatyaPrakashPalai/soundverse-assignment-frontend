import React, { useState } from "react";
import styles from "./prompt-card.module.css";
function MarkCompleteCard({ prompt, setCompleted, completed }) {
  const handleClick = () => {
    setCompleted(true);
  };

  return (
    <div className={styles["card"]}>
      <div className={styles["card__border"]}></div>
      <div className={styles["card_title__container"]}>
        <span className={styles["card_title"]}>Maintain your streak</span>
        <p className={styles["card_paragraph"]}>Goals for the week.</p>
      </div>
      <hr className={styles["line"]} />
      <div className={styles["card_title__container"]}>
        <div className="w-full rounded-sm text-white">{prompt}</div>
      </div>
      <button onClick={handleClick} className={styles["button"]}>
        {completed ? "Completed" : "Mark as Complete"}
      </button>
    </div>
  );
}

export default MarkCompleteCard;
