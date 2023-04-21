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
        <q-input color="white" filled v-model="author">
          <template v-slot:prepend>
            <q-icon name="face"/>
          </template>
        </q-input>
      </div>

      <div class="q-mt-md">
        <q-input color="white" filled v-model="title">
          <template v-slot:prepend>
            <q-icon name="tag"/>
          </template>
        </q-input>
      </div>

      <div class="q-mt-md">
        <q-input color="white" filled v-model="content" type="textarea">
          <template v-slot:prepend>
            <q-icon name="draw"/>
          </template>
        </q-input>
      </div>

      <div class="row justify-end">
        <q-btn
          @click="clickSubmitBtn"
          flat
          icon="send"
          class="q-mt-sm q-pa-none"
        />
      </div>
    </div>
  </q-page>
</template>
