import React, { useState, useEffect } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sun, Moon } from "lucide-react";

type Theme = 'light' | 'dark';

const ThemeSwitcher: React.FC = () => {
  // Set initial theme from localStorage or system preference
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }
    const storedTheme = localStorage.getItem('doraify-theme') as Theme | null;
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Effect to apply theme class to <html> and save to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('doraify-theme', theme);
  }, [theme]);

  console.log('ThemeSwitcher loaded');

  // Handler ensures a theme is always selected
  const handleThemeChange = (newTheme: Theme) => {
    if (newTheme) {
      setTheme(newTheme);
    }
  };

  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={handleThemeChange}
      aria-label="Theme switcher"
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <ToggleGroupItem value="light" aria-label="Switch to Blue Light Mode">
            <Sun className="h-5 w-5" />
          </ToggleGroupItem>
        </TooltipTrigger>
        <TooltipContent>
          <p>Blue Light Mode</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <ToggleGroupItem value="dark" aria-label="Switch to Gadget Dark Mode">
            <Moon className="h-5 w-5" />
          </ToggleGroupItem>
        </TooltipTrigger>
        <TooltipContent>
          <p>Gadget Dark Mode</p>
        </TooltipContent>
      </Tooltip>
    </ToggleGroup>
  );
};

export default ThemeSwitcher;