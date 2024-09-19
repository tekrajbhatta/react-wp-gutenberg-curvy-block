# React WP Gutenberg Curvy Block

This project is part of a Udemy course that focuses on building a custom Gutenberg block called **Curvy Block** for WordPress. The block allows users to add customizable SVG curves to their WordPress posts and pages using the Gutenberg editor.

## Project Overview

The **Curvy Block** is developed using React and integrated into WordPress's Gutenberg editor. It provides a flexible UI with customizable attributes such as height, width, colors, and SVG flipping options. Additionally, it allows users to implement curves both at the top and bottom of a block, with inner block support for dynamic content placement.

## Features

- **Side Panel Controls**: Customize the block’s attributes from the side panel.
- **Customizable SVG Curves**: Adjust the height, width, and colors of the curves.
- **Flip Controls**: Flip the SVG curve horizontally or vertically.
- **Color Picker**: Choose a custom color for the SVG curve.
- **Inner Blocks Support**: Add dynamic content inside the Curvy Block.
- **Frontend Rendering**: Dynamic rendering of the block and curves in the frontend.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Course Topics](#course-topics)
3. [Installation](#installation)
4. [Usage](#usage)
5. [License](#license)

## Getting Started

To start with this project, clone the repository and follow the installation steps below.

### Prerequisites

- WordPress environment with Gutenberg editor enabled.
- Node.js and npm installed.

### Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/tekrajbhatta/react-wp-gutenberg-curvy-block.git
  ```
2. Navigate to the project directory:
  ```bash
  cd react-wp-gutenberg-curvy-block
  ```
3. Install the dependencies:
  ```bash
  cd react-wp-gutenberg-curvy-block
  ```
4. Build the project:
  ```bash
  npm run build
  ```
5. Place the built files into your WordPress plugin directory to enable the Curvy Block.

## Course Topics

Here are the main topics covered in the Udemy course that this project is based on:

- Start implementing the side panel
- Build out the side panel
- Introduction to block attributes
- Implement the top SVG curve
- Enable built-in attributes using "supports"
- Different ways to add default styles
- Fix the curvy block styles
- Implementing the height and width controls
- Use the height and width attributes to manipulate the curve shape
- Implement the flip vertical and horizontal controls
- Use the flip vertical and horizontal attributes to manipulate the curve shape
- Use the ColorPicker to set a color for the SVG curve
- Implement the bottom curve settings
- Hook up the bottom curve SVG
- Introduction to inner blocks
- Create dynamic front end view for curvy block
- Add extra styles and inner blocks to front end
- Add top curve to curvy block front end
- Finish top curve front end view and add bottom curve

## Usage

1. Activate the **Curvy Block** plugin in your WordPress installation.
2. Add a new post or page in the Gutenberg editor.
3. Search for **Curvy Block** in the block library and add it to your content.
4. Customize the curve shape, size, and color using the provided block settings.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
