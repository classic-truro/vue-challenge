<template>
    <div>
        <b-container>
            <b-row class="banner mt-5">
                <b-col md="12">
                    <div>
                        <h2 class="title">Converse</h2>
                        <span class="description">Explore styles tough enough to handle all your workouts</span>
                    </div>
                </b-col>
            </b-row>
        </b-container>

        <b-container>
            <b-row class="subscribe p-4 mt-4 mb-4">
                <b-col md="7 mt-2">
                    <span>SUBSCRIBE FOR SHOP NEWS, UPDATES AND SPECIAL OFFERS</span>
                </b-col>
                <b-col md="5">
                    <div class="float-right">
                        <b-form inline>
                            <i class="icon-mail"></i>
                            <b-input
                            id="your-email"
                            class="email mb-2 mr-sm-2 mb-sm-0"
                            placeholder="Your Email"
                            ></b-input>
                            <b-button variant="danger" class="subscribe-btn">Subscribe</b-button>
                        </b-form>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'home'
}
</script>

<style lang="scss" scoped>
    .banner{
        height: auto;
        padding: 5% 10%;
        color: white;
        box-shadow: none;
        min-height: 300px;
        border-radius: 0;
        background-size: cover;
        background-image: url('../../assets/images/banner.png');
        background-color: red;
        background-repeat: no-repeat;
        background-position: top center;
        div{
            width: 500px;
            .title{
                font-size: 48px;
                font-weight: 700;
                font-family: Playfair Display;
            }
            .description{
                font-size: 24px;
            }
        }
    }
    .subscribe{
        background: #efefef;
        .icon-mail{
            font-size: 20px;
            position: relative;
            left: 10%;
        }
        .email{
            border-radius: 20px;
            padding-left: 10%;
            border-color: transparent;
            width: 200px;
            &:focus{
                width: 250px;
                transition: width .6s;
                outline: none !important;
                border: none;
                box-shadow: none;
            }
        }
        .subscribe-btn{
            border-radius: 20px;
            background: #f62f5e;
            font-weight: 700;
            position: static;
        }
    }
</style>