/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del();

  // Insert new seed data for 25 cosmetic products with prices in VND
  await knex('products').insert([
    { id: 1, name: 'L’Oreal Paris Revitalift', price: 690000, brand: 'L’Oreal', category: 'Skincare', description: 'Anti-aging cream', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.5 },
    { id: 2, name: 'L’Oreal Paris Revitalift Bright Reveal', price: 720000, brand: 'L’Oreal', category: 'Skincare', description: 'Brightening cream for glowing skin', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.6 },
    { id: 3, name: 'L’Oreal Paris Lash Paradise Mascara', price: 380000, brand: 'L’Oreal', category: 'Makeup', description: 'Volumizing mascara for dramatic lashes', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.7 },

    { id: 4, name: 'Neutrogena Hydro Boost Water Gel', price: 650000, brand: 'Neutrogena', category: 'Skincare', description: 'Moisturizing gel for hydration', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.7 },
    { id: 5, name: 'Neutrogena Oil-Free Acne Wash', price: 330000, brand: 'Neutrogena', category: 'Skincare', description: 'Acne treatment cleanser', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.4 },
    { id: 6, name: 'Neutrogena Clear Face Sunscreen SPF 55', price: 270000, brand: 'Neutrogena', category: 'Skincare', description: 'Non-comedogenic sunscreen', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.6 },

    { id: 7, name: 'Maybelline New York Fit Me Foundation', price: 320000, brand: 'Maybelline', category: 'Makeup', description: 'Matte foundation for smooth skin', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.3 },
    { id: 8, name: 'Maybelline New York Lash Sensational Mascara', price: 250000, brand: 'Maybelline', category: 'Makeup', description: 'Lash enhancing mascara', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.5 },
    { id: 9, name: 'Maybelline New York Instant Age Rewind Concealer', price: 290000, brand: 'Maybelline', category: 'Makeup', description: 'Dark circle concealer', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.6 },

    { id: 10, name: 'The Ordinary Niacinamide 10% + Zinc 1%', price: 420000, brand: 'The Ordinary', category: 'Skincare', description: 'Serum for blemish control', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.6 },
    { id: 11, name: 'The Ordinary Hyaluronic Acid 2% + B5', price: 390000, brand: 'The Ordinary', category: 'Skincare', description: 'Hydrating serum for plump skin', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.7 },
    { id: 12, name: 'The Ordinary AHA 30% + BHA 2% Peeling Solution', price: 580000, brand: 'The Ordinary', category: 'Skincare', description: 'Exfoliating mask for smooth skin', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.8 },

    { id: 13, name: 'Clinique Dramatically Different Moisturizing Lotion', price: 880000, brand: 'Clinique', category: 'Skincare', description: 'Hydrating lotion for all skin types', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.7 },
    { id: 14, name: 'Clinique Take The Day Off Makeup Remover', price: 650000, brand: 'Clinique', category: 'Skincare', description: 'Makeup remover balm', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.5 },
    { id: 15, name: 'Clinique Even Better Clinical Dark Spot Corrector', price: 1150000, brand: 'Clinique', category: 'Skincare', description: 'Dark spot treatment serum', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.6 },

    { id: 16, name: 'Nivea Soft Moisturizing Cream', price: 180000, brand: 'Nivea', category: 'Skincare', description: 'Moisturizing cream for daily use', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.5 },
    { id: 17, name: 'Nivea Sun Protect & White SPF 50+', price: 350000, brand: 'Nivea', category: 'Skincare', description: 'Sunscreen for brightening and protection', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.4 },
    { id: 18, name: 'Nivea Men Deep Clean Face Wash', price: 220000, brand: 'Nivea', category: 'Skincare', description: 'Face wash for men', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.3 },

    { id: 19, name: 'Estée Lauder Double Wear Foundation', price: 1700000, brand: 'Estée Lauder', category: 'Makeup', description: 'Long-wear foundation', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.7 },
    { id: 20, name: 'Estée Lauder Advanced Night Repair Serum', price: 2200000, brand: 'Estée Lauder', category: 'Skincare', description: 'Anti-aging serum', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.8 },
    { id: 21, name: 'Estée Lauder Revitalizing Supreme+', price: 2400000, brand: 'Estée Lauder', category: 'Skincare', description: 'Global anti-aging cream', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.9 },

    { id: 22, name: 'L’Oreal Paris Infallible Pro-Matte Foundation', price: 520000, brand: 'L’Oreal', category: 'Makeup', description: 'Matte finish foundation', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.6 },
    { id: 23, name: 'L’Oreal Paris Pure-Clay Mask', price: 390000, brand: 'L’Oreal', category: 'Skincare', description: 'Detoxifying clay mask', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.4 },
    { id: 24, name: 'Maybelline New York SuperStay Matte Ink', price: 250000, brand: 'Maybelline', category: 'Makeup', description: 'Long-wear liquid lipstick', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.8 },
    { id: 25, name: 'Nivea Essential Care Lip Balm', price: 110000, brand: 'Nivea', category: 'Skincare', description: 'Moisturizing lip balm', created_at: new Date(), image_path: null, image_thumbnail_path: null, average_rating: 4.5 }
  ]);
};
