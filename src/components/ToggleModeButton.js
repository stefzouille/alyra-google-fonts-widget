const ToggleModeButton = (props) => {
  const { darkMode, setDarkMode } = props;
  const handleButtonClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button onClick={handleButtonClick} className="btn btn-danger mb-4">
      Dark Mode
    </button>
  );
};
export default ToggleModeButton