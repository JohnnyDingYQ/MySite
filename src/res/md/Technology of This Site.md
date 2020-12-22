---
slug: "/blog/technology_of_this_site"
date: "2020-12-23"
title: "Technology of This Site"
---

In this blog post, I will perform an brief overview of the technology stack of this site and demonstrate my understanding of it.

## React & Gatsby

For a site with multiple pages, repeated HTML content, such as the navigation bar and the page footer, will be written over and over again, wasting time/effort and makes the code not DRY (Don't Repeat Yourself). Moreover, if I want to alter some specific content of the page, it can be tedious to navigate through all the HTML element (DOM tree) to find what I want. React is a JavaScript library that uses components to modularize front-end development and handles DOM manipulation so that the developer can focus on website logic. Gatsby is built on React to help compile React program into static, super fast static HTML/CSS content, which is what you are seeing right now.

## SASS

While HTML represent the content of the web, CSS manages how content is displayed. In other words, CSS manages the style and layout of a webpage. However, plain CSS by themselves are devoid of logic. This becomes much more problematic as the site scales since CSS files can easily get big, clumsy, and repetitive. SASS is a preprocessing language for CSS, meaning that SASS files get compiled to CSS files before use. SASS allows developers to reuse and structure their CSS by introducing modules, mixins, and inheritance. With SASS, styling becomes neater and manageable.
