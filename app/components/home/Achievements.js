import React from "react";
import Card from "./AchievementCard";
import achievements from "../../data-mocks/achievements";
import { Carousel } from "@material-tailwind/react";
 
const Achievements = () => {
 return(
  <>
    <div className="bg-white w-full text-black pb-6">
      <h4 className="w-full font-semibold pl-32 pt-12">Achievements</h4>
      <Carousel transition={{ duration: 1.5 }}>
        <div className="flex w-full p-10 justify-around">
          {achievements.map((achievement) => (
            <div className="flex items-center" key={achievement.id}>
              <Card image={achievement.image} name={achievement.name} />
            </div>
          ))}
        </div>
        <div className="flex w-full p-10 justify-around">
          {achievements.map((achievement) => (
            <div className="flex items-center" key={achievement.id}>
              <Card url={achievement.url} image={achievement.image} name={achievement.name} level={achievement.level}/>
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  </>
 );
}

export default Achievements;