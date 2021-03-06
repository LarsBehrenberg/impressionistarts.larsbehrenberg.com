import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content, TextSection } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import '../styles/prism';

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${props => props.theme.colors.white.light};
  box-shadow: ${props => props.theme.shadow.suggestion};
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`;

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const {html, frontmatter, excerpt, fields} = data.markdownRemark
  const {date, title, tags, path, description, textSections} = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || ' '}
        banner={image}
        pathname={path}
        article
      />
      <Header title={title} date={date} cover={image} />
      <Container>
        {/* <Content input={html} /> */}
        {/* {fields.bodyTitle.map((value, index) => {
          // const totalText = fields.bodyTitle[index] + fields.bodyText[index];
          const {image1, image2, image3} = textSections[index].galleryImages
          return <TextSection title={fields.bodyTitle[index]} text={fields.bodyText[index]} image1={image1.childImageSharp.fluid.src} image2={image2.childImageSharp.fluid.src} image3={image3.childImageSharp.fluid.src}/>
        })} */}
        <TagsBlock list={tags || []} />
      </Container>

      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Next
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      fields {
        bodyTitle
        bodyText
      }
      frontmatter {
        date(formatString: "MM.DD.YYYY")
        title
        tags
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#d3d3d3", opacity: 20 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;
