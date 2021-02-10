let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = (key) => {
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  } else if(key === 'w') {
    connection.write("Move: up")
  } else if(key === 'a') {
    connection.write("Move: left")
  } else if(key === 's') {
    connection.write("Move: down")
  } else if(key === 'd') {
    connection.write("Move: right")
  } else if(key === 'y') {
    connection.write("Say: GOO")
  }
}

module.exports = { setupInput }