
var lat;
var lon;
var link="https://fcc-weather-api.glitch.me/api/current?lat=";
var v;
var arr=[];

function mylocation(){
  
navigator.geolocation.getCurrentPosition(function(position){
   lat= position.coords.latitude;
   lon=position.coords.longitude;
   v=link+lat+"&lon="+lon;
 console.log();
 arr.push(v)
 weather();

});
  } 

mylocation();

function weather(){
 var url=arr[0]; 
  console.log();
 $.ajax({
    url: url,   
    dataType: "JSON",
    success: function (result) {
      console.log(url);
      document.getElementById("location").innerHTML=result.name;
      console.log();
      var temDegree=result.main.temp;
      document.getElementById("temDigits").innerHTML=temDegree+' &deg';
      console.log();
      document.getElementById("tempWord").innerHTML=result.weather[0].main;
      document.getElementById("icon").innerHTML="<img id='icon' src="+result.weather[0].icon+"></img";
      
      var toggle; //this needed to be global, dont as why      
      document.getElementById('celc').onclick=function(){
        if(toggle===undefined){       
          document.getElementById("temDigits").innerHTML=temDegree*(9/5)+32+' &deg';
          document.getElementById("temperatureName").innerHTML="F";
       toggle=null;  }
        
        else if(toggle===null){          
          document.getElementById("temDigits").innerHTML=temDegree+' &deg';
          document.getElementById("temperatureName").innerHTML="C";
        toggle=undefined; }
        
        }
      
           }}); 
}