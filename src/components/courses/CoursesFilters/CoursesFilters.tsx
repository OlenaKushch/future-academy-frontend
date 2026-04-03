import styles from './CoursesFilters.module.css';
import {
    COURSE_FILTER_AGES,
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
}: FilterProps) => {
    const ageCards: Array<{
        value: CourseFilterAge;
        title: string;
        label: string;
        icon: string;
    }> = [
        {
            value: COURSE_FILTER_AGES[1],
            title: 'Діти',
            label: '8 — 14 лет',
            icon: '/children.svg',
        },
        {
            value: COURSE_FILTER_AGES[2],
            title: 'Підлітки',
            label: '14 — 18 лет',
            icon: '/teens.svg',
        },
        {
            value: COURSE_FILTER_AGES[3],
            title: 'Дорослі',
            label: '18 — ∞',
            icon: '/adult.svg',
        },
    ];

    void activeCategory;
    void setCategory;
    void activeLevel;
    void setLevel;

  return (
        <div className={styles.filterWrapper}>
            {ageCards.map((item) => (
                <button
                    key={item.value}
                    className={`${styles.filterCard} ${activeAge === item.value ? styles.active : ''}`}
                    onClick={() => setAge(item.value)}
                    type="button"
                    aria-pressed={activeAge === item.value}
                >
                    <img src={item.icon} alt="" aria-hidden="true" className={styles.icon} />
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.label}>{item.label}</span>
                </button>
            ))}
    </div>
  );
};