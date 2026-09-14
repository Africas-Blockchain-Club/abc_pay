import Link from "next/link";

export function PublicNav() {
  return (
    <div className="container nav">
      <Link className="brand" href="/">ABC<span>Pay</span></Link>
      <nav className="navLinks">
        <Link href="/login">Login</Link>
        <Link className="button primary" href="/register">Create account</Link>
      </nav>
    </div>
  );
}
