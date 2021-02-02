<template>
  <el-carousel :interval="0" type="card" height="51vh">
    <el-carousel-item v-for="(item,index) in items" :key="index">
          <!--
        :title="item.titulo"
        :img-src="item.imagen"
        img-alt="Image"
        img-height="260vh"
        -->
        <b-card
        
        img-top
        class="mb-2">
         <img :src="item.imagen" class="img-product">
          <p>{{item.titulo}}</p>
          <b-button href="#" variant="primary"  @click="$bvModal.show(item.titulo)">Ver</b-button>
        </b-card>
        
        <b-modal :id="item.titulo" hide-footer>
          <div class="d-block text-center">
            <h3>{{item.titulo}}</h3>
            <img :src="item.imagen" width="100%">
            <p>{{item.contenido}}</p>
          </div>
          <b-button class="mt-3" block @click="$bvModal.hide(item.titulo)">Cerrar</b-button>
        </b-modal>

    </el-carousel-item>
  </el-carousel> 
</template>

<script>
export default {
  name: "NewsCarousel",

  created: function(){
    this.getNoticias()
  },

  data: () => ({
      items: [],
    }),

  methods:{
    getNoticias: function(){
      fetch('https://server-emaniel.herokuapp.com/noticias')
      .then(response => response.json())
      .then((data) => {
        this.items = data
      })
      .catch((e)=>{
        console.log(e)
      })
    }

  }
}  
</script>

<style>
  .el-carousel__item h3 {
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .img-product{
    height: 34vh;
    width: 100%; 
  }

    @media(min-width: 900px){
  
        .img-product{
            
            height: 225px;
            width: 50%;
        }
  
    }

</style>