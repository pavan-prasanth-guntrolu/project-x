import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import "./App.css";

// Create styled components
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 columns grid */
  gap: 30px; /* Gap between grid items */
  padding: 20px;
  font-family: "sans-serif";
`;

const GridItem = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  font-size: 18px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: #b0c4de;
`;

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = [
    {
      id: 1,
      question: "What will happen when the following HTML code is executed?",
      code: `<a href="https://www.google.com" target="_blank">Visit Example</a>`,
      options: [
        "The link opens in the same page, replacing the current content.",
        "The link opens in a new tab or window.",
        "An error will occur because the target attribute is invalid.",
        "The link will not work since the URL is external.",
      ],
      answer: "b",
    },
    {
      id: 2,
      question:
        "In HTML5, which new attribute of the <input> element is used to define a field that must be filled out before submitting the form?",
      options: ["required", "mandatory", "pattern", "validate"],
      answer: "required",
    },
    {
      id: 3,
      question:
        "Which of the following HTML5 elements is used to structure the navigation links of a website?",
      options: ["<menu>", "<nav>", "<aside>", "<section>"],
      answer: "<nav>",
    },
    {
      id: 4,
      question: "What is the role of the contenteditable attribute in HTML?",
      options: [
        "It allows a user to edit the text inside an element",
        "It enables dynamic changes in the HTML content",
        "It controls whether an element can be resized",
        "It marks an element as non-editable in the DOM",
      ],
      answer: "It allows a user to edit the text inside an element",
    },
    {
      id: 5,
      question:
        "How can you ensure an <iframe> resizes its height automatically to fit the content it loads?",
      options: [
        "Using the scrolling='auto' attribute",
        "Adding CSS height: auto; to the <iframe>",
        "JavaScript to set height based on content size",
        "Use the resizable='true' attribute",
      ],
      answer: "JavaScript to set height based on content size",
    },
    {
      id: 6,
      question:
        "In HTML5, which attribute of the <form> tag allows you to send form data to a specific location without reloading the entire page?",
      options: ["action", "target", "data-async", "method='ajax'"],
      answer: "method='ajax'",
    },
    {
      id: 7,
      question: "What is the purpose of the <meta> tag in HTML?",
      options: [
        "To include metadata like keywords, descriptions",
        "To define a clickable link",
        "To embed media files",
        "To apply styles to elements",
      ],
      answer: "To include metadata like keywords, descriptions",
    },

    {
      id: 8,
      question:
        "What happens when you use background-clip: text; in combination with background-image, and in which context is it most useful?",
      options: [
        "The background fills the content area of the element",
        "The background is applied only to the text, making it visible through the text",
        "The background only affects the border and padding",
        "It clips the background to the outline of the element",
      ],
      answer:
        "The background is applied only to the text, making it visible through the text",
    },
    {
      id: 9,
      question:
        "What is the effect of setting display: inline-block on an element, and how does it differ from display: block in terms of width and height behavior?",
      options: [
        "inline-block does not respect margins",
        "inline-block elements can have padding, but width is not respected",
        "inline-block elements respect width/height but do not start on a new line",
        "inline-block behaves like block but allows text wrapping",
      ],
      answer:
        "inline-block elements respect width/height but do not start on a new line",
    },
    {
      id: 10,
      question:
        "How does background-attachment: fixed; affect an element's background, and in what situations is it most useful?",
      options: [
        "It keeps the background static relative to the viewport",
        "It allows the background to scroll with the page",
        "It fixes the background to the container element",
        "It is primarily useful for parallax scrolling effects",
      ],
      answer: "It keeps the background static relative to the viewport",
    },
    {
      id: 11,
      question:
        "How is the padding distributed in the div element in the below code?",
      code: `<style>
    div {
        padding: 10px 13px;
        background-color: lightblue;
    }
</style>
`,
      options: [
        "10px padding on top and bottom, 13px on left and right",
        "10px padding on all sides",
        "10px on top and bottom, 13px on left and right",
        "13px padding on top and bottom, 10px on left and right",
      ],
      answer:
        "10px on top and bottom, 13px on left and right, but there's an error",
    },
    {
      id: 12,
      question:
        "Consider the following HTML and CSS code: What color will the <p> element be?",
      code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        color: red;
      }
      .text {
        color: blue;
      }
      #main {
        color: green;
      }
      p.text {
        color: yellow;
      }
    </style>
  </head>
  <body>
    <div id="main">
      <p class="text">Hello, World!</p>
    </div>
  </body>
