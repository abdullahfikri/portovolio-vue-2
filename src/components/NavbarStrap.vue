<template>
  <nav id="nav-bg">
    <div
      class="container d-flex justify-content-between py-3 align-items-center px-2"
    >
      <div class="fs-1 fw-bold white-color-built">FIKRI</div>
      <ul
        class="list-unstyled fs-4 fw-bold d-flex justify-content-evenly nav-menu align-items-center"
      >
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#work-bootstrap">PROJECT</a></li>
        <li><a href="./contact.html">CONTACT</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      heloword: "Nav",
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
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
  background: #2c3e50;
}
.bg-white-built {
  background: #fff;
}

/* navbar */
#nav-bg ul {
  margin: 0 !important;
}
#nav-bg {
  background: #2c3e50;
}
#nav-bg ul a {
  text-decoration: none;
  color: #fff;
}
.nav-menu {
  gap: 1rem;
}
</style>
