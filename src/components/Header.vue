<template>

    <div class="container">

<header class="d-flex py-3 border-bottom mb-5">
    <a to="/" class="me-auto text-dark text-decoration-none">
        <span class="fs-3">Proje</span>
    </a>
    <ul class="nav nav-pills">
  <li class="nav-item">
    <router-link class="nav-link" to="/">Yazılarım</router-link>
  </li>
  <li class="nav-item" v-if="!isAuth">
    <router-link class="nav-link" to="/users/register">Kayıt Ol</router-link>
  </li>

  <li class="nav-item" v-if="isAuth">
    <p class="nav-link" @click="handleSignOut" >Çıkış Yap</p>
  </li>
  <li class="nav-item" v-if="isAuth">
    <router-link class="nav-link" to="/admin/addArticle">Yazı Ekle</router-link>
  </li>
</ul>
</header>
    </div>
</template>

<script setup>
import {AUTH} from '@/firebase/configs.js';
import {signOut,onAuthStateChanged} from 'firebase/auth';
import {ref} from 'vue';

const isAuth=ref(AUTH.currentUser);

onAuthStateChanged(AUTH,user=>{
  console.log(user);
  isAuth.value=user;
})
const handleSignOut= () =>{
  try {
    signOut(AUTH);
  } catch (error) {
    console.log(error.message);
  }

}
</script>
