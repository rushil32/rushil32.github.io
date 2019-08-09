import React, { useState } from "react"
import Banner from "../../components/banner"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ramenIcon from "../../images/icons/ramen.svg"
import styles from "./styles/index.module.scss"
import Instructions from "./Instructions"
import Demo from "./Demo"
import Modal from "../../components/modal"
import Button from "../../components/button"

const LibraryPage = ({
  data: {
    allMarkdownRemark: { edges = [] },
  },
}) => {
  const [showDocModal, setShowDocModal] = useState(false)
  const [selectedComponent, setSelectedComponent] = useState(null)

  function toggleModal() {
    setShowDocModal(!showDocModal)
  }

  function selectComponent(title) {
    setSelectedComponent(title)
  }

  function renderDemo(title, demoContent) {
    return (
      <Demo
          title={title}
          toggleModal={title => {
            selectComponent(title)
            toggleModal()
          }}
        >
          {demoContent}
      </Demo>
    )
  }

  const docs = edges.find(
    item => item.node.frontmatter.title === selectedComponent
  )

  return (
    <Layout header="Ramen UI">
      <SEO title="Ramen UI" />
      <Banner>
        <img className={styles.headerIcon} src={ramenIcon} />
        <h1>RamenUI</h1>
      </Banner>
      <Instructions />
      <div className={styles.components}>
        <h2>Components</h2>
        <Modal
          show={showDocModal}
          header={selectedComponent}
          icon="notes"
          toggleModal={toggleModal}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: docs ? docs.node.html : "<p>No docs found</p>",
            }}
          />
        </Modal>
        {renderDemo('Buttons', (
          <div>
            <Button style="primary">Click Me</Button>
            <Button style="secondary">Click Me</Button>
            <Button style="default">Click Me</Button>
            <Button style="primaryLink">Click Me</Button>
            <Button style="secondaryLink">Click Me</Button>
          </div>
        ))}
        {renderDemo('Banner', (
          <div>
            <Banner theme="secondary">
              <h1>A Sweet Header</h1>
            </Banner>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default LibraryPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/docs/" } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`
