(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{259:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(4),r=a(12),l=(a(0),a(398)),c={id:"schema-field",title:"`schema` field"},o={id:"getting-started/schema-field",isDocsHomePage:!1,title:"`schema` field",description:"The schema field should point to your GraphQLSchema - there are multiple ways you can specify it and load your GraphQLSchema.",source:"@site/docs/getting-started/schema-field.md",permalink:"/docs/getting-started/schema-field",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/schema-field.md",sidebar:"sidebar",previous:{title:"codegen.yml",permalink:"/docs/getting-started/codegen-config"},next:{title:"`documents` field",permalink:"/docs/getting-started/documents-field"}},i=[{value:"How to use it?",id:"how-to-use-it",children:[{value:"Root level",id:"root-level",children:[]},{value:"Output-file level",id:"output-file-level",children:[]},{value:"Multiple schemas and client-side schema",id:"multiple-schemas-and-client-side-schema",children:[]}]},{value:"Available formats",id:"available-formats",children:[]},{value:"Custom Schema Loader",id:"custom-schema-loader",children:[]}],p={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"schema")," field should point to your ",Object(l.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," - there are multiple ways you can specify it and load your ",Object(l.b)("inlineCode",{parentName:"p"},"GraphQLSchema"),"."),Object(l.b)("p",null,"You can specify either a ",Object(l.b)("inlineCode",{parentName:"p"},"string")," pointing to your schema, or ",Object(l.b)("inlineCode",{parentName:"p"},"string[]")," point to multiple schemas, and they will be merged."),Object(l.b)("h2",{id:"how-to-use-it"},"How to use it?"),Object(l.b)("h3",{id:"root-level"},"Root level"),Object(l.b)("p",null,"You can specify the ",Object(l.b)("inlineCode",{parentName:"p"},"schema")," field in your root level config, as follow:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema: http://localhost:3000/graphql\ngenerates:\n  ./src/types.ts:\n    plugins:\n      - typescript\n")),Object(l.b)("h3",{id:"output-file-level"},"Output-file level"),Object(l.b)("p",null,"Or, you can specify it per-output file level. This way you can"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  ./src/types1.ts:\n    schema: http://server1.com/graphql\n    plugins:\n      - typescript\n  ./src/types2.ts:\n    schema: http://server2.com/graphql\n    plugins:\n      - typescript\n")),Object(l.b)("h3",{id:"multiple-schemas-and-client-side-schema"},"Multiple schemas and client-side schema"),Object(l.b)("p",null,"You can also specify ",Object(l.b)("inlineCode",{parentName:"p"},"schema")," on both levels: root and output-file, and then GraphQL Code Generator will merge both schemas into one:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema: http://localhost:3000/graphql\ngenerates:\n  ./src/types.ts:\n    schema: ./schema.graphql\n    plugins:\n      - typescript\n      - typescript-operations\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"It's also useful if you have a remote schema coming from a server, and a client-side schema that available in your client-side.")),Object(l.b)("h2",{id:"available-formats"},"Available formats"),Object(l.b)("p",null,"The following can be specified as a single value, or as an array with mixed values."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(n.a)({parentName:"li"},{id:"url"}),"URL"))),Object(l.b)("p",null,"You can specify a URL to load your ",Object(l.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," from:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema: http://localhost:3000/graphql\n")),Object(l.b)("p",null,"You can also specify custom HTTP headers to be sent with the request:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema:\n  - http://localhost:3000/graphql:\n      headers:\n        Authorization: YOUR-TOKEN-HERE\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(n.a)({parentName:"li"},{id:"json"}),"JSON"))),Object(l.b)("p",null,"You can point to a local ",Object(l.b)("inlineCode",{parentName:"p"},".json")," file that contains ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphql.org/learn/introspection/"}),"GraphQL Introspection")," JSON."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema: schema.json\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(n.a)({parentName:"li"},{id:"graphql-file"}),Object(l.b)("inlineCode",{parentName:"h3"},".graphql")," file"))),Object(l.b)("p",null,"You can point to a single ",Object(l.b)("inlineCode",{parentName:"p"},".graphql")," file that contains AST string of your schema:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema: schema.graphql\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"It also supports ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/prisma/graphql-import"}),Object(l.b)("inlineCode",{parentName:"a"},"graphql-import"))," syntax, so you can point to a single ",Object(l.b)("inlineCode",{parentName:"p"},"schema.graphql")," file that imports other files.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(n.a)({parentName:"li"},{id:"glob-expression"}),"Glob Expression"))),Object(l.b)("p",null,"You can also point to multiple ",Object(l.b)("inlineCode",{parentName:"p"},".graphql")," files, and the Code Generator will merge and build your GraphQL schema from those files."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema: src/**/*.graphql\n")),Object(l.b)("p",null,"You can also specify multiple patterns:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema:\n  - src/dir1/**/*.graphql\n  - src/dir2/**/*.graphql\n")),Object(l.b)("p",null,"And, you can specify files to exclude: "),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema:\n  - './src/**/*.graphql'\n  - '!*.generated.graphql'\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"All provided glob expressions are evaluated together. The usage is similar to ",Object(l.b)("inlineCode",{parentName:"p"},".gitignore"),".")),Object(l.b)("p",null,"Additionally, you can use code files and the codegen will try to extract the GraphQL schema from it:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema: './src/**/*.ts'\n")),Object(l.b)("p",null,"The codegen will try to load the file as an AST and look for explicit GraphQL strings, but if it can't find those, it will try to ",Object(l.b)("inlineCode",{parentName:"p"},"require")," the file and looks for operations in the default export."),Object(l.b)("p",null,"You can disable the ",Object(l.b)("inlineCode",{parentName:"p"},"require")," if it causes errors for you (for example, because of different module system or missing deps):"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema:\n  './src/**/*.ts':\n    noRequire: true\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(n.a)({parentName:"li"},{id:"javascript-export"}),"JavaScript export"))),Object(l.b)("p",null,"You can also specify a code file that exports your ",Object(l.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," object as named export ",Object(l.b)("inlineCode",{parentName:"p"},"schema")," or as default export."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema: schema.js\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const { buildSchema } = require('graphql');\n\nmodule.exports = buildSchema(/* GraphQL */ `\n  type MyType {\n    foo: String!\n  }\n\n  type Query {\n    myType: MyType!\n  }\n`);\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"You can also import from TypeScript files, but don't forget to specify ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./require-field"}),"require field"),".")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(n.a)({parentName:"li"},{id:"string"}),"String"))),Object(l.b)("p",null,"You can specify your schema directly as an AST string in your config file. It's very useful for testing."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema: 'type MyType { foo: String }    type Query { myType: MyType }'\n")),Object(l.b)("h2",{id:"custom-schema-loader"},"Custom Schema Loader"),Object(l.b)("p",null,"If your schema has a different or complicated way of loading, you can point to a single code file, that does that work for you."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema:\n  - ./my-schema-loader.js:\n      noPluck: true\n")),Object(l.b)("p",null,"Your custom loader should export a default function that returns ",Object(l.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," object, or an identifier called ",Object(l.b)("inlineCode",{parentName:"p"},"schema"),". For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { buildSchema } = require('graphql');\nconst { readFileSync } = require('fs');\n\nmodule.exports = function(schemaString, config) {\n  // Your logic for loading your GraphQLSchema\n  return buildSchema(readFileSync(schemaString, { encoding: 'utf-8' }));\n};\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"We need to specify ",Object(l.b)("inlineCode",{parentName:"p"},"noPluck: true")," because otherwise Codegen will look for GraphQL AST strings in that file. ")))}s.isMDXComponent=!0},398:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||l;return a?r.a.createElement(d,o(o({ref:t},p),{},{components:a})):r.a.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<l;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);