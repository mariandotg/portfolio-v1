import { useSelector } from 'react-redux';
import { selectInfo } from '../../app/store/slices/data';
import { Item } from '../../models/data';

const Info = () => {
  const data = useSelector(selectInfo);
  const { title, items } = data!;

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold text-light-primary'>{title}</h2>
      <div className='flex flex-col gap-4 p-4 bg-light-card-bg rounded-base'>
        {items!.map((i: Item) => (
          <div key={i.id} className='flex flex-col gap-1'>
            <h3 className='text-lg font-bold text-light-primary'>{i.label}</h3>
            <p>{i.item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
