'use client';

import {useRouter} from 'next/navigation';

export default function SwitcherComponent() {
  const router = useRouter();

  const handleChange = (e) => {
    const locale = e.target.value;
    router.push(`/${locale}`);
  };

  return (
    <select onChange={handleChange}>
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}