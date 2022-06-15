const JobExperience = () => {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='font-bold text-section-title text-light-accent'>
        Job Experience
      </h2>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2 p-4 bg-light-card-bg rounded-base'>
          <div>
            <h3 className='font-bold text-section-subtitle text-light-accent'>
              Job company
            </h3>
            <h3 className='font-bold text-section-subtitle'>Job title</h3>
          </div>
          <p className='text-disabled'>Period</p>
          <p>Description</p>
        </div>
        <div className='flex flex-col gap-2 p-4 bg-light-card-bg rounded-base'>
          <div>
            <h3 className='font-bold text-section-subtitle text-light-accent'>
              Job company
            </h3>
            <h3 className='font-bold text-section-subtitle'>Job title</h3>
          </div>
          <p className='text-disabled'>Period</p>
          <p>Description</p>
        </div>
      </div>
    </section>
  );
};

export default JobExperience;
