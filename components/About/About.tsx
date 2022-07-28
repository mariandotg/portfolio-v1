import { useSelector } from 'react-redux';
import { selectAbout } from '../../app/store/slices/data';
import splitString from '../../utils/splitString';

const About = () => {
  const data = useSelector(selectAbout);
  const { title, description } = data!;

  const titleFormatted = splitString(title!);
  const descriptionFormatted = splitString(description!);

  return (
    <section className='flex flex-col gap-4'>
      <img className='rounded-base' src='./me.png' alt='Photo of me' />
      <div className='p-4 bg-light-card-bg rounded-base flex flex-col gap-2'>
        <h1 className='font-bold text-section-subtitle'>
          <span>{titleFormatted[0]}</span>
          <span className='text-light-primary'>{titleFormatted[1]}</span>
        </h1>
        {descriptionFormatted.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
