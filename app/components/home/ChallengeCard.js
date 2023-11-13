import Image from 'next/image';
import Link from 'next/link';

const ChallengeCard = ({ url, image, name, level }) => {
  return (
    <>
      <div className='flex flex-col justify-center drop-shadow-lg rounded-lg transition-transform hover:scale-105'>
        <Link href={url} className='relative flex flex-col justify-center'>
          <Image src={image} width={180} height={205} alt={name} />
          <h4 className='py-2 text-sm text-center font-semibold'>{name}</h4>
        </Link>
      </div>
    </>
    
  );
}

export default ChallengeCard;
