<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'staff-create',
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
        <b-form-label for="staff" hidden>
          {{ $t('new_staff') }}
        </b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input
          type="text"
          id="staff"
          :placeholder="$t('enter_staff_and_hit_enter')"
          v-model="name"
        />
      </b-form-item>
    </b-form-group>
  </b-form>
</template>
