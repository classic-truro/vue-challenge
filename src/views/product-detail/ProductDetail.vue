<template>
    <div>
        <b-container>
            <b-row class="product-details mt-5 mb-2  p-5">
                <b-col sm="6" md="6">
                    <b-img :src="imageUrl(product.thumbnail)" fluid-grow alt="Fluid image" class="thumbnail"></b-img><br/>
                    <b-img v-if="product.image" :src="imageUrl(product.image)" rounded="0" alt="Not rounded image" class="m-3 small-thumbnail"></b-img>
                    <b-img v-if="product.image_2" :src="imageUrl(product.image_2)" rounded="0" alt="Not rounded image" class="m-3 small-thumbnail"></b-img>
                </b-col>
                <b-col sm="6" md="6">
                    <div class="nav-links mt-2 mb-3">
                        <ul>
                            <li>Home</li>
                            <li>•</li>
                            <li>Regional</li>
                            <li>•</li>
                            <li>French</li>
                        </ul>
                    </div>
                    <div class="user-review mt-2 mb-3">
                        <span v-for="n in 5" :key="n" id="review">
                            <i class="icon-star" :class="{'star-color': n < 4}"></i>
                        </span>
                    </div>
                    <div class="name mt-2 mb-3">
                        <span class="product-details-title">{{product.name}}</span>
                    </div>
                    <div class="price mt-2 mb-3">
                        <span class="price" v-if="product.discounted_price !== '0.00'"><strike>£ {{product.discounted_price}}</strike> |</span><span class="price"> £ {{product.price}}</span>
                    </div>
                    <span class="text-muted">Color</span>
                    <div class="mt-2 mb-3">
                        <b-button class="m-1 p-2 product-details-color" variant="success"></b-button>
                        <b-button class="m-1 p-2 product-details-color" variant="info"></b-button>
                        <b-button class="m-1 p-2 product-details-color" variant="warning"></b-button>
                        <b-button class="m-1 p-2 product-details-color" variant="primary"></b-button>
                        <b-button class="m-1 p-2 product-details-color" variant="dark"></b-button>
                        <b-button class="m-1 p-2 product-details-color" variant="danger"></b-button>
                    </div>
                    <span class="text-muted">Size</span>
                    <div class="mt-2 mb-3">
                        <b-button class="m-1 product-details-size" variant="secondary">XS</b-button>
                        <b-button class="m-1 product-details-size" variant="secondary">S</b-button>
                        <b-button class="m-1 product-details-size" variant="secondary">M</b-button>
                        <b-button class="m-1 product-details-size" variant="secondary">L</b-button>
                        <b-button class="m-1 product-details-size" variant="secondary">XL</b-button>
                    </div>
                    <div class="mt-2 mb-3">
                        <b-button class="quantity-btn mr-2"><i class="icon-minus"></i></b-button>
                        <b-input type="text" value="2" disabled name="product-details-quantity" class="quantity-display"></b-input>
                        <b-button class="quantity-btn ml-2"><i class="icon-plus"></i></b-button>
                    </div>
                    <div class="mt-2 mb-3">
                        <b-button variant="danger" class="add-to-card" id="btnCart">Add to Cart</b-button>
                    </div>
                </b-col>
            </b-row>
            <ProductReview />
            <b-row class="rating-review mb-5 justify-content-md-center">
                <b-col xs="12" md="4"> 
                    <star-rating v-model="rating" class="mb-5 mt-5" :star-size="25" ></star-rating>
                    <b-form-input
                        id="review"
                        v-model="review"
                        type="text"
                        required
                        class="mb-5 mt-5"
                        placeholder="Enter review"
                    ></b-form-input>
                    <b-button variant="danger" class="add-review-btn btn-block mb-5 mt-5" id="addReview">Add Review</b-button><br/>
                    <div class="text-center">
                        <span class="login" @click="$bvModal.show('modal-login')">Login</span><span> to Add a Review.</span>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { imgUrl } from '../../utils/Api';
import ProductReview from './ProductReview';

export default {
    name: 'home',
    props: {
        product: {
            type: Object
        },
        productDetail: {
            type: Object
        }
    },
    components: {
        ProductReview
    },
    data() {
        return {
            products: [],
            rating: 3,
            review: ''
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
    .user-review{
        color: #eeeeee;
        font-size: 24px;
    }
    .star-color{
        color: #ffc94f;
    }
    .product-details{
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
        .thumbnail{
            max-width: 70% !important;
            cursor: pointer;
        }
        .small-thumbnail{
            max-width: 100px;
            cursor: pointer;
        }
        .nav-links{
                color: #B4B4B4;
                font-size: 16px;
                font-weight: 700;
                font-family: Helvetica;
                ul{
                    list-style: none;
                    padding: 0;
                    li{
                        display: inline;
                        margin-right: 7%;
                    }
                }
        }
        .name{
            color: #2E2E2E;
            font-size: 24px;
            font-weight: 700;
            line-height: 36px;
            letter-spacing: 1px;
        }
        .price{
            color: #f62f5e;
            font-size: 24px;
            font-weight: 700;
        }
        .product-details-color{
            border-radius: 50%;
        }
        .product-details-size{
            background: #dcdbdb;
            border: none;
            border-radius: 0;
            font-size: 12px;
            color: #333;
            padding: 5px 10px;
            width: 60px;
            &:focus{
                background: #dc3545;
                color: white;
                box-shadow: none;
            }
        }
        .quantity-btn{
            border-radius: 60%;
            width: 40px;
            height: 40px;
            padding: 0;
        }
        .quantity-display{
            box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
            width: 10%;
            display: inline-block;
            text-align: center;
        }
        .add-to-card{
            border-radius: 30px;
            border: none;
            box-shadow: none;
            font-size: 14px;
            padding: 3% 10%;
        }
    }
    .rating-review{
        font-weight: 300;
        input{
            margin: 10% 0;
            padding: 5%;
            width: 100%;
            background: #fff;
        }
        .login{
            color: red;
            cursor: pointer;
        }
    }
</style>