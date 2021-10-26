async function myFunction(id){
    localStorage.setItem('id', id);
    document.getElementById("btn").className = "btn";
    document.getElementById("menu").className = "menu";
}

window.onload = function(){ 
    var aValue;
    aValue = localStorage.getItem('id');
    document.querySelector('.btn').onclick = function(e){
        var menu = document.querySelector('.btnimg');
        var menu = document.querySelector('.menu');
        var btn = document.querySelector('.btn');
       
        menu.classList.toggle('is-active');
        btn.classList.toggle('is-active');
        e.preventDefault();
    }

// api url
const api_url = "https://86ypveeq84.execute-api.eu-central-1.amazonaws.com/production/products";

const api_url1 = "https://86ypveeq84.execute-api.eu-central-1.amazonaws.com/production/products/";
  
// Defining async function


async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
  show(data);
}

async function getapi1(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data1 = await response.json();
    show1(data1);
}


if(aValue == null){
    aValue = 'w3245'
    };
    
// Calling that async function
getapi(api_url);
getapi1(api_url1 + aValue );

// Function to hide the loader

// Function to define innerHTML for HTML table
function show(data) {
    let tab = `
    <li class="menu_item">
    </li>
`;
    // Loop to access all rows 
    for (var i = 0; i<data.length; i++) {
        tab += `
                <li class="menu_item">
                    <a href="index.html"   onclick="myFunction(this.id)"  title ="" id="${data[i].productId}" class="menu_link">${data[i].productName}</a>
                </li>
    `;
    }
    // Setting innerHTML as tab variable
    document.getElementById("menu_item").innerHTML = tab;
}

function show1(data1) {
    let tab1 = `
    <div class="menu_item">
        <img style="width: 100%; height: 100%;" src=\"${data1.envImage}">
    </div>
`;
let tab2 = `
<li class="about-left">
    <img  style="width: 100%; height: 100%;"src=\"${data1.prodImage}">
</li>
<li class="about-right" style="background-color: ${data1.linkBgColor};">
<h2>${data1.linkBoxTitle}</h2>
    <a href="${data1.link}"> 
     
        <p class="pbild"> 
            <img src=\"../assets/arrow-right.svg" >
            ${data1.linkText}</p> 
    
    </a>
</li>`;

let tab3 = `
<div class="firsttext"> 
    <h1 class="section-title">${data1.productName} </h1>
	<h4> ${data1.productSub} </h4>
	<p>    ${data1.productDesc}</p>
</div> `;


    // Setting innerHTML as tab variable
    document.getElementById("banner-area").innerHTML = tab1;
    document.getElementById("about-content").innerHTML = tab2;
    document.getElementById("services").innerHTML = tab3;
}


};
