# Template Node.js with TypeScript, ESLint, and Express

This is a default template for setting up a Node.js project with TypeScript, ESLint, and Express. It includes a basic configuration and an example environment file.

## Features
- Node.js with TypeScript
- ESLint for code linting
- Express for handling HTTP requests
- Preconfigured environment variables

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/template-node-ts-eslint-express.git
   ```
2. Navigate to the project folder:
   ```sh
   cd template-node-ts-eslint-express
   ```
3. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
4. Copy the example environment file:
   ```sh
   cp .env.example .env
   ```

### Running the Server
Start the development server:
```sh
npm run dev
# or
yarn dev
```

Start the production server:
```sh
npm run start
# or
yarn start
```

### Environment Variables
The project requires the following environment variables (found in `.env.example`):

#### Server Configuration
```env
PORT=3000
NODE_ENV=development
```

#### Database Configuration
```env
DB_HOST=localhost
DB_PORT=8080
```

## Scripts
- `npm run dev` - Start the server in development mode
- `npm run build` - Build the project
- `npm run start` - Start the server in production mode
- `npm run lint` - Run ESLint

## License
This project is licensed under the [MIT License](LICENSE).


