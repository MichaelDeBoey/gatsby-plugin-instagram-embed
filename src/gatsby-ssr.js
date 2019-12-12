import React from 'react';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link
      key="gatsby-plugin-instagram-preconnect-0"
      rel="preconnect"
      href="https://instagram.com"
    />,
  ]);

  setPostBodyComponents([
    <script
      key="gatsby-plugin-instagram"
      dangerouslySetInnerHTML={{
        __html: `
        window.gatsbyLoadInstagram = function() {
          var js = document.createElement('script');
          var firstScript = document.getElementsByTagName('script')[0];
          js.id = 'gatsby-plugin-instagram';
          js.src = 'https://instagram.com/embed.js';

          firstScript.parentNode.insertBefore(js, firstScript);

          return true;
        }
      `,
      }}
    />,
  ]);
};
