// // import 'prismjs/plugins/autoloader/prism-autoloader.js'
// // import 'prismjs/components/prism-core.js';
// import Prism from 'prismjs'
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-python';
// import 'prismjs/components/prism-java';
// import 'prismjs/components/prism-http.js';
// import 'prismjs/components/prism-css';
// import 'prismjs/components/prism-markdown';
// import 'prismjs/components/prism-ruby';
// import 'prismjs/components/prism-go';
// import 'prismjs/components/prism-c';
// import 'prismjs/components/prism-cpp';
// import 'prismjs/components/prism-typescript';
// import 'prismjs/components/prism-json';
// import 'prismjs/components/prism-bash';
// import 'prismjs/components/prism-dart';
// import 'prismjs/components/prism-sql';
// import 'prismjs/components/prism-php.js';

export const formattedText = (text: string) => {
  if (!text) return "";

  return (
    text
      // Code Blocks (```code```) - Add language label and format code block
      // .replace(/```(\w+)\s([\s\S]*?)```/g, (match, language, codeContent) => {
      //   const mapLanguage = language ? language : 'javascript'
      //   return `<code class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none">
      //             ${language?.toUpperCase()?.trim()}
      //           </code>
      //           <pre class="text-wrap p-3 rounded-xl bg-secondary text-primary flex items-center">
      //             <code class="">
      //               ${Prism.highlight(codeContent,Prism.languages[mapLanguage],mapLanguage)?.trim()}
      //             </code>
      //           </pre>`;
      // })

      // Break comment lines after `//`
      // .replace(
      //   /<code class="text-green-600">([\s\S]*?)<\/code>/g,
      //   (match, codeContent) => {
      //     const modifiedCode = codeContent
      //       .replace(/\/\/(.*?)(?=\n|$)/g, (match, comment) => `// ${comment.replace(/ /g, "&nbsp;")}<br>`)
      //       // .replace(/\n\*/g, "\n"); // Remove '*' immediately after '\n'

      //     return `<code class="text-green-600">${modifiedCode}</code>`;
      //   }
      // )

      // Headings (**Title**)
      .replace(
        /\*\*(.*?)\*\*/g,
        '<h1 class="text-[14px] font-bold pb-6">$1</h1>'
      )

      // // Headings (**Title**)
      .replace(
        /\*\s\*\*(.*?)\*\*/g,
        '<h1 class="text-[14px] font-bold pb-6">$1</h1>'
      )

      // Main Headings (Top-level titles)
      // .replace(
      //   /\*(.*?)\*/g
      // )

      // // Paragraph (*Text*)
      .replace(
        /^\*\s*(.*)$/gm,
        '<p class="text-muted-foreground text-[14px] list-decimal">$1</p>'
      )

      // // Replace "" to *
      .replace(/\*;$/, "")

      // // Bold
      .replace(/\*(.*?)\*/g, "<p class='font-bold text-destructive'>$1</p>")

      // // Wrap lists with <ul> (ensure lists are properly wrapped)
      .replace(/(<li>.*?<\/li>)+/gs, "<ul>$&</ul>")

      // // Preserve line breaks as <br> for readability
      .replace(/\n/g, "<br>")
  );
};
