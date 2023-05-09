import './App.css';
import React from 'react';
import Content from './page/Main/HomeScreen';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import LoginTeacher from './page/Login/LoginTeacher';
import LoginStudent from './page/Login/LoginStudent';
import JoinClassedStudent from './page/JoinClassed/JoinClassedStudent';
import JoinClassedTeacher from './page/JoinClassed/JoinClassedTeacher';

function App() {
  return (
    <>
      <Routes>
        {/* Routing sinh viên */}
        <Route path='/' element={<Navigate to='/sinh-vien' />} />
        <Route path='/sinh-vien' element={<LoginStudent />} />
        <Route path='/sinh-vien' element={<Content />} />
        <Route path='/sinh-vien/class/:id' element={<JoinClassedStudent />} />

        {/* Routing giảng viên */}
        <Route path='/giang-vien' element={<LoginTeacher />} />
        <Route path='giang-vien' element={<Content />} />
        <Route path='/giang-vien/class/:id' element={<JoinClassedTeacher />} />
      </Routes>
    </>
  );
}

export default App;
