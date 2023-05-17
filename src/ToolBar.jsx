import Switch from "./Switch";

const Toolbar = ({ switchEmoji, setSwitchEmoji }) => {
  console.log("Toolbar rendered");
  return (
    <div>
      <p>Cliquez ici pour changer l'humeur de l'émoji</p>
      <Switch switchEmoji={switchEmoji} setSwitchEmoji={setSwitchEmoji} />
    </div>
  );
};

export default Toolbar;