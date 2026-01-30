import Link from 'next/link';

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/pricing">Explore pricing</Link>
      </li>
      <li>
        <Link href="/about">About Neuroboost</Link>
      </li>
    </ul>
  );
}
