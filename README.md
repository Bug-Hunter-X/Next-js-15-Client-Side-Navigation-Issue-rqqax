# Next.js 15 Client-Side Navigation Bug

This repository demonstrates a bug encountered in a Next.js 15 application when using client-side navigation with `next/router` inside a functional component.  The navigation works, but the page fails to render correctly afterward. 

## Bug Description

The application consists of two pages: a home page and an about page. Navigating from the home page to the about page works fine. However, clicking the button on the about page to return to the home page results in a blank page, even though the URL changes correctly. 

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Click the 'Go back to Home' button.

## Expected Behavior

The home page should render correctly after clicking the button.

## Actual Behavior

The page is blank after navigation, and there are no errors reported in the console.