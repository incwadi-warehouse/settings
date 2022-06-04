import { reactive, ref } from 'vue'
import { request } from '@/api'

export function useBookmark() {
  const base = '/api/bookmark'

  const state = reactive({
    bookmarks: [],
  })

  const bookmark = ref('')

  const set = (data) => {
    bookmark.value = data
  }

  const list = () => {
    return request('get', base + '/').then((response) => {
      state.bookmarks = response.data
    })
  }

  // onMounted(list)

  const create = (data) => {
    return request('post', base + '/new', { url: data }).then(() => {
      list()
    })
  }

  const createFromPage = () => {
    return request('post', base + '/new', { url: window.location.href }).then(
      () => {
        list()
      }
    )
  }

  const open = (url) => {
    window.location.href = url
  }

  const update = (data) => {
    return request('put', base + '/' + data.id, {
      name: data.name,
      url: data.url,
    }).then(() => {
      list()
    })
  }

  const remove = (data) => {
    return request('delete', base + '/' + data.id).then(() => {
      list()
    })
  }

  return {
    state,
    bookmark,
    list,
    create,
    createFromPage,
    open,
    remove,
    update,
    set,
  }
}
