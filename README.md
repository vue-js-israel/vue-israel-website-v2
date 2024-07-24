# Contributing to vuejsisrael Project

Welcome to our vuejsisrael website project!
To ensure a consistent code style and minimize errors, we use <u>**Prettier**</u> and <u>**ESLint**</u>. Please follow the instructions below to set up and maintain the development environment.

1. [Getting Started](#getting-started)
2. [Development Server](#development-server)
3. [Production](#production)
4. [Contributing Guidelines](#contributing-guidelines)
5. [Code Style](#code-style)
6. [Documentation](#documentation)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/vue-js-israel/vue-israel-website-v2.git
   ```

2. Make sure to install the dependencies:

   ```bash
   # npm
   npm install
   ```

## Development Server

Make sure to use Node.js version **> 18.17.1** and npm version **> 9.6.7** for a consistent development environment. You can use tools like nvm to manage Node.js versions.

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

To deploy the project in a production environment, execute the following command:

```bash
npm run generate
```

This project utilizes the npm run generate script for static site generation,this script generates a static version of the project.

The Static Site Generation process in Nuxt 3 involves analyzing the project structure, pre-rendering pages during the build process, and generating static HTML files and assets that can be deployed to the host platform.

## Contributing Guidelines

As an offline database, the project uses JSON files.
To publish a new event on the website, the files, speakers.json, events.json, and talks.json must all be modified under the Content folder.
There is a direct link between the three files, and a lack of data in one of them may result in issues.
[Full contribution guideline](./ContributingGuidelines.md)

## Code Style

In order to maintain consistency and readability across the Nuxt 3 or Vue 3 SSG project, we adhere to the following code style guidelines:

##### 1. Project Structure

###### 1.1 Folder Structure

- **Pages**: Organize pages under the `pages` directory. Group related pages in subdirectories when applicable.

- **Components**: Place reusable components in the `components` directory. Follow a modular structure and consider organizing them in subdirectories.

- **Layouts**: Store layout components in the `layouts` directory. Maintain a clear naming convention for layout files.

- **Assets**: Keep static assets (css, icons, etc.) in the `assets` directory.

- **Images**: Keep static images in the `public/images` directory. (We keep a copy of every image - all images are uploaded and displayed from Cloudinary)

- **Styles**: Use the `assets/css` directory for global styles and consider component-specific styles in each component directory (The project based on TailwindCSS).

###### 1.2 Naming Conventions

- Use PascalCase for component names.

  ###### 1.2.1 Images Naming conventions

  - We keep a copy of every image - all images are uploaded and displayed from Cloudinary
  - Use **"Vue.js-Israel-meetup-`Host name`-`dd.mm.yy`"** for naming event image `/public/images/events`
  - Use **"Vue.js-Israel-speakers-`first name`-`last name`-`dd.mm`"** for naming speaker poster image `/public/images/speaker-posters`
  - Use **"`First name` `Last name`"** for naming speaker profile image `/public/images/speaker-pictures`

##### 2. JavaScript

###### 2.1 Vue-Specific Guidelines

Use the `script setup` syntax for single-file components when possible.

##### 3. HTML/Template

###### 3.1 Formatting

- Use a consistent indentation of 2 spaces.

#### 4. Tailwind CSS

##### 4.1 Styling

- Utilize the utility-first approach provided by Tailwind CSS for styling components.
- Avoid unnecessary custom styles when a Tailwind utility class is available.

##### 5. Comments

- Provide meaningful comments for complex logic or non-trivial code sections.
- Avoid unnecessary comments that only restate the code.

##### 6. Additional Tools

We are using linters and code formatters (ESLint, Prettier) to automate and enforce these guidelines.

Remember to keep the codebase clean, modular, and easily maintainable by following these conventions.

## Documentation

### Contact-us form:

- Contact-us page form uses [form.texi API](https://form.taxi/) for submission via email.

### Adding a New Company to Companies.json

#### Understanding the Data Structure

The `Companies.json` file contains an array of company objects. Each company object has the following properties:

- **id**: A unique identifier for the company (integer).
- **company**: The name of the company (string).
- **logo**: The URL of the company logo (string - without the prefix `https://wwww`).
- **links**: An array of objects containing links to the company's web presence.
  - Each link object has `name` (string) specifying the platform (e.g., "web", "linkedin") and `url` (string) containing the actual link.
- **location**: The company's location (string).

**Important Note:** The `name` property within the `links` array should now adhere to the following convention:

- If the link is to a platform that has an icon available in the Material Design Icons (MDI) library, use the MDI icon name prefixed with "mdi:" (e.g., "mdi:facebook").
- If the platform doesn't have an MDI icon, use a `web` ad default.
- To validate the existence of MDI icons, you can use the following online resource:
  **Material Design Icons:** https://pictogrammers.com/library/mdi/

#### JSON object structure

Build a new JSON object with the following structure:

```json
{
    "id": <last id + 1>,
    "company": "<company_name>",
    "logo": "<company_logo_url>",
    "links": [
        {
            "name": "<platform_name>",
            "url": "<platform_url>"
        },
    ],
    "location": "<company_location>"
}
```
