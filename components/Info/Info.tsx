import { useSelector } from 'react-redux';
import { selectDataSections } from '../../app/store/slices/data';
import { IItem } from '../../models/data';

const Info = () => {
  const data = useSelector(selectDataSections);
  const { title, cards } = data.info;

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold text-light-primary dark:text-dark-primary'>
        {title}
      </h2>
      <div className='flex flex-col gap-4 p-4 bg-light-card-bg dark:bg-dark-card-bg rounded-base'>
        {cards.map((item: IItem) => (
          <div key={item.id} className='flex flex-col gap-1'>
            <h3 className='text-lg font-bold text-light-primary dark:text-dark-primary'>
              {item.label}
            </h3>
            <p>{item.item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
