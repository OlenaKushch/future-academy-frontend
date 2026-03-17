import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
    throw new Error("VITE_API_URL is not set");
}

export const api = axios.create({
    baseURL,
});

export const createLead = async (data: {
    name: string;
    phone: string;
    email: string;
    message?: string;
    courseId: string;
}) => {
    const response = await api.post('/api/v1/leads', data);
    return response.data;
};