
// ---------- TO DO LIST ----------

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks(){
let list = document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{
let li=document.createElement("li");
li.innerHTML=task + " <button onclick='deleteTask("+index+")'>X</button>";
list.appendChild(li);
});
}

function addTask(){
let input=document.getElementById("taskInput");
tasks.push(input.value);

localStorage.setItem("tasks",JSON.stringify(tasks));

input.value="";
displayTasks();
}

function deleteTask(index){
tasks.splice(index,1);
localStorage.setItem("tasks",JSON.stringify(tasks));
displayTasks();
}

displayTasks();


// ---------- PRODUCT LIST ----------

let products = [
{name:"Laptop", category:"electronics", price:60000},
{name:"Mobile", category:"electronics", price:20000},
{name:"T-Shirt", category:"clothes", price:800},
{name:"Jeans", category:"clothes", price:1500}
];

function displayProducts(list){
let container=document.getElementById("productContainer");
container.innerHTML="";

list.forEach(p=>{
container.innerHTML+=`
<div class="product">
<h3>${p.name}</h3>
<p>Category: ${p.category}</p>
<p>Price: ₹${p.price}</p>
</div>
`;
});
}

displayProducts(products);

function filterProducts(){
let category=document.getElementById("filter").value;

if(category==="all"){
displayProducts(products);
}
else{
let filtered=products.filter(p=>p.category===category);
displayProducts(filtered);
}
}

function sortProducts(){

let value=document.getElementById("sort").value;

let sorted=[...products];

if(value==="low"){
sorted.sort((a,b)=>a.price-b.price);
}

if(value==="high"){
sorted.sort((a,b)=>b.price-a.price);
}

displayProducts(sorted);

}