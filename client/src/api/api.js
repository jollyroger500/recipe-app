import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertMeals = payload => api.post(`/meals`, payload)
export const getAllMeals = () => api.get(`/meals`)
export const updateMealsById = (id, payload) => api.put(`/meals/${id}`, payload)
export const deleteMealsById = id => api.delete(`/meals/${id}`)
export const getMealsById = id => api.get(`/meals/${id}`)

const apis = {
    insertMeals,
    getAllMeals,
    updateMealsById,
    deleteMealsById,
    getMealsById,
}

export default apis
