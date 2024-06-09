<template>
    <section>
        <h1><slot name="header" /></h1>
        <h2><slot name="desc" /></h2>
        <slot />
    </section>
</template>
<style scoped>
section{
    margin: 7rem 0;
}
h1{
    font-size: 20px;
    text-align: center;
    font-weight: 600;
    color: var(--primary);
}
h2{
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: var(--secondary);
}
</style>