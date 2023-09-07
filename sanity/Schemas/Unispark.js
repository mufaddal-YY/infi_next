export default {
  name: "unispark",
  title: "Unispark",
  type: "document",
  fields: [
    {
      name: "bannerHead",
      type: "string",
      title: "Banner Headline",
    },
    {
      name: "bannerTag",
      type: "string",
      title: "Banner Tagline",
    },
    {
      name: "bannerImage",
      type: "image",
      title: "Banner Image",
      options: {
        hotspot: "true",
      },
    },
    {
      name: "sectionImage",
      type: "image",
      title: "Section Image",
      options: {
        hotspot: "true",
      },
    },

    {
      name: "sectionDescription",
      title: "Section Description",
      type: "array",
      of: [
        {
          type: "block",
        },
        { type: "image" },
      ],
    },
    {
      name: "curriculum",
      type: "array",
      title: "Course Curriculum",
      of: [
        {
          type: "object",
          fields: [
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
      name: "perks",
      type: "array",
      title: "Perks",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              type: "string",
              title: "Icon Svg",
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
      name: "learningPath",
      type: "array",
      title: "Learning Path",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "description",
              type: "string",
              title: "Description",
            },
            {
              name: "innerDescription",
              type: "array",
              title: "Inner Description",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      type: "string",
                      title: "Title",
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
          ],
        },
      ],
    },
    {
      name: "placement",
      type: "array",
      title: "Placement Partners",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "logo",
              type: "image",
              title: "Logo",
              option: {
                hotspot: "true",
              },
            },
          ],
        },
      ],
    },
    {
      name: "benefits",
      type: "array",
      title: "Benefits",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
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
  ],
};
