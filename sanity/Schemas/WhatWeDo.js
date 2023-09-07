export default {
  name: "whatwedo",
  title: "What we do",
  type: "document",
  fields: [
    {
      name: "programs",
      type: "array",
      title: "Programs",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "image",
              type: "image",
              title: "Image",
              option: {
                hotspot: "true",
              },
            },
            {
              name: "description",
              title: "Description",
              type: "array",
              of: [
                {
                  type: "block",
                },
                { type: "image" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "caseStudies",
      type: "array",
      title: "Case Studies",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "logo",
              type: "image",
              title: "Logo",
              option: {
                hotspot: "true",
              },
            },
            {
              name: "description",
              title: "Description",
              type: "array",
              of: [
                {
                  type: "block",
                },
                { type: "image" },
              ],
            },
            {
              name: "link",
              title: "Link",
              type: "string",
            },
          ],
        },
      ],
    },
    
  ],
};
