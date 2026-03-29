import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

mermaid.initialize({
  startOnLoad: false,
  securityLevel: 'strict',
  theme: 'default',
});

function replaceMermaidCodeBlocks() {
  const selectors = [
    'pre code.language-mermaid',
    '.language-mermaid pre code',
    'code.language-mermaid',
  ];

  document.querySelectorAll(selectors.join(',')).forEach((node, index) => {
    const source = node.textContent.trim();
    if (!source) {
      return;
    }

    const container = document.createElement('div');
    container.className = 'mermaid';
    container.id = `mermaid-diagram-${index}`;
    container.textContent = source;

    const wrapper = node.closest('.language-mermaid') || node.closest('pre') || node.parentElement;
    wrapper.replaceWith(container);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  replaceMermaidCodeBlocks();
  await mermaid.run({
    querySelector: '.mermaid',
  });
});
