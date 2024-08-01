# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

--
// Define the Astro component here
import Layout from '../layouts/Layout.astro'; // Assume a layout that handles the header and footer

---

<Layout title="Contact - Coworking | Canvas">
    <div class="section mb-0 pb-0 bg-theme-light" style="padding-top: 120px;">
        <!-- <div class="container"> -->
    <body class="stretched">
        <div id="wrapper">
            <header id="header" class="border-bottom-0" data-sticky-shrink="false">
                <div id="header-wrap">
                    <div class="container">
                        <div class="header-row">
                            <div id="logo">
                                <a href="/demo-coworking">
                                    <!-- Use Astro optimized image components if necessary -->
                                    <img class="logo-default" src="/page/coworking/images/logo.png" alt="Canvas Logo" width="auto" height="50">
                                    <img class="logo-sticky" src="/page/coworking/images/logo-sticky.png" alt="Canvas Logo" width="auto" height="50">
                                </a>
                            </div>
                            <div class="header-misc">
                                <a class="top-phone" href="tel:800-234-5324">
                                    <i class="fa-solid fa-phone"></i> <span class="d-none d-md-inline-block">(800) 234-5324</span>
                                </a>
                            </div>
                            <div class="primary-menu-trigger">
                                <button class="cnvs-hamburger" type="button" title="Open Mobile Menu">
                                    <span class="cnvs-hamburger-box"><span class="cnvs-hamburger-inner"></span></span>
                                </button>
                            </div>
                            <nav class="primary-menu">
                                <ul class="menu-container">
                                    <li class="menu-item"><a class="menu-link" href="/demo-coworking"><div>Home</div></a></li>
                                    <li class="menu-item"><a class="menu-link" href="/demo-coworking-about"><div>About Us</div></a></li>
                                    <li class="menu-item"><a class="menu-link" href="/demo-coworking-price"><div>Rates</div></a></li>
                                    <li class="menu-item"><a class="menu-link" href="/demo-coworking-single"><div>Single</div></a></li>
                                    <li class="menu-item current"><a class="menu-link" href="/demo-coworking-contact"><div>Contact Us</div></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <section id="content">
                <div class="content-wrap pb-0">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-7">
                                <h2 class="display-4 text-dark fw-semibold ls--2 mb-3">Contact Us</h2>
                                <p class="text-dark">Progressively syndicate user-centric schemas without front-end synergy. Monotonectally envisioneer.</p>
                                <div class="form-widget mt-5">
                                    <form class="mb-0" id="template-contactform" name="template-contactform" method="post">
                                        <!-- Form fields go here -->
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Additional sections can be included here -->
                </div>
            </section>
            <footer id="footer" class="border-0" style="background-color: #155BBC; padding-top: 40px">
                <!-- Footer content -->
            </footer>
        </div>
        </div>
        <!-- </div> -->
        <div id="gotoTop" class="uil uil-angle-up"></div>
    </body>
</Layout>
