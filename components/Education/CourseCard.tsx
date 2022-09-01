import { ICourseCard } from '../../models/data';

interface Props {
  course: ICourseCard;
}

const CourseCard = ({ course }: Props) => {
  return (
    <li className='flex flex-col gap-2 p-4 bg-light-card-bg dark:bg-dark-card-bg rounded-base'>
      <div>
        <h3 className='font-bold text-light-secondary dark:text-dark-secondary'>
          {course.institution}
        </h3>
        <h3 className='text-xl font-bold text-light-primary dark:text-dark-primary'>
          {course.courseTitle}
        </h3>
      </div>
      <p className='text-light-secondary dark:text-dark-secondary'>
        {course.period}
      </p>
      <p>{course.description}</p>
    </li>
  );
};

export default CourseCard;
