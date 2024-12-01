import apiClient from "utils/apiClient"

export interface SignUpPayload {
  first_name: string
  last_name: string

  password: string
  email: string
}

export interface SignInPayload {
  email: string
  password: string
}

export interface ForgotPasswordPayload {
  email: string
}

export const signUp = async (payload: SignUpPayload) => {
  const response = await apiClient.post("/custom-user/sign-up/", payload)
  return response.data
}

export const signIn = async (payload: SignInPayload) => {
  const response = await apiClient.post("/custom-user/sign-in/", payload)
  return response.data
}

export const forgotPassword = async (payload: ForgotPasswordPayload) => {
  const response = await apiClient.post("/custom-user/forgot-password/", payload)
  return response.data
}
