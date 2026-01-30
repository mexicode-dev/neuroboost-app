import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src="/next.svg" alt="NeuroBoost logo" width={60} height={60} />
      <span className="text-xl font-semibold text-primary-100">Neuroboost</span>
    </Link>
  );
}
