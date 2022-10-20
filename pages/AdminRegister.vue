<template>
  <VerticalNav />
  <body class="h-screen font-sans login bg-cover overflow-hidden">
    <div class="container mx-auto h-full flex flex-1 justify-center items-center">
      <div class="w-full max-w-lg">
        <div class="leading-loose">
          <form class="max-w-xl m-4 p-10 bg-slate-800 rounded shadow-xl">
            <p class="text-gray-300 text-center text-lg font-bold">Register as Admin</p>
            <div class="">
              <label class="block text-sm text-gray-200" for="username">Username</label>
              <input
                class="w-full px-5 py-1 dark:text-gray-300 text-gray-200 rounded"
                id="username"
                name="username"
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
</template>

<script>
import VerticalNav from "../components/verticalNav.vue";
export default { components: { VerticalNav } };
</script>

<style>
.login {
  background: url("../assets/images/login-new.jpeg");
}
</style>
