import Challenge from "@/challenge";
import Code from "@/components/code";

const challenges: Challenge[] = [
  {
    name: <a href="https://swup.js.org">swup</a>,
    description:
      "An animation library that prefetchs the pages and makes animations between them",
    tags: ["animation", "dom", "fetch", "rebuild-library"],
    steps: [
      "Make a component the prefetches the link you are going to",
      "Then, try to replace the content of the page with the new content",
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
        function
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
        A component found in nextjs, and react-router-dom, that prefetchs the
        page your are going to and replaces the content of the page with the new
        content
      </>
    ),
    tags: ["animation", "fetch", "rebuild-component"],
    steps: [
      "Make a component the prefetches the link you are going to",
      "Then, try to replace the content of the page with the new content",
      "After that, push the changes to the history",
    ],
    type: "storm",
    hints: [],
    solution: undefined,
  },
];

export default challenges;
