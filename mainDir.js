angular.module("angularVacation")
.directive("carltonGif", function(){

  var link = function($scope, element){
       element.on('click',function(){
        //  element.append('<img class="dancer" src="http://i.imgur.com/tpUz0me.gif"/>');
        //  element.css("color", "red")
       })

  };

  return{
    // template: "",
    restrict: "AE",
    link: link
    }
});
