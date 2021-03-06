import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import BlogStyles from './blog.module.scss'
import Head from "../components/head"


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields:publishedDate,
          order:DESC
        }
      ){
        edges {
          node {
            title
            slug
            publishedDate (formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog"/>
      <h1>Blog</h1>
      <ol className={BlogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(item => {
          return (
            <li className={BlogStyles.post}>
              <Link to={`/blog/${item.node.slug}`}>
                <h2>{item.node.title}</h2>
                <p>{item.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
