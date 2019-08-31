<template>
  <div class="text-center" id="payment">
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
    <b-button @click="checkout" variant="danger" class="checkout" id="btnPayment">Make Payment</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://logodix.com/logo/1751042.png',
      name: 'Tshirt Shop',
      description: 'Payment description',
      currency: '$',
      amount: 10000
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
  .checkout{
    width: 300px;
  }
</style>