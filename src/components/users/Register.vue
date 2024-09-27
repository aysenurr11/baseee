<template>
  <div class="row justify-content-center">
      <div class="col-md-6">
          <h1 class="text-center">{{register ? 'Kayıt Formu':'Kullanıcı Girişi'}}</h1>   
          <form @submit.prevent="submitForm">
              <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input type="email" v-model="formData.email"  class="form-control">                  
              </div>
                <div class="mb-3">
                  <label class="form-label">Şifre</label>
                  <input type="password" v-model="formData.password" class="form-control">
              </div>               
              <button type="submit" class="btn btn-primary btn-lg">{{register ? 'Kaydol' : 'Giriş Yap'}}</button>
           </form> 
           <hr/>
           <button class="btn btn-outline-primary "  @click="register = !register">
             {{register ? 'Giriş Yap' : 'Kaydol'}} </button>       

      </div>
      
  </div>
</template>
<script setup>
import {reactive,ref} from 'vue';
import {AUTH} from '@/firebase/configs.js';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {useRouter,useRoute} from 'vue-router';

const router=useRouter();

const register=ref(true);
const formData=reactive({
  email:'',
  password:''
})


const registerUser = async() =>{
      await createUserWithEmailAndPassword(AUTH,formData.email,formData.password);
      router.push('/');
}


const submitForm = () =>{
  if(register.value){
      registerUser();
  }
  else{
      signInUser();
  }
}
</script>