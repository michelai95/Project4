<template>
<div>
  <section v-if="searched">
    <div class="result">
        <p> {{ response }} </p>
    </div>
  </section>
  <section v-else>
    <p></p>
  </section>
</div>
</template>


<script>
export default {
  name: 'Result',
  data() {
    return {
      
    }
    
  }
}
</script>