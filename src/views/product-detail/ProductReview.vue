<template>
    <div>
        <b-row class="product-review p-5">
            <b-col sm="12" md="12">
                <h3>Product Reviews</h3><br/>
                <div class="mt-2 mb-2 p-3">
                    <span v-for="n in 5" :key="n">
                        <i class="icon-star user-review" :class="{'star-color': n < 4}"></i>
                    </span>
                    <span class="text-right text-muted ml-5 pl-5">Test Review</span>
                </div>
                <span>Peter Test</span><hr/>
                <div class="mt-2 mb-2 p-3">
                    <span v-for="n in 5" :key="n">
                        <i class="icon-star user-review" :class="{'star-color': n < 4}"></i>
                    </span>
                    <span class="text-right text-muted ml-5 pl-5">Test Review</span>
                </div>
                <span>Celestine Test</span><hr/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'productReview'
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
</style>