var productContainer = document.getElementById("products") // all div inside product
var search = document.getElementById("search") // input
var productlist = productContainer.querySelectorAll("div") // all div that contain the image and <p>
// store in NodeList.

// search.addEventListener("keyup", function(event){
//     var enteredValue = event.target.value.toUpperCase()

//     for(count = 0; count < productlist.length; count++){
//         var productName = productlist[count].querySelector("p").textContent

//         if(productName.toUpperCase().indexOf(enteredValue) < 0)
//         {
//             productlist[count].style.display = "none"
//         }
//         else{
//             productlist[count].style.display = "block"
//         }
//     }
// })



function show() {

    var enteredValue = search.value

    for (var i = 0; i < productlist.length; i++) {
        if (productlist[i].textContent.toLowerCase().indexOf(enteredValue.toLowerCase()) < 0) {
            productlist[i].style.display = "none"
        }
        else {
            productlist[i].style.display = "block"
        }
    }


}

