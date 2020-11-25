// Este estado representa el estado de nuestra aplicación y será guardado
// y restaurado por onResume () y onPause ()
var appState = {
    takingPicture: true,
    imageUri: ""
};

var APP_STORAGE_KEY = "exampleAppState";
//tx.executeSql('DROP TABLE IF EXISTS televentMant');
//tx.executeSql('CREATE TABLE IF NOT EXISTS televentMant ( id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, nombre_cliente VARCHAR(100) NOT NULL'+
//', 1_operario float, 2_operario float, enero VARCHAR(100), febrero VARCHAR(100), '+
//'marzo VARCHAR(100), abril VARCHAR(100), mayo VARCHAR(100), junio VARCHAR(100), '+
//'julio VARCHAR(100), agosto VARCHAR(100), septiembre VARCHAR(100), octubre VARCHAR(100), '+
//'noviembre VARCHAR(100), diciembre VARCHAR(100))'); 
// tx.executeSql('INSERT INTO LOGS  VALUES (1, "fbfffar", 3.5, 6.4, "", "", "", "", "", "", "", "", "", "", "", "")'); 

var db = window.openDatabase('mydb', '1.0', 'Test DB', 10 * 1024 * 1024); 
  db.transaction(function (tx) { 
 //tx.executeSql('DROP TABLE IF EXISTS televent');
 //tx.executeSql('CREATE TABLE IF NOT EXISTS televent ( id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, nombre_cliente VARCHAR(100) NOT NULL'+
 //', 1_operario float, 2_operario float, enero VARCHAR(100), febrero VARCHAR(100), '+
 //'marzo VARCHAR(100), abril VARCHAR(100), mayo VARCHAR(100), junio VARCHAR(100), '+
 //'julio VARCHAR(100), agosto VARCHAR(100), septiembre VARCHAR(100), octubre VARCHAR(100), '+
 //'noviembre VARCHAR(100), diciembre VARCHAR(100))'); 
  //tx.executeSql('INSERT INTO televent VALUES (1, "fbfffar", 3.5, 6.4, "", "", "", "", "", "", "", "", "", "", "", "")'); 
    tx.executeSql('DROP TABLE IF EXISTS mantenimientos');
    tx.executeSql('CREATE TABLE IF NOT EXISTS mantenimientos (codigo_mantenimiento INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,'+
    ' codigo_cliente INT NOT NULL, FOREIGN KEY (codigo_cliente) REFERENCES cliente (codigo_cliente))'); 
    tx.executeSql('INSERT INTO mantenimientos VALUES (1, 6)'); 
    tx.executeSql('INSERT INTO mantenimientos VALUES (2, 4)'); 



    tx.executeSql('DROP TABLE IF EXISTS cliente');
    tx.executeSql('CREATE TABLE IF NOT EXISTS cliente (codigo_cliente INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,'+
    ' nombre_cliente VARCHAR(50) NOT NULL, nombre_contacto VARCHAR(30) NOT NULL, apellido_contacto VARCHAR(30) NOT NULL,'+
    ' telefono VARCHAR(15) NOT NULL, movil VARCHAR(15) NOT NULL, fax VARCHAR(15) NOT NULL, linea_direccion1 VARCHAR(50) NOT NULL,'+
    ' linea_direccion2 VARCHAR(50) NOT NULL, ciudad VARCHAR(50) NOT NULL, region VARCHAR(50) NOT NULL, pais VARCHAR(50) NOT NULL,'+
    ' codigo_postal VARCHAR(10) NOT NULL, codigo_empleado_rep_ventas INT(11), limite_credito DECIMAL(15,2) NOT NULL,'+
    ' FOREIGN KEY (codigo_empleado_rep_ventas) REFERENCES empleado (codigo_empleado))'); 
    tx.executeSql('INSERT INTO cliente VALUES (1, "qqddq", "5.0", "2.7", "DD", "ww", "ww", "gg", "qq", "SS", "rr", "PP", "CP", 1, 2.4)'); 
    
     tx.executeSql('DROP TABLE IF EXISTS pedido_mantenimiento');
    tx.executeSql('CREATE TABLE IF NOT EXISTS pedido_mantenimiento (codigo_pedido INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,'+
    ' codigo_mantenimiento INT(11) NOT NULL, fecha_pedido DATE NOT NULL,  fecha_esperada DATE NOT NULL,  fecha_entrega DATE NOT NULL,'+
    ' estado VARCHAR(15) NOT NULL, comentarios TEXT(250) NOT NULL, FOREIGN KEY (mantenimientos) REFERENCES empleado (codigo_mantenimiento))'); 
    tx.executeSql('INSERT INTO pedido_mantenimiento VALUES (1, "qq", "7.5", "2.7", "345", "cc", "ccc")'); 
 


    tx.executeSql('DROP TABLE IF EXISTS detalle_mantenimiento');
    tx.executeSql('CREATE TABLE IF NOT EXISTS detalle_mantenimiento (codigo_pedido INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,'+
    ' codigo_producto VARCHAR(15) NOT NULL, numero_operarios INT(11) NOT NULL, tiempo_mantenimiento TIME NOT NULL,'+
    ' cantidad INT(11) NOT NULL, precio_unidad DECIMAL(15.2) NOT NULL,'+
    ' FOREIGN KEY (codigo_pedido) REFERENCES pedido_mantenimiento (codigo_pedido), FOREIGN KEY (codigo_producto) REFERENCES producto_mantenimiento (codigo_producto))'); 
    tx.executeSql('INSERT INTO detalle_mantenimiento VALUES (1, "qFq", 7.9, 6.7, 2, 2.5)'); 
 

    tx.executeSql('DROP TABLE IF EXISTS producto_mantenimiento');
    tx.executeSql('CREATE TABLE IF NOT EXISTS producto_mantenimiento (codigo_producto VARCHAR(15) PRIMARY KEY,'+
    ' nombre VARCHAR(75) NOT NULL, gama VARCHAR(50) NOT NULL, dimensiones VARCHAR(25) NOT NULL, proveedor VARCHAR(25) NOT NULL,'+
    ' descripcion VARCHAR(75) NOT NULL, cantidad_en_stock SMALLINT(6) NOT NULL, precio_venta DECIMAL(15.2) NOT NULL, precio_proveedor DECIMAL(15.2) NOT NULL)'); 
    tx.executeSql('INSERT INTO producto_mantenimiento VALUES (1, "qCddbb", "ngs", 2.7, "dd", "ddff", "sss", "qq", "33")'); 
 
    tx.executeSql('DROP TABLE IF EXISTS gama');
    tx.executeSql('CREATE TABLE IF NOT EXISTS gama (gama VARCHAR(15) PRIMARY KEY,'+
    ' descripcion_texto VARCHAR(100) NOT NULL, descripcion_html FLOAT NOT NULL, imagen FLOAT NOT NULL)'); 
    tx.executeSql('INSERT INTO gama VALUES (1, "qqq", 7.9, 2.7)'); 


    tx.executeSql('DROP TABLE IF EXISTS empleado');
    tx.executeSql('CREATE TABLE IF NOT EXISTS empleado (codigo_empleado INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,'+
    ' nombre VARCHAR(50) NOT NULL, apellido_1 VARCHAR(50) NOT NULL, apellido_2 VARCHAR(50) NOT NULL, movil VARCHAR(12) NOT NULL,'+
    ' email VARCHAR(100) NOT NULL, puesto VARCHAR(50) NOT NULL)'); 
    tx.executeSql('INSERT INTO empleado VALUES (1, "qffqq", 7.9, 2.7, 3, "www", "sss")'); 


    tx.executeSql('DROP TABLE IF EXISTS pago');
    tx.executeSql('CREATE TABLE IF NOT EXISTS pago (codigo_cliente INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,'+
    ' forma_pago VARCHAR(40) NOT NULL, id_transaccion VARCHAR(40) NOT NULL, fecha_pago DATE NOT NULL, total DECIMAL(15,2) NOT NULL)'); 
    tx.executeSql('INSERT INTO pago VALUES (1, "qggq", 7.9, 2.7, "dd")'); 
  


    
    tx.executeSql('DROP TABLE IF EXISTS televent2');
    tx.executeSql('CREATE TABLE IF NOT EXISTS televent2 (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,'+
    ' nombre_cliente VARCHAR(100) NOT NULL, operario_1 FLOAT NOT NULL, operario_2 FLOAT NOT NULL)'); 
    tx.executeSql('INSERT INTO televent2 VALUES (1, "qqq", 7.9, 2.7)'); 
    tx.executeSql('INSERT INTO televent2 VALUES (2, "hhh", 7.8, 4.2)'); 
    // +
    // ' telefono VARCHAR(30) NOT NULL, movil VARCHAR(30) NOT NULL, fax VARCHAR(30) NOT NULL, linea_direccion1 VARCHAR(30) NOT NULL,'+
    // ' linea_direccion2 VARCHAR(30) NOT NULL
});
 var msg;

 consultaSQL = (obj) => {// FUNCIÓN GENERAL
    return new Promise( ( resolve, reject ) => {
        db.transaction(function (tx) { 
            tx.executeSql(obj, [], 
            (tx, results) => { 
                resolve( results );
                console.log("OK " + results);

            },
            (tx, error) => {
                reject( error );
                console.log("error" + error);

            }
            );

    
         }); 
     /*   let xhr = new XMLHttpRequest();
        xhr.open( obj.method || `GET`, obj.url );
        if ( obj.headers ) {
            Object.keys( obj.headers ).forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key]);
            });
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve( xhr.response );
             } else {
                reject( xhr.statusText );
            }
         milisegundos(`final request`);
        };
        xhr.onerror = () => reject( xhr.statusText );
        xhr.send( obj.body );*/
      });
};
var app = {
    initialize: function() {


        this.bindEvents();
    },
    bindEvents: function() {
        // Here we register our callbacks for the lifecycle events we care about
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause', this.onPause, false);
        document.addEventListener('resume', this.onResume, false);
    },


    onDeviceReady: function() {
        consultaSQL('SELECT * FROM cliente')
        .then(results => {
           
            let busquedas18 = JSON.stringify(results.rows);
            console.log("dsd "+ busquedas18);
            let f = results.rows.item(0);
            msg = "<p>";
            for (var key in f) {
                 msg += key +" | "
                //console.log(key);
               }
            msg += "</p>"; 
            msg += "<p>";
            for (var key in f) {
                msg += f[key] + " | ";
            }
            msg += "</p>";
            document.querySelector('#status').innerHTML +=  msg; 

         })
        .catch(error => {msg = "<p>error: " +error.code+"</p>"; 
        document.querySelector('#status').innerHTML =  msg; });

        document.getElementById("take-button").addEventListener("click", 
        function() {
            db.transaction(function (tx) { 
                tx.executeSql('SELECT * FROM televent2', [], 
                function (tx, results) { 
                    var len = results.rows.length; 
                   msg = "<p>len: " + len + "</p>"; 
                   document.querySelector('#status').innerHTML =  msg; 
                   console.log("sss " + Object.keys(results));
                   for (i = 0; i < len+1; i++) { 
                    let f = results.rows.item(i);
                    msg = "<p>";
                    for (var key in f) {
                        // msg += key +" | "
                        //console.log(key);
                        msg += f[key] + " | ";
                       }
                    msg += "</p>"; 
                    document.querySelector('#status').innerHTML +=  msg; 
                     }

                }, null);
                console.log("hhhshasha" + tx.toString);

        
             }); 
        });
            document.getElementById("take-picture-button").addEventListener("click", function() {
                //  Debido a que el método del complemento de la cámara inicia 
              //una actividad externa, existe la posibilidad de que nuestra 
              //aplicación se cancele antes de que se realicen las 
              //devoluciones de llamada correctas o incorrectas. 
              //Vea onPause () y onResume () donde guardamos y 
              //restauramos nuestro estado para manejar este caso  
                appState.takingPicture = true;
          
            navigator.camera.getPicture(cameraSuccessCallback, cameraFailureCallback,
                {
                    quality: 100, 
                    sourceType: Camera.PictureSourceType.CAMERA,
                    destinationType: Camera.DestinationType.FILE_URI,
                    targetWidth: 350,
                    targetHeight: 350,
                    saveToPhotoAlbum : true 
                }
            );
        });
    },
    onPause: function() {
        //Aquí, verificamos si estamos en medio de tomar una foto. Si es 
        //así, queremos guardar nuestro estado para poder recuperar 
        //correctamente el resultado del complemento en onResume (). 
        //También guardamos si ya hemos recuperado una imagen URI

        if(appState.takingPicture || appState.imageUri) {
            window.localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(appState));
            
        }
    },
    onResume: function(event) {
       // Aquí comprobamos el estado almacenado y lo restauramos si es 
       // necesario. En su aplicación, depende de usted hacer un 
       // seguimiento de dónde provienen los resultados de los 
       // complementos pendientes (es decir, qué parte de su código 
       // hizo la llamada) y qué argumentos proporcionó al complemento, 
       // si corresponde.
        var storedState = window.localStorage.getItem(APP_STORAGE_KEY);

        if(storedState) {
            appState = JSON.parse(storedState);
             }

            // Compruebe si necesitamos restaurar una imagen que tomamos
        if(!appState.takingPicture && appState.imageUri) {
            document.getElementById("get-picture-result").src = appState.imageUri;
        }
        // Ahora podemos verificar si hay un resultado de complemento en el objeto de evento.
        // Esto requiere cordova-android 5.1.0+
        else if(appState.takingPicture && event.pendingResult) {
            //Averigüe si la llamada del complemento fue exitosa y 
            //llame a la devolución de llamada correspondiente. Para el 
            //complemento de la cámara, "OK" significa un resultado exitoso
            // y todos los demás estados significan un error
            if(event.pendingResult.pluginStatus === "OK") {
                // El complemento de la cámara coloca el mismo resultado 
                //en el objeto de reanudación que pasa a la devolución de 
                //llamada exitosa pasada a getPicture (), por lo que podemos
                // pasarlo a la misma devolución de llamada. Otros 
                //complementos pueden devolver algo más. Consulte la 
                //documentación del complemento que esté utilizando para 
                //aprender a interpretar el campo de resultados.
                cameraSuccessCallback(event.pendingResult.result);
            } else {
                cameraFailureCallback(event.pendingResult.result);
            }
        }
    }
}

// Here are the callbacks we pass to getPicture()
function cameraSuccessCallback(imageUri) {
    appState.takingPicture = false;
    appState.imageUri = imageUri;
    document.getElementById("get-picture-result").src = imageUri;
}

function cameraFailureCallback(error) {
    appState.takingPicture = false;
    console.log(error);
}

app.initialize();