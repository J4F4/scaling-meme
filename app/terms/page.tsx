import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'الشروط والأحكام' };

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-10 shadow-card">
          <h1 className="text-3xl font-black text-navy-900 mb-2">الشروط والأحكام</h1>
          <p className="text-gray-400 text-sm mb-8">آخر تحديث: يناير 2025</p>
          <div className="text-gray-600 space-y-6 leading-8 text-sm">
            <p>باستخدام موقع شركة محمد الحبيشي العقارية، فإنك توافق على الالتزام بهذه الشروط والأحكام.</p>
            <h2 className="font-black text-navy-900 text-lg">استخدام الموقع</h2>
            <p>يُسمح باستخدام هذا الموقع للأغراض المشروعة فقط. يُحظر استخدام الموقع لأي غرض غير قانوني أو مخالف لهذه الشروط.</p>
            <h2 className="font-black text-navy-900 text-lg">المعلومات العقارية</h2>
            <p>المعلومات المعروضة على الموقع للأغراض الإعلامية فقط. نحتفظ بالحق في تعديل أسعار وتفاصيل العقارات دون إشعار مسبق.</p>
            <h2 className="font-black text-navy-900 text-lg">المسؤولية</h2>
            <p>لا تتحمل الشركة المسؤولية عن أي أضرار ناتجة عن استخدام المعلومات المقدمة على الموقع دون التحقق المباشر منها.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
