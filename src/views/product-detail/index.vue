<template>
    <div>
        <ProductDetail 
        :product="product"
        :productDetail="productDetail"/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductDetail from './ProductDetail';

export default {
    name: 'productDetail',
    components: {
        ProductDetail
    },
        computed: {
        ...mapGetters(["product", "productDetail"])
    },
    methods: {
        ...mapActions(["getProduct", "getProductDetail"])
    },
    created() {
        this.getProduct(this.$route.params.id);
        this.getProductDetail(this.$route.params.id);
    }
}
</script>

<style lang="scss" scoped>

</style>