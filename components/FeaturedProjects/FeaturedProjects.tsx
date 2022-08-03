import { useSelector } from 'react-redux';
import { selectDataSections } from '../../app/store/slices/data';
import { IProjectCard } from '../../models/data';
import Button from '../Buttons/Button';

const FeaturedProjects = () => {
  const data = useSelector(selectDataSections);
  const { title, cards } = data.featuredProjects;

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold text-light-primary'>{title}</h2>
      <div className='flex flex-col gap-4'>
        {cards!.map((card: IProjectCard) => (
          <div key={card.id}>
            <img
              className='object-cover object-left-top w-full h-52 rounded-tl-base rounded-tr-base'
              src={card.image}
              alt='project'
            />
            <div className='flex flex-col gap-4 p-4 bg-light-card-bg rounded-bl-base rounded-br-base'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-bold text-light-primary'>
                  {card.name}
                </h3>
                <p className='text-light-secondary'>{card?.year}</p>
                <p>{card.description}</p>
              </div>
              <div className='flex self-end gap-4'>
                <Button variant='secondary' url={card?.repository}>
                  View repo
                </Button>
                <Button variant='primary' url={card?.site}>
                  View site
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
