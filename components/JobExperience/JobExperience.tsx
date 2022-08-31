import { useSelector } from 'react-redux';
import { selectDataSections } from '../../app/store/slices/data';

import { IJobCard } from '../../models/data';

import JobCard from './JobCard';

const JobExperience = () => {
  const data = useSelector(selectDataSections);
  const { title, cards } = data.jobExperience;

  return (
    <section className='flex flex-col gap-4 tablet:col-span-2'>
      <h2 className='text-xl font-bold text-light-primary dark:text-dark-primary'>
        {title}
      </h2>
      <ul className='flex flex-col gap-4 mobile:grid mobile:grid-cols-2'>
        {cards.map((job: IJobCard) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ul>
    </section>
  );
};

export default JobExperience;
