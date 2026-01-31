export default function AppLayout({ children }: any) {
  return (
    <div>
      <header>
        <strong>NeuroBoost App</strong>
      </header>

      <div style={{ display: 'flex', gap: 16 }}>
        <aside style={{ width: 220 }}>Sidebar (placeholder)</aside>

        <main>{children}</main>
      </div>
    </div>
  );
}
