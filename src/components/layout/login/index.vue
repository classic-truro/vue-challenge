<template>
    <div>
        <b-link href="#" v-b-modal.modal-login id="btnSignIn"> Sign in </b-link>
        <b-modal id="modal-login" hide-footer hide-header>
            <div class="p-3 text-center">
                <span class="my-4 header-label">Log In</span>
                <b-link class="close-icon float-right" @click="$bvModal.hide('modal-login')"><i class="icon-cancel"></i></b-link>
                <b-form class="m-3 p-5 login-form">
                    <b-form-group
                        id="form-group-email"
                    >
                        <b-form-input
                        id="email"
                        v-model="email"
                        type="email"
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
                    <br/><span>- or -</span><br/><br/>
                    <b-button variant="outline-secondary" block>Login with Facebook</b-button>
                    <b-button variant="outline-secondary" block>Login with Google</b-button>
                </b-form>
                <p><b-link href="#" @click="$bvModal.hide('modal-login'); $bvModal.show('modal-register')">Register / Signup</b-link></p>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
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
        .login-form{
            box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
            input{
                height: 60px;
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