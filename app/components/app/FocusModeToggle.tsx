'use client';

import { useState } from 'react';

export default function FocusModeToggle() {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <button onClick={() => setIsFocus((v) => !v)}>Focus mode: {isFocus ? 'ON' : 'OFF'}</button>
  );
}
