const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Dockerized Node server running on port 3000");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

/* PS D:\Web Development\DockerTutorial> docker build -t node-app:1.0 . 
   
PS D:\Web Development\DockerTutorial> docker images
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE       
node-app     1.0       ee03ac2029f6   46 seconds ago   160MB      
PS D:\Web Development\DockerTutorial> docker run -d -p 3000:3000 node-app:1.0
be2368ac102ab222fd76d77cf352e5f36ab3cbc5d677ff81b23452915925afd4  
PS D:\Web Development\DockerTutorial> docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                    NAMES
be2368ac102a   node-app:1.0   "docker-entrypoint.s…"   42 seconds ago   Up 41 seconds   0.0.0.0:3000->3000/tcp   gallant_dewdney
PS D:\Web Development\DockerTutorial> docker logs be2368ac102a
Server running on port 3000
PS D:\Web Development\DockerTutorial> docker stop be2368ac102a
be2368ac102a
PS D:\Web Development\DockerTutorial> docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES  
PS D:\Web Development\DockerTutorial> */