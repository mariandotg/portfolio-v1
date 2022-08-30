import { useSelector } from 'react-redux';
import { selectDataSections } from '../../app/store/slices/data';
import splitString from '../../utils/splitString';
import Button from '../Buttons/Button';

const About = () => {
  const data = useSelector(selectDataSections);
  const { title, cta, description } = data.about;

  const titleFormatted = splitString(title, '<br />');
  const descriptionFormatted = splitString(description, '<br />');

  return (
    <section className='flex flex-col gap-4 tablet:grid tablet:grid-cols-3'>
      <img className='rounded-base' src='./me.png' alt='Photo of me' />
      <div className='flex flex-col gap-4 tablet:col-span-2 tablet:gap-8'>
        <h1 className='self-start text-xl font-bold'>
          <span className='block'>{titleFormatted[0]}</span>
          <span className='block'>{titleFormatted[1]}</span>
          <span className='block text-light-primary dark:text-dark-primary'>
            {titleFormatted[2]}
          </span>
        </h1>
        <div className='flex flex-col gap-2'>
          {descriptionFormatted.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
        <Button variant={cta.variant}>{cta.cta}</Button>
      </div>
    </section>
  );
};

export default About;
