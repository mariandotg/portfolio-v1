const Info = () => {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='font-bold text-section-title text-light-accent'>Info</h2>
      <div className='flex flex-col gap-2 p-4 bg-light-card-bg rounded-base'>
        <h3 className='font-bold text-section-subtitle text-light-accent'>
          Subtitle 1
        </h3>
        <p>Subtitle 1</p>
        <h3 className='font-bold text-section-subtitle text-light-accent'>
          Subtitle 2
        </h3>
        <p>Subtitle 2</p>
        <h3 className='font-bold text-section-subtitle text-light-accent'>
          Subtitle 3
        </h3>
        <p>Subtitle 3</p>
      </div>
    </section>
  );
};

export default Info;
