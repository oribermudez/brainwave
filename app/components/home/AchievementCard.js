import Image from 'next/image';

const AchievementCard = ({ image = "/assets/medal1.png", name = "String Master" }) => {
  return (
    <div className='relative group'>
      <div className='flex flex-col justify-center drop-shadow-lg rounded-lg transition-transform group-hover:scale-105'>
        <div className='relative flex flex-col justify-center'>
          <Image src={image} width={180} height={207} alt={name} />
          <h4 className='py-2 text-sm text-center font-semibold text-black'>{name}</h4>
        </div>
      </div>
    </div>
  );
}

export default AchievementCard;
