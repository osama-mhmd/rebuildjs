import Challenge from "@/challenge";

const challenges: Challenge[] = [
  {
    name: <a href="https://swup.js.org">swup</a>,
    description:
      "An animation library that prefetchs the pages and makes transitions between them",
    tags: ["animation", "dom", "fetch", "rebuild-library"],
    steps: [
      "Make a component the prefetches the page you are going to",
      "Then, try to replace the content of the current page with the new content",
      "After that, push the changes to the history",
      "Finally, try to make a transition between them",
    ],
    deps: ["link"],
    type: "storm",
    hints: [],
    solution: undefined,
  },
  {
    name: <code>toast()</code>,
    description: (
      <>
        A function offered by many libraries like the <code>alert()</code>{" "}
        function, that shows a message like{" "}
        <a href="https://ui.shadcn.com/docs/components/toast">
          Toast - shadcn/ui
        </a>
      </>
    ),
    tags: ["animation", "rebuild-component"],
    steps: [
      "Make a component and name it 'Toast'",
      "Also make a function 'toast()' that call the component",
      "Make a timeout to make the 'Toast' disappears after certain time",
      "Make some animations for the toast",
      "Make sure that your application works with multiple toast runs at the same time",
    ],
    type: "water",
    hints: [],
    solution: undefined,
  },
  {
    name: <code>{"<Link>"}</code>,
    description: (
      <>
        A component found in{" "}
        <a href="https://nextjs.org/docs/pages/api-refrence/components/link">
          next/link
        </a>
        , and{" "}
        <a href="https://reactrouter.com/en/main/components/link">
          react-router-dom - Link
        </a>
        , that prefetchs the page your are going to and replaces the content of
        the current page with the new content
      </>
    ),
    tags: ["animation", "fetch", "rebuild-component"],
    steps: [
      "Make a component the prefetches the page you are going to",
      "Then, try to replace the content of the current page with the new content",
      "After that, push the changes to the history",
    ],
    type: "storm",
    hints: [],
    solution: undefined,
  },
  {
    name: <a href="https://npmjs.com/html2canvas">html2canvas</a>,
    description: (
      <>
        A library that screenshoot the DOM and make an image, also the library{" "}
        <a href="https://npmjs.com/html-to-img">html-to-img</a> makes the same
        idea, but they can download the image as a SVG.
      </>
    ),
    tags: ["dom", "canvas", "rebuild-library"],
    steps: [
      "Make sure that the font-family works in your image",
      "Enable the developer to pass some arguments to style to the element",
      "Make sure that the image can downloaded",
    ],
    type: "fire",
    hints: [],
    solution: undefined,
  },
  {
    name: <a href="https://npmjs.com/react-color">react-color</a>,
    description: (
      <>
        A library that makes a color-pallete with tons of colors your can choose. 
        Also these libraries:{" "}
        <a href="https://npmjs.com/react-colorful">react-colorful</a>, and{" "}
        <a href="https://npmjs.com/react-color-pallete">react-color-pallete</a> makes the same
        idea.
      </>
    ),
    tags: ["popover", "color", "rebuild-library"],
    steps: [
      "Make a component and call it ColorPallete",
      "Display the pallete",
      "Make sure that the user can access all the colors",
      "Implement `onChange()` function, so the developer can access the color",
    ],
    type: "storm",
    hints: [],
    solution: undefined,
  },
  {
    name: <a href="https://freecodecamp.org/news/routing-in-nextjs/">nextjs app router</a>,
    description: 'The new routing technique in nextjs is app routing where the main page ("/") found in "/app/page.tsx" and the about page ("/about") in "/app/about/page.tsx"',
    tags: ["routing", "file-system", "rebuild-technique"],
    steps: [
      "...",
    ],
    type: "storm",
    hints: [],
    solution: undefined,
  },
];

export default challenges;
