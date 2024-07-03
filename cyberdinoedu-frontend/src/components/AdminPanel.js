// src/components/AdminPanel.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
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

  const deleteCourse = (id) => {
    axios.delete(`/api/courses/${id}`)
      .then(() => {
        setCourses(courses.filter(course => course._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the course!', error);
      });
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <h2>{course.title}</h2>
            <button onClick={() => deleteCourse(course._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
