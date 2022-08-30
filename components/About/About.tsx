import { useSelector } from 'react-redux';
import { selectDataSections } from '../../app/store/slices/data';
import Title from './Title';
import Description from './Description';
import Button from '../Buttons/Button';

const About = () => {
  const data = useSelector(selectDataSections);
  const { title, cta, description } = data.about;

  return (
    <section className='flex flex-col gap-4 tablet:grid tablet:grid-cols-3'>
      <img className='rounded-base' src='./me.png' alt='Photo of me' />
      <div className='flex flex-col gap-4 tablet:col-span-2 tablet:gap-8'>
        <Title title={title} />
        <Description description={description} />
        <Button variant={cta.variant}>{cta.cta}</Button>
      </div>
    </section>
  );
};

export default About;
