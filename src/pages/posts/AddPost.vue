<script setup>
import {ref} from "vue";
import {usePostsStore} from "stores/posts/posts-store";
import {useRouter} from "vue-router";

const postsStore = usePostsStore();

const $router = useRouter();

const author = ref(undefined);
const title = ref(undefined);
const content = ref(undefined);

const clickSubmitBtn = async () => {
  const payload = {
    author: author.value,
    title: title.value,
    content: content.value
  }
  await postsStore.savePost(payload);
  $router.push("/");
}
</script>

<template>
  <q-page>
    <div class="column">
      <div>
        <div>작성자</div>
        <q-input outlined v-model="author" dense />
      </div>

      <div>
        <div>제목</div>
        <q-input outlined v-model="title" dense />
      </div>

      <div>
        <div>내용</div>
        <q-input
          outlined
          v-model="content"
          type="textarea"
        />
      </div>

      <div class="row justify-end">
        <q-btn
          type="submit"
          label="저장"
          class="q-mt-md"
          color="teal"
          @click="clickSubmitBtn"
        />
      </div>
    </div>
  </q-page>
</template>
