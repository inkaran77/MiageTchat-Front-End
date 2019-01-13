var register = new Vue({
    el: '#register',
    data: {

      picked: '',
      id:'',
      lastname:'',
      firstname:'',
      date:'',
      email:'',
      password:''

    },

    methods: {
        soumettre: function (event){
            console.log(this.id + this.firstname + this.picked)
            alert(this.id)
        }
    }

  })

  // register.soumettre()
  