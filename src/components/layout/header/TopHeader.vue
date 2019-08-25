<template>
    <b-container class="top-nav">
        <b-row class="pt-3 pb-3">
            <b-col sm="12" lg="5">
                <span class="pr-0">Hi!</span><Login /> 
                <span class="pr-0"> or</span> <Register />
                <span class="pr-0">Hi Charles! <b-link href="#">My Profile</b-link> | <b-link href="#" id="btnLogout">Logout</b-link></span>
            </b-col>
            <b-col sm="12" lg="4" class="helper-nav">
                <b-link class="p-2" href="#"> Daily Deals </b-link> 
                <b-link class="p-2" href="#"> Sell </b-link> 
                <b-link class="p-2" href="#"> Help and Contact </b-link>
            </b-col>
            <b-col sm="12" lg="3">
                <span class="pr-2"><b-img :src="image" fluid alt="flag"></b-img> GBR</span>
                <b-link href="#" v-b-modal.modal-3 id="menuCartLink"> <i class="icon-briefcase-1"></i> <span class="menuCartNum">1</span></b-link>
                <span class="pr-0">Your Bag:</span><span id="menuCartTotalPrice">$14.99</span>
            </b-col>
        </b-row>
        <!-- Register modal -->
        <b-modal id="modal-2" title="BootstrapVue">
            <p class="my-4">Register modal</p>
        </b-modal>
    </b-container>
</template>

<script>
import Login from '../login';
import Register from '../register';

export default {
  name: "topHeader",
  components: {
    Login,
    Register
  },
  data() {
      return {
        image: require('@/assets/images/flag.png')
      }
  }
};
</script>

<style lang="scss" scoped>
    .top-nav{
        position: static;
        a{
            color: red;
            &:hover{
                text-decoration: none;
                color: red;
            }
        }
        .helper-nav{
            a{
                border-radius: 10%;
                color: black;
                &:hover{
                    background: #efefef;
                }
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
