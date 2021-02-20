import gql from 'graphql-tag'

export default {
  sliderProjects: gql`
      query sliderProjects {
          projects(first: 5) {
              nodes {
                  title
                  excerpt
                  uri
                  featuredImage {
                      node {
                          sourceUrl
                      }
                  }
              }
          }
      }
  `,
  pageProjects: gql`
      query pageProjects {
          projects {
              nodes {
                  title
                  excerpt
                  uri
                  featuredImage {
                      node {
                          sourceUrl
                      }
                  }
              }
          }
      }
  `,
}
