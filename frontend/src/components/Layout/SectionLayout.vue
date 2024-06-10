<template>
    <section>
        <h1><slot name="header" /></h1>
        <h2><slot name="desc" /></h2>
        <slot />
    </section>
</template>
<style scoped>
section{
    margin: 5rem 0;
}
h1{
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    color: var(--primary);
}
h2{
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: var(--secondary);
}
@media (max-width: 768px) {
    section{
        margin: 3rem 0;
    }
}
@media (max-width: 465px) {
    section{
        margin: 2rem 0;
    }
}
</style>