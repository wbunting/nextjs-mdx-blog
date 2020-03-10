/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { Card } from "theme-ui";

import Layout from "../components/Layout";

function importAll(r) {
  return r.keys().map(r);
}

const blogItems = importAll(require.context("./blog", false, /.mdx$/));

const IndexItem = ({ title, description, icon, slug }) => (
  <Link href={slug}>
    <Card sx={{ mb: 2 }}>
      <a>
        <h2>{`${icon} ${title}`}</h2>
      </a>
      <p>{description}</p>
    </Card>
  </Link>
);

const BlogHome = () => (
  <Layout>
    {blogItems.map(item => (
      <IndexItem {...item.meta} />
    ))}
  </Layout>
);

export default BlogHome;
