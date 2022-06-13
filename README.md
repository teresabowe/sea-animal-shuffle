# Sea Animal Shuffle

The Sea Animal Shuffle game site intends to help users develop their logical thinking skills. It is targeted at children from 5+ years of age up to adults. The user must find the correct sequence for the four images presented. The correct sequence has already been chosen by a random computer shuffle.

![Responsive Mockup](/docs/amiresponsive.png)

## Features

### Existing Features

__Header__

- The header shows the name at the top of the page. This name: Sea Animal Shuffle, communicates the purpose to the user.
- The font chosen is Fredoka, a large, rounded style font introducing a fun element to the game.
- The user then sees an instruction on how to play the game. For example, "figure out the sequence by clicking on the images".
- The user can click on the start button to start the game. The game also initialises on the document load. This option allows the user to begin a new game at any time.

![Header](/docs/header.png)

__Image Selection Area__

- The onclick event for image selection is pre-loaded on the document load. The user can click on each image and toggle through the four images of fish, octopus, crab, and seahorse.
- The submit button click event is also pre-loaded on document load. Once the user clicks on the submit button, the image selection is compared against the random computer shuffle. This shuffle is generated by using the Fisher-Yates algorithm.

![image Selection and Submit](/docs/image-selection-and-submit.png)

__Game Results__

- The user image choice is checked to ensure that there is one of each image selected. If not, the user receives an alert to indicate which sea animal is missing.

![Alert-One of each Sea Animal](/docs/one-of-each-sea-animal.png)

- Also, if there are correctly chosen images, the user receives feedback by having a border added around the sea animal. If the selection is correct, the border area is highlighted in green, and the incorrect images highlighted in red.

![Alert-One of each Sea Animal](/docs/some-correct-images.png)

- The user choice is also cloned and presented below the user choice.

![Cloned area below the user choice](/docs/cloned-area.png)

- The game continues as the user selects new image sequences and clicks on the submit button.
- Once the user has selected the correct sequence, the alert will congratulate the user, and the images are highlighted in green.

![Alert-Successful selection](/docs/successful-selection.png)

![Green-border](/docs/successful-selection-green-border.png)

- At this point, the image onclick and submit button click are disabled. The user can click the start button to reload the page to begin a new game.
- The game terminates if the user does not guess the correct sequence within 26 trys.

![After 26 trys](/docs/finish-game.png)

### Features Left to Implement

Add an additional level where the number of images presented to the user is five.

## Testing

Initially, all device testing was simulated on the Developer Tools on Google Chrome Version Version 102.0.5005.63. As each feature of the product was being developed, it was tested on Google Chrome to check that it was functioning correctly and also that the responsiveness was as expected.

### Responsiveness

Further manual testing for responsiveness was completed using Developer Tools on Google Chrome and physical devices. The results are shown below.


| Device                    | Responsive >= 700px | Responsive < 699px | Notes:         |
| :------------             |   :---:             |   :---:            |  :---:         |
| iPhone SE                 |     n/a             |     Yes            | Virtual device |
| iPhone XR                 |     n/a             |     Yes            | Virtual device |
| iPhone 12 Pro             |     n/a             |     Yes            | Virtual device |
| iPhone 13                 |     n/a             |     Yes            | Physical device|
| Surface Duo               |     n/a             |     Yes            | Virtual device |
| Galaxy Fold               |     n/a             |     Yes            | Virtual device |
| Sansung Galaxy A51/71     |     n/a             |     Yes            | Virtual device |
| Pixel 5                   |     n/a             |     Yes            | Virtual device |
| Samsung Galaxy S8+        |     n/a             |     Yes            | Virtual device |
| Samsung Galaxy S20 Ultra  |     n/a             |     Yes            | Virtual device |
| iPad Air                  |     Yes             |     n/a            | Virtual device |
| iPad Mini                 |     Yes             |     n/a            | Virtual device |
| Surface Pro 7             |     Yes             |     n/a            | Virtual device |
| Nest Hub                  |     Yes             |     n/a            | Virtual device |
| Nest Hub Max              |     Yes             |     n/a            | Virtual device |
| Desktop <= 1024           |     Yes             |     n/a            | Physical device|
| Desktop > 1024            |     Yes             |     n/a            | Physical device|

### Browser Compatibility 
Browser testing was completed on the three primary desktop browsers.  The results are shown below.

| Device                                | Intended Appearance | Intended Responsiveness | Notes:         |
| :------------                         |   :---:             |   :---:                 |  :---:         |
| Google Chrome Version 102.0.5005.63   |     Yes             |     Yes                 | Virtual device |
| Microsoft Edge Version 102.0.1245.39  |     Yes             |     Yes                 | Virtual device |
| Firefox Version 101.0.1               |     Yes             |     Yes                 | Virtual device |








