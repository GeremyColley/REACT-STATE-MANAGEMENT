const Emoji = ({ switchEmoji }) => {
    console.log("Emoji rendered");
    return switchEmoji ? <p>😎</p> : <p>🤬</p>;
  };
  
  export default Emoji;