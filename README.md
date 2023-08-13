# CardGenius ID Card Generator

> CardGenius ID Card Generator is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to generate ID cards based on their personal details.

<br />
<div align="center">
  <p align="center">
    <br />
    <a href="https://github.com/itxSaaad/cardgenius-app-mern">
    <strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://cardgenius-app-mern.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/itxSaaad/cardgenius-app-mern/issues">Report Bug</a>
    ·
    <a href="https://github.com/itxSaaad/cardgenius-app-mern/issues">Request Feature</a>
  </p>
</div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

## Live Preview Project

[Live Preview](https://cardgenius-app-mern.vercel.app/)

## Features

- Generate ID cards based on personal details
- Download ID cards as PNG
- Save ID cards to database
- View saved ID cards
- Delete saved ID cards

## Built With

- [React.js](https://reactjs.org/) - HTML enhanced for web apps!
- [React Redux](https://react-redux.js.org/) - A Predictable State Container for JS Apps
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development
- [React Router](https://reactrouter.com/) - Declarative routing for React.js
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Vite.js](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- [MongoDB](https://www.mongodb.com/) - NoSQL Database
- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [JWT](https://jwt.io/) - JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - A library to help you hash passwords
- [Multer](https://www.npmjs.com/package/multer) - Node.js middleware for handling multipart/form-data, which is primarily used for uploading files
- [Cloudinary](https://cloudinary.com/) - Cloudinary is a cloud service that offers a solution to a web application's entire image management pipeline

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [NPM](https://www.npmjs.com/) - Node Package Manager

### Installation

1. Clone the repo

```sh
git clone https://github.com/itxSaaad/cardgenius-app-mern.git
```

2. Install NPM packages

```sh
npm install
```

3. Create a `.env` file in the root directory and add the following

```sh
NODE_ENV=development
PORT=5000
MONGO_URI=<YOUR_MONGODB_URI>
SALT=<YOUR_SALT>
JWT_SECRET=<YOUR_JWT_SECRET_KEY>
CLOUDINARY_CLOUD_NAME=<YOUR_CLOUDINARY_CLOUD_NAME>
CLOUDINARY_API_KEY=<YOUR_CLOUDINARY_API_KEY>
CLOUDINARY_API_SECRET=<YOUR_CLOUDINARY_API_SECRET>
```

4. Create a `.env` file in the `client` directory and add the following

```sh
VITE_CLIENT_URL="http://localhost:5173"
VITE_SERVER_URL="http://localhost:5000"
```

5. Run the app

```sh
npm run dev
```

## Contributing

Contributions are what make the open-source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the repo
2. Clone the project
3. Create your feature branch (`git checkout -b feature/AmazingFeature`)
4. Commit your changes (`git commit -m "Add some AmazingFeature"`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a pull request

## Contact

- Twitter: [@itxSaaad](https://twitter.com/itxSaaad)
- LinkedIn: [@itxSaaad](https://www.linkedin.com/in/itxsaaad/)
- Bento: [@itxSaaad](https://bento.me/itxsaaad)
- Email: [saadstudent.cs@gmail.com](mailto:saadstudent.cs@gmail.com)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Support

Give ⭐️ if you like this project!

<a href="https://www.buymeacoffee.com/itxSaaad"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" /></a>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/itxSaaad/cardgenius-app-mern.svg?style=for-the-badge
[contributors-url]: https://github.com/itxSaaad/cardgenius-app-mern/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/itxSaaad/cardgenius-app-mern.svg?style=for-the-badge
[forks-url]: https://github.com/itxSaaad/cardgenius-app-mern/network/members
[stars-shield]: https://img.shields.io/github/stars/itxSaaad/cardgenius-app-mern.svg?style=for-the-badge
[stars-url]: https://github.com/itxSaaad/cardgenius-app-mern/stargazers
[issues-shield]: https://img.shields.io/github/issues/itxSaaad/cardgenius-app-mern.svg?style=for-the-badge
[issues-url]: https://github.com/itxSaaad/cardgenius-app-mern/issues
[license-shield]: https://img.shields.io/github/license/itxSaaad/cardgenius-app-mern.svg?style=for-the-badge
[license-url]: https://github.com/itxSaaad/cardgenius-app-mern/blob/main/LICENSE.md
