<template>
  <div>
    <br>
    <h2>Nuestra Carta</h2>
    <div class="cards" :class="{ showing: isShowing }">
      <!-- <div
        v-for="(product, index) in products"
        :key="index"
        class="card"
        :class="{ show: card.isShowing }"
        :style="{ zIndex: card.zIndex }"
        @click="toggleCard(index)"
      > -->
       
      <div v-for="product in products" :key="product.id" class="card" @click="toggleCard(product.id)">
        <div class="card__image-holder">
          <img class="card__image" :src="getProductImage(product.img)" alt="Card image"/>
        </div>
        <div class="card-title">
          <h2>
            {{ product.name }}
            <small class="text-warning">{{ product.category.name }}</small>
          </h2>
        </div>
        <div class="card-description">
          <p>{{ product.description }}</p>
          <span class="text-success fw-bold">${{ product.price }}</span>
        </div>
      </div>
    </div>
  </div>

  
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      page: 1,
      limit: 10
    };
  },

  computed: {
    ...mapState('menu', ['total', 'products'])
  },

  methods: {
    ...mapActions('menu', ['getProducts']),

    toggleCard(productId) {
      const card = this.products.find(product => product.id === productId);
      const isShowing = card.isShowing;
      if (this.isShowing) {
        this.products.forEach(p => p.isShowing = false);

        if (isShowing) {
          this.isShowing = false;
        } else {
          card.zIndex = this.zindex;
          card.isShowing = true;
        }
      } else {
        this.isShowing = true;
        card.zIndex = this.zindex;
        card.isShowing = true;
      }

      this.zindex++;
    },

    getProductImage(product) {
      return `http://localhost:3000/api/images/products/${product}`;
    }

  },

  async mounted() {
    await this.getProducts({ page: this.page, limit: this.limit });
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,900');

body {
  background: white;
  color: darkGrey;
  font-family: 'Source Sans Pro', sans-serif;
  text-rendering: optimizeLegibility;
}

div.cards {
  margin: 80px auto;
  max-width: 960px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

div.card {
  background: white;
  display: inline-block;
  margin: 8px;
  perspective: 1000;
  position: relative;
  text-align: left;
  transition: all 0.3s 0s ease-in;
  width: 100%;
  max-width: 300px;
  z-index: 1;
}

div.card img {
  width: 100%;
  height: auto;
}

div.card .card__image-holder {
  background: rgba(0,0,0,0.1);
  height: 0;
  padding-bottom: 75%;
  overflow: hidden;
  position: relative;
}

div.card .card-title {
  background: white;
  padding: 6px 15px 10px;
  position: relative;
  z-index: 0;
}

div.card .card-title h2 {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.05em;
  margin: 0;
  padding: 0;
}

div.card .card-title h2 small {
  display: block;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.025em;
}

div.card .card-description {
  padding: 10px 15px;
  position: relative;
  font-size: 14px;
  background: white;
  border-top: 1px solid #eee;
}

div.card .card-actions {
  box-shadow: 0 2px 0px 0 rgba(0,0,0,0.075);
  padding: 10px 15px 20px;
  text-align: center;
}

div.card .card-flap {
  background: darken(white,15);
  position: absolute;
  width: 100%;
  transform-origin: top;
  transform: rotateX(-90deg);
}

div.card .flap1 {
  transition: all 0.3s 0.3s ease-out;
  z-index: -1;
}

div.card .flap2 {
  transition: all 0.3s 0s ease-out;
  z-index: -2;
}

div.cards.showing div.card {
  cursor: pointer;
  opacity: 0.6;
  transform: scale(0.88);
}

.no-touch div.cards.showing div.card:hover {
  opacity: 0.94;
  transform: scale(0.92);
}

div.card.show {
  opacity: 1 !important;
  transform: scale(1) !important;
}

div.card.show .card-flap {
  background: white;
  transform: rotateX(0deg);
}

div.card.show .flap1 {
  transition: all 0.3s 0s ease-out;
}

div.card.show .flap2 {
  transition: all 0.3s 0.2s ease-out;
}

@media (min-width: 600px) {
  div.card {
    width: 45%;
  }
}

@media (min-width: 900px) {
  div.card {
    width: 30%;
  }
}
</style>
