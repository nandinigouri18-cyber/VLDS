import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Auth Services
export const authService = {
  signup: (data) => api.post('/auth/signup', data),
  login: (data) => api.post('/auth/login', data),
  verifyOtp: (data) => api.post('/auth/verify-otp', data),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (data) => api.post('/auth/reset-password', data),
  getProfile: () => api.get('/auth/profile'),
}

// Medicine Services
export const medicineService = {
  getAll: (params) => api.get('/medicines', { params }),
  getById: (id) => api.get(`/medicines/${id}`),
  search: (query) => api.get('/medicines/search', { params: { q: query } }),
  getCategories: () => api.get('/medicines/categories'),
}

// Order Services
export const orderService = {
  create: (data) => api.post('/orders', data),
  getAll: () => api.get('/orders'),
  getById: (id) => api.get(`/orders/${id}`),
  cancel: (id) => api.post(`/orders/${id}/cancel`),
  getTracking: (id) => api.get(`/orders/${id}/tracking`),
}

// Blood Services
export const bloodService = {
  getAvailability: (params) => api.get('/blood/availability', { params }),
  getHospitals: (params) => api.get('/blood/hospitals', { params }),
  getDonors: (params) => api.get('/blood/donors', { params }),
  requestBlood: (data) => api.post('/blood/request', data),
  registerDonor: (data) => api.post('/blood/donor/register', data),
  registerHospital: (data) => api.post('/blood/hospital/register', data),
}

// Lab Services
export const labService = {
  getAll: () => api.get('/lab-tests'),
  getById: (id) => api.get(`/lab-tests/${id}`),
  book: (data) => api.post('/lab-tests/book', data),
  getMyBookings: () => api.get('/lab-tests/my-bookings'),
  getReport: (id) => api.get(`/lab-tests/report/${id}`),
}

// Doctor Services
export const doctorService = {
  getAll: (params) => api.get('/doctors', { params }),
  getById: (id) => api.get(`/doctors/${id}`),
  getSpecializations: () => api.get('/doctors/specializations'),
  bookAppointment: (data) => api.post('/appointments', data),
  getMyAppointments: () => api.get('/appointments/my-appointments'),
}

// Chat Services
export const chatService = {
  sendMessage: (data) => api.post('/chat', data),
  getHistory: () => api.get('/chat/history'),
  clearHistory: () => api.post('/chat/clear-history'),
}

// Prescription Services
export const prescriptionService = {
  upload: (formData) => api.post('/prescriptions/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  getAll: () => api.get('/prescriptions'),
  getById: (id) => api.get(`/prescriptions/${id}`),
}

export default api
