import { useSelector } from 'react-redux';
import { selectSkills } from '../../app/store/slices/data';
import { Card } from '../../models/data';

const Skills = () => {
  const data = useSelector(selectSkills);
  const { title, cards } = data!;

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold text-light-primary'>{title}</h2>
      <div className='flex flex-col gap-4'>
        {cards!.map((s: Card) => (
          <div
            key={s.id}
            className='flex flex-col gap-1 p-4 bg-light-card-bg rounded-base'
          >
            <h3 className='text-lg font-bold text-light-primary'>
              {s.subtitle}
            </h3>
            <ul className='ml-4 list-disc'>
              {s.techs!.map((t: string, i: number) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
