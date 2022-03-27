<template>
  <section id="work-bootstrap" class="bg-primary-built">
    <div class="container py-5">
      <h1 class="text-center mb-4">PEKERJAAN KAMI</h1>
      <p class="text-center mb-5 secondary-color-built">
        Cek beberapa pekerjaan kami
      </p>
      <div class="items">
        <div class="item">
          <img src="../assets/item1.png" alt="" />
        </div>
        <div class="item">
          <img src="../assets/item2.png" alt="" />
        </div>
        <div class="item">
          <img src="../assets/item3.png" alt="" />
        </div>
        <div class="item">
          <img src="../assets/item4.png" alt="" />
        </div>
        <div class="item">
          <img src="../assets/item5.png" alt="" />
        </div>
        <div class="item">
          <img src="../assets/item6.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#work-bootstrap .items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
#work-bootstrap .item img {
  width: 100%;
}
.bg-primary-built {
  background: #1abc9c;
  color: #fff;
}
.secondary-color-built {
  color: #2c3e50;
}
</style>
