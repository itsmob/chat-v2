# Chat-v2

Technologies:

- reactjs
- nodejs
- expressjs
- socketio

## Run the project locally

Open a command terminal and run the following command:

- git clone https://github.com/itsmob/chat-v2.git

### Back-end application

After you clone the repository run the following commands:

- cd backend
- npm i
- npm run dev

After that you should be able to to connecto to your server at [http://localhost:3000](http://localhost:3000)

### Front-end application

You need to add a .env file to the front-end directory with the next variable inside the file:

VITE_BACKEND_URI=http://localhost:3000

Then in order to run the front-end application you first should be running the back-end application if so, then open a new command terminal, navigate to the front-end directory and run the following commands:

- npm i
- npm run dev

After that you should be able to visit the local live version of the project at [http://localhost:5173](http://localhost:5173)
