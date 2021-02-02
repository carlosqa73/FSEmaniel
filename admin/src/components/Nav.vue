<template>
    <div>
  <b-navbar toggleable="lg" variant="dark" type="dark"  fixed="top" >
    <b-navbar-brand href="#"><img src="assets/img/LogoMenu.png" width="80" alt="Emaniel Granespe"/></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!--b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav-->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
              <img src="assets/img/user.png" width="30" alt="User"/>
            
          </template>
          <b-dropdown-item @click="cerrarSesion">Cerrar sesión</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
      cerrarSesion(){
        window.location.href = "logout.html"
      }
    }
}
</script>

