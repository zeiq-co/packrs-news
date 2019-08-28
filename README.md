# Packrs News

With minimal styling and maximum features — including multiple homepage layouts, built-in social sharing and dark mode — Novela makes it easy to start publishing beautiful articles and stories with Gatsby.

### Step §: Develop & Build

Once installed or cloned locally and all packages are installed you can begin developing your site.

```sh
# Run localhost
yarn dev

# Build your Gatsby site
yarn build
```

### Component Shadowing

> This feature allows users to override a component in order to customize its rendering.

> Component Shadowing let’s you replace the theme’s original file, gatsby-theme-novela/src/components/Logo.js, with your own to implement any changes you need.

Any [component](https://github.com/narative/gatsby-theme-novela/tree/master/%40narative/gatsby-theme-novela/src/components) or [section](https://github.com/narative/gatsby-theme-novela/tree/master/%40narative/gatsby-theme-novela/src/sections) is able to be replaced with your own custom component.

This opens up a full customization of Novela to your designed needs. You can copy any component directly from Novela and alter it how you like, or you can create your own component to replace Novela's entirely.

A basic example of component shadowing is explained below by [adding your logo](#adding-your-logo).

### Using images

Images can be added to Posts and customized to fit your content. Define a regular Markdown image that will default to Small or write HTML to customize the sizes. All images can be clicked to zoom.

```html
![This is the alt text for small image](./images/small.jpg)

<div className="Image__Small">
  <img src="./images/medium.jpg" alt="This is the alt text small image" />
</div>

<div className="Image__Medium">
  <img src="./images/medium.jpg" alt="This is the alt text medium image" />
</div>

<div className="Image__Large">
  <img src="./images/large.jpg" alt="This is the alt text large image" />
</div>
```

| Size   |   Class Name    |          Desciption           |
| ------ | :-------------: | :---------------------------: |
| small  | Image\_\_Small  |       Width of the text       |
| medium | Image\_\_Medium | Larger than width of the text |
| large  | Image\_\_Large  |       Full width image        |

### Adding your logo

Your logo must be in SVG (vector) format in order to add it to the theme. This is required because we will be making a React component containing your SVG Logo.

Start by creating the component file at:

```
  novela-site
  └── src
    └── @narative
      └── gatsby-theme-novela
        └── components
          └── Logo
            └── index.js
```

It is important you create the exact folder structure so Gatsby knows to shadow this component. Once the file is created you can create your Logo component.

```jsx
import React from "react";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
    <svg viewBox="0 0 106 28" height="30px">
      <path d="M62.9 12h2.8v10...." />
      <path fill="#fff" d="M25 14h-..." />
      <path d="M14 0C6.3..." fill="#639" />
    </svg>
  );
}
```

### Adding Mailchimp

Want to add a subscription newsletter to your Posts? Novela gives you the option to integrate and build your following in a few easy steps.

Start by downloading [gatsby-plugin-mailchimp](https://github.com/benjaminhoffman/gatsby-plugin-mailchimp):

```sh
yarn add gatsby-plugin-mailchimp
```

Then configure the plugins

```js
plugins: [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      basePath: "/",
      mailchimp: true, // make sure this is true!
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint: "", // add your MC list endpoint here; see plugin repo for instructions
    },
  },
];
```

That's it. You will now have subscription boxes on each of your Posts.
To disable the subscription box on individual Posts you can set `subscription: false` on the Post.

You can shadow the Subscription component to customize the text displayed. It is recommneded to copy and paste the current component and only alter the text.

You will want to override it here:

```
  novela-site
  └── src
    └── @narative
      └── gatsby-theme-novela
        └── components
          └── Subscription
            └── index.js
```

<br />

# Data Models

## Theme Options

It is recommended to use the Default options, but if your project requires something else you can configure them to your need.

| Option             |     Default     |                                        Description                                        |
| ------------------ | :-------------: | :---------------------------------------------------------------------------------------: |
| contentPosts       |  content/posts  |                     Define where you want to pull your Post data from                     |
| contentAuthors     | content/authors |                    Define where you want to pull your Author data from                    |
| authorsPage        |      false      |                                    Create Author pages                                    |
| authorsPath        |    /authors     |                              Where should Author pages live?                              |
| basePath           |        /        | Where should the site be served from? `/blog` will change all paths to start with `/blog` |
| mailchimp          |      false      |                        Enable Mailchimp subscriptions on each Post                        |
| sources.local      |      true       |                           Enable local file system data source                            |
| sources.contentful |      false      |                               Enable Contentful data source                               |

[View Theme option example](https://github.com/narative/gatsby-theme-novela-example/blob/master/gatsby-config.js#L36)

```js
plugins: [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      basePath: "/",
      mailchimp: true,
      sources: {
        local: true,
        contentful: true,
      },
    },
  },
];
```

## Author

[View Author example](https://github.com/narative/gatsby-theme-novela-example/blob/master/content/authors/authors.yml)

| Key      | Required |  Type   |                                                                 Desciption                                                                 |
| -------- | :------: | :-----: | :----------------------------------------------------------------------------------------------------------------------------------------: |
| name     | required | String  |                                The Author's full name which is used should be used as a reference in Posts                                 |
| bio      | required | String  |                                            The Author's bio which is displayed on the home page                                            |
| avatar   | required |  Image  |                                                            The Author's avatar                                                             |
| featured | optional | Boolean |                                              If `true` the Author will appear on the homepage                                              |
| slug     | optional | String  |                          Override the autogenerated slug based no the Author's name. Do not include any slashes.                           |
| social   | optional |  Array  | A list of social accounts and urls. Supported names include github, twitter, linkedin, facebook, instagram, youtube, medium, and dribbble. |

```yml
- name: Dennis Brotzky
  bio: |
    Written by You. This is where your author bio lives. Share your work, your
    joys and of course, your Twitter handle.
  avatar: ./avatars/dennis-brotzky.jpg
  featured: true
  social:
    - url: https://github.com
    - url: https://twitter.com

- name: Thiago Costa
  bio: |
    Written by You. This is where your author bio lives. Share your work, your
    joys and of course, your Twitter handle.
  avatar: ./avatars/thiago-costa.png
```

## Post

| Key          | Required |    Type    |                                          Description                                          |
| ------------ | :------: | :--------: | :-------------------------------------------------------------------------------------------: |
| title        | required |   String   |                  Used as title and generates a default slug. Must be unique.                  |
| slug         | optional |   String   |                Define a custom slug that will override the default title slug.                |
| author       | required | String Ref | Must **match** a defined Author name. Co-author posts by adding comma seperated Author names. |
| date         | required |    Date    |                                       YYYY-MM-DD format                                       |
| hero         | required |   Image    |                               1200px minimum width recommended                                |
| excerpt      | required |   String   |                                      140 character limit                                      |
| subscription | optional |   String   |          If mailchimp is enabled disable the subscription box on an individual Post           |
| secret       | optional |  Boolean   |           If secret the Post will not appear in paginated lists. Defaults to false.           |

[View Post example](https://github.com/narative/gatsby-theme-novela-example/blob/master/content/posts/2019-04-31-understanding-the-gatsby-lifecycle/index.mdx)

```yml
# novela-site/content/posts/2020-01-01/index.mdx
---
title: Why Narative loves Gatsby
author: Dennis Brotzky, Thiago Costa, Brad Tiller
date: 2019-04-27
hero: ./images/narative-gatsby-hero.jpg
excerpt: This is a love story about Narative and Gatsby
---
# And then under the heading YML you can insert any MDX you like
# like headings, links, code, images, etc
# This will show up in the body of your post
# ...
```

## Site Metadata

| Key           | Required |    Type    |                                                                Description                                                                 |
| ------------- | :------: | :--------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
| title         | required |   String   |                                                        Used for the <title></title>                                                        |
| name          | required | String Ref |                                       Used in multiple locations including meta tags and site footer                                       |
| siteUrl       | required |    Date    |                                                             Used in meta tags                                                              |
| description   | required |   Image    |                                                             Used in meta tags                                                              |
| hero.heading  | required |   String   |                                                              Used in the Hero                                                              |
| hero.maxWidth | optional |   number   |                                                     Used in the Hero. Defaults to 652                                                      |
| social        | required |   Array    | [{ url}]. Supported names include github, twitter, linkedin, facebook, instagram, youtube, and dribbble. Used in site footer and meta tags |

[View Site Metadata example](https://github.com/narative/gatsby-theme-novela-example/blob/master/gatsby-config.js)

Within `gatsby-config.js` you can configure `siteMetadata` to show the values you wish.
It is `required` to add `siteMetada`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Novela by Narative`,
    name: `Narative`,
    siteUrl: `https://gatsby-theme-novela.netlify.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,

    // hero
    // A required key and will be displayed on the main page of Noveal
    hero: {
      heading: `Perspectives on technology, design and business from the team at Narative.`,
      maxWidth: 652,
    },

    // social
    // Add in the social links that will be displayed in the footer
    social: [
      {
        url: `https://twitter.com/narative`,
      },
      {
        url: `https://github.com/narative`,
      },
      {
        url: `https://www.instagram.com/narative.co/`,
      },
      {
        url: `https://dribbble.com/narativestudio`,
      },
    ],
  },
};
```
