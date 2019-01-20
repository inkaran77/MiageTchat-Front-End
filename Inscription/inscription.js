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
        inscription: function (){
            this.$http.post('https://reqres.in/api/login',{
                // UserId: this.id,
                // Firstname: this.firstname,
                // Lastname: this.lastname,
                // Birth_Year: this.date,
                // Gender: this.picked,
                // Email: this.email,
                // Password: this.password
                email: this.id,
                password: this.password
    
            // Ok
            }).then(response => {
                Swal.fire({
                    title: 'Bravo ' +this.id,
                    text: 'Vous êtes inscrit !',
                    type: 'success',
                    onClose: () => {
                        // Aller à la page   
                        window.location.href = '../Connexion/index.html'
                    }
                })
    
            // Error
            },response  => {
                if(response.status==400){
                    console.log("Erreur")
    
                    Swal.fire(
                        'Oups!',
                        'Identifiant deja utilise',
                        'error'
                      )
                }
            });
    
        },
    
    
        getToken: function(){
            token: localStorage.getItem('my_token') || ''
            status: ''
            //console.log(localStorage.getItem('my_token'))
        }
    }
    
}) 

    

    // methods: {
    //     soumettre: function (){
    //         this.$http.post('http://miagetchat.ovh:8080/MiageTchat/webapi/Inscription',{
    //             UserId: this.id,
    //             Firstname: this.firstname,
    //             Lastname: this.lastname,
    //             Birth_Year: this.date,
    //             Gender: this.picked,
    //             Email: this.email,
    //             Password: this.password

    //         }),(response) => {

    //             if(response.status==200){
    //                 alert("Vous êtes inscrit")
    //             }

    //             else if(response.status==400){
    //                 alert("Erreur mot de passe")
    //             }
    //         }            
    //     }
    // }

