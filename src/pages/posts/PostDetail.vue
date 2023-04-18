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
      <div>
        <div>작성자</div>
        <q-input outlined v-model="author" dense disable/>
      </div>

      <div>
        <div>제목</div>
        <q-input outlined v-model="title" dense disable/>
      </div>

      <div>
        <div>내용</div>
        <q-input
          outlined
          v-model="content"
          type="textarea"
          disable
        />
      </div>

      <div class="row justify-end">
        <q-btn
          label="수정"
          class="q-mt-md q-mr-xs"
          color="teal"
          @click="clickModifyBtn"
        />
        <q-btn
          label="삭제"
          class="q-mt-md"
          color="teal"
          @click="clickDeleteBtn"
        />
      </div>
    </div>
  </q-page>
</template>
