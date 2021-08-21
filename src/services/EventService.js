import axios from "axios";

// Single instance for app components to use
const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/mathewgrabau/events-sample-api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getEvents() {
        return apiClient.get('/events');
    }
}

