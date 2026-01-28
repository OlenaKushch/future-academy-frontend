import styles from "./CourseCard.module.css";
import {Link} from "react-router-dom";

interface CourseCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  onOpenModal: () => void;
}

export const CourseCard = ({ id, title, price, image, onOpenModal }: CourseCardProps) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.courseImg} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price.toLocaleString()} $</p>
        
        <div className={styles.buttonGroup}>
          {/* Кнопка "Детальніше" зазвичай веде на окрему сторінку */}
          <Link to={`/courses/${id}`} className={styles.detailsBtn}> Детальніше</Link>
          
          {/* Кнопка відкриття модалки для дзвінка */}
          <button 
            className={styles.enrollBtn} 
            onClick={onOpenModal}
          >
            Записатися
          </button>
        </div>
      </div>
    
  );
};
