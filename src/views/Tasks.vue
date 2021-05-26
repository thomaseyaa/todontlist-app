<template>
  <div class="row justify-content-center" v-if="user.token">
    <div class="col-sm-4 mt-5">
      <h1 class="text-center mb-4">To don't list</h1>

      <router-link to="/create">
        <button type="button" class="btn btn-danger mb-4">Add a task</button>
      </router-link>

      <table class="table">
        <div v-for="task in tasks" :key="task.id" class="container">
          <div class="task mt-3">
            <router-link :to="{ path: '/tasks/'+ task.id}">
              <p>- {{ task.body }}</p>
            </router-link>
          </div>
        </div>
      </table>
    </div>
  </div>

  <div class="justify-content-center" v-else>
    <div class="text-danger">Unauthenticated</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "Tasks",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['user']),
    ...mapGetters(['tasks']),
    ...mapActions(['userTasks'])
  },
  mounted(){
    this.userTasks
  }
}
</script>