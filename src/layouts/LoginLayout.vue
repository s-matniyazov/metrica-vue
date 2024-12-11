<template>
  <div id="body" class="auth-page card-bg">
    <div class="container-fluid">
      <div class="row vh-100">
        <div class="col-12">
          <div class="card-body p-0">
            <div class="row d-flex align-items-center">
              <div class="col-md-5 col-xl-3 col-lg-4">
                <div class="card mb-0 border-0">
                  <div class="card-body p-0">
                    <div class="text-center p-3">
                      <div href="" class="logo logo-admin">
                        <img src="@/assets/logo.svg" height="50" alt="logo" class="auth-logo">
                      </div>
                      <h4 class="mt-3 mb-1 fw-semibold text-white font-18">Enter Password And Use Metrica</h4>
                      <p class="text-muted  mb-0">Hello, enter your password to unlock the screen !</p>
                    </div>
                  </div>
                  <div class="card-body pt-0">
                    <form class="my-4" @submit="onSubmit">
                      <div class="form-group mb-2">
                        <label class="form-label" for="username">Username</label>
                        <input type="text" class="form-control" id="username" v-model="login"
                               placeholder="Enter username">
                      </div>

                      <div class="form-group">
                        <label class="form-label" for="userpassword">Password</label>
                        <input type="password" class="form-control" v-model="password" id="userpassword"
                               placeholder="Enter password">
                      </div>

                      <!--                      remember-->
                      <div class="form-group row mt-3">
                        <div class="col-sm-6">
                          <div class="form-check form-switch form-switch-success">
                            <input class="form-check-input" type="checkbox" id="customSwitchSuccess">
                            <label class="form-check-label" for="customSwitchSuccess">Remember me</label>
                          </div>
                        </div>
                        <div class="col-sm-6 text-end">
                          <a href="auth-recover-pw.html" class="text-muted font-13"><i class="dripicons-lock"></i>
                            Forgot password?</a>
                        </div>
                      </div>

                      <div class="form-group mb-0 row">
                        <div class="col-12">
                          <div class="d-grid mt-3">
                            <button class="btn btn-primary" type="submit">Log In
                              <i class="mdi mdi-login"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>

                    <div class="m-3 text-center text-muted">
                      <p class="mb-0">Don't have an account ? <a href="auth-register.html" class="text-primary ms-2">Free
                        Resister</a></p>
                    </div>
                    <hr class="hr-dashed mt-4">
                    <div class="text-center mt-n5">
                      <h6 class="card-bg px-3 my-4 d-inline-block">Or Login With</h6>
                    </div>
                    <div class="d-flex justify-content-center mb-1">
                      <a href="#"
                         class="d-flex justify-content-center align-items-center thumb-sm bg-soft-primary rounded-circle me-2">
                        <i class="fab fa-facebook align-self-center"></i>
                      </a>
                      <a href="#"
                         class="d-flex justify-content-center align-items-center thumb-sm bg-soft-info rounded-circle me-2">
                        <i class="fab fa-twitter align-self-center"></i>
                      </a>
                      <a href="#"
                         class="d-flex justify-content-center align-items-center thumb-sm bg-soft-danger rounded-circle">
                        <i class="fab fa-google align-self-center"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-xl-9 col-lg-8  p-0 vh-100 d-flex justify-content-center auth-bg">
                <div class="accountbg d-flex align-items-center">
                  <div class="account-title text-center text-white">
                    <h4 class="mt-3 text-white">Welcome To <span class="text-warning">Taskwise</span></h4>
                    <h1 class="text-white">Let's Get Started</h1>
                    <p class="font-18 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet
                      tellus ut tincidunt euismod.</p>
                    <div class="border w-25 mx-auto border-warning"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import {ref} from "vue";
import router from "@/router/index.js";
import axios from 'axios'

const login = ref("admin");
const password = ref("admin");

const onSubmit = (e) => {
  e.preventDefault();

  router.push({path: "/home"})
  return;

  axios.post("http://10.50.70.200:8088/myapp/api", {
    "method": "user.get_usermenus",
    "params": {
      "user_id": 1
    }
  })
      .then((res) => {
        if (login.value === "admin" && password.value === "admin") {
          router.push({path: "/home"})
        } else {
          alert("WRONG!!!")
        }
      })
      .catch((e) => {
        console.log(e);
        alert("ERROR -- " + e)
      });

}

</script>

<style scoped>

</style>