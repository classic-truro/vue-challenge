<template>
    <footer>
        <b-container class="bv-example-row p-5">
            <b-row class="text-center nav-links">
                <b-col>
                    <b-link href="#">Regional</b-link>
                </b-col>
                <b-col>
                    <b-link href="#">Nature</b-link>
                </b-col>
                <b-col>
                    <b-link href="#">Seasonal</b-link>
                </b-col>
            </b-row>
            <b-row class="text-center social-media-links">
                <b-col>
                    <ul>
                        <li><b-link href="#"><i class="icon-facebook-circled"></i></b-link></li>
                        <li><b-link href="#"><i class="icon-instagram"></i></b-link></li>
                        <li><b-link href="#"><i class="icon-pinterest"></i></b-link></li>
                        <li><b-link href="#"><i class="icon-twitter-circled"></i></b-link></li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<style lang="scss" scoped>
    footer{
        background: #343a40;
        .nav-links a{
            color: white;
            font-size: 25px;
            text-decoration: none;
            &:hover{
                color: red;
            }
        }
        .social-media-links{
            ul{
                list-style: none;
                li{
                    display: inline-block;
                    padding: 3% 1%;
                    a{
                        font-size: 30px;
                        color: white;
                        &:hover{
                            color: #aaa;
                        }
                    }
                }
            }
        }
    }
</style>