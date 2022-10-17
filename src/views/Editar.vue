<template>
  <Header />
  <div class="container">
    <form class="row g-3">
      <div class="col-md-2">
        <label for="inputId" class="form-label">ID</label>
        <input
          type="text"
          class="form-control"
          id="inputId"
          v-model="form.pacienteId"
        />
      </div>
      <div class="col-md-5">
        <label for="inputname" class="form-label">Nombre</label>
        <input
          type="Text"
          class="form-control"
          id="inputname"
          v-model="form.nombre"
        />
      </div>
      <div class="col-md-5">
        <label for="inputDNI" class="form-label">DNI</label>
        <input
          type="Text"
          class="form-control"
          id="inputDNI"
          v-model="form.dni"
        />
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

      <div class="col-4">
        <button type="submit" class="btn btn-primary" @click="editar()">
          Editar
        </button>
      </div>
      <div class="col-4">
        <button type="submit" class="btn btn-danger" @click="eliminar()">
          Eiminar
        </button>
      </div>
      <div class="col-4">
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
  name: "Editar",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      form: {
        pacienteId: "",
        nombre: "",
        dni: "",
        correo: "",
        codigoPostal: "",
        genero: "",
        telefono: "",
        fechaNacimiento: "",
        token: "",
      },
    };
  },
  methods: {
    editar() {
      axios.put("https://api.solodata.es/pacientes", this.form).then((data) => {
        console.log(data);
      });
    },
    eliminar() {
      var enviar = {
        pacienteId: this.form.pacienteId,
        token: this.form.token,
      };

      // En este caso estamos enviando atravez del header
      // axios
      //   .delete("http://api.solodata.es/pacientes", { headers: enviar })
      //   .then((datos) => {
      //     console.log(datos);
      //
      //   });
      console.log(alert("No funciona por ahora"));

      this.$router.push("/dashboard");
    },
    salir() {
      this.$router.push("/dashboard");
    },
  },
  mounted: function () {
    // Recordar q id , es el nombre que le pusiste al parametro a recibir en la ruta
    this.form.pacienteId = this.$route.params.id;
    axios
      .get("https://api.solodata.es/pacientes?id=" + this.form.pacienteId)
      .then((datos) => {
        this.form.pacienteId = datos.data[0].PacienteId;
        this.form.nombre = datos.data[0].Nombre;
        this.form.dni = datos.data[0].DNI;
        this.form.correo = datos.data[0].Correo;
        this.form.codigoPostal = datos.data[0].CodigoPostal;
        this.form.genero = datos.data[0].Genero;
        this.form.telefono = datos.data[0].Telefono;
        this.form.fechaNacimiento = datos.data[0].FechaNacimiento;
        this.form.token = localStorage.getItem("token");
      });
  },
};
</script>

<style></style>
