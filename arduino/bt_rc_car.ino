// ignore the red squiggles in the #include below. This is just a VS Code thing. Works fine in Arduino IDE

#include <Servo.h>

// right hand side motor
Servo motorR;
// left hand side motor
Servo motorL;

char data;


void setup() {
  // right hand motor to pin 10
  motorR.attach(10);
  // left hand motor to pin 9
  motorL.attach(9);

  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    data = Serial.read();

    switch(data) {
      case 'F':
        rollForward();
        break;
      case 'B':
        rollBackward();
        break;
      case 'R':
        rollRight();
        break;
      case 'L':
        rollLeft();
        break;
      case 'S':
        stopMotion();
        break;
      default:
        stopMotion();
    }
  }  
}

void rollForward() {
  motorR.write(0);
  motorL.write(180);
}

void rollBackward() {
  motorR.write(180);
  motorL.write(0);
}

void rollLeft() {
  motorR.write(0);
  motorL.write(90);
}

void rollRight() {
  motorR.write(90);
  motorL.write(180);
}

void stopMotion() {
  motorR.write(90);
  motorL.write(90);
}

