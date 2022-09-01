import splitString from '../../utils/splitString';

interface Props {
  description: string;
}

const Description = ({ description }: Props) => {
  const descriptionFormatted = splitString(description, '<br />');

  return (
    <div className='flex flex-col gap-2'>
      {descriptionFormatted.map((p) => (
        <p key={p.id}>{p.text}</p>
      ))}
    </div>
  );
};

export default Description;
