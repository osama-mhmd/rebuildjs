import Challenge from "@/challenge";
import Code from "@/components/code";
const linkChallenge = [
  `document.querySelectorAll("a").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
  });
});`,
  `fetch(el.href)
  .then((data) => {
    if (!data.ok) return;
    return data.text();
  })
  .then((htmlcontent) => {
    console.log(htmlcontent);
  })
  .catch((err) => {
    console.log(err);
  });`,
  `.then((htmlcontent) => {
  const main = htmlcontent.match(/<main>(.*?)<\/main>/)[1]; // optional step, if you want to replace the main tag only
  const title = htmlcontent.match(/<title>(.*?)<\/title>/)[1];
  // I used \`match()\` becasuse it is much faster than parsing it and then select the main tag

  // update the History API
  history.pushState({ content: main }, el.href);
  document.querySelector("main").innerHTML = main;
  document.querySelector("title").innerHTML = title;
})`,
  `window.addEventListener("popstate", (e) => {
  if (e.state && e.state.content) {
    document.querySelector("main").innerHTML = e.state.content;
  }
});`,
];

const challenges: Challenge[] = [
  {
    name: "swup",
    description:
      "An animation library that prefetchs the pages and makes transitions between them",
    link: "https://swup.js.org",
    tags: ["animation", "dom", "fetch", "rebuild-library"],
    steps: [
      "Make a component the prefetches the page you are going to",
      "Then, try to replace the content of the current page with the new content",
      "After that, push the changes to the history",
      "Finally, try to make a transition between them",
    ],
    deps: ["link-component"],
    type: "storm",
  },
  {
    name: "toast message",
    description: `
      A function offered by many libraries like the \`alert()\`
      function, that shows a message like shadcn/ui
    `,
    tags: ["animation", "rebuild-component"],
    link: "https://ui.shadcn.com/docs/components/toast",
    steps: [
      "Make a component and name it 'Toast'",
      "Also make a function 'toast()' that call the component",
      "Make a timeout to make the 'Toast' disappears after certain time",
      "Make some animations for the toast",
      "Make sure that your application works with multiple toast runs at the same time",
    ],
    type: "water",
  },
  {
    name: "link component",
    description: `
      A component found in nextjs, and react-router-dom, 
      that prefetchs the page your are going to and replaces the content of
      the current page with the new content
    `,
    tags: ["animation", "fetch", "rebuild-component"],
    steps: [
      "Make a component the prefetches the page you are going to",
      "Then, try to replace the content of the current page with the new content",
      "After that, push the changes to the history",
    ],
    type: "storm",
    solution: (
      <div>
        <ul>
          <li>
            Create three pages: <code>index.html</code> <code>about.html</code>{" "}
            <code>login.html</code>.
          </li>
          <li>
            Then create a simple navbar that have links to navigate between
            pages.
          </li>
          <li>
            And import the <code>main.js</code> script
          </li>
          <li>Then prevent the default action on clicking a link</li>
          <Code text={linkChallenge[0]} />
          <li>Then fetch the page you are going to</li>
          <Code text={linkChallenge[1]} />
          <li>After that replace the current content with the new content</li>
          <Code text={linkChallenge[2]} />
          <li>
            Finally, make sure that when going back and forward, everything is
            fine
          </li>
          <Code text={linkChallenge[3]} />
        </ul>
      </div>
    ),
  },
  {
    name: "html2canvas",
    description: `
      A library that screenshoot the DOM and make an image, also the library html-to-img 
      makes the same idea, but they can download the image as a SVG.
    `,
    tags: ["dom", "canvas", "rebuild-library"],
    link: "https://npmjs.com/html2canvas",
    steps: [
      "Make sure that the font-family works in your image",
      "Enable the developer to pass some arguments to style to the element",
      "Make sure that the image can downloaded",
    ],
    type: "fire",
  },
  {
    name: "react-color",
    description: `
      A library that makes a color-pallete with tons of colors your can
      choose. Also these libraries: react-colorful, and 
      react-color-pallete makes the same idea.
    `,
    tags: ["popover", "color", "rebuild-library"],
    link: "https://npmjs.com/react-color",
    steps: [
      "Make a component and call it ColorPallete",
      "Display the pallete",
      "Make sure that the user can access all the colors",
      "Implement `onChange()` function, so the developer can access the color",
    ],
    type: "storm",
  },
  {
    name: "nextjs app router",
    description:
      'The new routing technique in nextjs is app routing where the main page ("/") found in "/app/page.tsx" and the about page ("/about") in "/app/about/page.tsx"',
    tags: ["routing", "file-system", "rebuild-technique"],
    steps: ["..."],
    type: "storm",
    link: "https://freecodecamp.org/news/routing-in-nextjs/",
  },
  {
    name: "SPA",
    description:
      "Single Page Application (SPA) is a website or web application that updates its content without reloading the whole page which improves the user experience a lot.",
    tags: ["routing", "rebuild-technique"],
    steps: [
      "Make accessing any route not reload the page",
      "Replace the current content with the new content without reloading",
    ],
    type: "storm",
    weaklyChallenge: 1,
  },
];

export default challenges;
