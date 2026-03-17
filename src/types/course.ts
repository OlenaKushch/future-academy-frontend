import {
  COURSE_AGE_RANGES,
  COURSE_LEVELS,
  COURSE_TYPES,
} from "../constants/courseFilters";

type CourseType = (typeof COURSE_TYPES)[number];
type CourseLevel = (typeof COURSE_LEVELS)[number];
type CourseAgeRange = (typeof COURSE_AGE_RANGES)[number];

export interface Course {
  id: number;
  uuid: string;
  title: string;
  price: number;
  image?: string | null;
  description: string;
  type: CourseType;
  level: CourseLevel;
  ageRange?: CourseAgeRange;
  minAge?: number;
  maxAge?: number;
}