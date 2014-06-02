//Construyendo CRUD JS - LocalStorage(Database)

//   gustavo@xenda.pe
//          @xendacentral.com

//Definiendo Variables Globales
//Variables locales se definen con "var"
//Variables globales sin "var"
var circles = localStorage.getItem("tbCircles");
if(circles == null)
    circles = []

//Defniendo Constructor
var DeviceGroup = function DeviceGroup(prop){
    for(var i in prop){
        this[i] = prop[i];
    }
};

//Agregar
DeviceGroup.prototype.registrar = function(){
    this.lastUpdateTime     = Date.now();
    this.creationTime       = Date.now();
    window.circles.push(this);
    //var value = JSON.stringify(this);
    localStorage.setItem("tbCircles", JSON.stringify(window.circles));
}

//Obtener DeviceGroup
DeviceGroup.prototype.obtener = function(circleID) {
    lista = JSON.parse(localStorage.tbCircles);
    for(var i in lista){
        if(lista[i].deviceGroupID == circleID){
            return lista[i];
        }
    }
    return alert("No encontro");
};

//Obtener Todos
DeviceGroup.prototype.obtenerTodos = function(){
    return JSON.parse(localStorage.tbCircles);
}

//Eliminar
DeviceGroup.prototype.eliminar = function(circleID){
    for(var i in window.circles){
        if(window.circles[i].deviceGroupID == circleID){
            window.circles.splice(i, 1);
            localStorage.setItem("tbCircles", JSON.stringify(window.circles));
            return alert("Eliminado");
        }
    }
    return alert("No encontro");
}

//Modificar
DeviceGroup.prototype.modificar = function(){
    for(var i in window.circles){
        if(window.circles[i].deviceGroupID == this.deviceGroupID){
            var propiedades = this;
            console.log(propiedades);
            var seleccion = window.circles[i];
            console.log(seleccion);
            for(var j in propiedades){
                seleccion['accountID'] = propiedades['accountID'];
                seleccion['displayName'] = propiedades['displayName'];
                seleccion['description'] = propiedades['description'];
                seleccion['maxDeviceList'] = propiedades['maxDeviceList'];
            }
            console.log(seleccion);
            window.circles.splice(i, 1);
            window.circles.push(seleccion);
            localStorage.setItem("tbCircles", JSON.stringify(window.circles));
            return alert("Modificado")
        }
    }
    return alert("No encontro");
}

//Inicializar - Pruebas
var circle = new DeviceGroup({
  deviceGroupID     : '1',  
  accountID         : 'test',
  displayName       : 'The Amazing Spiderman',
  description       : 'Circulo de The Amazing Spiderman',
  maxDeviceList     : '3'
});

circle.registrar();

var circle = new DeviceGroup({
  deviceGroupID     : '2',  
  accountID         : 'test',
  displayName       : 'Los Caballeros del Zodiaco',
  description       : 'Circulo de Los Caballeros del Zodiaco',
  maxDeviceList     : '5'
});

circle.registrar();

var circle = new DeviceGroup({
  deviceGroupID     : '3',  
  accountID         : 'test',
  displayName       : 'Thord',
  description       : 'Circulo de Thord',
  maxDeviceList     : '3'
});

circle.registrar();

var circle = new DeviceGroup({
  deviceGroupID     : '3',  
  accountID         : 'test',
  displayName       : 'El Duende Naranja',
  description       : 'Circulo de El Duende Naranja',
  maxDeviceList     : '5'
});

circle.modificar();

//circle.obtenerTodos();
//circle.obtener(2);
//circle.eliminar(2);
