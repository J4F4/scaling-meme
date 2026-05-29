'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Pencil, Trash2, Eye, BarChart3, Home, Users, TrendingUp, Search, Filter } from 'lucide-react';
import { properties } from '@/data/properties';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'properties' | 'add'>('dashboard');
  const [search, setSearch] = useState('');
  const [form, setForm] = useState({
    title: '', type: 'villa', status: 'for-sale', price: '', area: '',
    bedrooms: '', bathrooms: '', district: '', address: '', description: '',
    lat: '', lng: '',
  });
  const [saved, setSaved] = useState(false);

  const filtered = properties.filter((p) =>
    p.title.includes(search) || p.location.district.includes(search)
  );

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const stats = [
    { label: 'إجمالي العقارات', value: properties.length, icon: Home, color: 'bg-blue-500' },
    { label: 'للبيع', value: properties.filter(p => p.status === 'for-sale').length, icon: TrendingUp, color: 'bg-emerald-500' },
    { label: 'للإيجار', value: properties.filter(p => p.status === 'for-rent').length, icon: Users, color: 'bg-amber-500' },
    { label: 'مميزة', value: properties.filter(p => p.isFeatured).length, icon: BarChart3, color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black text-navy-900">لوحة التحكم</h1>
            <p className="text-gray-500 text-sm">إدارة العقارات والمحتوى</p>
          </div>
          <button
            onClick={() => setActiveTab('add')}
            className="flex items-center gap-2 bg-navy-900 hover:bg-gold-500 text-white font-bold px-5 py-3 rounded-xl transition-all text-sm"
          >
            <Plus size={16} />
            إضافة عقار
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 w-fit mb-8 shadow-sm">
          {[
            { id: 'dashboard', label: 'الإحصائيات' },
            { id: 'properties', label: 'العقارات' },
            { id: 'add', label: 'إضافة عقار' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === id ? 'bg-navy-900 text-white shadow' : 'text-gray-500 hover:text-navy-900'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {stats.map(({ label, value, icon: Icon, color }) => (
                <div key={label} className="bg-white rounded-2xl p-6 shadow-card">
                  <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <p className="text-3xl font-black text-navy-900 mb-1">{value}</p>
                  <p className="text-gray-500 text-sm">{label}</p>
                </div>
              ))}
            </div>

            {/* Recent */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h2 className="font-black text-navy-900 text-lg mb-5">أحدث العقارات</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-right">
                      <th className="pb-4 font-bold text-gray-400 text-xs pr-0">العقار</th>
                      <th className="pb-4 font-bold text-gray-400 text-xs">النوع</th>
                      <th className="pb-4 font-bold text-gray-400 text-xs">السعر</th>
                      <th className="pb-4 font-bold text-gray-400 text-xs">الحالة</th>
                      <th className="pb-4 font-bold text-gray-400 text-xs">إجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {properties.slice(0, 5).map((p) => (
                      <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 pr-0">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                              <Image src={p.images[0]?.url} alt={p.title} width={40} height={40} className="object-cover w-full h-full" />
                            </div>
                            <div>
                              <p className="font-bold text-navy-900 text-xs line-clamp-1">{p.title}</p>
                              <p className="text-gray-400 text-xs">{p.location.district}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-gray-600 text-xs">
                          {({'villa':'فيلا',apartment:'شقة',land:'أرض',commercial:'تجاري',duplex:'دبلكس',compound:'كمبوند'} as Record<string,string>)[p.type]}
                        </td>
                        <td className="py-4 font-bold text-navy-900 text-xs">
                          {p.price.toLocaleString('ar-SA')} {p.priceUnit}
                        </td>
                        <td className="py-4">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                            p.status === 'for-sale' ? 'bg-emerald-100 text-emerald-700' :
                            p.status === 'for-rent' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {p.status === 'for-sale' ? 'للبيع' : p.status === 'for-rent' ? 'للإيجار' : 'محجوز'}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <Link href={`/properties/${p.id}`} className="p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                              <Eye size={14} />
                            </Link>
                            <button className="p-1.5 text-gray-400 hover:text-amber-600 rounded-lg hover:bg-amber-50 transition-colors">
                              <Pencil size={14} />
                            </button>
                            <button className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Properties Tab */}
        {activeTab === 'properties' && (
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث عن عقار..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pr-9 pl-4 py-2.5 border border-gray-200 rounded-xl text-sm"
                />
              </div>
              <p className="text-gray-500 text-sm self-center">{filtered.length} نتيجة</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr className="text-right">
                    <th className="px-5 py-4 font-bold text-gray-500 text-xs">العقار</th>
                    <th className="px-5 py-4 font-bold text-gray-500 text-xs">المواصفات</th>
                    <th className="px-5 py-4 font-bold text-gray-500 text-xs">السعر</th>
                    <th className="px-5 py-4 font-bold text-gray-500 text-xs">الحالة</th>
                    <th className="px-5 py-4 font-bold text-gray-500 text-xs">مميز</th>
                    <th className="px-5 py-4 font-bold text-gray-500 text-xs">إجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50/50">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                            <Image src={p.images[0]?.url} alt={p.title} width={48} height={48} className="object-cover w-full h-full" />
                          </div>
                          <div>
                            <p className="font-bold text-navy-900 text-sm line-clamp-1 max-w-[180px]">{p.title}</p>
                            <p className="text-gray-400 text-xs">{p.location.district}، {p.location.city}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-gray-600 text-xs">
                        <div className="space-y-0.5">
                          <p>{p.area} م²</p>
                          {p.bedrooms > 0 && <p>{p.bedrooms} غرف • {p.bathrooms} حمام</p>}
                        </div>
                      </td>
                      <td className="px-5 py-4 font-bold text-navy-900 text-xs whitespace-nowrap">
                        {p.price.toLocaleString('ar-SA')}<br/>
                        <span className="text-gray-400 font-normal">{p.priceUnit}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                          p.status === 'for-sale' ? 'bg-emerald-100 text-emerald-700' :
                          p.status === 'for-rent' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {p.status === 'for-sale' ? 'للبيع' : p.status === 'for-rent' ? 'للإيجار' : 'محجوز'}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-bold ${p.isFeatured ? 'text-gold-600' : 'text-gray-300'}`}>
                          {p.isFeatured ? '⭐ نعم' : '—'}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1">
                          <Link href={`/properties/${p.id}`} className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                            <Eye size={14} />
                          </Link>
                          <button className="p-2 text-gray-400 hover:text-amber-600 rounded-lg hover:bg-amber-50 transition-colors">
                            <Pencil size={14} />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add Property Tab */}
        {activeTab === 'add' && (
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-3xl">
            <h2 className="font-black text-navy-900 text-xl mb-6">إضافة عقار جديد</h2>
            {saved && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl text-sm font-bold mb-6 flex items-center gap-2">
                ✓ تم حفظ العقار بنجاح
              </div>
            )}
            <form onSubmit={handleSave} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-navy-900 mb-2">عنوان العقار *</label>
                <input type="text" required value={form.title}
                  onChange={(e) => setForm({...form, title: e.target.value})}
                  placeholder="مثال: فيلا فاخرة في حي النرجس"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">نوع العقار *</label>
                  <select value={form.type} onChange={(e) => setForm({...form, type: e.target.value})}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white">
                    <option value="villa">فيلا</option>
                    <option value="apartment">شقة</option>
                    <option value="land">أرض</option>
                    <option value="commercial">تجاري</option>
                    <option value="duplex">دبلكس</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">حالة البيع *</label>
                  <select value={form.status} onChange={(e) => setForm({...form, status: e.target.value})}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white">
                    <option value="for-sale">للبيع</option>
                    <option value="for-rent">للإيجار</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">السعر (ريال) *</label>
                  <input type="number" required value={form.price}
                    onChange={(e) => setForm({...form, price: e.target.value})}
                    placeholder="2500000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">المساحة (م²) *</label>
                  <input type="number" required value={form.area}
                    onChange={(e) => setForm({...form, area: e.target.value})}
                    placeholder="350"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">غرف النوم</label>
                  <input type="number" value={form.bedrooms}
                    onChange={(e) => setForm({...form, bedrooms: e.target.value})}
                    placeholder="4"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">الحي *</label>
                  <input type="text" required value={form.district}
                    onChange={(e) => setForm({...form, district: e.target.value})}
                    placeholder="النرجس"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">العنوان الكامل</label>
                  <input type="text" value={form.address}
                    onChange={(e) => setForm({...form, address: e.target.value})}
                    placeholder="شارع الأمير..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">خط العرض (Latitude)</label>
                  <input type="number" step="any" value={form.lat}
                    onChange={(e) => setForm({...form, lat: e.target.value})}
                    placeholder="24.7136"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm"
                    dir="ltr" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">خط الطول (Longitude)</label>
                  <input type="number" step="any" value={form.lng}
                    onChange={(e) => setForm({...form, lng: e.target.value})}
                    placeholder="46.6753"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm"
                    dir="ltr" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-900 mb-2">وصف العقار</label>
                <textarea rows={4} value={form.description}
                  onChange={(e) => setForm({...form, description: e.target.value})}
                  placeholder="اكتب وصفاً مفصلاً للعقار..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit"
                  className="flex-1 bg-navy-900 hover:bg-gold-500 text-white font-bold py-3.5 rounded-xl transition-all text-sm">
                  حفظ العقار
                </button>
                <button type="button" onClick={() => setForm({ title: '', type: 'villa', status: 'for-sale', price: '', area: '', bedrooms: '', bathrooms: '', district: '', address: '', description: '', lat: '', lng: '' })}
                  className="px-6 border border-gray-200 text-gray-500 hover:text-red-500 font-bold py-3.5 rounded-xl transition-all text-sm">
                  مسح
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
