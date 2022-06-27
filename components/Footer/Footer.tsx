import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer className='p-8 flex flex-col items-center gap-4'>
      <div className='w-full flex justify-evenly'>
        <a
          href='https://linkedin.com/marianoguillaume'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon fontSize='large' />
        </a>
        <a
          href='https://github.com/mariandotg'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon fontSize='large' />
        </a>
        <a
          href='https://twitter.com/mariandotg'
          target='_blank'
          rel='noreferrer'
        >
          <TwitterIcon fontSize='large' />
        </a>
        <a
          href='https://instagram.com/marian_guilla'
          target='_blank'
          rel='noreferrer'
        >
          <InstagramIcon fontSize='large' />
        </a>
        <a
          href='https://facebook.com/mariandotg'
          target='_blank'
          rel='noreferrer'
        >
          <FacebookIcon fontSize='large' />
        </a>
      </div>
      <span className='w-fit'>Contact me</span>
    </footer>
  );
};

export default Footer;
