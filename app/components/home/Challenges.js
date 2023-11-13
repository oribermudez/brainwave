import React from "react";
import Card from "./ChallengeCard";
import challenges from "../../data-mocks/challenges";
import { Carousel } from "@material-tailwind/react";
 
const Challenges = () => {
 return(
  <>
    <div className="bg-royal w-full text-white pb-6">
      <h4 className="w-full font-semibold pl-32 pt-12">Challenges</h4>
      <Carousel transition={{ duration: 1.5 }}>
        <div className="flex w-full p-10 justify-around">
          {challenges.map((challenge) => (
            <div className="flex items-center" key={challenge.id}>
              <Card url={challenge.url} image={challenge.image} name={challenge.name} level={challenge.level}/>
            </div>
          ))}
        </div>
        <div className="flex w-full p-10 justify-around">
          {challenges.map((challenge) => (
            <div className="flex items-center" key={challenge.id}>
              <Card url={challenge.url} image={challenge.image} name={challenge.name} level={challenge.level}/>
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  </>
 );
}

export default Challenges;