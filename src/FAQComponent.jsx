import { useState } from 'react';

const FAQComponent = ({ value }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="faq">
      <div className="title">
        <div>{value.question}</div>
        <button className="icon" onClick={() => setisOpen((val) => !val)}>
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen ? (
        <div className={`desc ${isOpen ? 'open' : ''}`}>{value.answer}</div>
      ) : (
        ''
      )}
    </div>
  );
};
export default FAQComponent;
