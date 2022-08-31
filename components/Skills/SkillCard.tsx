import { ISkillCard } from '../../models/data';

interface Props {
  skill: ISkillCard;
}

const SkillCard = ({ skill }: Props) => {
  return (
    <li className='flex flex-col gap-1 p-4 bg-light-card-bg dark:bg-dark-card-bg rounded-base'>
      <h3 className='text-lg font-bold text-light-primary dark:text-dark-primary'>
        {skill.subtitle}
      </h3>
      <p>{skill.techs}</p>
    </li>
  );
};

export default SkillCard;
