import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Here is my phone number: 082250393940</p>
      <p>
        Need a developer? Contact me via Twitter:{" "}
        <a href="https://twitter.com/shifairs" target="_blank">
          @shifairs
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
