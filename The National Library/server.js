const express = require('express');
const cors = require('cors');
const app = express();
const socketio = require('socket.io');

const server = app.listen(8000, () => console.log(`Listening on port: 8000`) );

const io = socketio(server, {cors: true});
app.use(cors());

require('dotenv').config();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

require('./server/config/mongoose.config');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/user.routes')(app);


io.on('connection', socket => {
    socket.on('newMessage', data => {
        socket.broadcast.emit("sendMessageToClient", data);
    });
});



