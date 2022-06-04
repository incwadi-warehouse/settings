<script setup>
import { ref } from 'vue'

const emit = defineEmits(['create'])

const name = ref('')

const submit = () => {
  emit('create', name.value)
  name.value = ''
}
</script>

<template>
  <b-form @submit.prevent="submit">
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
