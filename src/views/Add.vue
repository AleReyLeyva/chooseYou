<template>
  <h1 class="title">Añade un Restaurante</h1>

  <div v-if="!valid" class="notification is-warning">
    <button @click="valid = true" class="delete"></button>
    Debes completar todos los campos
  </div>

  <div v-if="finished" class="notification is-success">
    <button @click="finished = false" class="delete"></button>
    Restaurante añadido correctamente
  </div>

  <form @submit.prevent="handleSubmit" class="form">
    <div class="field">
      <label class="label">Restaurante 🥑</label>
      <div class="control">
        <input class="input" type="text" v-model="name" placeholder="Nombre" />
      </div>
    </div>
    <div class="field">
      <label class="label">Precio 💰</label>
      <div class="control">
        <div class="select">
          <select v-model="price">
            <option value="">Rango</option>
            <option v-for="price in prices" :key="price">
              {{ price }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Tipo de comida 🍽️</label>
      <div class="control">
        <div class="select">
          <select v-model="foodType">
            <option value="">Tipo</option>
            <option v-for="type in foodTypes" :key="type">
              {{ type }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <button type="submit" class="button is-primary">Enviar</button>
  </form>
</template>

<script>
import firebase from '../firebase';
import { prices, foodTypes } from '../constants';
import { validateForm } from '../services/formService';
import { reactive, ref, toRefs } from '@vue/reactivity';

export default {
  setup() {
    const valid = ref(true);
    const finished = ref(false);
    const restaurante = reactive({
      name: '',
      price: '',
      foodType: '',
    });

    function handleSubmit() {
      valid.value = validateForm(restaurante);

      if (valid.value)
        firebase.db
          .collection('restaurantes')
          .add(restaurante)
          .then(() => (finished.value = true));
    }

    return {
      valid,
      finished,
      validateForm,
      handleSubmit,
      prices,
      foodTypes,
      ...toRefs(restaurante),
    };
  },
};
</script>

<style></style>
