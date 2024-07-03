// src/pages/Home.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseList from '../components/CourseList';

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
      });
  }, []);

  return (
    <div>
      <h1>Available Courses</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export default Home;
