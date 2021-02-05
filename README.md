Assignment 1: One-Capture Checkers
===
Description
---
This is a two player checkers game with king promotions and single capture per turn.
![snap1.png](https://github.com/wtt102/01-ghd3/blob/main/snap1.png)
![snap2.png](https://github.com/wtt102/01-ghd3/blob/main/snap2.png)


Rules
---
* Each player get's one turn
* Green goes first
* Configurable as TURN global variable at top of script.js
* Pieces that make it to the opposite end become kings
* Player to capture all other pieces wins
* Score is displayed at bottom 
* First number is P1 (top player), second is P2 (bottom player)




Design/Technical Achievements/Notes
---
* Functionality related
  * One piece captures
  * Clicking on a piece will hold it with the mouse
  * Pieces are removed from board upon being captured
  * Pieces move as checker pieces do
  * King promotions exist
  * Player score is shown at bottom and winner will be displayed
  * Pieces are stored on an 8x8 array. The piece held by the cursor is stored as a temporary variable. When the piece is placed, the board array is updated.
* Stylistic
  * Checkerboard grid using svg
  * Polygons for lighting/design effect
  * Colors were selected from https://www.color-hex.com/
* Animation related
  * Hovering a MOVABLE piece (if it’s your turn), leads to a highlight animation. Moving the mouse away means the highlight will fade away
  * Line tracer follows mouse and shows initial position of piece picked up. When a piece is placed in a new square, the line shows the path between old and new locations.
  * Color of piece changes after becoming a king
  * Opacity of piece changes when piece is held

Assignment Requirement Implementations
---
* Circles: pieces
* Rects: checkerboard
* Line: move tracer
* Polygon: Design shadows
