# How to make a custom theme
## Making a new stylesheet
Make a copy of `chem.css` or `chemRound.css` depending on what kind of button borders you want
## Stylesheet variables
Inside either style sheet inside `:root {}` there are many different css "variables" these variables are mainly colors that affect most of the elements in game editing these will change the colors for entire areas of the game.
## Finding what you need
I've nicely commented out each section of styling based on area or what it affects (Note: the styling sections are in order of the tabs in game)
## Adding your custom theme to the game
### Adding the source
Once you've finished your theme head on over to `main.js` and find near the bottom the comment that says `//Theme stuff`<br>
The variable that needs to be edited here is `let themeSrcs = []` to add your sheet simply a new comma at the end of the list and type in this format `'filename'` remember the name is case sensitive 
### Setting the html
Now its time to add a button for your theme simply copy this<br>`<button id="theme3" style="margin-bottom: 10px">Theme Name by Creator</button>`<br>
Don't forget to change the id to be one more than the last button ex: last button id="theme4" yours would be id="theme5"
### Opening a pull request
Pretty simple open a new pr and I'll approve it if it has no problems or issues
### Keeping the theme up to date
Since this game is still in pretty heavy development you will need to update your theme from time to time by copying in new style changes and editing them as you please.
## Hopefully this helps and have fun creating
