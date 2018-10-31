var vm = new Vue({
    el: '#app',
    data: {
      firstName: 'Inkaran',
      lastName: 'Thuraiyappah'
    },
    computed: {
        fullName: {
            // getter
            get: function () {
              return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
              var names = newValue.split(' ')
              this.firstName = names[0]
              this.lastName = names[names.length - 1]
            }
          }
    }
  })
  
  console.log(vm.fullName)
  
  
  var fonction=setInterval(function(){
            vm.fullName="test "+"test";
  },5000);
  
  var fonction=setInterval(function(){
            vm.fullName="test1 "+"test1";
  },4000);
  
     
  //var interval1Id = setInterval(function(){
    //console.log(vm.fullName="test "+t );
    //},5000);
