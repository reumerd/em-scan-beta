# em-scan-server

a [Sails](http://sailsjs.org) application

*Instructions*

**Setup using node.js on your machine**

1. Install node.js on your local machine
2. Download this git repository on your machine
3. Change to the root of the git repository
4. Run "npm install ."
5. Run "sudo sails lift"
6. The EM server API is now accesible on http://localhost/answers

**Setup using docker on your machine**

1. Install Docker
2. Download this git repository on your machine
3. Open shell 
3. Change to the root of the git repository
4. Run the following line "docker build -t em-scan-server:latest --no-cache ."
5. Run the following line "docker run -p 80:80 -dt -v "DataDrrPath on your Machine":/var/db --rm --name em-scan-server em-scan-server"
6. The EM server API is now accesible on http://localhost/answers



