var app = angular.module('chatApp',['ngMaterial']);

app.controller('chatController',function($scope){
	$scope.messages = [{
						sender:"BOT",
						text:"HelloWorld",
						time:"1:25pm"},
						{sender:"user",
						text:"hi",
						time:"1:26"}];
    var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
    exampleSocket.onmessage  =   function  (event) {
           var jsonData = JSON.parse(event.data);
           console.log(jsonData);
       };

});