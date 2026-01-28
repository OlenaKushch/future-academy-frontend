export interface Course {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    type: 'Курс' | 'Професія'; 
  level: 'Новачок' | 'Користувач' | 'Профі' | 'Читер';
  ageRange: '8-14' | '14-18' | '18-99';
}