import React from "react";
// import { graphql } from "gatsby";
import { Box, Typography } from "@material-ui/core";
import SEO from "../components/SEO";

export default function Index() {

  return (
    <Box>
      <SEO title="Home" />
      <Box>
        <Typography>Hello THere</Typography>
      </Box>
    </Box>
  );
}

// export const query = graphql`
//   query HomePage {
//     craft {
//       content: entry(siteId: 2, id: 344) {
//         ... on CRAFT_EqHome {
//           id
//           slug
//           backgroundImage {
//             url
//           }
//           aboveFoldContentJustify
//           aboveFoldHeadline
//           aboveFoldContent {
//             content
//           }
//           aboveTheFoldCallToAction {
//             ... on CRAFT_AboveTheFoldCallToActionCallToAction {
//               buttonText
//               buttonColor
//               buttonUrl
//               buttonType
//             }
//           }
//           listBlockHeadline
//           listBlock {
//             ... on CRAFT_ListBlockBlockList {
//               icon {
//                 url
//               }
//               headline
//               listContent {
//                 content
//               }
//               listBlockLink
//             }
//           }
//           sectionBackgroundImage {
//             url
//           }
//           sectionHeadline
//           sectionImage {
//             url
//           }
//           sectionContent {
//             content
//           }
//           halfBlockComponent {
//             ... on CRAFT_HalfBlockComponentGraphicBlock {
//               graphic {
//                 url
//               }
//               graphicOverlay {
//                 url
//               }
//               backgroundColor {
//                 hex
//               }
//             }
//             ... on CRAFT_HalfBlockComponentContentBlock {
//               position
//               headline
//               blockContent
//               callToActionContent
//               callToActionButtonBackgroundColor
//               callToActionLink
//               backgroundTransparency
//               backgroundColor {
//                 hex
//               }
//               backgroundImage {
//                 url
//               }
//             }
//           }
//         }
//       }
//       testimonials: entry(siteId: 2, id: 347) {
//         ... on CRAFT_Testimonials {
//           id
//           title
//           testimonials {
//             ... on CRAFT_TestimonialsTestimonials {
//               id
//               featured
//               testimonial {
//                 content
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;