const Skills = () => {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='font-bold text-section-title text-light-accent'>Skills</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-2 p-4 aspect-square bg-light-card-bg rounded-base'>
          <h3 className='font-bold text-section-subtitle text-light-accent'>
            Section subtitle 1
          </h3>
          <ul className='ml-4 list-disc'>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
        <div className='flex flex-col gap-2 p-4 aspect-square bg-light-card-bg rounded-base'>
          <h3 className='font-bold text-section-subtitle text-light-accent'>
            Section subtitle 2
          </h3>
          <ul className='ml-4 list-disc'>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
        <div className='flex flex-col gap-2 p-4 aspect-square bg-light-card-bg rounded-base'>
          <h3 className='font-bold text-section-subtitle text-light-accent'>
            Section subtitle 3
          </h3>
          <ul className='ml-4 list-disc'>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
