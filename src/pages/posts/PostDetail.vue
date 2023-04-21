<script setup>
import {onMounted, ref, watch} from "vue";
import {usePostsStore} from "stores/posts/posts-store";
import {useRouter, useRoute} from "vue-router";
import {storeToRefs} from "pinia";

const $router = useRouter();
const $route = useRoute();

const postsStore = usePostsStore();

onMounted(() => {
  postsStore.getPost($route.params.id);
})

const {id, author, title, content} = storeToRefs(postsStore);

const clickModifyBtn = () => {
  $router.push(`/modify/${id.value}`);
}

const clickDeleteBtn = async () => {
  await postsStore.deletePost($route.params.id);
  $router.push(`/`);
}
</script>

<template>
  <q-page>
    <div class="column">
      <div class="row items-center">
        <q-icon name="face" size="sm"/>
        <div class="text-body1 q-ma-none q-pl-sm">{{author}}</div>
      </div>

      <div class="row items-center q-mt-sm">
        <q-icon name="tag" size="sm"/>
        <div class="text-body1 q-ma-none q-pl-sm">{{title}}</div>
      </div>

      <div class="row items-center q-mt-sm">
        <q-icon name="draw" size="sm"/>
        <div class="text-body1 q-ma-none q-pl-sm">{{content}}</div>
      </div>

      <div class="row justify-end">
        <q-btn
          @click="clickModifyBtn"
          flat
          icon="auto_fix_normal"
          class="q-mt-sm q-pa-none"
        />
        <q-btn
          @click="clickDeleteBtn"
          flat
          icon="delete"
          class="q-mt-sm q-pa-none q-ml-sm"
        />
      </div>
    </div>
  </q-page>
</template>
