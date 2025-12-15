# Sanity Activities Integration Guide

Your activities are now connected to Sanity CMS! Here's how to use it:

## 🚀 Getting Started

### 1. Start Sanity Studio
```bash
cd sanity
npm run dev
```
This will start Sanity Studio (usually at http://localhost:3333)

### 2. Access Studio in Your App
Alternatively, start your Next.js app and go to:
```
http://localhost:3000/studio
```

## 📝 Creating Activities in Sanity

### Required Fields:
- **Title**: Activity name (e.g., "Summer School")
- **Slug**: URL-friendly identifier (auto-generated from title, click "Generate")
- **Short Description**: Brief summary (max 200 chars)
- **Date**: Display date (e.g., "Summer 2024", "March 2024")
- **Main Image**: Primary activity image

### Optional Fields:
- **Overview**: Detailed description for detail page
- **Details**: Additional details (fallback for overview)
- **Location**: Where the activity took place
- **Objectives**: List of activity goals
- **Highlights**: Key features (title + description pairs)
- **Statistics**: Numbers (value + label, e.g., "80+ Participants")
- **Organizers**: List of organizing bodies
- **Gallery**: Additional images for the detail page

## 🎨 How It Works

### Activities Listing Page (`/activities`)
- Fetches all activities from Sanity using `getStaticProps`
- Falls back to default activities if Sanity is empty
- Displays cards with spotlight and canvas reveal effects
- Automatically uses Sanity images with optimization

### Activity Detail Page (`/activities/[slug]`)
- Fetches specific activity by slug
- Uses ISR (Incremental Static Regeneration) - revalidates every 60 seconds
- Falls back to static data if activity not found
- Displays full activity details with gallery

## 🔄 Data Flow

```
Sanity Studio → Create/Edit Activity → Save
                        ↓
Next.js fetches data via Sanity client
                        ↓
Pages regenerate every 60 seconds (ISR)
                        ↓
Users see updated content
```

## 🖼️ Image Handling

Images are automatically optimized using Sanity's image URL builder:
- **Listing cards**: 300x300px
- **Detail header**: 800x600px
- **Gallery images**: 600x400px

## 📋 Example Activity Creation

1. Go to Sanity Studio
2. Click "Activity" → "Create"
3. Fill in:
   - Title: "National Robotics Weekend"
   - Click "Generate" for slug
   - Short Description: "Annual robotics competition"
   - Date: "March 2024"
   - Upload Main Image
   - Add Overview text
   - Add Objectives (click + to add items):
     - "Host premier robotics competition"
     - "Encourage innovation"
   - Add Highlights (click + to add objects):
     - Title: "Line Following", Description: "Autonomous navigation challenge"
   - Add Statistics:
     - Value: "200+", Label: "Participants"
   - Add Organizers: "IEEE INSAT RAS"
   - Upload Gallery images
4. Click "Publish"
5. View on your website at `/activities/national-robotics-weekend`

## 🔧 Troubleshooting

### Activities not showing up?
1. Make sure Sanity Studio is published (not just saved as draft)
2. Wait 60 seconds for ISR to pick up changes
3. Check console for any fetch errors

### Images not loading?
1. Verify images are uploaded in Sanity
2. Check that `projectId` and `dataset` are correct in `sanity/env.js`
3. Ensure images are published, not drafts

### Want immediate updates?
Change `revalidate: 60` to a lower number in both:
- `pages/activities.js`
- `pages/activities/[slug].js`

## 📁 Key Files Modified

- ✅ `sanity/schemaTypes/activities.js` - Enhanced schema
- ✅ `pages/activities.js` - Added getStaticProps to fetch activities
- ✅ `pages/activities/[slug].js` - Added getStaticPaths and getStaticProps
- ✅ `components/activitiesnew/activitiesnew.js` - Accepts activities prop
- ✅ `components/activitydetail/activitydetail.js` - Handles Sanity images

## 🎯 Next Steps

1. **Start Sanity Studio** and create your first activity
2. **Test the flow** by creating an activity and viewing it on the site
3. **Customize** the schema if you need additional fields
4. **Deploy** both Next.js app and Sanity Studio to production

## 🌐 Production Deployment

### Deploy Sanity Studio:
```bash
cd sanity
npm run deploy
```

### Deploy Next.js:
Your activities will automatically fetch from Sanity in production!

---

Need help? Check the Sanity docs: https://www.sanity.io/docs
