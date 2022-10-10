import { defineStore } from "pinia";
import { IexistingUser } from "../types";
import useToast from "./useToast";
export const useLoginStore = defineStore("login-store", {
  state: () => ({
    users: [] as IexistingUser[],
  }),
  actions: {
    //create a new book
    async create(user: IexistingUser) {
      let loginUrl = "api/v1/login";
      /*  await $fetch(loginUrl, {
        method: "POST",
        body: user,
      }) */
      const res = await fetch(loginUrl, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.parse(user),
      });
      if (res.ok) {
        console.log(JSON.parse(user));
        const data = await res.json();
        useToast().success(data.message);
        /*  setTimeout(() => {
          navigateTo("/Songs");
        }, 8000); */
      } else {
        const data = await res.json();
        useToast().error(data.message);

        navigateTo("/signUp");
      }
      /* .catch((err) => {
          useToast().error(err);
          console.log(err);
        }) */

      /*  .then(async (res) => {
          let successMsg = "logged in successfully";
          let msg = await res;
          if (msg) return useToast().success(msg);
          useToast().error("something went wrong");
        }); */
    },
    //update a book
  },
});
