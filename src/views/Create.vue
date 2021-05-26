<template>
  <div class="row justify-content-center" v-if="user.token">
    <div class="col-sm-4 mt-5">
      <h1 class="text-center mb-4">Add a task</h1>

      <div>
        <form>
          <div class="form-group">
            <textarea type="text" name="body" class="form-control" v-model="form.body"></textarea>
          </div>
          <div>
            <button type="submit" class="btn btn-danger text-white btn-block" @click.prevent="createMethode(form)">Add a task</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="justify-content-center" v-else>
    <div class="text-danger">Unauthenticated</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
    name: "Create",
  data() {
    return {
      form: {
        body: ''
      }
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    ...mapActions(['createTask']),
    createMethode(form){
      this.createTask(form)
      this.$router.push('/tasks');
    }
  },
}
</script>