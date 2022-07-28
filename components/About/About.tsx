import { useSelector } from 'react-redux';
import { selectAbout } from '../../app/store/slices/data';
import splitString from '../../utils/splitString';
import Button from '../Buttons/Button';

const About = () => {
  const data = useSelector(selectAbout);
  const { title, description } = data!;

  const titleFormatted = splitString(title!);
  const descriptionFormatted = splitString(description!);

  return (
    <section className='flex flex-col items-end gap-4'>
      <img className='rounded-base' src='./me.png' alt='Photo of me' />
      <h1 className='self-start text-xl font-bold'>
        <span className='block'>{titleFormatted[0]}</span>
        <span className='block'>{titleFormatted[1]}</span>
        <span className='block text-light-primary'>{titleFormatted[2]}</span>
      </h1>
      <div className='flex flex-col gap-2'>
        {descriptionFormatted.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
      <Button variant='primary'>Download CV</Button>
    </section>
  );
};

export default About;
