"use client"

import Challenges from "./components/home/Challenges";
import Hero from "./components/home/Hero";
import Modules from "./components/home/Modules";
import ProgressShortcut from "./components/home/ProgressShortcut";
import Achievements from "./components/home/Achievements";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Hero title="JavaScript Developer Path" />
      <ProgressShortcut />
      <Modules />
      <Challenges />
      <Achievements />
    </main>
  )
}

export default Home;
