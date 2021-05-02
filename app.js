// _____________^^^^^^^^^_______________Chapter 43 to 48_____________^^^^^^^^^^^____________________

//  Qno # 01

// Show an alert box on click on a link.


{/* 
<a href="JavaScript:void(0)" onClick="alert('Hi');">Click</a> 
*/}

// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//  Qno # 02

// Display some Mobile images in browser. On click on an
// image Show the message in alert to user.


// start html
    // <div>
    //     <img src="https://tse4.mm.bing.net/th?id=OIP.6HNGtNeUyujnn9EACMYwiQHaEK&pid=Api&P=0&w=349&h=197" alt="iphone" width="200" height="200"><button onclick="btn()">Iphone</button>
    //     <img src="https://tse3.mm.bing.net/th?id=OIP.UIPLNwNzKaUwX8BJgH2yIAHaD4&pid=Api&P=0&w=289&h=152" alt="oppo" width="200" height="200"><button onclick="btn()">Oppo</button>
    //     <img src="https://tse4.mm.bing.net/th?id=OIP.n0iqAYeUzJyiLOiIKoKN3wHaEK&pid=Api&P=0&w=276&h=156" alt="sumsung" width="200" height="200"><button onclick="btn()">Sumsung</button>
    //     <img src="data:image/jpeg;base64,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" alt="infinix" width="200" height="200"><button onclick="btn()">Infinix</button>
    // </div>
// end html

// start script
// function btn(){
//     alert("Thanks for purchasing a phone from us");
// }
// end script
// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//  Qno # 03

// Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 


// start html
    
{/* <table border="1">
<tr>
    <td>First Student</td>
    <td><input type="text"  id="result1"></td>
    <td><button onclick="ddlt1()">Delete</button></td>
</tr>
<tr>
    <td>Second Student</td>
    <td><input type="text"  id="result2"></td>
    <td><button onclick="ddlt2()">Delete</button></td>
</tr>
<tr>
    <td>Third Student</td>
    <td><input type="text"  id="result3"></td>
    <td><button onclick="ddlt3()">Delete</button></td>
</tr>
<tr>
    <td>Fourth Student</td>
    <td><input type="text"  id="result4"></td>
    <td><button onclick="ddlt4()">Delete</button></td>
</tr>
<tr>
    <td>Fifth Student</td>
    <td><input type="text"  id="result5"></td>
    <td><button onclick="ddlt5()">Delete</button></td>
</tr>
<tr>
    <td>Sixth Student</td>
    <td><input type="text"  id="result6"></td>
    <td><button onclick="ddlt6()">Delete</button></td>
</tr>
<tr>
    <td>Seven Student</td>
    <td><input type="text"  id="result7"></td>
    <td><button onclick="ddlt7()">Delete</button></td>
</tr>
<tr>
    <td>Eight Student</td>
    <td><input type="text"  id="result8"></td>
    <td><button onclick="ddlt8()">Delete</button></td>
</tr>
<tr>
    <td>Nine Student</td>
    <td><input type="text"  id="result9"></td>
    <td><button onclick="ddlt9()">Delete</button></td>
</tr>
<tr>
    <td>Ten Student</td>
    <td><input type="text"  id="result10"></td>
    <td><button onclick="ddlt10()">Delete</button></td>
</tr>
</table>  */}

// end html


// start script

// function ddlt1(){
//     var dlt=document.getElementById("result1");
//     dlt.value = " ";
// }
// function ddlt2(){
//     var dlt=document.getElementById("result2");
//     dlt.value = " ";
// }
// function ddlt3(){
//     var dlt=document.getElementById("result3");
//     dlt.value = " ";
// }
// function ddlt4(){
//     var dlt=document.getElementById("result4");
//     dlt.value = " ";
// }
// function ddlt5(){
//     var dlt=document.getElementById("result5");
//     dlt.value = " ";
// }
// function ddlt6(){
//     var dlt=document.getElementById("result6");
//     dlt.value = " ";
// }
// function ddlt7(){
//     var dlt=document.getElementById("result7");
//     dlt.value = " ";
// }
// function ddlt8(){
//     var dlt=document.getElementById("result8");
//     dlt.value = " ";
// }
// function ddlt9(){
//     var dlt=document.getElementById("result9");
//     dlt.value = " ";
// }
// function ddlt10(){
//     var dlt=document.getElementById("result10");
//     dlt.value = " ";
// }

// end script

// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//  Qno # 04

// Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.


    
{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ722TbS-z3Yf3Eel0FVfa31C-IH6qBcIuI8w&usqp=CAU" onmouseover="src='https://arynews.tv/wp-content/uploads/2020/03/Quaid.jpg'" onmouseout="src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ722TbS-z3Yf3Eel0FVfa31C-IH6qBcIuI8w&usqp=CAU'" alt="">         */}


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//  Qno # 05

// Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.


// The Start Html
    // <div>
    //     <button onclick="increaseStart()">Increase</button>
    //     <button onclick="decreaseStart()">Decrease</button>
    //     <h1 id="nmbr">0</h1>
    // </div>
// The End Html

// var nmbr = 0;
// var number = document.getElementById("nmbr");
// function incRease(){
//     nmbr++
//     number.innerHTML=nmbr;
// }
// function increaseStart(){
//     interval= setInterval(incRease,1000) 
// }

// var number = document.getElementById("nmbr");
// function decRease(){
//     nmbr--
//     number.innerHTML=nmbr;
// }
// function decreaseStart(){
//     interval= setInterval(decRease,1000) 
// }


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

 
// _____________^^^^^^^^^_______________Chapter 49 to 52_____________^^^^^^^^^^^____________________



//  Qno # 01

// Create a signup form and display form data in your web
// page on submission


// The Start HTML
    // <div>
    //     <p>Name:     <input type="text" id="name"></p>
    //     <p>Gmail:    <input type="email" id="gmail"></p>
    //     <p>Password: <input type="password" id="password"></p>
    //     <input type="submit" value="Submit" onclick="mainFunction()">
    // </div>
// The End Html

// function mainFunction(){
//     function getName(){
//         var getname =document.getElementById("name");
//         console.log(getname.value); 

//     }
//     function getGmail(){
//         var getgmail =document.getElementById("gmail");
//         console.log(getgmail.value);

//     }
//     function getPassword(){
//         var getpassword =document.getElementById("password");
//         console.log(getpassword.value);

//     }
//     getName();
//     getGmail();
//     getPassword();
// }


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//  Qno # 02

// Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.


// The Start Html

// <div>
// <div><img src="https://tse2.mm.bing.net/th?id=OIP.bGPOZrUyKBjRYlqYBGqAPwHaEK&pid=Api&P=0&w=268&h=152" alt="infinx"></div>
// <div><p id="para">Infinix Note 7 6GB <a href="javascript:void(0)" onclick="readMore()">Read More</a></p></div>
// </div>

// The End Html


// function readMore(){
//     var text="Infinix Note 7 6GB Dimensions	173.4 x 79 x 8.8 mm Weight	206 Gram SIM	Dual Sim, Dual Standby (Nano-SIM) Color Shades	Forest Green, Aether Black, Bolivia Blue UI	XOS 6.0 Back Camera (Main)	Quad Camera: 48 MP, f/1.7, 25mm + 2 MP macro lens + 2 MP depth sensor + low light video camera, Quad LED Flash Selfie Camera (Front)	16 MP, LED Flash, Video ([email protected]) Camera Features	Phase Detection, Geo-tagging, Panorama, HDR, Video ([email protected]) Display Size	6.95 Inches Internal	128GB Built-in, 6GB RAM Battery	(Li-Po Non removable), 5000 mAh Prize Rs. 27,999";
//     var readmore=document.getElementById("para");
//     readmore.innerHTML=text;

// }

// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


//  Qno # 03

// In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row


// start html
{/* <div>
<input type="text" placeholder="Do you wanna add user " id="todo">
<input type="button" value="Add-item" onclick="addItem()">
</div>
<div>
<ul id="list">

</ul>
</div> */}

// end html




// var list=document.getElementById("list");
// function addItem(){
//     var addtodo=document.getElementById("todo");
//     var li=document.createElement("li");
//     var liText=document.createTextNode(addtodo.value);
//     // create button
//     var dltBtn=document.createElement("button");
//     var dltText=document.createTextNode("Delete Item");
//     dltBtn.appendChild(dltText)
//     dltBtn.setAttribute("class","btn");
//     dltBtn.setAttribute("onclick","dltItem(this)");

//     var edtBtn=document.createElement("button");
//     var edtText=document.createTextNode("Edit Item");
//     edtBtn.appendChild(edtText)
//     edtBtn.setAttribute("class","btn1");
//     edtBtn.setAttribute("onclick","edtItem(this)");
//     li.appendChild(liText);
//     list.appendChild(li)
//     li.appendChild(dltBtn)
//     li.appendChild(edtBtn)


// }
// function dltItem(e){
//     e.parentNode.remove()
// }

// function edtItem(e){
//     var edtValue=prompt("Change the text",e.parentNode.firstChild.nodeValue);
//     e.parentNode.firstChild.nodeValue=edtValue;

// }




// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

