import styles from './CoursesFilters.module.css';
import {
    COURSE_FILTER_AGES,
    COURSE_FILTER_CATEGORIES,
    COURSE_FILTER_LEVELS,
    type CourseFilterAge,
    type CourseFilterCategory,
    type CourseFilterLevel,
} from '../../../constants/courseFilters';

interface FilterProps {
        activeCategory: CourseFilterCategory;
        setCategory: (cat: CourseFilterCategory) => void;
        activeLevel: CourseFilterLevel;
        setLevel: (lvl: CourseFilterLevel) => void;
        activeAge: CourseFilterAge;
        setAge: (age: CourseFilterAge) => void;
}

export const CoursesFilters = ({
    activeCategory,
    setCategory,
    activeLevel,
    setLevel,
    activeAge,
    setAge,
} : FilterProps)=> {
  return (
    <div className={styles.filterWrapper}>
        <div className={styles.filterGroup}>
            <span>Напрямок:</span>
            {COURSE_FILTER_CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    className={activeCategory === cat ? styles.active : ''}
                    onClick={() => setCategory(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
        <div className={styles.filterGroup}>
            <span>Рівень:</span>
            {COURSE_FILTER_LEVELS.map(lvl => (
                <button
                    key={lvl}
                    className={activeLevel === lvl ? styles.active : ''}
                    onClick={() => setLevel(lvl)}
                >
                    {lvl}
                </button>
            ))}
        </div>
        <div className={styles.filterGroup}>
            <span>Вік:</span>
            {COURSE_FILTER_AGES.map((age) => (
                <button
                    key={age}
                    className={activeAge === age ? styles.active : ''}
                    onClick={() => setAge(age)}
                >
                    {age}
                </button>
            ))}
        </div>
    </div>
  );
};