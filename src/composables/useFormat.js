import { onMounted, reactive, ref } from 'vue'
import { request } from '@/api'

export function useFormat() {
  const base = '/api/format'

  const state = reactive({
    formats: [],
  })

  const format = ref('')

  const set = (data) => {
    format.value = data
  }

  const list = () => {
    return request('get', base + '/').then((response) => {
      state.formats = response.data
    })
  }

  onMounted(list)

  const create = (data) => {
    return request('post', base + '/new', { name: data }).then(() => {
      list()
    })
  }

  const update = (data) => {
    return request('put', base + '/' + data.id, { name: data.name }).catch(
      () => {
        list()
      }
    )
  }

  const remove = (data) => {
    return request('delete', base + '/' + data.id).then(() => {
      list()
    })
  }

  return {
    state,
    format,
    create,
    update,
    remove,
    set,
  }
}
