<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="text-center">Yeni Yazı Ekle</h1>

            <form @submit.prevent="submitForm">
  <div class="mb-3">
    <label class="form-label">Başlık</label>
    <input v-model="formData.title" type="text" class="form-control">
    
  </div>
  <div class="mb-3">
    <label class="form-label">Yazı</label>
    <textarea v-model="formData.description" type="text" class="form-control" rows="3"></textarea>
    
  </div>
  
  <button type="submit" class="btn btn-primary btn-lg">Ekle</button>
</form>

        </div>
       
        </div>
</template>

<script setup>
import {DB} from '@/firebase/configs.js'
import { collection, addDoc } from "firebase/firestore"; 
import {reactive} from 'vue';
import {useRouter} from 'vue-router';
const router=useRouter()

const formData=reactive({
title: '',
description:''
})
const submitForm = async() =>{
  const notesCollection = collection(DB,'notes')
  await addDoc(notesCollection,{
    ...formData
  })
  formData.title='';
  formData.description='';

  router.push('/') //anasayfaya yönlendirme işlemi

}
</script>