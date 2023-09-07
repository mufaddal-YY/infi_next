export default {
  name: "howWeDo",
  title: "How we Do It",
  type: "document",
  fields: [
    {
      name: "head",
      type: "string",
      title: "Headline",
    },
    {
      name: "tagline",
      type: "string",
      title: "Tagline",
    },
    {
      name: "process",
      type: "array",
      title: "Our Process",
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
      name: "whyChoose",
      type: "array",
      title: "Why Choose Us",
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
              name: "image",
              type: "image",
              title: "Image",
              option: {
                hotspot: "true",
              },
            },
          ],
        },
      ],
    },
  ],
};
