import msg from './contents.js'

//document.write(msg);
//alert(msg);

var div = document.createElement('div');
div.id = 'app';
div.innerHTML = msg;

document.body.appendChild(div);

console.log();

//var appDiv = document.querySelector("#app");

//console.log(appDiv);

//var f = () => {
//    appDiv.innerHTML = msg;
//}

//setTimeout(f, 5000)

//appDiv.innerHTML = msg;