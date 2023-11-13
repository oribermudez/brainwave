import Image from 'next/image';
import Link from 'next/link';
import { Progress } from "@material-tailwind/react";

const ModuleCard = ({ url, image, name, progress }) => {

  const progressImage = (progress) => {
    switch (progress) {
      case 100:
        return "/assets/done.png";
      case 0:
        return "/assets/pending.png";
      default:
        return "/assets/in-progress.png";
    }
  };

  return (
    <>
      <div className='mb-6'>
        <div className='flex flex-col justify-center drop-shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105'>
          <Link href={url} className='relative flex flex-col justify-center'>
            <Image src={progressImage(progress)} width={21} height={21} alt="Progress Icon" className='absolute right-3 top-3' />
            <Image src={image} width={180} height={205} alt={name} />
            <h4 className='py-2 text-sm text-center text-black font-semibold'>{name}</h4>
          </Link>
        </div>
        <div className='flex justify-center mt-2'>
          <Progress color="teal" value={progress} className='!h-[6px]'/>
        </div>
      </div>
    </>    
  );
}

export default ModuleCard;
