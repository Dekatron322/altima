import apiClient from "utils/apiClient"

export interface OrderPayload {
  id?: string
  full_name?: string
  contact_number?: string
  billing_address_same_shipping_address?: boolean
  billing_address_street?: string
  billing_address_city?: string
  billing_address_state?: string
  billing_address_postal_code?: string
  billing_address_country?: string

  shipping_address_street?: string
  shipping_address_city?: string
  shipping_address_state?: string
  shipping_address_postal_code?: string
  shipping_address_country?: string
  email?: boolean
  phone?: boolean
  whatsapp?: boolean
  product_selection_altima_core?: boolean
  product_selection_altima_elite?: boolean
  quantity?: string
  door_spec_default_size?: string
  door_spec_manual_size?: boolean
  door_spec_manual_size_width?: string
  door_spec_manual_size_height?: string
  door_spec_manual_size_unit?: string
  door_spec_frame_type?: string
  door_spec_material_type?: string
  door_spec_finish_type?: string
  handle_placement?: string
  re_enforced_lock?: boolean
  anti_theft?: boolean
  alarm?: boolean
  motion_sensor?: boolean
  video_door_bell?: boolean
  intercom_sys?: boolean
  camera?: boolean
  voice_assisted?: boolean
  connectivity?: string
  power_source?: string
  type_installation?: string
  prefered_installation?: string
  special_installation_instruction?: string
  extended_warranty?: boolean
  installation_support?: boolean
  payment_confirmation?: boolean
  smart_keypad_access?: boolean
  battery_backup?: boolean
  fire_detection?: boolean
  remote_lock_unlock?: boolean
  status?: string
  total?: string
  email_address?: string
  deposit_amount?: string
  pub_date?: string
}

export interface UserInformationPayload {
  id: string
  preorder: {
    id: string
    full_name?: string
    contact_number?: string
    billing_address_same_shipping_address?: boolean
    billing_address_street?: string
    billing_address_city?: string
    billing_address_state?: string
    billing_address_postal_code?: string
    billing_address_country?: string

    shipping_address_street?: string
    shipping_address_city?: string
    shipping_address_state?: string
    shipping_address_postal_code?: string
    shipping_address_country?: string
    email?: boolean
    phone?: boolean
    whatsapp?: boolean
    product_selection_altima_core?: boolean
    product_selection_altima_elite?: boolean
    quantity?: string
    door_spec_default_size?: string
    door_spec_manual_size?: boolean
    door_spec_manual_size_width?: string
    door_spec_manual_size_height?: string
    door_spec_manual_size_unit?: string
    door_spec_frame_type?: string
    door_spec_material_type?: string
    door_spec_finish_type?: string
    handle_placement?: string
    re_enforced_lock?: boolean
    anti_theft?: boolean
    alarm?: boolean
    motion_sensor?: boolean
    video_door_bell?: boolean
    intercom_sys?: boolean
    camera?: boolean
    voice_assisted?: boolean
    connectivity?: string
    power_source?: string
    type_installation?: string
    prefered_installation?: string
    special_installation_instruction?: string
    extended_warranty?: boolean
    installation_support?: boolean
    payment_confirmation?: boolean
    addition_comment?: string
    total?: string
    pub_date: string
    status: string
    email_address?: string
    deposit_amount?: string
  }
}

export const getOrderInformation = async (userId: string) => {
  const response = await apiClient.get(`/custom-user/get-user-detail/${userId}/`)
  return response.data
}

export const addOrderToUser = async (userId: string, payload: OrderPayload) => {
  const response = await apiClient.post(`/custom-user/add-preorder-to-custom-user/${userId}/`, payload)
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

export const updateOrderStatus = async (orderId: string, status: string) => {
  const response = await apiClient.put(`/preorder/preorder/${orderId}/update-status/`, { status })
  return response.data
}
