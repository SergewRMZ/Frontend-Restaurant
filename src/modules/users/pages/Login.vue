<template>
 <div class="page-header align-items-start min-vh-100":style="{ backgroundImage: 'url(' + require('@/assets/Restaurante.webp') + ')' }" loading="lazy">
  <span class="mask bg-gradient-dark opacity-6"></span>
    
  <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-info shadow-info border-radius-lg py-3 pe-1">
                
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Iniciar sesión</h4>
              </div>
            </div>
            <div class="card-body">
             
              <form @submit.prevent="">
            
              <div class="mb-3">
                <label for="email" class="form-label text-blue">Correo</label>
                <input id="email" name="email" type="email" class="form-control" required>
              </div>

              <div class="mb-3">
                <label for="password" class="form-label text-blue">Contraseña</label>
                <input  id="password" type="password" class="form-control" required>
              </div>

              <button class="btn btn-dark" type="submit">Enviar</button>
            </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>