import http from "http";
import express from "express";
import SocketIO from "socket.io";


//프론트 업데이트로 서버가 재시작 되는걸 막으려면 nodemon.json에 가서 "ignoore":"무시할 파일의 경로"추가하기

const app = express();


/* pug 기준으로 짠 html. 추후 react native로 대체 예정
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));
*/


// http 서버와 societ.io 서버를 동시에 돌릴예정
const httpServer = http.createServer(app);
// http 서버가 동작하면 동작하는 http 서버 위에 socket.io를 동작시킴
const ioServer = SocketIO(httpServer);


ioServer.on("connection", (socket) => {
    console.log(socket)
    socket.on("join_Room", (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).broadcast.emit("user-connected", userId);
        socket.on('disconnect', () => {
            socket.to(roomId, userId).broadcast.emit("user_disconnected", userId);
        });
    });
});


const handleListen = () => console.log("Server is listening on http://localhost:3000");
httpServer.listen(3000, handleListen);