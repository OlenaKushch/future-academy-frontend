import styles from './CoursesFilters.module.css';

interface FilterProps {
    activeCategory: string;
    setCategory: (cat: string) => void;
    activeLevel: string;
    setLevel: (lvl: string) => void;
}

export const CoursesFilters = ({ activeCategory, setCategory, activeLevel, setLevel} : FilterProps)=> {
    const categories = ['Всі', 'Курс', 'Професія'];
  const levels = ['Всі', 'Новачок', 'Користувач', 'Профі', 'Читер'];

  return (
    <div className={styles.filterWrapper}>
        <div className={styles.filterGroup}>
            <span>Напрямок:</span>
            {categories.map((cat) => (
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
            {levels.map(lvl => (
                <button
                    key={lvl}
                    className={activeLevel === lvl ? styles.active : ''}
                    onClick={() => setLevel(lvl)}
                >
                    {lvl}
                </button>
            ))}
        </div>
    </div>
  );
};