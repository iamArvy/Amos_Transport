<template>
    <figure>
        <img src="@/assets/scania-bus.jpg" alt="">
        <figcaption>Scania bus</figcaption>
        <div class="cover"> </div>
    </figure>
</template>
<style scoped>
figure{
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    width: 350px;
    color: white;
}
figure:hover{
    width: 450px;
}
img{
    width: 100%;
    height: 100%;
}
figcaption{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 10px;
    display: flex;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    z-index: 2;
}
</style>