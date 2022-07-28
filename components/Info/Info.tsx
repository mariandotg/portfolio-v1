import { useSelector } from 'react-redux';
import { selectInfo } from '../../app/store/slices/data';
import { Item } from '../../models/data';

const Info = () => {
  const data = useSelector(selectInfo);
  const { title, items } = data!;

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='font-bold text-section-title text-light-accent'>
        {title}
      </h2>
      <div className='flex flex-col gap-2 p-4 bg-light-card-bg rounded-base'>
        {items!.map((i: Item) => (
          <div key={i.id}>
            <h3 className='font-bold text-section-subtitle text-light-accent'>
              {i.label}
            </h3>
            <p>{i.item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
