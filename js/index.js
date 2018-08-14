var app = new Vue({
  el: "#app",
  data: {
    wingClass: "left-wing"
  },
  methods: {
    upLeft: function(){
    this.wingClass="left-wing-active" 
  }    
  }
});