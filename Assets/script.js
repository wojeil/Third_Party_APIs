$(document).ready(function(){


//Setting Time 
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))

//setInterval(moment(), 1000),

//Adding text to local Storage
//localStorage.setItem()

//var hour = today.get(Hours())\\
//if html < {}
//addClass ("blue")





//adding an event listener to text content:

$(".saveBtn").on("click", function(){
    //get nearby values using siblings method:
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    //saves it in local storage.
    localStorage.setItem(time, value);
})

var K = ["nIne","tEn","eLeven","tWelve","oNe","tWo","tHree","fOur","fIve"];
var Area =["text9","text10","text11","text12","text1","text2","text3","text4","text5"];
//$("#text9").text(localStorage.getItem("nIne"));

for (let i = 0; i < K.length; i++) {

var cool = localStorage.getItem(K[i]);


console.log(localStorage.getItem(K[i]));

if(cool === null) {
    
}


    
    
    
}
   
    

console.log(localStorage.length);

});