<template>
    <div>
        <b-link href="#" v-b-modal.modal-register id="btnRegister"> Register </b-link>
        <b-modal id="modal-register" hide-footer hide-header>
            <div class="p-3 text-center">
                <span class="my-4 header-label">Register / Sign Up</span>
                <b-link class="close-icon float-right" @click="$bvModal.hide('modal-register')"><i class="icon-cancel"></i></b-link>
                <b-form class="m-3 p-5 register-form">
                    <b-form-group
                        id="form-group-name"
                    >
                        <b-form-input
                        id="name"
                        type="text"
                        v-model="name"
                        required
                        placeholder="Name *"
                        ></b-form-input>
                        <i class="input-icon icon-adult"></i>
                    </b-form-group>  
                    <b-form-group
                        id="form-group-email"
                    >
                        <b-form-input
                        id="email"
                        type="email"
                        v-model="email"
                        required
                        placeholder="Email *"
                        ></b-form-input>
                        <i class="input-icon icon-mail"></i>
                    </b-form-group>  
                    <b-form-group id="form-group-pass">
                        <b-form-input
                        id="password"
                        v-model="password"
                        required
                        placeholder="Password *"
                        ></b-form-input>
                        <i class="input-icon icon-key"></i>
                    </b-form-group>     
                    <b-button type="submit" variant="danger" block>LOG IN</b-button>            
                </b-form>
                <p><b-link href="#" @click="$bvModal.hide('modal-register'); $bvModal.show('modal-login')">Go to Log In</b-link></p>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "register",
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
        display: inline;
        .header-label, .close-icon{
            font-size: 24px;
        }
        a{
            color: red;
            text-decoration: none;
        }
        .register-form{
            box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
            input{
                height: 60px;
                &:focus, &:active{
                    outline: none;
                    box-shadow: none;
                    border: 2px solid red;
                }
            }
            .input-icon{
                position: relative;
                font-size: 30px;
                top: -45px;
                left: 42%;
                color: #aaa;
            }
        }
    }
</style>