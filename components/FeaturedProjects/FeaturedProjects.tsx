import Button from '../Buttons/Button';

const FeaturedProjects = () => {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='font-bold text-section-title text-light-accent'>
        Featured Projects
      </h2>
      <div className='flex flex-col gap-4'>
        <div>
          <img
            className='object-cover object-left-top w-full h-52 rounded-tl-base rounded-tr-base'
            src='./me.png'
            alt='project'
          />
          <div className='flex flex-col gap-4 p-4 bg-light-card-bg rounded-bl-base rounded-br-base'>
            <div className='flex flex-col gap-2'>
              <h3 className='font-bold text-section-subtitle text-light-accent'>
                Project title
              </h3>
              <p className='text-disabled'>Period</p>
              <p>Description</p>
            </div>
            <div className='flex self-end gap-4'>
              <Button variant='secondary'>Button 2</Button>
              <Button variant='primary'>Button 1</Button>
            </div>
          </div>
        </div>
        <div>
          <img
            className='object-cover object-left-top w-full h-52 rounded-tl-base rounded-tr-base'
            src='./me.png'
            alt='project'
          />
          <div className='flex flex-col gap-4 p-4 bg-light-card-bg rounded-bl-base rounded-br-base'>
            <div className='flex flex-col gap-2'>
              <h3 className='font-bold text-section-subtitle text-light-accent'>
                Project title
              </h3>
              <p className='text-disabled'>Period</p>
              <p>Description</p>
            </div>
            <div className='flex self-end gap-4'>
              <Button variant='secondary'>Button 2</Button>
              <Button variant='primary'>Button 1</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
