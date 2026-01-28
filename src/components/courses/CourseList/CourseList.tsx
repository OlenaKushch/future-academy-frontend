import { useQuery } from "@tanstack/react-query";
import { useModalStore } from '../../../store/useModalStore';
import { api } from '../../../api/api';

import styles from "./CourseList.module.css";
import { CourseCard } from "../CourseCard/CourseCard";
import { useState } from "react";
import type { Course } from "../../../types/course";


export const CourseList = () => {
    const openModal = useModalStore((state) => state.openModal);

    const { data: courses, isLoading, error } = useQuery<Course[]>({
        queryKey: ["courses"],
        queryFn: async () => {
            const response = await api.get('/courses');
            return response.data;
        },
});

const [category, setCategory] = useState('Всі');
const [level, setLevel] = useState('Всі');
const [age, setAge] = useState('Всі');

if (isLoading) return <div className={styles.loader}>Loading courses...</div>;
if (error) return <div className={styles.error}>Error loading courses.</div>;

const filteredCourses = courses?.filter(course => {
    const categoryMatch = category === 'Всі' || course.type === category;
    const levelMatch = level === 'Всі' || course.level === level;
    const ageMatch = age === 'Всі' || course.ageRange === age;

    return categoryMatch && levelMatch && ageMatch;
});

    return (
        <div className={styles.container}>
      {/* ТУТ МАЮТЬ БУТИ КНОПКИ ФІЛЬТРІВ (компонент CourseFilters) */}
      
      <div className={styles.grid}>
        {/* Рендеримо САМЕ filteredCourses, а не просто courses */}
        {filteredCourses?.map((course) => (
          <CourseCard 
            key={course.id} 
            id={course.id}
            title={course.title}
            price={course.price}
            image={course.image}
            onOpenModal={() => openModal(course.id, course.title)} 
          />
        ))}
      </div>
      
      {filteredCourses?.length === 0 && (
        <p>No courses match the selected filters.</p>
      )}
    </div>      
    );
};
