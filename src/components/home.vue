<template>
    <div>
      <h1>Benvenuto nella tua Homepage</h1>
      <p>Questa è la tua prima pagina Vue.js.</p>
      <button @click="fetchData">Mostra/Nascondi Dati</button>
  
      <ul v-if="showData">
        <li v-for="item in items" :key="item._id">
          age: {{ item.age }} name: {{ item.name }} email: {{ item.email }}
          <router-link :to="'/modif/' + item._id">
            <button style="background-color: green; border-radius: 30%;">Edit</button>
          </router-link>
          <button @click="supprimeData(item._id)" style="background-color: red; border-radius: 30%;">Supprime</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import api from '../servizi/servizio';
  
  export default {
    name: "HomePage",
    data() {
      return {
        items: [],
        showData: false,
      };
    },
    methods: {
      async fetchData() {
        if (!this.showData) {
          try {
            const response = await api.getAllItems();
            this.items = response.data;
          } catch (error) {
            console.error("Errore nel recupero dei dati:", error);
          }
        }
        this.showData = !this.showData;
      },
  
      async supprimeData(itemId) {
        try {
          // Chiamare il metodo API per eliminare l'elemento con l'ID specifico
          await api.deleteItem(itemId);
          // Rimuovere l'elemento dalla lista locale
          this.items = this.items.filter(item => item._id !== itemId);
        } catch (error) {
          console.error("Errore nella cancellazione dei dati:", error);
        }
      },
    },
  };
  </script>
  
  <style lang="css">
  li {
    list-style: none;
  }
  </style>
  