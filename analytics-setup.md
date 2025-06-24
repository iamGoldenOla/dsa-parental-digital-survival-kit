# Analytics Setup Guide for DSA Parent Kit

This guide will help you configure all the analytics tools that have been added to your website.

## 🔧 Required Setup Steps

### 1. Google Analytics 4 (GA4)

1. **Create a GA4 Property:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Click "Start measuring"
   - Follow the setup wizard
   - Get your Measurement ID (format: G-XXXXXXXXXX)

2. **Replace Placeholder:**
   - Find `GA_MEASUREMENT_ID` in all HTML files
   - Replace with your actual GA4 Measurement ID (e.g., `G-ABC123DEF4`)

### 2. Google Tag Manager (GTM)

1. **Create a GTM Container:**
   - Go to [Google Tag Manager](https://tagmanager.google.com/)
   - Create a new account and container
   - Get your Container ID (format: GTM-XXXXXXX)

2. **Replace Placeholder:**
   - Find `GTM-XXXXXXX` in all HTML files
   - Replace with your actual GTM Container ID

### 3. Facebook Pixel

1. **Create a Facebook Pixel:**
   - Go to [Facebook Business Manager](https://business.facebook.com/)
   - Navigate to Events Manager
   - Create a new pixel
   - Get your Pixel ID

2. **Replace Placeholder:**
   - Find `YOUR_FACEBOOK_PIXEL_ID` in all HTML files
   - Replace with your actual Facebook Pixel ID

### 4. Hotjar

1. **Create a Hotjar Account:**
   - Go to [Hotjar](https://www.hotjar.com/)
   - Sign up for an account
   - Get your Site ID

2. **Replace Placeholder:**
   - Find `YOUR_HOTJAR_ID` in all HTML files
   - Replace with your actual Hotjar Site ID

## 📊 What Each Tool Tracks

### Google Analytics 4
- **Page views and sessions**
- **User demographics and behavior**
- **Traffic sources**
- **Conversion tracking**
- **Real-time data**

### Google Tag Manager
- **Centralized tag management**
- **Custom event tracking**
- **A/B testing setup**
- **Conversion tracking**

### Facebook Pixel
- **Website visitors**
- **Custom conversions**
- **Retargeting audiences**
- **Ad performance optimization**

### Hotjar
- **User behavior recordings**
- **Heatmaps**
- **Conversion funnels**
- **User feedback**

## 🎯 Recommended Custom Events

Add these custom events to track important user interactions:

```javascript
// Newsletter signup
gtag('event', 'sign_up', {
  method: 'newsletter'
});

// Toolkit download
gtag('event', 'download', {
  item_name: 'digital_safety_toolkit'
});

// Contact form submission
gtag('event', 'generate_lead', {
  form_name: 'contact_form'
});

// Guide reading
gtag('event', 'view_item', {
  item_name: 'social_media_safety_guide'
});
```

## 🔍 Verification Steps

1. **Test GA4:**
   - Use Google Analytics Real-Time reports
   - Check if pageviews are being tracked

2. **Test GTM:**
   - Use GTM Preview mode
   - Verify tags are firing correctly

3. **Test Facebook Pixel:**
   - Use Facebook Pixel Helper browser extension
   - Check if events are being sent

4. **Test Hotjar:**
   - Check Hotjar dashboard for recordings
   - Verify heatmaps are being generated

## 📱 Privacy Compliance

### GDPR Compliance
- Add cookie consent banner
- Implement data retention policies
- Provide opt-out mechanisms

### CCPA Compliance
- Add "Do Not Sell My Personal Information" link
- Implement opt-out mechanisms
- Update privacy policy

## 🛠️ Additional Recommendations

### 1. Enhanced E-commerce Tracking
```javascript
// Add to product pages
gtag('event', 'view_item', {
  items: [{
    item_id: 'toolkit_premium',
    item_name: 'Premium Digital Safety Toolkit',
    category: 'Digital Safety'
  }]
});
```

### 2. Custom Dimensions
Set up custom dimensions in GA4 for:
- User type (parent, educator, etc.)
- Content category
- Tool usage

### 3. Conversion Goals
Set up conversion goals for:
- Newsletter signups
- Toolkit downloads
- Contact form submissions
- Blog engagement

## 📈 Performance Monitoring

### Core Web Vitals
Monitor these metrics in GA4:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

### User Experience Metrics
- Bounce rate
- Session duration
- Pages per session
- Exit pages

## 🔧 Troubleshooting

### Common Issues:
1. **Analytics not tracking:** Check if ad blockers are enabled
2. **GTM not loading:** Verify container ID is correct
3. **Facebook Pixel errors:** Check pixel ID and event setup
4. **Hotjar not recording:** Verify site ID and domain settings

### Debug Tools:
- Google Analytics Debugger (Chrome extension)
- Facebook Pixel Helper (Chrome extension)
- GTM Preview mode
- Hotjar Debug mode

## 📞 Support Resources

- [Google Analytics Help Center](https://support.google.com/analytics/)
- [Google Tag Manager Help](https://support.google.com/tagmanager/)
- [Facebook Pixel Documentation](https://developers.facebook.com/docs/facebook-pixel/)
- [Hotjar Help Center](https://help.hotjar.com/)

---

**Note:** Replace all placeholder IDs with your actual tracking IDs before going live. Test thoroughly in a staging environment first. 