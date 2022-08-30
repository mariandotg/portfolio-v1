import splitString from '../../utils/splitString';

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  const titleFormatted = splitString(title, '<br />');

  return (
    <h1 className='self-start text-xl font-bold'>
      {titleFormatted.map((sentence, index, { length }) => (
        <span
          key={sentence.id}
          className={`block ${
            length - 1 === index && 'text-light-primary dark:text-dark-primary'
          }`}
        >
          {sentence.text}
        </span>
      ))}
    </h1>
  );
};

export default Title;
