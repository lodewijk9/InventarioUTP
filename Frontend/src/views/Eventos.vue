<template>
  <div class="row">
    <div class="col-lg-12">
      <TableEvent/>
    </div>
  </div>  
</template>

<script>
// @ is an alias to /src
import TableEvent from '../components/TableEvent.vue'

export default {
  name: 'Home',
   components:{
    TableEvent
  }
}
</script>
