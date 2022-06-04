<script setup>
import { useBookmark } from '@/composables/useBookmark.js'

const props = defineProps({
  item: Object,
  isAdmin: Boolean,
})

const { bookmark, set } = useBookmark()

set(props.item)
</script>

<template>
  <b-list divider v-if="bookmark">
    <template #title>
      <b-form
        @submit.prevent="$emit('update', bookmark)"
        :style="{ margin: '0' }"
      >
        <b-form-group>
          <b-form-item>
            <b-form-label for="name" hidden>
              {{ $t('name') }}
            </b-form-label>
          </b-form-item>
          <b-form-item>
            <b-form-input
              type="text"
              id="name"
              v-model="bookmark.name"
              @input="$emit('update', bookmark)"
            />
          </b-form-item>
        </b-form-group>
      </b-form>
    </template>

    <template #options>
      <b-dropdown v-if="isAdmin">
        <template #selector>
          <b-icon type="meatballs" />
        </template>
        <b-dropdown-item icon="bin" @click="$emit('remove', bookmark)">
          {{ $t('delete') }}
        </b-dropdown-item>
      </b-dropdown>
    </template>
  </b-list>
</template>
