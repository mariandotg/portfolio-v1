const CompEducation = () => {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='font-bold text-section-title text-light-accent'>
        Education
      </h2>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-2 p-4 aspect-square bg-light-card-bg rounded-base'>
          <h3 className='font-bold text-section-subtitle text-light-accent'>
            Course title
          </h3>
          <p className='text-disabled'>Period</p>
          <p>Description</p>
        </div>
        <div className='flex flex-col gap-2 p-4 aspect-square bg-light-card-bg rounded-base'>
          <h3 className='font-bold text-section-subtitle text-light-accent'>
            Course title
          </h3>
          <p className='text-disabled'>Period</p>
          <p>Description</p>
        </div>
        <div className='flex flex-col gap-2 p-4 aspect-square bg-light-card-bg rounded-base'>
          <h3 className='font-bold text-section-subtitle text-light-accent'>
            Course title
          </h3>
          <p className='text-disabled'>Period</p>
          <p>Description</p>
        </div>
        <div className='flex flex-col gap-2 p-4 aspect-square bg-light-card-bg rounded-base'>
          <h3 className='font-bold text-section-subtitle text-light-accent'>
            Course title
          </h3>
          <p className='text-disabled'>Period</p>
          <p>Description</p>
        </div>
      </div>
    </section>
  );
};

export default CompEducation;
