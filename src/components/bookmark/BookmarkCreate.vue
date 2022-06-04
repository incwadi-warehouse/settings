<script setup>
import { ref } from 'vue'

const emit = defineEmits(['create'])

const url = ref('')

const submit = () => {
  emit('create', url.value)
  url.value = ''
}
</script>

<template>
  <b-form @submit.prevent="submit">
    <b-form-group>
      <b-form-item>
        <b-form-label for="bookmark" hidden>
          {{ $t('new_bookmark') }}
        </b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input
          type="text"
          id="bookmark"
          :placeholder="$t('enter_bookmark_and_hit_enter')"
          v-model="url"
        />
      </b-form-item>
    </b-form-group>
  </b-form>
</template>
