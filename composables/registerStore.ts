import { defineStore } from "pinia";
import { Iuser } from "../types";
import useToast from "./useToast";
export const useRegisterStore = defineStore("register-store", {
  state: () => ({
    users: [] as Iuser[],
  }),
  actions: {
    //create a new book
    async create(user: Iuser) {
      let registerUrl = "/api/v1/register";
      const res = await fetch(registerUrl, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: user,
      });
      if (res.ok) {
        const data = await res.json();
        useToast().success(data.message);
        setTimeout(() => {
          navigateTo("/login");
        }, 8000);
      } else {
        const data = await res.json();
        useToast().error(data.message);

        navigateTo("/signUp");
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
