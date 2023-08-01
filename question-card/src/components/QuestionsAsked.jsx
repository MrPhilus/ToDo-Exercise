const QuestionsAsked = (props) => {
  const { text, onClick, response } = props;
  return (
    <div>
      <h2 onClick={onClick}>{text}</h2>
      <p>{response}</p>
    </div>
  );
};

export default QuestionsAsked;
