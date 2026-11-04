// 자동 생성 — scripts/import-industry-pages.py. 손으로 고치지 말 것.
import type { IndustryPage } from './industry-pages'

import p0 from '@/content/industry-pages/restaurant-business-report.ko.json'
import p1 from '@/content/industry-pages/restaurant-business-report.en.json'
import p2 from '@/content/industry-pages/restaurant-business-report.zh.json'
import p3 from '@/content/industry-pages/restaurant-business-report.ja.json'
import p4 from '@/content/industry-pages/import-food-sales.ko.json'
import p5 from '@/content/industry-pages/import-food-sales.en.json'
import p6 from '@/content/industry-pages/import-food-sales.zh.json'
import p7 from '@/content/industry-pages/import-food-sales.ja.json'
import p8 from '@/content/industry-pages/travel-agency-registration.ko.json'
import p9 from '@/content/industry-pages/travel-agency-registration.en.json'
import p10 from '@/content/industry-pages/travel-agency-registration.zh.json'
import p11 from '@/content/industry-pages/travel-agency-registration.ja.json'
import p12 from '@/content/industry-pages/liquor-import-sales-license.ko.json'
import p13 from '@/content/industry-pages/liquor-import-sales-license.en.json'
import p14 from '@/content/industry-pages/liquor-import-sales-license.zh.json'
import p15 from '@/content/industry-pages/liquor-import-sales-license.ja.json'
import p16 from '@/content/industry-pages/accommodation-business-report.ko.json'
import p17 from '@/content/industry-pages/accommodation-business-report.en.json'
import p18 from '@/content/industry-pages/accommodation-business-report.zh.json'
import p19 from '@/content/industry-pages/accommodation-business-report.ja.json'
import p20 from '@/content/industry-pages/mail-order-sales-report.ko.json'
import p21 from '@/content/industry-pages/mail-order-sales-report.en.json'
import p22 from '@/content/industry-pages/mail-order-sales-report.zh.json'
import p23 from '@/content/industry-pages/mail-order-sales-report.ja.json'
import p24 from '@/content/industry-pages/academy-establishment-registration.ko.json'
import p25 from '@/content/industry-pages/academy-establishment-registration.en.json'
import p26 from '@/content/industry-pages/academy-establishment-registration.zh.json'
import p27 from '@/content/industry-pages/academy-establishment-registration.ja.json'
import p28 from '@/content/industry-pages/kc-radio-certification.ko.json'
import p29 from '@/content/industry-pages/kc-radio-certification.en.json'
import p30 from '@/content/industry-pages/kc-radio-certification.zh.json'
import p31 from '@/content/industry-pages/kc-radio-certification.ja.json'
import p32 from '@/content/industry-pages/construction-business-registration.ko.json'
import p33 from '@/content/industry-pages/construction-business-registration.en.json'
import p34 from '@/content/industry-pages/construction-business-registration.zh.json'
import p35 from '@/content/industry-pages/construction-business-registration.ja.json'
import p36 from '@/content/industry-pages/foreign-patient-attraction.ko.json'
import p37 from '@/content/industry-pages/foreign-patient-attraction.en.json'
import p38 from '@/content/industry-pages/foreign-patient-attraction.zh.json'
import p39 from '@/content/industry-pages/foreign-patient-attraction.ja.json'
import p40 from '@/content/industry-pages/hazardous-chemical-business-permit.ko.json'
import p41 from '@/content/industry-pages/pet-business-permit-registration.ko.json'
import p42 from '@/content/industry-pages/beauty-salon-business-report.ko.json'
import p43 from '@/content/industry-pages/waste-treatment-business-permit.ko.json'
import p44 from '@/content/industry-pages/emission-facility-permit-report.ko.json'
import p45 from '@/content/industry-pages/real-estate-development-business-registration.ko.json'
import p46 from '@/content/industry-pages/pharmaceutical-wholesale-license.ko.json'
import p47 from '@/content/industry-pages/car-dealer-rental-business-registration.ko.json'
import p48 from '@/content/industry-pages/long-term-care-institution-designation.ko.json'
import p49 from '@/content/industry-pages/development-act-farmland-conversion-permit.ko.json'
import p50 from '@/content/industry-pages/sports-facility-business-report.ko.json'
import p51 from '@/content/industry-pages/cooperative-establishment-report.ko.json'
import p52 from '@/content/industry-pages/entertainment-bar-business-permit.ko.json'
import p53 from '@/content/industry-pages/campground-business-registration.ko.json'
import p54 from '@/content/industry-pages/solar-power-business-permit.ko.json'
import p55 from '@/content/industry-pages/marriage-brokerage-business-registration.ko.json'
import p56 from '@/content/industry-pages/money-lending-business-registration.ko.json'
import p57 from '@/content/industry-pages/entertainment-agency-business-registration.ko.json'
import p58 from '@/content/industry-pages/disinfection-business-report.ko.json'
import p59 from '@/content/industry-pages/drone-business-registration.ko.json'
import p60 from '@/content/industry-pages/software-business-performance-management.ko.json'
import p61 from '@/content/industry-pages/residential-lodging-business-report.ko.json'
import p62 from '@/content/industry-pages/rural-minbak-business-report.ko.json'
import p63 from '@/content/industry-pages/foundation-establishment-permit.ko.json'
import p64 from '@/content/industry-pages/overseas-remittance-business-registration.ko.json'
import p65 from '@/content/industry-pages/overseas-remittance-business-registration.en.json'
import p66 from '@/content/industry-pages/overseas-remittance-business-registration.zh.json'
import p67 from '@/content/industry-pages/overseas-remittance-business-registration.ja.json'
import p68 from '@/content/industry-pages/mainbiz-management-innovation-sme.ko.json'
import p69 from '@/content/industry-pages/mainbiz-management-innovation-sme.en.json'
import p70 from '@/content/industry-pages/mainbiz-management-innovation-sme.zh.json'
import p71 from '@/content/industry-pages/mainbiz-management-innovation-sme.ja.json'
import p72 from '@/content/industry-pages/beauty-salon-business-report.en.json'
import p73 from '@/content/industry-pages/beauty-salon-business-report.zh.json'
import p74 from '@/content/industry-pages/beauty-salon-business-report.ja.json'
import p75 from '@/content/industry-pages/campground-business-registration.en.json'
import p76 from '@/content/industry-pages/campground-business-registration.zh.json'
import p77 from '@/content/industry-pages/campground-business-registration.ja.json'
import p78 from '@/content/industry-pages/car-dealer-rental-business-registration.en.json'
import p79 from '@/content/industry-pages/car-dealer-rental-business-registration.zh.json'
import p80 from '@/content/industry-pages/car-dealer-rental-business-registration.ja.json'
import p81 from '@/content/industry-pages/cooperative-establishment-report.en.json'
import p82 from '@/content/industry-pages/cooperative-establishment-report.zh.json'
import p83 from '@/content/industry-pages/cooperative-establishment-report.ja.json'
import p84 from '@/content/industry-pages/development-act-farmland-conversion-permit.en.json'
import p85 from '@/content/industry-pages/development-act-farmland-conversion-permit.zh.json'
import p86 from '@/content/industry-pages/development-act-farmland-conversion-permit.ja.json'
import p87 from '@/content/industry-pages/disinfection-business-report.en.json'
import p88 from '@/content/industry-pages/disinfection-business-report.zh.json'
import p89 from '@/content/industry-pages/disinfection-business-report.ja.json'
import p90 from '@/content/industry-pages/drone-business-registration.en.json'
import p91 from '@/content/industry-pages/drone-business-registration.zh.json'
import p92 from '@/content/industry-pages/drone-business-registration.ja.json'
import p93 from '@/content/industry-pages/emission-facility-permit-report.en.json'
import p94 from '@/content/industry-pages/emission-facility-permit-report.zh.json'
import p95 from '@/content/industry-pages/emission-facility-permit-report.ja.json'
import p96 from '@/content/industry-pages/entertainment-agency-business-registration.en.json'
import p97 from '@/content/industry-pages/entertainment-agency-business-registration.zh.json'
import p98 from '@/content/industry-pages/entertainment-agency-business-registration.ja.json'
import p99 from '@/content/industry-pages/entertainment-bar-business-permit.en.json'
import p100 from '@/content/industry-pages/entertainment-bar-business-permit.zh.json'
import p101 from '@/content/industry-pages/entertainment-bar-business-permit.ja.json'
import p102 from '@/content/industry-pages/foundation-establishment-permit.en.json'
import p103 from '@/content/industry-pages/foundation-establishment-permit.zh.json'
import p104 from '@/content/industry-pages/foundation-establishment-permit.ja.json'
import p105 from '@/content/industry-pages/hazardous-chemical-business-permit.en.json'
import p106 from '@/content/industry-pages/hazardous-chemical-business-permit.zh.json'
import p107 from '@/content/industry-pages/hazardous-chemical-business-permit.ja.json'
import p108 from '@/content/industry-pages/long-term-care-institution-designation.en.json'
import p109 from '@/content/industry-pages/long-term-care-institution-designation.zh.json'
import p110 from '@/content/industry-pages/long-term-care-institution-designation.ja.json'
import p111 from '@/content/industry-pages/marriage-brokerage-business-registration.en.json'
import p112 from '@/content/industry-pages/marriage-brokerage-business-registration.zh.json'
import p113 from '@/content/industry-pages/marriage-brokerage-business-registration.ja.json'
import p114 from '@/content/industry-pages/money-lending-business-registration.en.json'
import p115 from '@/content/industry-pages/money-lending-business-registration.zh.json'
import p116 from '@/content/industry-pages/money-lending-business-registration.ja.json'
import p117 from '@/content/industry-pages/pet-business-permit-registration.en.json'
import p118 from '@/content/industry-pages/pet-business-permit-registration.zh.json'
import p119 from '@/content/industry-pages/pet-business-permit-registration.ja.json'
import p120 from '@/content/industry-pages/pharmaceutical-wholesale-license.en.json'
import p121 from '@/content/industry-pages/pharmaceutical-wholesale-license.zh.json'
import p122 from '@/content/industry-pages/pharmaceutical-wholesale-license.ja.json'
import p123 from '@/content/industry-pages/real-estate-development-business-registration.en.json'
import p124 from '@/content/industry-pages/real-estate-development-business-registration.zh.json'
import p125 from '@/content/industry-pages/real-estate-development-business-registration.ja.json'
import p126 from '@/content/industry-pages/residential-lodging-business-report.en.json'
import p127 from '@/content/industry-pages/residential-lodging-business-report.zh.json'
import p128 from '@/content/industry-pages/residential-lodging-business-report.ja.json'
import p129 from '@/content/industry-pages/rural-minbak-business-report.en.json'
import p130 from '@/content/industry-pages/rural-minbak-business-report.zh.json'
import p131 from '@/content/industry-pages/rural-minbak-business-report.ja.json'
import p132 from '@/content/industry-pages/software-business-performance-management.en.json'
import p133 from '@/content/industry-pages/software-business-performance-management.zh.json'
import p134 from '@/content/industry-pages/software-business-performance-management.ja.json'
import p135 from '@/content/industry-pages/solar-power-business-permit.en.json'
import p136 from '@/content/industry-pages/solar-power-business-permit.zh.json'
import p137 from '@/content/industry-pages/solar-power-business-permit.ja.json'
import p138 from '@/content/industry-pages/sports-facility-business-report.en.json'
import p139 from '@/content/industry-pages/sports-facility-business-report.zh.json'
import p140 from '@/content/industry-pages/sports-facility-business-report.ja.json'
import p141 from '@/content/industry-pages/waste-treatment-business-permit.en.json'
import p142 from '@/content/industry-pages/waste-treatment-business-permit.zh.json'
import p143 from '@/content/industry-pages/waste-treatment-business-permit.ja.json'
import p144 from '@/content/industry-pages/cosmetics-responsible-seller-registration.ko.json'
import p145 from '@/content/industry-pages/cosmetics-responsible-seller-registration.en.json'
import p146 from '@/content/industry-pages/cosmetics-responsible-seller-registration.zh.json'
import p147 from '@/content/industry-pages/cosmetics-responsible-seller-registration.ja.json'
import p148 from '@/content/industry-pages/cosmetics-manufacturer-registration.ko.json'
import p149 from '@/content/industry-pages/cosmetics-manufacturer-registration.en.json'
import p150 from '@/content/industry-pages/cosmetics-manufacturer-registration.zh.json'
import p151 from '@/content/industry-pages/cosmetics-manufacturer-registration.ja.json'
import p152 from '@/content/industry-pages/cosmetics-ingredient-labeling-review.ko.json'
import p153 from '@/content/industry-pages/cosmetics-ingredient-labeling-review.en.json'
import p154 from '@/content/industry-pages/cosmetics-ingredient-labeling-review.zh.json'
import p155 from '@/content/industry-pages/cosmetics-ingredient-labeling-review.ja.json'
import p156 from '@/content/industry-pages/cosmetics-cgmp.ko.json'
import p157 from '@/content/industry-pages/cosmetics-cgmp.en.json'
import p158 from '@/content/industry-pages/cosmetics-cgmp.zh.json'
import p159 from '@/content/industry-pages/cosmetics-cgmp.ja.json'
import p160 from '@/content/industry-pages/cosmetics-safety-assessment.ko.json'
import p161 from '@/content/industry-pages/cosmetics-safety-assessment.en.json'
import p162 from '@/content/industry-pages/cosmetics-safety-assessment.zh.json'
import p163 from '@/content/industry-pages/cosmetics-safety-assessment.ja.json'

