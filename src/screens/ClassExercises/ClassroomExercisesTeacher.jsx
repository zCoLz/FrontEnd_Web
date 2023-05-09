import React from 'react';
import CreatePost from '../CreatePost';

const ClassroomExercisesTeacher = () => {
  const ExerciseList = [
    {
      Exercise: 'Bài 1',
      PostDate: 'Đã đăng vào 19 tháng 9 năm 2022',
    },
    {
      Exercise: 'Bài 2',
      PostDate: 'Đã đăng vào 20 tháng 9 năm 2022',
    },
    {
      Exercise: 'Bài 3',
      PostDate: 'Đã đăng vào 21 tháng 9 năm 2022',
    },

    {
      Exercise: 'Đề cương',
      PostDate: 'Đã đăng vào 19 tháng 9 năm 2022',
    },
    {
      Exercise: 'Bài 1',
      PostDate: 'Đã đăng vào 19 tháng 9 năm 2022',
    },
  ];
  return (
    <div className='bg-slate-200 h-full w-full'>
      <CreatePost />
    </div>
  );
};

export default ClassroomExercisesTeacher;
