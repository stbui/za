import raw from 'raw.macro';
import { createGlobalStyle } from 'styled-components';
const baseStyles = raw('codemirror/lib/codemirror.css');

createGlobalStyle`
${baseStyles}
/* SCROLL */
  .CodeMirror-overlayscroll .CodeMirror-scrollbar-filler,
  .CodeMirror-overlayscroll .CodeMirror-gutter-filler {
    display: none !important;
  }

  .CodeMirror-overlayscroll-horizontal div,
  .CodeMirror-overlayscroll-vertical div {
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 3px;
  }

  .CodeMirror-overlayscroll-horizontal,
  .CodeMirror-overlayscroll-vertical {
    position: absolute;
    z-index: 6;
  }

  .CodeMirror-overlayscroll-horizontal {
    bottom: 0;
    left: 0;
    height: 6px;
  }
  .CodeMirror-overlayscroll-horizontal div {
    bottom: 0;
    height: 100%;
  }

  .CodeMirror-overlayscroll-vertical {
    right: 0;
    top: 0;
    width: 6px;
  }
  .CodeMirror-overlayscroll-vertical div {
    right: 0;
    width: 100%;
  }

  /* THEME */
  .cm-s-reakit.CodeMirror,
  .cm-s-reakit .CodeMirror-gutters {
    background-color: #282a36 !important;
    color: #f8f8f2 !important;
    border: none;
    z-index: 0;
    border-radius: 0.25em;
    height: auto;
  }
  .cm-s-reakit .CodeMirror-lines {
    padding: 1em 0;
  }
  .cm-s-reakit .CodeMirror-lines pre {
    padding: 0 1.5em;
  }
  .cm-s-reakit .CodeMirror-gutters {
    color: #282a36;
  }
  .cm-s-reakit .CodeMirror-cursor {
    border-left: solid thin #f8f8f0;
  }
  .cm-s-reakit .CodeMirror-linenumber {
    color: #6d8a88;
  }
  .cm-s-reakit .CodeMirror-selected {
    background: rgba(255, 255, 255, 0.2);
  }
  .cm-s-reakit .CodeMirror-line::selection,
  .cm-s-reakit .CodeMirror-line > span::selection,
  .cm-s-reakit .CodeMirror-line > span > span::selection {
    background: rgba(255, 255, 255, 0.2);
  }
  .cm-s-reakit .CodeMirror-line::-moz-selection,
  .cm-s-reakit .CodeMirror-line > span::-moz-selection,
  .cm-s-reakit .CodeMirror-line > span > span::-moz-selection {
    background: rgba(255, 255, 255, 0.2);
  }
  .cm-s-reakit span.cm-comment {
    color: #6272a4;
  }
  .cm-s-reakit span.cm-string,
  .cm-s-reakit span.cm-string-2 {
    color: #f1fa8c;
  }
  .cm-s-reakit span.cm-number {
    color: #bd93f9;
  }
  .cm-s-reakit span.cm-variable {
    color: #50fa7b;
  }
  .cm-s-reakit span.cm-variable-2 {
    color: white;
  }
  .cm-s-reakit span.cm-def {
    color: #50fa7b;
  }
  .cm-s-reakit span.cm-operator {
    color: #ff79c6;
  }
  .cm-s-reakit span.cm-keyword {
    color: #ff79c6;
  }
  .cm-s-reakit span.cm-atom {
    color: #bd93f9;
  }
  .cm-s-reakit span.cm-meta {
    color: #f8f8f2;
  }
  .cm-s-reakit span.cm-tag {
    color: #ff79c6;
  }
  .cm-s-reakit span.cm-attribute {
    color: #50fa7b;
  }
  .cm-s-reakit span.cm-qualifier {
    color: #50fa7b;
  }
  .cm-s-reakit span.cm-property {
    color: #66d9ef;
  }
  .cm-s-reakit span.cm-builtin {
    color: #50fa7b;
  }
  .cm-s-reakit span.cm-variable-3,
  .cm-s-reakit span.cm-type {
    color: #ffb86c;
  }

  .cm-s-reakit .CodeMirror-activeline-background {
    background: transparent;
  }
  .cm-s-reakit.CodeMirror-focused .CodeMirror-activeline-background {
    background: rgba(255, 255, 255, 0.1);
  }
  .cm-s-reakit .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: white !important;
  }`;
