# Catalyst UI

A personal project to build and document a set of reusable, modern UI components from scratch. This showcase demonstrates clean code, scalability, and best practices.

### [cite_start]Description of Approach [cite: 66]

I built two main components, `InputField` and `DataTable`, completely from scratch using a modern tech stack. The focus was on creating flexible and reusable components with a clean API, documented thoroughly using Storybook. [cite_start]Styling was handled with Tailwind CSS for a utility-first approach, and all code is written in TypeScript for type safety[cite: 53]. [cite_start]The project also includes basic unit tests to ensure component reliability.

### Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Full type safety and modern JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **Storybook** - Component documentation and testing
- **Vite** - Fast build tool and dev server
- **Vitest** - Unit testing framework
- **Testing Library** - React component testing utilities

### Setup and Running the Project

1.  Clone the repository:
    ```bash
    git clone [https://github.com/](https://github.com/)04anmol/Catalyst-UI.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Catalyst-UI
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```
5.  Run Storybook to view the components:
    ```bash
    npm run storybook
    ```
6.  Run tests:
    ```bash
    npm test
    ```
7.  Build for production:
    ```bash
    npm run build
    ```
8.  Lint code:
    ```bash
    npm run lint
    ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run unit tests with Vitest
- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build Storybook for production

### Testing

The project includes a comprehensive testing setup:
- **Vitest** for fast unit testing
- **Testing Library** for React component testing
- **jsdom** for browser environment simulation
- Tests are located in `src/components/*/ComponentName.test.tsx`
