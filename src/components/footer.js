import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import FooterStyle from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
    `)
    return (
        <footer className={FooterStyle.footer}>
            <p>Created by {data.site.siteMetadata.author}, © 2020</p>
        </footer>
    )
}

export default Footer;