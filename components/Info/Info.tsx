import { useSelector } from 'react-redux';
import { selectDataSections } from '../../app/store/slices/data';

import { IItem } from '../../models/data';

import Item from './Item';

const Info = () => {
  const data = useSelector(selectDataSections);
  const { title, cards } = data.info;

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold text-light-primary dark:text-dark-primary'>
        {title}
      </h2>
      <ul className='flex flex-col gap-4 mobile:grid mobile:grid-cols-2 tablet:grid-cols-1'>
        {cards.map((item: IItem) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Info;
