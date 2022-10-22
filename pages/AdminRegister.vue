<template>
  <div
    class="flex justify-center flex-col gap-y-3 items-center mx-auto p-3 text-slate-900 text-3xl dark:bg-slate-800 bg-slate-400"
    v-if="!auth"
  >
    <Terms :msg="msg" />
  </div>
  <div v-else>
    <VerticalNav />
    <body class="h-screen font-sans login bg-cover overflow-hidden">
      <div class="container mx-auto h-full flex flex-1 justify-center items-center">
        <div class="w-full max-w-lg">
          <div class="leading-loose">
            <form
              class="max-w-xl m-4 p-10 bg-slate-800 rounded shadow-xl"
              @submit.prevent="submit"
            >
              <p class="text-gray-300 text-center text-lg font-bold">Register as Admin</p>
              <div class="">
                <label class="block text-sm text-gray-200" for="username">Username</label>
                <input
                  class="w-full px-5 py-1 dark:text-gray-300 text-gray-200 rounded"
                  id="username"
                  name="username"
                  v-model="name"
                  type="text"
                  required=""
                  placeholder="User Name"
                  aria-label="username"
                />
              </div>
              <div class="">
                <label class="block text-sm text-gray-200" for="email">Email</label>
                <input
                  class="w-full px-5 py-1 text-gray-200 dark:text-gray-300 bg-gray-200 rounded"
                  id="email"
                  name="email"
                  type="email"
                  v-model="email"
                  required=""
                  placeholder="email.."
                  aria-label="email"
                />
              </div>
              <div class="mt-2">
                <label class="block text-sm text-gray-200" for="password">Password</label>
                <input
                  class="w-full px-5 py-1 text-gray-200 dark:text-gray-300 bg-gray-200 rounded"
                  id="password"
                  name="password"
                  v-model="password"
                  type="text"
                  required=""
                  placeholder="*******"
                  aria-label="password"
                />
              </div>
              <div class="mt-4 items-center justify-between">
                <button
                  class="px-4 py-1 text-white font-light tracking-wider bg-indigo-600 rounded"
                  type="submit"
                >
                  Register
                </button>
                <a
                  class="inline-block right-0 align-baseline font-bold text-sm text-500 p-1 text-gray-300"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <nuxt-link
                to="/AdminLogin"
                class="inline-block right-0 align-baseline font-bold text-sm text-500 text-gray-200"
              >
                Already have account ?
              </nuxt-link>
            </form>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import VerticalNav from "../components/verticalNav.vue";
export default {
  components: { VerticalNav },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      auth: false,
      msg: "",
    };
  },
  methods: {
    async submit() {
      let url = "http://localhost:7000/AdminRegister";
      /* let url = "/api/v1/register"; */
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password,
        }),
      });
      if (res.ok) {
        let data = await res.json();
        alert(data.message);
        await this.$router.push("/AdminLogin");
      } else {
        let data = await res.json();
        alert(data.message);
      }
    },
    async logout() {
      let url = "http://localhost:7000/AdminLogout";
      /* let url = "/api/v1/logout"; */
      let res = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        this.$router.push("/AdminLogin");
        location.reload();
      } else {
        let data = await res.json();
        console.log(data);
        this.$router.push("/AdminRegister");
        location.reload();
      }
    },
  },
  async mounted() {
    try {
      let url = "http://localhost:7000/Admin";
      /* let url = "/api/v1/user"; */
      const response = await fetch(url, {
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const content = await response.json();
        this.auth = true;
        console.log(content);
      } else {
        const content = await response.json();
        this.msg = content.message;
        this.auth = false;
        console.log(content);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
.login {
  background: url("../assets/images/login-new.jpeg");
}
</style>
