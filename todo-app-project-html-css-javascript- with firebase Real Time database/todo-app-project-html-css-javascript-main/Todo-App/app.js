var list = document.getElementById("list");
var text = document.getElementById("search-txt");

firebase.database().ref('todos').on("child_added",function(data){
         data.val().className = 'st';
        var li = document.createElement("li");
        var nodeText = document.createTextNode(data.val().name);
        li.appendChild(nodeText);
        li.setAttribute("class","color");
        var list = document.getElementById("list");
        list.appendChild(li)
       
       

        //  create button dell
    var delBtn = document.createElement("button");
    var BtnText = document.createTextNode("Delete Item");
    delBtn.setAttribute("id",data.val().key);
    delBtn.setAttribute("class","btn");
    delBtn.setAttribute("onclick","delItem(this)");
    delBtn.appendChild(BtnText);
    li.appendChild(delBtn);

    // create button Edit
    var editBtn = document.createElement("button");
    var BtnEditText = document.createTextNode("Edit Item");
    editBtn.setAttribute('id',data.val().key);
    editBtn.setAttribute("class","style");
    editBtn.setAttribute("onclick","edititem(this)");
    editBtn.appendChild(BtnEditText);
    li.appendChild(editBtn);

})
function addTodolist(){
    if(document.getElementById("todo-item").value==""){
      alert("plase enter the item");
    }else{
    var todo_item = document.getElementById('todo-item');
     var key = Math.random() * 123;
    // var key = firebase.database().ref('todos').push().key;
    var todoObj = {
        name : todo_item.value,
        key : key.toFixed()
    }
   firebase.database().ref('todos/'+key.toFixed()).set(todoObj);
    todo_item.value="";
    }
}

    // delete all item function
function deleteAllitem(){
    let text = "All List delete or not"
    if(confirm(text)==true){
    firebase.database().ref('todos').remove();
   list.innerHTML="";
    }
}
// delete one item function
function delItem(e){
    let text = "Press a button!\nEither OK or Cancel.";
  if (confirm(text) == true) {
    firebase.database().ref('todos/'+e.id).remove();
    e.parentNode.remove();
  }
}
// edit item function
function edititem(e){

   var a= firebase.database().ref("todos/"+e.id);   
    var a = prompt("Enter the Update item",e.parentNode.firstChild.nodeValue);
    var editTodo = {
        name : a,
        key : e.id
    }
    firebase.database().ref('todos/'+e.id).set(editTodo);
    e.parentNode.firstChild.nodeValue = a;
}

var li = document.createElement("li");
function search(){
  list.appendChild[li]
    console.log( list.appendChild[li]);
  }
  




//   // chapter 17 -19 program 7
// // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// // Write a program to enable “search by user input” in an 
// // array. 
// // After searching, prompt the user whether the given item is 
// // found in the list or not. Example:

// //get input from user
// var userINput = prompt("Welcome to ABC bakrey, What do you want to order sir/ma'am");
// // 1st charcter is large using slice
// let firstchar = userINput.slice(0,1);
// //other charcters is small using slice
// let otherchar = userINput.slice(1);
    
// firstchar = firstchar.toUpperCase();
// otherchar=otherchar.toLowerCase();

//   //user input concatination
// userINput = firstchar + otherchar;

// // create array
// var a = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"];
// for(var i=0;i<userINput.length;i++){
//    // check space 
//    if(userINput.slice(i,i+2)==="  "){
//        alert("double space are not elible");
       
//    }
// }
//  // get index
// var index  = a.indexOf(userINput);
//  //check user input is empty or check userinput not number
// if(userINput=="" || !isNaN(userINput)){
//    alert("please enter the item name");
// }
//  // check array give input from user
// else if(a.includes(userINput)){
//    alert(userINput+" "+"is available at index"+" "+index+" "+"in our bakrey");
// }else{
//    alert("we are sorry."+" "+userINput+" "+"is not availbe in our bakrey");
// }

