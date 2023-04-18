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
        <div>작성자</div>
        <q-input outlined v-model="author" dense disable/>
      </div>

      <div>
        <div>제목</div>
        <q-input outlined v-model="modifiedTitle" dense/>
      </div>

      <div>
        <div>내용</div>
        <q-input
          outlined
          v-model="modifiedContent"
          type="textarea"
        />
      </div>

      <div class="row justify-end">
        <q-btn
          type="submit"
          label="저장"
          class="q-mt-md"
          color="teal"
          @click="clickSaveBtn"
        />
      </div>
    </div>
  </q-page>
</template>
