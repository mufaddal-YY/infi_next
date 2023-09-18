export default {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "bannerHead",
      type: "string",
      title: "Banner Headline",
    },

    {
      name: "sectionHead",
      title: "Section 2",
      type: "string",
    },
    {
      name: "stats",
      type: "array",
      title: "Stats",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "description",
              title: "Description",
              type: "string",
            },
            {
              name: "number",
              title: "Number",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "slider",
      type: "array",
      title: "Slider",
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
    {
      name: "services",
      type: "array",
      title: "Services",
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
              name: "icon",
              type: "image",
              title: "Icon",
              options: {
                hotspot: "true",
              },
            },
          ],
        },
      ],
    },
    {
      name: "whowework",
      type: "array",
      title: "Who we work with",
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
            {
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: "true",
              },
            },
          ],
        },
      ],
    },
    {
      name: "skills",
      type: "array",
      title: "Skills & Emerging Technologies",
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
              options: {
                hotspot: "true",
              },
            },
          ],
        },
      ],
    },
    {
      name: "gallery",
      type: "array",
      title: "Gallery",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
            {
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: "true",
              },
            },
          ],
        },
      ],
    },
    {
      name: "platforms",
      type: "array",
      title: "Platforms we specialize",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
            {
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: "true",
              },
            },
          ],
        },
      ],
    },

    {
      name: "slc",
      title: "SLC",
      type: "array",
      of: [
        {
          type: "block",
        },
        { type: "image" },
      ],
    },
    {
      name: "partnerships",
      type: "array",
      title: "Partnerships",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "caption",
              title: "Caption",
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
          ],
        },
      ],
    },
    {
      name: "cta",
      title: "CTA",
      type: "array",
      of: [
        {
          type: "block",
        },
        { type: "image" },
      ],
    },
  ],
};
