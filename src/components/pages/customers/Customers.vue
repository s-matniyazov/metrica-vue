<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <div class="row align-items-center">
            <div class="col">
              <h4 class="card-title">Contacts Details</h4>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table" style="height: calc(100vh - 260px)">
              <thead>
              <tr>
                <th v-for="col in columns">{{ col }}</th>
              </tr>
              </thead>

              <tbody>
              <tr v-for="row in data">
                <td>
                  <img :src="row.image" alt="" class="thumb-sm rounded-circle me-2" />{{ row.name }}
                  <small v-if="row.status" class="badge bg-soft-pink ms-1">{{row.status}}</small>
                </td>
                <td>{{row.email}}</td>
                <td>{{ row.phone }}</td>
                <td>{{ row.lead }}</td>
                <td>{{row.company}}</td>
                <td>
                  <span v-for="tag in row.tags" class="badge bg-soft-primary">{{ tag }}</span>
                </td>
                <td>
                  <a v-if="row.updatable"><i class="las la-pen text-secondary font-16 mdi mdi-pencil"></i></a>
                  <a v-if="row.deletable"><i class="ml-2 las la-trash-alt text-danger  font-16 mdi mdi-delete"></i></a>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
          <div class="row">
            <div class="col">
              <button class="btn btn-outline-light btn-sm px-4 ">+ Add New</button>
            </div>
            <div class="col-auto">
              <nav aria-label="...">
                <ul class="pagination pagination-sm mb-0">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="#">1</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">2 <span
                        class="sr-only">(current)</span></a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import image from "../../../../../metrica-que/src/assets/images/user/user-1.png";

const columns = ref([
  "Customer",
  "Email",
  "Phone",
  "Lead",
  "Company",
  "Tags",
  "Action",
]);

const data = ref([
  {
    status: "New",
    image: image,
    name: "Donald Gardner",
    email: getEmail("Donald Gardner"),
    phone: "+123456789",
    lead: "68",
    company: "Starbucks coffee",
    tags: ["test", "another"],
    updatable: true,
    deletable: true,
  },
  {
    image: image,
    name: "Donald Gardner",
    email: getEmail("Donald Gardner"),
    phone: "+123456789",
    lead: "68",
    company: "Starbucks coffee",
    tags: ["test", "another", "mne"],
    updatable: true,
    deletable: true,
  },
  {
    status: "New",
    image: image,
    name: "Donald Gardner",
    email: getEmail("Donald Gardner"),
    phone: "+123456789",
    lead: "68",
    company: "Starbucks coffee",
    tags: ["test", "another", "ane"],
    updatable: true,
    deletable: true,
  },
  {
    status: undefined,
    image: image,
    name: "Donald Gardner",
    email: getEmail("Donald Gardner"),
    phone: "+123456789",
    lead: "68",
    company: "Starbucks coffee",
    tags: ["test", "another", "making", "good"],
    updatable: true,
    deletable: true,
  },
  {
    status: undefined,
    image: image,
    name: "Donald Gardner",
    email: getEmail("Donald Gardner"),
    phone: "+123456789",
    lead: "68",
    company: "Starbucks coffee",
    tags: ["test", "another"],
    updatable: true,
    deletable: true,
  },
  {
    status: "New",
    image: image,
    name: "Donald Gardner",
    email: getEmail("Donald Gardner"),
    phone: "+123456789",
    lead: "68",
    company: "Starbucks coffee",
    tags: ["test", "another"],
    updatable: true,
    deletable: true,
  },
  {
    status: undefined,
    image: image,
    name: "Donald Gardner",
    email: getEmail("Donald Gardner"),
    phone: "+123456789",
    lead: "68",
    company: "Starbucks coffee",
    tags: ["test", "another"],
    updatable: true,
    deletable: true,
  },
  {
    status: undefined,
    image: image,
    name: "Donald Gardner",
    email: getEmail("Donald Gardner"),
    phone: "+123456789",
    lead: "68",
    company: "Starbucks coffee",
    tags: ["test", "another"],
    updatable: true,
    deletable: true,
  },
  {
    status: "New",
    image: image,
    name: "Donald Gardner",
    email: getEmail("Donald Gardner"),
    phone: "+123456789",
    lead: "68",
    company: "Starbucks coffee",
    tags: ["test", "another"],
    updatable: true,
    deletable: true,
  },
  {
    status: undefined,
    image: image,
    name: "Donald Gardner",
    email: getEmail("Donald Gardner"),
    phone: "+123456789",
    lead: "68",
    company: "Starbucks coffee",
    tags: ["test", "another"],
    updatable: true,
    deletable: true,
  },
]);

function getEmail(name) {
  return name.toLowerCase().replaceAll(" ", "_").concat("@gmail.com")
}
</script>

<style scoped>

</style>