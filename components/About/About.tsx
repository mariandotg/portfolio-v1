import { useSelector } from 'react-redux';
import { selectDataSections } from '../../app/store/slices/data';

import Image from 'next/image';
import mePic from '../../public/me.webp';

import Title from './Title';
import Description from './Description';
import Button from '../Buttons/Button';

const About = () => {
  const data = useSelector(selectDataSections);
  const { title, cta, description } = data.about;

  return (
    <section className='flex flex-col gap-4 tablet:grid tablet:grid-cols-3'>
      <div className='relative w-full aspect-square'>
        <Image
          className='rounded-base'
          src={mePic}
          layout='fill'
          priority={true}
          alt='Photo of me'
        />
      </div>
      <div className='flex flex-col gap-4 tablet:col-span-2 tablet:gap-8'>
        <Title title={title} />
        <Description description={description} />
        <Button variant={cta.variant}>{cta.cta}</Button>
      </div>
    </section>
  );
};

export default About;
