<template>
  <div
    class="flex min-h-full items-center justify-center py-2 px-4 sm:px-6 lg:px-8 dark:bg-slate-900 md:pt-1 pt-2"
  >
    <div
      class="w-full max-w-md space-y-8 dark:bg-slate-700 dark:p-4 dark:rounded-lg border border-gray-300 p-1 rounded-lg"
    >
      <div>
        <img
          class="mx-auto h-12 w-auto rounded-full"
          src="../assets/images/catoon.png"
          alt="Your Company"
        />
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight dark:text-gray-400 text-gray-900"
        >
          Login
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          <a
            href="#"
            class="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
            >Welcome</a
          >
        </p>
      </div>
      <Form class="mt-8 space-y-6" @submit="onSubmit" :validation-schema="schema">
        <Field type="hidden" name="remember" value="true" class="dark:bg-gray-400" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <Field
              name="email"
              type="email"
              v-model="user.email"
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-gray-100"
              placeholder="Enter email.."
            />
            <ErrorMessage
              name="email"
              class="text-red-500 dark:text-orange-600 text-sm"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <Field
              name="password"
              type="password"
              v-model="user.password"
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-gray-100"
              placeholder="password"
            />
            <ErrorMessage
              name="password"
              class="text-red-600 dark:text-orange-600 text-sm"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <Field
              name="rememberMe"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              for="rememberMe"
              class="ml-2 block text-sm text-gray-900 dark:text-gray-400"
              >Remember me</label
            >
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 dark:text-gray-400 hover:text-indigo-500"
              >Forgot your password?</a
            >
          </div>
        </div>
        <!-- Added today -->
        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <!-- Heroicon name: mini/lock-closed -->
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            {{ loading ? "processing.." : "login" }}
          </button>
        </div>
        <div>
          <nuxt-link to="/signUp" class="text-white underline"> signup? </nuxt-link>
        </div>
      </Form>
    </div>
  </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useLoginStore } from "~~/composables/loginStore";
const loginUser = useLoginStore();

let user = ref({
  email: "",
  password: "",
});

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  rememberMe: yup.boolean(),
});
function onSubmit(values) {
  let results = JSON.stringify(user.value);
  loginUser.create(results);
}
onMounted(() => {});
</script>

<style></style>
