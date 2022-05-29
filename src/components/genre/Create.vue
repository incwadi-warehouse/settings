<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'genre-create',
  setup() {
    const name = ref('')

    return { name }
  },
}
</script>

<template>
  <b-form
    @submit.prevent="
      $emit('create', name)
      name = ''
    "
  >
    <b-form-group>
      <b-form-item>
        <b-form-label for="genre" hidden>
          {{ $t('new_genre') }}
        </b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input
          type="text"
          id="genre"
          :placeholder="$t('enter_genre_and_hit_enter')"
          v-model="name"
        />
      </b-form-item>
    </b-form-group>
  </b-form>
</template>
