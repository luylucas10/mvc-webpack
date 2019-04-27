import Vue from "vue";
import { mapState } from "vuex";
import store from "../store";

const vm = new Vue({
    el: "#app-about",
    store,
    data() {
        return {};
    },
    computed: {
        ...mapState(["anotherMessage"])
    }
});