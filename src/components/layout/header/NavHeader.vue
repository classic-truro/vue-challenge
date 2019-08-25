<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" class="nav-header text-center">
            <b-container>
                <b-navbar-brand href="#" class="logo">SHOPMATE</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav class="ml-5 navlinks">
                    <b-navbar-nav>
                        <b-nav-item-dropdown text="Regional" class="ml-3" no-caret>
                            <b-dropdown-item href="#">French</b-dropdown-item>
                            <b-dropdown-item href="#">Italian</b-dropdown-item>
                            <b-dropdown-item href="#">Irish</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Nature" class="ml-3" no-caret>
                            <b-dropdown-item href="#">Animal</b-dropdown-item>
                            <b-dropdown-item href="#">Flower</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Sesonal" class="ml-3" no-caret>
                            <b-dropdown-item href="#">Christmas</b-dropdown-item>
                            <b-dropdown-item href="#">Valentines</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <i class="icon-search nav-icon-search"></i>
                            <transition name="input-width">
                                <b-form-input size="sm" class="mr-sm-2 nav-search" name="search" placeholder="Search..."></b-form-input>
                            </transition>
                            <b-link href="#" v-b-modal.modal-3 id="menuCartQuantity"> <i class="icon-briefcase-1"></i> <span class="menuCartNum">1</span></b-link>
                        </b-nav-form>

                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
        <!-- Sign in modal -->
        <b-modal id="modal-3" title="BootstrapVue">
            <p class="my-4">Cart Modal</p>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "navHeader"
};
</script>

<style lang="scss" scoped>
    .nav-header{
        height: 72px !important;
        .logo{
            color: #f62f5e !important;
            letter-spacing: 4px;
            font-size: 26px;
        }
        .navlinks .navbar-nav .nav-item .nav-link{
            color: white;
        }
        .nav-icon-search{
            font-size: 20px;
            color: white;
            position: relative;
            left: 30px;
        }
        .nav-search{
            color: white;
            padding-left: 20%;
            background: #979797;
            border-radius: 20px;
            border-color: transparent;
            width: 250px;
            &::placeholder{
                color: #ddd;
                font-weight: 700;
            }
            &:focus{
                background: #595959;
                width: 300px;
                transition: width .6s;
                outline: none !important;
                border: none;
                box-shadow: none;
            }
        }
        #menuCartQuantity{
            color: white;
            font-size: 20px;
            .menuCartNum{
                background: white;
                color: #f62f5e;
                padding: 2px 5px;
                border-radius: 50%;
                position: relative;
                top: -10px;
                left: -10px;
            }
        }
    }
</style>
