/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui";
import Link from "next/link";

const Layout = ({ children }) => (
  <div>
    <Link href="/">
      <a>
        <h1>My Markdown Next.js Blog</h1>
      </a>
    </Link>
    <main>{children}</main>
  </div>
);

export const PostLayout = props => (
  <ThemeProvider
    theme={{
      styles: {
        // style child elements
        h1: {
          fontSize: [5, 6, 7]
        }
      }
    }}
  >
    <Link href="/">
      <a>
        <h1>My Markdown Next.js Blog</h1>
      </a>
    </Link>
    <div
      {...props}
      sx={{
        // swap colors for an inverted effect
        color: "background",
        bg: "primary",
        px: 3,
        py: 4
      }}
    />
  </ThemeProvider>
);

export default Layout;
