import Vue from "vue";
import { mapState } from "vuex";
import store from "../store";

const vm = new Vue({
    el: "#app-home",
    store,
    data() {
        return {
            message: "Hello World with .NET MVC and Vue.js!!!"
        };
    },
    computed: {
        ...mapState(["anotherMessage"])
    },
    methods: {
        changeMessage() {
            this.$store.commit("changeMessage");
        }
    }
});