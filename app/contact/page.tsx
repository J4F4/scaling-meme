'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import type { Metadata } from 'next';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', subject: '', message: '', propertyType: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-navy relative overflow-hidden">
        {/* Logo watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
          <div className="relative w-[85vw] max-w-[700px] aspect-square opacity-[0.10]">
            <Image src="/logo.jpg" alt="" fill className="object-contain filter brightness-0 invert" />
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 border border-gold-500/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            نحن هنا لمساعدتك
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">تواصل معنا</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-8">
            فريقنا جاهز للإجابة على استفساراتك ومساعدتك في العثور على عقارك المثالي
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-black text-navy-900 text-lg mb-6">معلومات التواصل</h3>
                <div className="space-y-5">
                  {[
                    { icon: MapPin, label: 'عنواننا', text: 'الرياض، حي العليا\nطريق الملك فهد' },
                    { icon: Phone, label: 'للإيجار', text: '0573 888 610' },
                    { icon: Phone, label: 'للبيع', text: '0573 888 605' },
                    { icon: Phone, label: 'مبيعات', text: '0573 888 604' },
                    { icon: Phone, label: 'خدمة العملاء', text: '0573 888 601' },
                    { icon: Mail, label: 'البريد', text: 'info@example.com' },
                    { icon: Clock, label: 'أوقات العمل', text: 'السبت – الخميس: 9ص – 9م\nالجمعة: 4م – 9م' },
                  ].map(({ icon: Icon, label, text }) => (
                    <div key={label} className="flex gap-4">
                      <div className="w-11 h-11 bg-navy-900/5 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-gold-500" />
                      </div>
                      <div>
                        <p className="font-bold text-navy-900 text-sm mb-1">{label}</p>
                        <p className="text-gray-500 text-sm leading-6 whitespace-pre-line">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="bg-navy-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-base mb-4">تابعنا على</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'قناة واتساب', handle: 'انضم الآن', href: 'https://whatsapp.com/channel/0029VaPvG7pBfxo3NHfsoD0z', color: '#25D366' },
                    { name: 'روابطنا', handle: 'Linktree', href: 'https://linktr.ee/AlhubishiRE', color: '#39E09B' },
                    { name: 'تويتر / X', handle: '@AlhubishiRE', href: 'https://twitter.com/AlhubishiRE', color: '#1DA1F2' },
                    { name: 'إنستغرام', handle: '@AlhubishiRE', href: 'https://instagram.com/AlhubishiRE', color: '#E1306C' },
                  ].map(({ name, handle, href, color }) => (
                    <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-colors">
                      <p className="font-bold text-xs mb-0.5">{name}</p>
                      <p className="text-white/60 text-xs">{handle}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-black text-navy-900 mb-3">تم إرسال رسالتك</h3>
                    <p className="text-gray-500 mb-6">سيتواصل معك فريقنا خلال 24 ساعة</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', subject: '', message: '', propertyType: '' }); }}
                      className="bg-navy-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gold-500 transition-colors"
                    >
                      إرسال رسالة أخرى
                    </button>
                  </div>
                ) : (
                  <>
                    <SectionTitle badge="نموذج التواصل" title="أرسل لنا" highlight="رسالتك" />
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-bold text-navy-900 mb-2">الاسم الكامل *</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="محمد أحمد"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-navy-900 mb-2">رقم الجوال *</label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="05XXXXXXXX"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm transition-all"
                            dir="ltr"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-bold text-navy-900 mb-2">البريد الإلكتروني</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="example@email.com"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm transition-all"
                            dir="ltr"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-navy-900 mb-2">نوع العقار المطلوب</label>
                          <select
                            value={form.propertyType}
                            onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm transition-all bg-white"
                          >
                            <option value="">اختر النوع</option>
                            <option>فيلا للبيع</option>
                            <option>شقة للإيجار</option>
                            <option>أرض للبيع</option>
                            <option>محل تجاري</option>
                            <option>استفسار عام</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-navy-900 mb-2">موضوع الرسالة *</label>
                        <input
                          type="text"
                          required
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          placeholder="أود الاستفسار عن..."
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-navy-900 mb-2">تفاصيل الرسالة *</label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="اكتب تفاصيل طلبك هنا..."
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm transition-all resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-navy-900 hover:bg-gold-500 text-white font-bold py-4 rounded-xl transition-all text-sm disabled:opacity-60"
                      >
                        {loading ? (
                          <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> جاري الإرسال...</>
                        ) : (
                          <><Send size={16} /> إرسال الرسالة</>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
