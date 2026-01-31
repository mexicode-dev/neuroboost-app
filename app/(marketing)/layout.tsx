import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

export default function MarketingLayout({ children }: any) {
  return (
    <>
      <header>
        <Logo />
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
}
