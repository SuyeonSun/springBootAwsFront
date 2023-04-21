<script setup>
import {onMounted, ref, watch} from "vue";
import {usePostsStore} from "stores/posts/posts-store";
import {useRouter, useRoute} from "vue-router";
import {storeToRefs} from "pinia";

const $router = useRouter();
const $route = useRoute();

const postsStore = usePostsStore();

const {id, author, title, content} = storeToRefs(postsStore);

const modifiedContent = ref(undefined);
const modifiedTitle = ref(undefined);

onMounted(async () => {
  await postsStore.getPost($route.params.id);
  modifiedTitle.value = title.value;
  modifiedContent.value = content.value;
})

const clickSaveBtn = async () => {
  const payload = {
    id: id.value,
    title: modifiedTitle.value,
    content: modifiedContent.value
  }
  await postsStore.modifyPost(payload);
  $router.push(`/post/${id.value}`);
}
</script>

<template>
  <q-page>
    <div class="column">
      <div>
        <q-input color="white" filled v-model="author" disable>
          <template v-slot:prepend>
            <q-icon name="face"/>
          </template>
        </q-input>
      </div>

      <div class="q-mt-md">
        <q-input color="white" filled v-model="modifiedTitle">
          <template v-slot:prepend>
            <q-icon name="tag"/>
          </template>
        </q-input>
      </div>

      <div class="q-mt-md">
        <q-input color="white" filled v-model="modifiedContent" type="textarea">
          <template v-slot:prepend>
            <q-icon name="draw"/>
          </template>
        </q-input>
      </div>

      <div class="row justify-end">
        <q-btn
          @click="clickSaveBtn"
          flat
          icon="send"
          class="q-mt-sm q-pa-none"
        />
      </div>
    </div>
  </q-page>
</template>
