const io = require("socket.io")(8900, {
  cors: {
    origin: "http://locahost:3000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

io.on("connection", (socket) => {
  
  // taking userID and socketID from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getOnlineUser", users);
  });
  
  console.log("User is connected to socket server \u{1F680}");

  //*⽥⽥⽥⽥⽥⽥⽥⽥⽥⽥ TEST ⽥⽥⽥⽥⽥⽥⽥⽥⽥⽥*//
});
