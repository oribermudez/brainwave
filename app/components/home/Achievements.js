import React from "react";
import Card from "./AchievementCard";
import achievements from "../../data-mocks/achievements";
 
const Achievements = () => {
 return(
  <>
    <div className="bg-white w-full text-black pb-6">
      <h4 className="w-full font-semibold pl-32 pt-12">Achievements</h4>
        <div className="flex w-full p-10 justify-around">
          {achievements.map((achievement) => (
            <div className="flex items-center" key={achievement.id}>
              <Card image={achievement.image} name={achievement.name} />
            </div>
          ))}
        </div>
    </div>
  </>
 );
}

export default Achievements;