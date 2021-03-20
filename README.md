## Password Generator

As part of the Coding Bootcamp, I was given a preset HTML and CSS page and it was my task to create the javascript element for a password generator. It was my responsibility to ensure that the necessary criteria from the user story was met. This included:

- Creating multiple arrays to reflect the necessary characters needed.
- Creating prompts and confirms to ask the user how long they want the password to be and what characters they wish to use within it, ensuring they stick within the given parameters (No less than 8 characters and no more than 128 characters)
- Creating the random generator to randomly select characters from the users choices.
- Return the result of the generator back to the given box on the web page.
- Ensuring the function works correctly without any errors showing in the console log.

Whilst the password generator works functionally without any errors, I have spotted some potential flaws with the generator. For instance, if the user selects an 8 character password but wants to use all the options given (ie uppercase, lowercase, numbers and specials), there is a small chance that the user may not get one of selected characters.

I understand this comes down to statistics and the way I have set up the combined array, so for future reference, I'll be able to research different methods on how I could resolve this issue.

## Link to Deployed Application

https://leefarnell.github.io/Password_Generator/

## Screenshots

![Screenshot1](Screenshots/PasswordGen%20Screenshot1.png)
![Screenshot2](Screenshots/PasswordGen%20Screenshot2.png)
![Screenshot3](Screenshots/PasswordGen%20Screenshot3.png)
![Screenshot4](Screenshots/PasswordGen%20Screenshot4.png)
