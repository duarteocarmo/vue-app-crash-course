<template>
  <div>
    <div class="holder">
      <form @submit.prevent="addItem">
        <input
          type="text"
          placeholder="Enter an item you want to purchase.."
          v-model="oneItem"
          v-validate="'min:5'"
          name="item"
        />
        <transition
          name="alert-in"
          enter-active-class="animated flipInX"
          leave-active-class="animated flipOutX"
        >
          <p class="alert" v-if="errors.has('item')">
            {{ errors.first("item") }}
          </p>
        </transition>
      </form>

      <ul>
        <transition-group
          name="list"
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutDown"
        >
          <li v-for="item in items" :key="item">
            {{ item }}
            <i class="fa fa-minus-circle" v-on:click="remove(item);"></i>
          </li>
        </transition-group>
      </ul>
      <p>These are the skills that you possess:</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstComponent",
  data() {
    return {
      oneItem: "",
      items: ["banana", "apple", "cherry"]
    };
  },
  methods: {
    addItem() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.items.push(this.oneItem);
          this.oneItem = "";
        } else {
          console.log("Not valid");
        }
      });
    },
    remove(item) {
      var index = this.items.indexOf(item); // <-- Not supported in <IE9
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  }
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -28px;
}

.alert-in-enter-active {
  animation: bounce-in 0.5s;
}

.alert-in-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

i {
  float: right;
  cursor: pointer;
}
</style>
