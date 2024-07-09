import React from "react";
import styles from "./wallet.module.css";

function Wallet({ tokens }) {
  return (
    <div className={styles["card"]}>
      {/* <div className={styles["card__wrapper"]}></div> */}
      <div className="flex items-center gap-4">
        <svg
          className="w-6 h-6 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z"
            clip-rule="evenodd"
          />
        </svg>

        <div className={styles["card__title"]}>satyaprakash</div>
      </div>
      {/* <div className={styles["card__subtitle"]}>satyaprakash</div> */}
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
          {tokens} Tokens
        </span>{" "}
      </div>
    </div>
  );
}

export default Wallet;
