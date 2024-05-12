<template>
  <div
    class="page-header min-vh-80"
    :style="{
      backgroundImage: 'url(' + require('@/assets/Restaurante2.webp') + ')',
    }"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="text-center">
            <h1 class="text-white animate__animated animate__backInDown animate__slow">
              Rincón Gourmet
            </h1>
            <h3 class="text-white animate__animated animate__fadeIn animate__slow">Restaurante</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <div class="container">
      <section class="my-5 py-5">
        <div class="container">
          <div class="ms-auto">
            <div class="row justify-content-start">
              <div
                class="col-md-6 col-lg-6 card-body py-7 d-flex flex-column justify-content-center"
              >
                <div class="text-start">
                  <h3>
                    Desde el inicio de nuestro viaje culinario, nos hemos
                    comprometido con la idea fundamental de una cocina que
                    resalte lo mejor de los ingredientes disponibles. Nuestra
                    cocina se basa en la sostenibilidad, utilizando productos
                    locales de temporada de la más alta calidad y cultivando
                    relaciones estrechas con nuestros proveedores.
                  </h3>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info">
                  <img src="@/assets/PlatilloI.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="d-flex justify-content-evenly mb-5">
        <div>
          <router-link
            :to="{ name: 'ReservacionUsuario' }"
            class="btn btn-dark btn-home"
            >Reserva Aquí</router-link
          >
        </div>

        <div>
          <router-link :to="{ name: 'carta' }" class="btn btn-dark btn-home"
            >Nuestra Carta</router-link
          >
        </div>
      </div>

      <div class="col-lg-12 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
        <div class="rotating-card-container">
          <div
            class="card card-rotate card-background card-background-mask-info shadow-info mt-md-0 mt-5"
          >
            <div class="front front-background">
              <div class="row">
                <div class="col-lg-6 card-body py-7 text-center">
                  <img src="@/assets/Restaurante4.webp" class="img-fluid" />
                </div>
                <div
                  class="col-lg-6 card-body py-7 d-flex flex-column justify-content-center"
                >
                  <h3 class="font-weight-bolder mt-3">Una experiencia única</h3>
                  <p>
                    Con sus ventanales de piso a techo y hermosos detalles desde
                    algunos espejos antiguos hasta los coloridos azulejos en
                    todas partes, el diseño interior de Rincón Gourmet tiene sus
                    raíces en la fusión de la tradición y la modernidad. Cada
                    elemento está cuidadosamente seleccionado para crear una
                    atmósfera acogedora y elegante que celebra tanto la
                    artesanía local como las tendencias contemporáneas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="my-5 py-5">
        <div class="container">
          <div class="ms-auto">
            <div class="row justify-content-start">
              <div
                class="col-md-6 col-lg-6 card-body py-7 d-flex flex-column justify-content-center"
              >
                <div class="info">
                  <h3 class="font-weight-bolder mt-3">La comida</h3>
                  <p class="pe-5 just">
                    La comida gourmet se basa en la excelencia de ingredientes
                    de la más alta calidad, cuidadosamente seleccionados y
                    preparados con precisión y creatividad. Cada plato busca
                    deleitar los sentidos, fusionando sabores, texturas y
                    presentaciones de manera innovadora y armoniosa. La atención
                    al detalle es fundamental, desde la elección de los
                    productos frescos y locales hasta la meticulosa elaboración
                    culinaria. La comida gourmet no solo busca satisfacer el
                    paladar, sino también estimular la imaginación y crear una
                    experiencia gastronómica memorable y única para cada
                    comensal.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info">
                  <img src="@/assets/About us.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="my-5 py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="ms-auto">
              <div class="row justify-content-start">
                <div class="col-md-6">
                  <div class="info">
                    <img src="@/assets/Restaurante3.jpg" class="img-fluid" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info">
                    <h5 class="font-weight-bolder mt-3">Sobre Nosotros</h5>
                    <p class="pe-3 just">
                      En el Rincón Gourmet usamos los ingredientes más selectos
                      y frescos. Estos son respetuosamente preparados con
                      nuestras recetas diseñadas para cautivar todos los
                      sentidos. Nuestro menú ofrece platillos clásicos con un
                      enfoque gourmet y platillos especiales adaptados al
                      paladar mexicano.
                    </p>
                    <h5 class="font-weight-bolder mt-3">Misión</h5>
                    <p class="pe-3 just">
                      Ser un referente culinario en la región, ofreciendo una
                      experiencia gastronómica única y memorable a través de la
                      creatividad, la calidad y la excelencia en el servicio.
                    </p>
                    <h5 class="font-weight-bolder mt-3">Visión</h5>
                    <p class="pe-3 just">
                      En el Rincón Gourmet usamos los ingredientes más selectos
                      y frescos. Estos son respetuosamente preparados con
                      nuestras recetas diseñadas para cautivar todos los
                      sentidos. Nuestro menú ofrece platillos clásicos con un
                      enfoque gourmet y platillos especiales adaptados al
                      paladar mexicano.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 class="text-sm">LOGO</h6>
            <ul class="flex-column ms-n3 nav"></ul>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 class="text-sm">Contacto</h6>
            <ul class="flex-column ms-n3 nav">
              <li class="nav-item">Ubicación</li>
              <li class="nav-item">Teléfono</li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 class="text-sm">Horario</h6>
            <ul class="flex-column ms-n3 nav">
              <li class="nav-item">Lunes-Viernes</li>
              <li class="nav-item">00:00 a 00:00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>



<style>
  .btn-home {
  padding: 30px;
  font-size: 25px;
  transition: transform 0.3s ease, color 0.3s ease; 
}

.btn-home:hover {
  color: var(--color__secundario); 
  transform: scale(1.1); 
}
</style>