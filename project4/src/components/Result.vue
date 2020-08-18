<template v-if="searched">
    <div class="result">
        <p>test</p>
    </div>
</template>
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>

<script>
export default {
    name: 'result'
}
</script>