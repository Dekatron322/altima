// utils/apiClient.ts
import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://altima.fyber.site/",
  headers: {
    "Content-Type": "application/json",
  },
})

export default apiClient
