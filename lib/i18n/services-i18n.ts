import type { Locale } from './translations'

interface ServiceI18n {
  title: string
  shortTitle: string
  category: string
  description: string
  faqs?: { q: string; a: string }[]
  processSteps?: { step: string; desc: string }[]
  documents?: string[]
}

type ServiceSlug =
  | 'logistics' | 'currency-exchange' | 'urban-guesthouse' | 'hostel' | 'hanok'
  | 'building-usage' | 'food-manufacturing' | 'women-enterprise' | 'nonprofit'
  | 'tobacco' | 'venture-cert' | 'haccp' | 'cosmetics' | 'procurement'
  | 'research-lab' | 'ecig' | 'sports-club' | 'location-based-service'

const servicesEn: Record<ServiceSlug, ServiceI18n> = {
  'logistics': {
    title: 'International Freight Forwarding Registration',
    shortTitle: 'Intl. Freight Forwarding',
    category: 'Logistics',
    description: 'International freight forwarding is a business that arranges cargo transportation on behalf of shippers. Registration with the Ministry of Land, Infrastructure and Transport is mandatory under the Framework Act on Logistics. This is an essential license for operating a full-service international logistics business in Korea.',
    faqs: [
      { q: 'Is there a minimum capital requirement?', a: 'Yes. A minimum paid-in capital of KRW 300 million is required for international freight forwarding registration.' },
      { q: 'How long does the process take?', a: 'Approximately 2–4 weeks after all documents are submitted.' },
      { q: 'Can foreigners register?', a: 'Yes, foreign representatives may register, but they must first satisfy visa status and business registration requirements.' },
      { q: 'How much liability insurance is required?', a: 'A minimum of KRW 100 million in surety bond or mutual aid must be maintained throughout the operating period.' },
      { q: 'Is renewal required after registration?', a: 'No periodic renewal, but any changes must be reported via a change registration.' },
    ],
    processSteps: [
      { step: 'Consultation', desc: 'Assessment of business status and licensing requirements' },
      { step: 'Document Prep', desc: 'Full document checklist provided and preparation assisted' },
      { step: 'Filing', desc: 'Submission to the relevant government agency' },
      { step: 'Completion', desc: 'Receipt of registration certificate and business commencement' },
    ],
    documents: ['Corporate registry extract', 'Business plan', 'Transportation capacity statement', 'Surety bond certificate', 'Capital confirmation documents'],
  },
  'currency-exchange': {
    title: 'Currency Exchange Business Registration',
    shortTitle: 'Currency Exchange',
    category: 'Finance',
    description: 'Under the Foreign Exchange Transactions Act, any business wishing to engage in currency exchange must register with the Ministry of Economy and Finance. This license is required to legally purchase and sell foreign currencies.',
    faqs: [
      { q: 'Can individuals register for currency exchange?', a: 'Both corporations and sole proprietors can register for currency exchange.' },
      { q: 'What are the AML obligations?', a: 'Currency exchange operators must comply with the Act on Reporting and Using Specified Financial Transaction Information, including customer due diligence requirements.' },
      { q: 'How long does registration take?', a: 'Approximately 3–6 weeks after submission to the Ministry of Economy and Finance.' },
      { q: 'Are there restrictions on currency types?', a: 'Permitted currencies are specified at registration. Additional currencies can be added via a change registration.' },
      { q: 'Are there location restrictions?', a: 'Registration is possible outside tourist zones and airports, provided facility requirements are met.' },
    ],
    processSteps: [
      { step: 'Pre-review', desc: 'Assessment of eligibility requirements' },
      { step: 'Document Prep', desc: 'Preparation of Ministry of Economy and Finance submission documents' },
      { step: 'Registration', desc: 'Filing with the Ministry of Economy and Finance' },
      { step: 'Completion', desc: 'Receipt of currency exchange registration certificate' },
    ],
    documents: ['Business registration certificate', 'Corporate registry extract', 'Representative identity verification', 'Office lease agreement', 'AML internal control standards'],
  },
  'urban-guesthouse': {
    title: 'Foreign Tourist Urban Guesthouse Registration',
    shortTitle: 'Foreign Tourist Guesthouse',
    category: 'Hospitality',
    description: 'This license allows you to legally provide accommodation services to foreign tourists using residential facilities in urban areas. Registration under the Tourism Promotion Act enables lawful operation of a city-center bed and breakfast for international guests.',
    faqs: [
      { q: 'Can a rented property be used?', a: 'Yes, a rental property can be used provided you obtain the landlord\'s consent.' },
      { q: 'What fire safety requirements apply?', a: 'Fire extinguishers, smoke detectors, and emergency exit signage must be in place.' },
      { q: 'Is hygiene education mandatory?', a: 'Yes. Operators must complete a designated hygiene education course.' },
      { q: 'Is Korean-language foreign signage required?', a: 'Foreign-language information must be displayed. Korean is not required.' },
      { q: 'How many rooms are allowed?', a: 'Generally up to 7 rooms. More than 7 requires a different license category.' },
    ],
    processSteps: [
      { step: 'Site Inspection', desc: 'Pre-inspection of accommodation facility requirements' },
      { step: 'Document Prep', desc: 'Preparation of city/county office submission documents' },
      { step: 'Filing', desc: 'Submission to local government and processing' },
      { step: 'Completion', desc: 'Receipt of registration certificate' },
    ],
    documents: ['Proof of building ownership or right to use', 'Business registration certificate', 'Fire safety confirmation', 'Hygiene education completion certificate', 'Foreign-language guest information materials'],
  },
  'hostel': {
    title: 'Hostel Business Registration',
    shortTitle: 'Hostel Business',
    category: 'Hospitality',
    description: 'A hostel business license allows operation of budget accommodation providing dormitory-style lodging primarily for youth and budget travelers. Registration under the Tourism Promotion Act is required.',
    faqs: [
      { q: 'What is the difference between a hostel and a guesthouse?', a: 'A hostel primarily provides dormitory-style rooms (multiple beds per room), while a guesthouse provides private rooms for foreign tourists.' },
      { q: 'What facility requirements apply?', a: 'Common lounge area, bathrooms/shower rooms, and lockers for guests are required.' },
      { q: 'How long does registration take?', a: 'Approximately 2–4 weeks after document submission.' },
    ],
    processSteps: [
      { step: 'Consultation', desc: 'Review of facility and licensing requirements' },
      { step: 'Document Prep', desc: 'Preparation of required documents' },
      { step: 'Filing', desc: 'Submission to local government' },
      { step: 'Completion', desc: 'Receipt of registration certificate' },
    ],
    documents: ['Building ownership or use rights proof', 'Business registration certificate', 'Fire safety confirmation', 'Facility layout drawing'],
  },
  'hanok': {
    title: 'Hanok Traditional House Experience Business Registration',
    shortTitle: 'Hanok Experience',
    category: 'Hospitality',
    description: 'The Hanok Experience Business license allows operation of traditional Korean architecture as a tourist accommodation. This niche license under the Tourism Promotion Act lets you monetize historical Korean buildings.',
    faqs: [
      { q: 'Does the building need to be a certified historic hanok?', a: 'No formal heritage listing is required, but the building must have traditional Korean architectural characteristics.' },
      { q: 'Are there renovation restrictions?', a: 'If the building is a designated cultural asset, renovation requires cultural authority approval.' },
    ],
    processSteps: [
      { step: 'Consultation', desc: 'Assessment of building eligibility' },
      { step: 'Document Prep', desc: 'Preparation of documents' },
      { step: 'Filing', desc: 'Submission to local government' },
      { step: 'Completion', desc: 'Receipt of registration certificate' },
    ],
    documents: ['Building ownership proof', 'Architectural photos proving traditional characteristics', 'Business registration certificate'],
  },
  'building-usage': {
    title: 'Building Use Change Permit',
    shortTitle: 'Building Use Change',
    category: 'Construction',
    description: 'Changing the designated use of a building (e.g., from residential to commercial) requires a permit or notification to local authorities under the Building Act. Improper use without authorization is illegal and subject to penalties.',
    faqs: [
      { q: 'What types of use changes are possible?', a: 'Changes between residential, commercial, industrial, and educational uses are common. Each change has different requirements.' },
      { q: 'What if the building does not meet standards?', a: 'Structural reinforcement or facility upgrades may be required before approval is granted.' },
    ],
    processSteps: [
      { step: 'Review', desc: 'Assessment of current and target use classification' },
      { step: 'Document Prep', desc: 'Architectural drawings and permit documents' },
      { step: 'Filing', desc: 'Submission to local building authority' },
      { step: 'Completion', desc: 'Permit issuance' },
    ],
    documents: ['Building registry', 'Architectural drawings', 'Building use change application'],
  },
  'food-manufacturing': {
    title: 'Food Manufacturing & Processing Business Registration',
    shortTitle: 'Food Manufacturing',
    category: 'Food',
    description: 'Businesses that manufacture, process, or package food products must register with the local public health center under the Food Sanitation Act. This registration is the starting point for any food production business in Korea.',
    faqs: [
      { q: 'What facility conditions are required?', a: 'A dedicated production area separate from living spaces, proper sanitation facilities, and ventilation are required.' },
      { q: 'Is HACCP certification required?', a: 'HACCP is mandatory for certain food categories (meat, fish, dairy, etc.) and strongly recommended for others.' },
      { q: 'How long does registration take?', a: 'Approximately 2–3 weeks after document submission and facility inspection.' },
    ],
    processSteps: [
      { step: 'Facility Review', desc: 'Assessment of production facility against legal standards' },
      { step: 'Document Prep', desc: 'Preparation of health center submission documents' },
      { step: 'Filing', desc: 'Submission and facility inspection' },
      { step: 'Completion', desc: 'Receipt of registration certificate' },
    ],
    documents: ['Business registration certificate', 'Facility layout drawing', 'Water quality test report', 'Sanitation manager appointment certificate'],
  },
  'women-enterprise': {
    title: 'Women-Owned Business Certification',
    shortTitle: 'Women-Owned Business',
    category: 'Certification',
    description: 'Women-owned business certification under the Act on Support for Women\'s Enterprises provides access to government procurement preferences, subsidized loans, and various support programs.',
    faqs: [
      { q: 'What is the ownership requirement?', a: 'The representative must be a woman who owns more than 30% of shares and is in active control of the business.' },
      { q: 'What benefits does certification provide?', a: 'Priority in public procurement, preferential loan rates, business support programs, and government grants.' },
    ],
    processSteps: [
      { step: 'Eligibility Check', desc: 'Assessment of ownership and management control requirements' },
      { step: 'Document Prep', desc: 'Preparation of certification documents' },
      { step: 'Filing', desc: 'Submission to Korea Women Entrepreneurs Association' },
      { step: 'Completion', desc: 'Certification issuance' },
    ],
    documents: ['Corporate registry', 'Shareholder registry', 'Representative ID', 'Business registration certificate'],
  },
  'nonprofit': {
    title: 'Non-Profit Association (Corporation) Establishment',
    shortTitle: 'Non-Profit Corporation',
    category: 'Legal Entity',
    description: 'Establishing a non-profit association (사단법인) in Korea requires ministerial approval and registration with the court. This structure is suitable for professional associations, industry groups, and charitable organizations.',
    faqs: [
      { q: 'How many founding members are required?', a: 'Generally a minimum of 2–10 founding members, depending on the supervisory ministry.' },
      { q: 'Which ministry has jurisdiction?', a: 'Jurisdiction depends on the organization\'s purposes — for example, cultural organizations fall under the Ministry of Culture, Sports and Tourism.' },
    ],
    processSteps: [
      { step: 'Planning', desc: 'Purpose and scope definition, charter drafting' },
      { step: 'Document Prep', desc: 'Articles of incorporation, founding minutes, member lists' },
      { step: 'Ministerial Approval', desc: 'Application to supervisory ministry' },
      { step: 'Court Registration', desc: 'Corporate registration at the district court' },
    ],
    documents: ['Articles of incorporation', 'Founding general meeting minutes', 'List of founding members', 'Business plan and budget'],
  },
  'tobacco': {
    title: 'Tobacco Import & Sales Business Registration',
    shortTitle: 'Tobacco Import & Sales',
    category: 'Retail',
    description: 'Importing and selling tobacco products in Korea requires registration with the Ministry of Strategy and Finance. The tobacco market is strictly regulated and non-compliance carries severe penalties.',
    faqs: [
      { q: 'Can any company import tobacco?', a: 'Only companies meeting capital and facility requirements may register as tobacco importers/sellers.' },
      { q: 'Are there restrictions on advertising?', a: 'Tobacco advertising is heavily restricted under the National Health Promotion Act.' },
    ],
    processSteps: [
      { step: 'Eligibility Review', desc: 'Assessment of capital and facility requirements' },
      { step: 'Document Prep', desc: 'Ministry of Strategy and Finance submission documents' },
      { step: 'Filing', desc: 'Application submission' },
      { step: 'Completion', desc: 'Registration certificate issuance' },
    ],
    documents: ['Corporate registry', 'Business plan', 'Capital verification', 'Storage facility documentation'],
  },
  'venture-cert': {
    title: 'Venture / Innobiz Company Certification',
    shortTitle: 'Venture / Innobiz Cert.',
    category: 'Certification',
    description: 'Venture company and Innobiz (innovative SME) certifications provide access to substantial government tax benefits, R&D grants, and procurement preferences. These are among the most valuable certifications for Korean tech and innovation companies.',
    faqs: [
      { q: 'What is the difference between venture and Innobiz?', a: 'Venture certification focuses on investment or technology, while Innobiz focuses on R&D investment ratio and innovation management scores.' },
      { q: 'What benefits are available?', a: 'Corporate tax reduction, employee stock option tax benefits, preferential public procurement, R&D grants, and facility investment support.' },
    ],
    processSteps: [
      { step: 'Eligibility Assessment', desc: 'Evaluation of R&D investment ratio and technology certification' },
      { step: 'Document Prep', desc: 'Financial statements, R&D records, technology certificates' },
      { step: 'Assessment', desc: 'Submission to Korea Technology Finance Corporation' },
      { step: 'Certification', desc: 'Certificate issuance (valid 2 years, renewable)' },
    ],
    documents: ['Audited financial statements', 'R&D expenditure breakdown', 'Technology assessment report or patent documents'],
  },
  'haccp': {
    title: 'HACCP Certification & Food Licensing',
    shortTitle: 'HACCP Certification',
    category: 'Food',
    description: 'HACCP (Hazard Analysis Critical Control Points) certification is mandatory for many food categories in Korea and strongly recommended for all food businesses. It demonstrates systematic food safety management to buyers and regulators.',
    faqs: [
      { q: 'Is HACCP mandatory?', a: 'Mandatory for meat products, processed fish, milk, ready-to-eat foods, and certain other categories. Voluntary for others.' },
      { q: 'How long does HACCP certification take?', a: 'Typically 3–6 months including HACCP plan development, implementation, and inspection by MFDS.' },
    ],
    processSteps: [
      { step: 'Gap Analysis', desc: 'Assessment of current practices against HACCP requirements' },
      { step: 'HACCP Plan Development', desc: 'Hazard analysis and critical control point identification' },
      { step: 'Implementation', desc: 'Facility upgrades and staff training' },
      { step: 'Inspection & Certification', desc: 'MFDS inspection and certificate issuance' },
    ],
    documents: ['Facility layout', 'Product manufacturing flow chart', 'Raw material specifications', 'HACCP plan documents'],
  },
  'cosmetics': {
    title: 'Cosmetics & Quasi-Drug Manufacturing/Import License',
    shortTitle: 'Cosmetics License',
    category: 'Pharmaceutical',
    description: 'Manufacturing or importing cosmetics and quasi-drugs (의약외품) in Korea requires registration or licensing with the Ministry of Food and Drug Safety. This is essential for beauty brands, OEM manufacturers, and importers operating in the Korean market.',
    faqs: [
      { q: 'What is a quasi-drug?', a: 'Quasi-drugs (의약외품) are products between cosmetics and pharmaceuticals — such as disinfectants, whitening toothpaste, and hair dye. They require separate licensing.' },
      { q: 'Is a manufacturing facility required for cosmetics?', a: 'For manufacturing, a GMP-compliant facility is required. For import, a Responsible Person (RP) must be appointed.' },
      { q: 'How long does cosmetics manufacturing registration take?', a: 'Approximately 4–8 weeks after all documents and facility inspections are complete.' },
      { q: 'Can foreign cosmetics be imported without a Korean company?', a: 'No. A Korean responsible person (company or individual) must be designated to import cosmetics into Korea.' },
    ],
    processSteps: [
      { step: 'License Type Determination', desc: 'Assessment of product category and required license type' },
      { step: 'Facility / RP Setup', desc: 'GMP facility preparation or Responsible Person appointment' },
      { step: 'Filing', desc: 'Submission to Ministry of Food and Drug Safety' },
      { step: 'Completion', desc: 'Registration/license issuance' },
    ],
    documents: ['Business registration certificate', 'Facility layout or RP appointment documents', 'Product formulation list', 'Safety assessment documents'],
  },
  'procurement': {
    title: 'Government Procurement Registration (PPS / KONEPS)',
    shortTitle: 'Government Procurement',
    category: 'Procurement',
    description: 'Registration on Korea\'s Public Procurement Service (PPS) system — KONEPS (나라장터) — allows companies to bid on and supply to Korean government contracts. This registration is essential for any company wishing to do business with Korean government agencies.',
    faqs: [
      { q: 'Who is eligible to register on KONEPS?', a: 'Any legally registered Korean company or foreign company with a Korean branch can register.' },
      { q: 'Is there a preference for certain companies?', a: 'SMEs, women-owned, and venture-certified companies receive procurement preferences.' },
    ],
    processSteps: [
      { step: 'Digital Certificate', desc: 'Obtain a certified digital signature for KONEPS' },
      { step: 'Company Registration', desc: 'Register company information on KONEPS' },
      { step: 'Capability Registration', desc: 'Register products/services and supporting certifications' },
      { step: 'Activation', desc: 'Completion of registration and bidding capability' },
    ],
    documents: ['Business registration certificate', 'Corporate registry', 'Digital certificate', 'Banking information'],
  },
  'research-lab': {
    title: 'Corporate Research Laboratory Establishment',
    shortTitle: 'Corporate Research Lab',
    category: 'R&D',
    description: 'Establishing a certified corporate research laboratory (기업부설연구소) provides significant tax benefits and grants under Korea\'s R&D support system. Certified labs qualify for R&D tax credits, researcher salary deductions, and technology import tax exemptions.',
    faqs: [
      { q: 'What qualifications do researchers need?', a: 'Research staff must hold relevant degrees or equivalent experience. Minimum numbers vary by company size.' },
      { q: 'What are the facility requirements?', a: 'A dedicated research space (minimum 50㎡ for SMEs) physically separate from other operations.' },
    ],
    processSteps: [
      { step: 'Eligibility Assessment', desc: 'Review of research staff qualifications and facility' },
      { step: 'Document Prep', desc: 'KOITA submission documents' },
      { step: 'Application', desc: 'Submission to Korea Industrial Technology Association (KOITA)' },
      { step: 'Certification', desc: 'Inspection and certificate issuance' },
    ],
    documents: ['Research staff resume and degree certificates', 'Research facility layout', 'Research plan for the next 2 years', 'Corporate registry'],
  },
  'ecig': {
    title: 'E-Cigarette Import License',
    shortTitle: 'E-Cigarette Import',
    category: 'Retail',
    description: 'Importing electronic cigarettes (including liquids and devices) into Korea requires registration with the Ministry of Strategy and Finance under the Tobacco Business Act. This is a strictly regulated category with specific product testing requirements.',
    faqs: [
      { q: 'Are nicotine e-cigarettes and zero-nicotine products treated differently?', a: 'Yes. Nicotine-containing products fall under the Tobacco Business Act. Zero-nicotine products may be classified differently.' },
      { q: 'What product testing is required?', a: 'Products must pass ingredient testing and comply with packaging/labeling requirements.' },
    ],
    processSteps: [
      { step: 'Product Classification', desc: 'Determination of regulatory category' },
      { step: 'Document Prep', desc: 'Import registration documents' },
      { step: 'Filing', desc: 'Submission to Ministry of Strategy and Finance' },
      { step: 'Completion', desc: 'Registration issuance' },
    ],
    documents: ['Corporate registry', 'Product specifications', 'Ingredient test reports', 'Country of origin documents'],
  },
  'sports-club': {
    title: 'Designated Sports Club Registration',
    shortTitle: 'Sports Club Registration',
    category: 'Sports',
    description: 'Designated sports clubs (지정스포츠클럽) receive government recognition and support for community sports development. Registration with the Ministry of Culture, Sports and Tourism enables access to facility support and operational grants.',
    faqs: [
      { q: 'What sports are eligible?', a: 'All sports designated by the Ministry of Culture, Sports and Tourism are eligible, including football, basketball, swimming, and more.' },
      { q: 'What membership requirements apply?', a: 'A minimum number of registered members (typically 30+) is required for designation.' },
    ],
    processSteps: [
      { step: 'Planning', desc: 'Club organization and membership structure setup' },
      { step: 'Document Prep', desc: 'Ministry submission documents' },
      { step: 'Application', desc: 'Submission to local Sports Council' },
      { step: 'Designation', desc: 'Designated sports club status conferred' },
    ],
    documents: ['Club articles', 'Member list', 'Facility use agreement', 'Program plan'],
  },
  'location-based-service': {
    title: 'Location-Based Service Business Notification',
    shortTitle: 'Location-Based Service',
    category: 'IT/Telecom',
    description: 'Any business that collects, stores, or provides location information of individuals or objects must file a notification with the Korea Communications Commission (KCC) under the Act on the Protection and Use of Location Information. This applies to apps, platforms, and devices using GPS or cell tower data.',
    faqs: [
      { q: 'What types of services require this notification?', a: 'Any service that uses individual or object location data — including delivery apps, navigation, fleet tracking, location-based marketing, and telematics — requires this notification.' },
      { q: 'Can foreign companies file this notification?', a: 'Yes, but they must establish a Korean entity (branch or subsidiary) and appoint a Korea-based location information protection officer.' },
      { q: 'How long does the notification process take?', a: 'Approximately 1–2 weeks after all documents are submitted to the KCC.' },
      { q: 'Are there ongoing compliance obligations?', a: 'Yes. Annual safety measures reporting, location data protection officer appointment, and user consent management are required.' },
      { q: 'What are the penalties for non-compliance?', a: 'Fines of up to KRW 30 million and potential criminal liability for operators who collect location data without proper notification.' },
    ],
    processSteps: [
      { step: 'Consultation', desc: 'Assessment of service type and applicable obligations' },
      { step: 'Document Prep', desc: 'KCC notification documents and privacy policy preparation' },
      { step: 'KCC Submission', desc: 'Filing with the Korea Communications Commission' },
      { step: 'Confirmation', desc: 'Receipt of notification confirmation and compliance setup' },
    ],
    documents: ['Business registration certificate', 'Service description and technical overview', 'Location data protection officer appointment', 'Privacy policy draft', 'Security measures plan'],
  },
}