export const INDUSTRY_PAGES: IndustryPage[] = [
  p0 as IndustryPage,
  p1 as IndustryPage,
  p2 as IndustryPage,
  p3 as IndustryPage,
  p4 as IndustryPage,
  p5 as IndustryPage,
  p6 as IndustryPage,
  p7 as IndustryPage,
  p8 as IndustryPage,
  p9 as IndustryPage,
  p10 as IndustryPage,
  p11 as IndustryPage,
  p12 as IndustryPage,
  p13 as IndustryPage,
  p14 as IndustryPage,
  p15 as IndustryPage,
  p16 as IndustryPage,
  p17 as IndustryPage,
  p18 as IndustryPage,
  p19 as IndustryPage,
  p20 as IndustryPage,
  p21 as IndustryPage,
  p22 as IndustryPage,
  p23 as IndustryPage,
  p24 as IndustryPage,
  p25 as IndustryPage,
  p26 as IndustryPage,
  p27 as IndustryPage,
  p28 as IndustryPage,
  p29 as IndustryPage,
  p30 as IndustryPage,
  p31 as IndustryPage,
  p32 as IndustryPage,
  p33 as IndustryPage,
  p34 as IndustryPage,
  p35 as IndustryPage,
  p36 as IndustryPage,
  p37 as IndustryPage,
  p38 as IndustryPage,
  p39 as IndustryPage,
  p40 as IndustryPage,
  p41 as IndustryPage,
  p42 as IndustryPage,
  p43 as IndustryPage,
  p44 as IndustryPage,
  p45 as IndustryPage,
  p46 as IndustryPage,
  p47 as IndustryPage,
  p48 as IndustryPage,
  p49 as IndustryPage,
  p50 as IndustryPage,
  p51 as IndustryPage,
  p52 as IndustryPage,
  p53 as IndustryPage,
  p54 as IndustryPage,
  p55 as IndustryPage,
  p56 as IndustryPage,
  p57 as IndustryPage,
  p58 as IndustryPage,
  p59 as IndustryPage,
  p60 as IndustryPage,
  p61 as IndustryPage,
  p62 as IndustryPage,
  p63 as IndustryPage,
  p64 as IndustryPage,
  p65 as IndustryPage,
  p66 as IndustryPage,
  p67 as IndustryPage,
  p68 as IndustryPage,
  p69 as IndustryPage,
  p70 as IndustryPage,
  p71 as IndustryPage,
  p72 as IndustryPage,
  p73 as IndustryPage,
  p74 as IndustryPage,
  p75 as IndustryPage,
  p76 as IndustryPage,
  p77 as IndustryPage,
  p78 as IndustryPage,
  p79 as IndustryPage,
  p80 as IndustryPage,
  p81 as IndustryPage,
  p82 as IndustryPage,
  p83 as IndustryPage,
  p84 as IndustryPage,
  p85 as IndustryPage,
  p86 as IndustryPage,
  p87 as IndustryPage,
  p88 as IndustryPage,
  p89 as IndustryPage,
  p90 as IndustryPage,
  p91 as IndustryPage,
  p92 as IndustryPage,
  p93 as IndustryPage,
  p94 as IndustryPage,
  p95 as IndustryPage,
  p96 as IndustryPage,
  p97 as IndustryPage,
  p98 as IndustryPage,
  p99 as IndustryPage,
  p100 as IndustryPage,
  p101 as IndustryPage,
  p102 as IndustryPage,
  p103 as IndustryPage,
  p104 as IndustryPage,
  p105 as IndustryPage,
  p106 as IndustryPage,
  p107 as IndustryPage,
  p108 as IndustryPage,
  p109 as IndustryPage,
  p110 as IndustryPage,
  p111 as IndustryPage,
  p112 as IndustryPage,
  p113 as IndustryPage,
  p114 as IndustryPage,
  p115 as IndustryPage,
  p116 as IndustryPage,
  p117 as IndustryPage,
  p118 as IndustryPage,
  p119 as IndustryPage,
  p120 as IndustryPage,
  p121 as IndustryPage,
  p122 as IndustryPage,
  p123 as IndustryPage,
  p124 as IndustryPage,
  p125 as IndustryPage,
  p126 as IndustryPage,
  p127 as IndustryPage,
  p128 as IndustryPage,
  p129 as IndustryPage,
  p130 as IndustryPage,
  p131 as IndustryPage,
  p132 as IndustryPage,
  p133 as IndustryPage,
  p134 as IndustryPage,
  p135 as IndustryPage,
  p136 as IndustryPage,
  p137 as IndustryPage,
  p138 as IndustryPage,
  p139 as IndustryPage,
  p140 as IndustryPage,
  p141 as IndustryPage,
  p142 as IndustryPage,
  p143 as IndustryPage,
  p144 as IndustryPage,
  p145 as IndustryPage,
  p146 as IndustryPage,
  p147 as IndustryPage,
  p148 as IndustryPage,
  p149 as IndustryPage,
  p150 as IndustryPage,
  p151 as IndustryPage,
  p152 as IndustryPage,
  p153 as IndustryPage,
  p154 as IndustryPage,
  p155 as IndustryPage,
  p156 as IndustryPage,
  p157 as IndustryPage,
  p158 as IndustryPage,
  p159 as IndustryPage,
  p160 as IndustryPage,
  p161 as IndustryPage,
  p162 as IndustryPage,
  p163 as IndustryPage,
]
