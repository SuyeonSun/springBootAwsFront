import { defineStore } from 'pinia';
import {api} from "boot/axios";

export const usePostsStore = defineStore('postsStore', {
  state: () => ({
    postsList: []
  }),

  actions: {
    async getPostsList() {
      try {
        const response = await api.get("/posts/list");
        this.postsList = response.data;
      } catch (error) {
        console.log("error");
      }
    }
  },
});