const servicesZh: Record<ServiceSlug, ServiceI18n> = {
  'logistics': {
    title: '国际货运代理业注册',
    shortTitle: '国际货运代理',
    category: '物流/流通',
    description: '国际货运代理是以自己名义、受托人计算，为托运人安排国际货物运输的业务。根据《物流政策基本法》，必须向国土交通部进行注册。这是在韩国经营全方位国际物流服务所必需的核心营业许可。',
    faqs: [
      { q: '注册需要满足最低资本金要求吗？', a: '是的，国际货运代理注册需要3亿韩元以上的实缴资本金。' },
      { q: '办理需要多长时间？', a: '材料齐全后约需2~4周。' },
      { q: '外国人可以注册吗？', a: '外国法定代表人可以注册，但需要先满足居留资格和营业执照要求。' },
      { q: '保证保险需要购买多少？', a: '需要购买1亿韩元以上的保证保险或互助保险，并在经营期间持续维持。' },
      { q: '注册后需要续期吗？', a: '国际货运代理注册没有定期续期义务，但发生变更时需进行变更登记。' },
    ],
    processSteps: [
      { step: '初步咨询', desc: '了解业务现状及注册要求' },
      { step: '材料准备', desc: '提供完整材料清单并协助准备' },
      { step: '提交申请', desc: '向主管机关提交材料' },
      { step: '注册完成', desc: '领取注册证书并正式开展业务' },
    ],
    documents: ['法人登记簿摘本', '商业计划书', '运输能力证明', '保证保险证书', '资本金确认文件'],
  },
  'currency-exchange': {
    title: '外汇兑换业注册',
    shortTitle: '外汇兑换业',
    category: '金融',
    description: '根据《外汇交易法》，凡从事外汇兑换业务的企业必须向企划财政部进行注册。这是合法从事外币买卖业务所必需的营业许可。',
    faqs: [
      { q: '个人可以注册外汇兑换业吗？', a: '可以，法人和个人均可注册外汇兑换业。' },
      { q: '反洗钱义务有哪些？', a: '外汇兑换业者须按《特定金融交易信息的报告及利用法》履行客户身份识别等义务。' },
      { q: '办理需要多长时间？', a: '材料齐全后向企划财政部提交，约需3~6周。' },
    ],
    processSteps: [
      { step: '前期审查', desc: '确认是否满足注册要求' },
      { step: '材料准备', desc: '准备向企划财政部提交的文件' },
      { step: '提交申请', desc: '向企划财政部递交申请' },
      { step: '注册完成', desc: '领取外汇兑换业注册证书' },
    ],
    documents: ['营业执照', '法人登记簿摘本', '代表人身份验证文件', '办公室租赁合同', '反洗钱内控标准'],
  },
  'urban-guesthouse': {
    title: '外国人城市民宿业注册',
    shortTitle: '外国人城市民宿',
    category: '住宿/旅游',
    description: '利用城市住宅设施向外国游客提供住宿服务的业务。依据《旅游振兴法》进行合法注册，即可在首尔等城市中心地区正式运营民宿。',
    faqs: [
      { q: '可以使用租赁房屋吗？', a: '可以，需取得房东同意并使用租赁房屋。' },
      { q: '消防安全有什么要求？', a: '需配备灭火器、烟雾探测器和紧急出口指示牌。' },
      { q: '必须接受卫生教育吗？', a: '是的，经营者需完成指定的卫生教育课程。' },
      { q: '最多可经营几间房？', a: '通常最多7间房；超过7间需要申请不同类别的许可。' },
    ],
    processSteps: [
      { step: '现场核查', desc: '提前检查住宿设施是否符合要求' },
      { step: '材料准备', desc: '准备向市/郡政府提交的文件' },
      { step: '申请提交', desc: '向地方政府提交申请并处理审批' },
      { step: '注册完成', desc: '领取注册证书' },
    ],
    documents: ['建筑物所有权或使用权证明', '营业执照', '消防安全确认书', '卫生教育完成证书', '外语住客说明资料'],
  },
  'hostel': {
    title: '青年旅社业注册',
    shortTitle: '青年旅社',
    category: '住宿/旅游',
    description: '青年旅社业许可允许经营以多人共住宿舍为主要形式、面向年轻旅行者的经济型住宿。需依据《旅游振兴法》进行注册。',
    faqs: [
      { q: '青年旅社和民宿有什么区别？', a: '青年旅社主要提供多人间（多床宿舍），民宿主要为外国游客提供独立客房。' },
    ],
    processSteps: [
      { step: '咨询', desc: '审查设施和注册要求' },
      { step: '材料准备', desc: '准备所需文件' },
      { step: '提交申请', desc: '向地方政府递交申请' },
      { step: '注册完成', desc: '领取注册证书' },
    ],
    documents: ['建筑物所有权或使用权证明', '营业执照', '消防安全确认书', '设施平面图'],
  },
  'hanok': {
    title: '韩屋体验业注册',
    shortTitle: '韩屋体验业',
    category: '住宿/旅游',
    description: '韩屋体验业许可允许将传统韩国建筑作为旅游住宿使用，依据《旅游振兴法》注册，可将历史韩国建筑合法商业化运营。',
    faqs: [
      { q: '必须是经认定的历史韩屋吗？', a: '不需要正式的文化遗产认定，但建筑需具有传统韩国建筑特征。' },
    ],
    processSteps: [
      { step: '咨询', desc: '评估建筑是否符合资格' },
      { step: '材料准备', desc: '准备相关文件' },
      { step: '提交申请', desc: '向地方政府递交申请' },
      { step: '注册完成', desc: '领取注册证书' },
    ],
    documents: ['建筑物所有权证明', '证明传统建筑特征的照片', '营业执照'],
  },
  'building-usage': {
    title: '建筑物用途变更许可',
    shortTitle: '建筑物用途变更',
    category: '建筑',
    description: '根据《建筑法》，变更建筑物的用途（如从住宅变更为商业用途）需向地方政府申请许可或进行申报。未经授权擅自变更用途属违法行为，将面临处罚。',
    faqs: [
      { q: '可以进行哪些用途变更？', a: '住宅、商业、工业、教育用途之间的变更较为常见，每种变更均有不同要求。' },
    ],
    processSteps: [
      { step: '审查', desc: '评估现有用途和目标用途分类' },
      { step: '材料准备', desc: '建筑图纸及许可文件' },
      { step: '提交申请', desc: '向地方建筑主管部门递交申请' },
      { step: '许可完成', desc: '许可证签发' },
    ],
    documents: ['建筑登记簿', '建筑图纸', '建筑物用途变更申请书'],
  },
  'food-manufacturing': {
    title: '食品制造加工业注册',
    shortTitle: '食品制造加工业',
    category: '食品',
    description: '根据《食品卫生法》，生产、加工或包装食品的企业必须向当地保健所进行注册。这是在韩国开展任何食品生产业务的起点。',
    faqs: [
      { q: '对设施有什么要求？', a: '需要与居住区分离的专用生产区域、完善的卫生设施和通风系统。' },
      { q: '必须获得HACCP认证吗？', a: 'HACCP对肉类、水产品、乳制品等特定食品类别强制实施，其他类别强烈建议获得认证。' },
    ],
    processSteps: [
      { step: '设施审查', desc: '对生产设施进行合规性评估' },
      { step: '材料准备', desc: '准备保健所提交文件' },
      { step: '申请提交', desc: '提交申请并接受设施检查' },
      { step: '注册完成', desc: '领取注册证书' },
    ],
    documents: ['营业执照', '设施平面图', '水质检测报告', '卫生管理员任命证书'],
  },
  'women-enterprise': {
    title: '女性企业认证',
    shortTitle: '女性企业认证',
    category: '企业认证',
    description: '根据《女性企业支援法》获得女性企业认证，可享受政府采购优惠、优惠贷款及各类支援项目。',
    faqs: [
      { q: '有什么持股要求？', a: '代表人须为持股30%以上且实际掌控企业经营的女性。' },
    ],
    processSteps: [
      { step: '资格审查', desc: '评估持股和经营管理权要求' },
      { step: '材料准备', desc: '准备认证文件' },
      { step: '申请提交', desc: '向韩国女性经济人协会递交申请' },
      { step: '认证完成', desc: '认证证书签发' },
    ],
    documents: ['法人登记簿', '股东名册', '代表人身份证', '营业执照'],
  },
  'nonprofit': {
    title: '非营利社团法人设立',
    shortTitle: '非营利社团法人',
    category: '法人/团体',
    description: '在韩国设立非营利社团法人需获得主管部门批准并在法院进行法人登记，适用于行业协会、社会团体及公益组织。',
    faqs: [
      { q: '需要多少名发起人？', a: '通常需要2~10名发起人，具体取决于主管部门。' },
    ],
    processSteps: [
      { step: '规划', desc: '明确宗旨和范围，起草章程' },
      { step: '材料准备', desc: '章程、成立大会纪录、成员名单' },
      { step: '部门审批', desc: '向主管部门提出申请' },
      { step: '法院登记', desc: '在地区法院完成法人登记' },
    ],
    documents: ['章程', '成立大会纪录', '发起人名单', '业务计划及预算'],
  },
  'tobacco': {
    title: '烟草进口销售业注册',
    shortTitle: '烟草进口销售',
    category: '流通',
    description: '在韩国进口和销售烟草产品须向企划财政部进行注册。烟草市场受到严格监管，违规将面临严厉处罚。',
    faqs: [
      { q: '任何公司都可以进口烟草吗？', a: '只有满足资本金和设施要求的公司才可注册为烟草进口/销售商。' },
    ],
    processSteps: [
      { step: '资格审查', desc: '确认资本金和设施要求' },
      { step: '材料准备', desc: '准备企划财政部提交文件' },
      { step: '申请提交', desc: '递交申请' },
      { step: '注册完成', desc: '注册证书签发' },
    ],
    documents: ['法人登记簿', '商业计划书', '资本金验证', '仓储设施文件'],
  },
  'venture-cert': {
    title: '风险企业/创新企业（Innobiz）认证',
    shortTitle: '风险/创新企业认证',
    category: '企业认证',
    description: '风险企业和Innobiz认证可享受大幅税收优惠、研发补贴及采购优惠。这是韩国科技和创新企业最具价值的认证之一。',
    faqs: [
      { q: '风险企业认证和Innobiz有什么区别？', a: '风险认证侧重于投资或技术，Innobiz侧重于研发投入比例和创新管理评分。' },
    ],
    processSteps: [
      { step: '资格评估', desc: '评估研发投入比例和技术认证' },
      { step: '材料准备', desc: '财务报表、研发记录、技术证书' },
      { step: '评估申请', desc: '向韩国技术金融公社提交申请' },
      { step: '认证完成', desc: '证书签发（有效期2年，可续期）' },
    ],
    documents: ['审计财务报表', '研发支出明细', '技术评估报告或专利文件'],
  },
  'haccp': {
    title: 'HACCP认证及食品许可',
    shortTitle: 'HACCP认证',
    category: '食品',
    description: 'HACCP（危害分析与关键控制点）认证对许多食品类别在韩国属强制要求，对所有食品企业强烈推荐。它向买家和监管机构证明系统性食品安全管理能力。',
    faqs: [
      { q: 'HACCP是强制性的吗？', a: '肉类、水产加工品、乳制品、即食食品等特定类别强制实施。其他类别为自愿认证。' },
    ],
    processSteps: [
      { step: '差距分析', desc: '评估现状与HACCP要求的差距' },
      { step: 'HACCP计划制定', desc: '危害分析和关键控制点识别' },
      { step: '实施', desc: '设施改造和员工培训' },
      { step: '检查与认证', desc: '食品药品安全部检查及证书签发' },
    ],
    documents: ['设施平面图', '产品工艺流程图', '原材料规格书', 'HACCP计划文件'],
  },
  'cosmetics': {
    title: '化妆品/准药品制造·进口许可',
    shortTitle: '化妆品/准药品许可',
    category: '医药',
    description: '在韩国制造或进口化妆品和准药品（医药外品）需向食品药品安全部进行登记或许可。这对于进入韩国市场的美妆品牌、OEM厂商和进口商至关重要。',
    faqs: [
      { q: '什么是准药品（医药外品）？', a: '准药品是介于化妆品和药品之间的产品，如消毒剂、美白牙膏、染发剂等，需单独申请许可。' },
      { q: '化妆品制造是否需要生产设施？', a: '制造商需要GMP合规设施；进口商需在韩国指定责任人（RP）。' },
      { q: '外国化妆品可以不通过韩国公司直接进口吗？', a: '不可以。进口化妆品至韩国必须指定韩国责任人（公司或个人）。' },
    ],
    processSteps: [
      { step: '许可类型确认', desc: '评估产品类别和所需许可类型' },
      { step: '设施/责任人设置', desc: 'GMP设施准备或责任人指定' },
      { step: '申请提交', desc: '向食品药品安全部递交申请' },
      { step: '许可完成', desc: '登记/许可证签发' },
    ],
    documents: ['营业执照', '设施平面图或责任人指定文件', '产品成分清单', '安全评估文件'],
  },
  'procurement': {
    title: '政府采购注册（PPS/나라장터）',
    shortTitle: '政府采购',
    category: '采购',
    description: '在韩国公共采购服务（PPS）系统——나라장터（KONEPS）注册，允许企业参与韩国政府采购招标。这是任何希望与韩国政府机构开展业务的公司的必备注册。',
    faqs: [
      { q: '谁有资格在KONEPS注册？', a: '任何合法注册的韩国公司或拥有韩国分支机构的外国公司均可注册。' },
    ],
    processSteps: [
      { step: '数字证书', desc: '获取KONEPS电子签名证书' },
      { step: '公司注册', desc: '在KONEPS上注册公司信息' },
      { step: '能力注册', desc: '注册产品/服务和相关认证' },
      { step: '激活', desc: '完成注册并获得投标资格' },
    ],
    documents: ['营业执照', '法人登记簿', '电子签名证书', '银行账户信息'],
  },
  'research-lab': {
    title: '企业附属研究所设立认证',
    shortTitle: '企业附属研究所',
    category: '研发',
    description: '设立经认定的企业附属研究所可享受韩国研发支援体系中的重大税收优惠和补贴。认定研究所可享受研发税收抵免、研究人员薪酬扣除和技术进口税收豁免。',
    faqs: [
      { q: '研究人员需要什么资质？', a: '需持有相关学位或同等经验。最低人数要求因企业规模而异。' },
    ],
    processSteps: [
      { step: '资格评估', desc: '审查研究人员资质和设施条件' },
      { step: '材料准备', desc: '准备韩国产业技术振兴协会提交文件' },
      { step: '申请提交', desc: '向韩国产业技术振兴协会（KOITA）递交申请' },
      { step: '认证完成', desc: '检查及证书签发' },
    ],
    documents: ['研究人员简历和学位证书', '研究设施平面图', '未来2年研究计划', '法人登记簿'],
  },
  'ecig': {
    title: '电子烟进口许可',
    shortTitle: '电子烟进口',
    category: '流通',
    description: '根据《烟草事业法》，向韩国进口电子烟（包括烟液和设备）需向企划财政部进行注册。这是一个受到严格监管的类别，有特定的产品检测要求。',
    faqs: [
      { q: '含尼古丁和零尼古丁产品有区别吗？', a: '含尼古丁产品受《烟草事业法》约束。零尼古丁产品可能有不同的分类。' },
    ],
    processSteps: [
      { step: '产品分类', desc: '确定监管类别' },
      { step: '材料准备', desc: '进口注册文件' },
      { step: '申请提交', desc: '向企划财政部递交申请' },
      { step: '注册完成', desc: '注册证书签发' },
    ],
    documents: ['法人登记簿', '产品规格书', '成分检测报告', '原产地证明文件'],
  },
  'sports-club': {
    title: '指定体育俱乐部注册',
    shortTitle: '体育俱乐部',
    category: '体育/休闲',
    description: '指定体育俱乐部获得政府认可，并获得社区体育发展支持。向文化体育观光部注册，可申请设施支援和运营补贴。',
    faqs: [
      { q: '哪些运动项目符合资格？', a: '文化体育观光部指定的所有运动项目均符合资格，包括足球、篮球、游泳等。' },
    ],
    processSteps: [
      { step: '规划', desc: '俱乐部组织和会员架构设置' },
      { step: '材料准备', desc: '部门提交文件' },
      { step: '申请提交', desc: '向当地体育委员会递交申请' },
      { step: '指定完成', desc: '获得指定体育俱乐部资格' },
    ],
    documents: ['俱乐部章程', '会员名单', '设施使用协议', '项目计划书'],
  },
  'location-based-service': {
    title: '位置信息服务事业申报',
    shortTitle: '位置信息服务',
    category: '信息通信',
    description: '根据《位置信息的保护及利用法》，任何收集、存储或提供个人或物体位置信息的企业，须向放送通信委员会（KCC）进行申报。这适用于使用GPS或基站数据的应用程序、平台和设备。',
    faqs: [
      { q: '哪些类型的服务需要申报？', a: '使用个人或物体位置数据的任何服务——包括外卖应用、导航、车队追踪、基于位置的营销和车联网——均需进行申报。' },
      { q: '外国企业可以申报吗？', a: '可以，但必须在韩国设立实体（分支机构或子公司）并任命驻韩位置信息保护负责人。' },
      { q: '申报需要多长时间？', a: '向KCC提交所有材料后，约需1~2周。' },
      { q: '有持续合规义务吗？', a: '是的，需要每年提交安全措施报告、任命位置数据保护负责人并管理用户同意。' },
      { q: '不合规的处罚是什么？', a: '最高3000万韩元罚款，未经适当申报擅自收集位置数据的运营商可能承担刑事责任。' },
    ],
    processSteps: [
      { step: '咨询', desc: '评估服务类型和适用义务' },
      { step: '材料准备', desc: '准备KCC申报文件和隐私政策' },
      { step: 'KCC提交', desc: '向放送通信委员会递交申报材料' },
      { step: '确认完成', desc: '接收申报确认并完成合规设置' },
    ],
    documents: ['营业执照', '服务描述及技术概述', '位置信息保护负责人任命书', '隐私政策草案', '安全措施方案'],
  },
}

