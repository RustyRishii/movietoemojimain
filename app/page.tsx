"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";

const apikey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

export default function Home() {
  const [movieTitle, setMovieTitle] = useState("");
  const [emojiResult, setEmojiResult] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apikey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "You will be provided with movie or TV series titles, and your task is to translate it into emojis. Do not use any regular text. Do your best with emojis only",
              },
              {
                role: "user",
                content: movieTitle,
              },
            ],
            temperature: 0.8,
            max_tokens: 64,
            top_p: 1,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setEmojiResult(result.choices[0]?.message?.content || "No result");
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src="/MovieToEmoji.png" alt="Logo" width={240} height={240} />
      <p className="text-white m-5 text-3xl md:max-w-2xl text-center">
        Convert Movie or TV series names into Emojis
      </p>
      <div className="flex flex-col items-center md:flex-row md:items-stretch">
        <input
          className="border rounded-md p-2 text-white bg-black text-2xl mb-3 md:mb-0  w-full md:w-auto"
          type="text"
          placeholder="Enter movie title"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <p className="text-3xl mx-5">=</p>
        <div className="border rounded-md p-2 flex items-center justify-center bg-black w-full md:w-80 text-white text-2xl">
          {emojiResult}
        </div>
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="
        m-5 p-5 justify-center
            bg-neutral-900 rounded-md bg-black-600
             text-white text-2xl"
      >
        Submit
      </button>
    </div>
  );
}
