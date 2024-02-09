import axios from 'axios'

export const api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/api',
});

// Error Handler
const errorHandler = (error) => {
    const statusCode = error.response?.status;

    if (statusCode && statusCode !== 401) {
        console.error('Error: ', error);
    }

    return Promise.reject(error);
}

//Registrazione dell'handler per gli errori nell'istanza axios
api.interceptors.response.use(
    undefined,
    (error) => errorHandler(error)
)




