<script setup>
const props = defineProps({
  title: String,
  createdDate: String,
  modifiedDate: String
})
</script>

<template>
  <q-card class="my-card q-mb-sm" flat bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ props.title }}</q-item-label>
        <q-item-label caption>
          {{ props.createdDate }}
        </q-item-label>
        <q-item-label caption class="no-margin">
          {{ props.modifiedDate }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>
