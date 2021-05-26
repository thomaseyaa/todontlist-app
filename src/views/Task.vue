<template>
  <div class="row justify-content-center" v-if="user.token">
    <div class="col-sm-4 mt-5">
      <h1 class="text-center mb-4">Task</h1>

      <div>
        <form>
            <div class="form-group">
                <textarea type="text" name="body" class="form-control" v-model="task.body"></textarea>
            </div>
            <div class="row justify-content-center">
              <button type="button" class="btn btn-primary mr-3" @click.prevent="updateMethode(task)">Update</button>
              <button type="submit" class="btn btn-danger text-white" @click.prevent="deleteMethode(task)">Delete</button>
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
  name: "Task",
  data() {
    return {
      form: {
        body: '',
      }
    };
  },
  computed: {
    ...mapGetters(['user']),
    ...mapGetters(['msg']),
    ...mapGetters(['task'])
  },
  methods: {
    ...mapActions(['userTask']),
    ...mapActions(['updateTask']),
    ...mapActions(['deleteTask']),
    updateMethode(task){
      this.updateTask(task)
      this.$router.push('/tasks');
    },
    deleteMethode(task){
      this.deleteTask(task)
      this.$router.push('/tasks');
    }
  },
  mounted(){
    this.userTask(this.$route.params.id)
  }
}
</script>