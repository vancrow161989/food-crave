import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { turnOnDarkMode } from "@/store/themeSlice";

function useDarkMode() {
  const dispatch = useAppDispatch();
  const storeDarkMode = useAppSelector(({ theme }) => theme.isDarkMode);

  const checkDarkMode = () => {
    if (storeDarkMode) {
      document.documentElement.classList.add("dark");
      return;
    }

    let hasDarkMode: string | null = localStorage.getItem(
      import.meta.env.VITE_DARK_THEME
    );

    if (!hasDarkMode) {
      document.documentElement.classList.remove("dark");
      return;
    }

    const { isDarkMode } = JSON.parse(hasDarkMode);

    if (isDarkMode) {
      dispatch(turnOnDarkMode);
      document.documentElement.classList.add("dark");
      return;
    }

    document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    checkDarkMode();
  }, [storeDarkMode]);
}

export default useDarkMode;
