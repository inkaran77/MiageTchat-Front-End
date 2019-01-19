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
        soumettre: function (){
            this.$http.post('http://miagetchat.ovh:8080/MiageTchat/webapi/Inscription',{
                UserId: this.id,
                Firstname: this.firstname,
                Lastname: this.lastname,
                Birth_Year: this.date,
                Gender: this.picked,
                Email: this.email,
                Password: this.password

            }),(response) => {

                if(response.status==200){
                    alert("Vous êtes inscrit")
                }

                else if(response.status==400){
                    alert("Erreur mot de passe")
                }
            }



            
        }
    }

  })

  // register.soumettre()
  // console.log(this.id + this.firstname + this.picked)
// alert(this.id)