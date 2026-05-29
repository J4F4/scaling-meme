# محمد الحبيشي العقارية

موقع عقاري احترافي كامل مبني بـ Next.js 14 + Tailwind CSS

## 🚀 تشغيل المشروع محلياً

```bash
# 1. ثبّت التبعيات
npm install

# 2. شغّل خادم التطوير
npm run dev

# 3. افتح المتصفح على
http://localhost:3000
```

## 📦 بناء للإنتاج

```bash
npm run build
npm start
```

## 🌐 النشر على Vercel

### الطريقة الأولى: عبر CLI
```bash
# ثبّت Vercel CLI
npm i -g vercel

# انشر المشروع
vercel

# انشر للإنتاج
vercel --prod
```

### الطريقة الثانية: عبر GitHub + Vercel Dashboard
1. ارفع المشروع على GitHub
2. اذهب إلى vercel.com
3. اضغط New Project → استيراد المستودع
4. اضغط Deploy — سينشر تلقائياً!

### ربط دومين مخصص
1. في لوحة Vercel → Project Settings → Domains
2. أضف دومينك (مثال: alhabishi.com)
3. في إعدادات DNS عند مزود الدومين أضف:
   - سجل A: @ → 76.76.21.21
   - سجل CNAME: www → cname.vercel-dns.com
4. انتظر 24-48 ساعة للتفعيل

## 📁 هيكل المشروع

```
app/               - صفحات Next.js
  page.tsx         - الصفحة الرئيسية
  properties/      - العقارات + التفاصيل
  map/             - الخريطة التفاعلية
  about/           - من نحن
  contact/         - تواصل معنا
  services/        - خدماتنا
  projects/        - المشاريع
  admin/           - لوحة التحكم
components/        - المكونات
data/              - البيانات التجريبية
types/             - TypeScript types
```

## ✨ الميزات

- RTL عربي احترافي
- تصميم Luxury + Minimal
- Responsive كامل
- خريطة تفاعلية (Leaflet) بدون API key
- فلترة وبحث متقدم
- بطاقات عقارية احترافية
- زر واتساب عائم
- SEO محسّن
- لوحة تحكم للإدارة

## 🎨 الألوان والخطوط

- Navy: #0A1628, #1e3a5f
- Gold: #c9a96e, #d4a843
- خط: Cairo + Tajawal (Google Fonts)
