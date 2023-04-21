<script setup>
import { ref } from 'vue'
import {useRouter} from "vue-router";

const drawer = ref(false);

const $router = useRouter();
const movePage = (path) => {
  $router.push(path);
}
</script>

<template>
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
      <q-header class="bg-white" bordered>
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="home" color="black" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="55"
        :breakpoint="500"
        bordered
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item clickable v-ripple @click="movePage('/')">
              <q-item-section avatar>
                <q-icon name="menu" />
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="movePage('/new')">
              <q-item-section avatar>
                <q-icon name="post_add" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
