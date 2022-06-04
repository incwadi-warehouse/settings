import { reactive } from 'vue'
import { request } from '@/api'

export function useReservation() {
  const base = '/api/reservation'

  const state = reactive({
    reservations: null,
    reservation: null,
    isLoading: false,
  })

  const list = () => {
    state.isLoading = true
    return request('get', base + '/list')
      .then((response) => {
        state.reservations = response.data
      })
      .finally(() => {
        state.isLoading = false
      })
  }

  return {
    state,
    list,
  }
}
