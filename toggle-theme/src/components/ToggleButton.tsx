import { useTheme } from "../contexts/theme.tsx";

export const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? '🟡' : '⚫'}
    </button>
  )
}