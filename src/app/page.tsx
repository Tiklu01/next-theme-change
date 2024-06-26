import React from 'react';
import ThemeSwitch from './ThemeSwitch';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeSwitch />
    </main>
  );
}
