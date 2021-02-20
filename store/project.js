import gql from 'graphql-tag'


export const state = () => ({
  sliderProject: [],
  pageProject: [],
  total: null,
  totalPages: null,
})

export const mutations = {
  setSliderProject(state, projects) {
    state.sliderProject = projects
    console.log(state.sliderProject)
  },
  setPageProject(state, payload) {
    state.pageProject = payload.project
    state.total = payload.total
    state.totalPages = payload.totalPages
  },
}

export const actions = {
  async fetchProjectToSlider({commit}) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
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
      `
    })
    const projects = response.data.projects.nodes
    commit('setSliderProject', projects)
  },
  async fetchPageProject({commit}) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
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
      `
    })

    const projects = response.data.project.edges.node
    const total = null
    const totalPages = null

    commit('setPageProject', {
      projects,
      total,
      totalPages
    })
  },
}
