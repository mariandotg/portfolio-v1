import { useSelector } from 'react-redux';
import { selectDataSections } from '../../app/store/slices/data';

import { ICourseCard } from '../../models/data';

import CourseCard from './CourseCard';

const Education = () => {
  const data = useSelector(selectDataSections);
  const { title, cards } = data.education;

  return (
    <section className='flex flex-col gap-4 tablet:col-span-2'>
      <h2 className='text-xl font-bold text-light-primary dark:text-dark-primary'>
        {title}
      </h2>
      <ul className='flex flex-col gap-4 mobile:grid mobile:grid-cols-2'>
        {cards.map((course: ICourseCard) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </ul>
    </section>
  );
};

export default Education;
