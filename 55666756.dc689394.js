(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{248:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"metadata",(function(){return p})),n.d(a,"rightToc",(function(){return i})),n.d(a,"default",(function(){return s}));var t=n(4),r=n(12),c=(n(0),n(398)),l={},p={id:"generated-config/java-resolvers",isDocsHomePage:!1,title:"java-resolvers",description:"Installation",source:"@site/docs/generated-config/java-resolvers.md",permalink:"/docs/generated-config/java-resolvers",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/java-resolvers.md"},i=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>package</code>",id:"package",children:[]},{value:"<code>mappers</code>",id:"mappers",children:[]},{value:"<code>defaultMapper</code>",id:"defaultmapper",children:[]},{value:"<code>className</code>",id:"classname",children:[]},{value:"<code>listType</code>",id:"listtype",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]}]}],o={rightToc:i};function s(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},o,n,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(t.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(t.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(c.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/java-resolvers\n")))),Object(c.b)("h2",{id:"api-reference"},"API Reference"),Object(c.b)("h3",{id:"package"},Object(c.b)("inlineCode",{parentName:"h3"},"package")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"string")),Object(c.b)("p",null,"Customize the Java package name. The default package name will be generated according to the output file path."),Object(c.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      package: custom.package.name\n")),Object(c.b)("h3",{id:"mappers"},Object(c.b)("inlineCode",{parentName:"h3"},"mappers")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"object")),Object(c.b)("p",null,"Allow you to replace specific GraphQL types with your custom model classes. This is useful when you want to make sure your resolvers returns the correct class.\nThe default value is the values set by ",Object(c.b)("inlineCode",{parentName:"p"},"defaultMapper")," configuration.\nYou can use a direct path to the package, or use ",Object(c.b)("inlineCode",{parentName:"p"},"package#class")," syntax to have it imported."),Object(c.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      mappers:\n        User: com.app.models#UserObject\n")),Object(c.b)("h3",{id:"defaultmapper"},Object(c.b)("inlineCode",{parentName:"h3"},"defaultMapper")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"Object")),Object(c.b)("p",null,"Sets the default mapper value in case it's not specified by ",Object(c.b)("inlineCode",{parentName:"p"},"mappers"),".\nYou can use a direct path to the package, or use ",Object(c.b)("inlineCode",{parentName:"p"},"package#class")," syntax to have it imported.\nThe default mapper is Java's ",Object(c.b)("inlineCode",{parentName:"p"},"Object"),"."),Object(c.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      defaultMapper: my.app.models.BaseEntity\n")),Object(c.b)("h3",{id:"classname"},Object(c.b)("inlineCode",{parentName:"h3"},"className")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"Resolvers")),Object(c.b)("p",null,"Allow you to customize the parent class name."),Object(c.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      className: MyResolvers\n")),Object(c.b)("h3",{id:"listtype"},Object(c.b)("inlineCode",{parentName:"h3"},"listType")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"Iterable")),Object(c.b)("p",null,"Allow you to customize the list type."),Object(c.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      listType: Map\n")),Object(c.b)("h3",{id:"scalars"},Object(c.b)("inlineCode",{parentName:"h3"},"scalars")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(c.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(c.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(c.b)("h3",{id:"namingconvention"},Object(c.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(c.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(c.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(c.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(c.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(c.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(c.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(c.b)("h4",{id:"usage-examples-6"},"Usage Examples"),Object(c.b)("h5",{id:"override-all-names"},"Override All Names"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(c.b)("h5",{id:"upper-case-enum-values"},"Upper-case enum values"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(c.b)("h5",{id:"keep-names-as-is"},"Keep names as is"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(c.b)("h5",{id:"remove-underscores"},"Remove Underscores"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(c.b)("h3",{id:"typesprefix"},Object(c.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(c.b)("p",null,"Prefixes all the generated types."),Object(c.b)("h4",{id:"usage-examples-7"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(c.b)("h3",{id:"skiptypename"},Object(c.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"false")),Object(c.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(c.b)("h4",{id:"usage-examples-8"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(c.b)("h3",{id:"nonoptionaltypename"},Object(c.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(c.b)("p",null,"type: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"false")),Object(c.b)("p",null,"Automatically adds ",Object(c.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(c.b)("h4",{id:"usage-examples-9"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")))}s.isMDXComponent=!0},398:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return u}));var t=n(0),r=n.n(t);function c(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){c(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var a=r.a.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},b=function(e){var a=s(e.components);return r.a.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),b=s(n),d=t,u=b["".concat(l,".").concat(d)]||b[d]||m[d]||c;return n?r.a.createElement(u,p(p({ref:a},o),{},{components:n})):r.a.createElement(u,p({ref:a},o))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var c=n.length,l=new Array(c);l[0]=d;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:t,l[1]=p;for(var o=2;o<c;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);