<template>
    <div>
        <div class="product-card mb-3">
            <b-link :href="`/product/${product.product_id}`" class="product-card-link">
                <b-img :src="imageUrl(product.thumbnail)" class="product-img" fluid alt="Fluid image"></b-img>
                <span class="sale-tag" v-if="product.discounted_price != '0.00'">SALE</span>
                <b-button variant="danger" class="product-btn-cart">View</b-button>
                <div class="description p-3 text-center">
                    <span class="product-card-title">{{product.name}}</span><br/>
                    <span class="price" v-if="product.discounted_price !== '0.00'"><strike>£ {{product.discounted_price}}</strike> |</span><span class="price"> £ {{product.price}}</span>
                </div>
            </b-link>
        </div>
    </div>
</template>

<script>
import { imgUrl } from '../../utils/Api';
export default {
    name: "product",
    props: {
        product: {
            type: Object
        }
    },
    methods: {
        imageUrl(url) {
            return imgUrl + url;
        }
    }
}
</script>

<style lang="scss" scoped>
    .product-card{
        background: #fff;
        .product-img{
            min-height: 200px;
        }
        .product-btn-cart{
            display: none;
            background: #e83e8c;
            border-radius: 20px;
            width: 80px;
            position: absolute;
            top: 40%;
            left: 35%;
            font-size: 14px;
        }
        &:hover{
            opacity: 0.5;
            .product-btn-cart{
                display: block;
            }
        }
        .sale-tag{
            background: #e83e8c;
            color: #fff;
            padding: 3px 10px;
            position: absolute;
            top: 15px;
            left: 20px;
            font-size: 14px;
        }
        a{
            color: #333;
            text-decoration: none;
        }
        .product-card-title{
            font-size: 18px;
        }
        .price{
            color: #dc3545;
        }
    }
</style>