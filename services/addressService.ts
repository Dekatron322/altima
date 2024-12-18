import apiClient from "utils/apiClient"

export interface AddressPayload {
  full_name: string
  email_address: string
  contact_number: string
  street: string
  city: string
  state: string
  zip_code: string
  country: string
  shipping_street: string
  shipping_city: string
  shipping_state: string
  shipping_postal: string
  shipping_country: string
  status: boolean
}

export interface UserInformationPayload {
  id: string
  address: {
    id: string
    full_name: string
    email_address: string
    contact_number: string
    street: string
    city: string
    state: string
    zip_code: string
    country: string
    shipping_street: string
    shipping_city: string
    shipping_state: string
    shipping_postal: string
    shipping_country: string
    status: boolean
  }
}

export const getAddressInformation = async (userId: string) => {
  const response = await apiClient.get(`/custom-user/get-user-detail/${userId}/`)
  return response.data
}

export const addAddressToUser = async (userId: string, payload: AddressPayload) => {
  const response = await apiClient.post(`/custom-user/add-address-to-custom-user/${userId}/`, payload)
  return response.data
}

export const deleteAddress = async (addressId: string) => {
  const response = await apiClient.delete(`/address/address/${addressId}/`)
  return response.data
}

export const getAddress = async (userId: string) => {
  const response = await apiClient.get(`/address/address/${userId}/`)
  return response.data
}

export const editAddress = async (addressId: string, payload: AddressPayload) => {
  const response = await apiClient.put(`/address/address/${addressId}/`, payload)
  return response.data
}

export const setDefaultAddress = async (addressId: string, userId: string, payload: AddressPayload) => {
  const response = await apiClient.put(`/address/address/${addressId}/set-default/${userId}/`, payload)
  return response.data
}