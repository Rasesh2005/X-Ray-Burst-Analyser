"use client";

import { useEffect, useState } from 'react';
import { SignIn } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const listener = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen pt-20">
      <SignIn
        appearance={{
          baseTheme: isDarkMode ? dark : null,
        }}
      />
    </div>
  );
}
