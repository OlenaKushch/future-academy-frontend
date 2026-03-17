export const ALL_FILTER_OPTION = 'Всі' as const;

export const COURSE_TYPES = ['Курс', 'Професія'] as const;
export const COURSE_LEVELS = ['Новачок', 'Користувач', 'Профі', 'Читер'] as const;
export const COURSE_AGE_RANGES = ['8-14', '14-18', '18-99'] as const;

export const COURSE_FILTER_CATEGORIES = [ALL_FILTER_OPTION, ...COURSE_TYPES] as const;
export const COURSE_FILTER_LEVELS = [ALL_FILTER_OPTION, ...COURSE_LEVELS] as const;
export const COURSE_FILTER_AGES = [ALL_FILTER_OPTION, ...COURSE_AGE_RANGES] as const;

export type CourseFilterCategory = (typeof COURSE_FILTER_CATEGORIES)[number];
export type CourseFilterLevel = (typeof COURSE_FILTER_LEVELS)[number];
export type CourseFilterAge = (typeof COURSE_FILTER_AGES)[number];