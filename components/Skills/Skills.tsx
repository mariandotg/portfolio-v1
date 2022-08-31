import { useSelector } from 'react-redux';
import { selectDataSections } from '../../app/store/slices/data';

import { ISkillCard } from '../../models/data';

import SkillCard from './SkillCard';

const Skills = () => {
  const data = useSelector(selectDataSections);
  const { title, cards } = data.skills;

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold text-light-primary dark:text-dark-primary'>
        {title}
      </h2>
      <ul className='flex flex-col gap-4 mobile:grid mobile:grid-cols-2 tablet:grid-cols-1'>
        {cards.map((skill: ISkillCard) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
