import { ref } from 'vue'
import { request } from '@/api'

export function useBook() {
  const stats = ref(null)

  const getStats = () => {
    request('get', '/api/book/stats').then((response) => {
      stats.value = response.data
    })
  }

  return {
    stats,
    getStats,
  }
}
