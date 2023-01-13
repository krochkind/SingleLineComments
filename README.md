# Single-Line Centered Comments

I was working on some CSS I wanted to separate my different sections with comments – but instead of a comment like this:
```
// Comment
```
I wanted something like this:
```
//---- Buttons ----//
```

The problem I was running into, was calculating the number of dashes when the length of the text was different, so that the comments were always the same length and always centered.  Something like this:
```
//----- Buttons -----//
//---- Hyperlinks ---//
```

After about 5 minutes of Googling to see if someone had a site to do that, I couldn’t find one so I figured I’d build my own.

Then I decided to make it more robust, so I added the ability to give comments headers and footers:
```
//-------------------//
//----- Buttons -----//
//-------------------//
```
as well as Python-style comments:
```
#######################
### Python Comments ###
#######################
```

If you want to see it in action, you can head over to my website at <a href="https://rochkind.com/SingleLineComments/" target="_blank">https://rochkind.com/SingleLineComments/</a>
