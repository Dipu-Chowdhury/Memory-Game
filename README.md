# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Dipu S. Chowdhury

Time spent: 5 hours spent in total

Link to project: https://glitch.com/edit/#!/dipu-memory-game 

## Required Functionality

The following **required** functionality is complete:

* [✓] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [✓] "Start" button toggles between "Start" and "Stop" when clicked. 
* [✓] Game buttons each light up and play a sound when clicked. 
* [✓] Computer plays back sequence of clues including sound and visual cue for each button
* [✓] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [✓] User wins the game after guessing a complete pattern
* [✓] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [✓] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [✓] More than 4 functional game buttons
* [✓] Playback speeds up on each turn
* [✓] Computer picks a different pattern each time the game is played
* [✓] Player only loses after 3 mistakes (instead of on the first mistake)
* [✓] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
http://g.recordit.co/Ckc7ewwdT1.gif
https://recordit.co/Nun55bNBbR   


## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[YOUR ANSWER HERE]https://freefrontend.com/css-background-patterns/   |   Template for outer background


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

	  A challenge I encountered throughout this submission was attention to creativity. Because I am a person who values uniqueness
and individuality,I wanted to challenge myself to create something new. I wanted to use this opportunity to learn as many new things
as I can while also having fun. This led me into a long brainstorming session.
    I decided to correlate the memory game with the user’s old childhood shows. I planned to make each button one of my favorite characters
from past shows and create a project that was visually and conceptually appealing. This was my greatest challenge because I had no prior
experience with html or css,making it a difficult task for me to accomplish.
    I decided to plan out exactly what I wanted my project to look like. I broke it down into smaller steps that allowed me to properly
work towards the larger picture. First I picked out images of my favorite cartoon characters. Then, I color coordinated
the buttons with each image and placed it on top. I did this by performing an analysis on different sets of codes online and how they
integrated images onto a project.
    In the following step,I added a background to the project. I looked over different websites for programming Q&A to learn how to create
a css function that would implement different sets of shapes and colors in the back of the project. I went online to find and study code
provided for different templates to combine the different features into my own code. To make my background function more appealing, I also
experimented with the margin functions in my provided css file and added  different margins to allow my project to neatly fit within the window.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    This submission was an interesting and stimulating way to introduce me to web development. After completing this submission,
I have two topics that I would like to explore more in depth.
    The first topic is APIs. How can websites be developed to use direct information from other websites online? I would like to
learn more about API’s and how they are efficiently used to provide better services for the users. There are lots of great APIs
provided to developers on the internet so understanding how to implement them will elevate my comprehension and strengthen my
skill set.
    The second topic I would like to investigate is website databases. How are developers able to store data into the cloud from
information the user provides on their website? Additionally, I want to learn how developers are able to then retrieve that data
to display it for the user. I believe this can be helpful because in a challenge like scenario such as this project, there can be
a way for all the users to get a score for their answers. They can also potentially go on “streaks” for getting perfect scores
several times in the challenge. Their score can be stored in a database leaderboard for other users to view and compete against.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions,
adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  To further improve my project, I would like to implement different levels of difficulty. I could change both the length of the secret
code and increase the speed even more (specifically the decreaseHoldTime variable would change to 50 from 25, meaning that the provided
clueHoldTime would go from 1000, to 975, to 950 depending on the level), if the user wished for a greater challenge. I would allow for
the difficulty to be changed by adding three extra buttons on top of the “Start” button. They would be labeled the following: normal,
hard, WARNING:Insane. The user would be first prompted to click a difficulty button before clicking the start button and would be allowed
to change it before the challenge begins.
    Another improvement I would like to implement is adding animations to the button images. Considering that this memory game is also
meant to unlock childhood memories, whenever the buttons are clicked on, animations would offer a nice touch. Images would then change
back once they stop getting clicked on.
    The last improvement that I would make is the reorganization of each of the buttons after each part of the pattern has been shown.
This can be done using the math.random function. Once the pattern has been displayed to the user, I would hide all the buttons and
rearrange the button ids and characters using the Math.random function. This would make the game exponentially more difficult. Currently,
only one new button arrangement is added after every turn whereas the user now also needs to memorize the arrangements of the specific
characters and sounds. They will not be able to complete the challenge by memorizing the position alone. 



## License

    Copyright Dipu Chowdhury

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    