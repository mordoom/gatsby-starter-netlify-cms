import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { Features } from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  fullWidthImage: {
    width: '100vw',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: `top left`,
    backgroundAttachment: `fixed`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    height: '150px',
    lineHeight: '1',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  heading: {
    color: 'white',
    lineHeight: '1',
    padding: '0.25em',
    fontSize: '3rem',
    fontWeight: 700,
  },
  subheading: {
    color: 'white',
    lineHeight: '1',
    padding: '0.25em',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 700,
  },
}));

const Title = ({ image, title, subheading }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.fullWidthImage}
      style={{
        backgroundImage: `url(${image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
      }}
    >
      <div className={classes.textContainer}>
        <h1 className={classes.heading}>{title}</h1>
        <h3 className={classes.subheading}>{subheading}</h3>
      </div>
    </div>
  );
};

const PageContent = (props) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="content">
                <div className="tile">
                  <h1 className="title">{props.mainpitch.title}</h1>
                </div>
                <div className="tile">
                  <h3 className="subtitle">{props.mainpitch.description}</h3>
                </div>
              </div>
              <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">{props.heading}</h3>
                  <p>{props.description}</p>
                </div>
              </div>
              <Features gridItems={props.blurbs} />
              <div className="columns">
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/products">
                    See all products
                  </Link>
                </div>
              </div>
              <div className="column is-12">
                <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
                <BlogRoll />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/blog">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { image, title, subheading, heading, mainpitch, description, intro } = frontmatter;
  return (
    <Layout>
      <Title image={image} title={title} subheading={subheading} />
      <PageContent
        heading={heading}
        mainpitch={mainpitch}
        description={description}
        blurbs={intro.blurbs}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
