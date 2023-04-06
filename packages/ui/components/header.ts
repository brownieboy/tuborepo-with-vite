export function Header({ title }: { title: string }) {
  return `
    <header id="header">
      <h1>Here's The ${title}</h1>
    </header>
    `;
}
