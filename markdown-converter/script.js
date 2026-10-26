function convertMarkdown() {
  const input = document.getElementById("markdown-input").value;

  let html = input;

  // 1. Images - MUST be before links ![alt](src)
  html = html.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

  // 2. Links - [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // 3. Headings - ^\s*### heading (order h3 -> h1)
  html = html.replace(/^\s*###\s+(.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^\s*##\s+(.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^\s*#\s+(.+)$/gm, '<h1>$1</h1>');

  // 4. Blockquote - ^\s*> quote
  html = html.replace(/^\s*>\s+(.+)$/gm, '<blockquote>$1</blockquote>');

  // 5. Bold - **bold** or __bold__ - must be before italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');

  // 6. Italic - *italic* or _italic_ - use negative look to not catch bold
  html = html.replace(/\*(?!\*)(.+?)\*(?!\*)/g, '<em>$1</em>');
  html = html.replace(/_(?!_)(.+?)_(?!_)/g, '<em>$1</em>');

  return html;
}

// Input event handling
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

markdownInput.addEventListener("input", () => {
  const converted = convertMarkdown();
  htmlOutput.textContent = converted; // raw code
  preview.innerHTML = converted; // rendered
});

// Initial run
markdownInput.dispatchEvent(new Event("input"));
