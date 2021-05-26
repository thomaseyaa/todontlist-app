<template>
  <div class="row justify-content-center">
    <div class="col-sm-4 mt-5">
      <h1 class="text-center mb-4">Register</h1>

      <div class="alert alert-success" role="alert" v-if="msg.success">
        {{msg.success}}
      </div>
      <div class="alert alert-danger" role="alert" v-if="msg.error">
        {{msg.error}}
      </div>

      <div>
        <form @submit.prevent="registerUser(form)">
          <div class="form-group">
            <input type="text" class="form-control" name="name" placeholder="Name" v-model="form.name">
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="email" placeholder="E-mail" v-model="form.email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" v-model="form.password">
          </div>
          <div>
            <button type="submit" class="btn btn-danger text-white btn-block">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Register",
  data() {
    return {
      form: {}
    };
  },
  computed: {
    ...mapGetters(['msg'])
  },
  methods: {
    ...mapActions(['register']),
    registerUser(form){
      this.register(form)
      this.$router.push('/');
    }
  },
  mounted(){
    this.msg.success = ''
    this.msg.error = ''
  }
}
</script>
