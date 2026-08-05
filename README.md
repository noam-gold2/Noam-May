# נועם ומאי — Landing Page

## התקנה מקומית

```bash
npm install
npm run dev
```

## Deployment — Vercel

1. דחפי את הקוד ל-GitHub repository חדש
2. נכנסות ל-Vercel → "Add New Project" → בחרי את ה-repo
3. Vercel מזהה Vite אוטומטית, פשוט לחצי Deploy

## תמונות (placeholders)

כרגע הדף עובד עם placeholder gradients. כשתרצי להחליף:

### Hero background
1. שמי תמונה ב: `public/images/hero.jpg`
2. ב-`src/components/Hero.css`, החליפי:
   ```css
   /* מחקי את השורה עם linear-gradient */
   background: url('/images/hero.jpg') center/cover no-repeat;
   ```
   ואת השורה עם `rgba(0,0,0,0.28)` תשאירי — היא האובך שמאפשר לטקסט להיקרא.

### About photo
1. שמי תמונה ב: `public/images/noam-may.jpg`
2. ב-`src/components/About.tsx`, הגיבי/מחקי את ה-`<div className="about-image-placeholder">` ושמי במקומו:
   ```tsx
   <img src="/images/noam-may.jpg" alt="נועם ומאי" />
   ```

## שינוי Tagline

ב-`src/components/Hero.tsx`, שורה:
```tsx
<p className="hero-tagline" dir="ltr">We're already there.</p>
```

## עדכון פרטי קשר

ב-`src/components/Contact.tsx`, שלוש השורות הראשונות:
```ts
const NOAM_WA = 'https://wa.me/972525662929'
const MAY_WA  = 'https://wa.me/972503444640'
const EMAIL   = 'mailto:noamgold2@gmail.com'
```
