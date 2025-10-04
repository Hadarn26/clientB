import { httpGet } from "./httpService";

export const fetchBooks = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        console.error("No token, please login first");
        return Promise.reject("No token");
    }

    return httpGet("http://localhost:3002/cs/books", { Authorization: token })
        .then(data => {
            console.log('Books: ', data);
            return data;
        })
        .catch(error => {
            console.error('Error getting books!!!!', error);
            throw error;
        });
};