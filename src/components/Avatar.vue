<template>
<div id="container">
    <img src="assets/img/user.png" width="30" alt="User"/>
            
    <b-dropdown size="sm" variant="primary" text="" >
        <b-dropdown-item href="#" @click="loginHandler"
        v-model="status">
            {{status}}
        </b-dropdown-item>
    </b-dropdown>

    <img src="assets/img/cart.ico" width="40" alt="Carro"/>

    <b-modal id="modal-login" ok-title="Aceptar" hide-footer
    cancel-title="Cancelar" title="Iniciar sesión">
        <b-form>
            <b-form-group
            id="group-usuario"
            label="Correo"
            label-for="input-usuario"
            >
            <b-form-input
            id="input-usuario"
            type="email"
            v-model="usuario"
            placeholder="Ingrese su correo"
            required
            :state="validarMailLogin"
            ></b-form-input>
            <b-form-invalid-feedback :state="validarMailLogin">
                Este campo es obligatorio.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validarMailLogin">
            </b-form-valid-feedback>
            </b-form-group>

            <b-form-group
            id="group-clave"
            label="Contraseña"
            label-for="input-clave"
            >
            <b-form-input
            id="input-clave"
            type="password"
            v-model="clave"
            placeholder="Ingrese su contraseña"
            required
            :state="validarClaveLogin"
            ></b-form-input>
            <b-form-invalid-feedback :state="validarClaveLogin">
                Este campo es obligatorio.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validarClaveLogin">
            </b-form-valid-feedback>
            </b-form-group>
            
            <b-button @click="okHandler"  variant="primary" ref="btnOk" >Entrar</b-button>
            <b-button type="reset" variant="danger">Limpiar</b-button>

            <b-form-group
            id="group-new"
            label="¿No tiene cuenta?"
            >

                <b-button @click="newCuenta" variant="primary">Registrarse</b-button>

            </b-form-group>
        </b-form>
    </b-modal>

    <b-modal id="modal-registro" title="Crear cuenta" hide-footer>
        <form-wizard color="#fed136" title="" subtitle="" step-size="sm" 
        back-button-text="Atrás" finish-button-text="Finalizar" 
        next-button-text="Siguiente" @on-complete="registroFinalizado">
            <tab-content title="Detalles personales" 
            :before-change="validarPrimerPaso" >
                
                <b-form id="form-step1">
                    <b-form-group
                    id="group-nombre"
                    label="Nombre:"
                    label-for="input-nombre"
                    >
                        <b-form-input
                        id="input-nombre"
                        v-model="newUser.nombre"
                        placeholder="Ingrese su nombre"
                        required
                        :state="validarNombre"
                        ></b-form-input>
                        <b-form-invalid-feedback :state="validarNombre">
                            Este campo es obligatorio.
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="validarNombre">
                        </b-form-valid-feedback>
                    </b-form-group>

                    <b-form-group
                    id="group-apellido"
                    label="Apellido:"
                    label-for="input-apellido"
                    >
                        <b-form-input
                        id="input-apellido"
                        v-model="newUser.apellido"
                        placeholder="Ingrese su apellido"
                        required
                        :state="validarApellido"
                        ></b-form-input>
                        <b-form-invalid-feedback :state="validarApellido">
                            Este campo es obligatorio.
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="validarApellido">
                        </b-form-valid-feedback>
                    </b-form-group>

                    <b-form-group
                    id="group-mail"
                    label="Correo electrónico:"
                    label-for="input-mail"
                    >
                        <b-form-input
                        id="input-mail"
                        type="email"
                        v-model="newUser.mail"
                        placeholder="Ingrese su correo"
                        required
                        :state="validarMail"
                        ></b-form-input>
                        <b-form-invalid-feedback :state="validarMail">
                            Ingrese una dirección de correo válida.
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="validarMail">
                        </b-form-valid-feedback>
                    </b-form-group>
                </b-form>

            </tab-content>
            <tab-content title="Información adicional" :before-change="validarSegundoPaso">

                <b-form id="form-step2">
                    <b-form-group
                    id="group-direccion"
                    label="Dirección:"
                    label-for="input-direccion"
                    >
                        <b-form-input
                        id="input-direccion"
                        v-model="newUser.direccion"
                        placeholder="Ingrese su dirección"
                        required
                        :state="validarDireccion"
                        ></b-form-input>
                        <b-form-invalid-feedback :state="validarDireccion">
                            Este campo es obligatorio.
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="validarDireccion">
                           
                        </b-form-valid-feedback>
                    </b-form-group>

                    <b-form-group
                    id="group-new-clave"
                    label="Contraseña:"
                    label-for="input-new-clave"
                    >
                        <b-form-input
                        id="input-new-clave"
                        v-model="newUser.clave"
                        type="password"
                        placeholder="Ingrese una contraseña"
                        required
                        :state="validarClave"
                        ></b-form-input>
                        <b-form-invalid-feedback :state="validarClave">
                            La contraseña debe tener entre 5 y 12 carácteres.
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="validarClave">
                           
                        </b-form-valid-feedback>
                    </b-form-group>

                    <b-form-group
                    id="group-verificar-clave"
                    label="Verificar contraseña:"
                    label-for="input-new-clave2"
                    >
                        <b-form-input
                        id="input-new-clave2"
                        type="password"
                        v-model="claveAux"
                        placeholder="Ingrese de nuevo la contraseña"
                        required
                        :state="verificarClave"
                        ></b-form-input>
                        <b-form-invalid-feedback :state="verificarClave">
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="verificarClave">
                           Las contraseñas coinciden.
                        </b-form-valid-feedback>
                    </b-form-group>
                </b-form>
                
            </tab-content>
            <tab-content title="Finalizar">
                <div id="success">
                    <img src="assets/img/success.png" alt="Sucess"/>
                    <p>¡Ha completado todos los pasos!</p>
                </div>
            </tab-content>
        </form-wizard>
    </b-modal>
                 
