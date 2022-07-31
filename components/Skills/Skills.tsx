import { useSelector } from 'react-redux';
import { selectDataSections } from '../../app/store/slices/data';
import { SkillCard } from '../../models/data';

const Skills = () => {
  const data = useSelector(selectDataSections);
  const { title, cards } = data.skills;

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold text-light-primary'>{title}</h2>
      <div className='flex flex-col gap-4'>
        {cards.map((card: SkillCard) => (
          <div
            key={card.id}
            className='flex flex-col gap-1 p-4 bg-light-card-bg rounded-base'
          >
            <h3 className='text-lg font-bold text-light-primary'>
              {card.subtitle}
            </h3>
            <p className=''>{card.techs}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
