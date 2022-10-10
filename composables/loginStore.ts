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
      await fetch(loginUrl, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: user,
      })
        .then((res) => {
          res.json().then((data) => {
            if (res.ok) {
              useToast().success(data.message);
              setTimeout(() => {
                navigateTo("/Songs");
              }, 8000);
            } else {
              useToast().error(data.message);
              setTimeout(() => {
                navigateTo("/login");
              }, 8000);
            }
          });
        })
        .catch((err) => {
          console.log(`error occured ${err}`);
        });
      /*  if (res.status == 200) {
        const data = await res.json();
        console.log(res);
        console.log(data);

        useToast().success("waiting....");
         setTimeout(() => {
          navigateTo("/Songs");
        }, 8000);
      } else {
        const data = await res.json();
        useToast().error(data.message);

        navigateTo("/login");
      } */
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
