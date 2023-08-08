"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[30617],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11809:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"Microsoft Azure",keywords:["hudi","hive","azure","spark","presto"],summary:"In this page, we go over how to configure Hudi with Azure filesystem.",last_modified_at:new Date("2020-05-25T23:00:57.000Z")},i=void 0,s={unversionedId:"azure_hoodie",id:"version-0.13.1/azure_hoodie",title:"Microsoft Azure",description:"In this page, we explain how to use Hudi on Microsoft Azure.",source:"@site/versioned_docs/version-0.13.1/azure_hoodie.md",sourceDirName:".",slug:"/azure_hoodie",permalink:"/cn/docs/azure_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.1/azure_hoodie.md",tags:[],version:"0.13.1",frontMatter:{title:"Microsoft Azure",keywords:["hudi","hive","azure","spark","presto"],summary:"In this page, we go over how to configure Hudi with Azure filesystem.",last_modified_at:"2020-05-25T23:00:57.000Z"},sidebar:"docs",previous:{title:"Alibaba Cloud",permalink:"/cn/docs/oss_hoodie"},next:{title:"Tencent Cloud",permalink:"/cn/docs/cos_hoodie"}},u=[{value:"Disclaimer",id:"disclaimer",children:[],level:2},{value:"Supported Storage System",id:"supported-storage-system",children:[],level:2},{value:"Verified Combination of Spark and storage system",id:"verified-combination-of-spark-and-storage-system",children:[{value:"HDInsight Spark2.4 on Azure Data Lake Storage Gen 2",id:"hdinsight-spark24-on-azure-data-lake-storage-gen-2",children:[],level:4},{value:"Databricks Spark2.4 on Azure Data Lake Storage Gen 2",id:"databricks-spark24-on-azure-data-lake-storage-gen-2",children:[],level:4}],level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this page, we explain how to use Hudi on Microsoft Azure."),(0,n.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,n.kt)("p",null,"This page is maintained by the Hudi community.\nIf the information is inaccurate or you have additional information to add.\nPlease feel free to create a JIRA ticket. Contribution is highly appreciated."),(0,n.kt)("h2",{id:"supported-storage-system"},"Supported Storage System"),(0,n.kt)("p",null,"There are two storage systems support Hudi ."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azure Blob Storage"),(0,n.kt)("li",{parentName:"ul"},"Azure Data Lake Gen 2")),(0,n.kt)("h2",{id:"verified-combination-of-spark-and-storage-system"},"Verified Combination of Spark and storage system"),(0,n.kt)("h4",{id:"hdinsight-spark24-on-azure-data-lake-storage-gen-2"},"HDInsight Spark2.4 on Azure Data Lake Storage Gen 2"),(0,n.kt)("p",null,"This combination works out of the box. No extra config needed."),(0,n.kt)("h4",{id:"databricks-spark24-on-azure-data-lake-storage-gen-2"},"Databricks Spark2.4 on Azure Data Lake Storage Gen 2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Import Hudi jar to databricks workspace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Mount the file system to dbutils."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'dbutils.fs.mount(\n  source = "abfss://xxx@xxx.dfs.core.windows.net",\n  mountPoint = "/mountpoint",\n  extraConfigs = configs)\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When writing Hudi dataset, use abfss URL"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'inputDF.write\n  .format("org.apache.hudi")\n  .options(opts)\n  .mode(SaveMode.Append)\n  .save("abfss://<<storage-account>>.dfs.core.windows.net/hudi-tables/customer")\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When reading Hudi dataset, use the mounting point"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'spark.read\n  .format("org.apache.hudi")\n  .load("/mountpoint/hudi-tables/customer")\n')))))}d.isMDXComponent=!0}}]);