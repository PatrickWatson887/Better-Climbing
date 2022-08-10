import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.better-climbing.com:444',
  // baseURL: 'http://localhost:8000',
  withCredentials: false,
  headers: {
    'Content-type': 'application/json',
  },
})
