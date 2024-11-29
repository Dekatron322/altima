import apiClient from "utils/apiClient"

export interface SignUpPayload {
  first_name: string
  last_name: string
  username: string
  password: string
  email: string
}

export interface SignInPayload {
  username: string
  password: string
}

export const signUp = async (payload: SignUpPayload) => {
  const response = await apiClient.post("/custom-user/sign-up/", payload)
  return response.data
}

export const signIn = async (payload: SignInPayload) => {
  const response = await apiClient.post("/custom-user/sign-in/", payload)
  return response.data
}
