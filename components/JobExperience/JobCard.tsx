import { IJobCard } from '../../models/data';

interface Props {
  job: IJobCard;
}

const JobCard = ({ job }: Props) => {
  return (
    <li className='flex flex-col gap-2 p-4 bg-light-card-bg dark:bg-dark-card-bg rounded-base'>
      <div>
        <h3 className='font-bold text-light-secondary dark:text-dark-secondary'>
          {job.company}
        </h3>
        <h3 className='text-xl font-bold text-light-primary dark:text-dark-primary'>
          {job.position}
        </h3>
      </div>
      <p className='text-light-secondary dark:text-dark-secondary'>
        {job.period}
      </p>
      <p>{job.description}</p>
    </li>
  );
};

export default JobCard;
