<template>
    <div class="details">
        <div class="detail-line">
            <h3>head office</h3>
            <span>No 1, Stephens Street, Lagos, Nigeria.</span>
        </div>
        <div class="detail-line">
            <h3>call lines</h3>
            <span>08011111111, 08122222222.</span>
        </div>
        <div class="detail-line">
            <a href=""><i class="fa-brands fa-facebook-f fa-2xl" ></i></a>
            <a href=""><i class="fa-brands fa-twitter fa-2xl"></i></a>
            <a href=""><i class="fa-brands fa-instagram fa-2xl" ></i></a>
        </div>

            </div>
</template>
<style scoped>
.detail-line{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
}
h3{
    color: var(--primary);
    font-weight: 700;
    text-transform: capitalize;
    text-align: right;
}
span{
    color: var(--buttons);
}
.fa-brands{
    color: var(--buttons);
}
.spanhead{
  color: var(--primary);
}
.details{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 3rem;
}
</style>