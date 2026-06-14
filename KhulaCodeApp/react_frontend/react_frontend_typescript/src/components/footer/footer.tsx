import FooterDark from './footer-dark'

// The site uses a single footer everywhere. `Footer` is kept as a thin
// wrapper around `FooterDark` so the ~20 pages that import it stay in sync
// without touching each import.
export default function Footer() {
  return <FooterDark />
}
