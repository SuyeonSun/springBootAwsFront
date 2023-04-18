import {defineStore} from 'pinia';
import {api} from "boot/axios";

export const usePostsStore = defineStore('postsStore', {
  state: () => ({
    postsList: [],
    id: null,
    author: "",
    title: "",
    content: ""
  }),

  actions: {
    async getPostsList() {
      try {
        const response = await api.get("/posts/list");
        this.postsList = response.data;
      } catch (error) {
        console.log("error");
      }
    },

    async savePost(payload) {
      try {
        const response = await api.post("/posts/new", payload);
      } catch (error) {
        console.log("error");
      }
    },

    async getPost(payload) {
      try {
        const response = await api.get(`/posts/${payload}`);
        this.id = response.data.id;
        this.author = response.data.author;
        this.title = response.data.title;
        this.content = response.data.content;
      } catch (error) {
        console.log("error");
      }
    },

    async modifyPost(payload) {
      try {
        const response = await api.put(`/posts/${payload.id}`, {
          title: payload.title,
          content: payload.content
        });
      } catch (error) {
        console.log("error");
      }
    },

    async deletePost(payload) {
      try {
        const response = await api.delete(`/posts/${payload}`);
      } catch (error) {
        console.log("error");
      }
    }
  },
});
