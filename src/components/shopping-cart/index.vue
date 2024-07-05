<template>
    <div>
        <b-link href="#" v-b-modal.modal-cart-items id="menuCartLink"> <i class="icon-briefcase-1"></i> <span class="menuCartNum">1</span></b-link>
        <b-modal id="modal-cart-items" class="items-modal" size="lg" hide-footer hide-header>
            <ItemsInCard
                @nextStep="setStep($event)" 
                v-if="steps.step1"/>
            <CartForm 
                @nextStep="setStep($event)" 
                v-else-if="steps.step2"/>
        </b-modal>
    </div>
</template>

<script>
import ItemsInCard from './ItemsInCart';
import CartForm from './CartForm';
export default {
    name: "itemsCart",
    components: {
        ItemsInCard,
        CartForm
    },
    data() {
        return{
            steps: {
                step1: true,
                step2: false
            }
        }
    },
    methods: {
        setStep(step) {
            let steps = {
                step1: false,
                step2: false
            }
            if(!!step) {
                this.steps = {
                    ...steps,
                    [step]: true
                } 
            }  
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
    }
</style>