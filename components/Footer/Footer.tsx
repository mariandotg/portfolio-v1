import { useSelector } from 'react-redux';
import { selectDataSections } from '../../app/store/slices/data';
import { ISocialMedia } from '../../models/data';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

interface Icons {
  [index: string]: any;
}

const Footer = () => {
  const data = useSelector(selectDataSections);
  const { title, socialMedia } = data.footer;

  const icons: Icons = {
    LinkedInIcon: <LinkedInIcon fontSize='large' />,
    GitHubIcon: <GitHubIcon fontSize='large' />,
    TwitterIcon: <TwitterIcon fontSize='large' />,
    InstagramIcon: <InstagramIcon fontSize='large' />,
    FacebookIcon: <FacebookIcon fontSize='large' />,
  };

  return (
    <footer className='flex flex-col items-center gap-4 p-8'>
      <div className='flex w-full justify-evenly'>
        {socialMedia.map((e: ISocialMedia, i: number) => {
          return (
            <a key={e.id} href={e.url} target='_blank' rel='noreferrer'>
              {icons[e.icon]}
            </a>
          );
        })}
      </div>
      <span className='w-fit'>{title}</span>
    </footer>
  );
};

export default Footer;
