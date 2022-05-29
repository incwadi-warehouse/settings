<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'condition-create',
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
        <b-form-label for="condition" hidden>
          {{ $t('new_condition') }}
        </b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input
          type="text"
          id="condition"
          :placeholder="$t('enter_condition_and_hit_enter')"
          v-model="name"
        />
      </b-form-item>
    </b-form-group>
  </b-form>
</template>
