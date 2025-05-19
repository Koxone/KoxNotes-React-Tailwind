import { useNavigate } from "react-router-dom";

function NavBarButton({ icon = "", mode = "" }) {
  const navigate = useNavigate();
  const navigationHandler = () => {
    switch (icon) {
      case "home":
        navigate("/");
        break;
      case "search":
        navigate("/search");
        break;
      case "archive":
        navigate("/archived");
        break;
      case "tag":
        navigate("/tags");
        break;
      case "settings":
        navigate("/settings");
        break;
      case "newnote":
        navigate("/newnote");
        break;
      default:
        navigate("/");
    }
  };
  return (
    <button
      onClick={navigationHandler}
      className="w-[62px] h-8  border-neutral-50 flex justify-center items-center cursor-pointer hover:bg-neutral-700 hover:rounded-sm"
    >
      <img src={`src/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
    </button>
  );
}

export default NavBarButton;
