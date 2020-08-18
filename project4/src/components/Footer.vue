<template>
    <div id="footer">
        <p class="footer">Michela Iacobucci ©</p>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>
#footer {
    display: flex;
    flex-direction: column-reverse;
    align-content: flex-end;
    font-size: 12px;
    margin-top: 35%;
}
@media only screen and (max-width: 600px) {
#footer {
    margin-top: 60%;
}
}
</style>