const servicesJa: Record<ServiceSlug, ServiceI18n> = {
  'logistics': {
    title: '国際貨物運送取扱業登録',
    shortTitle: '国際貨物運送取扱業',
    category: '物流/流通',
    description: '国際貨物運送取扱業は、荷主の委託を受け、自己の名義と計算で国際貨物の輸送を取り扱う事業です。物流政策基本法に基づき国土交通部への登録が必要です。韓国で国際物流サービスを運営するための必須許認可です。',
    faqs: [
      { q: '最低資本金の要件はありますか？', a: 'はい。国際貨物運送取扱業登録には3億ウォン以上の払込資本金が必要です。' },
      { q: '手続きにかかる期間は？', a: '書類が揃ってから約2〜4週間です。' },
      { q: '外国人でも登録できますか？', a: '外国人代表者でも登録可能ですが、在留資格と事業者登録の要件を先に満たす必要があります。' },
    ],
    processSteps: [
      { step: '相談', desc: 'ビジネス状況と許認可要件の確認' },
      { step: '書類準備', desc: '必要書類リストの提供と準備支援' },
      { step: '申請代行', desc: '関係機関への書類提出' },
      { step: '完了', desc: '登録証受領と事業開始' },
    ],
    documents: ['法人登記簿謄本', '事業計画書', '輸送力証明書', '保証保険証書', '資本金確認書類'],
  },
  'currency-exchange': {
    title: '外貨両替業登録',
    shortTitle: '外貨両替業',
    category: '金融',
    description: '外国為替取引法に基づき、外貨両替業を営む場合は企画財政部への登録が必要です。外国通貨の売買を合法的に行うために必須の許認可です。',
    faqs: [
      { q: '個人でも外貨両替業に登録できますか？', a: '法人だけでなく個人事業主も登録できます。' },
      { q: 'AML（マネーロンダリング防止）義務は何ですか？', a: '外貨両替業者は特定金融取引情報の報告及び利用法に基づき、顧客確認義務等を履行する必要があります。' },
    ],
    processSteps: [
      { step: '事前確認', desc: '要件充足の確認' },
      { step: '書類準備', desc: '企画財政部提出書類の準備' },
      { step: '登録申請', desc: '企画財政部への申請' },
      { step: '完了', desc: '外貨両替業登録証の受領' },
    ],
    documents: ['事業者登録証', '法人登記簿謄本', '代表者本人確認書類', '事務所賃貸借契約書', 'AML内部統制基準'],
  },
  'urban-guesthouse': {
    title: '外国人都市民泊業登録',
    shortTitle: '外国人都市民泊業',
    category: '宿泊/観光',
    description: '都市部の住宅施設を活用して外国人観光客に宿泊サービスを提供する事業です。観光振興法に基づく登録により、ソウルなどの都市中心部で合法的にゲストハウスを運営できます。',
    faqs: [
      { q: '賃貸物件を使用できますか？', a: 'はい。家主の承諾を得た上で賃貸物件を使用できます。' },
      { q: '何部屋まで運営できますか？', a: '一般的に最大7部屋です。7部屋を超える場合は異なる許可カテゴリが必要です。' },
    ],
    processSteps: [
      { step: '現地確認', desc: '宿泊施設要件の事前検討' },
      { step: '書類準備', desc: '市区町村提出書類の準備' },
      { step: '申請', desc: '地方政府への申請と処理' },
      { step: '完了', desc: '登録証の受領' },
    ],
    documents: ['建物所有権または使用権証明', '事業者登録証', '消防設備確認書', '衛生教育修了証', '外国語案内資料'],
  },
  'hostel': {
    title: 'ホステル業登録',
    shortTitle: 'ホステル業',
    category: '宿泊/観光',
    description: 'ホステル業許可は、主にユースや格安旅行者向けのドミトリー形式の宿泊施設を運営するためのライセンスです。観光振興法に基づく登録が必要です。',
    faqs: [
      { q: 'ホステルとゲストハウスの違いは？', a: 'ホステルは主にドミトリー（相部屋）形式、ゲストハウスは外国人観光客向けの個室を提供します。' },
    ],
    processSteps: [
      { step: '相談', desc: '施設と登録要件の確認' },
      { step: '書類準備', desc: '必要書類の準備' },
      { step: '申請', desc: '地方政府への申請' },
      { step: '完了', desc: '登録証の受領' },
    ],
    documents: ['建物所有権または使用権証明', '事業者登録証', '消防設備確認書', '施設配置図'],
  },
  'hanok': {
    title: '韓屋体験業登録',
    shortTitle: '韓屋体験業',
    category: '宿泊/観光',
    description: '韓屋体験業許可により、伝統的な韓国建築を観光宿泊施設として運営できます。観光振興法に基づく登録により、歴史的な韓国建築の合法的な商業化が可能です。',
    faqs: [
      { q: '文化財として認定された韓屋である必要がありますか？', a: '正式な文化財指定は不要ですが、建物が伝統的な韓国建築の特徴を持つ必要があります。' },
    ],
    processSteps: [
      { step: '相談', desc: '建物の適格性評価' },
      { step: '書類準備', desc: '書類の準備' },
      { step: '申請', desc: '地方政府への申請' },
      { step: '完了', desc: '登録証の受領' },
    ],
    documents: ['建物所有権証明', '伝統的建築特性を示す写真', '事業者登録証'],
  },
  'building-usage': {
    title: '建物用途変更許可',
    shortTitle: '建物用途変更',
    category: '建設/建築',
    description: '建築法に基づき、建物の指定用途を変更する（例：住居から商業用途）場合、地方自治体への許可申請または申告が必要です。無許可での用途変更は違法であり、処罰の対象となります。',
    faqs: [
      { q: 'どのような用途変更が可能ですか？', a: '住居・商業・工業・教育用途間の変更が一般的です。変更の種類によって要件が異なります。' },
    ],
    processSteps: [
      { step: '確認', desc: '現在の用途と目標用途の分類評価' },
      { step: '書類準備', desc: '建築図面と許可書類' },
      { step: '申請', desc: '地方建築主管部門への提出' },
      { step: '完了', desc: '許可証の交付' },
    ],
    documents: ['建物登記簿', '建築図面', '建物用途変更申請書'],
  },
  'food-manufacturing': {
    title: '食品製造加工業登録',
    shortTitle: '食品製造加工業',
    category: '食品',
    description: '食品衛生法に基づき、食品を製造・加工・包装する事業者は地域保健所に登録が必要です。韓国における食品生産事業の出発点となる登録です。',
    faqs: [
      { q: '施設の条件は何ですか？', a: '居住区から分離した専用製造エリア、適切な衛生設備、換気が必要です。' },
      { q: 'HACCP認証は必須ですか？', a: '食肉・水産・乳製品など特定カテゴリはHACCP必須。その他のカテゴリも強く推奨されます。' },
    ],
    processSteps: [
      { step: '施設確認', desc: '製造施設の法的基準への適合評価' },
      { step: '書類準備', desc: '保健所提出書類の準備' },
      { step: '申請', desc: '申請と施設検査' },
      { step: '完了', desc: '登録証の受領' },
    ],
    documents: ['事業者登録証', '施設配置図', '水質検査報告書', '衛生管理者任命証明書'],
  },
  'women-enterprise': {
    title: '女性企業認証',
    shortTitle: '女性企業認証',
    category: '企業認証',
    description: '女性企業支援法に基づく女性企業認証により、政府調達優遇、優遇融資、各種支援プログラムへのアクセスが可能になります。',
    faqs: [
      { q: '株式保有要件は何ですか？', a: '代表者が株式の30%超を保有し、実際に経営を掌握する女性である必要があります。' },
    ],
    processSteps: [
      { step: '適格性確認', desc: '株式保有と経営管理権要件の評価' },
      { step: '書類準備', desc: '認証書類の準備' },
      { step: '申請', desc: '韓国女性経済人協会への提出' },
      { step: '完了', desc: '認証証書の交付' },
    ],
    documents: ['法人登記簿謄本', '株主名簿', '代表者身分証', '事業者登録証'],
  },
  'nonprofit': {
    title: '非営利社団法人設立',
    shortTitle: '非営利社団法人',
    category: '法人/団体',
    description: '韓国での非営利社団法人設立には、主務官庁の許可と裁判所への法人登記が必要です。業界団体、職能団体、公益組織に適した法人形態です。',
    faqs: [
      { q: '何名の設立会員が必要ですか？', a: '一般的に主務官庁によって2〜10名の設立会員が必要です。' },
    ],
    processSteps: [
      { step: '計画', desc: '目的・範囲の明確化と定款案作成' },
      { step: '書類準備', desc: '定款、設立総会議事録、会員名簿' },
      { step: '主務官庁許可', desc: '主務官庁への申請' },
      { step: '法院登記', desc: '地区裁判所での法人登記' },
    ],
    documents: ['定款', '設立総会議事録', '設立会員名簿', '事業計画と予算'],
  },
  'tobacco': {
    title: 'たばこ輸入・販売業登録',
    shortTitle: 'たばこ輸入販売業',
    category: '流通',
    description: '韓国でたばこ製品を輸入・販売するには、企画財政部への登録が必要です。たばこ市場は厳格に規制されており、違反には厳しい罰則があります。',
    faqs: [
      { q: 'どの会社でもたばこを輸入できますか？', a: '資本金と施設要件を満たした会社のみがたばこ輸入・販売業者として登録できます。' },
    ],
    processSteps: [
      { step: '適格性確認', desc: '資本金・施設要件の確認' },
      { step: '書類準備', desc: '企画財政部提出書類の準備' },
      { step: '申請', desc: '申請書の提出' },
      { step: '完了', desc: '登録証の交付' },
    ],
    documents: ['法人登記簿謄本', '事業計画書', '資本金確認書類', '保管施設関係書類'],
  },
  'venture-cert': {
    title: 'ベンチャー/イノビズ企業認証',
    shortTitle: 'ベンチャー/イノビズ認証',
    category: '企業認証',
    description: 'ベンチャー企業とイノビズ（革新型中小企業）認証により、大幅な税制優遇、研究開発補助金、調達優遇が受けられます。韓国のテック・イノベーション企業にとって最も価値ある認証の一つです。',
    faqs: [
      { q: 'ベンチャー認証とイノビズの違いは？', a: 'ベンチャー認証は投資や技術に焦点を当て、イノビズは研究開発投資比率とイノベーション経営スコアに焦点を当てています。' },
    ],
    processSteps: [
      { step: '適格性評価', desc: '研究開発投資比率と技術認証の評価' },
      { step: '書類準備', desc: '財務諸表、研究開発記録、技術証明書' },
      { step: '評価申請', desc: '韓国技術金融公社への提出' },
      { step: '認証', desc: '証書の交付（有効期間2年、更新可能）' },
    ],
    documents: ['監査済財務諸表', '研究開発費内訳', '技術評価報告書または特許書類'],
  },
  'haccp': {
    title: 'HACCP認証・食品許可',
    shortTitle: 'HACCP認証',
    category: '食品',
    description: 'HACCP（危害要因重要管理点）認証は韓国の多くの食品カテゴリで必須であり、全食品事業者に強く推奨されます。体系的な食品安全管理能力を買い手と規制当局に証明します。',
    faqs: [
      { q: 'HACCPは必須ですか？', a: '食肉製品、水産加工品、乳製品、即席食品などの特定カテゴリは必須。その他は任意です。' },
    ],
    processSteps: [
      { step: 'ギャップ分析', desc: '現状とHACCP要件のギャップ評価' },
      { step: 'HACCPプラン策定', desc: '危害要因分析と重要管理点の特定' },
      { step: '実施', desc: '施設改善とスタッフ教育' },
      { step: '検査と認証', desc: '食品医薬品安全部の検査と証書交付' },
    ],
    documents: ['施設配置図', '製品製造工程図', '原材料規格書', 'HACCPプラン書類'],
  },
  'cosmetics': {
    title: '化粧品・医薬部外品製造・輸入許可',
    shortTitle: '化粧品・医薬部外品許可',
    category: '医薬品',
    description: '韓国で化粧品や医薬部外品を製造・輸入するには、食品医薬品安全部への登録または許可が必要です。韓国市場に参入する美容ブランド、OEMメーカー、輸入業者にとって必須の許認可です。',
    faqs: [
      { q: '医薬部外品とは何ですか？', a: '医薬部外品は化粧品と医薬品の中間に位置する製品で、消毒剤、美白歯磨き粉、染毛剤などが含まれます。別途許可が必要です。' },
      { q: '化粧品の製造には施設が必要ですか？', a: '製造業者にはGMP適合施設が必要です。輸入業者は韓国での責任販売業者（RP）の指定が必要です。' },
      { q: '韓国企業なしで外国化粧品を輸入できますか？', a: 'いいえ。韓国へ化粧品を輸入するには、韓国の責任販売業者（企業または個人）を指定する必要があります。' },
    ],
    processSteps: [
      { step: '許可種別の確認', desc: '製品カテゴリと必要な許可種別の評価' },
      { step: '施設/RP設置', desc: 'GMP施設の準備または責任販売業者の指定' },
      { step: '申請', desc: '食品医薬品安全部への申請' },
      { step: '完了', desc: '登録/許可証の交付' },
    ],
    documents: ['事業者登録証', '施設配置図またはRP指定書類', '製品成分リスト', '安全性評価書類'],
  },
  'procurement': {
    title: '政府調達登録（PPS/나라장터）',
    shortTitle: '政府調達',
    category: '調達',
    description: '韓国の公共調達サービス（PPS）システム——나라장터（KONEPS）への登録により、韓国政府調達入札への参加が可能になります。韓国政府機関とのビジネスを希望する企業に必須の登録です。',
    faqs: [
      { q: 'KONEPSへの登録資格は？', a: '合法的に登録された韓国企業、または韓国支店を持つ外国企業が登録できます。' },
    ],
    processSteps: [
      { step: '電子証明書取得', desc: 'KONEPS用電子署名の取得' },
      { step: '会社登録', desc: 'KONEPSでの会社情報登録' },
      { step: '能力登録', desc: '製品/サービスと関連認証の登録' },
      { step: '有効化', desc: '登録完了と入札資格の取得' },
    ],
    documents: ['事業者登録証', '法人登記簿謄本', '電子証明書', '銀行口座情報'],
  },
  'research-lab': {
    title: '企業付設研究所設立認定',
    shortTitle: '企業付設研究所',
    category: '研究開発',
    description: '認定された企業付設研究所の設立により、韓国の研究開発支援制度における大幅な税制優遇と補助金が受けられます。認定研究所は研究開発税額控除、研究員給与控除、技術輸入税免除の対象です。',
    faqs: [
      { q: '研究員にはどのような資格が必要ですか？', a: '関連分野の学位または同等の経験が必要です。最低人数は企業規模によって異なります。' },
    ],
    processSteps: [
      { step: '適格性評価', desc: '研究員資格と施設の確認' },
      { step: '書類準備', desc: 'KOITA提出書類の準備' },
      { step: '申請', desc: '韓国産業技術振興協会（KOITA）への申請' },
      { step: '認定', desc: '検査と証書の交付' },
    ],
    documents: ['研究員の履歴書と学位証明書', '研究施設配置図', '今後2年間の研究計画', '法人登記簿謄本'],
  },
  'ecig': {
    title: '電子タバコ輸入許可',
    shortTitle: '電子タバコ輸入',
    category: '流通',
    description: 'たばこ事業法に基づき、電子タバコ（リキッドとデバイスを含む）を韓国に輸入するには企画財政部への登録が必要です。厳格に規制されたカテゴリであり、特定の製品検査要件があります。',
    faqs: [
      { q: 'ニコチン入りとゼロニコチン製品は異なる扱いですか？', a: 'はい。ニコチン含有製品はたばこ事業法の対象です。ゼロニコチン製品は異なる分類となる場合があります。' },
    ],
    processSteps: [
      { step: '製品分類', desc: '規制カテゴリの決定' },
      { step: '書類準備', desc: '輸入登録書類' },
      { step: '申請', desc: '企画財政部への申請' },
      { step: '完了', desc: '登録証の交付' },
    ],
    documents: ['法人登記簿謄本', '製品仕様書', '成分検査報告書', '原産地証明書類'],
  },
  'sports-club': {
    title: '指定スポーツクラブ登録',
    shortTitle: '指定スポーツクラブ',
    category: 'スポーツ/レジャー',
    description: '指定スポーツクラブは地域スポーツ振興のための政府認定・支援を受けます。文化体育観光部への登録により、施設支援や運営補助金の申請が可能です。',
    faqs: [
      { q: 'どのスポーツが対象ですか？', a: '文化体育観光部が指定する全スポーツ（サッカー、バスケットボール、水泳など）が対象です。' },
    ],
    processSteps: [
      { step: '計画', desc: 'クラブ組織と会員構成の設定' },
      { step: '書類準備', desc: '省庁提出書類' },
      { step: '申請', desc: '地方スポーツ評議会への申請' },
      { step: '指定', desc: '指定スポーツクラブ資格の付与' },
    ],
    documents: ['クラブ規約', '会員名簿', '施設使用協定書', 'プログラム計画書'],
  },
  'location-based-service': {
    title: '位置情報サービス業届出',
    shortTitle: '位置情報サービス業',
    category: 'IT/通信',
    description: '位置情報の保護及び利用法に基づき、個人や物体の位置情報を収集・保存・提供する事業者は放送通信委員会（KCC）への届出が必要です。GPSや基地局データを使用するアプリ、プラットフォーム、デバイスに適用されます。',
    faqs: [
      { q: 'どのようなサービスが届出の対象ですか？', a: '個人や物体の位置データを使用するサービス——デリバリーアプリ、ナビゲーション、車両追跡、位置情報マーケティング、テレマティクスなど——が届出の対象です。' },
      { q: '外国企業でも届出できますか？', a: 'はい。ただし韓国に法人（支店または子会社）を設立し、韓国在住の位置情報保護管理者を任命する必要があります。' },
      { q: '届出にはどれくらいかかりますか？', a: 'KCCへの全書類提出後、約1〜2週間です。' },
      { q: '継続的なコンプライアンス義務はありますか？', a: 'はい。年次安全措置報告、位置データ保護管理者の任命、ユーザー同意の管理が必要です。' },
      { q: 'コンプライアンス違反の罰則は？', a: '最大3,000万ウォンの罰金。適切な届出なしに位置情報を収集した事業者は刑事責任を問われる可能性があります。' },
    ],
    processSteps: [
      { step: '相談', desc: 'サービス種別と適用義務の評価' },
      { step: '書類準備', desc: 'KCC届出書類とプライバシーポリシーの準備' },
      { step: 'KCC提出', desc: '放送通信委員会への届出' },
      { step: '確認', desc: '届出確認書の受領とコンプライアンス設定' },
    ],
    documents: ['事業者登録証', 'サービス説明と技術概要', '位置情報保護管理者任命書', 'プライバシーポリシー案', 'セキュリティ対策計画'],
  },
}

export function getServiceI18n(locale: Locale, slug: string): ServiceI18n | null {
  const map: Record<Locale, Record<ServiceSlug, ServiceI18n>> = {
    en: servicesEn,
    zh: servicesZh,
    ja: servicesJa,
  }
  return (map[locale] as Record<string, ServiceI18n>)[slug] || null
}

export type { ServiceI18n, ServiceSlug }
