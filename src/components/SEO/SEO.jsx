import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title = "Athul Sabu | Web Developer ",
  description = "Professional portfolio showcasing web development projects, skills, and experience in React, JavaScript, and more.",
  keywords = "portfolio, web developer, frontend, react, javascript",
  canonicalUrl,
  ogImage = "/images/profile-pic.png",
  ogType = "website"
}) => {
  const siteUrl = window.location.origin;
  const currentUrl = canonicalUrl || window.location.href;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Structured Data - Basic Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Athul Sabu',
          url: siteUrl,
          jobTitle: 'Web Developer',
          worksFor: {
            '@type': 'Organization',
            name: 'Freelance'
          },
          sameAs: [
            'https://github.com/AthulSabu2002/',
            'https://www.linkedin.com/in/athul-sabu-417a5327b/',
          ]
        })}
      </script>
      
      {/* StatCounter tracking code */}
      <script type="text/javascript">
        {`
          var sc_project=13147868; 
          var sc_invisible=1; 
          var sc_security="a1da2c07";
        `}
      </script>
      <script type="text/javascript" src="https://www.statcounter.com/counter/counter.js" async></script>
      <noscript>
        {`
          <div class="statcounter">
            <a title="Web Analytics Made Easy - Statcounter" href="https://statcounter.com/" target="_blank">
              <img class="statcounter" src="https://c.statcounter.com/13147868/0/a1da2c07/1/" alt="Web Analytics Made Easy - Statcounter" referrerPolicy="no-referrer-when-downgrade">
            </a>
          </div>
        `}
      </noscript>
    </Helmet>
  );
};
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonicalUrl: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string
};

export default SEO;