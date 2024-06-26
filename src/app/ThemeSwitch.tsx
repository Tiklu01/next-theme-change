'use client';

import React, { useState, useEffect, Children } from 'react';
import { useTheme } from 'next-themes';
import ToggleButton from './ToggleButton';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const {theme,setTheme, resolvedTheme } = useTheme();

  console.log('Current theme:', theme);
  console.log('Resolved theme:', resolvedTheme);


  const light = () => {
    console.log('Switching to light theme');
    setTheme('light'); };
  const dark = () => {
    console.log('Switching to dark theme');
    setTheme('dark'); };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null
  }

  return ( <div className='flex justify-center '>
     <ToggleButton Click={resolvedTheme === 'dark' ? light : dark} />
  </div>
   
  );
}
