<template>
  <div>
    <c-header></c-header>

    <main>

    </main>
    <c-footer></c-footer>
  </div>
</template>
<script>
import CFooter from '../components/c-footer.vue'
import CHeader from '../components/c-header.vue'
import axios from "axios";
export default {
  components: {
    CFooter,
    CHeader,
  },
  data(){
    return {
      press_books: [],
    }
  },

  mounted() {
    axios.get('http://csv/wordpress/wp-json/wp/v2/press_book').then((response) => {
      this.press_books = response.data;
    });
  },

  methods:{
  }
}
</script>