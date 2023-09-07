export default {
  name: "about",
  title: "About Us",
  type: "document",
  fields: [
    {
      name: "aboutSection",
      title: "About Section",
      type: "array",
      of: [
        {
          type: "block",
        },
        { type: "image" },
      ],
    },
    {
      name: "blockSection",
      title: "About Block Section",
      type: "array",
      of: [
        {
          type: "block",
        },
        { type: "image" },
      ],
    },

    {
      name: "tagline",
      title: "Tagline & Image",
      type: "array",
      of: [
        {
          type: "block",
        },
        { type: "image" },
      ],
    },

    {
      name: "sectionTwo",
      type: "array",
      title: "Vision, Mission, Values",
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
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
