var online = new Vue({
  el: '#online',
  data: {
    list: null
  },

// Appeler tous les 1sec une fonctionnalite
created: function(){
      setInterval(function() {
        this.getUsersOnline;
        }, 1000);
    },

methods: {
    getUsersOnline: function (){
        this.$http.get('https://jsonplaceholder.typicode.com/users',{
        //this.$http.get('https://test91.free.beeceptor.com/users',{
            //token: localStorage.getItem('my_token')

        // Ok
        }).then(response => {
            this.list=response.data,
            console.log(response.data)

        // Error
        },response  => {
            if(response.status==400){
                console.log("Erreur")

            }
        });

    },

    deconnexion: function(){
      Swal.fire({
        title: this.id,
        text: 'Êtes-vous sûr de vouloir vous déconnecter?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText:'Oui',
        cancelButtonText: 'Non',
      }).then((result) =>{
        if (result.value){
          window.location.href = '../Connexion/connexion.html'
        }
      })


    },
},



beforeMount(){
   this.getUsersOnline()
},

//updated(){
 //   this.getUsersOnline()
// },


})  


var tchat = new Vue({
    el: '#tchat',
    data: {
      list_messages: null
    },
  
  methods: {
      getMessage: function (){
          this.$http.get('https://jsonplaceholder.typicode.com/users',{
            //token: localStorage.getItem('my_token')
  
          // Ok
          }).then(response => {
              this.list_messages=response.data,
              console.log(response.data)
  
          // Error
          },response  => {
              if(response.status==400){
                  console.log("Erreur")
  
              }
          });
  
      },
  },
  
  beforeMount(){
     this.getMessage()
  },
  
  //updated(){
   //   this.getMessage()
  // },
  
  
  })  