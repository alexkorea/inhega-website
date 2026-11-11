// INHEGA-FOCUS-1103 2차(보스 msg 4784·4787, 2026-11-03) — 원고 정본. 상황 질문의 출처 검색어·법령 대조표는 보고서(bot-chat/mac4_mac7_INHEGA-FOCUS-1103-P2.txt)에만.
// 화면에 조문 번호·출처·확인일·가격·수수료를 적지 않는다(svc-nocite-gate·nofree-gate). 서버 전용.
import type { PillarUi } from './focus-pillar-view'

export type PillarLocale = 'en' | 'zh' | 'ja'
export interface PillarI18n {
  label: string
  seoTitle: string
  h1: string
  description: string
  glance: { label: string; value: string }[]
  stagesHeading?: string
  stages?: { title: string; desc: string; href?: string }[]
  note?: { heading: string; items: string[] }
  related: { title: string; href: string }[]
}

export const FOCUS_PILLARS_I18N: Record<PillarLocale, { ui: PillarUi; pillars: Record<string, PillarI18n> }> = {
  "en": {
    "ui": {
      "badge": "Focus service",
      "answerLabel": "Short answer",
      "chooserHeading": "Find your situation",
      "glanceHeading": "{label} at a glance",
      "stagesHeading": "Step by step",
      "situationsHeading": "Common situations",
      "situationsLead": "Pick the question closest to your case: each one gives the conclusion first, then what changes it, the documents involved and the expected timeline.",
      "conclusionLabel": "Short answer",
      "docsLabel": "Documents",
      "periodLabel": "Timeline",
      "moreLabel": "Read more",
      "stageMore": "Read more",
      "relatedBadge": "Related guides",
      "relatedHeading": "Related guides",
      "consult": "Request a consultation",
      "quote": "Get a quote",
      "contactHref": "/en/contact",
      "quoteHref": "/en/contact"
    },
    "pillars": {
      "nonprofit": {
        "label": "Nonprofit association",
        "seoTitle": "Register a Nonprofit Association in Korea",
        "h1": "How to Register a Nonprofit Association in Korea",
        "description": "Register a nonprofit association in Korea: ministry permit under the Civil Act, articles, founding meeting, registration within 3 weeks, and foreign founders.",
        "glance": [
          {
            "label": "Who needs it",
            "value": "A group of people (members) organised for academic, religious, charitable, artistic, social or other non-commercial purposes that wants legal personality in Korea"
          },
          {
            "label": "Requirements",
            "value": "A non-commercial purpose, articles of incorporation (정관) containing every item the Civil Act requires, assets and a business plan able to carry out the purpose, and an establishment permit (설립허가) from the competent ministry (supervising authority, 주무관청)"
          },
          {
            "label": "Process",
            "value": "Pre-consultation with the ministry → articles of incorporation and inaugural general meeting (창립총회) → permit application → review and permit → transfer of assets → incorporation registration (설립등기) at the court registry → report to the ministry and unique number certificate (고유번호증)"
          },
          {
            "label": "Documents",
            "value": "Permit application, founders' details, articles of incorporation, list of assets with proof, business plan and income and expense budget, incoming officers' details and letters of acceptance, minutes of the inaugural general meeting"
          },
          {
            "label": "Timeline",
            "value": "Ministry review within 20 days unless there is a special reason; proof of asset transfer within 1 month of the permit; registration within 3 weeks of the permit; report to the ministry within 10 days of registration"
          }
        ],
        "stagesHeading": "From founding meeting to registration",
        "stages": [
          {
            "title": "1. Identify the competent ministry (주무관청)",
            "desc": "The ministry that oversees your main activity issues the permit — for example education, health and welfare, or culture, sports and tourism. Where activities stay within one city or province, the permit power is often delegated to that local government. Each ministry has its own rules on attachments and review practice."
          },
          {
            "title": "2. Articles of incorporation (정관)",
            "desc": "The articles must state the purpose, name, office location, assets, appointment and dismissal of directors, how membership is gained and lost, and the duration or grounds for dissolution. The founders sign and seal them."
          },
          {
            "title": "3. Inaugural general meeting (창립총회)",
            "desc": "The inaugural general meeting approves the articles, elects officers and adopts the business plan and budget. The minutes are attached to the establishment permit (설립허가) application."
          },
          {
            "title": "4. Permit application and review",
            "desc": "The application goes to the competent ministry with the articles, list of assets, business plan, officer documents and minutes. The ministry checks that the purpose is realistic, the finances can support it and the name does not duplicate another corporation's."
          },
          {
            "title": "5. Assets, registration and report",
            "desc": "After the permit, transfer the assets to the corporation and submit proof within 1 month, complete incorporation registration (설립등기) at the court registry within 3 weeks of the permit — the corporation exists from registration — and report to the ministry within 10 days of registering."
          }
        ],
        "note": {
          "heading": "If founders or officers are foreign nationals",
          "items": [
            "The Civil Act does not restrict founders, members or officers by nationality. The competent ministry (주무관청) reviews the founders and incoming officers named in the application like any other applicant.",
            "Documents issued abroad are, in practice, notarized and apostilled (or legalized by a Korean consulate where the Apostille Convention does not apply) and submitted with a Korean translation.",
            "Scholarship, research, academic and charitable corporations may fall under the Public Interest Corporations Act (공익법인의 설립·운영에 관한 법률), which requires 5 to 15 directors and 2 auditors and ministry approval for each revenue-generating project.",
            "YouSun Administrative Agency handles the ministry pre-consultation, drafting of the articles of incorporation and the establishment permit filing, and can work with founders in English."
          ]
        },
        "related": [
          {
            "title": "Nonprofit corporation establishment guide",
            "href": "/en/blog/nonprofit-corporation-establishment-guide"
          },
          {
            "title": "Articles of association and the ministry permit",
            "href": "/en/blog/nonprofit-corporation-articles-and-approval-guide"
          },
          {
            "title": "Dissolving and liquidating a nonprofit corporation",
            "href": "/en/blog/nonprofit-dissolution-liquidation-procedure"
          },
          {
            "title": "Corporate research lab establishment",
            "href": "/en/services/research-lab"
          }
        ]
      },
      "telecom-business": {
        "label": "Telecom business filing",
        "seoTitle": "Value-Added Telecom Business Registration in Korea",
        "h1": "Value-Added Telecommunications Business Registration in Korea",
        "description": "Value-added telecom business registration in Korea: who must report to MSIT, special-type registration, facilities-based registration and foreign company rules.",
        "glance": [
          {
            "label": "Who needs it",
            "value": "Companies offering telecom-based services in Korea: value-added services such as app marketplaces and online video platforms, special-type value-added services such as webhard, P2P file sharing and bulk SMS sending, and facilities-based services such as phone and internet access"
          },
          {
            "label": "Requirements",
            "value": "Value-added: report (부가통신사업 신고; treated as filed for internet services with capital of KRW 100 million or less). Special type: registration (특수한 유형의 부가통신사업 등록) with technical-measure plans, staff and facilities, and financial soundness. Facilities-based: registration (기간통신사업 등록) by a corporation with financial and technical capacity and a user protection plan"
          },
          {
            "label": "Process",
            "value": "Classify the service → check whether the deemed report (신고 의제) applies → prepare the report or registration application → file with the Ministry of Science and ICT (MSIT, 과학기술정보통신부) through its Central Radio Management Office (중앙전파관리소) → respond to supplement requests → receive the report certificate or registration certificate"
          },
          {
            "label": "Documents",
            "value": "Value-added: report form, network diagram (if requested for a new type of service), statement of personal information protection measures (if personal data is handled). Facilities-based: application, business plan, articles of incorporation, shareholder register, terms of service and user protection plan, equipment list and network diagram"
          },
          {
            "label": "Timeline",
            "value": "Facilities-based and special-type registration certificates are issued within 30 days of application; supplement requests set a period of up to 10 days; the business must start within 1 year of the report or registration"
          }
        ],
        "stagesHeading": "Which filing applies to your service",
        "stages": [
          {
            "title": "Value-added telecommunications business report (부가통신사업 신고)",
            "desc": "Any telecom service other than facilities-based service is a value-added service — app marketplaces and online video services are expressly included. File a report with the Ministry of Science and ICT (MSIT, 과학기술정보통신부); internet-based operators with capital of KRW 100 million or less are treated as having reported but must file within 1 month once capital exceeds that amount."
          },
          {
            "title": "Special-type value-added telecommunications business registration (특수한 유형의 부가통신사업 등록)",
            "desc": "Webhard and P2P services that fall under the Copyright Act's special online service providers, and services that send text messages through a carrier's network, must register instead. Registration requires technical-measure plans, staff and physical facilities, financial soundness, a business plan and a user protection plan, and compliance is checked at least once a year."
          },
          {
            "title": "Facilities-based telecommunications business registration (기간통신사업 등록)",
            "desc": "Phone, internet access and line-leasing services require registration by a corporation with financial and technical capacity and a user protection plan. A company that only uses basic telecom incidentally to provide its own product, such as an IoT device sending data without voice calls, files a facilities-based report instead."
          },
          {
            "title": "Duties for large services",
            "desc": "Value-added operators that reach both thresholds — an average of 1 million or more daily users in Korea and at least 1% of domestic traffic — must take service-stability and user-request measures, submit an annual report, and appoint a domestic agent (국내대리인) if they have no address or office in Korea."
          }
        ],
        "note": {
          "heading": "Foreign companies: four points to check",
          "items": [
            "The Telecommunications Business Act (전기통신사업법) places no nationality restriction on the value-added telecommunications business report (부가통신사업 신고). How the filing is structured — overseas parent, Korean subsidiary or branch — is decided case by case.",
            "A domestic agent (국내대리인) is required only for value-added operators with no address or office in Korea that meet both thresholds: an average of 1 million or more daily users in Korea and at least 1% of total domestic traffic over the last 3 months of the previous year. If you have a Korean subsidiary or a Korean company you control, the agent must be chosen from them.",
            "For facilities-based services that install their own line facilities, a foreign government or foreign corporation cannot register directly, and foreign governments and foreigners together may hold no more than 49% of the shares. A company whose largest shareholder is foreign and holds 15% or more is treated as foreign.",
            "Personal data laws, including the Personal Information Protection Act, apply their own domestic-agent tests, which YouSun Administrative Agency reviews separately from the telecom filing."
          ]
        },
        "related": [
          {
            "title": "Location-based service report",
            "href": "/en/services/location-based-service"
          },
          {
            "title": "KC radio certification",
            "href": "/en/services/kc-radio-certification"
          },
          {
            "title": "Mail-order sales report",
            "href": "/en/services/mail-order-sales-report"
          },
          {
            "title": "Online shop mail-order sales registration guide",
            "href": "/en/blog/online-shop-communication-sales-registration-guide"
          }
        ]
      },
      "location-based-service": {
        "label": "Location-based service report",
        "seoTitle": "Korea Location Information Act: LBS Business Report",
        "h1": "Location-Based Service Report under Korea's Location Information Act",
        "description": "Filing a location-based service report under Korea's Location Information Act: foreign companies without a Korean entity, apostille, domestic agent and timing.",
        "glance": [
          {
            "label": "Who needs it",
            "value": "Businesses providing services based on personal location information to users in Korea, including foreign companies with no Korean entity. Services that never process personal location information fall outside the report"
          },
          {
            "label": "Requirements",
            "value": "A business plan, main business equipment including the location information system, and administrative and technical location information protection measures (위치정보 보호조치). No report within 1 year of a closure order. Small business owners and one-person creative companies may start first and file a follow-up report within 1 month (소상공인등의 사후 신고)"
          },
          {
            "label": "Process",
            "value": "Decide whether a report applies → design protection measures → prepare documents (foreign corporations: notarize, apostille or consular-legalize and translate home-country documents) → file with the Korea Media and Communications Commission (KMCC, 방송미디어통신위원회) → respond to supplement requests → report accepted"
          },
          {
            "label": "Documents",
            "value": "Report form, business plan covering the company and the service, documents showing the main equipment and where it is installed, documents proving location information protection measures; foreign corporations add notarized and apostilled corporate documents with Korean translation"
          },
          {
            "label": "Timeline",
            "value": "The KMCC accepts the report once it confirms the filing complies with the Act. In practice, 2 to 4 weeks after documents are complete, and 4 to 8 weeks for foreign corporations including home-country document preparation"
          }
        ],
        "stagesHeading": "From scoping to an accepted report",
        "stages": [
          {
            "title": "1. Report or registration?",
            "desc": "Providing a service that uses personal location information is a location-based service business and needs a location-based service business report (위치기반서비스사업 신고). Collecting location information and supplying it to location-based service businesses is a location information business: with personal location information it is a personal location information business (개인위치정보사업), which needs registration that only a corporation can obtain."
          },
          {
            "title": "2. Protection measures",
            "desc": "Administrative measures include designating a location information manager (위치정보관리책임자), limiting access rights at each stage, written handling procedures, a log of location data provision and regular internal checks. Technical measures include authentication, firewalls, automatic access logs, security software and encryption."
          },
          {
            "title": "3. Home-country documents",
            "desc": "Foreign corporations prepare corporate registration documents notarized and apostilled, or legalized by a Korean consulate where the Apostille Convention does not apply, with a Korean translation."
          },
          {
            "title": "4. Terms of service and consent",
            "desc": "Before using personal location information, state the operator's contact details, users' rights, the service, and retention basis and periods in the terms of service, and obtain the user's consent."
          },
          {
            "title": "5. Filing and later changes",
            "desc": "File with the Korea Media and Communications Commission (KMCC, 방송미디어통신위원회) and respond to any supplement request. Later changes to the trade name, main office or location information system need a change report, and suspending or closing the business needs notice to users and a report 30 days in advance."
          }
        ],
        "note": {
          "heading": "Foreign companies: what to check first",
          "items": [
            "You do not need a Korean subsidiary or branch. A foreign corporation can file the report in its own name when it provides a service based on personal location information to users in Korea.",
            "The Location Information Act (위치정보법) has no domestic agent (국내대리인) requirement. In practice, many foreign companies appoint a local representative to handle filing and supplement requests, and domestic-agent rules under personal data and telecom laws are reviewed separately.",
            "Home-country corporate documents need notarization plus an apostille (or consular legalization) and a Korean translation. In practice, this takes 1 to 4 weeks depending on the country.",
            "If you collect personal location information and supply it to other businesses, that is a personal location information business requiring registration (개인위치정보사업 등록), not a report. Decide first whether you collect or only use location data.",
            "If your app is also a value-added telecom service, the value-added telecommunications business report (부가통신사업 신고) with the Ministry of Science and ICT (MSIT, 과학기술정보통신부) is a separate filing."
          ]
        },
        "related": [
          {
            "title": "Location-based service report for foreign companies without a Korean entity",
            "href": "/en/blog/location-based-service-business-registration-foreign-company"
          },
          {
            "title": "Location-based service report for Korean companies",
            "href": "/en/blog/location-based-service-domestic-registration-guide"
          },
          {
            "title": "Location information business registration vs. location-based service report",
            "href": "/en/blog/location-information-business-registration"
          },
          {
            "title": "Location-based service change report",
            "href": "/en/blog/location-based-service-change-report"
          },
          {
            "title": "Value-added telecommunications business report",
            "href": "/en/services/telecom-business"
          }
        ]
      },
      "cosmetics": {
        "label": "Cosmetics registration",
        "seoTitle": "South Korea Cosmetic Registration: MFDS Guide",
        "h1": "South Korea Cosmetic Registration for Brands and Importers",
        "description": "South Korea cosmetic registration explained: responsible seller and manufacturer registration with MFDS, functional cosmetics review and ingredient checks.",
        "glance": [
          {
            "label": "Who needs it",
            "value": "Cosmetics manufacturers (화장품제조업; own or contract manufacturing, or primary packaging), cosmetics responsible sellers (화장품책임판매업) that place contract-manufactured or imported cosmetics on the market, and customized cosmetics sellers (맞춤형화장품판매업) that mix or refill products"
          },
          {
            "label": "Requirements",
            "value": "Responsible seller: quality control and post-market safety management standards and a responsible sales manager (책임판매관리자). Manufacturer: facility standards (some can be omitted when only part of the process is done). Both: no disqualifying grounds"
          },
          {
            "label": "Process",
            "value": "Ingredient review → responsible seller registration → cosmetics manufacturer registration (if you manufacture) → functional cosmetics review or report (기능성화장품 심사·보고) → safety data prepared and kept → labelling and advertising check"
          },
          {
            "label": "Documents",
            "value": "Registration application, proof of the responsible sales manager's qualifications, facility description (manufacturers), quality control documents; for functional cosmetics, product-level safety and efficacy data"
          },
          {
            "label": "Timeline",
            "value": "Business registration is handled by the regional office (지방식품의약품안전청) of the Ministry of Food and Drug Safety (MFDS, 식품의약품안전처) for your premises; a request to set or change an ingredient's use standard is answered within 180 days of submitting the data"
          }
        ],
        "stagesHeading": "Cosmetics registration step by step",
        "stages": [
          {
            "title": "1. Ingredient review",
            "desc": "Check the formula against the MFDS (Ministry of Food and Drug Safety, 식품의약품안전처) list of ingredients that cannot be used and its use limits for preservatives, colourants, UV filters and other restricted ingredients. Preservatives, colourants and UV filters without a published use standard cannot be used; a use standard can be requested if needed."
          },
          {
            "title": "2. Cosmetics responsible seller registration (화장품책임판매업)",
            "desc": "Any company selling cosmetics under its own name in Korea — including products made by a contract manufacturer or imported — registers as a cosmetics responsible seller, appoints a responsible sales manager (책임판매관리자) and meets quality control and post-market safety standards.",
            "href": "/en/blog/cosmetics-responsible-distributor"
          },
          {
            "title": "3. Cosmetics manufacturer registration (화장품제조업)",
            "desc": "Companies that manufacture, take on contract manufacturing or do primary packaging register as manufacturers and meet facility standards. A brand that only uses a contract manufacturer can sell under a responsible seller registration without registering as a manufacturer.",
            "href": "/en/blog/cosmetics-manufacturing-registration"
          },
          {
            "title": "4. Functional cosmetics review or report (기능성화장품 심사·보고)",
            "desc": "Products sold as functional cosmetics — whitening, anti-wrinkle, sun protection, hair colour and similar — need an MFDS review or a report for each product. A report applies when the active ingredient, content, claims, usage and test methods match MFDS's published standards; otherwise a full review is needed.",
            "href": "/en/services/functional-cosmetics"
          },
          {
            "title": "5. Safety data",
            "desc": "Products labelled or advertised for infants or children need product-level safety data prepared and kept. From 1 January 2028, responsible sellers must prepare cosmetics safety assessment (화장품 안전성 평가) data for each product and have it reviewed by a qualified safety assessor before sale, phased in by business size and product type, with smaller businesses starting on 1 January 2031."
          }
        ],
        "note": {
          "heading": "Overseas brands selling into Korea",
          "items": [
            "Registration is tied to business premises in Korea. An overseas brand without a Korean entity sells through a Korean company registered as the cosmetics responsible seller (화장품책임판매업) — your own Korean subsidiary, or a Korean importer or distributor.",
            "The responsible seller is accountable for quality control and post-market safety of the products it places on the market and needs a responsible sales manager (책임판매관리자) who meets the qualification rules, such as a relevant science degree or experience in cosmetics manufacturing or quality control.",
            "Responsible sellers registered only for online import-agency (buy-for-me) trades do not need a responsible sales manager.",
            "If your products claim whitening, anti-wrinkle, UV protection or hair colouring, plan the functional cosmetics review or report (기능성화장품 심사·보고) before launch."
          ]
        },
        "related": [
          {
            "title": "Functional cosmetics review and report",
            "href": "/en/services/functional-cosmetics"
          },
          {
            "title": "Cosmetics responsible distributor registration",
            "href": "/en/blog/cosmetics-responsible-distributor"
          },
          {
            "title": "Cosmetics manufacturer registration",
            "href": "/en/blog/cosmetics-manufacturing-registration"
          },
          {
            "title": "Cosmetics manufacturing facility standards",
            "href": "/en/blog/cosmetics-manufacturing-facility-guide"
          },
          {
            "title": "Importing and selling cosmetics in Korea",
            "href": "/en/blog/cosmetics-import-sales-registration-guide"
          },
          {
            "title": "Changing a responsible distributor registration",
            "href": "/en/blog/cosmetics-distributor-change-registration"
          },
          {
            "title": "Quasi-drugs vs cosmetics",
            "href": "/en/blog/quasi-drug-vs-cosmetics-classification"
          }
        ]
      },
      "health-food": {
        "label": "Health functional food",
        "seoTitle": "Health Functional Food Registration in South Korea",
        "h1": "Health Functional Food Registration in South Korea: Import, Sale and Manufacture",
        "description": "Health functional food (food supplement) registration in South Korea: importer registration, overseas facility registration, sales reports and ingredients.",
        "glance": [
          {
            "label": "Who needs it",
            "value": "Businesses that manufacture (specialized HFF manufacturing business or venture HFF manufacturing business, 건강기능식품전문제조업·벤처제조업), sell (HFF general sales business or HFF distribution sales business (own-brand), 건강기능식품일반판매업·유통전문판매업), import, or sell customised health functional food (건강기능식품) in Korea"
          },
          {
            "label": "Requirements",
            "value": "Facility standards for each business type, hygiene training before starting (every year for sellers), a quality manager (품질관리인) and HFF GMP (우수건강기능식품제조기준) compliance for manufacturers, and individual recognition (개별인정형 원료) for any functional ingredient the Ministry of Food and Drug Safety (MFDS, 식품의약품안전처) has not published"
          },
          {
            "label": "Process",
            "value": "Import: imported food import and sales business registration (수입식품등 수입·판매업 영업등록) with the regional MFDS office (지방식품의약품안전청) → register the overseas manufacturing facility → declare each shipment. Sale: report to the city/county/district office (시장·군수·구청장). Manufacture: licence from the regional MFDS office → product manufacturing report (품목제조신고)"
          },
          {
            "label": "Documents",
            "value": "Import: business registration application, overseas facility registration, import declaration with Korean labelling. Sale: business report and training certificate (plus a contract manufacturing agreement for HFF distribution sales businesses). Foreign applicants: consular-legalized or apostilled documents"
          },
          {
            "label": "Timeline",
            "value": "Import and sales business registration 3 days; sales report decided within 3 days (deemed accepted if no notice); product manufacturing report 10 days; shipment inspection from 2 days (document review) to 10 days (laboratory testing)"
          }
        ],
        "stagesHeading": "Licences by business type",
        "stages": [
          {
            "title": "Sales business report",
            "desc": "The health functional food (HFF, 건강기능식품) general sales business and the HFF distribution sales business (own-brand) (건강기능식품일반판매업·유통전문판매업) — brands that sell products made for them by a specialized HFF manufacturing business — set up premises for each outlet and report to the city/county/district office (시장·군수·구청장). Pharmacies do not need this report.",
            "href": "/en/blog/health-functional-food-sales-registration-guide"
          },
          {
            "title": "Manufacturing licence",
            "desc": "Specialized HFF manufacturing businesses (건강기능식품전문제조업), and venture HFF manufacturing businesses (건강기능식품벤처제조업) — venture companies that commission a specialized manufacturer — obtain a licence for each site from the regional office (지방식품의약품안전청) of the Ministry of Food and Drug Safety (MFDS, 식품의약품안전처). After the licence, each product is covered by a product manufacturing report (품목제조신고) with its manufacturing method and other documents."
          },
          {
            "title": "Importing",
            "desc": "Obtain imported food import and sales business registration (수입식품등 수입·판매업 영업등록) under the Special Act on Imported Food Safety Management (수입식품안전관리 특별법), register the overseas manufacturing facility before the first import declaration, then declare every shipment and pass inspection."
          },
          {
            "title": "Individually recognized functional ingredients (개별인정형 원료)",
            "desc": "Ingredients MFDS has not published can only be used once MFDS recognizes them based on safety and functionality data submitted by a manufacturer, a registered importer or another eligible applicant."
          }
        ],
        "note": {
          "heading": "Overseas supplement brands: what to know",
          "items": [
            "Imported food import and sales business registration (수입식품등 수입·판매업 영업등록) is tied to business premises in Korea that meet facility standards. An overseas brand without a Korean entity, in practice, imports through a registered Korean importer or its own Korean company.",
            "Before the first import declaration, the importer or the overseas facility operator registers the overseas manufacturing facility with the Ministry of Food and Drug Safety (MFDS, 식품의약품안전처). The registration is valid for 2 years and can be extended.",
            "Functional ingredients must be on MFDS's published list or individually recognized (개별인정형 원료). A registered importer can apply for recognition with safety and functionality data; ingredients claiming to treat or prevent disease cannot be recognized.",
            "Foreign nationals applying for a sales report or manufacturing licence submit documents legalized by a Korean consulate or apostilled in their country."
          ]
        },
        "related": [
          {
            "title": "Health functional food sales registration guide",
            "href": "/en/blog/health-functional-food-sales-registration-guide"
          },
          {
            "title": "Imported food sales business",
            "href": "/en/services/import-food-sales"
          },
          {
            "title": "Food manufacturing licence",
            "href": "/en/services/food-manufacturing"
          },
          {
            "title": "HACCP certification",
            "href": "/en/services/haccp"
          }
        ]
      },
      "factory": {
        "label": "Factory registration",
        "seoTitle": "Factory Registration in South Korea: Full Process",
        "h1": "Factory Registration in South Korea",
        "description": "Factory registration in South Korea: establishment approval for 500 m² or more, completion report, factory register entry and factory registration certificate.",
        "glance": [
          {
            "label": "Who needs it",
            "value": "Factory establishment approval (공장설립등의 승인) is needed to build, expand or change the business type of a factory with a factory building area (공장건축면적) of 500 square metres or more. Smaller factories can still apply for factory registration (공장등록), and can seek approval if they want the bundled permits"
          },
          {
            "label": "Requirements",
            "value": "Individual sites must meet land-use rules; planned sites such as industrial complexes require a move-in contract (입주계약); the building must have use approval and the machinery must be installed"
          },
          {
            "label": "Process",
            "value": "Site review → factory establishment approval (or move-in contract) → construction and equipment installation → completion report (완료신고, within 2 months) → entry in the factory register → factory registration certificate (공장등록증명서)"
          },
          {
            "label": "Documents",
            "value": "Establishment approval application and attachments, approval certificate or move-in contract, completion report, building use approval, proof of manufacturing equipment installation, business plan, land and building registry extracts or lease agreement"
          },
          {
            "label": "Timeline",
            "value": "Approval decided within 20 days of application (14 days if entirely within local authority powers, 7 days if no bundled permits are involved); completion report within 2 months of use approval and installation; changes registered within 2 months"
          }
        ],
        "stagesHeading": "From site to registration certificate",
        "stages": [
          {
            "title": "1. Site and sector review",
            "desc": "Confirm the business is manufacturing under the Korean Standard Industrial Classification and choose between an individual site and a planned site such as an industrial complex, checking any location restrictions."
          },
          {
            "title": "2. Factory establishment approval or move-in contract",
            "desc": "Factories with a factory building area (공장건축면적) of 500 square metres or more obtain factory establishment approval (공장설립등의 승인) from the city/county/district office (시장·군수·구청장) before the building permit. In an industrial complex, the move-in contract (입주계약) with the management agency counts as approval."
          },
          {
            "title": "3. Construction and equipment",
            "desc": "Build or fit out the factory, obtain building use approval and install the manufacturing machinery. Many related permits are deemed granted through the approval."
          },
          {
            "title": "4. Completion report and registration",
            "desc": "File the completion report (공장설립등의 완료신고) within 2 months — with the management agency if you are inside an industrial complex — and the factory is entered in the factory register."
          },
          {
            "title": "5. Certificate and changes",
            "desc": "Registered manufacturers can obtain a factory registration certificate (공장등록증명서), including online through the Factory-On online support system (공장설립온라인지원시스템) for factories outside the local area. Register any change to the registered details within 2 months."
          }
        ],
        "note": {
          "heading": "Foreign-invested manufacturers",
          "items": [
            "The Industrial Cluster Development and Factory Establishment Act (산업집적법) does not distinguish by investor nationality. The factory is registered to the business that owns or occupies it, typically your Korean subsidiary.",
            "Tenants can register: owners or occupiers of factories outside the approval requirement can apply for factory registration (공장등록) directly.",
            "Inside an industrial complex, completion reports and registration go through the complex's management agency rather than the city/county/district office (시장·군수·구청장).",
            "A registered manufacturer can request a factory registration certificate (공장등록증명서), and owners, occupiers and other interested parties can request a copy of the factory register; the Factory-On online support system (공장설립온라인지원시스템) issues certificates for factories outside the local area."
          ]
        },
        "related": [
          {
            "title": "Factory registration application guide",
            "href": "/en/blog/factory-registration-application-guide"
          },
          {
            "title": "Building use change",
            "href": "/en/services/building-usage"
          },
          {
            "title": "Food manufacturing licence",
            "href": "/en/services/food-manufacturing"
          },
          {
            "title": "Cosmetics manufacturing facility standards",
            "href": "/en/blog/cosmetics-manufacturing-facility-guide"
          }
        ]
      }
    }
  },
  "zh": {
    "ui": {
      "badge": "重点业务",
      "answerLabel": "简短回答",
      "chooserHeading": "选择您的情况",
      "glanceHeading": "{label}一览",
      "stagesHeading": "分步流程",
      "situationsHeading": "常见情境问答",
      "situationsLead": "按您的实际情况查看结论、适用条件、所需材料和大致时间。",
      "conclusionLabel": "结论",
      "docsLabel": "所需材料",
      "periodLabel": "所需时间",
      "moreLabel": "了解更多",
      "stageMore": "了解更多",
      "relatedBadge": "相关指南",
      "relatedHeading": "相关指南",
      "consult": "申请咨询",
      "quote": "获取报价",
      "contactHref": "/zh/contact",
      "quoteHref": "/zh/contact"
    },
    "pillars": {
      "nonprofit": {
        "label": "非营利社团法人",
        "seoTitle": "韩国非营利社团法人设立：主管机关许可与登记流程",
        "h1": "在韩国成立协会、学会、商会：非营利社团法人设立流程",
        "description": "在韩国把协会、学会或商会办成非营利社团法人，需要取得主管机关的设立许可，再到登记所办理设立登记。本页说明外国人能否发起、需要哪些材料、各阶段期限，以及YouSun Administrative Agency可以协助的范围。",
        "glance": [
          {
            "label": "适用对象",
            "value": "以学术、宗教、慈善、技艺、社交等非营利事业为目的、由会员组成的团体，例如行业协会、学会、同乡会、商会"
          },
          {
            "label": "要件",
            "value": "非营利目的；载明目的、名称、事务所所在地、资产、理事任免、会员资格得失等必备事项的章程（정관）；足以开展目的事业的财产与事业计划；主管部门（주무관청）的设立许可（설립허가）"
          },
          {
            "label": "流程",
            "value": "与主管部门事前沟通 → 起草章程、召开创立大会 → 提出设立许可申请 → 审查与许可 → 财产转移 → 设立登记（설립등기） → 向主管部门报告登记、申请固有编号证（고유번호증）"
          },
          {
            "label": "所需材料",
            "value": "设立许可申请书、发起人基本信息、章程、财产目录及证明、事业计划与收支预算、拟任理事等人员资料与就任承诺书、创立大会会议记录（창립총회 회의록）"
          },
          {
            "label": "处理期限",
            "value": "主管部门审查原则上20日内；获批后1个月内提交财产转移证明；获批后3周内设立登记；登记后10日内向主管部门报告"
          }
        ],
        "stagesHeading": "设立分步流程",
        "stages": [
          {
            "title": "① 确定主管部门（주무관청）",
            "desc": "主管部门按法人的目的事业确定，而不是按地区确定。例如教育对应教育部、文化体育对应文化体育观光部。活动范围仅限某一市·道（시·도）时，许可权限常委任给该市·道，需事先确认。"
          },
          {
            "title": "② 起草章程（정관）与召开创立大会",
            "desc": "章程须载明目的、名称、事务所所在地、资产、理事任免、会员资格得失等事项。创立大会通过章程、选任理事和监事，并制作会议记录。"
          },
          {
            "title": "③ 申请设立许可（설립허가）",
            "desc": "向主管部门提交申请书及附件。审查重点是目的事业能否实现、财务基础是否稳固、名称是否与其他法人重复。主管部门可附加条件后许可。"
          },
          {
            "title": "④ 财产转移与设立登记（설립등기）",
            "desc": "获批后把财产目录所列财产转移到法人名下，并在1个月内提交证明；自许可之日起3周内在主事务所所在地办理设立登记，法人自登记时成立。"
          },
          {
            "title": "⑤ 登记后管理",
            "desc": "登记后10日内书面报告主管部门。此后每个事业年度结束后需报告事业实绩、决算和下年度计划，变更章程须取得主管部门许可。"
          }
        ],
        "note": {
          "heading": "外国人、外国企业发起时须知",
          "items": [
            "《民法》（민법）没有限制发起人或会员的国籍，外国人或外国企业也可以参与发起，但主管部门（주무관청）会审查目的事业的可行性与财务基础。",
            "外国企业作为发起人时，需要提交本国法人证明、章程（정관）等资料；这些境外文件实务中一般需公证并办理海牙认证（아포스티유，附加证明书）或领事认证，再附韩文译本。",
            "法人设立登记（설립등기）的代理属于法务士（법무사）业务；YouSun Administrative Agency负责设立许可（설립허가）阶段的章程草案、申请材料和与主管部门的沟通。"
          ]
        },
        "related": [
          {
            "title": "韩国非营利社团法人设立完整指南",
            "href": "/zh/blog/nonprofit-corporation-establishment-guide"
          },
          {
            "title": "社团法人设立许可与章程起草",
            "href": "/zh/blog/nonprofit-corporation-articles-and-approval-guide"
          },
          {
            "title": "社团法人解散与清算流程",
            "href": "/zh/blog/nonprofit-dissolution-liquidation-procedure"
          },
          {
            "title": "许可代办的一般流程",
            "href": "/zh/blog/administrative-license-agency-procedure-flow"
          }
        ]
      },
      "telecom-business": {
        "label": "增值电信业务申报",
        "seoTitle": "韩国增值电信业务申报：外国App与平台如何办理",
        "h1": "韩国增值电信业务申报：App、平台、短信与基础电信的区别",
        "description": "在韩国上线App、平台或在线服务，多数属于增值电信业务，需要向科学技术信息通信部申报；短信群发、网盘等特殊类型需登记，基础电信则只能由法人登记。本页说明外国企业的申报方法、境内代理人标准与所需材料。",
        "glance": [
          {
            "label": "适用对象",
            "value": "提供App市场、在线视频、平台等增值电信（부가통신）服务的经营者；短信群发、网盘·P2P等特殊类型（특수한 유형의 부가통신사업）经营者；提供电话、网络接入等基础电信（기간통신）服务的经营者"
          },
          {
            "label": "要件",
            "value": "增值电信为申报（通过互联网提供且资本金1亿韩元以下视为已申报）；特殊类型需具备技术措施计划、人员与设施、财务健全性后登记；基础电信须为法人并具备财务与技术能力、用户保护计划（이용자 보호계획）后登记"
          },
          {
            "label": "流程",
            "value": "判定服务类型 → 确认是否视为已申报（신고 의제） → 准备申报书或登记申请书 → 向科学技术信息通信部（과학기술정보통신부，中央电波管理所（중앙전파관리소））提交 → 补正 → 领取申报证明或登记证"
          },
          {
            "label": "所需材料",
            "value": "增值电信：申报书、网络结构图（被要求时）、个人信息保护措施明细（处理个人信息时）；基础电信：登记申请书、事业计划书、章程、股东名册、使用条款（이용약관）与用户保护计划、设备明细与网络结构图"
          },
          {
            "label": "处理期限",
            "value": "基础电信与特殊类型增值电信的登记证自申请日起30日内发放；材料有缺陷时限期10日内补正；申报或登记后须在1年内开展业务"
          }
        ],
        "stagesHeading": "申报分步流程",
        "stages": [
          {
            "title": "① 判定服务属于哪一类",
            "desc": "先判断提供的是基础电信（기간통신，原样传输语音、数据、影像，或出租线路设备）、一般增值电信（부가통신），还是短信群发、网盘·P2P等特殊类型（특수한 유형의 부가통신사업）。类型决定是申报还是登记。"
          },
          {
            "title": "② 确认是否视为已申报（신고 의제）",
            "desc": "通过互联网提供增值电信服务、资本金1亿韩元以下的经营者视为已申报；资本金超过1亿韩元后须在1个月内正式申报。特殊类型不论资本金都要登记。"
          },
          {
            "title": "③ 准备材料",
            "desc": "增值电信以申报书为主，处理个人信息时附个人信息保护措施明细；外国企业需另备本国法人证明及韩文译本。"
          },
          {
            "title": "④ 提交与补正",
            "desc": "向科学技术信息通信部（과학기술정보통신부）提交（可电子申报），由中央电波管理所（중앙전파관리소）处理。材料有缺陷时会限期10日内补正，可申请延长。"
          },
          {
            "title": "⑤ 领证与后续管理",
            "desc": "领取申报证明或登记证后，须在1年内开展业务；变更事项、转让、停业·歇业也要按期申报。"
          }
        ],
        "note": {
          "heading": "外国企业须知",
          "items": [
            "增值电信业务申报（부가통신사업 신고）对国籍没有限制，没有韩国法人的外国企业也可以申报；本国法人证明等境外文件实务中需公证、海牙认证（아포스티유，附加证明书）或领事认证并附韩文译本。",
            "在韩国没有住所或营业所的增值电信经营者，若前一年末前3个月日均韩国用户100万人以上、且韩国境内流量占比1%以上，须书面指定国内代理人（국내대리인）。",
            "一定范围的基础电信业务（기간통신사업），外国政府或外国法人不能登记，外国股东合计持股不得超过49%。",
            "韩国的增值电信是“申报”，不是中国式的经营许可证审批；但未申报经营可处2年以下有期徒刑或1亿韩元以下罚金。"
          ]
        },
        "related": [
          {
            "title": "位置服务申报（外国企业）",
            "href": "/zh/services/location-based-service"
          },
          {
            "title": "KC电波认证（适合性评估）",
            "href": "/zh/services/kc-radio-certification"
          },
          {
            "title": "通信销售业申报",
            "href": "/zh/services/mail-order-sales-report"
          },
          {
            "title": "网店通信销售业申报指南",
            "href": "/zh/blog/online-shop-communication-sales-registration-guide"
          }
        ]
      },
      "location-based-service": {
        "label": "位置服务申报",
        "seoTitle": "韩国位置信息法｜外国企业位置服务申报指南",
        "h1": "韩国位置服务申报：没有韩国法人的外国企业如何办理",
        "description": "向韩国用户提供基于个人位置的App或服务，须依韩国《位置信息法》向放送媒体通信委员会申报。本页说明外国法人能否直接申报、海牙认证与韩文翻译、是否必须指定韩国代理人、申报与登记的区别及所需时间。",
        "glance": [
          {
            "label": "适用对象",
            "value": "以个人位置信息（개인위치정보）为对象、向韩国用户提供位置服务（위치기반서비스）的经营者，包括没有韩国法人的外国企业；仅以物品位置为对象的位置服务不在申报范围"
          },
          {
            "label": "要件",
            "value": "具备事业计划、含位置信息系统的主要设备、位置信息技术与管理保护措施；被命令废止业务后未满1年的不能申报；小商工人（소상공인）、一人创业企业（1인 창조기업）可在开业后1个月内事后申报"
          },
          {
            "label": "流程",
            "value": "判定是否为申报对象 → 设计保护措施 → 准备材料（外国法人办理本国文件公证、海牙认证与翻译） → 向放送媒体通信委员会（방송미디어통신위원회）申报 → 补正 → 受理"
          },
          {
            "label": "所需材料",
            "value": "位置服务事业申报书、事业计划书、主要设备内容及设置场所证明、位置信息保护措施（위치정보 보호조치）证明；外国法人另附法人登记文件的公证认证件及韩文译本"
          },
          {
            "label": "处理期限",
            "value": "主管机关审查内容，符合法律即受理申报。实务中材料齐全后约2~4周，外国法人连同境外文件准备约4~8周"
          }
        ],
        "stagesHeading": "申报分步流程",
        "stages": [
          {
            "title": "① 判定是否需要申报",
            "desc": "关键看是否处理“个人位置信息（개인위치정보）”，即能识别特定个人位置的信息（与其他信息容易结合而识别的也算）。仅处理物品位置的服务不需要申报；自己采集并提供个人位置信息的，则属于个人位置信息事业（개인위치정보사업），需要登记。"
          },
          {
            "title": "② 设计保护措施",
            "desc": "制定位置信息处理与管理规程、指定访问权限人等管理措施，以及防火墙、加密等技术措施，并让位置信息的采集、利用、提供记录在系统中自动保存。"
          },
          {
            "title": "③ 准备本国文件",
            "desc": "外国法人的法人登记证明等文件，需在本国公证后办理海牙认证（아포스티유，附加证明书）；非海牙缔约国则办理领事认证，再附韩文译本。"
          },
          {
            "title": "④ 向放送媒体通信委员会（방송미디어통신위원회）申报",
            "desc": "提交申报书及事业计划书、设备证明、保护措施证明。材料不明确或欠缺时会被要求补正。"
          },
          {
            "title": "⑤ 受理后的管理",
            "desc": "商号、主事务所所在地、位置信息系统变更时须办理变更申报；公开使用条款（이용약관）、取得用户同意、按期销毁位置信息等义务持续适用。"
          }
        ],
        "note": {
          "heading": "外国企业须知",
          "items": [
            "没有韩国法人或分支机构，也可以用外国法人名义申报。只要向韩国用户提供以个人位置信息（개인위치정보）为对象的服务，就适用韩国《位置信息法》（위치정보법，全称《位置信息保护及利用等相关法律》）。",
            "《位置信息法》本身没有指定国内代理人（국내대리인）的义务，代理人文件也不是法定申报材料。但为对接受理、补正和通知，实务中多委托韩国当地的代理人；《个人信息保护法》（개인정보 보호법）《电气通信事业法》（전기통신사업법）中的国内代理人标准需另行判断。",
            "中国内地自2023年11月7日起适用海牙认证（아포스티유），送往韩国的公文书办理附加证明书即可，无需再办领事认证；文件需附韩文译本，境外文件准备实务中约1~4周。",
            "自己采集个人位置信息并提供给他人的“个人位置信息事业（개인위치정보사업）”是登记制，且只限法人；利用他人提供的位置信息为用户提供服务的“位置服务事业（위치기반서비스사업）”才是申报制。"
          ]
        },
        "related": [
          {
            "title": "没有韩国法人的外国企业位置服务申报指南",
            "href": "/zh/blog/location-based-service-business-registration-foreign-company"
          },
          {
            "title": "位置服务申报完整指南（韩国法人）",
            "href": "/zh/blog/location-based-service-domestic-registration-guide"
          },
          {
            "title": "位置信息事业登记与位置服务申报的区别",
            "href": "/zh/blog/location-information-business-registration"
          },
          {
            "title": "位置服务变更申报",
            "href": "/zh/blog/location-based-service-change-report"
          },
          {
            "title": "增值电信业务申报",
            "href": "/zh/services/telecom-business"
          },
          {
            "title": "KC电波认证",
            "href": "/zh/services/kc-radio-certification"
          }
        ]
      },
      "cosmetics": {
        "label": "化妆品责任销售业",
        "seoTitle": "韩国化妆品法规：责任销售业注册与进口上市流程",
        "h1": "中国化妆品品牌进入韩国：责任销售业注册与上市流程",
        "description": "化妆品要在韩国销售，须由在韩国注册的化妆品责任销售业者负责品质与安全管理。本页按成分审查、责任销售业注册、制造业注册、功能性化妆品审查、安全性资料的顺序，说明中国品牌没有韩国公司时的做法。",
        "glance": [
          {
            "label": "适用对象",
            "value": "自行或委托制造化妆品的制造业；委托制造或进口后在韩国流通销售的责任销售业（화장품책임판매업）；混合、分装后销售的定制化妆品销售业（맞춤형화장품판매업）"
          },
          {
            "label": "要件",
            "value": "责任销售业须具备质量管理与上市后安全管理标准并配备责任销售管理人（책임판매관리자）；制造业须符合设施标准（只做部分工序可省略部分设施）；不存在欠格事由"
          },
          {
            "label": "流程",
            "value": "成分审查 → 责任销售业注册 →（自行制造时）制造业注册（화장품제조업 등록） → 功能性化妆品（기능성화장품）审查或报告 → 编制保存安全性资料 → 标示与广告检查"
          },
          {
            "label": "所需材料",
            "value": "注册申请书、质量管理与上市后安全管理规定、责任销售管理人资格证明；制造业另附设施明细；功能性化妆品为品目别安全性与有效性资料"
          },
          {
            "label": "处理期限",
            "value": "营业注册由辖区地方食品医药品安全厅（지방식품의약품안전청）处理，实务中约2~4周；原料使用标准（원료 사용기준）指定或变更申请自提交资料之日起180日内通知结果"
          }
        ],
        "stagesHeading": "化妆品上市分步流程",
        "stages": [
          {
            "title": "① 成分审查",
            "desc": "确认是否含有MFDS（食品医药品安全处，식품의약품안전처）公布的禁用原料，防腐剂、色素、防晒剂等限用原料是否在标准以内。未公布使用标准的防腐剂、色素、防晒剂不能使用，必要时申请指定或变更使用标准。"
          },
          {
            "title": "② 化妆品责任销售业（화장품책임판매업）注册",
            "desc": "以自己名义在韩国流通销售化妆品，须注册责任销售业。委托制造或进口后销售都属于此类，须配备责任销售管理人（책임판매관리자），具备质量管理与安全管理标准。"
          },
          {
            "title": "③ 化妆品制造业（화장품제조업）注册",
            "desc": "自行制造、接受委托制造或做一次包装的，须注册制造业并满足设施标准。只委托韩国代工厂生产的品牌方，不注册制造业也可以凭责任销售业销售。"
          },
          {
            "title": "④ 功能性化妆品审查·报告（기능성화장품 심사·보고）",
            "desc": "以美白、抗皱、防晒等功能性化妆品销售的，须按品目接受安全性与有效性审查或提交报告。"
          },
          {
            "title": "⑤ 安全性资料",
            "desc": "标示或宣传适用于婴幼儿、儿童的，须按产品编制并保存安全性资料。责任销售业者在销售前编制产品安全性评估（화장품 안전성 평가）资料并经评估人员审核的制度，自2028年1月1日起按业者规模和产品分阶段实施（年生产、进口额不足10亿韩元的业者为2031年1月1日）。"
          }
        ],
        "note": {
          "heading": "外国企业须知",
          "items": [
            "责任销售业（화장품책임판매업）须向“责任销售营业所所在地”的地方食品医药品安全厅（지방식품의약품안전청）注册，境外公司本身无法以境外地址注册。实务中做法有两种：在韩设立法人后注册，或交由已注册的韩国责任销售业者进口销售。",
            "进口化妆品须编制进口管理记录（수입관리기록서），包括原料成分规格与含量、制造国与制造企业、制造及销售证明（제조 및 판매증명서，俗称自由销售证明）、韩文产品说明书样本、按批号的质量检验结果等。",
            "原则上每个批号都要做质量检验；制造企业的质量管理标准获得国家间互认，或经现场审核被认定达到韩国CGMP（优秀化妆品制造及质量管理标准，우수화장품 제조 및 품질관리기준）水平的，可免于在韩国检验。",
            "韩国没有中国式的普通化妆品逐品备案，但责任销售业者须在流通销售前报告制造中使用的原料目录（원료 목록），并每年报告上一年的生产或进口实绩。"
          ]
        },
        "related": [
          {
            "title": "功能性化妆品审查与报告",
            "href": "/zh/services/functional-cosmetics"
          },
          {
            "title": "化妆品责任销售业注册指南",
            "href": "/zh/blog/cosmetics-responsible-distributor"
          },
          {
            "title": "进口化妆品销售注册：责任销售管理人与全成分标示",
            "href": "/zh/blog/cosmetics-import-sales-registration-guide"
          },
          {
            "title": "化妆品制造业注册与设施标准",
            "href": "/zh/blog/cosmetics-manufacturing-facility-guide"
          },
          {
            "title": "化妆品责任销售业变更注册",
            "href": "/zh/blog/cosmetics-distributor-change-registration"
          },
          {
            "title": "医药外品与化妆品的区别",
            "href": "/zh/blog/quasi-drug-vs-cosmetics-classification"
          }
        ]
      },
      "health-food": {
        "label": "保健食品进口",
        "seoTitle": "韩国保健食品进口注册：健康功能食品出口韩国流程",
        "h1": "保健品出口韩国：健康功能食品进口注册、海外工厂注册与通关",
        "description": "中国保健品要进入韩国，需要韩国进口商办理进口食品营业登记、为海外工厂办理注册，再按品目进口申报并接受检验。本页说明健康功能食品的营业类型、原料认定、处理期限，以及在韩自有品牌销售的做法。",
        "glance": [
          {
            "label": "适用对象",
            "value": "健康功能食品（건강기능식품）的制造（专门制造业、风险制造业）、销售（一般销售业、流通专门销售业）、进口，或定制健康功能食品销售的经营者"
          },
          {
            "label": "要件",
            "value": "符合各营业的设施标准；营业前完成安全卫生教育（안전위생교육；销售业每年）；制造业须选任质量管理人（품질관리인）并符合优秀健康功能食品制造标准（우수건강기능식품제조기준，GMP）；未公布的原料须先取得功能性原料认定（기능성 원료 인정）"
          },
          {
            "label": "流程",
            "value": "进口：海外制造业所注册（해외제조업소 등록） → 地方食品医药品安全厅（지방식품의약품안전청）进口·销售业营业登记（수입식품등 수입·판매업 영업등록） → 按品目进口申报与检验 / 销售：向市长·郡守·区厅长（시장·군수·구청장）营业申报 / 制造：地方食品医药品安全厅营业许可 → 品目制造申报（품목제조신고）"
          },
          {
            "label": "所需材料",
            "value": "进口：营业登记申请书、卫生教育证明、海外工厂在本国的许可证明、进口申报书、韩文标示、制造方法与配比资料 / 销售：营业申报书、教育证明，流通专门销售业（건강기능식품유통전문판매업）附委托生产合同"
          },
          {
            "label": "处理期限",
            "value": "进口·销售业营业登记3日；进口检验书面2日、现场3日、随机抽样5日、精密10日；销售业申报3日内通知是否受理；品目制造申报10日内通知（逾期未通知视为受理）"
          }
        ],
        "stagesHeading": "按营业类型办理",
        "stages": [
          {
            "title": "健康功能食品（건강기능식품）进口",
            "desc": "韩国进口商办理进口食品等进口·销售业营业登记（수입식품등 수입·판매업 영업등록），在进口申报前为海外工厂办理注册（有效期2年），再按品目进口申报并接受检验，合格后通关流通。"
          },
          {
            "title": "健康功能食品销售业申报",
            "desc": "一般销售业（건강기능식품일반판매업），以及委托专门制造业者生产、以自有商标销售的流通专门销售业（건강기능식품유통전문판매업），须按营业所具备设施，向所在地市长·郡守·区厅长（시장·군수·구청장）申报。在药店销售的不需申报。"
          },
          {
            "title": "健康功能食品制造业许可",
            "desc": "健康功能食品专门制造业（건강기능식품전문제조업），以及风险企业委托专门制造业者生产的风险制造业（건강기능식품벤처제조업），须按营业所取得许可，许可后按品目办理品目制造申报（품목제조신고）。"
          },
          {
            "title": "功能性原料认定（기능성 원료 인정）",
            "desc": "MFDS（食品医药品安全处，식품의약품안전처）未公布的原料或成分，须由制造业者、进口·销售业者等提交安全性与功能性资料，取得健康功能食品原料认定后才能使用。"
          }
        ],
        "note": {
          "heading": "外国企业须知",
          "items": [
            "进口·销售业营业登记（수입식품등 수입·판매업 영업등록）须在韩国具备符合标准的营业设施，因此一般由在韩法人或合作的韩国进口商办理；中国企业自己在韩设立法人也可以作为进口商。",
            "中国工厂须在韩国进口商首次进口申报前完成海外制造业所注册（해외제조업소 등록），可由进口商或工厂方申请，附上工厂在中国取得的许可或登记证明；有效期2年，可申请延长。",
            "产品须符合韩国健康功能食品（건강기능식품）的标准与规格，所用功能性原料须属于MFDS（食品医药品安全处，식품의약품안전처）公布原料或个别认定型原料（개별인정형 원료）。中国的“蓝帽子”批准不能直接替代。",
            "检验不合格的，进口申报人须在接到通知后1年内选择退运、转运第三国、经批准转为饲料等其他用途或废弃。"
          ]
        },
        "related": [
          {
            "title": "进口食品等进口销售业登记",
            "href": "/zh/services/import-food-sales"
          },
          {
            "title": "健康功能食品销售业申报完整指南",
            "href": "/zh/blog/health-functional-food-sales-registration-guide"
          },
          {
            "title": "HACCP认证",
            "href": "/zh/services/haccp"
          },
          {
            "title": "食品制造加工业",
            "href": "/zh/services/food-manufacturing"
          },
          {
            "title": "食品制造业的网上销售申报",
            "href": "/zh/blog/food-manufacturing-online-sales-report"
          }
        ]
      },
      "factory": {
        "label": "工厂登记",
        "seoTitle": "韩国工厂登记：设厂批准、竣工申报到工厂登记",
        "h1": "在韩国设厂：工厂设立批准、竣工申报与工厂登记流程",
        "description": "在韩国设立制造工厂，工厂建筑面积500平方米以上的须先取得工厂设立批准，建成并安装设备后2个月内竣工申报，再记入工厂登记簿。本页说明外资企业、租赁厂房、产业园区入驻等情况的做法和期限。",
        "glance": [
          {
            "label": "适用对象",
            "value": "新设、扩建工厂建筑面积（공장건축면적）500平方米以上的工厂或变更业种的，属于工厂设立批准（공장설립등의 승인）对象；不足500平方米的工厂也可申请工厂登记（공장등록），需要许可拟制（인허가 의제）时也可申请批准"
          },
          {
            "label": "要件",
            "value": "属于韩国标准产业分类（한국표준산업분류）中的制造业；个别选址须符合土地相关法令的选址标准，产业园区（산업단지）等计划选址须签订入驻合同（입주계약）；取得建筑物使用批准（사용승인）并完成机械设备安装"
          },
          {
            "label": "流程",
            "value": "选址审核 → 工厂设立批准（或入驻合同） → 建设与设备安装 → 完工申报（2个月内） → 记入工厂登记簿（공장등록대장） → 领取工厂登记证明书（공장등록증명서）"
          },
          {
            "label": "所需材料",
            "value": "工厂设立批准申请书及附件、批准书或入驻合同、完工申报书、建筑物使用批准书、制造设施安装完毕证明、事业计划书、土地与建筑物登记事项证明或租赁合同"
          },
          {
            "label": "处理期限",
            "value": "批准自申请起20日内决定（全部属市·郡·区权限的14日，不需拟制处理的7日）；完工申报（공장설립등의 완료신고）为使用批准与设备安装完成后2个月内；登记事项变更后2个月内变更登记（변경등록）"
          }
        ],
        "stagesHeading": "设厂分步流程",
        "stages": [
          {
            "title": "① 选址与业种审核",
            "desc": "确认拟经营业种属于制造业，选择个别选址或产业园区（산업단지）等计划选址，并确认该地块的用途地区（용도지역）是否允许建工厂。"
          },
          {
            "title": "② 工厂设立批准（공장설립등의 승인）",
            "desc": "工厂建筑面积（공장건축면적）500平方米以上的，须取得市长·郡守·区厅长（시장·군수·구청장）批准；入驻产业园区并签订入驻合同（입주계약）的视为已批准。批准时道路占用、排放设施等相关许可可一并拟制处理。"
          },
          {
            "title": "③ 建设与设备安装",
            "desc": "取得建筑许可后施工，建成后取得使用批准（사용승인）并安装机械设备。工厂须在规定期间（原则4年）内建成。"
          },
          {
            "title": "④ 完工申报（공장설립등의 완료신고）与工厂登记（공장등록）",
            "desc": "自最终建筑物使用批准并完成设备安装之日起2个月内完工申报，受理机关记入工厂登记簿（공장등록대장）；登记时饲料制造业等相关登记、申报也可一并拟制。"
          },
          {
            "title": "⑤ 登记后管理",
            "desc": "登记事项变更须在2个月内办理变更登记（변경등록）；未完成完工申报即开工运转、未办变更登记的，可被处以罚款（과태료）。"
          }
        ],
        "note": {
          "heading": "外资企业须知",
          "items": [
            "工厂登记（공장등록）法规没有限制经营者的国籍，在韩设立的外资法人与韩国企业按同样的程序办理批准、完工申报（공장설립등의 완료신고）和登记。",
            "租赁厂房经营的，作为工厂占有人也可以申请登记，需附租赁合同；500平方米以上的新设或扩建，则仍须先取得批准。",
            "工厂设立批准（공장설립등의 승인）、建筑许可与各类环保、消防许可相互关联，建筑设计图纸由建筑师等专业人士负责；YouSun Administrative Agency负责选址审核、批准与完工申报材料、受理与补正对接。",
            "登记完成后，制造业经营者可以向市·郡·区或管理机关（관리기관）申请工厂登记证明书（공장등록증명서）；通过工厂设立在线支援系统（공장설립온라인지원시스템），也能申请辖区外工厂的证明书。"
          ]
        },
        "related": [
          {
            "title": "工厂登记申请方法与处理期限",
            "href": "/zh/blog/factory-registration-application-guide"
          },
          {
            "title": "制造业营业登记流程",
            "href": "/zh/blog/manufacturing-business-registration-procedure"
          },
          {
            "title": "建筑物用途变更",
            "href": "/zh/services/building-usage"
          },
          {
            "title": "建筑物用途变更许可指南",
            "href": "/zh/blog/building-use-change-permit-guide"
          }
        ]
      }
    }
  },
  "ja": {
    "ui": {
      "badge": "重点業務",
      "answerLabel": "結論",
      "chooserHeading": "あなたの状況を選ぶ",
      "glanceHeading": "{label}の概要",
      "stagesHeading": "手続きの流れ",
      "situationsHeading": "状況別のよくある質問",
      "situationsLead": "日本企業・日本人の方からよく寄せられる状況ごとに、結論、条件による違い、必要書類と期間をまとめました。",
      "conclusionLabel": "結論",
      "docsLabel": "必要書類",
      "periodLabel": "期間",
      "moreLabel": "詳しく見る",
      "stageMore": "詳しく見る",
      "relatedBadge": "関連ガイド",
      "relatedHeading": "関連ガイド",
      "consult": "相談を申し込む",
      "quote": "見積もりを依頼",
      "contactHref": "/ja/contact",
      "quoteHref": "/ja/contact"
    },
    "pillars": {
      "nonprofit": {
        "label": "社団法人設立",
        "seoTitle": "韓国の社団法人設立｜非営利法人の許可と登記の流れ",
        "h1": "韓国で社団法人（非営利法人）を設立する — 主務官庁の許可から設立登記まで",
        "description": "韓国で非営利の社団法人をつくるには、事業を所管する主務官庁の設立許可を受け、許可から3週間以内に設立登記をします。日本人・日本企業が設立に関わる場合の書類、期間、流れをまとめました。",
        "glance": [
          {
            "label": "対象",
            "value": "学術・宗教・慈善・技芸・社交など、営利でない事業を目的に人（社員・会員）が集まった団体"
          },
          {
            "label": "要件",
            "value": "非営利の目的、民法が定める必要記載事項を備えた定款（정관）、目的事業を行える財産と事業計画、主務官庁（주무관청）の設立許可（설립허가）"
          },
          {
            "label": "手続き",
            "value": "主務官庁との事前相談 → 定款作成・創立総会 → 設立許可申請 → 審査・許可 → 財産の移転 → 設立登記（설립등기） → 登記の報告"
          },
          {
            "label": "必要書類",
            "value": "設立許可申請書、設立発起人の人的事項（法人の場合は名称・所在地・代表者・定款）、定款、財産目録と証明書類、事業計画・収支予算書、役員就任予定者の書類と就任承諾書、創立総会議事録（창립총회 회의록）"
          },
          {
            "label": "処理期間",
            "value": "主務官庁の審査は特別な事情がなければ20日以内（官庁により14日以内）、許可後1か月以内に財産移転の証明、許可から3週間以内に設立登記、登記から10日以内に主務官庁へ報告"
          }
        ],
        "stagesHeading": "社団法人設立の流れ",
        "stages": [
          {
            "title": "① 目的と主務官庁の確定",
            "desc": "目的事業を所管する主務官庁（주무관청）を確定し、事前相談で設立の可否と求められる書類を確認します。"
          },
          {
            "title": "② 定款の作成・創立総会",
            "desc": "目的・名称・事務所の所在地・資産・役員・会員資格などを定款（정관）に定め、創立総会で定款と役員を決議して議事録（창립총회 회의록）を作成します。"
          },
          {
            "title": "③ 設立許可の申請",
            "desc": "設立許可（설립허가）の申請書に定款、財産目録、事業計画・収支予算書、役員就任予定者の書類などを添えて主務官庁に提出します。"
          },
          {
            "title": "④ 審査・許可",
            "desc": "目的事業の実現可能性、財政的基礎、他の法人と同じ名称でないかなどが審査され、許可されると設立許可証が交付されます。"
          },
          {
            "title": "⑤ 財産移転・設立登記",
            "desc": "許可後、遅滞なく財産を法人に移転して1か月以内に証明書類を提出し、許可から3週間以内に主たる事務所の所在地で設立登記（설립등기）をします。"
          },
          {
            "title": "⑥ 登記の報告と運営",
            "desc": "登記から10日以内に主務官庁へ報告します。その後は毎事業年度、事業計画・実績と決算を主務官庁に提出します。"
          }
        ],
        "note": {
          "heading": "日本人・日本企業が設立に関わるとき",
          "items": [
            "民法には設立者・会員・役員の国籍を制限する規定がありません。韓国に外国人登録をしている方は外国人登録番号で人的事項を記載できます。",
            "日本法人が設立発起人になる場合は、法人の名称・主たる事務所・代表者の人的事項と定款を記載した書類、法人として設立を決めたことを証明する書類（取締役会議事録など）を提出します。",
            "日本で発行された登記事項証明書や議事録は、公証とアポスティーユを受けて韓国語翻訳を付けるのが実務上の一般的な準備です。",
            "主務官庁（주무관청）は目的事業で決まり、外交部・文化体育観光部・産業通商部など官庁ごとに設立と監督の規則があります。審査期間や提出書類の細部も官庁によって異なります。"
          ]
        },
        "related": [
          {
            "title": "韓国非営利社団法人設立ガイド",
            "href": "/ja/blog/nonprofit-corporation-establishment-guide"
          },
          {
            "title": "非営利社団法人の定款作成と主務官庁の許可",
            "href": "/ja/blog/nonprofit-corporation-articles-and-approval-guide"
          },
          {
            "title": "社団法人の解散手続と清算",
            "href": "/ja/blog/nonprofit-dissolution-liquidation-procedure"
          }
        ]
      },
      "telecom-business": {
        "label": "付加通信事業の申告",
        "seoTitle": "韓国の付加通信事業申告｜電気通信事業法の手続き",
        "h1": "韓国の電気通信事業法 — 付加通信事業の申告と基幹通信事業の登録",
        "description": "韓国でアプリ・プラットフォーム・動画配信などの通信サービスを提供する事業者は、電気通信事業法に基づき付加通信事業の申告をします。対象の判定、みなし申告、外国企業の国内代理人までまとめました。",
        "glance": [
          {
            "label": "対象",
            "value": "電話・インターネット接続などの基幹通信役務、アプリマーケット・動画配信などの付加通信役務、ウェブハード・P2P・SMS送信などの特殊な類型の付加通信役務を提供する事業者"
          },
          {
            "label": "要件",
            "value": "付加通信事業（부가통신사업）は申告（インターネットで提供する資本金1億ウォン以下は申告とみなす）、特殊な類型（특수한 유형의 부가통신사업）は技術的措置の計画・人員・物的施設・財務健全性を備えた登録、基幹通信事業（기간통신사업）は財政・技術的能力と利用者保護計画を備えた法人の登録"
          },
          {
            "label": "手続き",
            "value": "役務区分の判定 → みなし申告の該当確認 → 申告書・登録申請書の作成 → 科学技術情報通信部（과학기술정보통신부）の中央電波管理所（중앙전파관리소）へ提出 → 補完 → 申告証明書・登録証の交付"
          },
          {
            "label": "必要書類",
            "value": "付加通信：申告書、通信網構成図（求められた場合）、個人情報保護措置構築明細書（個人情報を扱う場合）／基幹通信：登録申請書、事業計画書、定款、株主名簿、利用約款（이용약관）・利用者保護計画、設備明細・通信網構成図"
          },
          {
            "label": "処理期間",
            "value": "基幹通信事業と特殊な類型の付加通信事業の登録証は申請日から30日以内、補完要求は10日以内の期間を指定、付加通信事業は申告・登録から1年以内に事業開始"
          }
        ],
        "stagesHeading": "申告・登録の流れ",
        "stages": [
          {
            "title": "① 役務区分の判定",
            "desc": "提供するサービスが、内容を変えずに送受信させる基幹通信役務か、それ以外の付加通信役務か、特殊な類型の付加通信役務かを機能ごとに整理します。"
          },
          {
            "title": "② みなし申告の確認",
            "desc": "インターネットで付加通信役務を提供する資本金1億ウォン以下の事業者は申告したものとみなされます。資本金が1億ウォンを超えたら、その日から1か月以内に申告します。"
          },
          {
            "title": "③ 書類の作成",
            "desc": "付加通信事業（부가통신사업）は申告書と該当する添付書類を、基幹通信事業（기간통신사업）は登録申請書と事業計画書・定款・株主名簿・利用約款（이용약관）・設備明細を準備します。"
          },
          {
            "title": "④ 提出",
            "desc": "科学技術情報通信部（과학기술정보통신부）長官あてに提出し、電子申請もできます。付加通信事業の申告と回線設備を持たない基幹通信事業の登録は中央電波管理所（중앙전파관리소）が処理します。"
          },
          {
            "title": "⑤ 補完への対応",
            "desc": "記載の不備や添付書類の不足があると、10日以内の期間を定めて補完を求められます。申し出れば補完期間を延ばせます。"
          },
          {
            "title": "⑥ 交付と事業開始",
            "desc": "付加通信事業は申告証明書が交付されます。申告・登録から1年以内に事業を始め、変更・譲渡・休廃業の申告も継続して管理します。"
          }
        ],
        "note": {
          "heading": "外国企業が確認すべきポイント",
          "items": [
            "付加通信事業の申告（부가통신사업 신고）には国籍の制限規定がなく、韓国法人のない外国企業も申告できます。",
            "韓国に住所・営業所がない付加通信事業者で、1日平均の国内利用者100万人以上かつ国内トラフィック1%以上の両方に当たる場合は、国内代理人（국내대리인）を書面で指定します。韓国に子会社などがあれば、その中から指定します。",
            "一定の基準に当たる基幹通信事業（기간통신사업）は外国政府・外国法人が登録できず、外国政府・外国人の株式保有は合計で発行株式総数の49%までです。",
            "位置情報を使う機能があれば位置情報の保護及び利用等に関する法律（位置情報法）に基づく申告、無線機器を輸入・販売するならKC適合性評価を別途確認します。"
          ]
        },
        "related": [
          {
            "title": "位置情報サービス（位置基盤サービス）事業の申告",
            "href": "/ja/services/location-based-service"
          },
          {
            "title": "KC電波認証（適合性評価）",
            "href": "/ja/services/kc-radio-certification"
          },
          {
            "title": "通信販売業の申告",
            "href": "/ja/services/mail-order-sales-report"
          }
        ]
      },
      "location-based-service": {
        "label": "位置情報サービスの申告",
        "seoTitle": "韓国の位置情報法｜位置情報サービス事業の申告",
        "h1": "韓国の位置情報法 — 外国企業の位置情報サービス事業の申告（届出）",
        "description": "韓国の利用者に位置情報を使うサービスを提供する事業者は、位置情報法に基づき放送メディア通信委員会に位置情報サービス事業の申告をします。韓国法人のない日本企業の申告方法、アポスティーユ、国内代理人、登録との違いを解説。",
        "glance": [
          {
            "label": "対象",
            "value": "個人位置情報（개인위치정보）を対象に位置情報サービスを提供する事業者。韓国の利用者にサービスを提供するなら、韓国法人のない外国企業も含む"
          },
          {
            "label": "要件",
            "value": "事業計画書、位置情報システムを含む事業用主要設備、位置情報の保護措置（위치정보 보호조치：管理的・技術的措置）を備えること。廃止命令から1年たっていない者は申告不可"
          },
          {
            "label": "手続き",
            "value": "申告対象の判定 → 保護措置の設計 → 書類準備（外国法人は本国書類の公証・アポスティーユ・翻訳） → 放送メディア通信委員会（방송미디어통신위원회）へ申告 → 補完 → 申告受理"
          },
          {
            "label": "必要書類",
            "value": "位置情報サービス事業（위치기반서비스사업）申告書、事業計画書、主要設備の内容と設置場所がわかる書類、位置情報の保護措置を証明する書類、外国法人は登記書類の公証・アポスティーユと韓国語翻訳"
          },
          {
            "label": "処理期間",
            "value": "行政庁は内容を検討し、法に適合すれば申告を受理します。実務上は書類完備から2〜4週間、外国法人は本国書類の準備を含めて4〜8週間"
          }
        ],
        "stagesHeading": "申告の流れ",
        "stages": [
          {
            "title": "① 申告対象の判定",
            "desc": "サービスが個人位置情報（개인위치정보）を使うか、位置情報を自ら収集して他社に提供する「位置情報事業」に当たるかを整理します。物の位置だけを扱うサービスは申告対象外になりえます。"
          },
          {
            "title": "② 保護措置の設計",
            "desc": "取扱い指針の制定やアクセス権者の指定などの管理的措置と、ファイアウォール・暗号化などの技術的措置、利用・提供事実の自動記録を設計します。"
          },
          {
            "title": "③ 書類の準備",
            "desc": "事業計画書、主要設備（サーバーなど）の内容と設置場所、保護措置の証明書類を作成し、外国法人は本国の登記書類に公証・アポスティーユと韓国語翻訳を付けます。"
          },
          {
            "title": "④ 申告",
            "desc": "放送メディア通信委員会（방송미디어통신위원회）あてに申告します。受理事務は地域の放送メディア通信事務所長に委任されており、電子文書でも提出できます。"
          },
          {
            "title": "⑤ 受理後の管理",
            "desc": "利用約款の公開、個人位置情報主体の同意、記録の保存を運用し、商号・所在地・位置情報システムを変えるときは変更申告をします。"
          }
        ],
        "note": {
          "heading": "外国企業が先に確認する4つのこと",
          "items": [
            "韓国に法人や支店がなくても、外国法人名義で申告できます。韓国の利用者に個人位置情報を使うサービスを提供すれば適用されます。",
            "位置情報の保護及び利用等に関する法律（位置情報法）には国内代理人（국내대리인）を指定する義務がありません。ただし受付・補完の連絡のために韓国側の代理人を置くことが多く、個人情報保護法や電気通信事業法の国内代理人基準は別に確認します。",
            "本国の登記書類は公証とアポスティーユ（締約国でなければ領事認証）を受け、韓国語翻訳を付けます。国によって準備に1〜4週間かかります。",
            "位置情報を自ら収集して他社に提供する個人位置情報事業（개인위치정보사업）は、申告ではなく登録の対象で、法人であることなどが要件です。収集する側か使う側かを最初に判定します。"
          ]
        },
        "related": [
          {
            "title": "外国企業向け 韓国位置情報サービス事業の申告ガイド",
            "href": "/ja/blog/location-based-service-business-registration-foreign-company"
          },
          {
            "title": "韓国位置情報サービス事業の届出ガイド（韓国法人）",
            "href": "/ja/blog/location-based-service-domestic-registration-guide"
          },
          {
            "title": "位置情報事業の登録と位置基盤サービス事業の申告の違い",
            "href": "/ja/blog/location-information-business-registration"
          },
          {
            "title": "位置基盤サービス事業の変更申告",
            "href": "/ja/blog/location-based-service-change-report"
          },
          {
            "title": "付加通信事業の申告（電気通信事業法）",
            "href": "/ja/services/telecom-business"
          }
        ]
      },
      "cosmetics": {
        "label": "化粧品責任販売業の登録",
        "seoTitle": "韓国の化粧品規制｜責任販売業登録と輸出の手続き",
        "h1": "韓国の化粧品規制 — 責任販売業の登録から機能性化粧品・安全性資料まで",
        "description": "日本の化粧品を韓国で販売するには、輸入・流通する事業者が化粧品責任販売業を登録します。成分の確認、責任販売業・製造業の登録、機能性化粧品の審査・報告、安全性資料までの流れをまとめました。",
        "glance": [
          {
            "label": "対象",
            "value": "化粧品を製造する化粧品製造業（화장품제조업）、製造を委託したり輸入したりした化粧品を流通・販売する化粧品責任販売業（화장품책임판매업）、中身を混合・小分けして販売するオーダーメイド化粧品販売業（맞춤형화장품판매업）"
          },
          {
            "label": "要件",
            "value": "責任販売業は品質管理・販売後安全管理の基準と責任販売管理者（책임판매관리자）、製造業は施設基準（一部工程のみなら一部省略可）、共通して欠格事由がないこと"
          },
          {
            "label": "手続き",
            "value": "成分の確認 → 責任販売業の登録 → （自社製造なら）製造業の登録 → 機能性化粧品の審査・報告（기능성화장품 심사·보고） → 安全性資料の作成・保管 → 表示・広告の点検"
          },
          {
            "label": "必要書類",
            "value": "登録申請書、品質管理・販売後安全管理の基準に関する規定、責任販売管理者の資格確認書類、製造業は施設明細書と代表者の診断書、機能性化粧品は品目別の安全性・有効性資料"
          },
          {
            "label": "処理期間",
            "value": "営業登録は管轄の地方食品医薬品安全庁（지방식품의약품안전청）が処理、原料の使用基準の指定・変更申請は資料提出日から180日以内に結果通知"
          }
        ],
        "stagesHeading": "韓国で化粧品を販売するまでの5段階",
        "stages": [
          {
            "title": "① 成分の確認",
            "desc": "食品医薬品安全処（MFDS）が告示した使用禁止原料が入っていないか、保存剤・色素・紫外線遮断剤など使用基準のある原料が基準内かを確認します。使用基準が告示されていない保存剤・色素・紫外線遮断剤は使えず、必要なら使用基準の指定・変更を申請します。"
          },
          {
            "title": "② 化粧品責任販売業の登録",
            "desc": "自社の名義で化粧品を流通・販売するなら化粧品責任販売業（화장품책임판매업）を登録します。製造を委託した化粧品や輸入した化粧品を販売する場合もこれに当たり、責任販売管理者（책임판매관리자）を置いて品質管理・安全管理の基準を整えます。"
          },
          {
            "title": "③ 化粧品製造業の登録",
            "desc": "韓国で自ら製造する、製造を受託する、1次包装をする場合は化粧品製造業（화장품제조업）を登録し施設基準を満たします。製造を委託するだけのブランド会社は、製造業の登録なしに責任販売業で販売できます。"
          },
          {
            "title": "④ 機能性化粧品の審査・報告",
            "desc": "美白・シワ改善・紫外線遮断などの機能性化粧品（기능성화장품）として販売するなら、品目ごとに安全性・有効性の審査を受けるか、告示品目などと同じ場合は報告書を提出します。"
          },
          {
            "title": "⑤ 安全性資料の作成",
            "desc": "乳幼児・子ども用と表示・広告するなら、製品別の安全性資料を作成・保管します。責任販売業者が販売前に製品別の安全性評価資料を作成し評価者の検討を受ける安全性評価制度（화장품 안전성 평가）は、2028年1月1日から業所規模・製品区分に応じて段階的に施行されます（年間生産・輸入額10億ウォン未満の業所は2031年1月1日）。"
          }
        ],
        "note": {
          "heading": "日本の化粧品ブランドが確認すること",
          "items": [
            "化粧品責任販売業（화장품책임판매업）の登録は韓国内の責任販売業所の所在地を管轄する地方食品医薬品安全庁（지방식품의약품안전청）に申請します。韓国に拠点がない場合は、登録済みの韓国の輸入元を通すか、韓国法人を設けて自社で登録します。",
            "電子商取引で輸入代行型の取引をあっせんする営業も責任販売業に当たります。越境ECで韓国の消費者に販売する仕組みも、登録の要否を確認します。",
            "表示事項は読みやすく分かりやすい韓国語（ハングル）で正確に記載します。全成分、使用期限、使用上の注意などが記載事項です。",
            "動物実験をした化粧品や動物実験をした原料を使った化粧品は、輸出先の法令で必要な場合などの例外を除き、韓国で流通・販売できません。"
          ]
        },
        "related": [
          {
            "title": "機能性化粧品の審査・報告",
            "href": "/ja/services/functional-cosmetics"
          },
          {
            "title": "韓国化粧品責任販売業者登録ガイド",
            "href": "/ja/blog/cosmetics-responsible-distributor"
          },
          {
            "title": "海外ブランドの韓国輸入手続き — 化粧品責任販売業登録",
            "href": "/ja/blog/cosmetics-import-sales-registration-guide"
          },
          {
            "title": "韓国化粧品製造業登録ガイド",
            "href": "/ja/blog/cosmetics-manufacturing-registration"
          },
          {
            "title": "化粧品責任販売業の変更登録",
            "href": "/ja/blog/cosmetics-distributor-change-registration"
          },
          {
            "title": "医薬外品と化粧品の違い",
            "href": "/ja/blog/quasi-drug-vs-cosmetics-classification"
          }
        ]
      },
      "health-food": {
        "label": "健康機能食品の輸入・販売",
        "seoTitle": "韓国への健康機能食品の輸入｜登録と輸入申告",
        "h1": "韓国への健康機能食品の輸入 — 営業登録・海外製造業所登録・輸入申告",
        "description": "日本のサプリメント・健康食品を韓国で「健康機能食品」として販売するには、輸入者の営業登録、日本工場の海外製造業所登録、品目ごとの輸入申告が必要です。原料の確認から販売業の申告までまとめました。",
        "glance": [
          {
            "label": "対象",
            "value": "健康機能食品（건강기능식품）を製造（専門・ベンチャー製造業）・販売（一般・流通専門販売業）・輸入する事業者、オーダーメイド健康機能食品を販売する事業者"
          },
          {
            "label": "要件",
            "value": "営業ごとの施設基準、営業前の衛生教育（販売業は毎年）、製造業は品質管理人（품질관리인）の選任と優秀健康機能食品製造基準（GMP・우수건강기능식품제조기준）への適合、告示されていない原料は個別認定型原料（개별인정형 원료）としての認定"
          },
          {
            "label": "手続き",
            "value": "輸入：地方食品医薬品安全庁（지방식품의약품안전청）に輸入・販売業の営業登録 → 海外製造業所の登録 → 品目ごとの輸入申告・検査／販売：市長・郡守・区庁長（시장·군수·구청장）に販売業の申告／製造：地方食品医薬品安全庁の営業許可 → 品目製造申告（품목제조신고）"
          },
          {
            "label": "必要書類",
            "value": "輸入：営業登録申請書、衛生教育の履修証、輸入申告書、韓国語表示をした包装または表示内容の書類、製品写真／販売：営業申告書、教育履修の証明、流通専門販売業は委託生産契約書／外国人は領事確認・アポスティーユ書類"
          },
          {
            "label": "処理期間",
            "value": "輸入・販売業の営業登録3日、販売業の申告は3日以内に受理可否を通知、品目製造申告は10日以内に通知（期間内に通知がなければ受理とみなす）"
          }
        ],
        "stagesHeading": "営業の種類ごとの手続き",
        "stages": [
          {
            "title": "輸入食品等輸入・販売業の営業登録",
            "desc": "健康機能食品を輸入して販売する事業者は、施設を整えて事前の衛生教育を受け、地方食品医薬品安全庁（지방식품의약품안전청）に営業登録をします。処理期間は3日です。"
          },
          {
            "title": "海外製造業所の登録",
            "desc": "輸入申告の前に、日本の製造工場の名称・所在地・生産品目を登録します。輸入者または工場の運営者が申請でき、有効期間は2年です。"
          },
          {
            "title": "品目ごとの輸入申告",
            "desc": "通関地を管轄する地方食品医薬品安全庁に輸入申告をし、書類・現場・精密・無作為標本のいずれかの検査を受けます。到着予定日の5日前から事前に申告できます。"
          },
          {
            "title": "健康機能食品販売業の申告",
            "desc": "韓国内で販売する健康機能食品一般販売業（건강기능식품일반판매업）と、委託生産した製品を自社ブランドで売る流通専門販売業（유통전문판매업）は、営業所ごとに市長・郡守・区庁長（시장·군수·구청장）に申告します。薬局での販売は対象外です。"
          },
          {
            "title": "健康機能食品製造業の許可",
            "desc": "韓国で製造する健康機能食品専門製造業とベンチャー製造業（전문제조업·벤처제조업）は、営業所ごとに地方食品医薬品安全庁の許可を受け、品目ごとに品目製造申告（품목제조신고）をします。"
          },
          {
            "title": "個別認定型原料の認定",
            "desc": "食品医薬品安全処（MFDS）が告示していない原料・成分は、製造業者や登録済みの輸入・販売業者などが安全性・機能性の資料を出して個別認定型原料（개별인정형 원료）として認定を受けると使えます。"
          }
        ],
        "note": {
          "heading": "日本のメーカー・輸出者が確認すること",
          "items": [
            "輸入食品等輸入・販売業の営業登録（수입식품등 수입·판매업 영업등록）は韓国内の営業所と施設を前提とします。韓国に拠点がない場合は、登録済みの韓国の輸入者と組むか、韓国法人を設けて自社で登録します。",
            "日本の製造工場は、輸入申告の前に海外製造業所として登録します。輸入者だけでなく工場の運営者も申請でき、有効期間は2年です。",
            "輸入申告では、韓国語表示をした包装（ステッカーを含む）か表示内容を記載した書類を添付します。通関前に韓国語表示を整えておきます。",
            "日本の機能性表示食品の届出は韓国では使えません。原料が食品医薬品安全処（MFDS）の告示原料か個別認定型原料（개별인정형 원료）かで、健康機能食品として売れるかが決まります。"
          ]
        },
        "related": [
          {
            "title": "輸入食品の輸入・販売業",
            "href": "/ja/services/import-food-sales"
          },
          {
            "title": "韓国健康機能食品販売業登録ガイド",
            "href": "/ja/blog/health-functional-food-sales-registration-guide"
          },
          {
            "title": "HACCP認証",
            "href": "/ja/services/haccp"
          },
          {
            "title": "食品製造加工業",
            "href": "/ja/services/food-manufacturing"
          }
        ]
      },
      "factory": {
        "label": "工場設立・工場登録",
        "seoTitle": "韓国の工場設立・工場登録｜承認から登録までの流れ",
        "h1": "韓国で工場を設立する — 工場設立承認・完了申告・工場登録",
        "description": "韓国で工場を新設・増設するには、工場建築面積500㎡以上なら市・郡・区の工場設立承認を受け、完成後2か月以内に完了申告をして工場登録をします。日本企業の進出で確認する立地、期間、書類をまとめました。",
        "glance": [
          {
            "label": "対象",
            "value": "工場建築面積（공장건축면적）500平方メートル以上の工場を新設・増設、または業種を変更する場合は工場設立承認（공장설립등의 승인）の対象。それ未満の工場も工場登録（공장등록）を申請でき、許認可のみなしを受けたい場合は承認も受けられる"
          },
          {
            "label": "要件",
            "value": "個別立地は土地関連法令の立地基準、産業団地などの計画立地は入居契約（입주계약）、建築物の使用承認と機械・装置の設置完了"
          },
          {
            "label": "手続き",
            "value": "立地の検討 → 工場設立承認（または入居契約） → 建築・設備設置 → 完了申告（공장설립등의 완료신고・2か月以内） → 工場登録台帳への登録 → 工場登録証明書（공장등록증명서）の発行"
          },
          {
            "label": "必要書類",
            "value": "工場設立承認申請書と添付書類、承認書または入居契約書、完了申告書、建築物の使用承認書、製造施設の設置完了の証明、事業計画書、土地・建物の登記事項証明書・賃貸借契約書"
          },
          {
            "label": "処理期間",
            "value": "承認は申請から20日以内（全部が市長・郡守・区庁長の権限なら14日、みなし処理不要なら7日）、完了申告は使用承認・設置完了から2か月以内、登録は完了申告から3日以内に通知（みなし処理がある場合20日）、登録事項の変更は2か月以内"
          }
        ],
        "stagesHeading": "工場設立から登録までの流れ",
        "stages": [
          {
            "title": "① 立地と業種の検討",
            "desc": "業種が製造業に当たるか、個別立地か産業団地などの計画立地か、首都圏の制限地域に当たらないかを確認します。"
          },
          {
            "title": "② 工場設立承認・入居契約",
            "desc": "工場建築面積（공장건축면적）500平方メートル以上なら市長・郡守・区庁長（시장·군수·구청장）の工場設立承認（공장설립등의 승인）を受けます。産業団地では管理機関との入居契約（입주계약）で承認を受けたものとみなされます。"
          },
          {
            "title": "③ 建築・設備の設置",
            "desc": "建築許可を受けて工場を建て、使用承認を受けたうえで機械・装置を設置します。"
          },
          {
            "title": "④ 完了申告",
            "desc": "最終の使用承認と機械・装置の設置完了から2か月以内に、市長・郡守・区庁長または管理機関に完了申告（공장설립등의 완료신고）をします。"
          },
          {
            "title": "⑤ 工場登録・証明書",
            "desc": "行政庁が工場登録台帳に登録し、登録した工場で製造業を営む者は工場登録証明書（공장등록증명서）を申請できます。登録事項が変われば2か月以内に変更登録（공장 변경등록）をします。"
          }
        ],
        "note": {
          "heading": "日本企業が韓国で工場をつくるとき",
          "items": [
            "工場登録（공장등록）は工場を所有・占有して製造業を営む事業者の名義で行います。日本企業が自ら操業する場合は、まず韓国法人（または支店）を設けて申請主体を決めます。",
            "首都圏の過密抑制圏域・成長管理圏域・自然保全圏域では、500平方メートル以上の工場の新設・増設・移転・業種変更が原則として制限され、法令が定める例外（経済自由区域内の外国人投資企業の工場など）に当たるかを確認します。",
            "化粧品・食品・健康機能食品などの工場は、工場登録とは別に化粧品製造業の登録や食品の営業許可・登録が必要です。",
            "工場設立オンライン支援システム（공장설립온라인지원시스템）を使えば、管轄外の工場の登録証明書も発行を受けられます。"
          ]
        },
        "related": [
          {
            "title": "韓国工場登録申請ガイド",
            "href": "/ja/blog/factory-registration-application-guide"
          },
          {
            "title": "韓国製造業登録手続きガイド",
            "href": "/ja/blog/manufacturing-business-registration-procedure"
          },
          {
            "title": "建築物の用途変更",
            "href": "/ja/services/building-usage"
          },
          {
            "title": "食品製造加工業",
            "href": "/ja/services/food-manufacturing"
          },
          {
            "title": "化粧品製造施設の設計ガイド",
            "href": "/ja/blog/cosmetics-manufacturing-facility-guide"
          }
        ]
      }
    }
  }
}
