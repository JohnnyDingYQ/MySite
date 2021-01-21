---
slug: "/blog/technology_of_this_site"
date: "2020-12-23"
title: "Technology of This Site"
desc: "Introduction and explanations"
tags: ["Technology"]
---

In this post, I will give an brief overview of the techniques used in this site and demonstrate my understanding of them.

## React & Gatsby

For a site with multiple pages, repeated HTML content, such as the navigation bar and the page footer, will be written over and over again, wasting time/effort and makes the code not **DRY** (Don't Repeat Yourself). Moreover, if I want to alter some specific content of the page, it can be tedious to navigate through all the HTML element (DOM tree) to find what I want. React is a JavaScript library that uses components to modularize front-end development and handles DOM manipulation so that the developer can focus on website logic. Gatsby is built on React to help compile React program into static, super fast static HTML/CSS content, which is what you are seeing right now.

## SASS

While HTML represent the content of the web, CSS manages how content is displayed. In other words, CSS manages the style and layout of a webpage. However, plain CSS by themselves are devoid of logic. This becomes much more problematic as the site scales since CSS files can easily get big, clumsy, and repetitive. SASS is a preprocessing language for CSS, meaning that SASS files get compiled to CSS files before use. SASS allows developers to reuse and structure their CSS by introducing modules, mixins, and inheritance. With SASS, styling becomes neater and manageable.

## Mobile First Design

For a web application, there are two ways of approaching the design process. The first it to start the design for desktop computers, add all the functionalities, and remove some of them since mobile clients have limited hardware resources (e.g. screen width and processing power). On the other hand, the second approach is to start the design from the mobile version and add functionalities as more hardware resources are available. In practice, the second approach is mostly adopted in the industry since more and more users use mobile clients to access the web. This site adopts the mobile first design approach.

## Markdown

It is extremely tedious to write posts directly in HTML since HTML is a markup language and contains tags, which inflates content and makes my writing, in my opinion, ugly. As a result, all of my posts are written in markdown files (.md). A **Gatsby** plugin is used to convert markdown files into HTML content, and an individual page is generated for each markdown file.

And that is all for now. Developing this site involve many more concepts not mentioned in this post; nevertheless, what is listed above are those which I think worth mentioning.
