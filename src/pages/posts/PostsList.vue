<script setup>
import {onMounted} from "vue";
import {usePostsStore} from "stores/posts/posts-store";
import {storeToRefs} from "pinia/dist/pinia";
import PostsListItem from "components/posts/PostsListItem";

const postsStore = usePostsStore();

const {postsList} = storeToRefs(postsStore);

onMounted(() => {
  postsStore.getPostsList();
})
</script>

<template>
  <q-page>
    <div v-if="postsList.length === 0" class="text-center">
      현재 포스팅 된 게시글이 없습니다.
    </div>
    <div v-else v-for="(post, idx) in postsList" v-bind:key="idx">
      <posts-list-item :title="post.title"
                       :createdDate="post.createdDate"
                       :modifiedDate="post.modifiedDate">
      </posts-list-item>
    </div>
  </q-page>
</template>
