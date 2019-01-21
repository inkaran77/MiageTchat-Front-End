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
        this.$http.get('http://miagetchat.ovh:8080/MiageTchat/webapi/Utilisateurs/Online',{headers:{
        'Authorization': 'Bearer '+ localStorage.getItem('my_token')

        // Ok
        }}).then(response => {
            this.list=response.data.Users

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
            this.$http.get('http://miagetchat.ovh:8080/MiageTchat/webapi/Connexion/Off',{headers:{
            'Authorization': 'Bearer '+ localStorage.getItem('my_token')
          }})
          window.location.href = '../Connexion/index.html'
        }
      })


    },
},


beforeMount(){
   this.getUsersOnline()
},

updated(){
 this.getUsersOnline()
},


})  


var tchat = new Vue({
    el: '#tchat',
    data: {
      list_messages: null
    },
  
  methods: {
      getMessage: function (){
          this.$http.get('http://miagetchat.ovh:8080/MiageTchat/webapi/Message',{headers: {
            'Authorization': 'Bearer '+ localStorage.getItem('my_token'),
            'MsgId': localStorage.getItem('last_msg_id'),
  
          // Ok
          }}).then(response => {
              this.list_messages=response.data.Messages,
              console.log(this.list_messages)
              console.log("ök")
  
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
  
//   updated(){
//        this.getMessage()
//     },
  
  
})  


  var message = new Vue({
    el: '#message',
    data: {
        msg:'',
        token: localStorage.getItem('my_token')
    },
  
  methods: {
      postMessage: function (){
          this.$http.post('http://miagetchat.ovh:8080/MiageTchat/webapi/Message',{headers: {
            'Authorization': 'Bearer '+ this.token,
            'Message': this.msg,
  
          // Ok
          }}).then(response => {
              console.log(this.msg),
              this.msg=''
                
  
          // Error
          },response  => {
              if(response.status==400){
                  console.log("Erreur")
  
              }
          });
  
      },
  },
   
  
  
  })  