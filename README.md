<div align="center">

# Animal Gallery Manager

**A compact browser-based manager for building and maintaining a personal animal gallery.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_App-14b8a6?style=for-the-badge&logo=githubpages&logoColor=white)](https://itaygoldenberg.github.io/Animal-Gallery-Manager/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111)](https://developer.mozilla.org/docs/Web/JavaScript)

</div>

## Overview

Animal Gallery Manager is a vanilla JavaScript application for adding animals to a visual collection. Each entry contains an animal type, name, age and image URL. The interface renders the saved collection dynamically and keeps it available between browser sessions.

## Features

- Add cats, dogs, fish, rabbits and birds to the gallery.
- Validate the entered animal information before saving it.
- Render every animal as a structured row with its image and details.
- Remove entries from the collection.
- Display the current number of saved animals.
- Persist the complete gallery in browser `localStorage`.
- Work without a backend, database or build step.

## Data Flow

```text
Form input -> validation -> JavaScript object -> localStorage -> gallery table
```

All data remains inside the current browser. Clearing site storage also clears the saved gallery.

## Tech Stack

| Technology | Role |
|---|---|
| HTML5 | Semantic form and gallery structure |
| CSS3 | Responsive layout and visual styling |
| JavaScript | Validation, DOM rendering and state management |
| Web Storage API | Persistent browser-side data |

## Project Structure

```text
Animal-Gallery-Manager/
|-- index.html     Application markup
|-- style.css      Layout and presentation
|-- main.js        Validation, storage and rendering logic
`-- README.md      Project documentation
```

## Run Locally

No installation is required.

```bash
git clone https://github.com/itaygoldenberg/Animal-Gallery-Manager.git
cd Animal-Gallery-Manager
```

Open `index.html` in a browser, or serve the folder with a lightweight local server such as VS Code Live Server.

## Author

Built by **Itay Goldenberg**.

[GitHub](https://github.com/itaygoldenberg) | [LinkedIn](https://www.linkedin.com/in/itay-goldenberg/)
