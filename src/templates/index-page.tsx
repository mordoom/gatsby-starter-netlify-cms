import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { Features } from '../components/Features';
import { BlogRoll } from '../components/BlogRoll';
import { makeStyles, Button, Container, Typography, Grid } from '@material-ui/core';

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
  <Container>
    <Typography variant="h3" component="h1">
      {props.mainpitch.title}
    </Typography>
    <Typography variant="body1" component="h3">
      {props.mainpitch.description}
    </Typography>
    <Typography variant="h3" component="h3">
      {props.heading}
    </Typography>
    <Typography variant="body1" component="p">
      {props.description}
    </Typography>
    <Features gridItems={props.blurbs} />
    <Grid container justify="center">
      <Link to="/products">
        <Button variant="contained" color="primary">
          See all products
        </Button>
      </Link>
    </Grid>
    <Typography variant="h3" component="h3">
      Latest stories
    </Typography>
    <BlogRoll />
    <Grid container justify="center">
      <Link to="/blog">
        <Button variant="contained" color="primary">
          Read more
        </Button>
      </Link>
    </Grid>
  </Container>
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
