import { ref } from '@vue/composition-api'
import { request } from '@/api'

export default function useBook() {
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
