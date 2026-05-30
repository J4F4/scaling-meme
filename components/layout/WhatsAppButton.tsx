'use client';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = 'https://wa.me/966573888610?text=مرحباً، أود الاستفسار عن العقارات المتاحة';

  return (
    <div className="fixed bottom-6 left-6 z-50 no-print flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="bg-white text-navy-900 text-sm font-bold px-4 py-2 rounded-xl shadow-luxury whitespace-nowrap animate-fade-in-up">
          تواصل معنا عبر واتساب
        </div>
      )}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="whatsapp-btn w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
        style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
        aria-label="تواصل عبر واتساب"
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="white">
          <path d="M16 1C7.716 1 1 7.716 1 16c0 2.627.68 5.096 1.872 7.244L1 31l8.014-1.848A14.945 14.945 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1zm0 27.5c-2.406 0-4.66-.648-6.603-1.776l-.474-.28-4.751 1.095 1.123-4.617-.308-.49A12.453 12.453 0 013.5 16C3.5 9.096 9.096 3.5 16 3.5S28.5 9.096 28.5 16 22.904 28.5 16 28.5zm6.843-9.37c-.374-.188-2.215-1.093-2.558-1.217-.343-.125-.593-.188-.843.188-.25.375-.968 1.217-1.187 1.468-.218.25-.437.281-.812.094-.374-.188-1.578-.582-3.005-1.854-1.11-.992-1.86-2.217-2.078-2.591-.218-.374-.023-.578.165-.765.169-.17.374-.437.562-.656.188-.218.25-.375.375-.625.124-.25.062-.468-.031-.656-.094-.187-.843-2.031-1.155-2.78-.304-.73-.613-.631-.843-.643-.218-.01-.468-.013-.718-.013-.25 0-.656.094-.999.468-.343.375-1.312 1.281-1.312 3.124s1.343 3.624 1.53 3.874c.188.25 2.644 4.04 6.406 5.665.895.386 1.593.617 2.137.79.897.285 1.714.244 2.36.148.72-.107 2.215-.905 2.527-1.78.312-.874.312-1.624.218-1.78-.093-.156-.343-.25-.718-.437z"/>
        </svg>
      </a>
    </div>
  );
}
