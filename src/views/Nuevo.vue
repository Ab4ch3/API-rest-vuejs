<template>
  <Header />
  <div class="container">
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputname" class="form-label">Nombre</label>
        <input
          type="Text"
          class="form-control"
          id="inputname"
          v-model="form.nombre"
        />
        <span class="small">*requerido</span>
      </div>
      <div class="col-md-6">
        <label for="inputDNI" class="form-label">DNI</label>
        <input
          type="Text"
          class="form-control"
          id="inputDNI"
          v-model="form.dni"
        />
        <span class="small">*requerido</span>
      </div>
      <div class="col-6">
        <label for="inputAddress" class="form-label">Direccion</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          v-model="form.direccion"
        />
      </div>
      <div class="col-md-6">
        <label for="inputemail" class="form-label">Email</label>
        <input
          type="text"
          class="form-control"
          id="inputemail"
          v-model="form.correo"
        />
        <span class="small">*requerido</span>
      </div>
      <div class="col-md-6">
        <label for="inputtlf" class="form-label">Telefono</label>
        <input
          type="Text"
          class="form-control"
          id="inputtlf"
          v-model="form.telefono"
        />
      </div>
      <div class="col-md-6">
        <label for="inputfecha" class="form-label">Fecha de Nacimiento</label>
        <input
          type="text"
          class="form-control"
          id="inputfecha"
          v-model="form.fechaNacimiento"
        />
      </div>
      <div class="col-md-6">
        <label for="inputZip" class="form-label">Codigo Postal</label>
        <input
          type="text"
          class="form-control"
          id="inputZip"
          v-model="form.codigoPostal"
        />
      </div>
      <div class="col-md-6">
        <label for="inputGen" class="form-label">Genero</label>
        <input
          type="text"
          class="form-control"
          id="inputGen"
          v-model="form.genero"
        />
      </div>

      <div class="col-6">
        <button type="submit" class="btn btn-primary" @click="guardar()">
          Guardar
        </button>
      </div>
      <div class="col-6">
        <button type="submit" class="btn btn-dark" @click="salir()">
          Salir
        </button>
      </div>
    </form>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "Nuevo",
  data() {
    return {
      form: {
        nombre: "",
        dni: "",
        correo: "",
        codigoPostal: "",
        genero: "",
        telefono: "",
        fechaNacimiento: "",
        token: "",
        toastCount: 0,
      },
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    guardar() {
      // this.form.token = localStorage.getItem("token");
      // axios
      //   .post("https://api.solodata.es/pacientes", this.form)
      //   .then((data) => {
      //     console.log(data);
      //   });
    },
    salir() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style></style>
