var app=require("../app"),debug=require("debug")("serveur:server"),http=require("http"),fs=require("fs"),port=normalizePort(process.env.PORT||"9999");app.set("port",port);var server=http.createServer(app);function normalizePort(e){var r=parseInt(e,10);return isNaN(r)?e:r>=0&&r}function onError(e){if("listen"!==e.syscall)throw e;var r="string"==typeof port?"Pipe "+port:"Port "+port;switch(e.code){case"EACCES":console.error(r+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(r+" is already in use"),process.exit(1);break;default:throw e}}function onListening(){var e=server.address(),r="string"==typeof e?"pipe "+e:"port "+e.port;debug("Listening on "+r)}server.listen(port),server.on("error",onError),server.on("listening",onListening);var io=require("socket.io").listen(server);io.sockets.on("connection",(function(e,r){console.log("un user c'est conneccte")})),module.exports=io;