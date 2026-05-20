import { useState, useCallback } from 'react'
import { authService } from '../services/api'
import toast from 'react-hot-toast'

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const signup = useCallback(async (data) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authService.signup(data)
      setUser(response.data.user)
      localStorage.setItem('token', response.data.token)
      toast.success('Signup successful!')
      return response.data
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed')
      toast.error(err.response?.data?.message || 'Signup failed')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const login = useCallback(async (email, password) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authService.login({ email, password })
      setUser(response.data.user)
      localStorage.setItem('token', response.data.token)
      toast.success('Login successful!')
      return response.data
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
      toast.error(err.response?.data?.message || 'Login failed')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('token')
    toast.success('Logged out successfully')
  }, [])

  return { user, loading, error, signup, login, logout }
}
