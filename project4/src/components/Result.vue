<template>
<div>
  <section v-if="searched">
    <div class="result">
        <p> {{ response }} </p>
      <!-- <div v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username" key="username-input">
      </div> -->
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