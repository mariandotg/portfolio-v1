import { useSelector } from 'react-redux';
import { selectDataSections } from '../../app/store/slices/data';
import { CourseCard } from '../../models/data';

const Education = () => {
  const data = useSelector(selectDataSections);
  const { title, cards } = data.education;

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold text-light-primary'>{title}</h2>
      <div className='flex flex-col gap-4'>
        {cards.map((card: CourseCard) => (
          <div
            key={card.id}
            className='flex flex-col gap-2 p-4 bg-light-card-bg rounded-base'
          >
            <div>
              <h3 className='font-bold text-light-secondary'>
                {card.institution}
              </h3>
              <h3 className='text-xl font-bold text-light-primary'>
                {card.courseTitle}
              </h3>
            </div>
            <p className='text-light-secondary'>{card.period}</p>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
