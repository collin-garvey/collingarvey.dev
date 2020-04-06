/// <reference types="next" />
/// <reference types="next/types/global" />

declare module 'remark';
declare module 'remark-html';

declare module '*.css' {
  const content: {[className: string]: string};
  export default content;
}

declare module '*.scss' {
  const content: {[className: string]: string};
  export default content;
}

declare module '*.module.css' {
  const content: {[className: string]: string};
  export default content;
}

declare module '*.module.scss' {
  const content: {[className: string]: string};
  export default content;
}
