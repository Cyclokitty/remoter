# Notes

This app controls a bluetoooth remote control car made with an Arduino Nano 168.

Used continuous rotation servos because I had them. 

## Crazy stuff (& less crazy stuff too)

1. I had to comment out and @Override in the RCTBluetoothSerialPackage.java in node_modules 'react-native-bluetooth-serial' folder
    * line 23 of RCTBluetoothSerialPackage.java that is found by going to the folders:
        * android/src/main/java/com/rusel/RCTBluetoothSerial/RCTBluetoothSerialPackage.java
    
1. Set screen orientation to Portrait. Should make the layout look decent in Landscape too.

## Things To Do

1. Make the layout look nicer.
1. Split up the code.
1. MOR REUSABLE COMPONENTS
1. Use Lego to make a case to contain all of the electronic components (stuf falls off the chassis).
1. I'd like to add LED lights. Soon...