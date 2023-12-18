//popup types
var popups = {
    'prompt_popup': 'prompt',
    'confirm_popup': 'confirm'
}

//pop messages
var options = ['Length of password (enter a number between 8 and 128)',
    'Include  uppercase characters?',
    'Include lowercase characters?',
    'Include numeric characters?',
    'Include special characters?'
];


class PassGenerator {
    #length;
    #uppercase;
    #lowercase;
    #numeric;
    #special;
    #upperCasedCharacters;
    #lowerCasedCharacters;
    #numericCharacters;
    #specialCharacters;

    constructor() {
        this.#length = undefined;
        this.#uppercase = undefined;
        this.#lowercase = undefined;
        this.#numeric = undefined;
        this.#special = undefined;
        // Array of uppercase characters to be included in password
        this.#upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
            'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        // Array of lowercase characters to be included in password
        this.#lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z'];

        // Array of numeric characters to be included in password
        this.#numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        // Array of special characters to be included in password
        this.#specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^',
            '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    }


    // Function validate password length
    #validate_password_length(value) {
        var length = Math.floor(parseInt(value));
        if ((isNaN(length)) || (length < 8 || length > 128)) {
            return -1;
        } else
            return length;
    }


    // Function to prompt user for password options - don't like prompts here but its tidier for me atm
    getPasswordOptions(message, popup_type) {
        if (popup_type == popups.prompt_popup) {
            return this.#validate_password_length(prompt(message));
        } else if (popup_type == popups.confirm_popup) {
            return confirm(message);
        } else {
            return undefined
        }
    }

    // Function for getting a random element from an array
    #getRandom() {
        // selected options array
        var selected_options = [];
        if (this.#uppercase == true)
            this.#upperCasedCharacters.forEach((element) => selected_options.push(element));
        if (this.#lowercase == true)
            this.#lowerCasedCharacters.forEach((element) => selected_options.push(element));
        if (this.#numeric == true)
            this.#numericCharacters.forEach((element) => selected_options.push(element));
        if (this.#special == true)
            this.#specialCharacters.forEach((element) => selected_options.push(element));
        var password = '';
        for (var i = 0; i < this.#length; i++) {
            var index = Math.floor(Math.random() * selected_options.length);
            var char = selected_options[index];
            password = password + char;
        }
        return password;
    }


    // generate password
    generatePassword(length, uppercase, lowercase, numeric, special) {
        this.#length = length;
        this.#uppercase = uppercase;
        this.#lowercase = lowercase;
        this.#numeric = numeric;
        this.#special = special;
        if (this.#validate_password_length(length) == -1) {
            return 'Invalid length entered. (valid values are between 8 and 128).Please try again';
        } else if (uppercase == false &&
            lowercase == false &&
            numeric == false &&
            special == false) {
            return 'Invalid options selected. (At least 1 option has to be selected). Please try again';
        } else {
            return this.#getRandom();
        }

    }
}

// Write password to the #password input

function writePassword() {
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
    var generator = new PassGenerator();

    // get user options
    var pass_length = generator.getPasswordOptions(options[0], popups.prompt_popup);
    var include_uppercase = generator.getPasswordOptions(options[1], popups.confirm_popup);
    var include_lowercase = generator.getPasswordOptions(options[2], popups.confirm_popup);
    var include_numeric = generator.getPasswordOptions(options[3], popups.confirm_popup);
    var include_special = generator.getPasswordOptions(options[4], popups.confirm_popup);

    //generate password
    var password = generator.generatePassword(pass_length, include_uppercase,
        include_lowercase, include_numeric, include_special);

    passwordText.value = password;


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);