import prism from 'prismjs';
import visit from 'unist-util-visit';

export default () => {
    const visitor = (node) => {
        const { value, lang, type } = node;
        const code = prism.highlight(
            value,
            prism.languages[lang] || prism.languages.javascript,
            lang || 'javascript',
        );

        node.type = 'html';
        node.value =
            type === 'inlineCode'
                ? `<code class="language-${
                      lang || 'javascript'
                  }">${code}</code>`
                : `<pre class="language-${lang || 'javascript'}">${code}</pre>`;
    };
    return (root) => {
        return visit(root, ['code', 'inlineCode'], visitor);
    };
};
