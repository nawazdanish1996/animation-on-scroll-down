# animation on scroll down using html, css, and js

The code provided above consists of three files, an HTML file, a CSS file, and a JavaScript file, that work together to create an animation on scroll down effect.

The HTML file contains a series of div elements with the class "animation" and h1 elements with the class "ani". These elements are the placeholders for the animations that will be triggered by the JavaScript code.

The CSS file defines the styles for the HTML elements in the document, including the layout, appearance, and animation effects for the "ani" class.

The JavaScript file creates an IntersectionObserver object that listens for changes in the target elements' intersection with the viewport. When the target element intersects with the viewport, the IntersectionObserver triggers the "scroll-ani" class in the CSS file, which animates the element on the page. The observer.observe() method is called on each element with the "ani" class to start observing its intersection data. The options object passed to the IntersectionObserver constructor sets the threshold to 0.5, meaning that the animation will be triggered when the target element is 50% visible in the viewport.

## Hosted url:
- https://nawazdanish1996.github.io/animation-on-scroll-down/

## code url:
- 
