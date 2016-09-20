# automation testing

here's how to get your system set up for this:

1. install JDK
2. install NodeJS
3. run new cmd window
4. in cmd window type `npm list`
 1. if the result is something like *"Error: Enoent, stat `C:\Users\SomeUserName\AppData\Roaming\npm`* -> then create folder named 'npm' on the same path
 2. type `npm list` in cmd window again -> result should be `-(empty)`
5. do `npm install -g webdriver-manager` in cmd window
6. run `webdriver-manager update`
7. do `npm install -g nightwatch`