import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme = signal<Theme>('light');
  currentTheme = this.activeTheme.asReadonly();

  constructor() {
    if(localStorage.getItem('moDash_theme')) {
      this.setTheme(localStorage.getItem('moDash_theme') as Theme)
    }
  }

  setTheme(theme: Theme) {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;

    if(themeLink){
      themeLink.href = theme + '.css'
    }

    this.activeTheme.set(theme);
    localStorage.setItem('moDash_theme', theme);
  }
}
