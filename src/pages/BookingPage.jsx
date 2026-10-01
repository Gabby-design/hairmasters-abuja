import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getStoredServices } from '../utils/serviceStore';
import { Sparkles, Clock, CheckCircle2, ArrowRight, Calendar, User, Phone, Check, RefreshCw } from 'lucide-react';

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const targetServiceId = searchParams.get('service');

  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [isChangingService, setIsChangingService] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(tomorrowStr);
  const [selectedTime, setSelectedTime] = useState('11:00 AM');

  const availableTimeSlots = [
    '9:30 AM',
    '11:00 AM',
    '12:30 PM',
    '2:00 PM',
    '3:30 PM',
    '5:00 PM',
    '6:30 PM',
  ];

  const [clientDetails, setClientDetails] = useState({
    fullName: '',
    phone: '',
    whatsapp: '',
    notes: '',
  });

  useEffect(() => {
    const list = getStoredServices();
    setServices(list);

    if (list.length > 0) {
      let initialSvc = list[0];
      if (targetServiceId) {
        const found = list.find((s) => s.id === targetServiceId);
        if (found) initialSvc = found;
      }
      setSelectedServiceId(initialSvc.id);
    }
  }, [targetServiceId]);

  const selectedServiceObj = services.find((s) => s.id === selectedServiceId) || services[0];

  const handleSelectService = (svc) => {
    setSelectedServiceId(svc.id);
    setIsChangingService(false);
    toast.info(`Selected service: ${svc.title}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!clientDetails.fullName || !clientDetails.phone) {
      toast.error('Please enter your full name and phone number.');
      return;
    }

    const whatsappNumber = clientDetails.whatsapp || clientDetails.phone;
    const whatsappMessage = encodeURIComponent(
      `Hello Hair Masters Salon (Wuse II, Abuja)!\n\nI would like to confirm my appointment:\n\n*Service:* ${selectedServiceObj?.title} (${selectedServiceObj?.price})\n*Duration:* ${selectedServiceObj?.duration}\n*Date:* ${selectedDate}\n*Time:* ${selectedTime}\n*Client Name:* ${clientDetails.fullName}\n*Phone:* ${clientDetails.phone}\n*WhatsApp:* ${whatsappNumber}${clientDetails.notes ? `\n*Notes:* ${clientDetails.notes}` : ''}`
    );

    const whatsappUrl = `https://wa.me/2348173445612?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    toast.success(`Booking confirmed for ${clientDetails.fullName}! Opening WhatsApp...`);
  };

  return (
    <div className="bg-background min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 space-y-10">
        
        {/* Header */}
        <div className="border-b border-stone-300 pb-8 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            Appointment Reservation
          </p>
          <h1 className="mt-2 font-serif text-4xl sm:text-5xl text-[#1C1917] font-normal">
            Book your salon visit
          </h1>
          <p className="mt-2 text-sm font-medium text-[#1C1917] leading-relaxed">
            Reserve your bespoke styling session at 53b Euphrates Crescent, Wuse II, Abuja.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl bg-card p-8 sm:p-10 border border-stone-300 shadow-md space-y-5 animate-fadeIn">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-emerald-600" />
            </div>
            <h2 className="font-serif text-3xl text-[#1C1917] font-normal">
              Booking sent for {clientDetails.fullName}!
            </h2>
            <p className="text-sm font-medium text-stone-600">
              Your appointment request has been dispatched via WhatsApp to our receptionist at 0817 344 5612. We will confirm your slot shortly.
            </p>

            <div className="p-5 rounded-xl bg-background border border-stone-200 text-xs sm:text-sm font-medium text-[#1C1917] space-y-2">
              <p><strong>Service:</strong> {selectedServiceObj?.title} ({selectedServiceObj?.price})</p>
              <p><strong>Scheduled:</strong> {selectedDate} at {selectedTime}</p>
              <p><strong>Client:</strong> {clientDetails.fullName} ({clientDetails.phone})</p>
              {clientDetails.notes && <p><strong>Notes:</strong> {clientDetails.notes}</p>}
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-[#1C1917] hover:text-rose underline"
              >
                Book another appointment
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Selected Service Summary */}
            <div className="bg-card p-6 sm:p-8 rounded-2xl border border-stone-300 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-rose" />
                  <span>Step 1 · Selected Service</span>
                </span>
                <button
                  type="button"
                  onClick={() => setIsChangingService(!isChangingService)}
                  className="text-xs font-semibold text-[#1C1917] hover:text-rose flex items-center gap-1.5 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{isChangingService ? 'Keep Current' : 'Change Service'}</span>
                </button>
              </div>

              {selectedServiceObj && (
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  {selectedServiceObj.image && (
                    <div className="w-full sm:w-40 aspect-[16/9] sm:aspect-square rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                      <img
                        src={selectedServiceObj.image}
                        alt={selectedServiceObj.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-baseline justify-between gap-3">
                      <h2 className="font-serif text-2xl text-[#1C1917] font-normal">
                        {selectedServiceObj.title}
                      </h2>
                      <span className="text-lg font-bold text-[#1C1917] bg-rose/15 px-3 py-1 rounded-full border border-rose/30 shrink-0">
                        {selectedServiceObj.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                      <Clock className="w-3.5 h-3.5 text-rose" />
                      <span>Estimated Duration: {selectedServiceObj.duration}</span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-stone-700 leading-relaxed">
                      {selectedServiceObj.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Service Change Dropdown / Selector Grid */}
              {isChangingService && (
                <div className="mt-4 pt-4 border-t border-stone-200 space-y-3 animate-fadeIn">
                  <p className="text-xs font-semibold text-stone-600">Choose a different service:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {services.map((svc) => (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() => handleSelectService(svc)}
                        className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between gap-2 ${
                          svc.id === selectedServiceId
                            ? 'bg-[#1C1917] text-white border-[#1C1917]'
                            : 'bg-white text-[#1C1917] border-stone-300 hover:border-stone-400'
                        }`}
                      >
                        <span className="font-medium truncate">{svc.title}</span>
                        <span className="font-bold shrink-0">{svc.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Step 2: Date & Time Picker */}
            <div className="bg-card p-6 sm:p-8 rounded-2xl border border-stone-300 shadow-xs space-y-5">
              <div className="border-b border-stone-200 pb-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-rose flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-rose" />
                  <span>Step 2 · Date & Time Selection</span>
                </span>
                <span className="text-xs font-medium text-stone-500">
                  Mon – Sat: 9AM – 7:30PM | Sun: 12PM – 6PM
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                {/* Calendar Date Input */}
                <div className="sm:col-span-5 space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                    Choose Date
                  </label>
                  <input
                    type="date"
                    required
                    min={tomorrowStr}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="salon-input font-medium"
                  />
                  <p className="text-[11px] text-stone-500">Appointments can be scheduled up to 30 days in advance.</p>
                </div>

                {/* Time Slot Chips */}
                <div className="sm:col-span-7 space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all text-center ${
                          selectedTime === slot
                            ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-xs ring-2 ring-[#1C1917]/20'
                            : 'bg-white text-[#1C1917] border-stone-300 hover:border-stone-400'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Client Details & WhatsApp Handoff */}
            <div className="bg-card p-6 sm:p-8 rounded-2xl border border-stone-300 shadow-xs space-y-5">
              <div className="border-b border-stone-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose flex items-center gap-1.5">
                  <User className="w-4 h-4 text-rose" />
                  <span>Step 3 · Client Information</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] space-y-1">
                  <span>Full Name *</span>
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={clientDetails.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Amina Bello"
                    className="salon-input font-normal normal-case"
                  />
                </label>

                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] space-y-1">
                  <span>Phone Number *</span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={clientDetails.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 0817 344 5612"
                    className="salon-input font-normal normal-case"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] space-y-1">
                  <span>WhatsApp Number (Optional)</span>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={clientDetails.whatsapp}
                    onChange={handleInputChange}
                    placeholder="Leave blank if same as phone"
                    className="salon-input font-normal normal-case"
                  />
                </label>

                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] space-y-1">
                  <span>Special Notes / Styling Preferences</span>
                  <input
                    type="text"
                    name="notes"
                    value={clientDetails.notes}
                    onChange={handleInputChange}
                    placeholder="e.g. Sensitive scalp, silk press finish"
                    className="salon-input font-normal normal-case"
                  />
                </label>
              </div>

              {/* Submit / WhatsApp Handoff CTA */}
              <div className="pt-4 border-t border-stone-200">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#1C1917] hover:bg-stone-800 text-white font-semibold py-4 px-6 text-sm flex items-center justify-center gap-3 shadow-md transition-all hover:scale-[1.01]"
                >
                  <svg className="h-5 w-5 fill-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Confirm & Send to WhatsApp</span>
                </button>
                <p className="mt-2 text-center text-xs text-stone-500">
                  Direct dispatch to reception · 53b Euphrates Crescent, Wuse II, Abuja
                </p>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
