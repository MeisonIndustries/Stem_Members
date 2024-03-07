window.MathJax = {
  tex: {
    // Allow latex style math blocks.
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],

    // Enable automatic equation numbering.
    tags: 'ams',

    processEscapes: true,
    processEnvironments: true,

    // Enable the \newcommand macro for latex typesetting.
    // packages: {'[+]': ['ams', 'newcommand']},
  },
  // loader: {load: ['[tex]/ams', '[tex]/newcommand']},
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  // ams: {
  //     multlineWidth: '100%',
  //     multlineIndent: '3em'
  // }
};

// Enable auto-reload for mathjax.
document$.subscribe(() => {
  MathJax.typesetPromise()
})
