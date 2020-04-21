$(document).ready(function(){
  var input = document.getElementById('input');// reference to our  input box for the tasks
  var input2 = document.getElementById('input2');
  var btn = document.getElementById('btn'); //reference to our  the buttom
  var lists = {// lists containing our two list of done and incomplete todo 
  		todo: document.getElementById('todo'),
  		done: document.getElementById('done')
  };

  // console.log(input,input2, btn, lists);
 var makeTask = function(str, onCheck){ // function who will create the list elements that we gonna inject inside the lists, the first parameter is the string thats gonna be added as tasks and the second is the callback function onCheck we can see the use of it below
 		var element = document.createElement("li");//creating the element using creatElement
 		var checkbox = document.createElement("input");// create a checkbox


 		var label = document.createElement("span");// the text beside the checkbox
    
 		label.textContent = str;    
    label.id = 'lab';// just to style the text append it to the li 
    
 		checkbox.addEventListener('click',onCheck);//the first parameter is the event, the second parameter is the function that will be executed when the even occurs
 		checkbox.type = 'radio';//precising the type of the checkbox


    element.appendChild(checkbox);//putting the checkbox inside the "li" element created 

 		element.appendChild(label);//putting the text span inside the element
 		return element;
  }  
  
  var addTask = function(task){// to function that will add the task to the  list todo element above
  	  lists.todo.appendChild(task); //take and element and append it to the subtree of the element(list  todo in our case) ==> it will createa an "li" element in the "ul" todo
  };

  var onCheck = function(event){
  	var task = event.target.parentElement; // return the parent element of the element  that was targeted by event in our case the li
  	var list = task.parentElement.id;// we are gonna check to parent of the "li" (here the "ul") so we can check the id of the ul (for example if it is "done" it must be moved to the other list)

  	lists[list === 'done' ? 'todo' : 'done'].appendChild(task);//it will remove this elemen(task) from where it was and append it in our element because it cant be in two places in the same time in the DOM, if the value of the id is 'done' then append it to the ul todo or incompleted list else append it to our done list of completed task, its a condition inside a key (really amasing) we must use the square bracket cause its a variable
  	this.checked = false; // this will uncheck all the boxes cause we dont need them checked when we do our movement of tasks
  	input.focus();// this will return the focus to our input everytime we check the list 

  }; 
  
  //*************** here we create the task that will be add on the input******************** 
var onInput = function(){
	var str = input.value.toLowerCase().trim();// this built in function trim() remove the white space from the input if for example the words are preceded by white space, add the lowercase so when he inter uppercase its turnnto lower case 
  var str1 = input2.value.toLowerCase().trim();
  if(str1 === "monday" || str1 === "tuesday" || str1 === "thursday" || str1 === "wednesday" || str1 === "friday" || str1 === "saturday" || str1 === "sunday" ){
  var str2 = str + ' ' + 'was scheduled for '+ str1;
	if(str.length > 0 && str1.length > 0){// if the input is letter at least not empty 
		addTask(makeTask(str2, onCheck));// the first parameter of our function add task is the list created by our function makeTaskHtml( our function makeTaskHtml will take as parameter the str entered as input and the call back function an return the list to do ) 
		input.value = ""; // this will clear the input after we entered it
    input2.value= "";
		input.focus();//it's a html DOM method to an element here our input, so it give us always focus on the input    
	}
 }
  else{
    alert('Please enter a valid day');
    input2.value="";
    input2.focus();
  }
  
};

btn.addEventListener('click', onInput);//whenever the button get clicked it will call the function and take the input value and returned
input.addEventListener('keypress', function(event){// this function will improve the way of entering the input so we don't have each to click add we can type "enter" too
	var code = event.keyCode;
	if(code === 13){
		onInput(); // it will execute our onInput function
	}
})

	// console.log(code);//  we check here  with the  console the code of "enter" we found its 13
  btn.addEventListener('click', onInput);//whenever the button get clicked it will call the function and take the input value and returned
input2.addEventListener('keypress', function(event){// this function will improve the way of entering the input so we don't have each to click add we can type "enter" too
  var code = event.keyCode;
  if(code === 13){
    onInput(); // it will execute our onInput function
  }
})

});