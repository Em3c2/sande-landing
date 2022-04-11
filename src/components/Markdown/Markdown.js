import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Markdown = ({content, className}) => (
  <ReactMarkdown className={className} rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
);

export default Markdown;