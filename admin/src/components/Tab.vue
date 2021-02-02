<template>
<div>
  <b-tabs content-class="mt-3" justified>

    <!---------------------------------------------------->
    <b-tab title="Reportes" active><p></p></b-tab>
    <!---------------------------------------------------->
    <b-tab title="Noticias">

      <div class="text-center">
        <h2 class="section-heading text-uppercase">Noticias</h2>
      </div>

      <input class = "finder" id = "finder1" type="text" placeholder="Buscar Noticia" title="Ingresa el título de la noticia">
      <div id="agregarNoticia"></div>


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

      <input class = "finder" id = "finder2" type="text" placeholder="Buscar producto" title="Ingresa el nombre del producto">
      <div id="agregarProducto"></div>
      
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

      <input class = "finder" id = "finderUsuarios" type="text" placeholder="Buscar usuario" title="Ingresa el nombre del usuario">
      <div id="agregarUsuario"></div>

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

        show: true

    }
      
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
}


</script>