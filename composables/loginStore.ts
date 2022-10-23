import { IexistingUser } from "./../types/index";
import { defineStore } from "pinia";
import useToast from "./useToast";
export const useLoginStore = defineStore("login-store", {
  state: () => ({
    users: [] as IexistingUser[],
  }),
  actions: {
    //create a new book
    async create(user: IexistingUser) {
      let loginUrl = "/api/v1/login";
      const res = await fetch(loginUrl, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: user,
      });
      if (res.ok) {
        const data = await res.json();
        useToast().success(data.message);
        setTimeout(() => {
          navigateTo("/Songs");
        }, 5000);
      } else {
        const data = await res.json();
        useToast().error(data.message);
      }
      /*  .catch((err) => {
          useToast().error(err.data.message);
        })
        .then(async (res) => {
          let msg = await res;
          if (msg) return useToast().success(msg);
          useToast().error({ msg: res });
        }); */
    },
    //update a book
  },
});
