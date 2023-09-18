<template>
    <div>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input v-model="editedItem.email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input v-model="editedItem.name" type="text" class="form-control" id="name">
        </div>
        <div class="mb-3">
          <label for="age" class="form-label">Age</label>
          <input v-model="editedItem.age" type="number" class="form-control" id="age">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';

  import servizio from '@/servizi/servizio';
  import { useRouter } from 'vue-router';
  
  export default {
    name: "modifPage",
    setup() {
      const router = useRouter();
      const editedItem = ref({
        email: '',
        name: '',
        age: null,
      });
  
      const submitForm = async () => {
        const itemId = router.currentRoute.value.params.id;
        console.log(itemId);
  
        try {
          const response = await servizio.updateItem(itemId, editedItem.value);
   
          console.log('Dati modificati con successo:', response.data);
        } catch (error) {
          console.error('Errore nella modifica dei dati:', error);
        }
      };
  
      const fetchItem = async () => {
        const itemId = router.currentRoute.value.params.id;
  
        try {
          const response = await servizio.getItemById(itemId);
          editedItem.value = response.data;
        } catch (error) {
          console.error("Errore nel recupero dei dati:", error);
        }
      };
  
    
      onMounted(() => {
        fetchItem();
      });
  
      return {
        editedItem,
        submitForm,
      };
    },
  };
  </script>
  
  <style>

  </style>
  