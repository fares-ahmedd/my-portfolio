import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export const mySkills = [
  {
    title: "HTML",
    icon: <FaHtml5 />,
    description:
      "In HTML, I have learned how to build a clear and accessible structure for web pages. I understand the importance of semantic elements, proper markup, and accessibility features to create web experiences that are both visually appealing and user-friendly. With my strong grasp of HTML, I can effectively create well-structured",
    color: "#e34c26",
  },
  {
    title: "CSS",
    icon: <FaCss3 />,
    description:
      "In CSS, I have learned how to create responsive layouts using techniques like media queries, grid, and flexbox. I understand the importance of cascading styles, selectors, and property inheritance to build visually appealing and user-friendly interfaces",
    color: "#2965f1",
  },
  {
    title: "JavaScript",
    icon: <FaJsSquare />,
    description:
      "With JavaScript, I have gained a deep understanding of programming fundamentals, including control flow, data structures, and functions. I am proficient in modern JavaScript syntax, including ES6+ features, and I can confidently create dynamic, interactive web applications. Additionally, I have experience working with popular JavaScript libraries and frameworks, such as React",
    color: "#c2ad10",
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap />,
    description:
      "With Bootstrap, I have acquired the skills to quickly build responsive and mobile-first web interfaces. I understand the utility of Bootstrap's comprehensive set of components, such as its grid system, navigation, and form elements",
    color: "#563d7c",
  },
  {
    title: "React",
    icon: <FaReact />,
    description:
      "With React.js, I have developed a strong grasp of component-based architecture, state management, and the virtual DOM. I can efficiently create reusable UI components, manage component lifecycles, and handle user interactions. Additionally, I am familiar with popular React.js libraries and tools, such as React Router and Redux, which allow me to build scalable and maintainable web applications with a focus on performance and developer experience",
    color: "#33afd1",
  },
  {
    title: "Sass",
    icon: <FaSass />,
    description:
      "With Sass, I have gained proficiency in writing modular and maintainable CSS. I understand the benefits of using Sass features like variables, mixins, and nested rules to create a more organized and scalable codebase. I can efficiently leverage Sass to build complex and visually appealing user interfaces",
    color: "#c69",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
    description:
      "With Tailwind CSS, I have developed a deep understanding of utility-first CSS. I can efficiently build responsive and customized user interfaces by composing low-level utility classes, rather than relying on pre-defined styles. I appreciate Tailwind's flexibility, which allows me to rapidly prototype and iterate on design concepts",
    color: "#2798c9",
  },
  {
    title: "Git",
    icon: <FaGitAlt />,
    description:
      "With Git, I have gained a deep understanding of version control systems and collaborative development workflows. I can confidently use Git commands to manage code repositories, track changes, and collaborate with team members. I am well-versed in branching and merging strategies, resolving conflicts",
    color: "#f05032",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
    description:
      "With TypeScript, I have gained a robust understanding of static type systems and their benefits in building large-scale, maintainable applications. I can confidently leverage TypeScript's type annotations, interfaces, and classes to write code that is more reliable, easier to refactor, and better documented",
    color: "#3178c6",
  },
  {
    title: "Next",
    icon: <SiNextdotjs />,
    description:
      "With Next.js, I have gained expertise in building server-rendered, static, and hybrid React applications. I understand the distinction between client-side and server-side components, and I can leverage Next.js's file-based routing to create optimized navigation and content delivery. I'm also familiar with the latest version, Next.js 14, which introduces enhanced performance through Server Components and improved developer experience with features like Layouts and Streaming",
    color: "#ffffff",
  },
].reverse();
