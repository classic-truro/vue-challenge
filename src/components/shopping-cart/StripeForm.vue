<template>
  <div class="stripe">
    <vue-stripe-checkout
        ref="checkoutRef"
        :image="image"
        :name="name"
        :description="description"
        :currency="currency"
        :amount="amount"
        :allow-remember-me="true"
        @done="done"
        @opened="opened"
        @closed="closed"
        @canceled="canceled"
    ></vue-stripe-checkout>
    <button @click="checkout">Checkout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    async checkout () {
      // token - is the token object
      // args - is an object containing the billing and shipping address if enabled
      const { token, args } = await this.$refs.checkoutRef.open();
    },
    done ({token, args}) {
      // token - is the token object
      // args - is an object containing the billing and shipping address if enabled
      // do stuff...
    },
    opened () {
      // do stuff 
    },
    closed () {
      // do stuff 
    },
    canceled () {
      // do stuff 
    }
  }
}
</script>

<style lang="scss" scoped>

</style>