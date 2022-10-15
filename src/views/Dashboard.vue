<template>
  <div>
    <Header />

    <div class="container">
      <h2>Hover Rows</h2>
      <p>The .table-hover class enables a hover state on table rows:</p>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>DNI</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="paciente in listaPaciente" :key="paciente.PacienteId">
            <th scope="row">{{ paciente.PacienteId }}</th>
            <td>{{ paciente.Nombre }}</td>
            <td>{{ paciente.DNI }}</td>
            <td>{{ paciente.Telefono }}</td>
            <td>{{ paciente.Correo }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "Dashboard",
  data() {
    return {
      listaPaciente: null,
      pagina: 1,
    };
  },
  components: {
    Header,
    Footer,
  },
  // lo que este aca se ejecutara una vez montada la apliacion
  mounted: function () {
    let direccion = "https://api.solodata.es/pacientes?page=" + this.pagina;
    axios.get(direccion).then((data) => {
      this.listaPaciente = data.data;
    });
  },
};
</script>

<style></style>
