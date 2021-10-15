<template>
    <form v-on:submit.prevent="persistir">
    <div class="card card-default">
          <div class="card-header">
            <h3 class="card-title">Persistir articulo</h3>

            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse">
                <i class="fas fa-minus"></i>
              </button>
              <button type="button" class="btn btn-tool" data-card-widget="remove">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Estados</label>
                  <div class="form-group clearfix">
                      <div class="icheck-success d-inline">
                        <input type="radio" name="estado" checked="" id="radioSuccess1" v-model="entity.estado">
                        <label for="radioSuccess1">
                            Nuevo
                        </label>
                      </div>
                      <div class="icheck-danger d-inline">
                        <input type="radio" name="estado" checked="" id="radioDanger1" v-model="entity.estado">
                        <label for="radioDanger1">
                             Usado
                        </label>
                      </div>                                 
                    </div>
                </div>
              </div>
              <div class="col-md-6">   
                <!-- /.form-group -->
                <div class="form-group">
                  <label>Cantidad</label>
                   <input type="text" class="form-control" v-model="entity.cantidad"> 
                </div>
                <!-- /.form-group -->
              </div>
              <!-- /.col -->
              <div class="col-md-12">
                <div class="form-group">
                  <label>Nombre Articulo</label>
                   <input type="text" class="form-control" v-model="entity.nombre"> 
                </div>
                <!-- /.form-group -->
                
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
             <div class="row">
                <div class="col-md-6">
                    <button v-on:click="persistir(entity)" type="button" class="btn btn-block btn-primary">Crear Articulo</button>
                </div>
                <div class="col-md-6">
                    <button type="button" class="btn btn-block btn-default">Limpiar</button>
                </div>
             </div>    
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
           
          </div>
        </div>
        </form>
</template>

<script>
import axios from "axios";
//import VueToast from 'vue-toast-notification';
export default {
data() {
    return{
      entity:{}
    } 
  },
  methods: {
    persistir: function (entity) {   
      const headers = { 
        "Authorization": "Bearer my-token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
         "Content-Type": "application/json"
      }; 
      console.log(entity.id);
      axios.post("http://localhost:3000/articulos",{
        "nombre": entity.nombre,
        "cantidad":Number(entity.cantidad),
        "fecha_creacion": new Date(),
        "estado": entity.estado == 'on' ? 'Nuevo':'Usado'
      },{ headers }).then((result) => {
         entity.nombre="";
         entity.cantidad="";
         entity.estado="";

         
         this.$toast.open({
           message:'Articulo guargado exitosamente',
           type: 'success',
           position: 'top-right',
           duration: '3000' 
         });
          console.log(result);
       
    }).catch(e => {
            console.log(e);
        });
       
    }
  }


}
</script>

