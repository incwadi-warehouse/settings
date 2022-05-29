<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'format-create',
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
        <b-form-label for="format" hidden>
          {{ $t('new_format') }}
        </b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input
          type="text"
          id="format"
          :placeholder="$t('enter_format_and_hit_enter')"
          v-model="name"
        />
      </b-form-item>
    </b-form-group>
  </b-form>
</template>
