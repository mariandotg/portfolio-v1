import { useSelector } from 'react-redux';
import { selectDataSections } from '../../app/store/slices/data';
import { IJobCard } from '../../models/data';

const JobExperience = () => {
  const data = useSelector(selectDataSections);
  const { title, cards } = data.jobExperience;

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold text-light-primary dark:text-dark-primary'>
        {title}
      </h2>
      <div className='flex flex-col gap-4'>
        {cards.map((card: IJobCard) => (
          <div
            key={card.id}
            className='flex flex-col gap-2 p-4 bg-light-card-bg dark:bg-dark-card-bg rounded-base'
          >
            <div>
              <h3 className='font-bold text-light-secondary dark:text-dark-secondary'>
                {card.company}
              </h3>
              <h3 className='text-xl font-bold text-light-primary dark:text-dark-primary'>
                {card.position}
              </h3>
            </div>
            <p className='text-light-secondary dark:text-dark-secondary'>
              {card.period}
            </p>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobExperience;
