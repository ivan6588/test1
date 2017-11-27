var connection = new WebSocket('ws://localhost:3000');
//var connection = new WebSocket('ws://localhost:3000/Pag');

connection.onopen = function () {
    // first we want users to enter their names
    console.log("Conectado");
};

connection.onerror = function (error) {
    console.log("Error: " + error);
};

// most important part - incoming messages
connection.onmessage = function (message){

    console.log("Mensage;" + message.data);
}
function Focos(num,accion) {
    var obj = {Message:accion,device:"Pag",IdAccion:num}
    connection.send(JSON.stringify(obj));
}
