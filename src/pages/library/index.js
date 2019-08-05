import React from "react"
import Banner from '../../components/banner'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ramenIcon from '../../images/icons/ramen.svg'
import styles from './styles/index.module.scss'

const SecondPage = () => (
  <Layout header="Ramen UI">
    <SEO title="Page two" />
    <Banner>
      <img className={styles.headerIcon} src={ramenIcon} />
      <h1>RamenUI</h1>
    </Banner>
  </Layout>
)

export default SecondPage
