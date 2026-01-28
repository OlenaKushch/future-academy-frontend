import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const createApplication = async (data: {
    userName: string;
    phone: string;
    comment?: string;
    courseId: number;
}) => {
    const response = await api.post('/applications', data);
    return response.data;
};