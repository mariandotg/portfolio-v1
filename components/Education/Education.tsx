const Education = () => {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='font-bold text-section-title text-light-primary'>
        Education
      </h2>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-2 p-4 bg-light-card-bg rounded-base'>
          <div>
            <h3 className='font-bold text-section-subtitle text-light-primary'>
              College
            </h3>
            <h3 className='font-bold text-section-subtitle'>Title</h3>
          </div>
          <p className='text-disabled'>Period</p>
          <p>Description</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
