import React from "react";
import Card from "./ModuleCard";
import modules from "../../data-mocks/modules";
 
const Modules = () => {
 return(
  <>
    <h4 className="w-full text-black font-semibold pl-36 pt-12">Modules</h4>
    <div className="flex w-full p-10 justify-center">
      {modules.map((module, index) => (
        <div className="flex items-center" key={module.id}>
          <Card url={module.url} image={module.image} name={module.name} progress={module.progress}/>
          {index !== modules.length -1 && <div className={`border-2 border-dashed ${ module.progress === 100 ? 'border-t-royal' : 'border-t-powderBlue'} w-44`} />}
        </div>
      ))}
    </div>
  </>
 );
}

export default Modules;