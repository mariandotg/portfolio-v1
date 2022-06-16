import Button from '../Buttons/Button';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <>
      <header className='p-4 bg-light-card-bg fixed w-full'>
        <Button variant='primary' icon>
          <MenuIcon />
        </Button>
      </header>
    </>
  );
};

export default Header;
