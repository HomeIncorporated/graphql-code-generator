(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{262:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(4),a=n(12),o=(n(0),n(398)),c={id:"development-workflow",title:"Development Workflow"},i={id:"getting-started/development-workflow",isDocsHomePage:!1,title:"Development Workflow",description:"The GraphQL Code Generator should be integrated as part of your development workflow.",source:"@site/docs/getting-started/development-workflow.md",permalink:"/docs/getting-started/development-workflow",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/development-workflow.md",sidebar:"sidebar",previous:{title:"Lifecycle Hooks",permalink:"/docs/getting-started/lifecycle-hooks"},next:{title:"Programmatic Usage",permalink:"/docs/getting-started/programmatic-usage"}},p=[{value:"Scripts Integration",id:"scripts-integration",children:[]},{value:"Watch Mode",id:"watch-mode",children:[]},{value:"Monorepo and Yarn Workspaces",id:"monorepo-and-yarn-workspaces",children:[]}],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The GraphQL Code Generator should be integrated as part of your development workflow."),Object(o.b)("h3",{id:"scripts-integration"},"Scripts Integration"),Object(o.b)("p",null,"If you wish to run the codegen before starting your server/app, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"pre")," scripts in your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),", for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "dev": "nodemon app.js",\n    "start": "node app.js",\n    "generate": "graphql-codegen",\n    "prestart": "yarn generate",\n    "predev": "yarn generate"\n  }\n}\n')),Object(o.b)("p",null,"This way, the codegen will generate the output according to your configuration before each time you run ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," or ",Object(o.b)("inlineCode",{parentName:"p"},"start")," scripts."),Object(o.b)("p",null,"It's also useful to run the codegen during your continuous integration flow and make sure that you code always compiles with the generated output, this way you can detect breaking changes in your GraphQL schema and GraphQL documents."),Object(o.b)("h3",{id:"watch-mode"},"Watch Mode"),Object(o.b)("p",null,"If you wish to run the codegen in watch mode, you can specify ",Object(o.b)("inlineCode",{parentName:"p"},"--watch")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"-w"),") when running it."),Object(o.b)("p",null,"You can either run it in a separate terminal session, or use tools like ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/concurrently"}),Object(o.b)("inlineCode",{parentName:"a"},"concurrently"))," to run two scripts at the same time:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "dev": "concurrently \\"nodemon app.js\\" \\"yarn generate --watch\\"",\n    "start": "node app.js",\n    "generate": "graphql-codegen",\n    "prestart": "yarn generate"\n  }\n}\n')),Object(o.b)("p",null,"If you wish, you can specify a custom list of files to watch, by adding a glob expression to the command, using ",Object(o.b)("inlineCode",{parentName:"p"},"--watch")," flag:"),Object(o.b)("div",{className:"admonition admonition-shell"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(o.b)("path",Object(r.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),'""')),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'$ yarn graphql-codegen --watch "src/**/*.js"\n')),Object(o.b)("p",{parentName:"div"},"Use this when you are loading your schema or documents from a single code file, that depends on other files internally, because codegen can't tell that you using those files automatically.   "))),Object(o.b)("h3",{id:"monorepo-and-yarn-workspaces"},"Monorepo and Yarn Workspaces"),Object(o.b)("p",null,"If you are using a monorepo structure, with tools such as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://yarnpkg.com/lang/en/docs/workspaces/"}),"Yarn Workspaces")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/lerna/lerna"}),"Lerna"),", we recommend to install the codegen in the root of your monorepo."),Object(o.b)("p",null,"If you need to execute the codegen multiple times, note that you can specify multiple fields for ",Object(o.b)("inlineCode",{parentName:"p"},"generates")," field, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"schema: 'server/src/**/*.graphql'\ndocuments: 'client/src/**/*.graphql'\ngenerates:\n  client/src/models.ts:\n    - typescript\n    - typescript-operations\n  server/src/models.ts:\n    - typescript\n    - typescript-resolvers\n")))}l.isMDXComponent=!0},398:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.a.createElement(b,i(i({ref:t},s),{},{components:n})):a.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);