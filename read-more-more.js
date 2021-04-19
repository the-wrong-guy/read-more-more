import { useState } from "react";
import parse from "html-react-parser";
import styles from "./readmore.module.scss";
const ReadMoreMore = ({
  text,
  checkFor,
  btnStyles,
  transDuration,
  transType,
  linesToShow,
  parseHtml,
  readMoreText,
  readLessText
}) => {
  const [fullText, setFullText] = useState(false);
  if (text.length > checkFor || 300) {
    return (
      <div style={{ margin: "0", padding: "0" }}>
        <div
          style={{
            transition: `max-height ${transDuration || "2s"} ${
              transType || "linear"
            }`,
            overflow: "hidden",
            display: "block",
            lineHeight: "20px",
            maxHeight: fullText
              ? "1000px"
              : `${linesToShow ? `${linesToShow * 20}px` : "100px"}`
          }}>
          {parseHtml ? parse(text) : text}
        </div>
        {fullText ? (
          <button
            style={{ btnStyles }}
            className={styles.btn}
            onClick={() => setFullText(false)}>
            {readLessText ? readLessText : "read less..."}
          </button>
        ) : (
          <button
            style={{ btnStyles }}
            className={styles.btn}
            onClick={() => setFullText(true)}>
            {readMoreText ? readMoreText : "read more..."}
          </button>
        )}
      </div>
    );
  } else {
    return <div>{parseHtml ? parse(text) : text}</div>;
  }
};

export default ReadMoreMore;
