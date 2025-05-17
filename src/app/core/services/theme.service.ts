import { Injectable } from "@angular/core";
import colors from "tailwindcss/colors";

@Injectable({ providedIn: 'root' })
export class ThemeService {
  applyTailwindColorsAsCssVars() {
    const root = document.documentElement;
    Object.entries(colors).forEach(([colorName, colorValue]) => {
      if (typeof colorValue === 'object') {
        Object.entries(colorValue).forEach(([shade, hex]) => {
          root.style.setProperty(`--${colorName}-${shade}`, hex as string);
        });
      } else {
        root.style.setProperty(`--${colorName}`, colorValue as string);
      }
    });
  }
}
