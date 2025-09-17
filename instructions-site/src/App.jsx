import { useState } from "react";

function App() {
  const [mode, setMode] = useState("novice");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center p-6">
      {/* Header */}
      <header className="max-w-3xl text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Instruction Sets — GitHub Pages</h1>
        <p className="text-gray-600">
          Welcome! This instruction set provides step-by-step guidance on deploying a website using GitHub Pages. Choose your experience level below to get started.
        </p>
      </header>

      {/* Toggle buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setMode("novice")}
          className={`px-6 py-2 rounded-lg font-medium shadow 
          ${mode === "novice" ? "bg-blue-600 text-white" : "bg-white border"}`}
        >
          Novice
        </button>
        <button
          onClick={() => setMode("expert")}
          className={`px-6 py-2 rounded-lg font-medium shadow 
          ${mode === "expert" ? "bg-blue-600 text-white" : "bg-white border"}`}
        >
          Expert
        </button>
      </div>

      {/* Content */}
      <main className="max-w-3xl bg-white rounded-xl shadow p-6">
        {mode === "novice" ? (
          <div className="space-y-8">
            {/* Title + Description */}
            <section>
              <h2 className="text-2xl font-bold mb-2">Novice Instructions</h2>
              <p className="text-gray-600">
                If you have little to no experience with web development or GitHub, follow these detailed instructions to create and publish your own website using GitHub Pages.
              </p>
            </section>

            {/* Overview */}
            <section id="overview">
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p className="text-gray-600">
                This guide will walk you through the process of setting up a simple website using GitHub Pages. 
                You will learn how to create a GitHub account, set up a repository, create basic HTML files, and publish your site online.
                The guide has the following sections:
              </p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>
                  <a href="#materials" className="text-blue-600 underline">Materials Required</a>
                </li>
                <li>
                  <a href="#steps" className="text-blue-600 underline">Step-By-Step Instructions</a>
                </li>
                <li>
                  <a href="#extras" className="text-blue-600 underline">Coding Help</a>
                </li>
                <li>
                  <a href="#troubleshooting" className="text-blue-600 underline">Troubleshooting</a>
                </li>
                <li>
                  <a href="#glossary" className="text-blue-600 underline">Glossary</a>
                </li>
              </ul>
              <p className="text-gray-600 mt-2">
                Please follow the steps carefully, and don't hesitate to refer to the troubleshooting section if you encounter any issues. If you're confused about any terms, check the glossary at the end.
              </p>
            </section>

            {/* Materials */}
            <section id="materials">
              <h3 className="text-xl font-semibold mb-2">Materials Needed</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>A working computer with internet access</li>
                <li>Email address</li>
              </ul>
            </section>

            {/* Steps */}
            <section id="steps">
              <h3 className="text-xl font-semibold mb-2">Step-by-Step Instructions</h3>
              <ol className="list-decimal ml-6 space-y-4">
                <li>
                  Create a GitHub account at {" "}
                  <a
                    href="https://github.com"
                    className="text-blue-600 underline"
                    target="_blank"
                  >
                    github.com
                  </a>
                </li>
                <li>
                  Create a new repository and give it a name (e.g., "my-website"). Make sure the repository is set to public.
                  <img src="/images/new_repo.PNG" alt="Repository creation screenshot" />
                </li>
                <li>
                  Download VSCode from {" "}
                  <a
                    href="https://code.visualstudio.com/"
                    className="text-blue-600 underline"
                    target="_blank"
                  >
                    code.visualstudio.com
                  </a>
                </li>
                <li>
                  Open VSCode and click "Open Folder". Then, create a new folder for your project (right click, new folder), and name it the same as your website.
                </li>
                <li>
                  Inside this folder, create a file named <code>index.html</code>.
                  <img src="/images/index_create.PNG" />
                </li>
                <li>
                  In your new file, copy and paste the following basic HTML template:
                  <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Website</title>
</head>
<body>
  <h1>Welcome to My Website!</h1>
  <p>This is my first website hosted on GitHub Pages.</p>
</body>
</html>`}
                  </pre>
                </li>
                <li>
                  Save the file (Ctrl+S or Cmd+S). You can preview it by opening the file in your web browser.
                </li>
                <li>
                  Open a terminal in VSCode (View &gt; Terminal) and run the following commands to initialize a Git repository, add your file, and commit the changes (replace USERNAME and REPOSITORY with your GitHub username and repository name):
                  <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
{`git init
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git add .
git commit -m "Initial commit"
git push -u origin main`}
                  </pre>
                  <img src="/images/terminal.PNG" />
                </li>
                <li>
                  Enable GitHub pages in your repository settings:
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Go to your repository on GitHub.</li>
                    <li>Click on "Settings".</li>
                    <li>Scroll down to the "Pages" section.</li>
                    <li>Under "Source", select the branch "main" and click "Save".
                      <img src="/images/publish_page.PNG" />
                    </li>
                  </ul>
                </li>
                <li>
                  After a few minutes, your website will be live at <code>https://USERNAME.github.io/REPOSITORY/</code>.
                </li>
              </ol>
            </section>

            {/* Extra */}
            <section id="extras">
              <h3 className="text-xl font-semibold mb-2">Coding Help</h3>
              <p className="text-gray-600">
                Congrats on getting a working website published! Now, it's time to personalize it. In this section, I'll cover the basics for changing your HTML code, along with adding some style with CSS.
              </p>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium mt-2">HTML + CSS</dt>
                  <dd className="text-gray-600 mt-2">
                    <strong>Editing HTML: </strong> 
  HTML controls the structure and content of your website. You can change headings, paragraphs, lists, and links by editing the text between HTML tags. 
  For example, <code>&lt;h1&gt;Welcome!&lt;/h1&gt;</code> can be changed to <code>&lt;h1&gt;My Awesome Site&lt;/h1&gt;</code>.
  <br /><br />
  <strong>Adding Links:</strong> Use the <code>&lt;a&gt;</code> tag to add links to other pages or websites. Example: 
  <code>&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;</code>.
  <br /><br />
  <strong>Using CSS for Style:</strong> CSS changes how your website looks. You can add a file called <code>style.css</code> and link it in your HTML (add the new line within the "head" tags):
  <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
{`<head>
  <link rel="stylesheet" href="style.css" />
</head>`}
  </pre>
  Then you can customize colors, fonts, spacing, and layout. For example, in your style.css file:
  <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
{`body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
  color: #333;
}

h1 {
  color: #1e40af;
}`}
  </pre>
  <br /><br />
  <strong>Experiment & Preview:</strong> Save your changes and refresh your browser to see updates. Start small, change one color or heading, then build from there. Don’t worry if it looks weird at first; experimenting is the fastest way to learn!
  <br /><br />
  <strong>Extra Tips for Beginners:</strong>
  <ul className="list-disc ml-6 mt-1 space-y-1">
    <li>Use online tools like <a href="https://htmlcolorcodes.com/" target="_blank" className="text-blue-600 underline">HTML Color Codes</a> to pick colors easily.</li>
    <li>Inspect other websites in your browser to see how they structure content.</li>
    <li>Comment your code using <code>&lt;!-- Your note here --&gt;</code> so you can remember why you wrote something.</li>
  </ul>
                  </dd>
                </div>
              </dl>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting">
              <h3 className="text-xl font-semibold mb-2">Troubleshooting Tips</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Creating a new repository: Once you have a GitHub account, along the top near the search bar should be a "+" button. Click the "+" button and select "New repository".
                  This will take you to a page where you can name your repository, add a description if you want, and other options. For this guide, name your repository something simple like "my-website".
                  IMPORTANT: Make sure to select "Public" and DO NOT check "Initialize this repository with a README". Then click "Create repository". Your repository must be public for GitHub Pages to work.
                </li>
                <li>Downloading VSCode: Make sure to select the correct download for your device (Windows, Mac, Linux). Some antivirus software will flag the installer, make sure to allow the installation
                  (as long as you clicked the link above, it is completely safe). If you're having issues running VSCode, try restarting your computer or running it as an administrator (right click and select "Run as administrator").
                </li>
                <li>Terminal Commands: Open the terminal by clicking "View" in the top left of the window. Then, in the terminal, type each command individually. 
                  If you get the error "git: command not found" (or something similar), you need to install Git from {" "}
                  <a
                    href="https://git-scm.com/downloads"
                    className="text-blue-600 underline"
                    target="_blank"
                  >
                    git-scm.com/downloads
                  </a>
                  . During installation, choose "Git from the command line" option. After installing Git, restart VSCode and try the commands again.
                  If there's an error when you try to push (like "Permission denied" or "Repository not found"), double-check that you replaced "USERNAME" and "REPOSITORY" in the URL with your actual GitHub username and repository name.
                </li>
              </ul>
            </section>

            {/* Glossary */}
            <section id="glossary">
              <h3 className="text-xl font-semibold mb-2">Glossary</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium">GitHub</dt>
                  <dd className="text-gray-600">
                    A website where you can store, share, and collaborate on code. Think of it like Google Drive, but specifically for coding. 
                  </dd>
                  <dt className="font-medium mt-2">Repository</dt>
                  <dd className="text-gray-600">
                    A folder on GitHub where all the files for a project are stored. 
                  </dd>
                  <dt className="font-medium mt-2">Branch</dt>
                  <dd className="text-gray-600">
                    A version of your repository. The main branch (in this guide called "main") is the primary version of your project. You can create other branches to experiment with your website without changing the main version. 
                  </dd>
                  <dt className="font-medium mt-2">Commit</dt>
                  <dd className="text-gray-600">
                    A snapshot of the changes you made to your files. Each commit has a message describing what you changed. 
                  </dd>
                  <dt className="font-medium mt-2">Push</dt>
                  <dd className="text-gray-600">
                    Sending your local changes (commits) from your computer to GitHub so they are saved online in your repository. 
                  </dd>
                  <dt className="font-medium mt-2">Clone / Pull / Fetch</dt>
                  <dd className="text-gray-600">
                    Methods of getting the code from GitHub to your computer. Not used in this novice instruction set, but if you wanted to continue working on your website on another computer, you could copy the HTTP address
                    from your repository, and clone the code into your new computer. Pulling and fetching are similar, but they update your existing local copy with any changes made on GitHub (basically reversed push).
                  </dd>
                  <dt className="font-medium mt-2">VSCode (Visual Studio Code)</dt>
                  <dd className="text-gray-600">
                    A free program (code editor) where you can write, edit, and manage code for your website. 
                  </dd>
                  <dt className="font-medium mt-2">HTML</dt>
                  <dd className="text-gray-600">
                    The main language used to create webpages. HTML tells the browser what content to show and the structure of the website. 
                  </dd>
                  <dt className="font-medium mt-2">Index.html</dt>
                  <dd className="text-gray-600">
                    The main HTML file for your website. Browsers look for this file first when loading a website. If you have multiple pages, this would be the "home" page that users would initially land on. 
                  </dd>
                  <dt className="font-medium mt-2">Terminal / Command Line</dt>
                  <dd className="text-gray-600">
                    A program built into your computer (and VSCode) where you can type commands for your computer instead of clicking buttons. Used in this guide to run Git commands to update website. 
                  </dd>
                  <dt className="font-medium mt-2">Git</dt>
                  <dd className="text-gray-600">
                    A program that keeps track of changes to your files, allowing you to save versions and collaborate with others. 
                  </dd>
                  <dt className="font-medium mt-2">GitHub Pages</dt>
                  <dd className="text-gray-600">
                    A free service from GitHub that lets you publish a website directly from a GitHub repository. 
                  </dd>
                </div>
              </dl>
            </section>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Title + Description */}
            <section>
              <h2 className="text-2xl font-bold mb-2">Expert Instructions</h2>
              <p className="text-gray-600">
                If you have prior experience with web development and/or GitHub, this guide will teach you how to publish a website for free using GitHub Pages, including some extra tips and tricks along the way.
              </p>
            </section>

            {/* Overview */}
            <section id="overview">
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p className="text-gray-600">
                This guide assumes that you already have a GitHub account, along with basic HTML/CSS and Git knowledge. If you do not have a GitHub account, make sure to create one, or check out the novice instruction set instead.
                The guide has the following sections:
              </p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>
                  <a href="#materials" className="text-blue-600 underline">Materials Required</a>
                </li>
                <li>
                  <a href="#steps" className="text-blue-600 underline">Step-By-Step Instructions</a>
                </li>
                <li>
                  <a href="#simple" className="text-blue-600 underline">Quick Start</a>
                </li>
                <li>
                  <a href="#extras" className="text-blue-600 underline">Coding Help</a>
                </li>
                <li>
                  <a href="#troubleshooting" className="text-blue-600 underline">Troubleshooting</a>
                </li>
                <li>
                  <a href="#glossary" className="text-blue-600 underline">Glossary</a>
                </li>
              </ul>
              <p className="text-gray-600 mt-2">
                Feel free to jump around and look for specific information you need, and don't hesitate to refer to the troubleshooting or glossary section if you're stuck or confused. If you already have
                either a repository set up or local code for a website, visit the Quick Start section.
              </p>
            </section>

            {/* Materials */}
            <section id="materials">
              <h3 className="text-xl font-semibold mb-2">Materials Needed</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>A working computer with internet access</li>
                <li>Email address</li>
              </ul>
            </section>

            {/* Steps */}
            <section id="steps">
              <h3 className="text-xl font-semibold mb-2">Step-by-Step Instructions</h3>
              <ol className="list-decimal ml-6 space-y-4">
                <li>
                  Create a new GitHub repository and give it a name (e.g., "my-website"). Ensure it's public, since GitHub pages only works if your repository is public.
                </li>
                <li>
                  Open a code editor such as VSCode. If you don't have one, Download VSCode from {" "}
                  <a
                    href="https://code.visualstudio.com/"
                    className="text-blue-600 underline"
                    target="_blank"
                  >
                    code.visualstudio.com
                  </a>
                </li>
                <li>
                  In your code editor, create a new folder for your project named the same as your website.
                </li>
                <li>
                  Inside this folder, add any HTML/CSS files you want for your website. Make sure there's at least an index.html file.
                </li>
                <li>
                  Preview your project in a web browser.
                </li>
                <li>
                  Open a terminal in your project directory and run the following commands to initialize a Git repository, add your file, and commit the changes (replace USERNAME and REPOSITORY with your GitHub username and repository name):
                  <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
{`git init
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git add .
git commit -m "Initial commit"
git push -u origin main`}
                  </pre>
                </li>
                <li>
                  Enable GitHub pages in your repository settings:
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Go to your repository on GitHub.</li>
                    <li>Click on "Settings".</li>
                    <li>Scroll down to the "Pages" section.</li>
                    <li>Under "Source", select the branch "main" and click "Save".
                      <img src="/images/publish_page.PNG" />
                    </li>
                  </ul>
                </li>
                <li>
                  After a few minutes, your website will be live at <code>https://USERNAME.github.io/REPOSITORY/</code>.
                </li>
              </ol>
            </section>

            {/* simple instructions */}
            <secion id="simple">
              <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  Enable GitHub Pages for pre-existing repository: Go to repository settings, click to "Pages" section in toolbar on the left, under "Source" select the branch you want to publish and click "Save".
                </li>
                <li>
                  Add local code to GitHub: If you have a folder containing HTML/CSS files already, but no GitHub repository, you can easily upload your code to GitHub and publish your website.
                  Create a new repository in GitHub, give it a name, make it Public, and do not initialize it with a README or any files. Then follow Steps 6 and 7 in the step-by-step instructions.
                </li>
              </ul>
            </secion>

            {/* Extra */}
            <section id="extras">
              <h3 className="text-xl font-semibold mb-2 mt-4">Extra Tips and Tricks</h3>
              <p className="text-gray-600">
                Congrats on publishing your website! On top of HTML/CSS, GitHub pages supports many types of frameworks such as React.
              </p>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium mt-2">React</dt>
                  <dd className="text-gray-600 mt-2">
                    <strong>What is React? </strong> 
  React is a JavaScript library that lets you build single-page applications. Instead of reloading the whole page every time something changes or a user wants to visit a different page/section,
  React lets you update only the parts of the page that need updating. This makes your website faster and more responsive. For reference, this instruction set website was built using React.
  <br /><br />
  <strong>Component Reusability: </strong> Using React you can break your website into small, reusable components. For example, a button component can be reused across different pages
  with different props like text, color, or click actions.
  <br /><br />
  <strong>State Management:</strong> Since React uses JavaScript, you can use methods such as "useState" and "useEffect" to manage local states and side effects.
  <br /><br />
                  </dd>
                  <dt className="font-medium mt-2">TailwindCSS</dt>
                  <dd className="text-gray-600 mt-2">
                    <strong>What is TailwindCSS? </strong>
                    TailwindCSS is a utility-first CSS framework that lets you style your website by adding classes directly to your HTML or JSX elements. 
                    Instead of writing custom CSS, you use predefined classes for layout, colors, spacing, and more. This approach keeps your code compact and easy to maintain. 
                    For example, you can quickly add padding, margins, colors, and responsive design features by combining Tailwind classes. This website is styled using TailwindCSS.
                    <br /><br />
  <strong>Extra Tips for Experts:</strong>
  <ul className="list-disc ml-6 mt-1 space-y-1">
    <li>If using React, build your project with "npm run build" and deploy the build/ folder to GitHub pages.</li>
    <li>Keep common helper functions (like formatting dates or filtering data) in a .js file so you can import them across React components.</li>
    <li>Store API keys and config in .env files, and never commit secrets to GitHub.</li>
    <li>For expert projects, use branches for new features, pull requests for code review, and make sure commit messages follow conventional standards (e.g. feature: add new login button).</li>
  </ul>
                  </dd>
                </div>
              </dl>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting">
              <h3 className="text-xl font-semibold mb-2">Troubleshooting Tips</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Git Errors:</strong> If you get "Permission denied" or "Repository not found", check that your remote URL is correct and that your SSH keys or HTTPS credentials are set up properly.
                </li>
                <li>
                  <strong>Deployment Issues:</strong> Ensure your GitHub Pages source is correctly set (main branch or /docs folder) and that you are deploying the correct folder (for React, deploy the <code>build/</code> folder).
                </li>
                <li>
                  <strong>404 or Broken Links:</strong> Check file paths carefully, especially for <code>index.html</code> references, assets, and CSS/JS files. Remember GitHub Pages URLs are case-sensitive.
                </li>
                <li>
                  <strong>React-specific Problems:</strong> If your React project isn’t loading correctly, make sure <code>homepage</code> is set in <code>package.json</code> and the build output is pushed to GitHub Pages.
                </li>
                <li>
                  <strong>Browser Cache:</strong> If you don’t see changes after a push, clear your browser cache or use a hard refresh (Ctrl+Shift+R / Cmd+Shift+R).
                </li>
                <li>
                  <strong>API/Secret Issues:</strong> Never commit API keys or secrets to your repository. Use environment variables in <code>.env</code> files and local .gitignore to keep sensitive data private.
                </li>
              </ul>
            </section>

            {/* Glossary */}
            <section id="glossary">
              <h3 className="text-xl font-semibold mb-2">Glossary</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium">React</dt>
                  <dd className="text-gray-600">
                    A JavaScript library for building interactive single-page applications (SPAs). Uses components, props, and state to manage dynamic UI updates efficiently. 
                  </dd>
                  <dt className="font-medium mt-2">JSX</dt>
                  <dd className="text-gray-600">
                    Syntax that allows HTML-like code in JavaScript. React uses JSX to define UI components.
                  </dd>
                  <dt className="font-medium mt-2">useState / useEffect</dt>
                  <dd className="text-gray-600">
                    React hooks for managing component state and side effects (e.g., fetching data or subscribing to events).
                  </dd>
                  <dt className="font-medium mt-2">TailwindCSS</dt>
                  <dd className="text-gray-600">
                    A utility-first CSS framework. Add predefined classes directly to HTML or JSX for styling, layout, spacing, and responsive design.
                  </dd>
                  <dt className="font-medium mt-2">GitHub Pages</dt>
                  <dd className="text-gray-600">
                    Free hosting service from GitHub. Publishes static websites from a repository branch (main, gh-pages, or /docs folder).
                  </dd>
                  <dt className="font-medium mt-2">Branching and Pull Requests</dt>
                  <dd className="text-gray-600">
                    Branches allow experimentation without affecting the main site. Pull requests let you review and merge changes safely.
                  </dd>
                  <dt className="font-medium mt-2">Build Tools</dt>
                  <dd className="text-gray-600">
                    Tools like npm scripts, Webpack, or Vite compile source code (e.g., React) into deployable static files.
                  </dd>
                  <dt className="font-medium mt-2">Environment Variables</dt>
                  <dd className="text-gray-600">
                    Variables stored outside your code (e.g., <code>.env</code>) for API keys or configuration, keeping sensitive data private.
                  </dd>
                  <dt className="font-medium mt-2">Caching</dt>
                  <dd className="text-gray-600">
                    Browsers store website files locally. If changes aren’t visible, clear the cache or perform a hard refresh.
                  </dd>
                </div>
              </dl>
            </section>
          </div>
        )}
      </main>

      <footer className="mt-8 text-sm text-gray-500">
        Built for ENGL 421 — Caden Edam
      </footer>
    </div>
  );
}

export default App;
