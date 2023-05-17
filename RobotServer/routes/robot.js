const express =require('express');
const router = express.Router();
const RobotController =require('../controllers/robotController');
//const script = require('../views/script');

//eventEmitter.on('headlampMessage', (message) => {
//    script.handleHeadlampMessage(message);
//  });

router.get('/forward', RobotController.robot_forward);
router.get('/forwardstop', RobotController.robot_forward_stop);

router.get('/backward',RobotController.robot_backward);
router.get('/backwardstop',RobotController.robot_backward_stop);

router.get('/turnleft',RobotController.robot_turn_left);
router.get('/turnleftstop',RobotController.robot_turn_left_stop);

router.get('/turnright',RobotController.robot_turn_right);
router.get('/turnrightstop',RobotController.robot_turn_right_stop);

router.get('/brake',RobotController.robot_brake);
router.get('/brakestop',RobotController.robot_brake_stop);

router.get('/headlamp',RobotController.robot_headlamp);
router.get('/camera',RobotController.robot_camera);

module.exports = router;