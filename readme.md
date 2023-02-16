Si deseas instalar las dependencias. Basta con que uses : npm i


Para la consigna del pm2 utilice los siguientes comandos para poder ejecutar los procesos

 🔥 pm2 start app.js --name="Cluster" --watch -i 4  

 🔥  pm2 start app.js  --name="Fork" --watch


Por ultimo, para finalizar cada proceso de el pm2 usamos el comando pm2 delete all



En este caso, para poder iniciar el proyecto en cuestion con puerto y modo usariamos el siguiente comando:

🔥node app.js inicio --puerto=(Aca colocas el puerto que quieras) --mode(Selecciona cluster, en el caso de querer usar fork, no agregues nada)





