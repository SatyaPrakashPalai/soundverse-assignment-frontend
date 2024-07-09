"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import PromptCard from "./components/PromptCard";
import MarkCompleteCard from "./components/MarkCompleteCard";
import Tracker from "./components/Tracker";
import Wallet from "./components/Wallet";
import config from "./config";

export default function Home() {
  console.log(config.apiUrl);
  const [streak, setStreak] = useState(0);
  const [prompt, setPrompt] = useState(
    "Write a story about a cat who can talk"
  );
  const [completed, setCompleted] = useState(false);
  const [tokens, setTokens] = useState(0);
  const [days, setDays] = useState(3);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}/user`, {
        params: { username: "satyaprakash" },
      });
      if (response.status === 200) {
        setStreak(response.data.user.streak.count);
        setTokens(response.data.user.tokens);
      } else {
        console.error("Error fetching streak:", response.data);
      }
    } catch (error) {
      console.error("Error fetching streak:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  useEffect(() => {
    if (streak >= 3) {
      setDays(7);
    } else {
      setDays(3);
    }
  }, [streak]);

  useEffect(() => {
    if (completed) {
      const completeTask = async () => {
        try {
          const response = await axios.post(`${config.apiUrl}/complete-task`, {
            username: "satyaprakash",
          });

          if (response.status === 200) {
            await fetchUser();
          } else {
            console.error("Error completing task:", response.data);
          }
        } catch (error) {
          console.error("Error completing task:", error);
        } finally {
          console.log("streak", streak);
        }
      };

      completeTask();
    }
  }, [completed]);

  useEffect(() => {
    const resetCompletedAtMidnight = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // Set to next midnight

      const timeUntilMidnight = midnight - now;

      setTimeout(() => {
        setCompleted(false);
        setInterval(() => {
          setCompleted(false);
        }, 24 * 60 * 60 * 1000); // Repeat every 24 hours
      }, timeUntilMidnight);
    };

    resetCompletedAtMidnight();
  }, []);

  return (
    <main className="flex min-h-screen justify-center gap-10 p-24">
      <div className="flex flex-col gap-10">
        <PromptCard setPrompt={setPrompt} />
        <MarkCompleteCard
          prompt={prompt}
          setCompleted={setCompleted}
          completed={completed}
        />
      </div>
      <div className="flex flex-col gap-10">
        <Tracker prompt={prompt} streak={streak} days={days} />
        <Wallet tokens={tokens} />
      </div>
    </main>
  );
}
