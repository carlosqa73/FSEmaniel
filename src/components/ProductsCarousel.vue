<template>
<div>
  <el-carousel :interval="4000" type="card" class="carousel" height="51vh">
    <el-carousel-item class="carousel-item" v-for="(item,index) in items1" :key="index">
        <b-card
        img-top
        class="mb-2 card-item">
        <img :src="item.imagen" class="img-product">
          <p class="nombre">{{item.nombre}}: ${{item.precio}}</p>
          <b-button href="#" variant="primary"  @click="$bvModal.show(item.nombre)">Ver</b-button>
        </b-card>
        <b-modal :id="item.nombre" hide-footer>
          <div class="d-block text-center">
            <h3>{{item.nombre}}</h3>
            <img :src="item.imagen" width="100%">
            <p>{{item.descripcion}}</p>
            <p>${{item.precio}}</p>
          </div>
          <b-button class="mt-3" variant="primary" block @click="$bvModal.hide(item.nombre)">Agregar al carro</b-button>
        </b-modal>
    </el-carousel-item>
  </el-carousel> 

   <el-carousel :interval="4000" type="card" class="carousel" height="51vh">
    <el-carousel-item class="carousel-item" v-for="(item,index) in items2" :key="index">
        <b-card
        img-top
        class="mb-2 card-item">
          <img :src="item.imagen" class="img-product">
          <p class="nombre">{{item.nombre}}: ${{item.precio}}</p>
          <b-button href="#" variant="primary"  @click="$bvModal.show(item.nombre)">Ver</b-button>
        </b-card>
        <b-modal :id="item.nombre" hide-footer>
          <div class="d-block text-center">
            <h3>{{item.nombre}}</h3>
            <img :src="item.imagen" width="100%">
            <p>{{item.descripcion}}</p>
            <p>${{item.precio}}</p>
          </div>
          <b-button class="mt-3" variant="primary" block @click="$bvModal.hide(item.nombre)">Agregar al carro</b-button>
        </b-modal>
    </el-carousel-item>
  </el-carousel> 
</div> 
</template>

<script>
export default {
  name: "NewsCarousel",

created: function(){
            this.getProductos()
        },

        data: () => ({
            items1: [],
            items2: []
        }),

        methods:{
            getProductos: function(){
                fetch('./data/productos.json')
                .then(response => response.json())
                .then((data) => {
                    
                    let mitad = Math.floor(data.productos.length/2)

                    this.items1 = data.productos.slice(0,mitad)
                    this.items2 = data.productos.slice(mitad)

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