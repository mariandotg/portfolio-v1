import Button from '../Buttons/Button';

import { IProjectCard } from '../../models/data';

interface Props {
  project: IProjectCard;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <li>
      <img
        className='object-cover object-left-top w-full h-52 rounded-tl-base rounded-tr-base'
        src={project.image}
        alt='project'
      />
      <div className='flex flex-col gap-4 p-4 bg-light-card-bg dark:bg-dark-card-bg rounded-bl-base rounded-br-base'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl font-bold text-light-primary dark:text-dark-primary'>
            {project.name}
          </h3>
          <p className='text-light-secondary dark:text-dark-secondary'>
            {project?.year}
          </p>
          <p>{project.description}</p>
        </div>
        <div className='flex self-end gap-4'>
          <Button
            variant={project.repository.variant}
            url={project.repository.url}
          >
            {project.repository.cta}
          </Button>
          <Button variant={project.site.variant} url={project.site.url}>
            {project.site.cta}
          </Button>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
