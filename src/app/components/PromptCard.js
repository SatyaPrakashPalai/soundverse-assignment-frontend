import React, { useState } from "react";
import styles from "./prompt-card.module.css";
function PromptCard({ setPrompt }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClickDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!text.trim()) {
        return;
      }
      setPrompt(text);
    }
  };

  const handleClick = () => {
    setPrompt(text);
  };

  return (
    <div className={styles["card"]}>
      <div className={styles["card__border"]}></div>
      <div className={styles["card_title__container"]}>
        <span className={styles["card_title"]}>Set a Challenge</span>
        <p className={styles["card_paragraph"]}>Goals for the week.</p>
      </div>
      <hr className={styles["line"]} />
      <div className={styles["card_title__container"]}>
        <textarea
          className="w-full rounded-md"
          placeholder="Type here..."
          onChange={handleChange}
          onKeyDown={handleClickDown}
        />
      </div>
      <button onClick={handleClick} className={styles["button"]}>
        Publish
      </button>
    </div>
  );
}

export default PromptCard;
