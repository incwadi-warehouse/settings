import { onMounted, reactive, ref } from 'vue'
import { request } from '@/api'

export function useCondition() {
  const base = '/api/condition'

  const state = reactive({
    conditions: [],
  })

  const condition = ref('')

  const set = (data) => {
    condition.value = data
  }

  const list = () => {
    return request('get', base + '/').then((response) => {
      state.conditions = response.data
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
    condition,
    create,
    update,
    remove,
    set,
  }
}
