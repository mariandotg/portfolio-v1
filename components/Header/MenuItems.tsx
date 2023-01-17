import { useSelector } from 'react-redux';

import { selectData } from '../../app/store/slices/data';
import { IMenuItem } from '../../models/data';

const MenuItems = () => {
  const data = useSelector(selectData);
  const { menu } = data.sections.header;

  const menuItemsList = menu.slice(0, 2);

  return (
    <>
      {menuItemsList.map((item: IMenuItem) => (
        <li
          key={item.id}
          className='cursor-pointer w-fit hover:text-light-primary hover:dark:text-dark-primary'
        >
          {item.displayName}
        </li>
      ))}
    </>
  );
};

export default MenuItems;
