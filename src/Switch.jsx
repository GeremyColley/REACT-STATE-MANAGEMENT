const Switch = ({ switchEmoji, setSwitchEmoji }) => {
    console.log("Switch rendered");
    return (
      <>
        <button
          onClick={() => {
            setSwitchEmoji(!switchEmoji);
          }}
        >
          Switch
        </button>
      </>
    );
  };
  
  export default Switch;
  