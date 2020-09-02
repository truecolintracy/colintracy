import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export default function SEO({ description, lang, meta, keywords, title, article }) {
  return (
    <StaticQuery
			query={detailsQuery}
			render={data => {
				const metaDescription = description || data.site.siteMetadata.description
				return (
					<Helmet
						htmlAttributes={{
							lang,
						}}
						title={title}
						titleTemplate={`%s | ${data.site.siteMetadata.title}`}
						meta={[
							{
								name: `description`,
								content: metaDescription,
							},
							{
								name: `geo.region`,
								content: data.site.siteMetadata.region,
							},
							{
								name: `geo.position`,
								content: data.site.siteMetadata.position,
							},
							{
								name: `ICBM`,
								content: data.site.siteMetadata.position,
							},
							{
								property: `fb:profile_id`,
								content: data.site.siteMetadata.facebookId,
							},
							{
								property: `og:locale`,
								content: lang,
							},
							{
								property: `og:url`,
								content: data.site.siteMetadata.pathname,
							},
							{
								property: `og:title`,
								content: title,
							},
							{
								property: `og:description`,
								content: metaDescription,
							},
							{
								property: `og:image`,
								content: data.site.siteMetadata.image,
							},
							{
								property: `og:type`,
								content: `${article ? 'article' : 'website'}`,
							},
							{
								property: `og:see_also`,
								content: data.site.siteMetadata.facebookUrl,
							},
							{
								property: `og:see_also`,
								content: data.site.siteMetadata.instagramUrl,
							},
							{
								property: `og:see_also`,
								content: data.site.siteMetadata.youtubeUrl,
							},
							{
								name: `twitter:card`,
								content: `summary`,
							},
							{
								name: `twitter:creator`,
								content: data.site.siteMetadata.twitterUsername,
							},
							{
								name: `twitter:title`,
								content: title,
							},
							{
								name: `twitter:description`,
								content: metaDescription,
							},
							{
								name: `twitter:image`,
								content: data.site.siteMetadata.image
							}
							]
							.concat(
								keywords.length > 0
										? {
												name: `keywords`,
												content: keywords.join(`, `),
										}
										: []
							)
							.concat(meta)}
						/>
						)
					}}
			/>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	keywords: [],
	article: false
}

SEO.propTypes = {
	// eslint-disable-next-line react/require-default-props
	description: PropTypes.string,
	lang: PropTypes.string,
	// eslint-disable-next-line react/forbid-prop-types
	meta: PropTypes.array,
	keywords: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired,
	article: PropTypes.bool
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        pathname
        description
        keywords
        image
        region
        position
        facebookId
        twitterUsername
        facebookUrl
        instagramUrl
        youtubeUrl
      }
    }
  }
`;