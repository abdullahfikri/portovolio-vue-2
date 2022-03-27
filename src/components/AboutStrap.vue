<template>
  <section id="about">
    <div class="container py-5">
      <h1 class="text-center mb-5">Tentang Kami</h1>

      <div class="about-flex">
        <div class="deskripsi d-flex">
          <div class="img">
            <img src="../assets/work-lukas.jpg" alt="" />
          </div>
          <div class="align-self-center">
            <p class="fw-bold">Projek anda berada di tangan yang tepat.</p>
            <p>
              Perkenalkan saya <span class="fw-bold">Muhammad Fikri</span>,
              Front-End dan Web Engineer yang telah memiliki 3 tahun experience.
            </p>
          </div>
        </div>

        <div class="text-deskription py-5">
          <h3 class="pb-4 secondary-color-built text-center">Teknikal Skill</h3>
          <ul>
            <li class="">
              <h4>Photography:</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 75%"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li>
              <h4>HTML</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 70%"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li>
              <h4>HTML</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 77%"
                  aria-valuenow="77"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li>
              <h4>CSS</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 78%"
                  aria-valuenow="78"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li>
              <h4>JAVASCRIPT</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 90%"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li>
              <h4>NODE</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 85%"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heloword: "About",
    };
  },
};
</script>

<style>
#about img {
  width: 400px;
}

#about .text-deskription ul {
  list-style: none;
}
.deskripsi .img {
  margin-right: 2rem;
}

.text-deskription ul li {
  margin-bottom: 12px;
}
.text-deskription ul li h4 {
  font-weight: 400;
}
.text-deskription ul {
  padding-left: 0 !important;
}

.secondary-color-built {
  color: #2c3e50;
}
</style>
