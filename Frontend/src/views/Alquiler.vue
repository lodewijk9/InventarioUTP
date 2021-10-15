<template>
  <div class="card card-default">
    <div class="card-header">
      <h3 class="card-title">Alquiler Articulo</h3>
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
                <div class="callout callout-info col-md-12">
                    <h5><i class="fas fa-info"></i> Note:</h5>
                    Alquiler para  articulo : {{articulo.nombre}} actualmente existen :  {{articulo.cantidad}} unidades
                </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Tipo Evento</label>                   
                  <select class="form-control select2bs4 select2-hidden-accessible" style="width: 100%;" data-select2-id="17" tabindex="-1" aria-hidden="true" v-model="entity.tipo">
                    <option selected="selected" data-select2-id="ALQUILER">ALQUILER</option>
                    <option data-select2-id="ENTREGA">ENTREGA</option>
                  </select>
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <label>Quien Alquila</label>
                   <input type="text" class="form-control" v-model="entity.quienal">
                </div>
                <!-- /.form-group -->
              </div>
              <!-- /.col -->
              <div class="col-md-6">
                <div class="form-group">
                   <label>Cantidad</label>
                   <input type="text" class="form-control" v-model="entity.cantidad">
                </div>             
                <div class="form-group">
                   <label>Quien entrega</label>
                   <input type="text" class="form-control" v-model="entity.quienen">
                </div>
              </div>       
            </div>
            <!-- /.row -->
             <div class="row">
                <div class="col-md-6">
                  <template v-if="newEvento">
                    <button type="button" v-on:click="persistir(entity,articulo.id)" class="btn btn-block btn-primary">Guardar Evento</button>
                  </template>
                  <template v-else>
                      <button type="button" v-on:click="persistir(entity,articulo.id)" class="btn btn-block btn-primary">Editar Evento</button>
                  </template> 
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
</template>

<script>
import axios from "axios";
export default {
data() {
    return {
       entity:{},
       articulo: this.$route.params,
       newEvent:true
    }
  },
  created() {
    
    if(this.$route.params.fecha_inicio)
    {
      this.entity = this.$route.params;
      this.newEvent = false;
      console.log("Editar evento");
    }
      console.log(  this.newEvent);
    // articulo = this.$route.params.item;
  },
  methods: {
    persistir: function (entity,id) {   
      const headers = { 
        "Authorization": "Bearer my-token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
         "Content-Type": "application/json"
      }; 
      console.log(entity.id);
      axios.post("http://localhost:3000/eventos",{
        "articulo_id":id,
        "cantidad":Number(entity.cantidad),
        "fecha_inicio": new Date(),
        "quien_alquila":entity.quienal,
        "quien_entrega":entity.quienen,
        "tipo": entity.tipo
      },{ headers }).then((result) => {
           this.updateArticulo(entity.cantidad);
           console.log(result);
           this.$toast.open({
           message:'Alquiler guargado exitosamente',
           type: 'success',
           position: 'top-right',
           duration: '3000' 
         });
          console.log(result);
         this.$router.push({ name: 'Home'})
        }).catch(e => {
            console.log(e);
        });
       
    },
    updateEvento: function (entity,id) {   
      const headers = { 
        "Authorization": "Bearer my-token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
         "Content-Type": "application/json"
      }; 
      console.log(entity.id);
      axios.put("http://localhost:3000/eventos",{
        "articulo_id":id,
        "cantidad":Number(entity.cantidad),
        "fecha_inicio": entity.fecha_inicio,
        "fecha_fin": new Date(),
        "quien_alquila":entity.quienal,
        "quien_entrega":entity.quienen,
        "tipo": entity.tipo
      },{ headers }).then((result) => {
           this.updateArticulo(entity.cantidad);
           console.log(result);
           this.$toast.open({
           message:'Alquiler guargado exitosamente',
           type: 'success',
           position: 'top-right',
           duration: '3000' 
         });
          console.log(result);
         this.$router.push({ name: 'Home'})
        }).catch(e => {
            console.log(e);
        });
       
    },
    updateArticulo: function (cantidad) { 
      const headers = { 
        "Authorization": "Bearer my-token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
         "Content-Type": "application/json"
      };  
       
         axios.put("http://localhost:3000/articulos/"+this.articulo.id,{
          "id": this.articulo.id,    
          "nombre": this.articulo.nombre,
          "cantidad":Number(this.articulo.cantidad - cantidad),
          "fecha_creacion": this.articulo.fecha_creacion,
          "estado": this.articulo.estado
      },{ headers }).then((result) => {
          console.log(result);
    }).catch(e => {
            console.log(e);
        });
    }
  }

}
</script>

<style>

</style>