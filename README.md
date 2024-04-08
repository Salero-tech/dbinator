# Alternativ Amix UI for dB meters 

Key futures:
 - doesn't crash when network connection is lost
 - red indicater if connection is lost over 30s
 - time since last update in 100ms steps shown
 - video game damage effect when reaching limit
 - works on **all** screen sizes in landscape
 - looks and feels the same as original interface
 - runs on a small ESP32

# Hardware
 - WT32-ETH01

# Compile
1. compile Svelte UI
2. copy **dist** output into PlatformIO data folder
3. upload filesystem image
4. Upload Code with PlatformIO
5. got to [dbincator.local](http://dbintor.local/)
6. double click into left top corner and set ip of Amix dbmeter

# Browser compability
|works|architecture|
|--|--|
|✅ |Firefox|
|✅ |Safari|

(Brave works but you get lag on **all** connected Clients)

# Pictures
## normal
![normal view](pictures/normal.png)

## no connection
![no connection view](pictures/no%20connection.png)

# reached limit
![damage effect](pictures/damage.png)

# Docker version (old)
[github.com/Salero-tech/dbMeter/tree/docker](https://github.com/Salero-tech/dbMeter/tree/docker)
