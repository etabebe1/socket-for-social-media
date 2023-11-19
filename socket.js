const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

// function to create object of userID and socketID while pushing the object to the user Array
function addUser(userID, socketID) {
  console.log(userID, socketID);
}

// function to remove user when user disconnects socket
function removeUser(socketID) {}

io.on("connection", (socket) => {
  //TODO: when user connects
  console.log("User has Connected \u{1F680}");
  //take userID and socketID form user
  socket.on("addUser", (userID) => {
    console.log(userID, socket.id);
  });

  //TODO: when user disconnects
});
