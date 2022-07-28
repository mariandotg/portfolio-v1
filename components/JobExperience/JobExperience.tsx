import { useSelector } from 'react-redux';
import { selectJobs } from '../../app/store/slices/data';
import { Card } from '../../models/data';

const JobExperience = () => {
  const data = useSelector(selectJobs);
  const { title, cards } = data!;

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold text-light-primary'>{title}</h2>
      <div className='flex flex-col gap-4'>
        {cards!.map((job: Card) => (
          <div
            key={job.id}
            className='flex flex-col gap-2 p-4 bg-light-card-bg rounded-base'
          >
            <div>
              <h3 className='font-bold text-light-secondary'>{job.subtitle}</h3>
              <h3 className='text-xl font-bold text-light-primary'>
                Job title
              </h3>
            </div>
            <p className='text-light-secondary'>{job.period}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobExperience;
