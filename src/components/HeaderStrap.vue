<template>
  <header
    id="header-port"
    class="d-flex flex-column align-items-center justify-content-center"
  >
    <img src="../assets/img-fikri.png" alt="Person" />
    <div class="word">
      <p>HELLO</p>
      <h2>Saya <span>Muhammad</span> Fikri</h2>
      <p>Seorang Web Desainer, Web Developer, Web Engineer dari Indonesia</p>
      <button class="btn bg-secondary-built mt-2">DOWNLOAD CV</button>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      heloword: "Header",
    };
  },
};
</script>

<style>
#header-port {
  height: 80vh;
  background: #1abc9c;
  gap: 5rem;
}
#header-port img {
  width: 200px;
  height: 200px;
  background: #2c3e50;
  border-radius: 50%;
}

#header-port .word {
  color: #fff;
}
#header-port .word h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
  margin-top: -15px;
}
#header-port .word span {
  color: #2c3e50;
}

/* end header css */

.primary-color-built {
  color: #1abc9c;
}
.secondary-color-built {
  color: #2c3e50;
}
.white-color-built {
  color: white;
}

.bg-primary-built {
  background: #1abc9c;
}
.bg-secondary-built {
  color: white;
  background: #2c3e50;
}
.bg-white-built {
  background: #fff;
}
</style>
