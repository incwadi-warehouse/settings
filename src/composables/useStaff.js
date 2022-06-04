import { onMounted, reactive, ref } from 'vue'
import { request } from '@/api'

export function useStaff() {
  const base = '/api/staff'

  const state = reactive({
    staff: [],
  })

  const staff = ref('')

  const set = (data) => {
    staff.value = data
  }

  const list = () => {
    return request('get', base + '/').then((response) => {
      state.staff = response.data
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
    staff,
    create,
    update,
    remove,
    set,
  }
}
