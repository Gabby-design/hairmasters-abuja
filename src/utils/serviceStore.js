const STORAGE_KEY = 'hair_masters_services_v1';

export const DEFAULT_SERVICES = [
  {
    id: 'cut-style',
    title: 'Precision Cuts & Custom Styling',
    category: 'cuts',
    price: '₦15,000',
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    description: 'Personalized hair mapping consultation, clarifying botanical shampoo, precision cut, and customized thermal finishing styling.',
    details: 'Includes scalp analysis, wash with sulfate-free organic cleansers, blow dry, and custom iron styling. Perfect for maintaining hair structure or a fresh new look.',
  },
  {
    id: 'balayage',
    title: 'Dimensional Balayage & Highlights',
    category: 'color',
    price: '₦38,000',
    duration: '120 mins',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: 'Hand-painted sun-kissed color technique, gloss toner, and bond-building treatment for effortless radiance.',
    details: 'Custom color placement tailored to your skin tone and natural hair movement. Includes Olaplex/K18 bond protection to prevent damage.',
  },
  {
    id: 'keratin',
    title: 'Keratin & Deep Moisture Hydration',
    category: 'treatments',
    price: '₦28,000',
    duration: '90 mins',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    description: 'Intense smoothing formula that eliminates frizz, restores structural elasticity, and adds reflective glass shine.',
    details: 'Deeply infuses natural keratin protein into the hair cuticle. Lasts up to 12 weeks with zero harsh formaldehyde fumes.',
  },
  {
    id: 'blowout',
    title: 'Signature Blowout & Silk Press',
    category: 'blowout',
    price: '₦20,000',
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    description: 'Luxurious scalp wash, heat protectant infusion, volume blowout, or silky smooth flat iron finish.',
    details: 'Deep conditioning steam treatment followed by lightweight argon oil sealant for bouncy, long-lasting silk press with natural movement.',
  },
  {
    id: 'bridal',
    title: 'Bridal & Special Occasion Updo',
    category: 'bridal',
    price: '₦45,000',
    duration: '90 mins',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    description: 'Elegant event styling, veil pin placement, red carpet waves, or high fashion editorial updos.',
    details: 'Comprehensive trial option available. Includes long-wear humidity hold spray and accessory placement for weddings, galas, and celebrations.',
  },
  {
    id: 'lace-install',
    title: 'Luxury Lace Frontal & Wig Install',
    category: 'cuts',
    price: '₦30,000',
    duration: '90 mins',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    description: 'Custom lace customization, skin-melt adhesive application, precision baby hair shaping, and thermal bone-straight or body wave styling.',
    details: 'HD lace bleaching, plucking, braided base prep, scalp shield protection, and long-wear seamless melting.',
  },
];

export const getStoredServices = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((item) => {
          const matchDefault = DEFAULT_SERVICES.find((d) => d.id === item.id);
          return {
            ...item,
            image: item.image || (matchDefault ? matchDefault.image : DEFAULT_SERVICES[0].image),
          };
        });
      }
    }
  } catch (e) {
    console.error('Failed to load services from localStorage', e);
  }
  return DEFAULT_SERVICES;
};

export const saveServices = (services) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
  } catch (e) {
    console.error('Failed to save services to localStorage', e);
  }
};

export const addService = (newService) => {
  const current = getStoredServices();
  const updated = [
    ...current,
    {
      ...newService,
      id: 'service-' + Date.now(),
    },
  ];
  saveServices(updated);
  return updated;
};

export const updateService = (id, updatedFields) => {
  const current = getStoredServices();
  const updated = current.map((svc) =>
    svc.id === id ? { ...svc, ...updatedFields } : svc
  );
  saveServices(updated);
  return updated;
};

export const deleteService = (id) => {
  const current = getStoredServices();
  const updated = current.filter((svc) => svc.id !== id);
  saveServices(updated);
  return updated;
};

export const resetServicesToDefault = () => {
  saveServices(DEFAULT_SERVICES);
  return DEFAULT_SERVICES;
};
