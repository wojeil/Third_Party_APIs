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



//$("#text9").text(localStorage.getItem("nIne"));

for (let i = 0; i < localStorage.length; i++) {

    var key = localStorage.key[i];
    var lock = localStorage.getItem(key);

    $()
    
    
}
   
    

console.log(localStorage.length);

});