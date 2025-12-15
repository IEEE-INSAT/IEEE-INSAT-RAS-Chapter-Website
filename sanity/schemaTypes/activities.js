export default {
  name: "activity",
  title: "Activity",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(100)
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(200)
    },
    {
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 5,
      description: "Detailed overview for the activity detail page"
    },
    {
      name: "details",
      title: "Details",
      type: "text",
      rows: 3,
      description: "Additional details (used as fallback for overview)"
    },
    {
      name: "date",
      title: "Date",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Display date (e.g., 'Summer 2024', 'March 2024')"
    },
    {
      name: "location",
      title: "Location",
      type: "string"
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: "objectives",
      title: "Objectives",
      type: "array",
      of: [{ type: "string" }],
      description: "List of activity objectives"
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required()
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required()
            }
          ]
        }
      ]
    },
    {
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              title: "Value",
              type: "string",
              validation: (Rule) => Rule.required()
            },
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required()
            }
          ]
        }
      ]
    },
    {
      name: "organizers",
      title: "Organizers",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "image"
    }
  }
};
