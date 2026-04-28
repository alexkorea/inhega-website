export type LawMapping = {
  categorySlug: string;
  laws: string[];
};

export const LAW_MAPPINGS: LawMapping[] = [
  { categorySlug: 'international-freight-forwarding', laws: ['물류정책기본법'] },
  { categorySlug: 'hostel', laws: ['관광진흥법'] },
  { categorySlug: 'food-manufacturing', laws: ['식품위생법'] },
  {
    categorySlug: 'nonprofit-association',
    laws: ['민법', '공익법인의 설립·운영에 관한 법률'],
  },
  { categorySlug: 'tobacco-import', laws: ['담배사업법'] },
  {
    categorySlug: 'venture-inno-biz',
    laws: ['벤처기업육성에 관한 특별조치법', '중소기업기술혁신 촉진법'],
  },
  {
    categorySlug: 'food-haccp',
    laws: ['식품위생법', '축산물 위생관리법'],
  },
  {
    categorySlug: 'cosmetics-quasi-drug',
    laws: ['약사법', '화장품법'],
  },
  {
    categorySlug: 'corporate-rnd-center',
    laws: ['기초연구진흥 및 기술개발지원에 관한 법률'],
  },
  { categorySlug: 'e-cigarette-import', laws: ['담배사업법'] },
];
