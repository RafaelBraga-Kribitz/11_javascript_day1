# JavaScript Day 1 - Exercises ToDo List

## Warm-up Questions

- [x] Discuss the following questions:
  - [x] Where does JavaScript fit in today's web development world?
    - R: JavaScript is a crucial part of modern web development, used for creating interactive and dynamic web applications. It's essential for both front-end and back-end development.

  - [x] In which industries is JavaScript implemented?
    - R: JavaScript is used across various industries including web development, mobile app development, game development, IoT, artificial intelligence, and data visualization.

  - [x] What is the main role of JavaScript in Front-End development?
    - R: In front-end development, JavaScript is primarily used to create interactive user interfaces, handle user events, manipulate the DOM, and communicate with back-end services.

  - [x] Is JavaScript a programming or scripting language?
    - R: JavaScript is both a programming and scripting language. It can be used for complex programming tasks and also as a scripting language for web browsers.

  - [x] Which tags are used to enclose JavaScript code?
    - R: JavaScript code is typically enclosed in `<script>` tags in HTML documents.

  - [x] How can you include JavaScript code from another source in HTML documents? Where is it placed in the HTML?
    - R: External JavaScript files can be included using the `<script>` tag with a `src` attribute. It's often placed just before the closing `</body>` tag for better performance.

  - [x] How can you create comments in JavaScript? (Single-line and multi-line)
    - R: Single-line comments use //. Multi-line comments are enclosed in /**/.

  - [x] What is the JavaScript string concatenation operator?
    - R: The string concatenation operator in JavaScript is the plus sign (+).

  - [x] What characters are used to define a JavaScript variable name?
    - R: JavaScript variable names can include letters, digits, underscores, and dollar signs. They must start with a letter, underscore, or dollar sign.

  - [x] What types of data does JavaScript support?
    - R: JavaScript supports several data types including Number, String, Boolean, Object, Array, Null, and Undefined.

  - [x] What is the difference between a variable and an array?
    - R: A variable holds a single value, while an array is a special type of object that can hold multiple values in an ordered list.

## EX00 - Basic Exercises

- [x] **Exercise 1: Internal JavaScript in HTML**
  - [x] Print "Hello from the Console" in the browser console.
  - [x] Display "Hello from the Browser" on the web page.

- [x] **Exercise 2: External JavaScript File**
  - [x] Create a variable `name` and assign your name.
  - [x] Update the console log to display "Hi, my name is [Your Name]".
  - [x] Create a variable `age` and set it to your age.
  - [x] Update the console log to display "Hi, my name is [Your Name] and I am [Your Age] years old."

- [x] **Exercise 3: Array of Players**
  - [x] Create an array called `players` with the names: Martin, Thomas, Peter, Mathias, and Niki.
  - [x] Output the third player in the console as: "The most valuable player of the match is [Third Player Name]".

## EX01 - Intermediate Exercises

- [x] **Exercise 1: Sort an Array Alphabetically**
  - [x] Sort the following values alphabetically: Tesla, Audi, Renault, Volvo, Mazda, Fiat, and Ferrari.

- [x] **Exercise 2: Array Operations**
  - [x] First Array: Fruits (`'apple', 'banana', 'kiwi', 'mango', 'pear'`)
    - [x] Output the array with the following modifications:
      - [x] Add `'orange'` to the array.
      - [x] Remove `'apple'` from the array.
      - [x] Replace `'pear'` with `'strawberry'`.
  - [x] Second Array: Animals (`'monkey', 'horse', 'dog', 'elephant', 'giraffe'`)
    - [x] Output the array with the following modifications:
      - [x] Remove `'monkey'` from the array.
      - [x] Add `'cat'` to the beginning of the array.
      - [x] Replace `'giraffe'` with `'tiger'`.
    - [x] Sort the array in reverse alphabetical order and display it.

- [x] **Exercise 3: String Splitting**
  - [ ] Split the following string into individual fruits and display each one on a separate line:
    `"mango/cherries/kiwi/grapes/pear/peach/orange/lemon"`

## EX02 - Advanced Exercises

- [x] **Exercise 1: Arithmetic Operations**
  - [x] Declare and sum the following variables:
    - [x] `let a = 7;`
    - [x] `let b = 14;`
    - [x] `let c = "21";`
    - [x] `let d = '36';`
    - [x] `let e = 42;`
  - [x] Multiply the following variables:
    - [x] `let f = '1';`
    - [x] `let g = 15;`
    - [x] `let h = 8;`
    - [x] `let i = "1";`
  - [x] Divide the sum by the product and print the result in the web browser.

- [x] **Exercise 2: Array Manipulation**
  - [x] Declare an array `people` with the values: Greg, Mary, Devon, James.
  - [ ] Perform the following operations:
    - [ ] Remove "Greg" from the array.
    - [ ] Add "Matt" to the front of the array.
    - [ ] Remove "James" from the array.
    - [ ] Add your name to the end of the array.
    - [ ] Make a copy of the array without "Mary" or "Matt".
    - [ ] Find the index of "Mary" and "Foo" using `indexOf`.
    - [ ] Redefine the array and use `splice` to remove "Devon" and add "Elizabeth" and "Anna".

- [ ] **Exercise 3: Multidimensional Array**
  - [ ] From the following array:  
    `[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3]]`
  - [ ] Display the numbers: 11, 25, 17, 27, and 0 in the console.

## Challenge

- [ ] **Exercise 1: String Manipulation**
  - [ ] Structure the following sentence:
    `"Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its$HTML$tag...."`
  - [ ] The result should remove the `$` symbols and format the sentence correctly.
