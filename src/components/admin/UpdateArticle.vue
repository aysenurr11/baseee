<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="text-center">Yazıyı Güncelle</h1>   
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label class="form-label">Başlık</label>
                    <input v-model="formData.title" type="text" class="form-control">                  
                </div>
                  <div class="mb-3">
                    <label class="form-label">Yazı</label>
                    <textarea v-model="formData.description" type="text" class="form-control" rows="3"></textarea>               
                </div>
               
                <button type="submit" class="btn btn-primary btn-lg">Güncelle</button>
                <hr/>
                <button type="submit" @click="deleteNote" class="btn btn-primary btn-lg">Sil</button>
             </form>        

        </div>
        
    </div>
</template>

<script setup>
import {DB} from '@/firebase/configs.js'
// import { collection, addDoc } from "firebase/firestore"; 
import { doc, getDoc,updateDoc,deleteDoc } from "firebase/firestore";
import {reactive} from 'vue';
import {useRouter,useRoute} from 'vue-router';
const router=useRouter();
const route=useRoute();

const formData=reactive({
    title:'',
    description:''
})

const docRef = doc(DB, "notes", route.params.id);
getDoc(docRef).then(snapshot =>{
    // console.log(snapshot.data())

    formData.title=snapshot.data().title;
    formData.description=snapshot.data().description;
}).catch(error=>{
    console.log(error)
})

const submitForm = async() =>{
    try {
        const docRef = doc(DB, "notes", route.params.id);
        await updateDoc(docRef,{...formData})
        router.push('/');
    } catch (error) {
        console.log(error);
    }
   
}

const deleteNote = async() =>{
    try {
          const docRef = doc(DB, "notes", route.params.id);
          await deleteDoc(docRef);
           router.push('/');        
    } catch (error) {
        console.log(error);
    }
}
</script>