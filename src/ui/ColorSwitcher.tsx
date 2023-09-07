import { LuSunMoon } from "react-icons/lu";
import { BsMoonStarsFill } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "@/hooks/useApp";
import { turnOffDarkMode, turnOnDarkMode } from "@/store/themeSlice";

function ColorSwitcher() {
  const isDarkMode = useAppSelector(({ theme }) => theme.isDarkMode);
  const dispatch = useAppDispatch();

  const handleTurnOff = () => {
    dispatch(turnOffDarkMode);
    localStorage.setItem(
      import.meta.env.VITE_DARK_THEME,
      JSON.stringify({ isDarkMode: false })
    );
  };

  const handleTurnOn = () => {
    dispatch(turnOnDarkMode);
    localStorage.setItem(
      import.meta.env.VITE_DARK_THEME,
      JSON.stringify({ isDarkMode: true })
    );
  };

  return (
    <div>
      {isDarkMode ? (
        <button type="button" onClick={handleTurnOff}>
          <LuSunMoon />
        </button>
      ) : (
        <button type="button" onClick={handleTurnOn}>
          <BsMoonStarsFill />
        </button>
      )}
    </div>
  );
}

export default ColorSwitcher;
