<template>
    <div id="buttons">
        
        <input id="button1" type="submit" value="next" />
    </div>
</template>

<script>
export default {
    name: 'Button',
    data() {
        return {
            formdata: {ingredient: ""}
        }
    }
}
</script>

<style scoped>
#button1, #button2 {
    width: 150px;
    height: 25px;
    border-radius: 4px;
    display: inline;
    margin: 0 auto;
    background-color: red;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
}

#button1 {
    margin-left: 10px;
}


#button1:hover, #button2:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
#buttons {
    padding: 5px;
}
</style>