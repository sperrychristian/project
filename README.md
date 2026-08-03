# Anglers Market

A high-fidelity prototype for an online marketplace where anglers buy and sell hand-tied flies and custom lures. Built as a course project for a web design class.

**Live site:** https://sperrychristian.github.io/project/

## About

The idea behind the site is that a fly tied by someone who actually fishes a particular river is worth more than a generic one off a big box shelf. The site connects buyers with local makers, and lets those makers set up a storefront and sell what they already tie.

This is a front-end prototype. There is no backend, so accounts are not really created and nothing is stored between visits.

## Pages

| Page | What it does |
|---|---|
| `index.html` | Home page. Three column layout with the pitch, a hero image, and a sidebar for sellers |
| `browse.html` | Product grid with listing cards for three example flies |
| `how_it_works.html` | Step by step explanation of the process for buyers and for sellers |
| `sign_up.html` | Account creation form with JavaScript validation |
| `login.html` | Log in form |

## Built with

- HTML5
- CSS3, hand written, no framework
- Vanilla JavaScript
- Google Fonts (Playfair Display, Oswald)
- Google Analytics 4

## Layout and responsive design

The whole layout uses flexbox. The home page is a three column flex container, the nav is a flex row, and the browse page is a wrapping flex grid.

There are three breakpoints:

- **max-width 768px** — headings and nav text scale down, spacing tightens up
- **max-width 600px** — the home page columns stack, the nav goes vertical, forms go full width
- **min-width 1200px** — content width is capped so lines of text do not stretch out on large monitors

The browse page cards use a fixed width rather than a percentage. That keeps the product photos from stretching and shrinking while the window is resized. The grid wraps instead, going from three cards per row down to two and then one as the screen narrows.

## JavaScript

`js/createaccount.js` handles the sign up form. A `SignUpData` class captures the four form field values in its constructor. On submit, the script checks that the name and email are filled in and that the password is at least 10 characters, then replaces the form with a personalized welcome message. If validation fails it shows an alert instead.

## Accessibility

- Anchor pseudo classes are declared in LVHA order
- Color pairings meet the WCAG AA 4.5:1 contrast ratio, including the nav and footer hover states
- The current page in the nav is marked with `aria-current="page"` and is styled differently, not just by color
- All images have descriptive alt text
- Nav links fill their whole button so the clickable area is larger than the text

## File structure

```
project/
├── index.html
├── browse.html
├── how_it_works.html
├── sign_up.html
├── login.html
├── styles.css
├── favicon.ico
├── apple-touch-icon.png
├── images/
└── js/
    └── createaccount.js
```

## Running it locally

No build step. Clone the repo and open `index.html` in a browser.

```bash
git clone https://github.com/sperrychristian/project.git
cd project
open index.html
```

## Notes

The site is a prototype, so a few things are stand-ins rather than working features. The maker names, prices, and contact details are placeholders. Sign up does not persist anything, so refreshing the page brings the form back. The "Sign up to buy" buttons on the browse page point to the sign up form rather than to individual listing pages.
