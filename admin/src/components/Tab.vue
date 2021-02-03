<template>
<div>
  <b-tabs content-class="mt-3" justified>

    <!---------------------------------------------------->
    <b-tab title="Reportes" active>
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Estadísticas</h2>
      </div>

      <div id = "estadisticas">
        <canvas id="myChart1" class="graph" width="300" height="100"></canvas>
        <canvas id="myChart2" class="graph" width="300" height="100"></canvas>
        <canvas id="myChart3" class="graph" width="300" height="100"></canvas>
      </div>


      <div class="text-center">
        <h2 class="section-heading text-uppercase">Reportes</h2>
      </div>

      <div id = "reportes">

        <div class="selector">
          <b-form-select v-model="producto" :options="productos"></b-form-select>
          <b-form-datepicker date-format-options="DD/MM/YY" id="example-datepicker" v-model="fecha" class="mb-2"></b-form-datepicker>
        </div>

        <b-button variant="primary" @click="cargarHandler">Cargar</b-button>
        <b-button variant="primary" @click="mostrarHandler">Mostrar</b-button>

        <div id="resultados">
          <b-table striped hover :fields="fields" :items="items"></b-table>
        </div>

      </div>
      
    </b-tab>
    <!---------------------------------------------------->
    <b-tab title="Noticias">

      <div class="text-center">
        <h2 class="section-heading text-uppercase">Noticias</h2>
      </div>

      <div class="group">
        <div id="buscarNoticia"></div>
        <div id="agregarNoticia"></div>
      </div>


      <!--Inicio tabla de noticias-->
      <div class="row text-center">

        <div class="container bootstrap snippets bootdey">
          <div class="row">
            <div class="col-lg-12">
              <div class="main-box no-header clearfix">
                <div class="main-box-body clearfix">
                  <div class="table-responsive">
                    <table class="table user-list">
                      <thead>
                        <tr>
                          <th><span>Título</span></th>
                          <th class="text-center"><span>Fecha de publicación</span></th>
                          <th>&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody id = "tabla-noticias">
                        <!--items AQUÍ-->
                                
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Fin tabla de noticias-->

    </b-tab>
    <!---------------------------------------------------->
    <b-tab title="Productos">

      <div class="text-center">
        <h2 class="section-heading text-uppercase">Productos</h2>
      </div>
      
      <div class="group">
        <div id="buscarProducto"></div>
        <div id="agregarProducto"></div>
      </div>
      
      <!--Inicio tabla de productos-->
      <div class="container bootstrap snippets bootdey">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-box no-header clearfix">
              <div class="main-box-body clearfix">
                <div class="table-responsive">
                  <table class="table user-list">
                    <thead>
                      <tr>
                        <th><span>Nombre</span></th>
                        <th class="text-center"><span>Precio</span></th>
                        <th><span>Stock</span></th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody id = "tabla-productos">
                      <!--items AQUÍ-->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Fin tabla de productos-->

    </b-tab>
    <!---------------------------------------------------->
    <b-tab title="Usuarios">

      <div class="text-center">
        <h2 class="section-heading text-uppercase">Usuarios</h2>
      </div>
      
      <div class="group">
        <div id="buscarUsuario"></div>
        <div id="agregarUsuario"></div>
      </div>

      <!--Inicio tabla de productos-->
      <div class="container bootstrap snippets bootdey">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-box no-header clearfix">
              <div class="main-box-body clearfix">
                <div class="table-responsive">
                  <table class="table user-list">
                    <thead>
                      <tr>
                        <th><span>Nombre</span></th>
                        <th><span>Apellido</span></th>
                        <th><span>Dirección</span></th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody id = "tabla-usuarios">
                      <!--items AQUÍ-->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Fin tabla de noticias-->
      

    </b-tab>
    <!---------------------------------------------------->
  </b-tabs>
</div>
</template>

<script>

export default {
  name: 'Tab',
    data() {
      return {
        form: {
          titulo: '',
          fecha: '',
          imagen: '',
          descripcion: ''
        },

        show: true,

        items: [],

        productos: [],

        idProductos: [],

        compras: [],

        usuarios: [],

        fields: ["Nombre","Apellido","Cantidad"],

        producto: null,

        fecha: new Date("04/02/2021"),

        empty: true

    }
      
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },

      getIdProducto: function(){
        let index = 0
        let flag = true
        while(flag){
          if(this.productos[index] == this.producto){
            break
          }
          index++
        }
        return this.idProductos[index]
      },

      mostrarHandler: function(){
        if(this.producto!=null && this.fecha!=null){
          this.items = []
          let idProducto = this.getIdProducto()
      
          this.compras.forEach(compra =>{
            
            let date = compra.fecha.split("T")[0]
          
            if(compra.producto == idProducto && date == this.fecha){
              let idUsuario = compra.usuario
              this.usuarios.forEach(usuario =>{
                
                if(usuario.id == idUsuario){
          
                  let item = {
                    "Nombre": usuario.nombre,
                    "Apellido": usuario.apellido,
                    "Cantidad": compra.cantidad
                  }

                  this.items.push(item)
                }
              })
            }
          })
          
        }
      },

      cargarHandler: function(){

        if(this.empty){
          fetch("https://server-emaniel.herokuapp.com/productos")
          .then(response => response.json())
          .then((data) => {
            data.forEach(element => {
              this.productos.push(element.descripcion)
              this.idProductos.push(element.id)
            })
          })

          fetch("https://server-emaniel.herokuapp.com/compras")
          .then(response => response.json())
          .then((data) => {
            this.compras = data
          })

          fetch("https://server-emaniel.herokuapp.com/usuarios")
          .then(response => response.json())
          .then((data) => {
            this.usuarios = data
          })

          this.empty = false
        }
      }

    }
}



</script>

<style scoped>

  #estadisticas {
    display: grid;
    grid-template-rows: 33% 33% 33%;
  }

  .graph{
    max-width: 400px;
      max-height: 200px;
      margin: 20px;
  }

  @media(min-width: 900px){
    #estadisticas {
      display: flex;
      justify-content: center;
    }

    .graph{
      max-width: 500px;
      max-height: 300px;
      margin: 20px;
    }
  }

  .selector{
    display: flex;
  }

  .group{
    display: flex;
    justify-content: center;
  }

</style>

