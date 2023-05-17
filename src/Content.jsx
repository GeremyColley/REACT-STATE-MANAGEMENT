import Emoji from "./Emoji";

const Content = ({ switchEmoji }) => {
  console.log("Content rendered");
  return <Emoji switchEmoji={switchEmoji} />;
};

export default Content;