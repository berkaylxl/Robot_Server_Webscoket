const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

exports.robot_forward = (req, res, next) => {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send('forward');
      }
      console.log(client._eventsCount)
    });
    console.log("ileri");
    res.status(200).json({message:'Forward isteği gönderildi'});
}
exports.robot_forward_stop = (req, res, next) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send('forwardstop');
    }
    console.log(client._eventsCount)
  });
  console.log("dur (ileri)");
  res.status(200).json({message:'Forward Stop isteği gönderildi'});
}

exports.robot_backward = (req, res, next) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send('backward');
    }
    console.log(client._eventsCount)
  });
  console.log("geri");
  res.status(200).json({message:'Backward isteği gönderildi'});
}
exports.robot_backward_stop = (req, res, next) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send('backwardstop');
    }
    console.log(client._eventsCount)
  });
  console.log("dur (geri)");
  res.status(200).json({message:'Backward Stop isteği gönderildi'});
}

exports.robot_turn_right = (req, res, next) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send('turnright');
    }
    console.log(client._eventsCount)
  });
  console.log("sağa");
  res.status(200).json({message:'Turn Right isteği gönderildi'});
}

exports.robot_turn_right_stop = (req, res, next) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send('turnrightstop');
    }
    console.log(client._eventsCount)
  });
  console.log("dur (sağa)");
  res.status(200).json({message:'Turn Right Stop isteği gönderildi'});
}

exports.robot_turn_left = (req, res, next) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send('turnleft');
    }
    console.log(client._eventsCount)
  });
  console.log("sola");
  res.status(200).json({message:'Turn Left isteği gönderildi'});
}
exports.robot_turn_left_stop = (req, res, next) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send('turnleftstop');
    }
    console.log(client._eventsCount)
  });
  console.log("dur (sola)");
  res.status(200).json({message:'Turn Left Sola isteği gönderildi'});
}