const Hero = ({ title }) => {

  return (
    <div className="md:bg-hero bg-cover h-60 w-full flex items-end">
      <div className="bg-gradient-to-r from-emerald to-transparent w-full h-14 flex items-center p-6">
        <p className="text-lg pl-28">{title}</p>
      </div>
    </div>
  )
}

export default Hero;
