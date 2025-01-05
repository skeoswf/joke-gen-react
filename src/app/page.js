"use client"

import Image from "next/image";
import styles from "./page.module.css";
import getJoke from "@/api/jokeApi";
import { useEffect, useState } from "react";

export default function Home() {

  const [joke, setJoke] = useState({})
  const [buttonText, setButtonText] = useState('click for a new joke')
  const [showSetup, setShowSetup] = useState(true);

  const getTheJoke = () => {
    if (showSetup) {
      setShowSetup(false);
      setButtonText('click for a new joke');
    } else {
      getJoke().then((newJoke) => {
        setJoke(newJoke);
        setShowSetup(true);
        setButtonText('next?')
        console.log(newJoke);
      });
    }
  }

  return (
    <div>
      <div id="joke-container">
        {showSetup ? joke.setup : joke.delivery}
      </div>
      <button onClick={getTheJoke} id="joke-button">{buttonText}</button>
    </div>
  );
}
