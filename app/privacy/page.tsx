import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'سياسة الخصوصية' };

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-10 shadow-card">
          <h1 className="text-3xl font-black text-navy-900 mb-2">سياسة الخصوصية</h1>
          <p className="text-gray-400 text-sm mb-8">آخر تحديث: يناير 2025</p>
          <div className="prose prose-sm max-w-none text-gray-600 space-y-6 leading-8">
            <p>تلتزم شركة محمد الحبيشي العقارية بحماية خصوصية مستخدمي موقعنا الإلكتروني. تشرح هذه السياسة كيفية جمع المعلومات واستخدامها وحمايتها.</p>
            <h2 className="font-black text-navy-900 text-lg">المعلومات التي نجمعها</h2>
            <p>نجمع المعلومات التي تزودنا بها طوعاً عند التواصل معنا أو تعبئة النماذج، مثل الاسم ورقم الهاتف والبريد الإلكتروني.</p>
            <h2 className="font-black text-navy-900 text-lg">كيف نستخدم المعلومات</h2>
            <p>نستخدم المعلومات المجمعة للرد على استفساراتك وتقديم الخدمات العقارية المطلوبة وإرسال التحديثات ذات الصلة.</p>
            <h2 className="font-black text-navy-900 text-lg">حماية المعلومات</h2>
            <p>نطبق معايير أمنية صارمة لحماية بياناتك الشخصية ولا نشارك معلوماتك مع أطراف ثالثة إلا بموافقتك.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