</div>
    
</template>

<script>    
    export default {
        name: "Avatar",

        data: () => ({
            data:{
                usuario: '',
                clave: ''
            },
            status: 'Iniciar sesión',

            usuario: '',
            clave: '',

            newUser:{
                nombre: '',
                apellido: '',
                mail: '',
                direccion: '',
                clave: ''
            },

            claveAux: ''
        }),

        methods:{
            okHandler: function(){

                let validacionMail = (this.usuario.includes("@")) && 
                (this.usuario.includes(".com") || this.usuario.includes(".edu") )

                let validacionLogin = this.clave.length >= 5 && this.clave.length <= 12

                if(validacionMail && validacionLogin){
                    this.status = "Cerrar sesión"
                    this.data.usuario = this.usuario
                    this.data.clave = this.clave
                    this.usuario = ''
                    this.clave = ''
                    this.$bvModal.hide("modal-login")
                    alert("Sesión iniciada" + JSON.stringify(this.data))
                }

            },

            loginHandler: function(){
                if(this.status=="Iniciar sesión"){
                    this.$bvModal.show("modal-login")
                }else{
                    this.status = "Iniciar sesión"
                    alert("Sesión finalizada: "+JSON.stringify(this.data))
                }
            },

            newCuenta: function(){
                this.$bvModal.hide("modal-login")
                this.$bvModal.show("modal-registro")
            },

            validarPrimerPaso:function(){
                let validarMail = (this.newUser.mail.includes("@")) && 
                (this.newUser.mail.includes(".com") || this.newUser.mail.includes(".edu") )

                return validarMail && this.newUser.apellido != "" && this.newUser.nombre != ""

            },

            validarSegundoPaso:function(){
                let validarClave = this.newUser.clave.length >= 5 && this.newUser.clave.length <= 12
                let verificarClave = (this.newUser.clave == this.claveAux)
                return validarClave && verificarClave && this.newUser.direccion!=""
            },

            registroFinalizado:function(){
                alert(JSON.stringify(this.newUser))
                this.$bvModal.hide("modal-registro")
                this.newUser.nombre=""
                this.newUser.apellido=""
                this.newUser.clave=""
                this.newUser.mail=""
                this.newUser.direccion=""
                this.claveAux = ""
            }
        },

        computed: {

            validarMailLogin(){
                return (this.usuario.includes("@")) && 
                (this.usuario.includes(".com") || this.usuario.includes(".edu") )
            },

            validarClaveLogin(){
                return this.clave.length >= 5 && this.clave.length <= 12
            },

            validarNombre() {
                return this.newUser.nombre != ""
            },

            validarApellido() {
                return this.newUser.apellido != ""
            },

            validarMail(){
                return (this.newUser.mail.includes("@")) && 
                (this.newUser.mail.includes(".com") || this.newUser.mail.includes(".edu") )
            },

            validarClave(){
                return this.newUser.clave.length >= 5 && this.newUser.clave.length <= 12
            },

            verificarClave(){
                return this.newUser.clave == this.claveAux && this.claveAux != ""
            },

            validarDireccion(){
                return this.newUser.direccion != ""
            }
        }
    }
</script>

<style>
    #container{
        display: flex;
    }

    #new-cuenta:hover{
        color: #fed136;
    }

    #success{
        text-align: center;
    }
</style>