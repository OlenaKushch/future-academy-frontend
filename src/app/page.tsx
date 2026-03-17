import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom"
import { api } from "../api/api";
import type { Course } from "../types/course";

import styles from './pageCourseDetails.module.css'
import { useModalStore } from "../store/useModalStore";
import { useEffect } from "react";

export const CourseDetailsPage = () => {
    
    const {id} = useParams<{id: string}>();

    const openModal = useModalStore((state) => state.openModal);

    const {data:course, isLoading, isError} = useQuery<Course>({
        queryKey: ['course', id],
        queryFn: async () => {
        const response = await api.get(`/api/v1/courses/${id}`);
            return response.data;
        },
        enabled: !!id,
    });

    useEffect(() => {
    if (course?.title) {
      document.title = `${course.title} | My Academy`;
    }
    
    return () => {
      document.title = 'My Academy';
    };
  }, [course?.title]);
    
    if (isLoading) return <div className={styles.loading}>Loading course details...</div>;
    if (isError || !course) return <div className={styles.error}>Error loading course details.</div>;

    return (
        <div className={styles.container}>
            <Link to='/' className={styles.backButton}> Назад до курсів
            </Link>
            <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img src={course.image ?? '/vite.svg'} alt={course.title} className={styles.image} />
        </div>
        

        <div className={styles.info}>
          <h1 className={styles.title}>{course?.title}</h1>
          <p className={styles.price}>{course?.price} грн</p>
          <div className={styles.description}>
            <h3>Про цей курс:</h3>
            <p>{course?.description}</p>
          </div>

          <button
            className={styles.enrollBtn}
            onClick={() => openModal(course.id, course.title, course.uuid)}
          >
            Записатися на курс
          </button>
        </div>
      </div>
    </div>
  );
};