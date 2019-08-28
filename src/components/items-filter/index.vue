<template>
    <div>
        <div class="items-filter p-4">
            <span class="filter-title">Filter Items</span><br/>
            <span class="text-muted" :style="{fontWeight: 300}">Category:</span><span> Regional</span><br/>
            <span class="text-muted" :style="{fontWeight: 300}">Department:</span><span> French</span>
        </div>
        <div class="items-options text-muted p-4">
            <span>Color</span>
            <div class="mt-2 mb-3">
                <b-button class="color-btn m-1 p-2" variant="success"></b-button>
                <b-button class="color-btn m-1 p-2" variant="info"></b-button>
                <b-button class="color-btn m-1 p-2" variant="warning"></b-button>
                <b-button class="color-btn m-1 p-2" variant="primary"></b-button>
                <b-button class="color-btn m-1 p-2" variant="dark"></b-button>
                <b-button class="color-btn m-1 p-2" variant="danger"></b-button>
            </div>
            <span>Size</span>
            <div class="mt-2 mb-3">
                <b-button class="size-btn m-1" variant="secondary">XS</b-button>
                <b-button class="size-btn m-1" variant="secondary">S</b-button>
                <b-button class="size-btn m-1" variant="secondary">M</b-button>
                <b-button class="size-btn m-1" variant="secondary">L</b-button>
                <b-button class="size-btn m-1" variant="secondary">XL</b-button>
            </div>
            <span>Price Range</span>
            <div class="mt-2 mb-3 pt-4">
                <vue-range-slider :bg-style="bgStyle" :tooltip-style="tooltipStyle" :process-style="processStyle" v-model="value"></vue-range-slider>
                <small class="float-left">£ 375</small><small class="float-right">£ 500</small>
            </div>
        </div>
        <div class="items-apply text-muted p-4">
            
        </div>
    </div>
</template>

<script>
import VueRangeSlider from 'vue-range-component'
import 'vue-range-component/dist/vue-range-slider.css'

export default {
    name: "itemsFilter",
    components: {
        VueRangeSlider
    },
    data() {
        return {
            value: [0, 500]
        }
    },
    created() {
        this.min = 0;
        this.max = 500;
        this.bgStyle = {
            height: '3px',
            backgroundColor: '#ffb0c2',
            boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
        }
        this.tooltipStyle = {
            backgroundColor: '#dc3545',
            borderColor: 'transparent'
        }
        this.processStyle = {
            backgroundColor: '#dc3545'
        }
    }
}
</script>

<style lang="scss" scoped>
    .items-filter{
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        .filter-title{
            font-size: 20px;
        }
        span{
            font-size: 14px;
        }
    }
    .items-options{
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        background-color: #fff;
        .color-btn{
            border-radius: 50%;
        }
        .size-btn{
           background: #dcdbdb;
           border: none;
           border-radius: 0;
           font-size: 12px;
           color: #333;
           padding: 5px 10px;
           width: 70px;
           &:focus{
               background: #dc3545;
               color: white;
               box-shadow: none;
           }
        }
        .price-range{

        }
    }
    .items-search{

    }
</style>