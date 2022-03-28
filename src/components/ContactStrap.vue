<template>
  <section id="contact" class="py-5">
    <div class="container">
      <h1>Hubungi Saya</h1>
      <p>Di sini anda bisa menghubungi saya</p>
      <form action="#" class="contact-form">
        <input type="text" placeholder="Nama" />
        <input type="email" name="" id="" placeholder="Email" />
        <textarea
          name=""
          placeholder="Pesan"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input type="button" value="Kirim" class="btn bg-secondary-built" />
      </form>
    </div>
  </section>
</template>

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
  color: #fff;
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
#contact .contact-form input,
#contact .contact-form textarea {
  display: block;
  margin-bottom: 1rem;
  padding: 5px 10px;
  width: 500px;
}
</style>
