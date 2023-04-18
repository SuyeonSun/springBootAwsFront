<script setup>
import {onMounted, ref} from "vue";
import {usePostsStore} from "stores/posts/posts-store";
import {useRouter, useRoute} from "vue-router";
import {storeToRefs} from "pinia";

const $router = useRouter();
const $route = useRoute();

const postsStore = usePostsStore();

onMounted(() => {
  postsStore.getPost($route.params.id);
})

const {author, title, content} = storeToRefs(postsStore);

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

<!--      <div class="row justify-end">-->
<!--        <q-btn-->
<!--          type="submit"-->
<!--          label="Save"-->
<!--          class="q-mt-md"-->
<!--          color="teal"-->
<!--        />-->
<!--      </div>-->
    </div>
  </q-page>
</template>
