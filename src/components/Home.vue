<template>
    <div class="row g-4">
        <div class="col-md-6" v-for="(note,index) in notes" :key="index">
            
            <div class="card">              
                <div class="card-body">
                    <h5 class="card-title">{{note.title}}</h5>
                    <p class="card-text">{{note.description}}</p>                   
                    
                </div>
                <div class="card-footer">
                    <router-link :to="`/admin/updateArticle/${note.id}`">Yazıyı Güncelle</router-link>


                </div>
             </div>
        </div>
        
        
    </div>
</template>


<script setup>

import {DB} from '@/firebase/configs.js'
import { collection, getDocs } from "firebase/firestore";
import {ref} from 'vue'

const notes = ref([]);

const notesCollection = collection(DB,'notes')

getDocs(notesCollection).then(snapShot =>{
    // console.log(snapShot)
    let documents= [];
    snapShot.docs.forEach(doc =>{
        documents.push({...doc.data(),id:doc.id})
    })
    notes.value=documents;
    // console.log(notes.value)

})
</script>