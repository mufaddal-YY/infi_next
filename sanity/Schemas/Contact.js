export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
      {
        name: 'bannerHead',
        type: 'string',
        title: 'Banner Headline',      
      },
      {
        name: 'bannerTag',
        type: 'string',
        title: 'Banner Tagline',      
      },
      {
        name: 'bannerDescription',
        title: 'Banner Description',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          { type: 'image' },
        ]
      },
      {
        name: 'sectionDesc',
        title: 'Section 2',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          { type: 'image' },
        ]
      },
      {
        name: 'whyLuminosa',
        type: 'string',
        title: 'Why Luminosa Head',
        
      },
      {
        name: 'whyImage',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: 'true',
        },
      },
      {
        name: 'whyLuminosaDesc',
        type: 'string',
        title: 'Why Luminosa Description',
        
      },
      {
        name: 'industry',
        type: 'array',
        title: 'Industry',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'industryTitle',
                title: 'Industry Title',
                type: 'string',
              },
              {
                name: 'industryImage',
                type: 'image',
                title: 'Image',
                option: {
                    hotspot: 'true',
                  },
              },
            ]
          }
        ]
      },
    ]
  }
  
  