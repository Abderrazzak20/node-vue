<template>
  <div>
    <form @submit.prevent="postdata">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input v-model="formData.email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input v-model="formData.name" type="text" class="form-control" id="name">
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input v-model="formData.age" type="number" class="form-control" id="age">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import servizio from '@/servizi/servizio';

export default {
  name: 'formulaireComponent',
  data() {
    return {
      formData: {
        email: '',
        name: '',
        age: null,
      },
    };
  },
  methods: {
    async postdata() {
      try {
        const response = await servizio.createItem(this.formData);
        // Esegui azioni dopo una risposta di successo, se necessario
        console.log('Dati inviati con successo:', response.data);
      } catch (error) {
        console.error('Errore nell\'invio dei dati:', error);
      }
    },
  },
};
</script>

<style>
  /* Stili CSS se necessario */
</style>
