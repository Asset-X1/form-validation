# JavaScript Form Validation Project

This project implements a simple form validation system using HTML, CSS (Bootstrap), and JavaScript. The form includes fields for Full Name, Email ID, Phone Number, Password, and Confirm Password, with validation criteria to ensure user input is correct.

## Project Structure

```
js-form-validation
├── src
│   ├── index.html        # HTML structure of the form
│   ├── css
│   │   └── styles.css    # CSS styles for the form
│   ├── js
│   │   └── validation.js  # JavaScript logic for form validation
├── README.md             # Project documentation
```

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the `src` directory.
3. Open `index.html` in your web browser to view the form.

## Validation Criteria

- **Full Name**: Must be at least 3 characters long and can only contain letters and spaces.
- **Email ID**: Must be a valid email format (e.g., user@example.com).
- **Phone Number**: Must be a valid phone number format (e.g., 123-456-7890).
- **Password**: Must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.
- **Confirm Password**: Must match the Password field.

## Functionality

- The form is styled using Bootstrap to ensure responsiveness and a modern look.
- JavaScript is used to validate the input fields upon submission and provide feedback to the user.
- Error messages are displayed next to the respective fields when validation fails.

## License

This project is open-source and available for modification and distribution.