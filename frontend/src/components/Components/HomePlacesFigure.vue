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
    transition: ease-in-out 0.5s;
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
@media (max-width: 768px) {
    figure{
        width: 100%;
        border-radius: unset;
    }
    figure:hover{
        width: unset;
        overflow: hidden;
    }
    figcaption{
        font-size: 12px;
    }
    figure:hover img{
        width: calc(100% + 20px);
        height: 120%;
    }

}
</style>