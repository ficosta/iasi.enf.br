export interface Hospital {
  name: string;
  city: string;
  type: 'hospital' | 'ps' | 'upa' | 'clinic';
}

export const hospitals: Hospital[] = [
  // Itapecerica da Serra
  { name: 'Hospital Geral de Itapecerica da Serra (HGIS)', city: 'Itapecerica da Serra', type: 'hospital' },
  { name: 'Pronto Socorro Central e Maternidade Eva Zoraide das Dores', city: 'Itapecerica da Serra', type: 'ps' },
  { name: 'Pronto Socorro Jardim Jacira', city: 'Itapecerica da Serra', type: 'ps' },

  // Embu das Artes
  { name: 'Pronto-Socorro Central (Unidade Mista de Saúde Central)', city: 'Embu das Artes', type: 'ps' },
  { name: 'Pronto Socorro Infantil', city: 'Embu das Artes', type: 'ps' },
  { name: 'Pronto Socorro Vazame (Hospital Irmã Annete)', city: 'Embu das Artes', type: 'ps' },

  // Taboão da Serra
  { name: 'Hospital Geral de Pirajussara', city: 'Taboão da Serra', type: 'hospital' },
  { name: 'Unidade Mista de Taboão da Serra', city: 'Taboão da Serra', type: 'ps' },
  { name: 'UPA Dr. Akira Tada', city: 'Taboão da Serra', type: 'upa' },
  { name: 'Pronto Socorro Infantil', city: 'Taboão da Serra', type: 'ps' },

  // Cotia
  { name: 'Hospital Regional de Cotia (HRC)', city: 'Cotia', type: 'hospital' },
  { name: 'Hospital São Francisco de Cotia', city: 'Cotia', type: 'hospital' },
  { name: 'PA Caucaia do Alto', city: 'Cotia', type: 'upa' },
  { name: 'UPA do Atalaia', city: 'Cotia', type: 'upa' },
  { name: 'Pronto-Socorro Infantil', city: 'Cotia', type: 'ps' },
];

export const citiesByHospitals = [
  {
    city: 'Itapecerica da Serra',
    hospitals: hospitals.filter(h => h.city === 'Itapecerica da Serra')
  },
  {
    city: 'Embu das Artes',
    hospitals: hospitals.filter(h => h.city === 'Embu das Artes')
  },
  {
    city: 'Taboão da Serra',
    hospitals: hospitals.filter(h => h.city === 'Taboão da Serra')
  },
  {
    city: 'Cotia',
    hospitals: hospitals.filter(h => h.city === 'Cotia')
  },
];
