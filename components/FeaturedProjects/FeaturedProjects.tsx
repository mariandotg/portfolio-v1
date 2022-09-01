import { useSelector } from 'react-redux';
import { selectDataSections } from '../../app/store/slices/data';

import { IProjectCard } from '../../models/data';

import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
  const data = useSelector(selectDataSections);
  const { title, cards } = data.featuredProjects;

  return (
    <section className='flex flex-col gap-4 tablet:col-span-2'>
      <h2 className='text-xl font-bold text-light-primary dark:text-dark-primary'>
        {title}
      </h2>
      <ul className='flex flex-col gap-4 tablet:grid tablet:grid-cols-2'>
        {cards!.map((project: IProjectCard) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProjects;
