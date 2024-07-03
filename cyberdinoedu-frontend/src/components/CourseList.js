// src/components/CourseList.js

import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ courses }) => {
  return (
    <div>
      {courses.map(course => (
        <div key={course._id}>
          <Link to={`/course/${course._id}`}>
            <h2>{course.title}</h2>
          </Link>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
