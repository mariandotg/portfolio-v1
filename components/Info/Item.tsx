import { IItem } from '../../models/data';

interface Props {
  item: IItem;
}

const Item = ({ item }: Props) => {
  return (
    <li className='flex flex-col gap-1 p-4 bg-light-card-bg dark:bg-dark-card-bg rounded-base'>
      <h3 className='text-lg font-bold text-light-primary dark:text-dark-primary'>
        {item.label}
      </h3>
      <p>{item.item}</p>
    </li>
  );
};

export default Item;
