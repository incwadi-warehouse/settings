<script setup>
import { useTitle } from '@baldeweg/ui'
import BookmarkShow from '@/components/bookmark/BookmarkShow.vue'
import BookmarkCreate from '@/components/bookmark/BookmarkCreate.vue'
import { useBookmark } from '@/composables/useBookmark.js'

useTitle({ title: 'Bookmark' })

defineProps({
  auth: Object,
})

const bookmark = useBookmark()
</script>

<template>
  <article>
    <b-container size="m">
      <h1>{{ $t('bookmarks') }}</h1>
      <p>{{ $t('bookmarks_desc') }}</p>
    </b-container>

    <b-container size="m">
      <BookmarkShow
        v-for="item in bookmark.state.bookmarks"
        :key="item.id"
        :item="item"
        :isAdmin="auth.state.me.isAdmin"
        @update="bookmark.update"
        @remove="bookmark.remove"
      />
    </b-container>

    <b-container size="m">
      <BookmarkCreate @create="bookmark.create" />
    </b-container>
  </article>
</template>
