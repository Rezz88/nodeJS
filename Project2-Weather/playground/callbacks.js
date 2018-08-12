var getUser = (id, callback) => {
  var user = {
    id: id,
    name: "Rezz"
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(99, user => {
  console.log(user);
});
