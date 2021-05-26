<template>
  <div class="container" v-if="user.token">
    <div class="row justify-content-center" v-if="user.data">
      <div class="col-sm-4 mt-5">
        <h1 class="text-center mb-4">Profile</h1>

        <div class="card p-3">
            <p>Name: {{user.data.name}}</p>
            <p>Email: {{user.data.email}}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="justify-content-center" v-else>
    <div class="text-danger">Unauthenticated</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "Me",
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['user'])
    }
}
</script>