</html>`,
      options: ["Red", "Blue", "Yellow", "Green"],
      answer: "Green",
    },
    {
      id: 13,
      question:
        "Given the following CSS rules, which rule will apply to the <p> element with the class example?",
      code: `<style>
    p {
        color: blue;
    }
    .example {
        color: green;
    }
    div p {
        color: red;
    }
</style>

<div>
    <p class="example">This is a paragraph.</p>
</div>`,
      options: [
        "The text will be blue.",
        "The text will be green.",
        "The text will be red",
        " The text will have no color defined.",
      ],
      answer: " The text will be green.",
    },
    {
      id: 14,
      question:
        "Which statement best describes the layout behavior of inline and block elements in CSS?",
      options: [
        "Inline elements expand to fill the entire width of their container, similar to block elements.",
        "Block elements stack vertically and can contain other elements, while inline elements flow horizontally and do not start on a new line.",
        "Inline elements can have vertical margins that affect surrounding elements, unlike block elements.",
        "Block elements are inherently responsive, while inline elements are fixed in size.",
      ],
      answer:
        "Block elements stack vertically and can contain other elements, while inline elements flow horizontally and do not start on a new line.",
    },
    {
      id: 15,
      question:
        "In the following CSS, why does the browser apply background-color: blue; to the <div> element?",
      options: [
        " The last background-color rule overrides the first one",
        "The first background-color rule overrides the second one",
        "The browser does not allow multiple background colors",
        "The browser will throw an error due to the two conflicting rules",
      ],
      answer: "The last background-color rule overrides the first one",
      code: `<style>
      div {
          width: 100px;
          height: 100px;
          background-color: red;
          background-color: blue;
      }
  </style>
  
  <div>This is a div element</div>`,
    },
    {
      id: 16,
      question:
        "What will be the result of the following CSS code for the div element?",
      options: [
        "The div will be centered horizontally on the page",
        " The div will have 0 margin",
        "The div will have no margin on top, bottom, left, or right",
        "The div will not be centered horizontally",
      ],
      answer: "The div will be centered horizontally on the page",
      code: `<style>
      div {
          width: 100px;
          height: 100px;
          margin: 0 auto;
          background-color: pink;
      }
  </style>
  
  <div>This is a div element.</div>`,
    },
    {
      id: 17,
      question:
        "Which of the following is NOT a valid CSS unit for defining dimensions?",
      options: ["em", "vw", "px", "vm"],
      answer: "vm",
    },
    {
      id: 18,
      question: `What does the term "responsive design" mean in CSS?`,
      options: [
        "A design that changes based on screen size",
        "A design that only works on mobile devices",
        "A design that uses JavaScript",
        "A design that ignores screen sizes",
      ],
      answer: "A design that changes based on screen size",
    },
    {
      id: 19,
      question:
        "What is the purpose of the calc() function in CSS, and how can it enhance layout flexibility?",
      options: [
        "It performs calculations for dynamic values in CSS properties",
        "It changes the display type of an element dynamically",
        "It adjusts animations based on user interaction",
        "It sets minimum values for responsive design",
      ],
      answer: "It performs calculations for dynamic values in CSS properties",
    },

    {
      id: 20,
      question: "What will be the output of the following code?",
      options: [
        "[1] and [1]",
        "[1] and [1, 1]",
        "[1] and []",
        "Raises an error",
      ],
      code: "\n\ndef func(x=[]):\n    x.append(1)\n    return x\nprint(func())\nprint(func())",
      answer: "[1] and [1, 1]",
    },
    {
      id: 21,
      question: "Calculate the result of this expression:",
      code: `50 // 5 * 3 + 18 // 3 ** 2 * 4 - 6 + 12 ** 2 // 8 * 3`,
      answer: "86",
    },
    {
      id: 22,
      question:
        "What is the correct way to sort the following list of dictionaries by the value of the key 'age'?",
      options: [
        "sorted(people, key='age')",
        "sorted(people, key=lambda x: x['age'])",
        "people.sort('age')",
        "people.sort(key='age')",
      ],
      code: "\n\npeople = [{'name': 'Alice', 'age': 25}, {'name': 'Bob', 'age': 22}, {'name': 'Charlie', 'age': 23}]",
      answer: "sorted(people, key=lambda x: x['age'])",
    },
    {
      id: 23,
      question: "What is the output of the following code, and why?",
      code: "\n\nx = [1, 2, 3]\ny = x[:]\ny[0] = 10\nprint(x)\nprint(y)",
      options: [
        "[1, 2, 3] and [10, 2, 3]",
        "[10, 2, 3] and [1, 2, 3]",
        "[10, 2, 3] and [10, 2, 3]",
        "[1, 2, 3] and [1, 2, 3]",
      ],
      answer: "[1, 2, 3] and [10, 2, 3]",
    },
    {
      id: 24,
      question: "FIND THE OUTPUT OF THE FOLLOWING CODE",
      code: `lst = [[x for x in range(y)] for y in range(3, 6)]
    print(lst)`,
      options: [
        " [[0, 1, 2], [0, 1, 2, 3], [0, 1, 2, 3, 4]]",
        "[[0, 1, 2], [0, 1, 2], [0, 1, 2]]",
        "[[0, 1, 2], [0, 1, 2, 3], [0, 1, 2, 3, 4, 5]]",
        " [[0, 1, 2], [0, 1, 2, 3], [0, 1, 2, 3]]",
      ],
      answer: "[[0, 1, 2], [0, 1, 2, 3], [0, 1, 2, 3, 4]]",
    },
    {
      id: 25,
      question: "What will be the output of the following code?",
      code: `t = (1, 2, (3, 4), (5, (6, 7)))
result = t[-2][1] + t[-1][-1][0] + len(t) - len(t[-1])
print(result)`,

      answer: "12",
    },
    {
      id: 26,
      question: "What will be the output of the following code?",
      code: `result = (5 > 3 and 2 < 1) or (3 == 3 and not (4 > 2)) and (1 + 1 == 2)
      print(result)`,
      options: ["True", "False", "None", "TypeError"],
      answer: "False",
    },
    {
      id: 27,
      question: "What is the output of the following code?",
      code: "\n\na = [1, 2, 3, 4]\nb = [x**2 for x in a if x % 2 == 0]\nprint(b)",
      options: ["[4, 16]", "[2, 4]", "[1, 4]", "[1, 4, 9, 16]"],
      answer: "[4, 16]",
    },
    {
      id: 28,
      question: "What will be the output of the following code?",
      code: `result = list(range(1, 10, 2)) + list(range(10, 1, -3)) + list(range(5, 15, 5))\n
    print(result)`,
      options: [
        "[1, 3, 5, 7, 9, 10, 7, 4, 5,10]",
        "[1, 3, 5, 7, 9, 10, 6, 4, 5]",
        "[1, 3, 5, 7, 9, 10, 7, 4, 10]",
        "[1, 3, 5, 7, 9, 10, 5, 4, 6,10]",
      ],
      answer: "[1, 3, 5, 7, 9, 10, 7, 4, 5, 10]",
    },
    {
      id: 29,
      question: "What will be the output of the following code, and why?",
      code: "\n\nnumbers = [1, 2, 3, 4]\nresult = [n*2 if n % 2 == 0 else n for n in numbers]\nprint(result)",
      options: ["[1, 2, 3, 4]", "[1, 4, 3, 8]", "[1, 4, 3, 4]", "[1, 2, 3, 8]"],
      answer: "[1, 4, 3, 8]",
    },
    {
      id: 30,
      question: `What will be the output of the following code, and why?`,
      code: `def func(x, y=[]):
        y.append(x)
        return y
    print(func(10))
    print(func(20, []))
    print(func(30))
    `,
      options: [
        "[10], [20], [10, 30]",
        "[10], [20], [30]",
        "[10], [20], [20, 30]",
        "Raises a TypeError",
      ],
      answer: "[10], [20], [10, 30]",
    },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <GridContainer>
        {items.map((item) => (
          <GridItem key={item.id} onClick={() => handleItemClick(item)}>
            {item.id}
          </GridItem>
        ))}
      </GridContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        question={selectedItem?.question}
        options={selectedItem?.options}
        codeSnippet={selectedItem?.code}
      />
    </>
  );
};

export default App;
