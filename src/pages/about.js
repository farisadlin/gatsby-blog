import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"


const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>About</h1>
      <p>I'm Faris, a full-stack developer living in beautiful Yogyakarta</p>
      <p>
        Here is my full contact page. You can click right here{" "}
        <Link to="/contact">contact page</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
