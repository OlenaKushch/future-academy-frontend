import { useQuery } from "@tanstack/react-query";
import { useModalStore } from '../../../store/useModalStore';
import { api } from '../../../api/api';

import styles from "./CourseList.module.css";
import { CourseCard } from "../CourseCard/CourseCard";
import { CoursesFilters } from "../CoursesFilters/CoursesFilters";
import { useState } from "react";
import type { Course } from "../../../types/course";
import {
  ALL_FILTER_OPTION,
  type CourseFilterAge,
  type CourseFilterCategory,
  type CourseFilterLevel,
} from "../../../constants/courseFilters";


export const CourseList = () => {
    const openModal = useModalStore((state) => state.openModal);

    const { data: courses, isLoading, error } = useQuery<Course[]>({
        queryKey: ["courses"],
        queryFn: async () => {
      const response = await api.get('/api/v1/courses');
      return response.data.data;
        },
});

const [category, setCategory] = useState<CourseFilterCategory>(ALL_FILTER_OPTION);
const [level, setLevel] = useState<CourseFilterLevel>(ALL_FILTER_OPTION);
const [age, setAge] = useState<CourseFilterAge>(ALL_FILTER_OPTION);

if (isLoading) return <div className={styles.loader}>Loading courses...</div>;
if (error) return <div className={styles.error}>Error loading courses.</div>;

const filteredCourses = courses?.filter(course => {
  const categoryMatch = category === ALL_FILTER_OPTION || course.type === category;
  const levelMatch = level === ALL_FILTER_OPTION || course.level === level;
  const ageMatch = age === ALL_FILTER_OPTION || course.ageRange === age;

    return categoryMatch && levelMatch && ageMatch;
});

    return (
        <div className={styles.container}>
      <CoursesFilters
        activeCategory={category}
        setCategory={setCategory}
        activeLevel={level}
        setLevel={setLevel}
        activeAge={age}
        setAge={setAge}
      />
      
      <div className={styles.grid}>
        {filteredCourses?.map((course) => (
          <CourseCard 
            key={course.id} 
            id={course.id}
            title={course.title}
            price={course.price}
            image={course.image ?? '/vite.svg'}
            onOpenModal={() => openModal(course.id, course.title, course.uuid)} 
          />
        ))}
      </div>
      
      {filteredCourses?.length === 0 && (
        <p>No courses match the selected filters.</p>
      )}
    </div>      
    );
};
