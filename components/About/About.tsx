const About = () => {
  return (
    <section className='flex flex-col gap-4'>
      <img className='rounded-base' src='./me.png' alt='Photo of me' />
      <div className='p-4 bg-light-card-bg rounded-base'>
        <h1 className='font-bold text-section-subtitle'>Title</h1>
        <p>Paragraph </p>
      </div>
    </section>
  );
};

export default About;
