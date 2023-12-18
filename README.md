# passgen - a password generator
## Background

A password generator is to be developed to allow employees to generate strong passwords.

This password generator is a work in progress and may change.

## User Story

```
As an Employee I need to be able to generate strong passwords
so that I can minimise the risk of brute force attacks. 
```

## Wireframe

A wire frame was provided of the password generator. The styling was not to be extended 
as the focus was on developing the javascript logic to generate strong passwords.

![05-javascript-challenge-demo.png](assets%2Fimages%2F05-javascript-challenge-demo.png)


## Acceptance Criteria

Follow the instructions:

### Instructions

1. Create a new GitHub repositories and name it `pass-gen`.

2. Clone this repository to your computer.

3. * Generate a password when the button is clicked
   * Present a series of prompts for password criteria
     * Length of password
       * At least 8 characters but no more than 128.
     * Character types
       * Lowercase
       * Uppercase
       * Numeric
       * Special characters ($@%&*, etc.)
   * Code should validate for each input and at least one character type should be selected
   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

## Future extensions

1. Add unit tests covering the validation rules.
2. Remove the prompts and add modal window allowing the user to enter all options.
3. Update the PassGenerator class to edit the option values. 

## Deliverable:

Follow the link to view the passgen landing page:

[https://pine-box.github.io/passgen/](https://pine-box.github.io/passgen/)

![Passgen Landing Page](https://github.com/Pine-Box/passgen/blob/main/assets/images/05-javascript-challenge-demo.png)