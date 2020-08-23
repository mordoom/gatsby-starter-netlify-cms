import React from 'react';

import { Layout } from '../../components/Layout';
import { BlogRoll } from '../../components/BlogRoll';
import { TitleImage } from '../../components/TitleImage';

export default () => (
  <Layout>
    <TitleImage image="/img/blog-index.jpg">
      <h1
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
        }}
      >
        Latest Stories
      </h1>
    </TitleImage>
    <section className="section">
      <div className="container">
        <div className="content">
          <BlogRoll />
        </div>
      </div>
    </section>
  </Layout>
);
