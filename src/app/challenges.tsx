import Challenge from "@/challenge";
import Code from "@/components/code";

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
    name: <Code>toast()</Code>,
    description: (
      <>
        A function offered by many libraries like the <Code>alert()</Code>{" "}
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
    name: <Code>{"<Link>"}</Code>,
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
];

export default challenges;
