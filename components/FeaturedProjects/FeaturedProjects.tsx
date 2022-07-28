import { useSelector } from 'react-redux';
import { selectProjects } from '../../app/store/slices/data';
import { Card } from '../../models/data';
import Button from '../Buttons/Button';

const FeaturedProjects = () => {
  const data = useSelector(selectProjects);
  const { title, cards } = data!;

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold text-light-primary'>{title}</h2>
      <div className='flex flex-col gap-4'>
        {cards!.map((project: Card) => (
          <div key={project.id}>
            <img
              className='object-cover object-left-top w-full h-52 rounded-tl-base rounded-tr-base'
              src='./me.png'
              alt='project'
            />
            <div className='flex flex-col gap-4 p-4 bg-light-card-bg rounded-bl-base rounded-br-base'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-bold text-light-primary'>
                  {project.subtitle}
                </h3>
                <p className='text-light-secondary'>{project.period}</p>
                <p>{project.description}</p>
              </div>
              <div className='flex self-end gap-4'>
                <Button variant='secondary'>Button 2</Button>
                <Button variant='primary'>Button 1</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
