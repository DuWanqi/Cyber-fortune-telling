# Cyber Fortune (赛博算命)

A React-based prototype for a "Cyber Fortune Telling" WeChat Mini Program.

## 🛠 Project Structure

- **pages/sign/index**: Mapped to `App.tsx` (Main Logic)
- **utils/data**: Mapped to `constants.ts` (Fortune Data)
- **components**:
  - `sign-canister`: Mapped to `components/Cylinder.tsx`
  - `sign-stick`: Mapped to `components/Stick.tsx`

## 🚀 Deployment to Firebase Hosting

1. **Install CLI**: `npm install -g firebase-tools`
2. **Login**: `firebase login`
3. **Init**: `firebase init` (Select *Hosting*, use existing project or create new)
   - Public directory: `dist` (if using Vite build)
   - Configure as single-page app: `Yes`
4. **Build**: `npm run build`
5. **Deploy**: `firebase deploy`

## 🔄 Convert to Native WeChat Mini Program (Manual)

If you need to export this to `wx` native code:

1. **WXML**: Copy the structure from the JSX `return` statements. Replace `div` with `view`, `span` with `text`.
2. **WXSS**: 
   - Use the computed Tailwind styles.
   - For animations, use `wx.createAnimation` in the JS file for the shake effect, or CSS `@keyframes` in `.wxss`.
3. **JS**:
   - `useState` -> `this.data` & `this.setData`.
   - `useEffect` -> `onLoad` / `onReady`.
   - `onClick` -> `bindtap`.

## 🎨 Gemini Canvas Layer Guide

When editing in Gemini Canvas:
- **Layer 1 (Background)**: `bg-rice-paper` and decorative corners in `App.tsx`.
- **Layer 2 (Cylinder)**: `components/Cylinder.tsx`. Edit "CSS Art" colors (`bg-red-900`, `bg-gold-leaf`) to change the canister style.
- **Layer 3 (Modal)**: `components/ResultModal.tsx`. Adjust `font-calligraphy` or `border-vermilion` for visual hierarchy.

## ⚠️ WeChat Review Note

- Ensure the "Entertainment Purposes Only" (仅供娱乐) disclaimer is visible.
- All fortunes are hardcoded to be positive (High Luck), compliant with positive energy requirements.
