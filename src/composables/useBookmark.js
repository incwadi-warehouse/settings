import { onMounted, reactive, ref } from 'vue'
import { useRequest } from '@baldeweg/ui'
import Cookies from 'js-cookie'

export function useBookmark() {
  const { config, setAuthHeader, request } = useRequest()

  config.value.baseURL = import.meta.env.VUE_APP_API
  setAuthHeader(Cookies.get('token'))

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

  onMounted(list)

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
