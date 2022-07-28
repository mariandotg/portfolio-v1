import { useSelector } from 'react-redux';
import { selectEducation } from '../../app/store/slices/data';
import { Card } from '../../models/data';

const Education = () => {
  const data = useSelector(selectEducation);
  const { title, cards } = data!;

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold text-light-primary'>{title}</h2>
      <div className='flex flex-col gap-4'>
        {cards!.map((e: Card) => (
          <div
            key={e.id}
            className='flex flex-col gap-2 p-4 bg-light-card-bg rounded-base'
          >
            <div>
              <h3 className='font-bold text-light-secondary'>College</h3>
              <h3 className='text-xl font-bold text-light-primary'>Title</h3>
            </div>
            <p className='text-light-secondary'>{e.period}</p>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
