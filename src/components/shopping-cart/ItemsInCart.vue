<template>
    <div class="item-cart">
        <div class="d-flex flex-row justify-content-between bd-highlight mb-2">
            <div class="p-3">
                <span class="my-4">{{ '1 items in Your Cart' }}</span>
            </div>
            <div class="p-3">
                <span class="my-4">{{ 'Total: £ 0' }}</span>
            </div>
            <div class="p-3">
                <b-link class="close-icon float-right" @click="$bvModal.hide('modal-cart-items')"><i class="icon-cancel"></i></b-link>
            </div>
        </div>

        <div class="d-flex flex-row justify-content-between mb-2 text-muted">
            <div class="pl-3 pr-5">
                <span class="my-4">Item</span>
            </div>
            <div class="pl-5 ml-4"> 
            </div>
            <div class="pl-5 ml-5">
                <span class="my-4">Color</span>
            </div>
            <div class="pl-0 pr-3">
                <span class="my-4">Size</span>
            </div>
            <div class="pl-3 pr-4">
                <span class="my-4">Quantity</span>
            </div>
            <div class="pl-3 pr-2">
                <span class="my-4">Price</span>
            </div>
        </div>
        <hr/>

        <div class="d-flex flex-row justify-content-between mb-2 text-muted">
            <div class="pl-3 pr-0">
                <b-img  :src="require('../../assets/images/t-shirt.gif')" alt="item img"></b-img>
            </div>
            <div class="pl-0 pr-5">
                <span class="my-2">{{ 'Chartres' }}</span><br/>
                <span class="my-1">{{ 'Men BK35679' }}</span><br/><br/>
                <small class="my-4 text-muted remove-icon"><b-link href="#"><i class="icon-cancel"></i> remove</b-link></small>
            </div>
            <div class="pl-3 pr-2">
                <span class="my-4">{{ 'Black' }}</span>
            </div>
            <div class="pl-3 pr-2">
                <span class="my-4">{{ 'XL' }}</span>
            </div>
            <div class="pl-1 ">
                <b-button class="quantity-btn mr-2"><i class="icon-minus"></i></b-button>
                <span class="quantity-display p-3">2</span>
                <b-button class="quantity-btn ml-2"><i class="icon-plus"></i></b-button>
            </div>
            <div class="pl-3 pr-2">
                <span class="my-4 price">{{ '£ 14.99' }}</span>
            </div>
        </div>

        <b-button class="m-3 mt-5 p-2 cart-buttons float-left" variant="danger" @click="$bvModal.hide('modal-cart-items')">Back to Shop</b-button>
        <b-button class="m-3 mt-5 p-2 cart-buttons float-right" variant="danger" @click="changeStep">Checkout</b-button>
    </div>
</template>

<script>
export default {
    name: "itemsCart",
    methods: {
        changeStep() {
            this.$emit('nextStep', 'step2');
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
        display: inline;
        a{
            &:hover{
                text-decoration: none;
            }
        }
        #menuCartLink{
            color: black;
            .menuCartNum{
                background: red;
                color: white;
                padding: 3px 6px;
                border-radius: 50%;
                position: relative;
                top: -10px;
                left: -10px;
            }
        }
        #modal-cart-items{
            .close-icon{
                font-size: 25px;
                color: red;
            }
            .quantity-btn{
                border-radius: 60%;
                width: 40px;
                height: 40px;
                padding: 0;
            }
            .quantity-display{
                box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
            }
            .remove-icon a{
                color: red;
            }
            .cart-buttons{
                border-radius: 20px;
                font-weight: 700;
                width: 150px;
            }
        }
    }
</style>