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
                <vue-range-slider 
                    :bg-style="bgStyle" 
                    :tooltip-style="tooltipStyle" 
                    :process-style="processStyle" 
                    v-model="value"></vue-range-slider>
                <small class="float-left">£ 0</small><small class="float-right">£ 100</small>
            </div><br/>
            <span>Search keyword</span>
            <div class="mt-2 mb-3">
                <b-form-input
                    id="search"
                    class="search"
                    v-model="search"
                    type="text"
                    required
                    placeholder="Enter a keyword to search...">
                </b-form-input>
            </div>
        </div>
        <div class="items-apply text-muted p-4">
            <b-button variant="danger" class="apply-btn mr-3">Apply</b-button>
            <b-button class="reset-btn"><i class="icon-cancel"></i>Reset</b-button>
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
            value: [0, 100],
            search: ''
        }
    },
    created() {
        this.min = 0;
        this.max = 100;
        this.bgStyle = {
            height: '3px',
            width: '190px',
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
            width: 60px;
            &:focus{
                background: #dc3545;
                color: white;
                box-shadow: none;
            }
        }
        .search{
            &:focus{
                border: 2px solid #dc3545;
                box-shadow: none;
            }
        }
    }
    .items-apply{
        display: flex;
        align-items: center;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        justify-content: center;
        background-color: #fafafa;
        .apply-btn{
            border-radius: 30px;
            width: 100px;
        }
        .reset-btn{
            border: none;
            background: transparent;
            color: #dc3545;
        }
    }
</style>