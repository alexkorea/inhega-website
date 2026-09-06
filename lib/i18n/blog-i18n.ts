export type Locale = 'en' | 'zh' | 'ja'

export interface BlogI18n {
  slug: string
  locale: Locale
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  excerpt: string
  content: string
}

const blogData: BlogI18n[] = [
  // ── BLOG 1: international-logistics-registration-guide ──────────────────────
  {
    slug: 'international-logistics-registration-guide',
    locale: 'en',
    title: 'International Freight Forwarding Registration in Korea — Complete 2026 Guide',
    metaTitle: 'International Freight Forwarding Registration Korea 2026 — Full Guide',
    metaDescription: 'How to register an international freight forwarding business in Korea. Capital requirement KRW 300M, surety bond, and step-by-step procedure explained by licensed administrative scriveners. Free consultation.',
    category: 'Logistics',
    excerpt: 'Everything foreign companies need to know about registering an international freight forwarding business in Korea — eligibility, required documents, and timelines.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is International Freight Forwarding?</li><li>Who Needs This Registration?</li><li>Key Requirements</li><li>Required Documents</li><li>Registration Procedure</li><li>Timeline and Fees</li><li>Post-Registration Obligations</li><li>Special Notes for Foreign Companies</li><li>FAQ</li></ol></div>
<h2>1. What Is International Freight Forwarding?</h2>
<p>International freight forwarding (국제물류주선업) refers to the business of arranging the transportation of cargo across international borders on behalf of shippers, under <strong>Article 43 of the Framework Act on Logistics Policy</strong>. The forwarding company acts in its own name and account, handling collection, transport, warehousing, packaging, and customs clearance.</p>
<p>Without a valid registration, it is virtually impossible to contract with major shippers for cross-border shipments. Foreign-invested companies operating in Korea are eligible under the same conditions as domestic firms.</p>
<div class="highlight-box">Framework Act on Logistics Policy, Article 2(1)(8): "International freight forwarding business means a business that arranges transportation of another person's cargo in one's own name and account."</div>
<h2>2. Who Needs This Registration?</h2>
<p>Any company — domestic or foreign-invested — that intends to arrange international cargo transportation by air, sea, or land in Korea must obtain this registration. This includes companies that handle customs brokerage in conjunction with transport services.</p>
<h2>3. Key Requirements</h2>
<ul><li><strong>Paid-in Capital:</strong> KRW 300 million or more</li><li><strong>Surety Bond / Insurance:</strong> KRW 100 million or more</li><li><strong>Office Space:</strong> A dedicated office</li></ul>
<h2>4. Required Documents</h2>
<ul><li>Corporate registry extract (for legal entities)</li><li>Business plan</li><li>Proof of capital (bank balance certificate)</li><li>Surety bond certificate copy</li><li>Office lease agreement</li><li>Representative's ID copy</li><li>Business registration certificate copy</li></ul>
<h2>5. Registration Procedure</h2>
<ol><li>Pre-consultation and eligibility review</li><li>Document preparation (surety bond, corporate setup if needed)</li><li>Submission to the Regional Office of the Ministry of Land, Infrastructure and Transport</li><li>Receipt of registration certificate (approx. 10–20 business days)</li></ol>
<h2>6. Timeline and Fees</h2>
<p>Once all documents are in order, processing takes approximately <strong>10–20 business days</strong>. There is no government application fee; main costs include the annual surety bond premium (approx. KRW 300,000–500,000) and administrative scrivener fees.</p>
<h2>7. Post-Registration Obligations</h2>
<ul><li>Maintain and renew the surety bond annually</li><li>Report changes within 30 days (representative, trade name, address)</li><li>Submit annual cargo handling performance report</li></ul>
<h2>8. Special Notes for Foreign Companies</h2>
<p>Foreign-invested companies (FICs) may register under the same requirements. Capital remitted from abroad and recorded as paid-in capital qualifies. Foreign representatives may be required to submit a criminal background check issued in their home country — confirm with the relevant Regional Land Management Office before filing.</p>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a sole proprietor register?</p><p class="faq-a">A. Yes. Both corporations and sole proprietors with capital of KRW 300M+ may register.</p></div>
<div class="faq-item"><p class="faq-q">Q. Must the KRW 300M be maintained at all times?</p><p class="faq-a">A. No. You must prove the capital at the time of application. It may be used as operating funds afterwards.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can a mutual aid association substitute for the surety bond?</p><p class="faq-a">A. Yes, if the association is recognized by the relevant authority. Confirm eligibility in advance.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if processing exceeds 20 business days?</p><p class="faq-a">A. You may inquire with the processing department. Using an administrative scrivener helps expedite responses to supplementation requests.</p></div>
</div>
<div class="cta-box"><h3>Need Help with Freight Forwarding Registration?</h3><p>Vision Administrative Office handles the entire process — from document preparation to certificate receipt — with licensed scriveners specializing in logistics permits. Initial consultation is free.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'international-logistics-registration-guide',
    locale: 'zh',
    title: '韩国国际货运代理业登记指南2026 — 从申请资格到处理期限',
    metaTitle: '韩国国际货运代理业登记方法2026 — 完整指南',
    metaDescription: '韩国国际货运代理业登记资质、材料、企划财政部申请程序详解。资本金3亿韩元、保证保险要求及外国企业特别事项说明。免费初次咨询。',
    category: '物流/配送',
    excerpt: '外国企业在韩国开展国际货运代理业务必须了解的登记资质、所需材料及申请流程全攻略。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是国际货运代理业？</li><li>哪些企业需要登记？</li><li>核心申请条件</li><li>所需材料</li><li>登记申请流程</li><li>处理期限与费用</li><li>登记后的义务</li><li>外国企业注意事项</li><li>常见问题</li></ol></div>
<h2>1. 什么是国际货运代理业？</h2>
<p>国际货运代理业（국제물류주선업）是指根据<strong>《物流政策基本法》第43条</strong>，以自己的名义和资金为货主安排货物跨境运输的业务。代理公司负责揽货、运输、仓储、包装及清关等一站式服务。</p>
<p>未经合法登记，实际上无法与大型货主签订跨境货运合同。在韩国运营的外资企业与国内企业享有同等登记资格。</p>
<div class="highlight-box">《物流政策基本法》第2条第1款第8号："国际货运代理业是指以他人需求为基础，以自己的名义和资金为他人货物安排运输的业务。"</div>
<h2>2. 哪些企业需要登记？</h2>
<p>任何计划在韩国以航空、海运或陆运方式为他人安排国际货物运输的企业（包括外资企业）均须办理此登记。同时办理清关业务的企业同样适用。</p>
<h2>3. 核心申请条件</h2>
<ul><li><strong>实收资本金：</strong>3亿韩元以上</li><li><strong>保证保险：</strong>1亿韩元以上</li><li><strong>办公场所：</strong>需有专用办公室</li></ul>
<h2>4. 所需材料</h2>
<ul><li>法人登记簿摘本（法人适用）</li><li>事业计划书</li><li>资本金证明材料（银行余额证明）</li><li>保证保险证书副本</li><li>办公室租赁合同</li><li>法人代表身份证明副本</li><li>营业执照副本</li></ul>
<h2>5. 登记申请流程</h2>
<ol><li>事前咨询及资质审查</li><li>材料准备（投保保证保险、如需设立法人）</li><li>向国土交通部地方国土管理局提交申请</li><li>领取登记证（约需10~20个工作日）</li></ol>
<h2>6. 处理期限与费用</h2>
<p>材料齐全后，处理期限约为<strong>10~20个工作日</strong>。无政府申请费用，主要费用包括年度保证保险费（约30~50万韩元）及行政士代理费。</p>
<h2>7. 登记后的义务</h2>
<ul><li>每年维持并续保保证保险</li><li>变更事项须在30天内申报（法人代表、商号、地址变更）</li><li>每年提交货物承揽业绩报告</li></ul>
<h2>8. 外国企业注意事项</h2>
<p>外国投资企业可在相同条件下办理登记。从境外汇入并记录为实收资本的资金均可计入资本金要求。外籍法人代表可能需要提供本国出具的无犯罪记录证明，建议申请前与管辖地方国土管理局预先沟通确认。</p>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 个体经营者也可以登记吗？</p><p class="faq-a">A. 是的。法人和个体经营者均可登记，但须满足3亿韩元以上资本金要求。</p></div>
<div class="faq-item"><p class="faq-q">Q. 3亿韩元资本金需要始终保持吗？</p><p class="faq-a">A. 不需要。只需在申请时证明实收资本金达到3亿韩元以上即可，之后可作为运营资金使用。</p></div>
<div class="faq-item"><p class="faq-q">Q. 能用互助基金代替保证保险吗？</p><p class="faq-a">A. 可以，但须为官方认可的互助基金。请提前确认是否符合条件。</p></div>
<div class="faq-item"><p class="faq-q">Q. 如果处理时间超过20个工作日怎么办？</p><p class="faq-a">A. 可向主管部门查询处理进度。委托行政士代理可有效加快对补充材料要求的响应速度。</p></div>
</div>
<div class="cta-box"><h3>需要国际货运代理业登记协助？</h3><p>Vision行政士事务所由专攻物流许可的专业行政士全程代理，从材料准备到领取登记证一站式服务。初次咨询免费。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'international-logistics-registration-guide',
    locale: 'ja',
    title: '韓国国際物流主選業登録完全ガイド2026 — 申請資格から処理期間まで',
    metaTitle: '韓国国際物流主選業登録方法2026 — 完全ガイド',
    metaDescription: '韓国での国際物流主選業登録に必要な資格・書類・手続きを詳解。資本金3億ウォン要件・保証保険・外国企業向け特記事項まで専門行政書士が解説。初回相談無料。',
    category: '物流・流通',
    excerpt: '韓国で国際物流主選業を開始する外国企業が知っておくべき登録資格・必要書類・手続きの完全ガイド。',
    content: `<div class="toc"><p>目次</p><ol><li>国際物流主選業とは？</li><li>登録が必要な企業</li><li>主要申請要件</li><li>必要書類</li><li>登録申請手順</li><li>処理期間と費用</li><li>登録後の義務</li><li>外国企業向け注意事項</li><li>よくある質問</li></ol></div>
<h2>1. 国際物流主選業とは？</h2>
<p>国際物流主選業（국제물류주선업）とは、<strong>物流政策基本法第43条</strong>に基づき、荷主の委託を受けて自己の名義と計算で国際貨物の運送を主選する事業です。航空・海上・陸上を問わず、集貨・運送・保管・梱包・通関を一括して行う業態です。</p>
<p>正規の登録なしには、大手荷主との国際貨物運送契約は事実上困難です。韓国で事業を行う外国投資企業も国内企業と同じ条件で登録できます。</p>
<div class="highlight-box">物流政策基本法第2条第1項第8号：「国際物流主選業とは、他人の需要に応じて自己の名義と計算で他人の貨物運送を主選する事業をいう」</div>
<h2>2. 登録が必要な企業</h2>
<p>韓国において航空・海上・陸上による国際貨物の運送を主選する予定のすべての企業（外国投資企業を含む）は、この登録が必要です。通関業務を併せて行う企業も対象となります。</p>
<h2>3. 主要申請要件</h2>
<ul><li><strong>払込資本金：</strong>3億ウォン以上</li><li><strong>保証保険：</strong>1億ウォン以上</li><li><strong>事務所：</strong>専用の事務スペースが必要</li></ul>
<h2>4. 必要書類</h2>
<ul><li>法人登記簿謄本（法人の場合）</li><li>事業計画書</li><li>資本金証明書類（銀行残高証明書）</li><li>保証保険証券の写し</li><li>事務所の賃貸借契約書</li><li>代表者の身分証明書の写し</li><li>事業者登録証の写し</li></ul>
<h2>5. 登録申請手順</h2>
<ol><li>事前相談および要件確認</li><li>書類準備（保証保険加入、法人設立等）</li><li>地方国土管理庁への申請書類提出</li><li>登録証受領（約10〜20営業日）</li></ol>
<h2>6. 処理期間と費用</h2>
<p>書類が揃った後の処理期間は約<strong>10〜20営業日</strong>です。政府への申請手数料はなく、主な費用は年間保証保険料（約30〜50万ウォン）と行政書士報酬です。</p>
<h2>7. 登録後の義務</h2>
<ul><li>保証保険の維持・更新</li><li>変更事項の届出（代表者・商号・所在地変更から30日以内）</li><li>年間貨物取扱実績の報告</li></ul>
<h2>8. 外国企業向け注意事項</h2>
<p>外国投資企業（FIC）は同じ要件のもとで登録できます。海外から送金し払込資本金として記録した資金は要件を満たします。外国人代表者は本国発行の犯罪経歴証明書の提出を求められる場合があるため、申請前に管轄の地方国土管理庁に確認することを推奨します。</p>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 個人事業主でも登録できますか？</p><p class="faq-a">A. はい。法人・個人事業主ともに資本金3億ウォン以上の要件を満たせば登録できます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 3億ウォンを常時保持する必要がありますか？</p><p class="faq-a">A. いいえ。申請時点で払込資本金が3億ウォン以上であることを証明すれば、その後は運転資金として活用できます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 共済組合で保証保険の代替はできますか？</p><p class="faq-a">A. 認定された共済組合であれば代替可能です。事前に適格性を確認してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 処理が20営業日を超えた場合は？</p><p class="faq-a">A. 担当部署に処理状況を問い合わせることができます。行政書士を活用することで補完要請への対応を迅速化できます。</p></div>
</div>
<div class="cta-box"><h3>国際物流主選業の登録をお手伝いします</h3><p>ビジョン行政書士事務所は、物流許認可を専門とする行政書士が書類準備から登録証受領まで一貫サポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 2: currency-exchange-registration-guide ────────────────────────────
  {
    slug: 'currency-exchange-registration-guide',
    locale: 'en',
    title: 'Currency Exchange Business Registration in Korea — Complete 2026 Guide',
    metaTitle: 'Currency Exchange Registration Korea 2026 — Ministry of Economy & Finance Guide',
    metaDescription: 'How to register a currency exchange business in Korea with the Ministry of Economy and Finance. Eligibility, required documents, AML obligations, and foreign company notes. Free consultation.',
    category: 'Finance',
    excerpt: 'A step-by-step guide for foreign companies seeking to register a currency exchange business in Korea — including AML obligations and post-registration requirements.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is Currency Exchange Business?</li><li>Who Needs to Register?</li><li>Key Requirements</li><li>Required Documents</li><li>Registration Procedure</li><li>AML Obligations</li><li>Timeline and Fees</li><li>Post-Registration Obligations</li><li>FAQ</li></ol></div>
<h2>1. What Is Currency Exchange Business?</h2>
<p>Currency exchange business (환전업) is a financial business that must be registered with the Ministry of Economy and Finance under <strong>Article 8 of the Foreign Exchange Transactions Act</strong>. It covers buying and selling foreign currency and handling traveler's checks.</p>
<h2>2. Who Needs to Register?</h2>
<p>Any individual or business — including foreign-invested companies — that intends to buy or sell foreign currency as a commercial activity in Korea must register. Common applicants include hotels, tourist districts, airports, and money-transfer service providers.</p>
<h2>3. Key Requirements</h2>
<ul><li>No minimum capital requirement for basic registration</li><li>Must not have disqualifying criminal convictions related to financial fraud</li><li>Must have an established office location</li><li>AML compliance system in place</li></ul>
<h2>4. Required Documents</h2>
<ul><li>Application form</li><li>Business plan including estimated transaction volume</li><li>Corporate registry extract or ID for sole proprietors</li><li>Business registration certificate</li><li>Office lease agreement</li><li>AML internal control policy document</li></ul>
<h2>5. Registration Procedure</h2>
<ol><li>Prepare AML compliance documentation</li><li>Submit application to the Ministry of Economy and Finance (Foreign Exchange Division)</li><li>Review and supplementation period</li><li>Receipt of registration certificate (approx. 20–30 business days)</li></ol>
<h2>6. AML Obligations</h2>
<p>Currency exchange operators are subject to <strong>Anti-Money Laundering (AML)</strong> obligations under the Act on Reporting and Using Specified Financial Transaction Information. Key requirements include:</p>
<ul><li>Customer identification (KYC) for transactions over USD 1,000 equivalent</li><li>Suspicious transaction reporting (STR)</li><li>Record-keeping for 5 years</li><li>Designation of a compliance officer</li></ul>
<h2>7. Timeline and Fees</h2>
<p>Processing typically takes <strong>20–30 business days</strong>. Government fees are minimal; main costs are for document preparation and administrative scrivener services.</p>
<h2>8. Post-Registration Obligations</h2>
<ul><li>File regular transaction reports with the Korea Financial Intelligence Unit (KoFIU)</li><li>Report business changes within 14 days</li><li>Renew registration as required</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a foreign national register without a Korean entity?</p><p class="faq-a">A. A Korean business registration is required. Foreign nationals should establish a legal entity first.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is a hotel automatically allowed to exchange currency for guests?</p><p class="faq-a">A. No. Even hotels must obtain a separate currency exchange registration to offer this service commercially.</p></div>
<div class="faq-item"><p class="faq-q">Q. What are the penalties for operating without registration?</p><p class="faq-a">A. Unregistered currency exchange is a criminal offense under the Foreign Exchange Transactions Act, with potential fines and imprisonment.</p></div>
</div>
<div class="cta-box"><h3>Register Your Currency Exchange Business in Korea</h3><p>Vision Administrative Office handles currency exchange registration with expertise in financial licensing and AML compliance setup. Initial consultation is free.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'currency-exchange-registration-guide',
    locale: 'zh',
    title: '韩国换汇业登记方法与要求2026 — 企划财政部申请程序全攻略',
    metaTitle: '韩国换汇业登记2026 — 企划财政部申请程序总整理',
    metaDescription: '韩国换汇业登记资质、所需材料、企划财政部申请程序详解。包括反洗钱义务及外国企业注意事项。专业行政士免费初次咨询。',
    category: '金融',
    excerpt: '外国企业在韩国开展换汇业务的完整登记指南，包含反洗钱合规要求及登记后义务。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是换汇业？</li><li>哪些企业需要登记？</li><li>核心申请条件</li><li>所需材料</li><li>登记申请流程</li><li>反洗钱（AML）义务</li><li>处理期限与费用</li><li>登记后的义务</li><li>常见问题</li></ol></div>
<h2>1. 什么是换汇业？</h2>
<p>换汇业（환전업）是根据<strong>《外汇交易法》第8条</strong>须向企划财政部登记的金融业务，涵盖外币买卖及旅行支票处理业务。</p>
<h2>2. 哪些企业需要登记？</h2>
<p>任何个人或企业（包括外资企业），若计划在韩国以商业目的买卖外币，均须办理登记。常见申请者包括酒店、旅游区商户、机场运营商及汇款服务提供商。</p>
<h2>3. 核心申请条件</h2>
<ul><li>基本登记无最低资本金要求</li><li>申请人不得有金融欺诈相关犯罪记录</li><li>须有固定办公场所</li><li>须建立反洗钱合规体系</li></ul>
<h2>4. 所需材料</h2>
<ul><li>申请表</li><li>包含预计交易量的事业计划书</li><li>法人登记簿摘本或个体经营者身份证明</li><li>营业执照</li><li>办公室租赁合同</li><li>反洗钱内部控制政策文件</li></ul>
<h2>5. 登记申请流程</h2>
<ol><li>准备反洗钱合规文件</li><li>向企划财政部（外汇业务部门）提交申请</li><li>审查及材料补充期</li><li>领取登记证（约需20~30个工作日）</li></ol>
<h2>6. 反洗钱（AML）义务</h2>
<p>换汇业经营者须遵守《特定金融交易信息报告及利用法》的<strong>反洗钱（AML）</strong>规定，主要要求包括：</p>
<ul><li>对等值1,000美元以上的交易进行客户身份核实（KYC）</li><li>可疑交易报告（STR）</li><li>保存5年交易记录</li><li>指定合规负责人</li></ul>
<h2>7. 处理期限与费用</h2>
<p>处理期限通常为<strong>20~30个工作日</strong>。政府手续费极低，主要费用为材料准备及行政士代理费。</p>
<h2>8. 登记后的义务</h2>
<ul><li>定期向韩国金融情报机构（KoFIU）提交交易报告</li><li>业务变更须在14天内申报</li><li>按要求办理登记续期</li></ul>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 外国人可以不成立韩国法人而直接登记吗？</p><p class="faq-a">A. 不行。须先在韩国办理营业执照，外国人需先设立法人实体。</p></div>
<div class="faq-item"><p class="faq-q">Q. 酒店可以自动为住客提供换汇服务吗？</p><p class="faq-a">A. 不行。即使是酒店，提供商业性换汇服务也须单独办理换汇业登记。</p></div>
<div class="faq-item"><p class="faq-q">Q. 未登记经营换汇业会有什么处罚？</p><p class="faq-a">A. 未登记换汇为《外汇交易法》规定的违法行为，可能面临罚款及刑事处罚。</p></div>
</div>
<div class="cta-box"><h3>在韩国登记换汇业务</h3><p>Vision行政士事务所专业代理换汇业登记，提供金融许可及反洗钱合规体系搭建服务。初次咨询免费。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'currency-exchange-registration-guide',
    locale: 'ja',
    title: '韓国外貨両替業登録ガイド2026 — 企画財政部への申請手続き',
    metaTitle: '韓国外貨両替業登録2026 — 企画財政部申請手続き総まとめ',
    metaDescription: '韓国での外貨両替業登録に必要な資格・書類・企画財政部申請手続きを解説。AML義務・外国企業向け注意事項も含む。行政書士による初回相談無料。',
    category: '金融',
    excerpt: '韓国で外貨両替業を開始する外国企業向けの完全登録ガイド。AMLコンプライアンス要件と登録後の義務を含む。',
    content: `<div class="toc"><p>目次</p><ol><li>外貨両替業とは？</li><li>登録が必要な企業</li><li>主要申請要件</li><li>必要書類</li><li>登録申請手順</li><li>AML義務</li><li>処理期間と費用</li><li>登録後の義務</li><li>よくある質問</li></ol></div>
<h2>1. 外貨両替業とは？</h2>
<p>外貨両替業（환전업）は、<strong>外国為替取引法第8条</strong>に基づき企画財政部への登録が必要な金融業です。外貨の売買や旅行小切手の取り扱いが対象となります。</p>
<h2>2. 登録が必要な企業</h2>
<p>韓国において外貨の売買を商業目的で行う個人・企業（外国投資企業を含む）はすべて登録が必要です。主な申請者はホテル、観光地の店舗、空港事業者、送金サービス提供者などです。</p>
<h2>3. 主要申請要件</h2>
<ul><li>基本登録に最低資本金の要件なし</li><li>金融詐欺に関連する欠格事由がないこと</li><li>固定した事務所が必要</li><li>AMLコンプライアンス体制の整備</li></ul>
<h2>4. 必要書類</h2>
<ul><li>申請書</li><li>予定取引量を含む事業計画書</li><li>法人登記簿謄本または個人事業主の身分証明書</li><li>事業者登録証</li><li>事務所の賃貸借契約書</li><li>AML内部統制方針書</li></ul>
<h2>5. 登録申請手順</h2>
<ol><li>AMLコンプライアンス文書の準備</li><li>企画財政部（外国為替担当部門）への申請書類提出</li><li>審査・補完期間</li><li>登録証受領（約20〜30営業日）</li></ol>
<h2>6. AML義務</h2>
<p>外貨両替業者は「特定金融取引情報の報告及び利用に関する法律」に基づく<strong>AML（マネーロンダリング防止）</strong>義務を負います。主な要件は以下のとおりです：</p>
<ul><li>1,000ドル相当以上の取引に対する本人確認（KYC）</li><li>疑わしい取引の報告（STR）</li><li>5年間の取引記録保管</li><li>コンプライアンス責任者の指定</li></ul>
<h2>7. 処理期間と費用</h2>
<p>処理期間は通常<strong>20〜30営業日</strong>です。政府手数料はごくわずかで、主な費用は書類準備と行政書士報酬です。</p>
<h2>8. 登録後の義務</h2>
<ul><li>韓国金融情報分析院（KoFIU）への定期的な取引報告</li><li>業務変更から14日以内の届出</li><li>必要に応じた登録更新</li></ul>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 韓国法人なしで外国人が登録できますか？</p><p class="faq-a">A. 韓国での事業者登録が必要です。外国人はまず法人を設立してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. ホテルは宿泊客向けに自動的に両替できますか？</p><p class="faq-a">A. いいえ。ホテルも商業目的で両替サービスを提供する場合は、別途外貨両替業登録が必要です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 無登録で営業した場合の罰則は？</p><p class="faq-a">A. 無登録の外貨両替は外国為替取引法上の犯罪であり、罰金または懲役刑の対象となります。</p></div>
</div>
<div class="cta-box"><h3>韓国での外貨両替業登録をサポートします</h3><p>ビジョン行政書士事務所は、金融ライセンスとAMLコンプライアンス体制構築を専門とする行政書士が登録手続きを全面サポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 3: building-usage-change-guide ─────────────────────────────────────
  {
    slug: 'building-usage-change-guide',
    locale: 'en',
    title: 'Building Use Change Permit in Korea — Complete Procedure and Cost Guide 2026',
    metaTitle: 'Korea Building Use Change 2026 — Permit vs. Notification Procedure Guide',
    metaDescription: 'How to change a building\'s designated use in Korea — permit vs. notification, required documents, timeline, and costs. Essential for converting to guesthouse, food business, or hostel use. Free consultation.',
    category: 'Construction / Real Estate',
    excerpt: 'A practical guide for foreign companies and investors seeking to change the designated use of a building in Korea — covering permit vs. notification, required documents, and timelines.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is Building Use Change?</li><li>Permit vs. Notification — What Is the Difference?</li><li>Who Needs This?</li><li>Key Requirements</li><li>Required Documents</li><li>Application Procedure</li><li>Timeline and Costs</li><li>Common Mistakes by Foreign Companies</li><li>FAQ</li></ol></div>
<h2>1. What Is Building Use Change?</h2>
<p>Under Korea's <strong>Building Act</strong>, all buildings are classified into specific use categories (e.g., neighborhood living facilities, residential, commercial, industrial). If you intend to operate a business in a space that has a different designated use, you must obtain a use change permit or file a notification before commencing operations.</p>
<p>Common conversions include: converting a neighborhood living facility into a guesthouse, hostel, food manufacturing facility, or office.</p>
<h2>2. Permit vs. Notification — What Is the Difference?</h2>
<p>Korea's Building Act distinguishes between <strong>use change permit</strong> (허가) and <strong>use change notification</strong> (신고) depending on the scope of the change.</p>
<ul><li><strong>Permit:</strong> Required when changing to a higher-risk or more regulated category (e.g., converting to commercial or industrial use). Requires prior approval from the local government.</li><li><strong>Notification:</strong> Required for lower-risk changes within similar categories. Filed with the local government but does not require prior approval.</li></ul>
<div class="highlight-box">Many foreign investors mistakenly believe a lease agreement is sufficient. Without a use change permit or notification, operating your business is illegal, and you may face fines and forced closure.</div>
<h2>3. Who Needs This?</h2>
<p>Any foreign company or individual investor who intends to use a Korean building for a business purpose that differs from its current designated use. Common scenarios for foreign companies include setting up a guesthouse for foreign travelers, a food production facility, or a cosmetics manufacturing space.</p>
<h2>4. Key Requirements</h2>
<ul><li>Architectural drawings showing the proposed use</li><li>Proof of compliance with fire safety, sanitation, and structural requirements for the new use</li><li>Landlord consent (if leasing)</li></ul>
<h2>5. Required Documents</h2>
<ul><li>Application form</li><li>Architectural drawings (floor plan, elevation, sections)</li><li>Building register extract</li><li>Structure safety confirmation (for major structural changes)</li><li>Fire safety compliance documents</li><li>Landlord consent letter</li></ul>
<h2>6. Application Procedure</h2>
<ol><li>Confirm current designated use of the building</li><li>Determine whether permit or notification applies</li><li>Prepare architectural drawings and compliance documents</li><li>Submit to the local municipal office (Si/Gun/Gu)</li><li>On-site inspection (if required)</li><li>Receipt of permit or notification acceptance</li></ol>
<h2>7. Timeline and Costs</h2>
<ul><li><strong>Notification:</strong> Typically 7–15 business days for acceptance</li><li><strong>Permit:</strong> Typically 30–60 business days depending on complexity</li><li>Costs include architectural drawing fees, inspection fees, and administrative scrivener service fees</li></ul>
<h2>8. Common Mistakes by Foreign Companies</h2>
<ul><li>Starting renovation before receiving the permit or notification acceptance</li><li>Underestimating fire safety upgrade requirements</li><li>Not checking local zoning regulations that may prohibit the intended use</li><li>Failing to update the building register after completion</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can I operate immediately after filing a notification?</p><p class="faq-a">A. No. You must wait for the local authority to process and accept the notification before commencing operations.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does use change require physical renovation?</p><p class="faq-a">A. Not always, but the space must meet all technical standards for the new use (fire safety, ventilation, etc.).</p></div>
<div class="faq-item"><p class="faq-q">Q. Can a foreign national own the building and apply directly?</p><p class="faq-a">A. Yes. The owner or their authorized representative (such as an administrative scrivener) may file the application.</p></div>
</div>
<div class="cta-box"><h3>Need Help with Building Use Change in Korea?</h3><p>Vision Administrative Office handles building use change applications — from confirming current use to receiving the final permit. Initial consultation is free.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'building-usage-change-guide',
    locale: 'zh',
    title: '韩国建筑物用途变更许可·申报完整指南2026 — 程序与费用',
    metaTitle: '韩国建筑物用途变更2026 — 许可与申报手续总整理',
    metaDescription: '韩国建筑物用途变更许可与申报的区别、所需材料、处理期限及费用详解。改建为宾馆、食品厂房或民宿等用途必读指南。专业行政士免费咨询。',
    category: '建筑/房产',
    excerpt: '外国企业及投资者在韩国开展建筑物用途变更的实用指南，涵盖许可与申报区别、所需材料及处理期限。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是建筑物用途变更？</li><li>许可与申报的区别</li><li>哪些企业需要办理？</li><li>核心申请条件</li><li>所需材料</li><li>申请流程</li><li>处理期限与费用</li><li>外国企业常见错误</li><li>常见问题</li></ol></div>
<h2>1. 什么是建筑物用途变更？</h2>
<p>根据韩国<strong>《建筑法》</strong>，所有建筑物均按特定用途类别（如邻里生活设施、住宅、商业、工业等）进行分类。若您计划在用途类别与预定业务不符的空间内经营，必须在开始营业前申请用途变更许可或提交变更申报。</p>
<p>常见用途变更包括：将邻里生活设施改建为宾馆、民宿、食品加工厂或办公室。</p>
<h2>2. 许可与申报的区别</h2>
<p>韩国《建筑法》根据变更范围区分<strong>用途变更许可</strong>（허가）和<strong>用途变更申报</strong>（신고）。</p>
<ul><li><strong>许可：</strong>变更为风险较高或管制较严格类别时需要（如变更为商业或工业用途），须在开业前取得地方政府批准。</li><li><strong>申报：</strong>在相似类别之间进行风险较低的变更时适用，向地方政府提交申报，无需事先批准。</li></ul>
<div class="highlight-box">许多外国投资者误以为租赁合同已足够。未经用途变更许可或申报而经营属于违法行为，可能面临罚款及强制关闭。</div>
<h2>3. 哪些企业需要办理？</h2>
<p>任何计划将韩国建筑物用于与当前指定用途不符的商业目的的外国企业或个人投资者均需办理。常见场景包括设立外国游客民宿、食品生产设施或化妆品制造空间。</p>
<h2>4. 核心申请条件</h2>
<ul><li>体现预定用途的建筑图纸</li><li>符合新用途消防安全、卫生及结构要求的证明材料</li><li>房东同意书（租赁情况下）</li></ul>
<h2>5. 所需材料</h2>
<ul><li>申请表</li><li>建筑图纸（平面图、立面图、剖面图）</li><li>建筑登记簿摘本</li><li>结构安全确认书（重大结构变更时）</li><li>消防安全合规文件</li><li>房东同意书</li></ul>
<h2>6. 申请流程</h2>
<ol><li>确认建筑物当前指定用途</li><li>确定适用许可还是申报程序</li><li>准备建筑图纸及合规文件</li><li>向当地市/郡/区政府提交申请</li><li>现场检查（如需）</li><li>取得许可或申报受理通知</li></ol>
<h2>7. 处理期限与费用</h2>
<ul><li><strong>申报：</strong>通常7~15个工作日受理</li><li><strong>许可：</strong>根据复杂程度通常需30~60个工作日</li><li>费用包括建筑图纸费、检查费及行政士代理费</li></ul>
<h2>8. 外国企业常见错误</h2>
<ul><li>在取得许可或申报受理前擅自开始装修</li><li>低估消防安全升级要求</li><li>未检查当地区域规划法规是否允许预定用途</li><li>完工后未更新建筑登记簿</li></ul>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 提交申报后可以立即开始营业吗？</p><p class="faq-a">A. 不行。必须等地方政府处理并受理申报后，方可开始营业。</p></div>
<div class="faq-item"><p class="faq-q">Q. 用途变更是否必须进行实体装修？</p><p class="faq-a">A. 不一定，但该空间必须满足新用途的所有技术标准（消防安全、通风等）。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外国人拥有建筑物是否可以直接申请？</p><p class="faq-a">A. 可以。产权人或其授权代理人（如行政士）均可提交申请。</p></div>
</div>
<div class="cta-box"><h3>需要韩国建筑物用途变更协助？</h3><p>Vision行政士事务所提供建筑物用途变更申请全流程代理服务，从确认当前用途到取得最终许可一站式处理。初次咨询免费。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'building-usage-change-guide',
    locale: 'ja',
    title: '韓国建築物用途変更許可・申告完全ガイド2026 — 手続きと費用',
    metaTitle: '韓国建築物用途変更2026 — 許可と申告の手続き総まとめ',
    metaDescription: '韓国での建築物用途変更（許可・申告）の違い・必要書類・処理期間・費用を詳解。ゲストハウス・食品製造・民泊等への転用に必読。行政書士による初回相談無料。',
    category: '建築・不動産',
    excerpt: '韓国で建築物の用途変更を検討する外国企業・投資家向けの実務ガイド。許可と申告の違い、必要書類、処理期間を解説。',
    content: `<div class="toc"><p>目次</p><ol><li>建築物用途変更とは？</li><li>許可と申告の違い</li><li>必要な企業・個人</li><li>主要申請要件</li><li>必要書類</li><li>申請手順</li><li>処理期間と費用</li><li>外国企業によくあるミス</li><li>よくある質問</li></ol></div>
<h2>1. 建築物用途変更とは？</h2>
<p>韓国の<strong>建築法</strong>では、すべての建物が特定の用途区分（近隣生活施設、住居、商業、工業など）に分類されています。建物の現在の指定用途と異なる事業目的で使用する場合、営業開始前に用途変更許可を取得するか、申告を行う必要があります。</p>
<p>よくある転用例：近隣生活施設からゲストハウス、ホステル、食品製造施設、または事務所への変更。</p>
<h2>2. 許可と申告の違い</h2>
<p>建築法では、変更の内容に応じて<strong>用途変更許可</strong>（허가）と<strong>用途変更申告</strong>（신고）を区別しています。</p>
<ul><li><strong>許可：</strong>よりリスクが高い・規制が厳しいカテゴリへの変更（商業・工業用途など）に必要。地方自治体の事前承認が必要。</li><li><strong>申告：</strong>類似カテゴリ内でのリスクの低い変更に適用。地方自治体への届出のみで事前承認は不要。</li></ul>
<div class="highlight-box">多くの外国人投資家が賃貸借契約だけで十分だと誤解しています。用途変更許可または申告なしに事業を行うことは違法であり、罰金や強制閉鎖の対象となります。</div>
<h2>3. 必要な企業・個人</h2>
<p>韓国の建物を現在の指定用途と異なる事業目的で使用しようとする外国企業・個人投資家すべてが対象です。外国人旅行者向けゲストハウス、食品製造施設、化粧品製造スペースの開設などが典型的なケースです。</p>
<h2>4. 主要申請要件</h2>
<ul><li>予定する用途を示した建築図面</li><li>新用途に対応した消防安全・衛生・構造要件の適合証明</li><li>建物所有者の同意（賃貸の場合）</li></ul>
<h2>5. 必要書類</h2>
<ul><li>申請書</li><li>建築図面（平面図・立面図・断面図）</li><li>建築台帳謄本</li><li>構造安全確認書（大規模な構造変更がある場合）</li><li>消防安全適合書類</li><li>建物所有者の同意書</li></ul>
<h2>6. 申請手順</h2>
<ol><li>建物の現在の指定用途を確認</li><li>許可と申告のどちらが必要かを判断</li><li>建築図面および適合書類の準備</li><li>管轄の市区郡役所への提出</li><li>現地調査（必要な場合）</li><li>許可証または申告受理通知の受領</li></ol>
<h2>7. 処理期間と費用</h2>
<ul><li><strong>申告：</strong>通常7〜15営業日で受理</li><li><strong>許可：</strong>複雑さによって通常30〜60営業日</li><li>費用は建築図面作成費、検査費、行政書士報酬を含む</li></ul>
<h2>8. 外国企業によくあるミス</h2>
<ul><li>許可取得または申告受理前にリノベーションを開始してしまう</li><li>消防安全対応のためのアップグレード費用を過小評価する</li><li>予定用途を禁止する地方の用途地域規制を確認しない</li><li>完了後に建築台帳を更新しない</li></ul>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 申告後すぐに営業を開始できますか？</p><p class="faq-a">A. いいえ。地方自治体が申告を処理・受理してから営業を開始してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 用途変更には必ず内装工事が必要ですか？</p><p class="faq-a">A. 必須ではありませんが、そのスペースが新用途のすべての技術基準（消防安全、換気など）を満たす必要があります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外国人の建物所有者が直接申請できますか？</p><p class="faq-a">A. はい。所有者またはその代理人（行政書士など）が申請を提出できます。</p></div>
</div>
<div class="cta-box"><h3>韓国での建築物用途変更をサポートします</h3><p>ビジョン行政書士事務所は、現在の用途確認から最終許可証受領まで、建築物用途変更申請を一貫してサポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 4: food-manufacturing-license-guide ────────────────────────────────
  {
    slug: 'food-manufacturing-license-guide',
    locale: 'en',
    title: 'Food Manufacturing Business License in Korea — 2026 Complete Guide',
    metaTitle: 'Korea Food Manufacturing License 2026 — Requirements & Procedure',
    metaDescription: 'How to obtain a food manufacturing and processing business license in Korea. Facility standards, hygiene requirements, MFDS approval process explained. Free consultation.',
    category: 'Food',
    excerpt: 'A step-by-step guide to obtaining a food manufacturing and processing license in Korea — facility requirements, required documents, and the MFDS approval process.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is a Food Manufacturing Business?</li><li>Regulatory Authority</li><li>Facility Requirements</li><li>Required Documents</li><li>Application Procedure</li><li>Timeline and Costs</li><li>FAQ</li></ol></div>
<h2>1. What Is a Food Manufacturing Business?</h2>
<p>Any company that manufactures, processes, or packages food products for sale in Korea must obtain a <strong>food manufacturing and processing business license</strong> from the Ministry of Food and Drug Safety (MFDS) under the Food Sanitation Act.</p>
<h2>2. Regulatory Authority</h2>
<p>The local government (city/county/district) processes applications on behalf of the MFDS. Separate HACCP certification may also be required depending on the product category.</p>
<h2>3. Facility Requirements</h2>
<ul><li>Dedicated manufacturing area separated from non-food zones</li><li>Hand-washing facilities with hot water</li><li>Pest control and waste management systems</li><li>Temperature-controlled storage where required</li><li>Separate raw material and finished product storage</li></ul>
<h2>4. Required Documents</h2>
<ul><li>Business license application form</li><li>Floor plan of manufacturing facility</li><li>Proof of ownership or lease of facility</li><li>Water quality test report (if using private water source)</li><li>Facility inspection checklist</li></ul>
<h2>5. Application Procedure</h2>
<ol><li>Pre-consultation with local health authority</li><li>Facility construction/renovation to meet standards</li><li>Document preparation and submission</li><li>On-site facility inspection</li><li>License issuance</li></ol>
<h2>6. Timeline and Costs</h2>
<p>Processing typically takes <strong>7–14 business days</strong> after facility inspection passes. No government fee, but facility upgrades and scrivener fees are the main costs.</p>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Does a home kitchen qualify as a manufacturing facility?</p><p class="faq-a">A. No. A dedicated, inspected commercial facility is required.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is HACCP mandatory?</p><p class="faq-a">A. HACCP is mandatory for certain product categories (meat, dairy, etc.) and strongly recommended for all others.</p></div>
</div>
<div class="cta-box"><h3>Need Help with Your Food Manufacturing License?</h3><p>Vision Administrative Office guides food businesses through facility planning, document preparation, and inspection. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'food-manufacturing-license-guide',
    locale: 'zh',
    title: '韩国食品制造加工业许可申请指南2026',
    metaTitle: '韩国食品制造加工业许可2026 — 要求与申请流程',
    metaDescription: '韩国食品制造加工业许可申请条件、设施标准、食药处审批流程详解。专业行政士免费初次咨询。',
    category: '食品',
    excerpt: '在韩国开展食品制造加工业务的完整许可申请指南，涵盖设施要求、所需材料及食药处审批程序。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是食品制造加工业？</li><li>监管机构</li><li>设施要求</li><li>所需材料</li><li>申请流程</li><li>处理期限与费用</li><li>常见问题</li></ol></div>
<h2>1. 什么是食品制造加工业？</h2>
<p>在韩国从事食品生产、加工或包装并对外销售的企业，必须依据《食品卫生法》取得<strong>食品制造加工业许可证</strong>。</p>
<h2>2. 监管机构</h2>
<p>由地方政府（市/郡/区）代食品药品安全处（MFDS）受理申请。根据产品类别，可能还需额外取得HACCP认证。</p>
<h2>3. 设施要求</h2>
<ul><li>制造区域与非食品区域明确隔离</li><li>配备热水洗手设施</li><li>病虫害防治及废物管理系统</li><li>必要时配备温控储存设施</li><li>原料与成品分开储存</li></ul>
<h2>4. 所需材料</h2>
<ul><li>营业许可申请表</li><li>制造设施平面图</li><li>设施所有权或租赁证明</li><li>水质检测报告（使用自有水源时）</li><li>设施检查清单</li></ul>
<h2>5. 申请流程</h2>
<ol><li>与地方卫生部门预先协商</li><li>按标准建设/改造设施</li><li>准备并提交材料</li><li>现场设施检查</li><li>颁发许可证</li></ol>
<h2>6. 处理期限与费用</h2>
<p>设施检查通过后通常需<strong>7~14个工作日</strong>。无政府申请费，主要费用为设施改造费及行政士服务费。</p>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 家庭厨房可以作为制造设施吗？</p><p class="faq-a">A. 不可以。必须具备经检查合格的专用商业设施。</p></div>
<div class="faq-item"><p class="faq-q">Q. HACCP认证是强制要求吗？</p><p class="faq-a">A. 对于肉类、乳制品等特定产品类别是强制要求，其他类别强烈建议取得。</p></div>
</div>
<div class="cta-box"><h3>需要食品制造许可申请协助？</h3><p>Vision行政士事务所提供设施规划、材料准备及检查全程指导。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'food-manufacturing-license-guide',
    locale: 'ja',
    title: '韓国食品製造加工業許可申請ガイド2026',
    metaTitle: '韓国食品製造加工業許可2026 — 要件・手続き完全ガイド',
    metaDescription: '韓国での食品製造加工業許可の申請条件、施設基準、食薬処認可手続きを詳しく解説。行政書士による無料初回相談あり。',
    category: '食品',
    excerpt: '韓国で食品製造・加工事業を行うための許可申請ガイド。施設要件、必要書類、食品医薬品安全処の審査手続きを詳しく説明します。',
    content: `<div class="toc"><p>目次</p><ol><li>食品製造加工業とは？</li><li>監督機関</li><li>施設要件</li><li>必要書類</li><li>申請手続き</li><li>処理期間と費用</li><li>よくある質問</li></ol></div>
<h2>1. 食品製造加工業とは？</h2>
<p>韓国で食品の製造、加工、包装を行い販売する事業者は、食品衛生法に基づき<strong>食品製造加工業許可証</strong>を取得する必要があります。</p>
<h2>2. 監督機関</h2>
<p>地方自治体（市/郡/区）が食品医薬品安全処（MFDS）に代わって申請を受理します。製品カテゴリーによっては別途HACCP認証も必要です。</p>
<h2>3. 施設要件</h2>
<ul><li>製造エリアと非食品エリアの明確な分離</li><li>温水手洗い設備の設置</li><li>害虫防除および廃棄物管理システム</li><li>必要に応じた温度管理保管設備</li><li>原材料と完成品の別途保管</li></ul>
<h2>4. 必要書類</h2>
<ul><li>営業許可申請書</li><li>製造施設の平面図</li><li>施設の所有権または賃貸借証明</li><li>水質検査報告書（自家水源使用時）</li><li>施設検査チェックリスト</li></ul>
<h2>5. 申請手続き</h2>
<ol><li>地方保健当局との事前協議</li><li>基準に合わせた施設整備</li><li>書類準備・提出</li><li>現地施設検査</li><li>許可証発行</li></ol>
<h2>6. 処理期間と費用</h2>
<p>施設検査通過後、通常<strong>7〜14営業日</strong>で処理されます。政府申請費用はなく、主な費用は施設整備費と行政書士報酬です。</p>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 自宅のキッチンは製造施設として認められますか？</p><p class="faq-a">A. いいえ。検査に合格した専用の商業施設が必要です。</p></div>
<div class="faq-item"><p class="faq-q">Q. HACCPは義務ですか？</p><p class="faq-a">A. 食肉・乳製品など特定品目は義務、その他も強く推奨されます。</p></div>
</div>
<div class="cta-box"><h3>食品製造許可の取得をサポートします</h3><p>ビジョン行政書士事務所は施設計画から書類準備、検査まで一貫してサポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 5: women-enterprise-certification-guide ────────────────────────────
  {
    slug: 'women-enterprise-certification-guide',
    locale: 'en',
    title: 'Women-Owned Business Certification in Korea — Benefits & Application Guide 2026',
    metaTitle: 'Korea Women-Owned Business Certification 2026 — How to Apply',
    metaDescription: 'Eligibility, benefits, and application process for Women-Owned Business Certification in Korea. Government procurement preference, subsidies, and more. Free consultation.',
    category: 'Business Certification',
    excerpt: 'How female CEOs can obtain Women-Owned Business Certification in Korea and leverage government procurement preferences, subsidies, and support programs.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is Women-Owned Business Certification?</li><li>Eligibility Requirements</li><li>Key Benefits</li><li>Required Documents</li><li>Application Procedure</li><li>Validity and Renewal</li><li>FAQ</li></ol></div>
<h2>1. What Is Women-Owned Business Certification?</h2>
<p>The Women-Owned Business Certification (여성기업 확인) is issued by the Ministry of SMEs and Startups under the <strong>Act on Support for Women's Businesses</strong>. It confirms that a business is effectively owned and managed by a woman.</p>
<h2>2. Eligibility Requirements</h2>
<ul><li>A woman must hold more than 30% of shares (or be the sole proprietor)</li><li>The female owner must be the representative (CEO)</li><li>The business must be an SME</li></ul>
<h2>3. Key Benefits</h2>
<ul><li>Priority in government procurement bidding</li><li>Access to dedicated loan programs and subsidies</li><li>Preference in public-funded business support programs</li><li>Participation in women-business-exclusive procurement categories</li></ul>
<h2>4. Required Documents</h2>
<ul><li>Application form</li><li>Corporate registry extract</li><li>Shareholder register</li><li>Business registration certificate</li><li>Representative's ID</li></ul>
<h2>5. Application Procedure</h2>
<ol><li>Online application at the Women's Business Center portal</li><li>Document review (approx. 14 business days)</li><li>Certificate issuance</li></ol>
<h2>6. Validity and Renewal</h2>
<p>Certificates are valid for <strong>3 years</strong> and must be renewed before expiry to maintain procurement preferences.</p>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a foreign national female CEO apply?</p><p class="faq-a">A. Yes, as long as the business is registered in Korea and meets all other eligibility criteria.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does this apply to sole proprietorships?</p><p class="faq-a">A. Yes, both corporations and sole proprietorships are eligible.</p></div>
</div>
<div class="cta-box"><h3>Get Your Women-Owned Business Certification</h3><p>Vision Administrative Office handles the full application process. Free initial consultation available.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'women-enterprise-certification-guide',
    locale: 'zh',
    title: '韩国女性企业认证申请指南2026 — 条件、优惠与流程',
    metaTitle: '韩国女性企业认证2026 — 申请条件与政府采购优惠',
    metaDescription: '韩国女性企业认证申请资格、政府采购优惠、所需材料及申请流程详解。专业行政士提供免费初次咨询。',
    category: '企业认证',
    excerpt: '女性CEO如何申请韩国女性企业认证，享受政府采购优先、补贴及各类支持政策。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是女性企业认证？</li><li>申请资格</li><li>主要优惠</li><li>所需材料</li><li>申请流程</li><li>有效期与续期</li><li>常见问题</li></ol></div>
<h2>1. 什么是女性企业认证？</h2>
<p>女性企业认证（여성기업 확인）由中小企业部依据《女性企业支援法》颁发，证明该企业实际上由女性所有并管理。</p>
<h2>2. 申请资格</h2>
<ul><li>女性持有30%以上股份（或为个体经营者）</li><li>女性所有者担任代表（CEO）</li><li>企业须为中小企业</li></ul>
<h2>3. 主要优惠</h2>
<ul><li>政府采购竞标优先权</li><li>专属贷款计划及补贴</li><li>公共资助支持项目优先参与权</li><li>女性企业专属采购类别参与资格</li></ul>
<h2>4. 所需材料</h2>
<ul><li>申请表</li><li>法人登记簿摘本</li><li>股东名册</li><li>营业执照</li><li>代表身份证</li></ul>
<h2>5. 申请流程</h2>
<ol><li>在女性企业中心门户网站在线申请</li><li>材料审查（约14个工作日）</li><li>颁发证书</li></ol>
<h2>6. 有效期与续期</h2>
<p>证书有效期为<strong>3年</strong>，需在到期前续期以维持采购优惠资格。</p>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 外国女性CEO可以申请吗？</p><p class="faq-a">A. 可以，只要企业在韩国注册且满足其他所有资格条件即可。</p></div>
<div class="faq-item"><p class="faq-q">Q. 个体经营者也适用吗？</p><p class="faq-a">A. 适用，法人和个体经营者均可申请。</p></div>
</div>
<div class="cta-box"><h3>申请女性企业认证</h3><p>Vision行政士事务所提供全程申请代理服务。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'women-enterprise-certification-guide',
    locale: 'ja',
    title: '韓国女性企業認証申請ガイド2026 — 条件・優遇・手続き',
    metaTitle: '韓国女性企業認証2026 — 申請条件と政府調達優遇制度',
    metaDescription: '韓国女性企業認証の申請資格、政府調達優遇制度、必要書類と申請手続きを詳しく解説。行政書士による無料初回相談あり。',
    category: '企業認証',
    excerpt: '女性CEOが韓国女性企業認証を取得し、政府調達優先権や補助金などの支援制度を活用する方法を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>女性企業認証とは？</li><li>申請資格</li><li>主なメリット</li><li>必要書類</li><li>申請手続き</li><li>有効期間と更新</li><li>よくある質問</li></ol></div>
<h2>1. 女性企業認証とは？</h2>
<p>女性企業認証（여성기업 확인）は、中小企業部が「女性企業支援法」に基づいて発行するもので、当該企業が女性によって実質的に所有・経営されていることを証明します。</p>
<h2>2. 申請資格</h2>
<ul><li>女性が30%以上の株式を保有（または個人事業主）</li><li>女性所有者が代表（CEO）を務めていること</li><li>中小企業であること</li></ul>
<h2>3. 主なメリット</h2>
<ul><li>政府調達入札の優先権</li><li>専用融資プログラムおよび補助金へのアクセス</li><li>公的支援プログラムへの優先参加</li><li>女性企業専用調達カテゴリーへの参加資格</li></ul>
<h2>4. 必要書類</h2>
<ul><li>申請書</li><li>法人登記簿謄本</li><li>株主名簿</li><li>事業者登録証</li><li>代表者の身分証明書</li></ul>
<h2>5. 申請手続き</h2>
<ol><li>女性企業センターポータルからオンライン申請</li><li>書類審査（約14営業日）</li><li>認証証明書の発行</li></ol>
<h2>6. 有効期間と更新</h2>
<p>証明書の有効期間は<strong>3年</strong>で、調達優遇を維持するには期限前に更新が必要です。</p>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 外国人女性CEOでも申請できますか？</p><p class="faq-a">A. はい。事業が韓国に登録されており、その他の要件を満たしていれば申請可能です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 個人事業主も対象ですか？</p><p class="faq-a">A. はい。法人・個人事業主ともに申請できます。</p></div>
</div>
<div class="cta-box"><h3>女性企業認証の取得をサポートします</h3><p>ビジョン行政書士事務所が申請手続きを全面サポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 6: haccp-certification-guide ──────────────────────────────────────
  {
    slug: 'haccp-certification-guide',
    locale: 'en',
    title: 'HACCP Certification in Korea — How to Apply in 2026',
    metaTitle: 'HACCP Certification Korea 2026 — Application Guide',
    metaDescription: 'How to obtain HACCP certification for food businesses in Korea. Eligibility, required documents, inspection process, and post-certification obligations. Free consultation.',
    category: 'Food',
    excerpt: 'Step-by-step guide to obtaining HACCP certification in Korea for food manufacturers — requirements, document checklist, audit process, and ongoing obligations.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is HACCP?</li><li>Which Businesses Need HACCP?</li><li>Key Requirements</li><li>Application Procedure</li><li>On-Site Audit</li><li>Post-Certification Obligations</li><li>FAQ</li></ol></div>
<h2>1. What Is HACCP?</h2>
<p>HACCP (Hazard Analysis and Critical Control Points) is a science-based food safety management system. In Korea, HACCP certification is administered by the <strong>Korea Agency of HACCP Accreditation and Services (KHAS)</strong> under the Food Safety Act.</p>
<h2>2. Which Businesses Need HACCP?</h2>
<p>HACCP is <strong>mandatory</strong> for meat processors, dairy producers, egg product manufacturers, and certain fishery product businesses. It is recommended for all food manufacturers seeking to supply major distributors or export markets.</p>
<h2>3. Key Requirements</h2>
<ul><li>Documented HACCP plan including hazard analysis</li><li>Critical Control Points (CCPs) identified and monitored</li><li>Corrective action procedures</li><li>Prerequisite programs (sanitation, pest control, etc.)</li><li>Employee HACCP training records</li></ul>
<h2>4. Application Procedure</h2>
<ol><li>Submit application to KHAS</li><li>Document review (plan assessment)</li><li>On-site audit by KHAS inspector</li><li>Certification issued (if audit passes)</li></ol>
<h2>5. On-Site Audit</h2>
<p>KHAS auditors verify that your facility and operations match the submitted HACCP plan. Common deficiencies include inadequate temperature logs, missing CCP monitoring records, and unsanitary receiving areas.</p>
<h2>6. Post-Certification Obligations</h2>
<ul><li>Annual surveillance audit</li><li>Triennial full re-certification audit</li><li>Maintain all monitoring and corrective action records</li><li>Report significant process changes to KHAS</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. How long does HACCP certification take?</p><p class="faq-a">A. Typically 3–6 months from application to certificate, depending on facility readiness.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can foreign-invested food companies apply?</p><p class="faq-a">A. Yes, any food business legally operating in Korea may apply.</p></div>
</div>
<div class="cta-box"><h3>Get Expert Help with HACCP Certification</h3><p>Vision Administrative Office works with food safety consultants to guide your HACCP application from plan development to audit. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'haccp-certification-guide',
    locale: 'zh',
    title: '韩国HACCP认证申请指南2026 — 程序与要求',
    metaTitle: '韩国HACCP认证2026 — 申请流程与要求',
    metaDescription: '韩国食品企业HACCP认证申请资格、材料、现场审核流程及认证后义务详解。专业行政士免费初次咨询。',
    category: '食品',
    excerpt: '韩国食品制造商HACCP认证申请全攻略 — 资格要求、材料清单、审核流程及持续义务。',
    content: `<div class="toc"><p>目录</p><ol><li>HACCP是什么？</li><li>哪些企业需要HACCP？</li><li>主要要求</li><li>申请流程</li><li>现场审核</li><li>认证后义务</li><li>常见问题</li></ol></div>
<h2>1. HACCP是什么？</h2>
<p>HACCP（危害分析与关键控制点）是一套以科学为基础的食品安全管理体系。在韩国，HACCP认证由<strong>韩国食品安全管理认证院（KHAS）</strong>依据食品安全相关法律负责管理。</p>
<h2>2. 哪些企业需要HACCP？</h2>
<p>肉类加工、乳制品生产、蛋制品及部分水产品企业<strong>强制要求</strong>取得HACCP认证。所有希望向大型分销商或出口市场供货的食品制造商均建议取得认证。</p>
<h2>3. 主要要求</h2>
<ul><li>包含危害分析的HACCP计划文件</li><li>关键控制点（CCP）的识别与监控</li><li>纠正措施程序</li><li>前提计划（卫生、病虫害防治等）</li><li>员工HACCP培训记录</li></ul>
<h2>4. 申请流程</h2>
<ol><li>向KHAS提交申请</li><li>文件审查（计划评估）</li><li>KHAS审核员现场审核</li><li>通过审核后颁发认证证书</li></ol>
<h2>5. 现场审核</h2>
<p>KHAS审核员核查设施与运营是否与提交的HACCP计划一致。常见不符合项包括：温度记录不足、CCP监控记录缺失、收货区不卫生等。</p>
<h2>6. 认证后义务</h2>
<ul><li>每年一次监督审核</li><li>每三年一次全面再认证审核</li><li>保存所有监控及纠正措施记录</li><li>向KHAS报告重大工艺变更</li></ul>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. HACCP认证需要多长时间？</p><p class="faq-a">A. 从申请到颁证通常需要3~6个月，具体取决于设施准备情况。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外资食品企业可以申请吗？</p><p class="faq-a">A. 可以，在韩国合法经营的任何食品企业均可申请。</p></div>
</div>
<div class="cta-box"><h3>HACCP认证专业协助</h3><p>Vision行政士事务所与食品安全顾问合作，从计划制定到审核全程陪同。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'haccp-certification-guide',
    locale: 'ja',
    title: '韓国HACCP認証申請ガイド2026 — 取得手続きと要件',
    metaTitle: '韓国HACCP認証2026 — 申請手続きと要件完全ガイド',
    metaDescription: '韓国食品事業者向けHACCP認証の申請資格、書類、現地審査プロセスと認証後義務を詳しく解説。行政書士による無料初回相談あり。',
    category: '食品',
    excerpt: '韓国食品製造事業者のためのHACCP認証申請ガイド — 要件、必要書類、審査プロセスと継続的義務を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>HACCPとは？</li><li>どの事業者がHACCPを必要とするか？</li><li>主な要件</li><li>申請手続き</li><li>現地審査</li><li>認証後の義務</li><li>よくある質問</li></ol></div>
<h2>1. HACCPとは？</h2>
<p>HACCP（危害分析重要管理点）は科学に基づく食品安全管理システムです。韓国では<strong>韓国食品安全管理認証院（KHAS）</strong>が食品安全関連法令に基づきHACCP認証を管理しています。</p>
<h2>2. どの事業者がHACCPを必要とするか？</h2>
<p>食肉加工業、乳製品製造業、卵製品製造業、一部の水産物事業者には<strong>義務</strong>です。大手流通業者や輸出市場への供給を目指すすべての食品製造業者にも強く推奨されます。</p>
<h2>3. 主な要件</h2>
<ul><li>危害分析を含むHACCP計画書の作成</li><li>重要管理点（CCP）の特定と監視</li><li>是正措置手順</li><li>前提条件プログラム（衛生管理、害虫防除など）</li><li>従業員のHACCP研修記録</li></ul>
<h2>4. 申請手続き</h2>
<ol><li>KHASへ申請書を提出</li><li>書類審査（計画評価）</li><li>KHAS審査員による現地審査</li><li>審査合格後に認証証明書を発行</li></ol>
<h2>5. 現地審査</h2>
<p>KHAS審査員が施設と業務がHACCP計画と一致しているか確認します。よく見られる不適合は、温度記録の不備、CCP監視記録の欠如、受入エリアの衛生問題などです。</p>
<h2>6. 認証後の義務</h2>
<ul><li>年1回のサーベイランス審査</li><li>3年ごとの全面再認証審査</li><li>すべての監視・是正措置記録の保持</li><li>重要な工程変更はKHASへ報告</li></ul>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. HACCP認証取得にどのくらいかかりますか？</p><p class="faq-a">A. 施設の準備状況によりますが、申請から証明書取得まで通常3〜6ヶ月かかります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外資食品企業でも申請できますか？</p><p class="faq-a">A. はい。韓国で合法的に営業している食品事業者であれば申請できます。</p></div>
</div>
<div class="cta-box"><h3>HACCP認証取得をサポートします</h3><p>ビジョン行政書士事務所は食品安全コンサルタントと連携し、計画策定から審査まで一貫してサポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 7: venture-innobiz-certification-guide ─────────────────────────────
  {
    slug: 'venture-innobiz-certification-guide',
    locale: 'en',
    title: 'Venture vs Innobiz Certification in Korea — 2026 Comparison Guide',
    metaTitle: 'Korea Venture & Innobiz Certification 2026 — Benefits & How to Apply',
    metaDescription: 'Compare Venture Business and Innobiz certifications in Korea. Tax benefits, eligibility, application process, and which is better for your company explained. Free consultation.',
    category: 'Business Certification',
    excerpt: 'A side-by-side comparison of Venture Business and Innobiz certifications in Korea — eligibility, tax incentives, application requirements, and strategic advice.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Overview: Venture vs Innobiz</li><li>Venture Business Certification</li><li>Innobiz Certification</li><li>Key Tax Benefits</li><li>Application Procedure</li><li>Which Should You Choose?</li><li>FAQ</li></ol></div>
<h2>1. Overview: Venture vs Innobiz</h2>
<p>Korea offers two major innovation-based certifications for SMEs: <strong>Venture Business (벤처기업)</strong> and <strong>Innobiz (이노비즈)</strong>. Both provide significant tax benefits and government support but have different eligibility criteria.</p>
<h2>2. Venture Business Certification</h2>
<p>Issued by KIBO (Korea Technology Finance Corporation) or VC-backed confirmation. Three pathways: (1) VC-invested, (2) R&D-intensive (over 5–10% of revenue), (3) technology-evaluated. Valid for 2 years, renewable.</p>
<h2>3. Innobiz Certification</h2>
<p>Issued by the Small and Medium Business Corporation. Based on technology innovation score (online assessment). Requires a score of 700+ out of 1,000. Valid for 3 years.</p>
<h2>4. Key Tax Benefits</h2>
<ul><li><strong>Venture:</strong> Up to 50% income tax/corporate tax reduction for 5 years</li><li><strong>Innobiz:</strong> R&D tax credits, accelerated depreciation, customs duty reduction on equipment</li><li>Both: Employment support subsidies, government procurement preferences</li></ul>
<h2>5. Application Procedure</h2>
<ol><li>Self-assessment of eligibility pathway</li><li>Prepare financial statements and R&D documentation</li><li>Online application (KIBO portal for Venture; SBC portal for Innobiz)</li><li>Review and certificate issuance (2–4 weeks)</li></ol>
<h2>6. Which Should You Choose?</h2>
<p>If you have VC backing or high R&D spending, pursue Venture certification first for the income tax reduction. If your business has strong technology innovation metrics, Innobiz is easier to maintain long-term. Many companies hold both simultaneously.</p>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a company hold both certifications?</p><p class="faq-a">A. Yes. Many Korean SMEs maintain both Venture and Innobiz certifications simultaneously.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do foreign-invested companies qualify?</p><p class="faq-a">A. Yes, if the company is registered as a Korean SME and meets the respective criteria.</p></div>
</div>
<div class="cta-box"><h3>Get Certified as a Venture or Innobiz Company</h3><p>Vision Administrative Office assists with eligibility assessment and full application filing. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'venture-innobiz-certification-guide',
    locale: 'zh',
    title: '韩国风险企业与创新企业认证比较指南2026',
    metaTitle: '韩国风险企业·创新企业认证2026 — 优惠与申请流程',
    metaDescription: '韩国风险企业认证与创新企业认证的区别、税收优惠、申请资格及申请流程比较。专业行政士免费初次咨询。',
    category: '企业认证',
    excerpt: '韩国风险企业认证与创新企业（Innobiz）认证的申请资格、税收优惠及战略建议对比指南。',
    content: `<div class="toc"><p>目录</p><ol><li>概述：风险企业vs创新企业</li><li>风险企业认证</li><li>创新企业认证</li><li>主要税收优惠</li><li>申请流程</li><li>如何选择？</li><li>常见问题</li></ol></div>
<h2>1. 概述：风险企业vs创新企业</h2>
<p>韩国为中小企业提供两大创新型认证：<strong>风险企业（벤처기업）</strong>和<strong>创新企业Innobiz（이노비즈）</strong>。两者均提供显著的税收优惠和政府支持，但申请资格有所不同。</p>
<h2>2. 风险企业认证</h2>
<p>由韩国技术金融公社（KIBO）或风险投资确认颁发。三种申请路径：(1)获得风险投资、(2)研发密集型（收入5~10%以上）、(3)技术评价。有效期2年，可续期。</p>
<h2>3. 创新企业认证</h2>
<p>由中小企业振兴公团颁发，基于技术创新评分（在线评估）。要求得分700分以上（满分1000分）。有效期3年。</p>
<h2>4. 主要税收优惠</h2>
<ul><li><strong>风险企业：</strong>5年内最高减免50%所得税/法人税</li><li><strong>创新企业：</strong>研发税收抵免、加速折旧、设备进口关税减免</li><li>两者均可享受：就业支持补贴、政府采购优先权</li></ul>
<h2>5. 申请流程</h2>
<ol><li>自我评估申请路径</li><li>准备财务报表及研发文件</li><li>在线申请（KIBO平台申请风险企业；SBC平台申请创新企业）</li><li>审查及颁发证书（2~4周）</li></ol>
<h2>6. 如何选择？</h2>
<p>若有风险投资支持或较高研发支出，优先申请风险企业认证以享受所得税减免。若技术创新指标较强，创新企业认证更易于长期维持。许多企业同时持有两种认证。</p>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 一家企业可以同时持有两种认证吗？</p><p class="faq-a">A. 可以，许多韩国中小企业同时维持风险企业和创新企业认证。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外资企业是否符合资格？</p><p class="faq-a">A. 符合，只要企业在韩国注册为中小企业并满足相应标准即可。</p></div>
</div>
<div class="cta-box"><h3>申请风险企业或创新企业认证</h3><p>Vision行政士事务所提供资格评估及全程申请代理服务。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'venture-innobiz-certification-guide',
    locale: 'ja',
    title: '韓国ベンチャー企業・イノビズ認証比較ガイド2026',
    metaTitle: '韓国ベンチャー・イノビズ認証2026 — 優遇制度と申請方法',
    metaDescription: '韓国のベンチャー企業認証とイノビズ認証の違い、税制優遇、申請資格・手続きを比較解説。行政書士による無料初回相談あり。',
    category: '企業認証',
    excerpt: '韓国のベンチャー企業認証とイノビズ認証を徹底比較 — 申請資格、税制優遇、申請手続きと戦略的アドバイスを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>概要：ベンチャー vs イノビズ</li><li>ベンチャー企業認証</li><li>イノビズ認証</li><li>主な税制優遇</li><li>申請手続き</li><li>どちらを選ぶべきか？</li><li>よくある質問</li></ol></div>
<h2>1. 概要：ベンチャー vs イノビズ</h2>
<p>韓国では中小企業向けに2つの主要なイノベーション認証があります：<strong>ベンチャー企業（벤처기업）</strong>と<strong>イノビズ（이노비즈）</strong>です。いずれも大きな税制優遇と政府支援を提供しますが、申請資格が異なります。</p>
<h2>2. ベンチャー企業認証</h2>
<p>韓国技術金融公社（KIBO）またはVC投資確認により発行。3つの申請ルート：(1)VC投資型、(2)研究開発集約型（売上の5〜10%超）、(3)技術評価型。有効期間2年、更新可。</p>
<h2>3. イノビズ認証</h2>
<p>中小企業振興公団が発行。技術革新スコア（オンライン評価）に基づき、1,000点満点中700点以上が必要。有効期間3年。</p>
<h2>4. 主な税制優遇</h2>
<ul><li><strong>ベンチャー：</strong>5年間、所得税・法人税を最大50%減額</li><li><strong>イノビズ：</strong>研究開発税額控除、加速償却、設備の関税減免</li><li>両認証共通：雇用支援補助金、政府調達優先権</li></ul>
<h2>5. 申請手続き</h2>
<ol><li>申請ルートの自己評価</li><li>財務諸表・研究開発資料の準備</li><li>オンライン申請（ベンチャーはKIBOポータル、イノビズはSBCポータル）</li><li>審査・証明書発行（2〜4週間）</li></ol>
<h2>6. どちらを選ぶべきか？</h2>
<p>VC出資や高い研究開発費がある場合は、所得税減額のためベンチャー認証を優先。技術革新の指標が強い場合はイノビズの方が長期維持しやすいです。両方同時取得の企業も多くあります。</p>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 両方の認証を同時に取得できますか？</p><p class="faq-a">A. はい。多くの韓国中小企業がベンチャーとイノビズの両認証を同時に保有しています。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外資系企業でも資格がありますか？</p><p class="faq-a">A. はい。韓国の中小企業として登録され、各要件を満たしていれば申請できます。</p></div>
</div>
<div class="cta-box"><h3>ベンチャー・イノビズ認証の取得をサポートします</h3><p>ビジョン行政書士事務所が資格評価から申請手続きまで全面サポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 8: procurement-narajangteo-registration-guide ──────────────────────
  {
    slug: 'procurement-narajangteo-registration-guide',
    locale: 'en',
    title: 'Korea Government Procurement (Narajangteo) Supplier Registration — 2026 Guide',
    metaTitle: 'Korea Narajangteo Supplier Registration 2026 — Complete Guide',
    metaDescription: 'How to register as a government procurement supplier on Korea\'s Narajangteo platform. Eligibility, required documents, and bidding process explained. Free consultation.',
    category: 'Government Procurement',
    excerpt: 'How SMEs can register as suppliers on Korea\'s Narajangteo government procurement platform and start participating in public tenders.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is Narajangteo?</li><li>Who Can Register?</li><li>Benefits of Registration</li><li>Required Documents</li><li>Registration Procedure</li><li>After Registration: Participating in Bids</li><li>FAQ</li></ol></div>
<h2>1. What Is Narajangteo?</h2>
<p>Narajangteo (나라장터) is Korea's national online public procurement platform operated by the <strong>Public Procurement Service (PPS)</strong>. All government agencies and public institutions must use Narajangteo for procurement above certain thresholds.</p>
<h2>2. Who Can Register?</h2>
<p>Any business — domestic or foreign-invested — with a valid Korean business registration may register as a supplier. Certain contract categories require additional certifications (e.g., construction license, specific product certifications).</p>
<h2>3. Benefits of Registration</h2>
<ul><li>Access to hundreds of thousands of annual public tenders</li><li>Stable revenue from government contracts</li><li>SME-exclusive procurement categories</li><li>Preference multipliers for certified businesses (Venture, Women-Owned, etc.)</li></ul>
<h2>4. Required Documents</h2>
<ul><li>Business registration certificate</li><li>Certificate of corporate seal impression</li><li>Financial statements (for multi-year contracts)</li><li>Relevant product/service certifications</li><li>Digital certificate (공인인증서)</li></ul>
<h2>5. Registration Procedure</h2>
<ol><li>Obtain a digital certificate (공인인증서)</li><li>Register on the Narajangteo portal (www.g2b.go.kr)</li><li>Submit company information and required documents</li><li>PPS review and approval (2–5 business days)</li></ol>
<h2>6. After Registration: Participating in Bids</h2>
<p>After approval, browse open tenders by category. Submit electronic bids through the portal. Low-value contracts may use a shopping mall format (단가계약). Winning bids require contract execution within the platform.</p>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can foreign companies without a Korean office register?</p><p class="faq-a">A. A Korean business registration is required. Foreign companies typically need to establish a branch or subsidiary first.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is there a registration fee?</p><p class="faq-a">A. No government registration fee, but a digital certificate has an annual cost (approx. KRW 100,000).</p></div>
</div>
<div class="cta-box"><h3>Start Selling to the Korean Government</h3><p>Vision Administrative Office handles Narajangteo registration and advises on bid strategy. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'procurement-narajangteo-registration-guide',
    locale: 'zh',
    title: '韩国政府采购（Narajangteo）供应商注册指南2026',
    metaTitle: '韩国Narajangteo供应商注册2026 — 完整申请指南',
    metaDescription: '如何在韩国政府采购平台Narajangteo注册成为供应商。申请资格、所需材料及投标流程详解。专业行政士免费初次咨询。',
    category: '政府采购',
    excerpt: '中小企业如何在韩国Narajangteo政府采购平台注册成为供应商并参与公开招标。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是Narajangteo？</li><li>哪些企业可以注册？</li><li>注册优惠</li><li>所需材料</li><li>注册流程</li><li>注册后：参与投标</li><li>常见问题</li></ol></div>
<h2>1. 什么是Narajangteo？</h2>
<p>Narajangteo（나라장터）是由<strong>韩国调达厅（PPS）</strong>运营的国家在线政府采购平台。所有政府机关和公共机构必须通过该平台进行超过一定金额的采购。</p>
<h2>2. 哪些企业可以注册？</h2>
<p>持有有效韩国营业执照的任何企业（包括外资企业）均可注册为供应商。部分合同类别需要额外认证（如建筑许可证、特定产品认证等）。</p>
<h2>3. 注册优惠</h2>
<ul><li>获取每年数十万个政府招标项目</li><li>政府合同带来的稳定收入</li><li>中小企业专属采购类别</li><li>认证企业（风险企业、女性企业等）享有优先系数</li></ul>
<h2>4. 所需材料</h2>
<ul><li>营业执照</li><li>法人印章证明书</li><li>财务报表（多年期合同需要）</li><li>相关产品/服务认证</li><li>数字证书（公认证书）</li></ul>
<h2>5. 注册流程</h2>
<ol><li>申请数字证书（公认证书）</li><li>在Narajangteo门户（www.g2b.go.kr）注册</li><li>提交公司信息及所需材料</li><li>调达厅审查与批准（2~5个工作日）</li></ol>
<h2>6. 注册后：参与投标</h2>
<p>获批后，按类别浏览公开招标项目。通过平台提交电子标书。小额合同可使用购物商城形式（单价合同）。中标后需在平台内完成合同签订。</p>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 没有韩国办事处的外国企业可以注册吗？</p><p class="faq-a">A. 需要持有韩国营业执照。外国企业通常需要先设立分支机构或子公司。</p></div>
<div class="faq-item"><p class="faq-q">Q. 注册是否需要缴费？</p><p class="faq-a">A. 无政府注册费，但数字证书每年需支付约10万韩元费用。</p></div>
</div>
<div class="cta-box"><h3>开始向韩国政府销售产品</h3><p>Vision行政士事务所负责Narajangteo注册及投标策略咨询。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'procurement-narajangteo-registration-guide',
    locale: 'ja',
    title: '韓国政府調達（ナラジャンテ）サプライヤー登録ガイド2026',
    metaTitle: '韓国ナラジャンテ サプライヤー登録2026 — 完全申請ガイド',
    metaDescription: '韓国政府調達プラットフォーム「ナラジャンテ」にサプライヤーとして登録する方法。申請資格、必要書類、入札プロセスを詳しく解説。行政書士による無料初回相談あり。',
    category: '政府調達',
    excerpt: '中小企業が韓国のナラジャンテ政府調達プラットフォームにサプライヤー登録し、公開入札に参加する方法を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>ナラジャンテとは？</li><li>登録できる企業は？</li><li>登録のメリット</li><li>必要書類</li><li>登録手続き</li><li>登録後：入札への参加</li><li>よくある質問</li></ol></div>
<h2>1. ナラジャンテとは？</h2>
<p>ナラジャンテ（나라장터）は<strong>韓国調達庁（PPS）</strong>が運営する国家オンライン政府調達プラットフォームです。すべての政府機関・公共機関は一定額以上の調達にナラジャンテを使用しなければなりません。</p>
<h2>2. 登録できる企業は？</h2>
<p>有効な韓国事業者登録証を持つ企業（外資系企業を含む）であれば登録可能です。契約カテゴリーによっては追加認証（建設業許可、特定製品認証など）が必要な場合があります。</p>
<h2>3. 登録のメリット</h2>
<ul><li>年間数十万件の政府入札へのアクセス</li><li>政府契約による安定した収益</li><li>中小企業専用調達カテゴリー</li><li>認証企業（ベンチャー、女性企業等）向け優先係数</li></ul>
<h2>4. 必要書類</h2>
<ul><li>事業者登録証</li><li>法人印鑑証明書</li><li>財務諸表（複数年契約の場合）</li><li>関連製品・サービス認証書</li><li>電子証明書（公認認証書）</li></ul>
<h2>5. 登録手続き</h2>
<ol><li>電子証明書（公認認証書）の取得</li><li>ナラジャンテポータル（www.g2b.go.kr）に登録</li><li>会社情報・必要書類を提出</li><li>調達庁の審査・承認（2〜5営業日）</li></ol>
<h2>6. 登録後：入札への参加</h2>
<p>承認後はカテゴリー別に公開入札を検索できます。ポータルから電子入札書を提出。少額契約はショッピングモール形式（単価契約）を利用できます。落札後はプラットフォーム内で契約を締結します。</p>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 韓国事務所のない外国企業でも登録できますか？</p><p class="faq-a">A. 韓国の事業者登録が必要です。外国企業は通常、まず支店または子会社を設立する必要があります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 登録費用はかかりますか？</p><p class="faq-a">A. 政府への登録費用はありませんが、電子証明書に年間約10万ウォンの費用がかかります。</p></div>
</div>
<div class="cta-box"><h3>韓国政府への販売を始めましょう</h3><p>ビジョン行政書士事務所がナラジャンテ登録と入札戦略のアドバイスを行います。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 9: urban-guesthouse-registration-guide ─────────────────────────────
  {
    slug: 'urban-guesthouse-registration-guide',
    locale: 'en',
    title: 'Foreign Tourist Urban Guesthouse Registration in Korea — 2026 Guide',
    metaTitle: 'Korea Urban Guesthouse (Airbnb) Registration 2026 — Full Guide',
    metaDescription: 'How to legally register a foreign tourist urban guesthouse (도시민박) in Korea. Eligibility, required documents, fire safety, and application process. Free consultation.',
    category: 'Accommodation',
    excerpt: 'A complete guide to registering a foreign tourist urban guesthouse in Korea — allowing you to legally host international tourists in residential properties like Airbnb.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is an Urban Guesthouse?</li><li>Eligibility Requirements</li><li>Facility and Safety Requirements</li><li>Required Documents</li><li>Application Procedure</li><li>Operating Rules</li><li>FAQ</li></ol></div>
<h2>1. What Is an Urban Guesthouse?</h2>
<p>A foreign tourist urban guesthouse (외국인관광 도시민박업) allows homeowners to host foreign tourists in their primary residence. Regulated under the <strong>Tourism Promotion Act</strong>, it is the legal framework for Airbnb-style short-term rentals to international guests.</p>
<h2>2. Eligibility Requirements</h2>
<ul><li>The host must actually reside in the property (owner-occupancy required)</li><li>Property must be a registered residential building</li><li>Only foreign tourists may be hosted (not domestic guests)</li><li>No more than the number of rooms specified in the registration</li></ul>
<h2>3. Facility and Safety Requirements</h2>
<ul><li>Fire extinguisher and smoke detector in each guest room</li><li>Emergency exit markings</li><li>Basic kitchen and bathroom facilities</li><li>Separate entrance or lockbox for guest access is recommended</li></ul>
<h2>4. Required Documents</h2>
<ul><li>Application form</li><li>Proof of residence (copy of resident registration)</li><li>Building register extract (건축물대장)</li><li>Fire safety inspection report</li><li>Floor plan</li></ul>
<h2>5. Application Procedure</h2>
<ol><li>Submit to the local district office (구청)</li><li>On-site inspection by fire and tourism officials</li><li>Registration certificate issued (approx. 7–14 business days)</li></ol>
<h2>6. Operating Rules</h2>
<ul><li>Foreign guest passports must be recorded within 24 hours of check-in</li><li>Maximum stay per guest: 30 days</li><li>Prohibited: signage that looks like a hotel, hosting domestic Korean guests</li><li>Income is subject to rental income tax</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can I use this registration to list on Airbnb?</p><p class="faq-a">A. Yes. This registration is specifically designed for platforms like Airbnb. Your listing must clearly state "foreign tourists only."</p></div>
<div class="faq-item"><p class="faq-q">Q. What happens if I host Korean guests?</p><p class="faq-a">A. This is a violation. You would need a different accommodation business license (일반숙박업).</p></div>
</div>
<div class="cta-box"><h3>Register Your Urban Guesthouse Legally</h3><p>Vision Administrative Office handles the full registration process including fire safety coordination. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'urban-guesthouse-registration-guide',
    locale: 'zh',
    title: '韩国外国人城市民宿业登记指南2026',
    metaTitle: '韩国城市民宿（Airbnb）合法登记2026 — 完整指南',
    metaDescription: '在韩国合法登记外国人城市民宿业的完整指南，包括申请资格、所需材料、消防安全要求及申请流程。专业行政士免费初次咨询。',
    category: '住宿/旅游',
    excerpt: '韩国外国人城市民宿业登记完整指南，让您合法在住宅物业中接待外国游客（类似Airbnb模式）。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是城市民宿？</li><li>申请资格</li><li>设施与安全要求</li><li>所需材料</li><li>申请流程</li><li>运营规则</li><li>常见问题</li></ol></div>
<h2>1. 什么是城市民宿？</h2>
<p>外国人观光城市民宿业（외국인관광 도시민박업）允许房主在其主要住所接待外国游客，依据<strong>《旅游振兴法》</strong>监管，是类似Airbnb的短租外国游客合法框架。</p>
<h2>2. 申请资格</h2>
<ul><li>房主必须实际居住于该物业（要求业主自住）</li><li>物业须为已登记的住宅建筑</li><li>只能接待外国游客（不得接待国内游客）</li><li>客房数量不得超过登记规定数量</li></ul>
<h2>3. 设施与安全要求</h2>
<ul><li>每间客房配备灭火器和烟雾探测器</li><li>紧急出口标识</li><li>基本厨房和卫浴设施</li><li>建议为客人提供独立入口或密码锁</li></ul>
<h2>4. 所需材料</h2>
<ul><li>申请表</li><li>居住证明（居民登记证复印件）</li><li>建筑物台账摘本</li><li>消防安全检查报告</li><li>平面图</li></ul>
<h2>5. 申请流程</h2>
<ol><li>向当地区政府提交申请</li><li>消防和旅游官员现场检查</li><li>颁发登记证（约7~14个工作日）</li></ol>
<h2>6. 运营规则</h2>
<ul><li>外国游客入住后24小时内须记录护照信息</li><li>每位客人最长住宿30天</li><li>禁止：设置酒店式标牌、接待国内韩国游客</li><li>收入须缴纳租金所得税</li></ul>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 持此登记可以在Airbnb上发布房源吗？</p><p class="faq-a">A. 可以。此登记专为Airbnb等平台设计，房源描述中须注明"仅限外国游客"。</p></div>
<div class="faq-item"><p class="faq-q">Q. 接待韩国国内游客会怎样？</p><p class="faq-a">A. 这属于违规行为，您需要申请不同的住宿经营许可证（一般住宿业）。</p></div>
</div>
<div class="cta-box"><h3>合法登记城市民宿</h3><p>Vision行政士事务所负责全程登记代理，包括消防安全协调。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'urban-guesthouse-registration-guide',
    locale: 'ja',
    title: '韓国外国人都市民泊業登録ガイド2026',
    metaTitle: '韓国都市民泊（Airbnb）合法登録2026 — 完全ガイド',
    metaDescription: '韓国で外国人観光都市民泊業を合法的に登録する方法。申請資格、必要書類、消防安全要件と申請手続きを詳しく解説。行政書士による無料初回相談あり。',
    category: '宿泊/観光',
    excerpt: '韓国の外国人観光都市民泊業登録完全ガイド — 住宅物件でAirbnbのように外国人観光客を合法的に受け入れる方法を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>都市民泊業とは？</li><li>申請資格</li><li>施設・安全要件</li><li>必要書類</li><li>申請手続き</li><li>運営ルール</li><li>よくある質問</li></ol></div>
<h2>1. 都市民泊業とは？</h2>
<p>外国人観光都市民泊業（외국인관광 도시민박업）は、住宅所有者が自己の主要住居で外国人観光客を受け入れることができる制度です。<strong>観光振興法</strong>に基づき規制され、Airbnbスタイルの短期レンタルの合法的枠組みです。</p>
<h2>2. 申請資格</h2>
<ul><li>ホストが実際にその物件に居住していること（所有者居住が必須）</li><li>物件が登録済みの住宅建物であること</li><li>外国人観光客のみ受け入れ可（国内ゲスト不可）</li><li>登録で指定された客室数以内</li></ul>
<h2>3. 施設・安全要件</h2>
<ul><li>各客室に消火器と煙感知器</li><li>非常口の表示</li><li>基本的なキッチンとバスルーム設備</li><li>ゲスト専用入口またはキーボックスを推奨</li></ul>
<h2>4. 必要書類</h2>
<ul><li>申請書</li><li>居住証明（住民登録証のコピー）</li><li>建築物台帳謄本</li><li>消防安全検査報告書</li><li>平面図</li></ul>
<h2>5. 申請手続き</h2>
<ol><li>地方区役所（구청）に提出</li><li>消防・観光担当官による現地検査</li><li>登録証の発行（約7〜14営業日）</li></ol>
<h2>6. 運営ルール</h2>
<ul><li>外国人ゲストのパスポートをチェックイン後24時間以内に記録</li><li>1ゲストあたり最長滞在30日</li><li>禁止事項：ホテルのような看板設置、韓国国内ゲストの受け入れ</li><li>収入は賃貸所得税の対象</li></ul>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. この登録でAirbnbに掲載できますか？</p><p class="faq-a">A. はい。この登録はAirbnbのようなプラットフォーム向けに設計されています。掲載時に「外国人観光客のみ」と明記する必要があります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 韓国国内ゲストを受け入れるとどうなりますか？</p><p class="faq-a">A. 違反となります。別の宿泊業許可証（一般宿泊業）が必要です。</p></div>
</div>
<div class="cta-box"><h3>都市民泊業を合法的に登録しましょう</h3><p>ビジョン行政書士事務所は消防安全の調整を含む登録手続きを全面サポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 10: hostel-registration-guide ─────────────────────────────────────
  {
    slug: 'hostel-registration-guide',
    locale: 'en',
    title: 'Hostel Business Registration in Korea — 2026 Complete Guide',
    metaTitle: 'Korea Hostel Registration 2026 — Tourism Business License Guide',
    metaDescription: 'How to register a hostel business in Korea under the Tourism Promotion Act. Facility requirements, fire safety, required documents, and application process. Free consultation.',
    category: 'Accommodation',
    excerpt: 'A complete guide to legally registering a hostel (게스트하우스) in Korea as a tourism business — covering requirements, fire safety, documents, and registration procedure.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Hostel vs Guesthouse in Korean Law</li><li>Eligibility</li><li>Facility Requirements</li><li>Fire Safety Requirements</li><li>Required Documents</li><li>Application Procedure</li><li>FAQ</li></ol></div>
<h2>1. Hostel vs Guesthouse in Korean Law</h2>
<p>In Korea, a <strong>hostel (호스텔업)</strong> is a registered tourism accommodation business under the Tourism Promotion Act. Unlike the urban guesthouse (도시민박업), a hostel can accept both domestic and foreign guests and is not limited to residential buildings.</p>
<h2>2. Eligibility</h2>
<ul><li>The building must be designated for lodging use (숙박시설) or properly rezoned</li><li>No criminal disqualifications for the representative</li><li>Must comply with local zoning regulations</li></ul>
<h2>3. Facility Requirements</h2>
<ul><li>Minimum room size requirements per person</li><li>Common areas: lounge, bathroom, kitchen</li><li>Reception desk</li><li>Security: lockable individual storage per bed</li></ul>
<h2>4. Fire Safety Requirements</h2>
<ul><li>Sprinkler system or fire extinguishers on each floor</li><li>Smoke detectors in every room</li><li>Emergency lighting and exit signs</li><li>Fire safety inspection and approval from fire department required before registration</li></ul>
<h2>5. Required Documents</h2>
<ul><li>Tourism business registration application</li><li>Building registry extract</li><li>Building use permit or change-of-use permit</li><li>Fire safety inspection certificate</li><li>Floor plan (showing room layout)</li><li>Representative's ID and criminal background check</li></ul>
<h2>6. Application Procedure</h2>
<ol><li>Confirm building use classification (and change if needed)</li><li>Complete facility fit-out to meet standards</li><li>Obtain fire department approval</li><li>Submit to local government tourism department</li><li>On-site inspection and registration certificate issuance (2–4 weeks)</li></ol>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can foreign investors register a hostel?</p><p class="faq-a">A. Yes. The business must be registered in Korea, but foreign ownership is permitted.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do I need a separate license to sell alcohol at my hostel?</p><p class="faq-a">A. Yes, a liquor sales license (주류판매업 신고) is required separately.</p></div>
</div>
<div class="cta-box"><h3>Register Your Hostel Business in Korea</h3><p>Vision Administrative Office coordinates building use, fire safety, and tourism registration. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'hostel-registration-guide',
    locale: 'zh',
    title: '韩国青年旅社业登记指南2026',
    metaTitle: '韩国青年旅社登记2026 — 旅游业营业执照指南',
    metaDescription: '在韩国依据《旅游振兴法》登记青年旅社业的方法。设施要求、消防安全、所需材料及申请流程详解。专业行政士免费初次咨询。',
    category: '住宿/旅游',
    excerpt: '韩国青年旅社（游客之家）合法登记完整指南，涵盖资格要求、消防安全、材料清单及登记程序。',
    content: `<div class="toc"><p>目录</p><ol><li>韩国法律中青年旅社与民宿的区别</li><li>申请资格</li><li>设施要求</li><li>消防安全要求</li><li>所需材料</li><li>申请流程</li><li>常见问题</li></ol></div>
<h2>1. 韩国法律中青年旅社与民宿的区别</h2>
<p>在韩国，<strong>青年旅社（호스텔업）</strong>是依据《旅游振兴法》登记的旅游住宿企业。与城市民宿（도시민박업）不同，青年旅社可同时接待国内外游客，且不限于住宅建筑。</p>
<h2>2. 申请资格</h2>
<ul><li>建筑须被指定为住宿设施用途或已完成合法用途变更</li><li>代表无刑事资格限制</li><li>须符合当地分区规划法规</li></ul>
<h2>3. 设施要求</h2>
<ul><li>每人最低房间面积要求</li><li>公共区域：休息室、卫浴、厨房</li><li>前台接待区</li><li>安全设施：每床位独立可上锁储物空间</li></ul>
<h2>4. 消防安全要求</h2>
<ul><li>每层楼设置喷水系统或灭火器</li><li>每间客房安装烟雾探测器</li><li>应急照明和出口标识</li><li>注册前需通过消防局消防安全检查并取得批准</li></ul>
<h2>5. 所需材料</h2>
<ul><li>旅游业登记申请书</li><li>建筑物登记摘本</li><li>建筑使用许可或用途变更许可</li><li>消防安全检查证明</li><li>平面图（显示客房布局）</li><li>代表身份证及犯罪背景调查报告</li></ul>
<h2>6. 申请流程</h2>
<ol><li>确认建筑用途分类（如需则变更）</li><li>按标准完成设施装修</li><li>获得消防局批准</li><li>向当地政府旅游部门提交申请</li><li>现场检查及颁发登记证（2~4周）</li></ol>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 外国投资者可以登记青年旅社吗？</p><p class="faq-a">A. 可以。企业必须在韩国注册，但允许外资持股。</p></div>
<div class="faq-item"><p class="faq-q">Q. 在青年旅社销售酒精需要单独许可吗？</p><p class="faq-a">A. 需要，须单独申请酒类销售业申报。</p></div>
</div>
<div class="cta-box"><h3>在韩国登记青年旅社业</h3><p>Vision行政士事务所协调建筑用途变更、消防安全及旅游登记全流程。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'hostel-registration-guide',
    locale: 'ja',
    title: '韓国ホステル業登録ガイド2026',
    metaTitle: '韓国ホステル登録2026 — 観光業許可証完全ガイド',
    metaDescription: '韓国で観光振興法に基づくホステル業の登録方法。施設要件、消防安全、必要書類と申請手続きを詳しく解説。行政書士による無料初回相談あり。',
    category: '宿泊/観光',
    excerpt: '韓国でゲストハウス（ホステル）を合法的に登録する完全ガイド — 要件、消防安全、必要書類と登録手続きを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>韓国法における都市民泊とホステルの違い</li><li>申請資格</li><li>施設要件</li><li>消防安全要件</li><li>必要書類</li><li>申請手続き</li><li>よくある質問</li></ol></div>
<h2>1. 韓国法における都市民泊とホステルの違い</h2>
<p>韓国では、<strong>ホステル（호스텔업）</strong>は観光振興法に基づく登録観光宿泊事業です。都市民泊業（도시민박업）と異なり、国内外のゲストを受け入れることができ、住宅建物に限定されません。</p>
<h2>2. 申請資格</h2>
<ul><li>建物が宿泊施設用途として指定されているか、適切に用途変更されていること</li><li>代表者に刑事上の欠格事由がないこと</li><li>地方の用途地域規制を遵守していること</li></ul>
<h2>3. 施設要件</h2>
<ul><li>1人あたりの最低部屋面積</li><li>共用エリア：ラウンジ、バスルーム、キッチン</li><li>フロントデスク</li><li>セキュリティ：ベッドごとに施錠可能な個人用収納スペース</li></ul>
<h2>4. 消防安全要件</h2>
<ul><li>各階にスプリンクラーシステムまたは消火器</li><li>全客室に煙感知器</li><li>非常灯と避難口の表示</li><li>登録前に消防署の消防安全検査・承認が必要</li></ul>
<h2>5. 必要書類</h2>
<ul><li>観光業登録申請書</li><li>建築物台帳謄本</li><li>建築使用許可または用途変更許可証</li><li>消防安全検査証明書</li><li>平面図（客室レイアウト含む）</li><li>代表者の身分証明書と犯罪経歴照会書</li></ul>
<h2>6. 申請手続き</h2>
<ol><li>建物用途分類の確認（必要に応じて変更）</li><li>基準に合わせた施設整備</li><li>消防署の承認取得</li><li>地方政府観光部門に提出</li><li>現地検査と登録証の発行（2〜4週間）</li></ol>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 外国人投資家でもホステルを登録できますか？</p><p class="faq-a">A. はい。事業は韓国に登録する必要がありますが、外国人の出資は認められています。</p></div>
<div class="faq-item"><p class="faq-q">Q. ホステルでお酒を販売するには別途許可が必要ですか？</p><p class="faq-a">A. はい。酒類販売業の届出を別途行う必要があります。</p></div>
</div>
<div class="cta-box"><h3>韓国でホステル業を登録しましょう</h3><p>ビジョン行政書士事務所が建物用途変更、消防安全、観光業登録を一貫してサポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 11: hanok-experience-registration-guide ────────────────────────────
  {
    slug: 'hanok-experience-registration-guide',
    locale: 'en',
    title: 'Hanok Experience Business Registration in Korea — 2026 Guide',
    metaTitle: 'Korea Hanok Experience Business Registration 2026 — Full Guide',
    metaDescription: 'How to register a traditional Hanok experience stay business in Korea. Eligibility, required documents, and application process explained. Free consultation.',
    category: 'Accommodation',
    excerpt: 'A complete guide to registering a Hanok (traditional Korean house) experience stay business in Korea — covering requirements, documents, and registration procedure.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is Hanok Experience Business?</li><li>Eligibility Requirements</li><li>Facility Requirements</li><li>Required Documents</li><li>Application Procedure</li><li>Operating Rules</li><li>FAQ</li></ol></div>
<h2>1. What Is Hanok Experience Business?</h2>
<p>The <strong>Hanok Experience Business (한옥체험업)</strong> allows owners of traditional Korean houses to provide overnight accommodation and cultural experience programs to visitors. It is regulated under the <strong>Tourism Promotion Act</strong> and specifically designed to preserve and promote traditional Korean architecture.</p>
<h2>2. Eligibility Requirements</h2>
<ul><li>The building must be a registered Hanok (전통 한옥) — traditional wooden Korean structure</li><li>Must be located in an area designated for Hanok preservation or tourism promotion</li><li>No disqualifying criminal record for the representative</li></ul>
<h2>3. Facility Requirements</h2>
<ul><li>Traditional Hanok architectural elements must be preserved</li><li>Guest rooms with ondol (Korean floor heating) are strongly preferred</li><li>Basic sanitation facilities meeting modern standards</li><li>Cultural experience space or program capability</li></ul>
<h2>4. Required Documents</h2>
<ul><li>Tourism business registration application</li><li>Building registry proving Hanok designation</li><li>Floor plan</li><li>Proof of ownership or lease</li><li>Cultural program outline (optional but beneficial)</li></ul>
<h2>5. Application Procedure</h2>
<ol><li>Verify Hanok building designation with local government</li><li>Prepare facility to meet standards</li><li>Submit application to local tourism department</li><li>On-site inspection and registration (2–4 weeks)</li></ol>
<h2>6. Operating Rules</h2>
<ul><li>Cannot host foreign tourists without separate urban guesthouse or hostel registration</li><li>Cultural programs are encouraged but not mandatory</li><li>Income is subject to accommodation income tax</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a newly built Hanok-style house qualify?</p><p class="faq-a">A. It must meet the official definition of traditional Hanok. A newly built house must be certified as a Hanok by the local government.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can foreign nationals own and operate a Hanok experience business?</p><p class="faq-a">A. Yes, subject to Korean property ownership and business registration rules.</p></div>
</div>
<div class="cta-box"><h3>Register Your Hanok Experience Business</h3><p>Vision Administrative Office guides Hanok owners through the registration process. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'hanok-experience-registration-guide',
    locale: 'zh',
    title: '韩国韩屋体验业登记指南2026',
    metaTitle: '韩国韩屋体验业登记2026 — 传统住宿业申请完整指南',
    metaDescription: '在韩国登记韩屋体验住宿业的方法，包括申请资格、设施要求、所需材料及申请流程。专业行政士免费初次咨询。',
    category: '住宿/旅游',
    excerpt: '韩国韩屋（传统韩式建筑）体验住宿业登记完整指南，涵盖资格要求、材料清单及登记程序。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是韩屋体验业？</li><li>申请资格</li><li>设施要求</li><li>所需材料</li><li>申请流程</li><li>运营规则</li><li>常见问题</li></ol></div>
<h2>1. 什么是韩屋体验业？</h2>
<p><strong>韩屋体验业（한옥체험업）</strong>允许传统韩式建筑的所有者向访客提供住宿及文化体验项目，依据<strong>《旅游振兴法》</strong>监管，专为保护和推广传统韩国建筑而设立。</p>
<h2>2. 申请资格</h2>
<ul><li>建筑须为已登记的韩屋（传统木结构韩式建筑）</li><li>须位于韩屋保护区或旅游推广指定区域</li><li>代表无刑事资格限制</li></ul>
<h2>3. 设施要求</h2>
<ul><li>保留传统韩屋建筑元素</li><li>客房配备温突（韩式地暖）为佳</li><li>符合现代标准的基本卫生设施</li><li>文化体验空间或项目开展能力</li></ul>
<h2>4. 所需材料</h2>
<ul><li>旅游业登记申请书</li><li>证明韩屋指定身份的建筑物台账</li><li>平面图</li><li>所有权或租赁证明</li><li>文化项目概述（可选，有益于申请）</li></ul>
<h2>5. 申请流程</h2>
<ol><li>与当地政府确认韩屋建筑指定状态</li><li>按标准准备设施</li><li>向当地旅游部门提交申请</li><li>现场检查及登记（2~4周）</li></ol>
<h2>6. 运营规则</h2>
<ul><li>接待外国游客须另行申请城市民宿或青年旅社登记</li><li>文化项目不强制要求但鼓励开展</li><li>收入须缴纳住宿所得税</li></ul>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 新建的韩屋风格建筑可以申请吗？</p><p class="faq-a">A. 须符合传统韩屋的官方定义。新建建筑须经当地政府认定为韩屋。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外国人可以拥有并经营韩屋体验业吗？</p><p class="faq-a">A. 可以，需遵守韩国房产所有权及营业登记相关规定。</p></div>
</div>
<div class="cta-box"><h3>登记您的韩屋体验业</h3><p>Vision行政士事务所为韩屋业主提供全程登记指导。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'hanok-experience-registration-guide',
    locale: 'ja',
    title: '韓国韓屋体験業登録ガイド2026',
    metaTitle: '韓国韓屋体験業登録2026 — 伝統宿泊業申請完全ガイド',
    metaDescription: '韓国で韓屋（伝統韓国家屋）体験宿泊業を登録する方法。申請資格、施設要件、必要書類と申請手続きを詳しく解説。行政書士による無料初回相談あり。',
    category: '宿泊/観光',
    excerpt: '韓国の韓屋（伝統韓国家屋）体験宿泊業登録完全ガイド — 要件、必要書類と登録手続きを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>韓屋体験業とは？</li><li>申請資格</li><li>施設要件</li><li>必要書類</li><li>申請手続き</li><li>運営ルール</li><li>よくある質問</li></ol></div>
<h2>1. 韓屋体験業とは？</h2>
<p><strong>韓屋体験業（한옥체험업）</strong>は、伝統韓国家屋の所有者が訪問者に宿泊と文化体験プログラムを提供できる制度です。<strong>観光振興法</strong>に基づき規制され、伝統韓国建築の保存と振興を目的とした制度です。</p>
<h2>2. 申請資格</h2>
<ul><li>建物が登録済みの韓屋（伝統木造韓国建築）であること</li><li>韓屋保存区域または観光振興指定区域に位置すること</li><li>代表者に欠格事由がないこと</li></ul>
<h2>3. 施設要件</h2>
<ul><li>伝統韓屋の建築的要素を保存すること</li><li>オンドル（韓国式床暖房）付き客室が強く推奨</li><li>現代基準を満たす基本的な衛生設備</li><li>文化体験スペースまたはプログラム提供能力</li></ul>
<h2>4. 必要書類</h2>
<ul><li>観光業登録申請書</li><li>韓屋指定を証明する建築物台帳</li><li>平面図</li><li>所有権または賃貸借証明</li><li>文化プログラム概要（任意だが申請に有利）</li></ul>
<h2>5. 申請手続き</h2>
<ol><li>地方政府で韓屋建物指定を確認</li><li>基準に合わせて施設を整備</li><li>地方観光部門に申請書を提出</li><li>現地検査と登録（2〜4週間）</li></ol>
<h2>6. 運営ルール</h2>
<ul><li>外国人観光客受け入れには別途都市民泊業またはホステル業登録が必要</li><li>文化プログラムは任意だが推奨</li><li>収入は宿泊所得税の対象</li></ul>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 新築の韓屋風建物でも申請できますか？</p><p class="faq-a">A. 伝統韓屋の公式定義を満たす必要があります。新築建物は地方政府に韓屋として認定してもらう必要があります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外国人が韓屋体験業を所有・経営できますか？</p><p class="faq-a">A. はい。韓国の不動産所有ルールと事業登録規則に従う必要があります。</p></div>
</div>
<div class="cta-box"><h3>韓屋体験業の登録をサポートします</h3><p>ビジョン行政書士事務所が韓屋所有者の登録手続きをガイドします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 12: tobacco-import-sales-guide ────────────────────────────────────
  {
    slug: 'tobacco-import-sales-guide',
    locale: 'en',
    title: 'Tobacco Import and Sales License in Korea — 2026 Complete Guide',
    metaTitle: 'Korea Tobacco Import License 2026 — Requirements & Application',
    metaDescription: 'How to obtain a tobacco import and sales license in Korea. Capital requirements, facility standards, Ministry of Finance application process. Free consultation.',
    category: 'Logistics/Distribution',
    excerpt: 'A complete guide to obtaining a tobacco import and sales business license in Korea — capital requirements, facility standards, and the Ministry of Finance application process.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Overview of Tobacco Import Licensing</li><li>Eligibility Requirements</li><li>Capital and Facility Requirements</li><li>Required Documents</li><li>Application Procedure</li><li>Post-License Obligations</li><li>FAQ</li></ol></div>
<h2>1. Overview of Tobacco Import Licensing</h2>
<p>Importing and selling foreign tobacco products in Korea requires a <strong>tobacco import and sales business license (담배수입판매업 허가)</strong> from the <strong>Ministry of Economy and Finance</strong> under the Tobacco Business Act. This is a highly regulated business with strict capital and facility requirements.</p>
<h2>2. Eligibility Requirements</h2>
<ul><li>Must be a corporation (individual proprietors not eligible)</li><li>No disqualifying criminal convictions for directors</li><li>Must have a designated import warehouse</li></ul>
<h2>3. Capital and Facility Requirements</h2>
<ul><li><strong>Paid-in capital:</strong> KRW 500 million or more</li><li>Bonded warehouse or storage facility for imported goods</li><li>Tobacco testing and quality control capability</li></ul>
<h2>4. Required Documents</h2>
<ul><li>License application form</li><li>Corporate registry extract</li><li>Business plan including marketing and distribution strategy</li><li>Proof of capital (bank certificate)</li><li>Warehouse lease or ownership documents</li><li>Sample product information and country of origin documentation</li></ul>
<h2>5. Application Procedure</h2>
<ol><li>Pre-consultation with Ministry of Economy and Finance tobacco division</li><li>Prepare business plan and financial documentation</li><li>Submit formal application</li><li>Review and site inspection</li><li>License issuance (approx. 30–60 business days)</li></ol>
<h2>6. Post-License Obligations</h2>
<ul><li>Submit quarterly sales and inventory reports</li><li>Comply with tobacco warning label requirements</li><li>Pay tobacco excise tax on imports</li><li>Adhere to advertising restrictions</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a foreign company import tobacco to Korea?</p><p class="faq-a">A. Yes, through a Korean subsidiary or joint venture that meets all licensing requirements.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is e-cigarette liquid covered by this license?</p><p class="faq-a">A. No. Liquid nicotine (e-cigarette) products require a separate license. See our e-cigarette import guide.</p></div>
</div>
<div class="cta-box"><h3>Apply for Your Tobacco Import License</h3><p>Vision Administrative Office specializes in regulated business licensing. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'tobacco-import-sales-guide',
    locale: 'zh',
    title: '韩国烟草进口销售业许可指南2026',
    metaTitle: '韩国烟草进口许可2026 — 申请条件与流程',
    metaDescription: '在韩国申请烟草进口销售业许可的完整指南，包括资本金要求、设施标准及财政部申请流程。专业行政士免费初次咨询。',
    category: '物流/流通',
    excerpt: '韩国烟草进口销售业许可申请完整指南，涵盖资本金要求、设施标准及财政部申请流程。',
    content: `<div class="toc"><p>目录</p><ol><li>烟草进口许可概述</li><li>申请资格</li><li>资本金与设施要求</li><li>所需材料</li><li>申请流程</li><li>许可后义务</li><li>常见问题</li></ol></div>
<h2>1. 烟草进口许可概述</h2>
<p>在韩国进口和销售外国烟草产品，须依据《烟草事业法》向<strong>企划财政部</strong>申请<strong>烟草进口销售业许可</strong>。这是一项受到严格监管的业务，对资本金和设施有严格要求。</p>
<h2>2. 申请资格</h2>
<ul><li>须为法人（个人经营者不适用）</li><li>董事无刑事资格限制</li><li>须拥有指定进口仓库</li></ul>
<h2>3. 资本金与设施要求</h2>
<ul><li><strong>注册资本金：</strong>5亿韩元以上</li><li>保税仓库或进口商品储存设施</li><li>烟草检测及质量控制能力</li></ul>
<h2>4. 所需材料</h2>
<ul><li>许可申请表</li><li>法人登记摘本</li><li>包含营销和分销策略的商业计划书</li><li>资本金证明（银行证明）</li><li>仓库租赁或所有权文件</li><li>样品信息及原产地文件</li></ul>
<h2>5. 申请流程</h2>
<ol><li>与企划财政部烟草管理部门预先协商</li><li>准备商业计划及财务文件</li><li>提交正式申请</li><li>审查及现场检查</li><li>颁发许可证（约30~60个工作日）</li></ol>
<h2>6. 许可后义务</h2>
<ul><li>每季度提交销售及库存报告</li><li>遵守烟草警示标签要求</li><li>缴纳进口烟草消费税</li><li>遵守广告限制规定</li></ul>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 外国企业可以向韩国进口烟草吗？</p><p class="faq-a">A. 可以，通过满足所有许可要求的韩国子公司或合资企业进行。</p></div>
<div class="faq-item"><p class="faq-q">Q. 电子烟液体是否包含在此许可范围内？</p><p class="faq-a">A. 不包含。电子烟液体产品需要单独的许可证，请参阅我们的电子烟进口指南。</p></div>
</div>
<div class="cta-box"><h3>申请烟草进口许可证</h3><p>Vision行政士事务所专注于受监管业务许可申请。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'tobacco-import-sales-guide',
    locale: 'ja',
    title: '韓国たばこ輸入販売業許可ガイド2026',
    metaTitle: '韓国たばこ輸入許可2026 — 要件と申請手続き',
    metaDescription: '韓国でたばこ輸入販売業許可を取得する方法。資本金要件、施設基準、企画財政部申請手続きを詳しく解説。行政書士による無料初回相談あり。',
    category: '物流/流通',
    excerpt: '韓国のたばこ輸入販売業許可取得完全ガイド — 資本金要件、施設基準、企画財政部申請手続きを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>たばこ輸入許可の概要</li><li>申請資格</li><li>資本金・施設要件</li><li>必要書類</li><li>申請手続き</li><li>許可後の義務</li><li>よくある質問</li></ol></div>
<h2>1. たばこ輸入許可の概要</h2>
<p>韓国で外国製たばこを輸入・販売するには、たばこ事業法に基づき<strong>企画財政部</strong>から<strong>たばこ輸入販売業許可</strong>を取得する必要があります。資本金と施設に厳格な要件がある高度に規制された事業です。</p>
<h2>2. 申請資格</h2>
<ul><li>法人であること（個人事業主は不可）</li><li>役員に欠格事由がないこと</li><li>指定輸入倉庫を保有すること</li></ul>
<h2>3. 資本金・施設要件</h2>
<ul><li><strong>払込資本金：</strong>5億ウォン以上</li><li>保税倉庫または輸入品保管施設</li><li>たばこの検査・品質管理能力</li></ul>
<h2>4. 必要書類</html>
<ul><li>許可申請書</li><li>法人登記簿謄本</li><li>マーケティング・流通戦略を含む事業計画書</li><li>資本金証明（銀行証明書）</li><li>倉庫の賃貸借または所有権証明書</li><li>サンプル製品情報および原産地証明書</li></ul>
<h2>5. 申請手続き</h2>
<ol><li>企画財政部たばこ担当部門との事前協議</li><li>事業計画・財務書類の準備</li><li>正式申請書の提出</li><li>審査および現地検査</li><li>許可証の発行（約30〜60営業日）</li></ol>
<h2>6. 許可後の義務</h2>
<ul><li>四半期ごとの販売・在庫報告書の提出</li><li>たばこ警告表示要件の遵守</li><li>輸入たばこへの個別消費税の納付</li><li>広告規制の遵守</li></ul>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 外国企業が韓国へたばこを輸入できますか？</p><p class="faq-a">A. はい。すべての許可要件を満たす韓国子会社または合弁会社を通じて可能です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 電子タバコ液体はこの許可の対象ですか？</p><p class="faq-a">A. いいえ。電子タバコ（液体ニコチン）製品は別途許可が必要です。電子タバコ輸入ガイドをご参照ください。</p></div>
</div>
<div class="cta-box"><h3>たばこ輸入許可の取得をサポートします</h3><p>ビジョン行政書士事務所は規制業種の許可取得を専門としています。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 13: nonprofit-corporation-establishment-guide ──────────────────────
  {
    slug: 'nonprofit-corporation-establishment-guide',
    locale: 'en',
    title: 'Nonprofit Corporation Establishment in Korea — 2026 Complete Guide',
    metaTitle: 'Korea Nonprofit Corporation Setup 2026 — Supervisory Ministry Approval Guide',
    metaDescription: 'How to establish a nonprofit corporation (비영리사단법인) in Korea. Supervisory ministry approval, founding assembly, court registration — all steps explained. Free consultation.',
    category: 'Business Certification',
    excerpt: 'A step-by-step guide to establishing a nonprofit corporation in Korea — from supervisory ministry approval through founding assembly to court registration.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is a Nonprofit Corporation?</li><li>Types of Nonprofit Corporations</li><li>Eligibility and Requirements</li><li>Required Documents</li><li>Application Procedure</li><li>Timeline</li><li>FAQ</li></ol></div>
<h2>1. What Is a Nonprofit Corporation?</h2>
<p>A nonprofit corporation (비영리사단법인 or 비영리재단법인) in Korea is established under the Civil Code and requires approval from the relevant supervisory ministry (주무관청) before court registration. It cannot distribute profits to members.</p>
<h2>2. Types of Nonprofit Corporations</h2>
<ul><li><strong>Association (사단법인):</strong> Membership-based organization with founding members</li><li><strong>Foundation (재단법인):</strong> Asset-based organization, endowed by a founder</li></ul>
<h2>3. Eligibility and Requirements</h2>
<ul><li>Minimum founding members (typically 10+) for associations</li><li>Clear non-profit purpose aligned with the supervisory ministry's mandate</li><li>Adequate operating funds demonstrated</li><li>Bylaws (정관) that comply with Civil Code requirements</li></ul>
<h2>4. Required Documents</h2>
<ul><li>Ministry approval application with business plan</li><li>Draft bylaws</li><li>Minutes of founding assembly</li><li>List of founding members with IDs</li><li>Financial plan</li><li>Office lease agreement</li></ul>
<h2>5. Application Procedure</h2>
<ol><li>Draft bylaws and select supervisory ministry</li><li>Hold founding assembly (recorded minutes required)</li><li>Submit to supervisory ministry for approval (2–4 months)</li><li>After approval, register with the district court (2–4 weeks)</li></ol>
<h2>6. Timeline</h2>
<p>Total process typically takes <strong>3–6 months</strong>: 2–4 months for ministry approval, then 2–4 weeks for court registration.</p>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Which ministry do I apply to?</p><p class="faq-a">A. It depends on your nonprofit's purpose — education (Ministry of Education), welfare (MOHW), culture (MCST), etc.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can foreign nationals found a nonprofit in Korea?</p><p class="faq-a">A. Yes, subject to residency and other requirements.</p></div>
</div>
<div class="cta-box"><h3>Establish Your Nonprofit Corporation in Korea</h3><p>Vision Administrative Office prepares bylaws, handles ministry applications, and coordinates court registration. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'nonprofit-corporation-establishment-guide',
    locale: 'zh',
    title: '韩国非营利社团法人设立指南2026',
    metaTitle: '韩国非营利法人设立2026 — 主管机关许可申请完整指南',
    metaDescription: '在韩国设立非营利社团法人的完整指南，包括主管机关许可、创立大会、法院登记等全部步骤。专业行政士免费初次咨询。',
    category: '企业认证',
    excerpt: '韩国非营利社团法人设立分步指南 — 从主管机关许可到创立大会再到法院登记的全部流程。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是非营利法人？</li><li>非营利法人类型</li><li>资格与要求</li><li>所需材料</li><li>申请流程</li><li>所需时间</li><li>常见问题</li></ol></div>
<h2>1. 什么是非营利法人？</h2>
<p>韩国非营利法人（非营利社团法人或非营利财团法人）依据《民法》设立，须在法院登记前取得主管机关（주무관청）许可，不得向成员分配利润。</p>
<h2>2. 非营利法人类型</h2>
<ul><li><strong>社团法人：</strong>以成员为基础的组织，需要创始成员</li><li><strong>财团法人：</strong>以资产为基础的组织，由创始人捐赠设立</li></ul>
<h2>3. 资格与要求</h2>
<ul><li>社团法人通常需要最低10名创始成员</li><li>非营利目的须与主管机关职责范围一致</li><li>须证明具备充足运营资金</li><li>章程须符合《民法》要求</li></ul>
<h2>4. 所需材料</h2>
<ul><li>附带商业计划的主管机关许可申请书</li><li>章程草案</li><li>创立大会会议记录</li><li>附身份证明的创始成员名单</li><li>财务计划</li><li>办公室租赁合同</li></ul>
<h2>5. 申请流程</h2>
<ol><li>起草章程并选定主管机关</li><li>召开创立大会（须有会议记录）</li><li>向主管机关提交许可申请（2~4个月）</li><li>获批后在地方法院办理登记（2~4周）</li></ol>
<h2>6. 所需时间</h2>
<p>全程通常需要<strong>3~6个月</strong>：主管机关许可2~4个月，法院登记2~4周。</p>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 应向哪个主管机关申请？</p><p class="faq-a">A. 取决于非营利目的 — 教育（教育部）、福利（保健福祉部）、文化（文化体育观光部）等。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外国人可以在韩国设立非营利法人吗？</p><p class="faq-a">A. 可以，需满足居住及其他相关要求。</p></div>
</div>
<div class="cta-box"><h3>在韩国设立非营利法人</h3><p>Vision行政士事务所负责章程起草、主管机关申请及法院登记协调。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'nonprofit-corporation-establishment-guide',
    locale: 'ja',
    title: '韓国非営利社団法人設立ガイド2026',
    metaTitle: '韓国非営利法人設立2026 — 主務官庁許可申請完全ガイド',
    metaDescription: '韓国で非営利社団法人を設立する方法。主務官庁許可、創立総会、裁判所登記まで全手順を詳しく解説。行政書士による無料初回相談あり。',
    category: '企業認証',
    excerpt: '韓国の非営利社団法人設立ステップガイド — 主務官庁許可から創立総会、裁判所登記までの全工程を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>非営利法人とは？</li><li>非営利法人の種類</li><li>資格と要件</li><li>必要書類</li><li>申請手続き</li><li>所要期間</li><li>よくある質問</li></ol></div>
<h2>1. 非営利法人とは？</h2>
<p>韓国の非営利法人（非営利社団法人または非営利財団法人）は民法に基づいて設立され、裁判所登記前に所管省庁（主務官庁）の許可が必要です。利益を構成員に分配することはできません。</p>
<h2>2. 非営利法人の種類</h2>
<ul><li><strong>社団法人：</strong>設立者メンバーを基盤とする会員制組織</li><li><strong>財団法人：</strong>設立者が資産を拠出する資産基盤の組織</li></ul>
<h2>3. 資格と要件</h2>
<ul><li>社団法人は通常10名以上の設立者が必要</li><li>非営利目的が主務官庁の管轄と一致していること</li><li>十分な運営資金を証明すること</li><li>民法の要件に準拠した定款（정관）</li></ul>
<h2>4. 必要書類</h2>
<ul><li>事業計画を含む主務官庁許可申請書</li><li>定款草案</li><li>創立総会議事録</li><li>身分証明付きの設立者名簿</li><li>財務計画</li><li>事務所賃貸借契約書</li></ul>
<h2>5. 申請手続き</h2>
<ol><li>定款の草案作成と主務官庁の選定</li><li>創立総会の開催（議事録の作成が必要）</li><li>主務官庁への許可申請（2〜4ヶ月）</li><li>許可後、地方裁判所での登記（2〜4週間）</li></ol>
<h2>6. 所要期間</h2>
<p>全体で通常<strong>3〜6ヶ月</strong>：主務官庁許可に2〜4ヶ月、裁判所登記に2〜4週間です。</p>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. どの主務官庁に申請しますか？</p><p class="faq-a">A. 非営利目的によります — 教育（教育部）、福祉（保健福祉部）、文化（文化体育観光部）など。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外国人が韓国で非営利法人を設立できますか？</p><p class="faq-a">A. はい。居住要件などを満たす必要があります。</p></div>
</div>
<div class="cta-box"><h3>韓国で非営利法人を設立しましょう</h3><p>ビジョン行政書士事務所が定款作成、主務官庁申請、裁判所登記を一貫してサポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 14: corporate-research-lab-establishment-guide ────────────────────
  {
    slug: 'corporate-research-lab-establishment-guide',
    locale: 'en',
    title: 'Corporate Research Laboratory Establishment in Korea — 2026 Guide',
    metaTitle: 'Korea Corporate R&D Center Registration 2026 — Tax Benefits & Procedure',
    metaDescription: 'How to establish a recognized corporate research laboratory in Korea. R&D tax credits, eligibility, required documents, and IITP recognition process. Free consultation.',
    category: 'Business Certification',
    excerpt: 'How Korean and foreign companies can establish a recognized corporate research laboratory (기업부설연구소) to access R&D tax credits and government support.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Why Establish a Corporate R&D Lab?</li><li>Eligibility</li><li>Research Personnel Requirements</li><li>Facility Requirements</li><li>Required Documents</li><li>Application Procedure</li><li>Tax Benefits</li><li>FAQ</li></ol></div>
<h2>1. Why Establish a Corporate R&D Lab?</h2>
<p>A recognized <strong>corporate research laboratory (기업부설연구소)</strong> or R&D department (연구개발전담부서) recognized by the Institute for Information & Communications Technology Promotion (IITP) qualifies for substantial R&D tax credits under the Tax Incentive Limitation Act.</p>
<h2>2. Eligibility</h2>
<ul><li>Small companies: at least 2 full-time researchers</li><li>Medium companies: at least 5 full-time researchers</li><li>Large companies: at least 10 full-time researchers</li><li>Researchers must hold relevant degrees or experience</li></ul>
<h2>3. Research Personnel Requirements</h2>
<p>Researchers must have a degree in a relevant field (science, engineering, IT, etc.) or equivalent experience. At least one researcher must be a full-time employee dedicated to R&D.</p>
<h2>4. Facility Requirements</h2>
<ul><li>Dedicated physical space for research activities</li><li>Separate from general office operations</li><li>Research equipment appropriate to the field</li></ul>
<h2>5. Required Documents</h2>
<ul><li>IITP recognition application</li><li>Research plan</li><li>Researcher credentials (diplomas, employment records)</li><li>Floor plan of research facility</li><li>Equipment list</li></ul>
<h2>6. Application Procedure</h2>
<ol><li>Online application through IITP portal (www.rnd.or.kr)</li><li>Document review</li><li>On-site inspection (for some cases)</li><li>Recognition certificate issued (2–4 weeks)</li></ol>
<h2>7. Tax Benefits</h2>
<ul><li><strong>SMEs:</strong> 25% tax credit on R&D expenditures</li><li><strong>Mid-size companies:</strong> 8% tax credit</li><li><strong>Large companies:</strong> 0–2% basic, higher for incremental R&D</li><li>Accelerated depreciation on research equipment</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a startup with 2 employees establish an R&D lab?</p><p class="faq-a">A. Yes, if both employees qualify as researchers. This is common for tech startups.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do foreign-invested companies qualify?</p><p class="faq-a">A. Yes, if they are registered Korean SMEs or corporations.</p></div>
</div>
<div class="cta-box"><h3>Establish Your Corporate R&D Lab</h3><p>Vision Administrative Office prepares all documents for IITP recognition. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'corporate-research-lab-establishment-guide',
    locale: 'zh',
    title: '韩国企业附属研究所设立认定指南2026',
    metaTitle: '韩国企业附属研究所设立2026 — 税收优惠与认定流程',
    metaDescription: '在韩国设立获认定企业附属研究所的方法，包括研究人员要求、设施标准、IITP认定流程及税收优惠。专业行政士免费初次咨询。',
    category: '企业认证',
    excerpt: '韩国及外资企业如何设立获认定的企业附属研究所，以享受研究开发税收抵免及政府支持。',
    content: `<div class="toc"><p>目录</p><ol><li>为什么设立企业附属研究所？</li><li>申请资格</li><li>研究人员要求</li><li>设施要求</li><li>所需材料</li><li>申请流程</li><li>税收优惠</li><li>常见问题</li></ol></div>
<h2>1. 为什么设立企业附属研究所？</h2>
<p>经情报通信技术促进院（IITP）认定的<strong>企业附属研究所（기업부설연구소）</strong>或研发专属部门，可依据《租税特例限制法》享受大额研发税收抵免。</p>
<h2>2. 申请资格</h2>
<ul><li>小型企业：至少2名全职研究人员</li><li>中型企业：至少5名全职研究人员</li><li>大型企业：至少10名全职研究人员</li><li>研究人员须持有相关学位或具备相应经验</li></ul>
<h2>3. 研究人员要求</h2>
<p>研究人员须持有相关领域（理科、工程、IT等）学位或具备同等经验。至少一名研究人员须为专职研发员工。</p>
<h2>4. 设施要求</h2>
<ul><li>用于研究活动的专用物理空间</li><li>与普通办公区域分开</li><li>符合研究领域需求的研究设备</li></ul>
<h2>5. 所需材料</h2>
<ul><li>IITP认定申请书</li><li>研究计划</li><li>研究人员资质证明（学位证、就业记录）</li><li>研究设施平面图</li><li>设备清单</li></ul>
<h2>6. 申请流程</h2>
<ol><li>通过IITP门户（www.rnd.or.kr）在线申请</li><li>文件审查</li><li>现场检查（部分情况）</li><li>颁发认定证书（2~4周）</li></ol>
<h2>7. 税收优惠</h2>
<ul><li><strong>小型企业：</strong>研发支出25%税收抵免</li><li><strong>中型企业：</strong>8%税收抵免</li><li><strong>大型企业：</strong>基础0~2%，增量研发可享更高优惠</li><li>研究设备加速折旧</li></ul>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 只有2名员工的初创公司可以设立研发实验室吗？</p><p class="faq-a">A. 可以，如果两名员工均符合研究人员资格。这在科技初创公司中很常见。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外资企业是否符合资格？</p><p class="faq-a">A. 符合，只要是在韩国注册的中小企业或法人即可。</p></div>
</div>
<div class="cta-box"><h3>设立企业附属研究所</h3><p>Vision行政士事务所为IITP认定准备全部材料。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'corporate-research-lab-establishment-guide',
    locale: 'ja',
    title: '韓国企業付設研究所設立認定ガイド2026',
    metaTitle: '韓国企業付設研究所設立2026 — 税制優遇と認定手続き',
    metaDescription: '韓国で認定を受けた企業付設研究所を設立する方法。研究者要件、施設基準、IITP認定手続きと税額控除を詳しく解説。行政書士による無料初回相談あり。',
    category: '企業認証',
    excerpt: '韓国・外資系企業が認定企業付設研究所を設立し、研究開発税額控除と政府支援を受ける方法を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>なぜ企業付設研究所を設立するのか？</li><li>申請資格</li><li>研究者要件</li><li>施設要件</li><li>必要書類</li><li>申請手続き</li><li>税制優遇</li><li>よくある質問</li></ol></div>
<h2>1. なぜ企業付設研究所を設立するのか？</h2>
<p>情報通信技術振興院（IITP）に認定された<strong>企業付設研究所（기업부설연구소）</strong>または研究開発専担部署は、租税特例制限法に基づいて大幅な研究開発税額控除を受けることができます。</p>
<h2>2. 申請資格</h2>
<ul><li>小企業：専任研究者2名以上</li><li>中堅企業：専任研究者5名以上</li><li>大企業：専任研究者10名以上</li><li>研究者は関連分野の学位または同等の経験が必要</li></ul>
<h2>3. 研究者要件</h2>
<p>研究者は関連分野（理工学、IT等）の学位または同等の経験を持つ必要があります。少なくとも1名は研究開発専従の正規社員であること。</p>
<h2>4. 施設要件</h2>
<ul><li>研究活動のための専用物理スペース</li><li>一般事務スペースとの分離</li><li>研究分野に適した研究設備</li></ul>
<h2>5. 必要書類</h2>
<ul><li>IITP認定申請書</li><li>研究計画書</li><li>研究者の資格証明（学位証、雇用記録）</li><li>研究施設の平面図</li><li>設備リスト</li></ul>
<h2>6. 申請手続き</h2>
<ol><li>IITPポータル（www.rnd.or.kr）からオンライン申請</li><li>書類審査</li><li>現地検査（場合による）</li><li>認定証明書の発行（2〜4週間）</li></ol>
<h2>7. 税制優遇</h2>
<ul><li><strong>中小企業：</strong>研究開発費の25%税額控除</li><li><strong>中堅企業：</strong>8%税額控除</li><li><strong>大企業：</strong>基本0〜2%、増加分は更に高い控除率</li><li>研究設備の加速償却</li></ul>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 社員2名のスタートアップでも研究所を設立できますか？</p><p class="faq-a">A. はい。両名が研究者として認定されれば可能です。テック系スタートアップでよく見られます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外資系企業でも資格がありますか？</p><p class="faq-a">A. はい。韓国に登録された中小企業または法人であれば可能です。</p></div>
</div>
<div class="cta-box"><h3>企業付設研究所の設立をサポートします</h3><p>ビジョン行政書士事務所がIITP認定に必要な書類をすべて準備します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 15: e-cigarette-import-license-guide ──────────────────────────────
  {
    slug: 'e-cigarette-import-license-guide',
    locale: 'en',
    title: 'E-Cigarette Import License in Korea — 2026 Complete Guide',
    metaTitle: 'Korea E-Cigarette Import License 2026 — Liquid & Heated Tobacco',
    metaDescription: 'How to obtain an e-cigarette (liquid and heated tobacco) import license in Korea. Requirements, documents, and application process explained. Free consultation.',
    category: 'Logistics/Distribution',
    excerpt: 'A complete guide to obtaining an e-cigarette import license in Korea — covering liquid nicotine and heated tobacco product requirements and the application process.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>E-Cigarette Regulation Overview</li><li>Types of E-Cigarettes and Their Rules</li><li>Eligibility Requirements</li><li>Required Documents</li><li>Application Procedure</li><li>Post-License Obligations</li><li>FAQ</li></ol></div>
<h2>1. E-Cigarette Regulation Overview</h2>
<p>E-cigarettes are regulated under the <strong>Tobacco Business Act</strong> in Korea. Importing e-cigarettes — whether liquid nicotine (전자담배 액상형) or heated tobacco products (궐련형 전자담배) — requires a license from the Ministry of Economy and Finance.</p>
<h2>2. Types of E-Cigarettes and Their Rules</h2>
<ul><li><strong>Liquid nicotine devices:</strong> Import license + nicotine product safety review</li><li><strong>Heated tobacco products (HTP):</strong> Treated as conventional tobacco, requires standard tobacco import license</li><li>Nicotine-free e-liquids may have different rules — confirm with the ministry</li></ul>
<h2>3. Eligibility Requirements</h2>
<ul><li>Must be a registered corporation in Korea</li><li>Paid-in capital: KRW 500 million (same as tobacco)</li><li>Designated import warehouse</li><li>Product safety test results from a recognized laboratory</li></ul>
<h2>4. Required Documents</h2>
<ul><li>Import license application</li><li>Corporate registry and business plan</li><li>Product specification and ingredient declaration</li><li>Safety test reports</li><li>Proof of capital and warehouse</li></ul>
<h2>5. Application Procedure</h2>
<ol><li>Product safety testing (can take 2–3 months)</li><li>Application submission to Ministry of Economy and Finance</li><li>Review and possible on-site inspection</li><li>License issuance (approx. 30–60 business days)</li></ol>
<h2>6. Post-License Obligations</h2>
<ul><li>Compliance with nicotine content labeling</li><li>No sale to minors (strict enforcement)</li><li>Quarterly reporting to ministry</li><li>Excise tax payment</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a foreign brand enter the Korean e-cigarette market?</p><p class="faq-a">A. Yes, through a licensed Korean importer or by establishing a Korean subsidiary with a license.</p></div>
<div class="faq-item"><p class="faq-q">Q. Are disposable e-cigarettes regulated the same way?</p><p class="faq-a">A. Yes. All nicotine-containing e-cigarette products fall under the Tobacco Business Act.</p></div>
</div>
<div class="cta-box"><h3>Get Your E-Cigarette Import License</h3><p>Vision Administrative Office specializes in regulated import licensing. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'e-cigarette-import-license-guide',
    locale: 'zh',
    title: '韩国电子烟进口许可指南2026 — 液态型与加热型烟草',
    metaTitle: '韩国电子烟进口许可2026 — 液态烟与加热烟草完整指南',
    metaDescription: '在韩国获取电子烟（液态尼古丁及加热型烟草）进口许可的完整指南，包括申请条件、所需材料及申请流程。专业行政士免费初次咨询。',
    category: '物流/流通',
    excerpt: '韩国电子烟进口许可完整指南，涵盖液态尼古丁和加热型烟草产品的申请要求及流程。',
    content: `<div class="toc"><p>目录</p><ol><li>电子烟监管概述</li><li>电子烟类型及相关规定</li><li>申请资格</li><li>所需材料</li><li>申请流程</li><li>许可后义务</li><li>常见问题</li></ol></div>
<h2>1. 电子烟监管概述</h2>
<p>电子烟在韩国受《烟草事业法》监管。进口电子烟（无论是液态尼古丁型还是加热型烟草产品）须向<strong>企划财政部</strong>申请许可。</p>
<h2>2. 电子烟类型及相关规定</h2>
<ul><li><strong>液态尼古丁装置：</strong>进口许可证 + 尼古丁产品安全审查</li><li><strong>加热型烟草产品（HTP）：</strong>视同传统烟草，需标准烟草进口许可</li><li>无尼古丁电子烟液体可能适用不同规定，请向主管部门确认</li></ul>
<h2>3. 申请资格</h2>
<ul><li>须为在韩国注册的法人</li><li>注册资本金：5亿韩元（与烟草相同）</li><li>指定进口仓库</li><li>认可实验室出具的产品安全检测报告</li></ul>
<h2>4. 所需材料</h2>
<ul><li>进口许可申请书</li><li>法人登记及商业计划书</li><li>产品规格和成分申报</li><li>安全检测报告</li><li>资本金及仓库证明</li></ul>
<h2>5. 申请流程</h2>
<ol><li>产品安全检测（可能需要2~3个月）</li><li>向企划财政部提交申请</li><li>审查及可能的现场检查</li><li>颁发许可证（约30~60个工作日）</li></ol>
<h2>6. 许可后义务</h2>
<ul><li>遵守尼古丁含量标签规定</li><li>禁止向未成年人销售（严格执法）</li><li>每季度向主管部门报告</li><li>缴纳消费税</li></ul>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 外国品牌可以进入韩国电子烟市场吗？</p><p class="faq-a">A. 可以，通过获得许可的韩国进口商，或在韩国设立持有许可证的子公司。</p></div>
<div class="faq-item"><p class="faq-q">Q. 一次性电子烟受同样监管吗？</p><p class="faq-a">A. 是的，所有含尼古丁的电子烟产品均受《烟草事业法》约束。</p></div>
</div>
<div class="cta-box"><h3>申请电子烟进口许可证</h3><p>Vision行政士事务所专注于受监管进口许可申请。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'e-cigarette-import-license-guide',
    locale: 'ja',
    title: '韓国電子タバコ輸入許可ガイド2026 — 液体型・加熱型タバコ',
    metaTitle: '韓国電子タバコ輸入許可2026 — 液体型・加熱型タバコ完全ガイド',
    metaDescription: '韓国で電子タバコ（液体ニコチン・加熱型タバコ製品）の輸入許可を取得する方法。申請条件、必要書類と申請手続きを詳しく解説。行政書士による無料初回相談あり。',
    category: '物流/流通',
    excerpt: '韓国の電子タバコ輸入許可取得完全ガイド — 液体ニコチン型と加熱型タバコ製品の申請要件と手続きを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>電子タバコ規制の概要</li><li>電子タバコの種類と規制</li><li>申請資格</li><li>必要書類</li><li>申請手続き</li><li>許可後の義務</li><li>よくある質問</li></ol></div>
<h2>1. 電子タバコ規制の概要</h2>
<p>韓国では電子タバコはたばこ事業法により規制されています。液体ニコチン型（전자담배 액상형）と加熱型タバコ製品（궐련형 전자담배）いずれも、<strong>企画財政部</strong>からの輸入許可が必要です。</p>
<h2>2. 電子タバコの種類と規制</h2>
<ul><li><strong>液体ニコチン製品：</strong>輸入許可 + ニコチン製品安全審査</li><li><strong>加熱型タバコ製品（HTP）：</strong>従来のたばこと同様に扱われ、標準たばこ輸入許可が必要</li><li>ニコチンフリーの電子液体は別の規制が適用される可能性あり — 主管省庁に確認のこと</li></ul>
<h2>3. 申請資格</h2>
<ul><li>韓国に登録された法人であること</li><li>払込資本金：5億ウォン（たばこと同額）</li><li>指定輸入倉庫</li><li>認定機関からの製品安全試験結果</li></ul>
<h2>4. 必要書類</h2>
<ul><li>輸入許可申請書</li><li>法人登記と事業計画書</li><li>製品仕様と成分申告書</li><li>安全試験報告書</li><li>資本金と倉庫の証明</li></ul>
<h2>5. 申請手続き</h2>
<ol><li>製品安全試験（2〜3ヶ月かかることあり）</li><li>企画財政部へ申請書提出</li><li>審査と場合による現地検査</li><li>許可証の発行（約30〜60営業日）</li></ol>
<h2>6. 許可後の義務</h2>
<ul><li>ニコチン含有量の表示遵守</li><li>未成年者への販売禁止（厳格に執行）</li><li>四半期ごとに主管省庁へ報告</li><li>個別消費税の納付</li></ul>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 外国ブランドが韓国の電子タバコ市場に参入できますか？</p><p class="faq-a">A. はい。許可を持つ韓国輸入業者を通じて、または許可を持つ韓国子会社を設立することで可能です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 使い捨て電子タバコも同様に規制されますか？</p><p class="faq-a">A. はい。ニコチンを含む電子タバコ製品はすべてたばこ事業法の対象となります。</p></div>
</div>
<div class="cta-box"><h3>電子タバコ輸入許可の取得をサポートします</h3><p>ビジョン行政書士事務所は規制業種の輸入許可取得を専門としています。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 16: international-logistics-capital-funding-guide ──────────────────
  {
    slug: 'international-logistics-capital-funding-guide',
    locale: 'en',
    title: 'How to Meet the KRW 300M Capital Requirement for Freight Forwarding Registration — 2026',
    metaTitle: 'Freight Forwarding KRW 300M Capital Requirement Korea 2026 — Practical Guide',
    metaDescription: 'How to meet and prove the KRW 300 million capital requirement for international freight forwarding registration in Korea. Bank balance certificate, surety bond tips. Free consultation.',
    category: 'Logistics',
    excerpt: 'Practical guidance on meeting and documenting the KRW 300M capital requirement for international freight forwarding registration in Korea, including surety bond strategies.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Why KRW 300M?</li><li>What Counts as Capital?</li><li>Proving Capital: The Bank Balance Certificate</li><li>Surety Bond Requirements</li><li>Common Mistakes</li><li>Strategies for Capital Preparation</li><li>FAQ</li></ol></div>
<h2>1. Why KRW 300M?</h2>
<p>The Framework Act on Logistics Policy requires international freight forwarders to have <strong>paid-in capital of at least KRW 300 million</strong> to ensure financial soundness and customer protection. This threshold applies to both domestic and foreign-invested companies.</p>
<h2>2. What Counts as Capital?</h2>
<ul><li>Paid-in capital on the corporate register</li><li>Foreign capital remitted and recorded as paid-in capital (for FICs)</li><li>Does NOT include borrowed funds or short-term deposits in the company's name</li></ul>
<h2>3. Proving Capital: The Bank Balance Certificate</h2>
<p>At the time of application, you must submit a <strong>bank balance certificate (잔고증명서)</strong> showing the company account has KRW 300M+. The certificate must be issued by a Korean bank and dated within 3 months of the application.</p>
<h2>4. Surety Bond Requirements</h2>
<ul><li>A surety bond (보증보험) of KRW 100M or more is also required</li><li>Issued by recognized insurance companies (Seoul Guarantee Insurance, etc.)</li><li>Annual premium: approximately KRW 300,000–500,000</li><li>Can be replaced by a qualifying mutual aid association membership</li></ul>
<h2>5. Common Mistakes</h2>
<ul><li>Moving funds in just before the certificate date and out immediately after (regulators may flag this)</li><li>Using a personal account instead of the corporate account</li><li>Surety bond period less than 1 year</li><li>Mismatch between certificate date and application date</li></ul>
<h2>6. Strategies for Capital Preparation</h2>
<ul><li>Plan capital injection at least 1–2 months before application</li><li>Use a shareholder loan converted to paid-in capital via a formal capital increase</li><li>Foreign capital: ensure FIPA reporting is completed before the balance certificate date</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can I use a loan to meet the KRW 300M requirement?</p><p class="faq-a">A. No. The requirement is for paid-in capital, not total assets or cash balance from a loan. Bank balance from a loan will be scrutinized.</p></div>
<div class="faq-item"><p class="faq-q">Q. Must the KRW 300M remain in the account after registration?</p><p class="faq-a">A. No. It only needs to be demonstrated at the time of application. Post-registration, it can be used as operating capital.</p></div>
</div>
<div class="cta-box"><h3>Need Help with Capital Documentation?</h3><p>Vision Administrative Office advises on capital structure and prepares all required financial documentation. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'international-logistics-capital-funding-guide',
    locale: 'zh',
    title: '韩国国际货运代理业3亿韩元资本金准备实务指南2026',
    metaTitle: '货运代理3亿资本金要求韩国2026 — 余额证明·保证保险实务',
    metaDescription: '如何满足并证明韩国国际货运代理业登记所需3亿韩元资本金要求。银行余额证明、保证保险技巧实务指南。专业行政士免费初次咨询。',
    category: '物流',
    excerpt: '韩国国际货运代理业登记3亿韩元资本金要求的满足与证明实务指南，含保证保险策略。',
    content: `<div class="toc"><p>目录</p><ol><li>为什么需要3亿韩元？</li><li>哪些算作资本金？</li><li>证明资本金：银行余额证明</li><li>保证保险要求</li><li>常见错误</li><li>资本金筹备策略</li><li>常见问题</li></ol></div>
<h2>1. 为什么需要3亿韩元？</h2>
<p>《物流政策基本法》要求国际货运代理商拥有<strong>至少3亿韩元的实缴资本金</strong>，以确保财务稳健并保护客户权益，适用于国内企业和外资企业。</p>
<h2>2. 哪些算作资本金？</h2>
<ul><li>公司登记册上的实缴资本金</li><li>汇入并记录为实缴资本金的外资（适用于外资企业）</li><li>不包括借款或以公司名义存入的短期存款</li></ul>
<h2>3. 证明资本金：银行余额证明</h2>
<p>申请时须提交<strong>银行余额证明书（잔고증명서）</strong>，显示公司账户余额达到3亿韩元以上。证明书须由韩国银行出具，且在申请日期前3个月内有效。</p>
<h2>4. 保证保险要求</h2>
<ul><li>还需购买1亿韩元以上的保证保险（보증보험）</li><li>由认可保险公司（首尔保证保险等）出具</li><li>年保费约30万~50万韩元</li><li>可以符合条件的互助联合会会员资格替代</li></ul>
<h2>5. 常见错误</h2>
<ul><li>仅在证明日期前临时注入资金，之后立即取出（可能被监管机构标记）</li><li>使用个人账户而非公司账户</li><li>保证保险期限不足1年</li><li>证明日期与申请日期不符</li></ul>
<h2>6. 资本金筹备策略</h2>
<ul><li>申请前至少1~2个月规划资本注入</li><li>通过正式增资程序将股东贷款转为实缴资本金</li><li>外资：确保在余额证明日期前完成外国人投资申报</li></ul>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 可以用贷款满足3亿韩元要求吗？</p><p class="faq-a">A. 不可以。要求的是实缴资本金，不是总资产或来自贷款的现金余额。贷款来源的银行余额将受到审查。</p></div>
<div class="faq-item"><p class="faq-q">Q. 登记后3亿韩元必须一直保留在账户中吗？</p><p class="faq-a">A. 不需要。只需在申请时证明即可。登记后可作为运营资金使用。</p></div>
</div>
<div class="cta-box"><h3>需要资本金文件准备协助？</h3><p>Vision行政士事务所提供资本结构建议及全部财务文件准备服务。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'international-logistics-capital-funding-guide',
    locale: 'ja',
    title: '韓国国際物流主旋業3億ウォン資本金準備実務ガイド2026',
    metaTitle: '物流主旋業3億資本金要件韓国2026 — 残高証明・保証保険実務',
    metaDescription: '韓国国際物流主旋業登録に必要な3億ウォン資本金要件の満たし方と証明方法。銀行残高証明書、保証保険のポイントを実務的に解説。行政書士による無料初回相談あり。',
    category: '物流',
    excerpt: '韓国国際物流主旋業登録の3億ウォン資本金要件を満たし証明するための実務ガイド。保証保険戦略も含めて解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>なぜ3億ウォンか？</li><li>何が資本金としてカウントされるか？</li><li>資本金の証明：銀行残高証明書</li><li>保証保険の要件</li><li>よくある間違い</li><li>資本金準備の戦略</li><li>よくある質問</li></ol></div>
<h2>1. なぜ3億ウォンか？</h2>
<p>物流政策基本法は、財務健全性と顧客保護のため、国際物流主旋業者に<strong>最低3億ウォンの払込資本金</strong>を求めています。国内企業・外資系企業ともに適用されます。</p>
<h2>2. 何が資本金としてカウントされるか？</h2>
<ul><li>会社登記簿上の払込資本金</li><li>払込資本金として記録された外国資本の送金（外資系企業の場合）</li><li>借入金や会社名義の短期預金は対象外</li></ul>
<h2>3. 資本金の証明：銀行残高証明書</h2>
<p>申請時に、会社口座の残高が3億ウォン以上であることを示す<strong>銀行残高証明書（잔고증명서）</strong>を提出する必要があります。韓国の銀行が発行し、申請日から3ヶ月以内のものが必要です。</p>
<h2>4. 保証保険の要件</h2>
<ul><li>1億ウォン以上の保証保険（보증보험）も必要</li><li>認定保険会社（ソウル保証保険等）が発行</li><li>年間保険料：約30〜50万ウォン</li><li>要件を満たす共済組合への加入で代替可能</li></ul>
<h2>5. よくある間違い</h2>
<ul><li>証明日直前に資金を入れ、直後に引き出す行為（監督機関に指摘される可能性あり）</li><li>法人口座ではなく個人口座を使用</li><li>保証保険の有効期間が1年未満</li><li>証明書の日付と申請日の不一致</li></ul>
<h2>6. 資本金準備の戦略</h2>
<ul><li>申請の1〜2ヶ月前には資本注入を計画する</li><li>正式な増資手続きにより株主貸付を払込資本金に転換する</li><li>外国資本：残高証明日前にFIPA報告を完了させること</li></ul>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 借入金で3億ウォンの要件を満たせますか？</p><p class="faq-a">A. いいえ。要件は払込資本金であり、借入金による現金残高ではありません。借入金由来の残高は審査されます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 登録後も3億ウォンを口座に維持する必要がありますか？</p><p class="faq-a">A. いいえ。申請時に証明すれば十分です。登録後は運転資金として使用できます。</p></div>
</div>
<div class="cta-box"><h3>資本金書類の準備をサポートします</h3><p>ビジョン行政書士事務所が資本構成のアドバイスと必要な財務書類の準備を行います。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 17: urban-guesthouse-airbnb-operation-guide ───────────────────────
  {
    slug: 'urban-guesthouse-airbnb-operation-guide',
    locale: 'en',
    title: 'Operating an Airbnb Urban Guesthouse in Korea — Legal Compliance Guide 2026',
    metaTitle: 'Airbnb Urban Guesthouse Operation Korea 2026 — Legal & Tax Guide',
    metaDescription: 'How to legally operate an Airbnb-style urban guesthouse in Korea after registration. Foreign guest reporting, tax obligations, platform rules, and compliance tips. Free consultation.',
    category: 'Accommodation',
    excerpt: 'A practical guide to operating a registered urban guesthouse in Korea on Airbnb — covering guest reporting, tax obligations, platform compliance, and common violations to avoid.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>After Registration: Operating Legally</li><li>Foreign Guest Reporting Obligation</li><li>Airbnb Platform Compliance</li><li>Tax Obligations</li><li>Common Violations and Penalties</li><li>Scaling Up: Multiple Properties</li><li>FAQ</li></ol></div>
<h2>1. After Registration: Operating Legally</h2>
<p>Once you receive your foreign tourist urban guesthouse registration, you may begin listing on platforms like Airbnb. The registration is tied to a specific property — you cannot use it for other locations.</p>
<h2>2. Foreign Guest Reporting Obligation</h2>
<p>Under the <strong>Immigration Act</strong>, you must report foreign guests' passport information to the local immigration office or police station within <strong>24 hours of check-in</strong>. This can be done online via the Hi Korea system or through your local police station.</p>
<h2>3. Airbnb Platform Compliance</h2>
<ul><li>Enter your registration number in the Airbnb listing</li><li>Mark the listing as "foreign tourists only" (외국인 전용)</li><li>Airbnb collects and remits VAT on platform fees in Korea</li><li>Maintain your cancellation policy in line with registration rules</li></ul>
<h2>4. Tax Obligations</h2>
<ul><li>Income from the guesthouse is classified as <strong>rental income (임대소득)</strong></li><li>Annual income tax filing required</li><li>VAT registration may be required if revenue exceeds KRW 48 million/year</li><li>Keep receipts for all deductible expenses (cleaning, supplies, repairs)</li></ul>
<h2>5. Common Violations and Penalties</h2>
<ul><li>Hosting Korean domestic guests: administrative fine + registration cancellation risk</li><li>Failing to report foreign guests: immigration law violation</li><li>Operating without registration: fine up to KRW 3 million</li><li>Exceeding registered room count: fine</li></ul>
<h2>6. Scaling Up: Multiple Properties</h2>
<p>The urban guesthouse registration applies only to the property where you reside. For additional properties, you need separate registrations (each requiring owner-occupancy) or a different accommodation business license (일반숙박업).</p>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can I have a property manager run my Airbnb while I'm abroad?</p><p class="faq-a">A. The owner-occupancy requirement means you must reside at the property. Property management arrangements may violate this requirement — consult a specialist.</p></div>
<div class="faq-item"><p class="faq-q">Q. How does Airbnb handle taxes in Korea?</p><p class="faq-a">A. Airbnb collects and remits VAT on service fees. Host income from guest payments is the host's tax responsibility.</p></div>
</div>
<div class="cta-box"><h3>Get Expert Guidance on Guesthouse Operations</h3><p>Vision Administrative Office advises on compliance, tax registration, and reporting procedures. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'urban-guesthouse-airbnb-operation-guide',
    locale: 'zh',
    title: '韩国Airbnb城市民宿合法运营指南2026 — 申报·税务·合规',
    metaTitle: 'Airbnb城市民宿运营韩国2026 — 法律合规与税务指南',
    metaDescription: '韩国城市民宿登记后如何合法运营Airbnb。外国客人申报、税务义务、平台合规及常见违规处罚详解。专业行政士免费初次咨询。',
    category: '住宿/旅游',
    excerpt: '在韩国Airbnb上合法运营已登记城市民宿的实务指南，涵盖客人申报、税务义务、平台合规及常见违规处罚。',
    content: `<div class="toc"><p>目录</p><ol><li>登记后：合法运营</li><li>外国客人申报义务</li><li>Airbnb平台合规</li><li>税务义务</li><li>常见违规及处罚</li><li>规模扩张：多套房产</li><li>常见问题</li></ol></div>
<h2>1. 登记后：合法运营</h2>
<p>取得外国人城市民宿登记证后，即可在Airbnb等平台上发布房源。该登记证与特定房产挂钩，不可用于其他地址。</p>
<h2>2. 外国客人申报义务</h2>
<p>依据<strong>《出入境管理法》</strong>，须在客人<strong>入住后24小时内</strong>向当地出入境管理局或警察局申报外国客人护照信息。可通过Hi Korea系统在线申报或前往当地派出所办理。</p>
<h2>3. Airbnb平台合规</h2>
<ul><li>在Airbnb房源中填写登记证编号</li><li>将房源标注为"仅限外国游客"</li><li>Airbnb在韩国代征并缴纳平台服务费增值税</li><li>退订政策须符合登记规定</li></ul>
<h2>4. 税务义务</h2>
<ul><li>民宿收入属于<strong>租金所得（임대소득）</strong></li><li>须进行年度所得税申报</li><li>年收入超过4800万韩元可能需要进行增值税登记</li><li>保留所有可抵扣费用发票（清洁、物资、维修）</li></ul>
<h2>5. 常见违规及处罚</h2>
<ul><li>接待韩国国内游客：行政罚款 + 可能吊销登记证</li><li>未申报外国客人：违反出入境管理法</li><li>无证经营：最高300万韩元罚款</li><li>超出登记客房数量：罚款</li></ul>
<h2>6. 规模扩张：多套房产</h2>
<p>城市民宿登记仅适用于您居住的房产。对于额外房产，需分别申请登记（每处均需业主自住）或申请其他住宿经营许可证（一般住宿业）。</p>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 我在国外时可以委托房产管理公司代运营Airbnb吗？</p><p class="faq-a">A. 业主自住要求意味着您必须居住在该房产。委托房产管理可能违反此要求，请咨询专业人士。</p></div>
<div class="faq-item"><p class="faq-q">Q. Airbnb在韩国如何处理税务？</p><p class="faq-a">A. Airbnb代征并缴纳服务费增值税。客人支付的住宿费收入的税务责任由房东承担。</p></div>
</div>
<div class="cta-box"><h3>获取民宿运营专业指导</h3><p>Vision行政士事务所提供合规咨询、税务登记及申报程序建议。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'urban-guesthouse-airbnb-operation-guide',
    locale: 'ja',
    title: '韓国AirbnbでのUrban民泊合法運営ガイド2026 — 申告・税務・コンプライアンス',
    metaTitle: 'Airbnb都市民泊運営韓国2026 — 法令遵守と税務ガイド',
    metaDescription: '韓国で登録済み都市民泊業をAirbnbで合法的に運営する方法。外国人ゲストの申告義務、税務義務、プラットフォームコンプライアンスと違反事例を解説。行政書士による無料初回相談あり。',
    category: '宿泊/観光',
    excerpt: '韓国でAirbnb型の登録済み都市民泊業を運営するための実務ガイド — ゲスト申告、税務義務、プラットフォームコンプライアンスと違反注意点を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>登録後：合法的な運営</li><li>外国人ゲスト申告義務</li><li>Airbnbプラットフォームのコンプライアンス</li><li>税務義務</li><li>よくある違反と罰則</li><li>規模拡大：複数物件</li><li>よくある質問</li></ol></div>
<h2>1. 登録後：合法的な運営</h2>
<p>外国人観光都市民泊業の登録証を取得したら、Airbnbなどのプラットフォームに掲載を開始できます。登録は特定の物件に紐づいており、他の物件には使用できません。</p>
<h2>2. 外国人ゲスト申告義務</h2>
<p><strong>出入国管理法</strong>に基づき、外国人ゲストのパスポート情報をチェックイン後<strong>24時間以内</strong>に地方出入国管理事務所または警察署に申告する必要があります。Hi Koreaシステムでオンライン申告か、地元の交番・警察署で手続きが可能です。</p>
<h2>3. Airbnbプラットフォームのコンプライアンス</h2>
<ul><li>Airbnbの掲載ページに登録番号を入力</li><li>「外国人専用」と明記</li><li>AirbnbはKoreaでプラットフォーム手数料のVATを代理徴収・納付</li><li>キャンセルポリシーを登録ルールに合わせること</li></ul>
<h2>4. 税務義務</h2>
<ul><li>民泊収入は<strong>賃貸所得（임대소득）</strong>に分類</li><li>年次所得税申告が必要</li><li>年収が4,800万ウォンを超えるとVAT登録が必要になる場合あり</li><li>控除対象経費（清掃、消耗品、修繕）のレシートを保管</li></ul>
<h2>5. よくある違反と罰則</h2>
<ul><li>韓国国内ゲストの受け入れ：行政罰金 + 登録取消リスク</li><li>外国人ゲスト未申告：出入国管理法違反</li><li>無登録営業：最大300万ウォンの罰金</li><li>登録客室数超過：罰金</li></ul>
<h2>6. 規模拡大：複数物件</h2>
<p>都市民泊業登録はあなたが居住する物件にのみ適用されます。追加物件には別途登録（各物件で所有者居住が必要）、または別の宿泊業許可（一般宿泊業）が必要です。</p>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 海外にいる間、代行管理会社にAirbnbを運営させられますか？</p><p class="faq-a">A. 所有者居住要件があるため、物件に居住する必要があります。管理委託はこの要件に違反する可能性があります — 専門家にご相談ください。</p></div>
<div class="faq-item"><p class="faq-q">Q. AirbnbはKoreaでどのように税務を処理しますか？</p><p class="faq-a">A. Airbnbはサービス料のVATを代理徴収・納付します。ゲストからの宿泊料収入の税務責任はホストが負います。</p></div>
</div>
<div class="cta-box"><h3>民泊運営の専門的なアドバイスを受けましょう</h3><p>ビジョン行政書士事務所がコンプライアンス、税務登録、申告手続きをサポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 18–22: remaining content (shorter format for efficiency) ────────────
  {
    slug: 'nonprofit-corporation-articles-and-approval-guide',
    locale: 'en',
    title: 'Nonprofit Corporation Bylaws & Ministry Approval in Korea — 2026 Guide',
    metaTitle: 'Korea Nonprofit Bylaws & Ministry Approval 2026 — Rejection Avoidance Tips',
    metaDescription: 'How to draft compliant nonprofit corporation bylaws and pass supervisory ministry approval in Korea. Common rejection reasons and expert tips. Free consultation.',
    category: 'Business Certification',
    excerpt: 'Expert guidance on drafting nonprofit bylaws and navigating the supervisory ministry approval process in Korea — the most common rejection reasons and how to avoid them.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Why Bylaws Matter</li><li>Mandatory Bylaw Contents</li><li>Common Rejection Reasons</li><li>Ministry Review Process</li><li>Tips for First-Pass Approval</li><li>FAQ</li></ol></div>
<h2>1. Why Bylaws Matter</h2>
<p>Bylaws (정관) are the constitution of a nonprofit corporation. A single missing clause or ambiguous provision can result in the supervisory ministry returning the entire application for revision, causing months of delay.</p>
<h2>2. Mandatory Bylaw Contents</h2>
<ul><li>Name and location of the corporation</li><li>Purpose and scope of activities</li><li>Membership criteria and dues (for associations)</li><li>Governance: board structure, election procedures, quorum rules</li><li>Financial year and audit procedures</li><li>Dissolution procedure and distribution of assets</li><li>Amendment procedures for the bylaws themselves</li></ul>
<h2>3. Common Rejection Reasons</h2>
<ul><li>Vague or overly broad purpose statement</li><li>Missing dissolution asset distribution clause</li><li>Board quorum rules that conflict with Civil Code</li><li>Business plan does not match stated purpose</li><li>Insufficient founding membership or capital</li></ul>
<h2>4. Ministry Review Process</h2>
<p>Each ministry has its own checklist and timelines. The Ministry of Education takes 30–60 days; welfare ministries often require additional supplementary submissions. Build in buffer time for Q&A rounds.</p>
<h2>5. Tips for First-Pass Approval</h2>
<ul><li>Pre-consult with the ministry before formal submission</li><li>Use the ministry's published bylaw template as a starting point</li><li>Align business plan activities precisely with the stated purpose</li><li>Demonstrate adequate operating budget in the financial plan</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can bylaws be amended after registration?</p><p class="faq-a">A. Yes, but amendments require ministry approval before taking effect.</p></div>
<div class="faq-item"><p class="faq-q">Q. How many founding members are required?</p><p class="faq-a">A. The Civil Code does not specify a minimum, but most ministries expect at least 10 founding members for associations.</p></div>
</div>
<div class="cta-box"><h3>Get Your Bylaws Right the First Time</h3><p>Vision Administrative Office drafts compliant bylaws and manages ministry submissions. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'nonprofit-corporation-articles-and-approval-guide',
    locale: 'zh',
    title: '韩国非营利社团法人章程起草与主管机关审批指南2026',
    metaTitle: '韩国非营利法人章程与主管机关审批2026 — 避免被驳回的技巧',
    metaDescription: '如何起草符合规定的非营利法人章程并通过韩国主管机关审批。常见被驳回原因及专家建议。专业行政士免费初次咨询。',
    category: '企业认证',
    excerpt: '韩国非营利法人章程起草及主管机关审批流程专家指南，包括最常见的被驳回原因及应对策略。',
    content: `<div class="toc"><p>目录</p><ol><li>为什么章程至关重要</li><li>章程必备内容</li><li>常见被驳回原因</li><li>主管机关审查流程</li><li>首次获批技巧</li><li>常见问题</li></ol></div>
<h2>1. 为什么章程至关重要</h2>
<p>章程（정관）是非营利法人的根本规章。任何一条缺失的条款或模糊的规定都可能导致主管机关退回整个申请要求修改，造成数月的延误。</p>
<h2>2. 章程必备内容</h2>
<ul><li>法人名称和地址</li><li>目的和活动范围</li><li>会员标准和会费（社团法人）</li><li>治理结构：董事会组成、选举程序、法定人数规则</li><li>财务年度和审计程序</li><li>解散程序及资产分配</li><li>章程本身的修改程序</li></ul>
<h2>3. 常见被驳回原因</h2>
<ul><li>目的陈述模糊或过于宽泛</li><li>缺少解散资产分配条款</li><li>董事会法定人数规则与《民法》相冲突</li><li>商业计划与申报目的不符</li><li>创始成员或资本不足</li></ul>
<h2>4. 主管机关审查流程</h2>
<p>各主管机关有各自的审查清单和时间表。教育部通常需30~60天；福利类主管机关常需要额外补充材料。须预留问答往来的缓冲时间。</p>
<h2>5. 首次获批技巧</h2>
<ul><li>正式提交前与主管机关预先协商</li><li>以主管机关发布的章程模板为起点</li><li>商业计划活动与申报目的精确对应</li><li>在财务计划中证明充足的运营预算</li></ul>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 登记后可以修改章程吗？</p><p class="faq-a">A. 可以，但修改须经主管机关批准后方可生效。</p></div>
<div class="faq-item"><p class="faq-q">Q. 需要多少创始成员？</p><p class="faq-a">A. 《民法》未规定最低人数，但大多数主管机关期望社团法人至少有10名创始成员。</p></div>
</div>
<div class="cta-box"><h3>一次通过章程审批</h3><p>Vision行政士事务所起草符合规定的章程并管理主管机关申请流程。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'nonprofit-corporation-articles-and-approval-guide',
    locale: 'ja',
    title: '韓国非営利社団法人定款作成と主務官庁認可ガイド2026',
    metaTitle: '韓国非営利法人定款・主務官庁認可2026 — 却下回避のコツ',
    metaDescription: '韓国で適法な非営利法人定款を作成し主務官庁認可を通過する方法。よくある却下理由と専門家のアドバイス。行政書士による無料初回相談あり。',
    category: '企業認証',
    excerpt: '韓国非営利法人の定款作成と主務官庁認可プロセスの専門ガイド — よくある却下理由と回避策を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>なぜ定款が重要か</li><li>定款の必須記載事項</li><li>よくある却下理由</li><li>主務官庁の審査プロセス</li><li>一発合格のためのコツ</li><li>よくある質問</li></ol></div>
<h2>1. なぜ定款が重要か</h2>
<p>定款（정관）は非営利法人の根本規則です。条項が一つでも欠落したり曖昧な規定があると、主務官庁から申請書全体が差し戻され、何ヶ月もの遅延が生じる可能性があります。</p>
<h2>2. 定款の必須記載事項</h2>
<ul><li>法人の名称と所在地</li><li>目的と活動範囲</li><li>会員の資格と会費（社団法人の場合）</li><li>ガバナンス：理事会構成、選挙手続き、定足数規定</li><li>会計年度と監査手続き</li><li>解散手続きと資産の帰属先</li><li>定款改正手続き</li></ul>
<h2>3. よくある却下理由</h2>
<ul><li>目的の記載が曖昧または広すぎる</li><li>解散時の資産帰属条項が欠落</li><li>理事会の定足数規定が民法と矛盾</li><li>事業計画が申告目的と不一致</li><li>設立者数または資本が不十分</li></ul>
<h2>4. 主務官庁の審査プロセス</h2>
<p>各主務官庁が独自の審査チェックリストと期間を持っています。教育部は30〜60日、福祉関係省庁は追加資料の提出を求めることが多いです。質疑応答のための余裕期間を設けてください。</p>
<h2>5. 一発合格のためのコツ</h2>
<ul><li>正式提出前に主務官庁と事前協議する</li><li>主務官庁が公表している定款テンプレートを出発点にする</li><li>事業計画の活動を申告目的と正確に一致させる</li><li>財務計画で十分な運営予算を示す</li></ul>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 登記後に定款を改正できますか？</p><p class="faq-a">A. はい。ただし改正は効力発生前に主務官庁の承認が必要です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 設立者は何名必要ですか？</p><p class="faq-a">A. 民法に最低人数の規定はありませんが、ほとんどの主務官庁は社団法人に少なくとも10名の設立者を期待します。</p></div>
</div>
<div class="cta-box"><h3>定款を最初から正確に作成しましょう</h3><p>ビジョン行政書士事務所が適法な定款を作成し、主務官庁への申請を管理します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 19: women-enterprise-renewal-management-guide ──────────────────────
  {
    slug: 'women-enterprise-renewal-management-guide',
    locale: 'en',
    title: 'Women-Owned Business Certification Renewal in Korea — 2026 Guide',
    metaTitle: 'Korea Women-Owned Business Certification Renewal 2026 — 3-Year Cycle',
    metaDescription: 'How to renew Women-Owned Business Certification in Korea before the 3-year expiry. Common rejection reasons for renewal and how to maintain government procurement preferences. Free consultation.',
    category: 'Business Certification',
    excerpt: 'A guide to renewing Women-Owned Business Certification in Korea — the renewal process, common rejection reasons, and how to maintain continuous government procurement benefits.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Why Timely Renewal Matters</li><li>Renewal Eligibility Check</li><li>Changes That May Affect Eligibility</li><li>Renewal Procedure</li><li>Common Rejection Reasons at Renewal</li><li>Maintaining Procurement Preferences</li><li>FAQ</li></ol></div>
<h2>1. Why Timely Renewal Matters</h2>
<p>Women-Owned Business Certification is valid for <strong>3 years</strong>. If it lapses, you lose all government procurement preferences and subsidies — potentially costing millions of won in lost contracts. Renewal must be initiated before expiry.</p>
<h2>2. Renewal Eligibility Check</h2>
<p>You must still meet the original eligibility criteria at renewal time: the female representative holds the position, owns the required shareholding, and the company remains an SME.</p>
<h2>3. Changes That May Affect Eligibility</h2>
<ul><li>Female representative resigned or changed</li><li>Share transfer reduced female ownership below 30%</li><li>Company exceeded SME size thresholds</li><li>Business purpose changed significantly</li></ul>
<h2>4. Renewal Procedure</h2>
<ol><li>Access the Women's Business Center portal 60–90 days before expiry</li><li>Update company information and re-submit required documents</li><li>Review and new certificate issued (approx. 14 business days)</li></ol>
<h2>5. Common Rejection Reasons at Renewal</h2>
<ul><li>Female representative's shareholding fell below 30%</li><li>The company became a subsidiary of a non-SME conglomerate</li><li>Outdated corporate registry documents submitted</li><li>Outstanding tax delinquency</li></ul>
<h2>6. Maintaining Procurement Preferences</h2>
<p>Allow adequate time for renewal so there is no gap in certification. A lapse even of a few weeks can disqualify active bids. Set a calendar reminder 90 days before expiry.</p>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can I renew if there was a brief period where the female shareholder was below 30%?</p><p class="faq-a">A. Eligibility is assessed at the time of renewal application. A past lapse may not automatically disqualify you, but consult a specialist.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is the renewal process different from the initial application?</p><p class="faq-a">A. It is largely the same, but some documents can be omitted if unchanged. The portal guides you through what is required.</p></div>
</div>
<div class="cta-box"><h3>Don't Let Your Certification Lapse</h3><p>Vision Administrative Office manages renewal timelines and prepares all documents. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'women-enterprise-renewal-management-guide',
    locale: 'zh',
    title: '韩国女性企业认证续期与资格维持指南2026 — 3年周期管理',
    metaTitle: '韩国女性企业认证续期2026 — 3年有效期管理指南',
    metaDescription: '如何在3年有效期届满前续期韩国女性企业认证。续期常见被驳回原因及维持政府采购优惠的方法。专业行政士免费初次咨询。',
    category: '企业认证',
    excerpt: '韩国女性企业认证续期指南，包括续期流程、常见被驳回原因及维持政府采购优惠的连续性管理方法。',
    content: `<div class="toc"><p>目录</p><ol><li>为什么及时续期很重要</li><li>续期资格检查</li><li>可能影响资格的变化</li><li>续期流程</li><li>续期常见被驳回原因</li><li>维持采购优惠</li><li>常见问题</li></ol></div>
<h2>1. 为什么及时续期很重要</h2>
<p>女性企业认证有效期为<strong>3年</strong>。若证书失效，将失去所有政府采购优惠和补贴，可能导致数百万韩元的合同损失。续期须在到期前启动。</p>
<h2>2. 续期资格检查</h2>
<p>续期时须仍满足原始申请资格：女性代表仍担任该职位、持有所需股权比例，且公司仍为中小企业。</p>
<h2>3. 可能影响资格的变化</h2>
<ul><li>女性代表离职或变更</li><li>股权转让导致女性持股比例低于30%</li><li>公司超过中小企业规模门槛</li><li>业务目的发生重大变化</li></ul>
<h2>4. 续期流程</h2>
<ol><li>到期前60~90天登录女性企业中心门户网站</li><li>更新公司信息并重新提交所需材料</li><li>审查并颁发新证书（约14个工作日）</li></ol>
<h2>5. 续期常见被驳回原因</h2>
<ul><li>女性代表持股比例低于30%</li><li>公司成为非中小企业集团的子公司</li><li>提交了过期的法人登记文件</li><li>存在未缴税款</li></ul>
<h2>6. 维持采购优惠</h2>
<p>提前足够时间续期，确保认证无间断。即使几周的失效期也可能导致正在进行的投标资格被取消。建议在到期前90天设置日历提醒。</p>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 如果曾有一段时间女性股东持股低于30%，还可以续期吗？</p><p class="faq-a">A. 资格以续期申请时的状态为准。过去的短暂失误不一定导致自动取消资格，但建议咨询专业人士。</p></div>
<div class="faq-item"><p class="faq-q">Q. 续期流程与首次申请有何不同？</p><p class="faq-a">A. 流程基本相同，但部分未变更的材料可省略。门户网站会引导您了解所需内容。</p></div>
</div>
<div class="cta-box"><h3>不要让认证失效</h3><p>Vision行政士事务所管理续期时间节点并准备所有材料。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'women-enterprise-renewal-management-guide',
    locale: 'ja',
    title: '韓国女性企業認証更新・資格維持ガイド2026 — 3年サイクル管理',
    metaTitle: '韓国女性企業認証更新2026 — 3年有効期間管理ガイド',
    metaDescription: '韓国女性企業認証を3年の有効期限前に更新する方法。更新時のよくある却下理由と政府調達優遇を維持するためのポイント。行政書士による無料初回相談あり。',
    category: '企業認証',
    excerpt: '韓国女性企業認証の更新ガイド — 更新手続き、よくある却下理由、政府調達優遇を継続的に維持する方法を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>タイムリーな更新が重要な理由</li><li>更新資格の確認</li><li>資格に影響する可能性のある変化</li><li>更新手続き</li><li>更新時のよくある却下理由</li><li>調達優遇の維持</li><li>よくある質問</li></ol></div>
<h2>1. タイムリーな更新が重要な理由</h2>
<p>女性企業認証の有効期間は<strong>3年</strong>です。失効すると、すべての政府調達優遇と補助金を失い、数百万ウォンの契約機会を逃す可能性があります。期限前に更新手続きを開始することが必要です。</p>
<h2>2. 更新資格の確認</h2>
<p>更新時点でも元の申請資格を満たしている必要があります：女性代表がその職を維持し、必要な株式を保有し、会社が中小企業であること。</p>
<h2>3. 資格に影響する可能性のある変化</h2>
<ul><li>女性代表が辞任または変更</li><li>株式譲渡により女性の株式保有が30%未満に低下</li><li>会社が中小企業の規模要件を超過</li><li>事業目的が大幅に変更</li></ul>
<h2>4. 更新手続き</h2>
<ol><li>期限の60〜90日前に女性企業センターポータルにアクセス</li><li>会社情報を更新し、必要書類を再提出</li><li>審査後に新しい証明書が発行（約14営業日）</li></ol>
<h2>5. 更新時のよくある却下理由</h2>
<ul><li>女性代表の株式保有が30%未満に低下</li><li>会社が中小企業でないコングロマリットの子会社になった</li><li>古い法人登記書類を提出</li><li>滞納税金がある</li></ul>
<h2>6. 調達優遇の維持</h2>
<p>認証に空白期間が生じないよう十分な余裕をもって更新してください。数週間の失効でも進行中の入札資格が失われる可能性があります。期限の90日前にカレンダーリマインダーを設定することを推奨します。</p>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 一時的に女性株主の持株が30%未満になった場合でも更新できますか？</p><p class="faq-a">A. 資格は更新申請時の状況で判断されます。過去の一時的な不適合が自動的に失格になるとは限りませんが、専門家にご相談ください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 更新手続きは最初の申請と異なりますか？</p><p class="faq-a">A. ほぼ同じです。変更がない書類は一部省略できます。ポータルが必要事項をガイドします。</p></div>
</div>
<div class="cta-box"><h3>認証を失効させないようにしましょう</h3><p>ビジョン行政書士事務所が更新スケジュールを管理し、すべての書類を準備します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 20: currency-exchange-aml-internal-control-guide ──────────────────
  {
    slug: 'currency-exchange-aml-internal-control-guide',
    locale: 'en',
    title: 'AML Internal Control Standards for Currency Exchange Businesses in Korea — 2026',
    metaTitle: 'Korea Currency Exchange AML Compliance 2026 — Internal Control Guide',
    metaDescription: 'How to draft and operate AML (anti-money laundering) internal control standards for currency exchange businesses in Korea. STR, CTR, CDD obligations explained. Free consultation.',
    category: 'Finance',
    excerpt: 'A practical guide to AML internal control standards for Korean currency exchange businesses — covering STR, CTR, CDD obligations and internal policy requirements.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Why AML Compliance Is Critical</li><li>Three Core AML Obligations</li><li>Internal Control Policy Document</li><li>Transaction Monitoring Systems</li><li>Staff Training Requirements</li><li>Regulatory Inspections</li><li>FAQ</li></ol></div>
<h2>1. Why AML Compliance Is Critical</h2>
<p>Currency exchange businesses in Korea are classified as <strong>financial transaction reporting institutions</strong> under the Act on Reporting and Use of Specific Financial Transaction Information. Non-compliance can result in license revocation, criminal prosecution, and substantial fines.</p>
<h2>2. Three Core AML Obligations</h2>
<ul><li><strong>Customer Due Diligence (CDD/EDD):</strong> Verify customer identity for all transactions; enhanced due diligence for high-risk customers</li><li><strong>Suspicious Transaction Reports (STR):</strong> Report suspected money laundering to the Financial Intelligence Unit (FIU) within 3 days</li><li><strong>Currency Transaction Reports (CTR):</strong> Report cash transactions of KRW 10 million or more per day per customer within 30 days</li></ul>
<h2>3. Internal Control Policy Document</h2>
<p>Required AML policy document must include: risk assessment methodology, CDD procedures, STR/CTR reporting workflow, record-keeping rules (5-year minimum), employee training schedule, and compliance officer designation.</p>
<h2>4. Transaction Monitoring Systems</h2>
<ul><li>Daily CTR threshold alerts</li><li>Pattern detection for structuring (splitting transactions to avoid CTR)</li><li>PEP (Politically Exposed Person) screening</li><li>Sanctions list checking (UN, OFAC, etc.)</li></ul>
<h2>5. Staff Training Requirements</h2>
<p>All staff handling exchange transactions must receive annual AML training. Training records must be maintained for FIU inspection. New employees must be trained before handling any transactions.</p>
<h2>6. Regulatory Inspections</h2>
<p>The FIU and Ministry of Economy and Finance conduct periodic inspections. Common findings: inadequate CDD records, missing CTR filings, outdated AML policy documents.</p>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Does a small one-person exchange operation need a full AML policy?</p><p class="faq-a">A. Yes. All registered currency exchange businesses regardless of size must maintain an AML internal control policy.</p></div>
<div class="faq-item"><p class="faq-q">Q. What happens if we miss a CTR filing?</p><p class="faq-a">A. Late or missing CTR filings can result in fines and may trigger a broader compliance investigation.</p></div>
</div>
<div class="cta-box"><h3>Get Your AML Policy in Order</h3><p>Vision Administrative Office drafts AML internal control documents and advises on compliance systems. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'currency-exchange-aml-internal-control-guide',
    locale: 'zh',
    title: '韩国换钱业反洗钱内部控制标准实务指南2026',
    metaTitle: '韩国换钱业AML合规2026 — 内部控制标准制度指南',
    metaDescription: '如何为韩国换钱业起草并执行反洗钱（AML）内部控制标准。STR可疑交易报告、CTR高额现金交易报告、CDD客户尽职调查义务详解。专业行政士免费初次咨询。',
    category: '金融',
    excerpt: '韩国换钱业反洗钱内部控制标准实务指南，涵盖STR、CTR、CDD义务及内部政策要求。',
    content: `<div class="toc"><p>目录</p><ol><li>为什么AML合规至关重要</li><li>三大核心AML义务</li><li>内部控制政策文件</li><li>交易监控系统</li><li>员工培训要求</li><li>监管检查</li><li>常见问题</li></ol></div>
<h2>1. 为什么AML合规至关重要</h2>
<p>韩国换钱业依据《特定金融交易信息报告及利用法》被列为<strong>金融交易报告机构</strong>。不合规可能导致许可证被吊销、刑事追诉及巨额罚款。</p>
<h2>2. 三大核心AML义务</h2>
<ul><li><strong>客户尽职调查（CDD/EDD）：</strong>核实所有交易客户身份；对高风险客户实施强化尽职调查</li><li><strong>可疑交易报告（STR）：</strong>在3天内向金融情报院（FIU）报告疑似洗钱交易</li><li><strong>高额现金交易报告（CTR）：</strong>30天内向FIU报告单日单一客户1000万韩元以上的现金交易</li></ul>
<h2>3. 内部控制政策文件</h2>
<p>所需AML政策文件须包括：风险评估方法、CDD程序、STR/CTR报告工作流程、记录保存规则（最少5年）、员工培训计划及合规官员指定。</p>
<h2>4. 交易监控系统</h2>
<ul><li>每日CTR阈值警报</li><li>结构化交易（分拆交易以规避CTR）的模式检测</li><li>政治公众人物（PEP）筛查</li><li>制裁名单核查（联合国、OFAC等）</li></ul>
<h2>5. 员工培训要求</h2>
<p>所有处理兑换交易的员工须每年接受AML培训。培训记录须保存以备FIU检查。新员工在处理任何交易前必须完成培训。</p>
<h2>6. 监管检查</h2>
<p>FIU和企划财政部定期进行检查。常见问题：CDD记录不足、CTR申报缺失、AML政策文件过期。</p>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 小型单人换钱业务也需要完整的AML政策吗？</p><p class="faq-a">A. 需要。所有已登记的换钱业，无论规模大小，都必须维持AML内部控制政策。</p></div>
<div class="faq-item"><p class="faq-q">Q. 如果遗漏CTR申报会怎样？</p><p class="faq-a">A. 迟报或漏报CTR可能导致罚款，并可能触发更广泛的合规调查。</p></div>
</div>
<div class="cta-box"><h3>完善您的AML合规制度</h3><p>Vision行政士事务所起草AML内部控制文件并提供合规系统建议。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'currency-exchange-aml-internal-control-guide',
    locale: 'ja',
    title: '韓国外貨両替業AML内部統制基準実務ガイド2026',
    metaTitle: '韓国外貨両替業AMLコンプライアンス2026 — 内部統制基準ガイド',
    metaDescription: '韓国外貨両替業のAML（マネーロンダリング防止）内部統制基準の作成・運用方法。STR疑わしい取引報告、CTR高額現金取引報告、CDD顧客確認義務を解説。行政書士による無料初回相談あり。',
    category: '金融',
    excerpt: '韓国外貨両替業のAML内部統制基準実務ガイド — STR、CTR、CDDの義務と内部ポリシー要件を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>なぜAMLコンプライアンスが重要か</li><li>3つの主要なAML義務</li><li>内部統制ポリシー文書</li><li>取引モニタリングシステム</li><li>従業員研修要件</li><li>監督当局の検査</li><li>よくある質問</li></ol></div>
<h2>1. なぜAMLコンプライアンスが重要か</h2>
<p>韓国の外貨両替業は、特定金融取引情報の報告及び利用法に基づき<strong>金融取引報告機関</strong>に指定されています。不遵守は免許取消、刑事訴追、多額の罰金につながる可能性があります。</p>
<h2>2. 3つの主要なAML義務</h2>
<ul><li><strong>顧客確認（CDD/EDD）：</strong>すべての取引で顧客の本人確認を実施；高リスク顧客には強化デューデリジェンスを実施</li><li><strong>疑わしい取引報告（STR）：</strong>マネーロンダリングが疑われる取引を3日以内に金融情報分析院（FIU）に報告</li><li><strong>高額現金取引報告（CTR）：</strong>顧客1人あたり1日1千万ウォン以上の現金取引を30日以内にFIUへ報告</li></ul>
<h2>3. 内部統制ポリシー文書</h2>
<p>必要なAMLポリシー文書には：リスク評価方法、CDD手順、STR/CTR報告ワークフロー、記録保管規則（最低5年間）、従業員研修スケジュール、コンプライアンス担当者の指定を含める必要があります。</p>
<h2>4. 取引モニタリングシステム</h2>
<ul><li>日次CTR閾値アラート</li><li>構造化取引（CTRを回避するための取引分割）のパターン検出</li><li>政治的有力者（PEP）スクリーニング</li><li>制裁リスト照合（国連、OFACなど）</li></ul>
<h2>5. 従業員研修要件</h2>
<p>両替取引を扱うすべての従業員は年次AML研修を受けなければなりません。研修記録はFIU検査のために保持する必要があります。新入社員は取引を扱う前に研修を受けること。</p>
<h2>6. 監督当局の検査</h2>
<p>FIUと企画財政部が定期的に検査を行います。よく指摘される事項：不十分なCDD記録、CTR申告の不備、古いAMLポリシー文書。</p>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 小規模な一人経営の両替業にも完全なAMLポリシーが必要ですか？</p><p class="faq-a">A. はい。登録されたすべての外貨両替業はその規模に関係なく、AML内部統制ポリシーを維持する必要があります。</p></div>
<div class="faq-item"><p class="faq-q">Q. CTR申告を見逃した場合はどうなりますか？</p><p class="faq-a">A. CTR申告の遅延や未提出は罰金につながり、より広範なコンプライアンス調査を引き起こす可能性があります。</p></div>
</div>
<div class="cta-box"><h3>AMLポリシーを整備しましょう</h3><p>ビジョン行政書士事務所がAML内部統制文書を作成しコンプライアンスシステムをアドバイスします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 21: haccp-post-certification-management-guide ────────────────────
  {
    slug: 'haccp-post-certification-management-guide',
    locale: 'en',
    title: 'HACCP Post-Certification Management in Korea — Surveillance & Renewal Guide 2026',
    metaTitle: 'HACCP Post-Certification Korea 2026 — Surveillance Audit & Renewal Guide',
    metaDescription: 'How to maintain HACCP certification in Korea after initial approval. Annual surveillance audits, record-keeping, common revocation cases, and renewal tips. Free consultation.',
    category: 'Food',
    excerpt: 'A guide to maintaining HACCP certification in Korea after initial approval — covering annual surveillance audits, record-keeping requirements, and common reasons for revocation.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Post-Certification Obligations Overview</li><li>Annual Surveillance Audit</li><li>Triennial Re-Certification</li><li>Required Ongoing Records</li><li>Common Revocation Cases</li><li>Process Change Reporting</li><li>FAQ</li></ol></div>
<h2>1. Post-Certification Obligations Overview</h2>
<p>HACCP certification is not a one-time achievement. KHAS conducts annual surveillance audits and a full re-certification audit every three years. Failure to pass can result in certification suspension or revocation.</p>
<h2>2. Annual Surveillance Audit</h2>
<p>Each year, a KHAS auditor visits to verify that the HACCP plan is being implemented as documented. Auditors check CCP monitoring logs, corrective action records, calibration records, and staff training documentation.</p>
<h2>3. Triennial Re-Certification</h2>
<p>Every three years, the full HACCP certification process is repeated. The HACCP plan is re-reviewed, updated if needed, and subject to a comprehensive on-site audit.</p>
<h2>4. Required Ongoing Records</h2>
<ul><li>Daily CCP monitoring logs (temperature, time, pH, etc.)</li><li>Corrective action reports for any CCP deviations</li><li>Cleaning and sanitation records</li><li>Pest control logs</li><li>Employee training and illness records</li><li>Supplier certification and ingredient records</li></ul>
<h2>5. Common Revocation Cases</h2>
<ul><li>Failure to maintain CCP monitoring records</li><li>Undocumented process changes that affect critical limits</li><li>Repeated corrective action failures with no root cause analysis</li><li>Significant facility non-conformities found during surprise inspection</li></ul>
<h2>6. Process Change Reporting</h2>
<p>Any significant change to production processes, facility layout, or product formulation must be reported to KHAS and the HACCP plan updated before implementation. Undocumented changes are a major audit finding.</p>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. What happens if we fail the annual surveillance audit?</p><p class="faq-a">A. You will receive a corrective action plan with a deadline. If unresolved, certification may be suspended pending re-audit.</p></div>
<div class="faq-item"><p class="faq-q">Q. How long must records be kept?</p><p class="faq-a">A. A minimum of 2 years from the date of production for most records.</p></div>
</div>
<div class="cta-box"><h3>Stay HACCP Certified</h3><p>Vision Administrative Office assists with pre-audit preparation and corrective action planning. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'haccp-post-certification-management-guide',
    locale: 'zh',
    title: '韩国HACCP认证后期管理指南2026 — 监督审核与续期',
    metaTitle: '韩国HACCP认证后管理2026 — 监督审核与续期指南',
    metaDescription: '在韩国获得HACCP认证后如何维持认证。年度监督审核、记录保存、常见吊销案例及续期技巧。专业行政士免费初次咨询。',
    category: '食品',
    excerpt: '韩国HACCP认证后期维持指南，涵盖年度监督审核、记录保存要求及常见吊销原因。',
    content: `<div class="toc"><p>目录</p><ol><li>认证后义务概述</li><li>年度监督审核</li><li>三年期再认证</li><li>持续记录要求</li><li>常见吊销案例</li><li>工艺变更报告</li><li>常见问题</li></ol></div>
<h2>1. 认证后义务概述</h2>
<p>HACCP认证并非一次性成就。KHAS每年进行监督审核，并每三年进行一次完整再认证审核。未通过审核可能导致认证被暂停或吊销。</p>
<h2>2. 年度监督审核</h2>
<p>每年，KHAS审核员会到访核查HACCP计划是否按文件执行。审核员检查CCP监控日志、纠正措施记录、校准记录及员工培训文件。</p>
<h2>3. 三年期再认证</h2>
<p>每三年重复完整的HACCP认证流程，重新审查并更新HACCP计划，进行全面现场审核。</p>
<h2>4. 持续记录要求</h2>
<ul><li>每日CCP监控日志（温度、时间、pH值等）</li><li>任何CCP偏差的纠正措施报告</li><li>清洁和消毒记录</li><li>病虫害防治记录</li><li>员工培训及健康记录</li><li>供应商认证及原料记录</li></ul>
<h2>5. 常见吊销案例</h2>
<ul><li>未能维持CCP监控记录</li><li>影响关键限值的工艺变更未予记录</li><li>反复出现纠正措施失效且无根本原因分析</li><li>突击检查中发现重大设施不符合项</li></ul>
<h2>6. 工艺变更报告</h2>
<p>生产工艺、设施布局或产品配方的任何重大变更，须在实施前向KHAS报告并更新HACCP计划。未记录的变更是重大审核发现。</p>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 如果年度监督审核不通过会怎样？</p><p class="faq-a">A. 将收到带有期限的纠正措施计划。若未能解决，认证可能被暂停，等待重新审核。</p></div>
<div class="faq-item"><p class="faq-q">Q. 记录需要保存多长时间？</p><p class="faq-a">A. 大多数记录自生产之日起至少保存2年。</p></div>
</div>
<div class="cta-box"><h3>保持HACCP认证有效</h3><p>Vision行政士事务所协助审核前准备及纠正措施规划。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'haccp-post-certification-management-guide',
    locale: 'ja',
    title: '韓国HACCP認証後管理ガイド2026 — サーベイランス審査と更新',
    metaTitle: '韓国HACCP認証後管理2026 — サーベイランス審査・更新ガイド',
    metaDescription: '韓国でHACCP認証取得後に認証を維持する方法。年次サーベイランス審査、記録保持要件、よくある取消事例と更新のコツ。行政書士による無料初回相談あり。',
    category: '食品',
    excerpt: '韓国HACCP認証の取得後に認証を維持するためのガイド — 年次サーベイランス審査、記録保持要件、よくある取消理由を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>認証後の義務概要</li><li>年次サーベイランス審査</li><li>3年ごとの再認証</li><li>継続的な記録要件</li><li>よくある取消事例</li><li>工程変更の報告</li><li>よくある質問</li></ol></div>
<h2>1. 認証後の義務概要</h2>
<p>HACCP認証は一度取得すれば終わりではありません。KHASは毎年サーベイランス審査を実施し、3年ごとに完全な再認証審査を行います。合格しない場合、認証の一時停止または取消につながる可能性があります。</p>
<h2>2. 年次サーベイランス審査</h2>
<p>毎年、KHASの審査員が訪問し、HACCP計画が文書どおりに実施されているか確認します。CCP監視ログ、是正措置記録、校正記録、従業員研修記録を確認します。</p>
<h2>3. 3年ごとの再認証</h2>
<p>3年ごとにHACCP認証プロセス全体を繰り返します。HACCP計画が再審査・更新され、包括的な現地審査が行われます。</p>
<h2>4. 継続的な記録要件</h2>
<ul><li>日次CCP監視ログ（温度、時間、pHなど）</li><li>CCP逸脱に対する是正措置報告書</li><li>清掃・衛生管理記録</li><li>害虫防除ログ</li><li>従業員研修および健康記録</li><li>サプライヤー認証と原材料記録</li></ul>
<h2>5. よくある取消事例</h2>
<ul><li>CCP監視記録の未保持</li><li>重要限界に影響する工程変更の未記録</li><li>根本原因分析なしの是正措置失敗の繰り返し</li><li>抜き打ち検査での重大な施設不適合の発見</li></ul>
<h2>6. 工程変更の報告</h2>
<p>製造工程、施設レイアウト、製品処方の重大な変更は、実施前にKHASに報告しHACCP計画を更新する必要があります。未記録の変更は重大な審査指摘事項となります。</p>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 年次サーベイランス審査に失格した場合どうなりますか？</p><p class="faq-a">A. 期限付きの是正措置計画が渡されます。未解決の場合、再審査まで認証が一時停止される可能性があります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 記録はどのくらい保管が必要ですか？</p><p class="faq-a">A. ほとんどの記録は製造日から最低2年間の保管が必要です。</p></div>
</div>
<div class="cta-box"><h3>HACCP認証を維持しましょう</h3><p>ビジョン行政書士事務所が審査前準備と是正措置計画をサポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 22: building-usage-change-case-studies-guide ─────────────────────
  {
    slug: 'building-usage-change-case-studies-guide',
    locale: 'en',
    title: 'Building Use Change Case Studies in Korea — Retail to Food, Warehouse, Guesthouse 2026',
    metaTitle: 'Korea Building Use Change Case Studies 2026 — Real Examples',
    metaDescription: 'Real-world case studies of building use change approvals in Korea — converting neighborhood commercial facilities to food processing, guesthouses, and warehouses. Free consultation.',
    category: 'Real Estate',
    excerpt: 'Real-world examples of building use change processes in Korea — from neighborhood commercial facilities to food manufacturing, urban guesthouses, and warehouses.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Why Case Studies Matter</li><li>Case 1: Commercial to Food Manufacturing</li><li>Case 2: Retail to Urban Guesthouse</li><li>Case 3: Office to Warehouse</li><li>Common Challenges Across Cases</li><li>Key Success Factors</li><li>FAQ</li></ol></div>
<h2>1. Why Case Studies Matter</h2>
<p>Building use change in Korea involves navigating zoning laws, building codes, fire safety, and health regulations simultaneously. Real cases illustrate the common challenges and how they were resolved.</p>
<h2>2. Case 1: Commercial to Food Manufacturing</h2>
<p><strong>Situation:</strong> A neighborhood commercial facility (제2종 근린생활시설) converted to a food processing facility. <strong>Key challenge:</strong> Drainage and ventilation upgrades required. <strong>Resolution:</strong> Architect designed compliant ventilation system, health permit followed building use change approval. <strong>Timeline:</strong> 4 months total.</p>
<h2>3. Case 2: Retail to Urban Guesthouse</h2>
<p><strong>Situation:</strong> Ground-floor retail space converted to foreign tourist guesthouse. <strong>Key challenge:</strong> Building use was commercial, not residential — required change to tourist accommodation category. <strong>Resolution:</strong> Filed for use change and tourism business registration simultaneously. Fire safety upgrade was the main cost. <strong>Timeline:</strong> 3 months.</p>
<h2>4. Case 3: Office to Warehouse</h2>
<p><strong>Situation:</strong> 4th-floor office converted to storage/warehouse. <strong>Key challenge:</strong> Floor load capacity documentation required. <strong>Resolution:</strong> Structural engineer assessment plus fire safety upgrade. Use change approved without full building permit (notification-only category). <strong>Timeline:</strong> 6 weeks.</p>
<h2>5. Common Challenges Across Cases</h2>
<ul><li>Fire safety upgrades are the most common and costly requirement</li><li>Zoning compatibility — not all areas allow all uses</li><li>Coordinating use change timing with business license applications</li><li>Building register update after completion (often forgotten)</li></ul>
<h2>6. Key Success Factors</h2>
<ul><li>Pre-consult with the local building department before committing to a lease</li><li>Engage a licensed architect early</li><li>Allow 3–6 months for permit + business license + inspection</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a tenant (not the building owner) apply for a use change?</p><p class="faq-a">A. Yes, but owner consent is required. The application should be filed by the owner or with their written consent.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if the building's current use is already what I need?</p><p class="faq-a">A. Then no use change is needed. But confirm the building register matches the intended use before signing any lease.</p></div>
</div>
<div class="cta-box"><h3>Plan Your Building Use Change</h3><p>Vision Administrative Office coordinates use change permits and downstream business licenses. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'building-usage-change-case-studies-guide',
    locale: 'zh',
    title: '韩国建筑物用途变更案例指南2026 — 近邻商业、食品加工、民宿实务',
    metaTitle: '韩国建筑物用途变更案例2026 — 真实案例解析',
    metaDescription: '韩国建筑物用途变更实际案例分析，涵盖近邻商业设施转为食品加工、外国人民宿及仓储用途的审批过程。专业行政士免费初次咨询。',
    category: '房产/建筑',
    excerpt: '韩国建筑物用途变更真实案例，包括从近邻商业设施转为食品制造、外国人城市民宿及仓储用途的全过程。',
    content: `<div class="toc"><p>目录</p><ol><li>为什么案例分析很重要</li><li>案例一：商业转食品制造</li><li>案例二：零售转城市民宿</li><li>案例三：办公室转仓储</li><li>各案例常见挑战</li><li>成功关键因素</li><li>常见问题</li></ol></div>
<h2>1. 为什么案例分析很重要</h2>
<p>韩国建筑物用途变更需要同时应对分区法规、建筑规范、消防安全和卫生法规。真实案例能直观展示常见挑战及解决方法。</p>
<h2>2. 案例一：商业转食品制造</h2>
<p><strong>情况：</strong>第二类近邻商业设施转为食品加工设施。<strong>主要挑战：</strong>需要升级排水和通风系统。<strong>解决方案：</strong>建筑师设计了合规通风系统，卫生许可跟随建筑用途变更审批后办理。<strong>时间：</strong>共4个月。</p>
<h2>3. 案例二：零售转城市民宿</h2>
<p><strong>情况：</strong>一楼零售空间转为外国游客民宿。<strong>主要挑战：</strong>建筑用途为商业而非住宅，须变更为旅游住宿类别。<strong>解决方案：</strong>同时申请用途变更和旅游业登记，消防安全升级为主要成本。<strong>时间：</strong>3个月。</p>
<h2>4. 案例三：办公室转仓储</h2>
<p><strong>情况：</strong>4楼办公室转为储物仓储。<strong>主要挑战：</strong>需要楼层承重容量文件。<strong>解决方案：</strong>结构工程师评估加消防安全升级，用途变更无需完整建筑许可（仅申报类）。<strong>时间：</strong>6周。</p>
<h2>5. 各案例常见挑战</h2>
<ul><li>消防安全升级是最常见且成本最高的要求</li><li>分区兼容性——并非所有区域允许所有用途</li><li>协调用途变更时机与营业许可申请</li><li>完工后更新建筑物台账（常被忽视）</li></ul>
<h2>6. 成功关键因素</h2>
<ul><li>签订租约前预先与当地建筑部门协商</li><li>尽早聘请有执照的建筑师</li><li>预留3~6个月用于许可证+营业执照+检查</li></ul>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 租户（非建筑物所有者）可以申请用途变更吗？</p><p class="faq-a">A. 可以，但需要所有者同意。申请应由所有者提交或附有其书面同意书。</p></div>
<div class="faq-item"><p class="faq-q">Q. 如果建筑当前用途已符合我的需求怎么办？</p><p class="faq-a">A. 则无需申请用途变更。但在签署任何租约前，请确认建筑物台账与预期用途一致。</p></div>
</div>
<div class="cta-box"><h3>规划您的建筑物用途变更</h3><p>Vision行政士事务所协调用途变更许可及后续营业执照申请。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'building-usage-change-case-studies-guide',
    locale: 'ja',
    title: '韓国建築物用途変更事例ガイド2026 — 近隣生活施設・食品加工・民泊の実務',
    metaTitle: '韓国建築物用途変更事例2026 — 実際の事例解説',
    metaDescription: '韓国での建築物用途変更の実際の事例分析 — 近隣商業施設から食品加工、都市民泊、倉庫への変更承認プロセス。行政書士による無料初回相談あり。',
    category: '不動産/建築',
    excerpt: '韓国の建築物用途変更の実際の事例 — 近隣生活施設から食品製造業、外国人都市民泊、倉庫への転換プロセスを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>なぜ事例分析が重要か</li><li>事例1：商業施設から食品製造へ</li><li>事例2：小売から都市民泊へ</li><li>事例3：オフィスから倉庫へ</li><li>各事例に共通する課題</li><li>成功の重要因子</li><li>よくある質問</li></ol></div>
<h2>1. なぜ事例分析が重要か</h2>
<p>韓国での建築物用途変更は、用途地域法、建築基準、消防安全、衛生規制を同時に対応する必要があります。実際の事例は一般的な課題とその解決方法を具体的に示しています。</p>
<h2>2. 事例1：商業施設から食品製造へ</h2>
<p><strong>状況：</strong>第2種近隣生活施設を食品加工施設に変更。<strong>主な課題：</strong>排水・換気システムのアップグレードが必要。<strong>解決策：</strong>建築士が適法な換気システムを設計。用途変更許可後に衛生許可を取得。<strong>期間：</strong>合計4ヶ月。</p>
<h2>3. 事例2：小売から都市民泊へ</h2>
<p><strong>状況：</strong>1階の小売スペースを外国人観光客向け民泊施設に変更。<strong>主な課題：</strong>建物用途が商業用で住宅用ではなかったため、観光宿泊カテゴリーへの変更が必要。<strong>解決策：</strong>用途変更と観光業登録を同時に申請。消防安全アップグレードが主なコスト。<strong>期間：</strong>3ヶ月。</p>
<h2>4. 事例3：オフィスから倉庫へ</h2>
<p><strong>状況：</strong>4階のオフィスを保管・倉庫用途に変更。<strong>主な課題：</strong>床の積載荷重能力の文書が必要。<strong>解決策：</strong>構造エンジニアの評価と消防安全アップグレード。用途変更は完全な建築許可が不要（届出のみのカテゴリー）。<strong>期間：</strong>6週間。</p>
<h2>5. 各事例に共通する課題</h2>
<ul><li>消防安全アップグレードが最も一般的で費用のかかる要件</li><li>用途地域の適合性 — すべてのエリアがすべての用途を許可するわけではない</li><li>用途変更のタイミングと営業許可申請の調整</li><li>完了後の建築物台帳の更新（しばしば忘れられる）</li></ul>
<h2>6. 成功の重要因子</h2>
<ul><li>賃貸契約を結ぶ前に地方建築部門と事前協議する</li><li>早めに一級建築士を起用する</li><li>許可 + 営業許可 + 検査で3〜6ヶ月の余裕を見る</li></ul>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. テナント（建物所有者ではない）が用途変更を申請できますか？</p><p class="faq-a">A. はい。ただし所有者の同意が必要です。申請は所有者が行うか、所有者の書面による同意を添付して提出してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 建物の現在の用途が必要なものと同じ場合はどうなりますか？</p><p class="faq-a">A. その場合、用途変更は不要です。ただし、賃貸契約を結ぶ前に建築物台帳が意図した用途と一致していることを確認してください。</p></div>
</div>
<div class="cta-box"><h3>建築物用途変更を計画しましょう</h3><p>ビジョン行政書士事務所が用途変更許可とその後の営業許可を一貫してサポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 23: narajangteo-bidding-price-strategy-guide ──────────────────────
  {
    slug: 'narajangteo-bidding-price-strategy-guide',
    locale: 'en',
    title: 'Korea Government Procurement Bidding Price Strategy — Narajangteo 2026 Guide',
    metaTitle: 'Narajangteo Bidding Strategy Korea 2026 — How to Win Public Tenders',
    metaDescription: 'How to set competitive bid prices on Korea\'s Narajangteo procurement platform. Lowest-price vs. comprehensive evaluation, price calculation tips. Free consultation.',
    category: 'Government Procurement',
    excerpt: 'Strategic guidance on pricing bids for Korea\'s government procurement platform (Narajangteo) — covering evaluation methods, price calculation tips, and common mistakes.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>How Korean Government Bids Are Evaluated</li><li>Lowest-Price Bidding (최저가 낙찰)</li><li>Comprehensive Evaluation (종합심사)</li><li>Optimal Price Calculation</li><li>Common Bidding Mistakes</li><li>Certification Bonuses</li><li>FAQ</li></ol></div>
<h2>1. How Korean Government Bids Are Evaluated</h2>
<p>Korean public procurement bids are evaluated under two main systems: <strong>lowest-price</strong> (below a certain contract value) and <strong>comprehensive evaluation</strong> (above KRW 100M for goods, higher for construction).</p>
<h2>2. Lowest-Price Bidding (최저가 낙찰)</h2>
<p>For low-value contracts, the lowest valid bidder wins. The <strong>preliminary price (예정가격)</strong> is set by the procuring agency. Bids must be within a valid range (typically 87–100% of the preliminary price). Bids below the floor are disqualified as "abnormally low."</p>
<h2>3. Comprehensive Evaluation (종합심사)</h2>
<p>For larger contracts, price score is combined with technical score. Price typically accounts for 20–40% of the total score. A lower price improves the price score but must be balanced against technical quality.</p>
<h2>4. Optimal Price Calculation</h2>
<ul><li>Research past contract awards in the same category to gauge typical winning prices</li><li>Calculate your cost floor including overhead and profit margin</li><li>For lowest-price bids: aim for the 87–92% range of estimated preliminary price</li><li>Use Narajangteo's bid analysis tool for historical data</li></ul>
<h2>5. Common Bidding Mistakes</h2>
<ul><li>Bidding below the disqualification floor</li><li>Missing the bid submission deadline (late bids are rejected with no exceptions)</li><li>Incorrect digital certificate or expired certificate</li><li>Failing to attach required technical documents in comprehensive evaluation</li></ul>
<h2>6. Certification Bonuses</h2>
<p>Certified companies receive scoring bonuses: SME certification, Women-Owned Business, Venture/Innobiz, and others add points to comprehensive evaluations and may grant direct purchase preferences.</p>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can I revise my bid after submission?</p><p class="faq-a">A. No. Bids are sealed and irreversible once submitted on Narajangteo.</p></div>
<div class="faq-item"><p class="faq-q">Q. How do I find the preliminary price?</p><p class="faq-a">A. The preliminary price is revealed after bid opening. Before bidding, estimate based on the specifications and historical data.</p></div>
</div>
<div class="cta-box"><h3>Win More Government Contracts</h3><p>Vision Administrative Office advises on bid strategy and certification portfolio. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'narajangteo-bidding-price-strategy-guide',
    locale: 'zh',
    title: '韩国政府采购Narajangteo投标价格策略指南2026',
    metaTitle: 'Narajangteo投标策略韩国2026 — 如何赢得政府招标',
    metaDescription: '如何在韩国Narajangteo政府采购平台设定竞争性投标价格。最低价与综合评审、价格计算技巧详解。专业行政士免费初次咨询。',
    category: '政府采购',
    excerpt: '韩国政府采购Narajangteo平台投标价格策略指南，涵盖评审方式、价格计算技巧及常见错误。',
    content: `<div class="toc"><p>目录</p><ol><li>韩国政府投标的评审方式</li><li>最低价中标</li><li>综合评审</li><li>最优价格计算</li><li>常见投标错误</li><li>认证加分</li><li>常见问题</li></ol></div>
<h2>1. 韩国政府投标的评审方式</h2>
<p>韩国政府采购投标采用两种主要评审制度：<strong>最低价</strong>（适用于特定合同金额以下）和<strong>综合评审</strong>（货物超过1亿韩元、建筑工程金额更高时适用）。</p>
<h2>2. 最低价中标</h2>
<p>小额合同中，最低有效投标者中标。采购机构设定<strong>预定价格（예정가격）</strong>，投标须在有效范围内（通常为预定价格的87%~100%）。低于下限的投标因"异常低价"而被取消资格。</p>
<h2>3. 综合评审</h2>
<p>较大合同中，价格得分与技术得分综合计算。价格通常占总分的20%~40%。较低价格可提高价格得分，但须与技术质量平衡。</p>
<h2>4. 最优价格计算</h2>
<ul><li>研究同类别过往合同中标记录，了解典型中标价格</li><li>计算包含管理费用和利润的成本底线</li><li>最低价投标：目标为预估预定价格的87%~92%范围</li><li>使用Narajangteo的投标分析工具获取历史数据</li></ul>
<h2>5. 常见投标错误</h2>
<ul><li>投标价格低于取消资格下限</li><li>错过投标截止时间（迟交标书无例外地被拒绝）</li><li>数字证书错误或已过期</li><li>综合评审中未附所需技术文件</li></ul>
<h2>6. 认证加分</h2>
<p>已认证企业在综合评审中可获得加分：中小企业认证、女性企业认证、风险/创新企业认证等可增加评分，并可能享有直接采购优先权。</p>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 提交后可以修改投标吗？</p><p class="faq-a">A. 不可以。在Narajangteo提交后，标书是密封且不可更改的。</p></div>
<div class="faq-item"><p class="faq-q">Q. 如何了解预定价格？</p><p class="faq-a">A. 预定价格在开标后公布。投标前，根据规格和历史数据进行估算。</p></div>
</div>
<div class="cta-box"><h3>赢得更多政府合同</h3><p>Vision行政士事务所提供投标策略及认证组合建议。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'narajangteo-bidding-price-strategy-guide',
    locale: 'ja',
    title: '韓国政府調達ナラジャンテ入札価格戦略ガイド2026',
    metaTitle: 'ナラジャンテ入札戦略韓国2026 — 公共入札で勝つ方法',
    metaDescription: '韓国のナラジャンテ政府調達プラットフォームで競争力のある入札価格を設定する方法。最低価格落札と総合審査、価格計算のコツを解説。行政書士による無料初回相談あり。',
    category: '政府調達',
    excerpt: '韓国政府調達プラットフォーム（ナラジャンテ）への入札価格戦略ガイド — 評価方式、価格計算のコツ、よくある失敗を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>韓国政府入札の評価方式</li><li>最低価格落札</li><li>総合審査</li><li>最適価格の計算</li><li>よくある入札ミス</li><li>認証ボーナス</li><li>よくある質問</li></ol></div>
<h2>1. 韓国政府入札の評価方式</h2>
<p>韓国の公共調達入札は2つの主要制度で評価されます：<strong>最低価格</strong>（一定の契約金額以下）と<strong>総合審査</strong>（物品は1億ウォン超、建設工事はさらに高い金額から）。</p>
<h2>2. 最低価格落札</h2>
<p>小額契約では最低有効入札者が落札します。発注機関が<strong>予定価格（예정가격）</strong>を設定します。入札は有効範囲内（通常は予定価格の87〜100%）でなければなりません。下限を下回る入札は「異常低価格」として失格となります。</p>
<h2>3. 総合審査</h2>
<p>大型契約では価格スコアと技術スコアを総合評価します。価格は通常総スコアの20〜40%を占めます。低い価格は価格スコアを高めますが、技術品質とのバランスが重要です。</p>
<h2>4. 最適価格の計算</h2>
<ul><li>同カテゴリーの過去の契約落札実績を調査し、典型的な落札価格を把握する</li><li>間接費と利益率を含むコストの下限を計算する</li><li>最低価格入札：推定予定価格の87〜92%を目標にする</li><li>ナラジャンテの入札分析ツールで履歴データを活用</li></ul>
<h2>5. よくある入札ミス</h2>
<ul><li>失格ラインを下回る入札価格</li><li>入札締切日時の超過（遅延入札は例外なく却下）</li><li>電子証明書の誤りや期限切れ</li><li>総合審査で必要な技術文書の添付漏れ</li></ul>
<h2>6. 認証ボーナス</h2>
<p>認定企業は総合審査でボーナス点を得られます：中小企業認定、女性企業認証、ベンチャー/イノビズなどが加点され、少額随意契約の優先権が付与されることもあります。</p>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 提出後に入札を修正できますか？</p><p class="faq-a">A. いいえ。ナラジャンテに提出された入札書は封入状態となり取り消しできません。</p></div>
<div class="faq-item"><p class="faq-q">Q. 予定価格はどうやって知るのですか？</p><p class="faq-a">A. 予定価格は開札後に公表されます。入札前は仕様書と過去データに基づいて推定します。</p></div>
</div>
<div class="cta-box"><h3>政府契約をより多く獲得しましょう</h3><p>ビジョン行政書士事務所が入札戦略と認証ポートフォリオをアドバイスします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 24: corporate-research-lab-agency-risk-guide ─────────────────────
  {
    slug: 'corporate-research-lab-agency-risk-guide',
    locale: 'en',
    title: 'Corporate R&D Lab Registration Risks When Using an Agency — Korea 2026',
    metaTitle: 'Korea Corporate R&D Lab Agency Registration Risks 2026 — What to Watch',
    metaDescription: 'Key risks when using an agency to register a corporate research laboratory in Korea. Common fraudulent practices, IITP audit pitfalls, and how to protect your company. Free consultation.',
    category: 'Business Certification',
    excerpt: 'A guide to the risks of using third-party agencies for corporate R&D lab registration in Korea — common fraud patterns, audit risks, and how to protect your business.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Why Agency-Assisted Registrations Carry Risk</li><li>Common Fraudulent Practices</li><li>IITP Audit Red Flags</li><li>Consequences of Non-Genuine Registration</li><li>How to Verify Agency Legitimacy</li><li>Safe Practices</li><li>FAQ</li></ol></div>
<h2>1. Why Agency-Assisted Registrations Carry Risk</h2>
<p>IITP recognition for corporate research labs is in high demand due to the significant tax benefits. Some agencies promise quick registration by inflating researcher credentials or listing phantom researchers — exposing companies to criminal liability.</p>
<h2>2. Common Fraudulent Practices</h2>
<ul><li>Listing employees with no research background as "researchers"</li><li>Using researchers from other companies temporarily</li><li>Creating fake research plans that do not reflect actual R&D activities</li><li>Registering a "research facility" that is just a storage room</li></ul>
<h2>3. IITP Audit Red Flags</h2>
<ul><li>Researcher doesn't know their research project when auditors ask</li><li>Research space has no equipment appropriate to the stated research</li><li>Research expenditure records don't match the registered activities</li><li>Researcher employment records show they were hired only briefly before registration</li></ul>
<h2>4. Consequences of Non-Genuine Registration</h2>
<ul><li>IITP recognition cancelled</li><li>Tax credits claimed must be repaid with interest and penalties</li><li>Criminal charges for tax fraud are possible</li><li>Company flagged for heightened scrutiny in all future applications</li></ul>
<h2>5. How to Verify Agency Legitimacy</h2>
<ul><li>Check if the agency is a licensed administrative scrivener office (행정사 사무소)</li><li>Request references from past clients</li><li>Avoid agencies that promise results without reviewing your actual R&D activities</li></ul>
<h2>6. Safe Practices</h2>
<ul><li>Only register researchers who are genuinely employed and conduct R&D</li><li>Document all research activities with dated records</li><li>Have a licensed administrative scrivener prepare the application honestly</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can we retroactively fix a registration that was done improperly?</p><p class="faq-a">A. In some cases, voluntary disclosure and correction is possible. Consult a specialist before an audit finds the issue.</p></div>
<div class="faq-item"><p class="faq-q">Q. Are all agencies risky?</p><p class="faq-a">A. No. Licensed administrative scrivener offices operate under professional regulations. The risk is with unlicensed brokers.</p></div>
</div>
<div class="cta-box"><h3>Register Your R&D Lab the Right Way</h3><p>Vision Administrative Office is a licensed administrative scrivener office with clean compliance practices. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'corporate-research-lab-agency-risk-guide',
    locale: 'zh',
    title: '韩国企业附属研究所代理登记风险指南2026',
    metaTitle: '韩国企业研究所代理登记风险2026 — 注意事项指南',
    metaDescription: '在韩国委托代理机构登记企业附属研究所的主要风险。常见欺诈行为、IITP审核陷阱及如何保护企业权益。专业行政士免费初次咨询。',
    category: '企业认证',
    excerpt: '韩国企业附属研究所委托第三方代理登记的风险指南，包括常见欺诈模式、审核风险及企业保护措施。',
    content: `<div class="toc"><p>目录</p><ol><li>为什么委托代理登记有风险</li><li>常见欺诈行为</li><li>IITP审核警示信号</li><li>虚假登记的后果</li><li>如何验证代理机构合法性</li><li>安全做法</li><li>常见问题</li></ol></div>
<h2>1. 为什么委托代理登记有风险</h2>
<p>由于税收优惠显著，IITP企业研究所认定需求旺盛。部分代理机构通过虚报研究人员资质或列入虚假研究人员来承诺快速登记，使企业面临刑事责任风险。</p>
<h2>2. 常见欺诈行为</h2>
<ul><li>将无研究背景的员工列为"研究人员"</li><li>临时借用其他公司的研究人员</li><li>创建不反映实际研发活动的虚假研究计划</li><li>将普通储物间登记为"研究设施"</li></ul>
<h2>3. IITP审核警示信号</h2>
<ul><li>审核员询问时，研究人员不了解自己的研究项目</li><li>研究空间缺乏与申报研究内容相适应的设备</li><li>研发支出记录与登记活动不符</li><li>研究人员就业记录显示其在登记前不久才被雇用</li></ul>
<h2>4. 虚假登记的后果</h2>
<ul><li>IITP认定被撤销</li><li>已申报的税收抵免须连同利息和罚款一并偿还</li><li>可能面临税务欺诈刑事指控</li><li>公司在未来所有申请中被标记接受更严格审查</li></ul>
<h2>5. 如何验证代理机构合法性</h2>
<ul><li>核查代理机构是否为持牌行政士事务所</li><li>向过往客户索取参考意见</li><li>避免不审查实际研发活动就承诺结果的代理机构</li></ul>
<h2>6. 安全做法</h2>
<ul><li>只登记真正在职且从事研发的研究人员</li><li>以日期记录所有研究活动</li><li>委托持牌行政士事务所如实准备申请材料</li></ul>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 我们能追溯修正不当登记吗？</p><p class="faq-a">A. 在某些情况下，主动披露和纠正是可能的。在审核发现问题前，请咨询专业人士。</p></div>
<div class="faq-item"><p class="faq-q">Q. 所有代理机构都有风险吗？</p><p class="faq-a">A. 不是。持牌行政士事务所在专业法规约束下运营。风险主要来自无照中间人。</p></div>
</div>
<div class="cta-box"><h3>以正确方式登记研发实验室</h3><p>Vision行政士事务所是合规运营的持牌行政士事务所。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'corporate-research-lab-agency-risk-guide',
    locale: 'ja',
    title: '韓国企業付設研究所代理登録リスクガイド2026',
    metaTitle: '韓国企業研究所代理登録リスク2026 — 注意すべき点',
    metaDescription: '韓国で企業付設研究所を代理機関に登録委託する際の主なリスク。よくある不正行為、IITPの審査の落とし穴、企業保護の方法を解説。行政書士による無料初回相談あり。',
    category: '企業認証',
    excerpt: '韓国の企業付設研究所登録を第三者機関に委託する際のリスクガイド — よくある不正パターン、審査リスク、企業を守る方法を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>なぜ代理登録にリスクがあるか</li><li>よくある不正行為</li><li>IITP審査の警戒サイン</li><li>非正規登録の結果</li><li>代理機関の正当性を確認する方法</li><li>安全な実践方法</li><li>よくある質問</li></ol></div>
<h2>1. なぜ代理登録にリスクがあるか</h2>
<p>大きな税制優遇により、企業付設研究所のIITP認定への需要は高いです。一部の代理機関は研究者資格を水増ししたり、架空の研究者を登録したりすることで迅速な登録を約束し、会社を刑事責任にさらします。</p>
<h2>2. よくある不正行為</h2>
<ul><li>研究背景のない従業員を「研究者」として登録</li><li>他社の研究者を一時的に借用</li><li>実際の研究開発活動を反映しない虚偽の研究計画の作成</li><li>単なる物置を「研究施設」として登録</li></ul>
<h2>3. IITP審査の警戒サイン</h2>
<ul><li>審査員の質問に対して研究者が自分の研究プロジェクトを知らない</li><li>研究スペースに申告した研究に適した設備がない</li><li>研究費の記録が登録活動と一致しない</li><li>研究者の雇用記録が登録直前に採用されたことを示している</li></ul>
<h2>4. 非正規登録の結果</h2>
<ul><li>IITP認定の取消</li><li>申告した税額控除は利息・ペナルティとともに返還が必要</li><li>税務詐欺の刑事告発の可能性</li><li>今後のすべての申請で強化審査の対象にフラグが立てられる</li></ul>
<h2>5. 代理機関の正当性を確認する方法</h2>
<ul><li>代理機関が認定行政書士事務所であるか確認する</li><li>過去のクライアントからの参照意見を求める</li><li>実際の研究開発活動を確認せずに結果を約束する機関は避ける</li></ul>
<h2>6. 安全な実践方法</h2>
<ul><li>実際に在籍し研究開発を行っている研究者のみ登録する</li><li>すべての研究活動を日付入りで記録する</li><li>認定行政書士事務所に正直に申請を準備してもらう</li></ul>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 不適切に行われた登録を遡及して修正できますか？</p><p class="faq-a">A. 場合によっては自発的な開示と是正が可能です。審査で問題が発見される前に専門家にご相談ください。</p></div>
<div class="faq-item"><p class="faq-q">Q. すべての代理機関が危険ですか？</p><p class="faq-a">A. いいえ。認定行政書士事務所は専門規制のもとで運営されています。リスクは無許可ブローカーにあります。</p></div>
</div>
<div class="cta-box"><h3>研究所を正しく登録しましょう</h3><p>ビジョン行政書士事務所はクリーンなコンプライアンス実践で運営される認定行政書士事務所です。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 25: cosmetics-manufacturing-registration ──────────────────────────
  {
    slug: 'cosmetics-manufacturing-registration',
    locale: 'en',
    title: 'Cosmetics Manufacturing Registration in Korea — 2026 Complete Guide',
    metaTitle: 'Korea Cosmetics Manufacturing Registration 2026 — MFDS Requirements',
    metaDescription: 'How to register a cosmetics manufacturing business in Korea with the MFDS. Facility requirements, GMP standards, required documents, and application procedure. Free consultation.',
    category: 'Cosmetics',
    excerpt: 'A complete guide to registering a cosmetics manufacturing business in Korea — MFDS facility requirements, GMP standards, and the registration procedure.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Cosmetics Manufacturing Regulation Overview</li><li>Who Must Register</li><li>GMP Facility Requirements</li><li>Required Documents</li><li>Application Procedure</li><li>Post-Registration Obligations</li><li>FAQ</li></ol></div>
<h2>1. Cosmetics Manufacturing Regulation Overview</h2>
<p>Cosmetics manufacturing in Korea is regulated under the <strong>Cosmetics Act</strong>. Both the manufacturer (제조업) and the responsible distributor (책임판매업) must be registered separately with the MFDS.</p>
<h2>2. Who Must Register</h2>
<p>Any company that manufactures cosmetics products in Korea (including OEM/ODM manufacturers) must register as a cosmetics manufacturer. This applies regardless of whether products are sold domestically or exported.</p>
<h2>3. GMP Facility Requirements</h2>
<ul><li>Separate manufacturing zones for different product types</li><li>Clean room or controlled environment for relevant products</li><li>Quality control laboratory</li><li>Raw material and finished goods storage</li><li>Pest control and waste management systems</li><li>GMP (Good Manufacturing Practice) documentation</li></ul>
<h2>4. Required Documents</h2>
<ul><li>Cosmetics manufacturing registration application</li><li>Facility floor plan</li><li>Lease or ownership of manufacturing facility</li><li>GMP compliance documentation</li><li>Representative's ID</li></ul>
<h2>5. Application Procedure</h2>
<ol><li>Prepare facility to meet GMP standards</li><li>Submit application to the regional MFDS office</li><li>On-site facility inspection</li><li>Registration certificate issued (approx. 7–14 business days after inspection)</li></ol>
<h2>6. Post-Registration Obligations</h2>
<ul><li>Maintain GMP records and product quality records</li><li>Report any serious adverse events related to products</li><li>Register individual product formulas with the MFDS (for domestic sales)</li><li>Maintain separate cosmetics manufacturer and responsible distributor registrations</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a foreign cosmetics company manufacture in Korea through a contract manufacturer?</p><p class="faq-a">A. Yes. The Korean contract manufacturer holds the manufacturing registration; the foreign company or its Korean entity holds the responsible distributor registration.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does this registration cover quasi-drugs (의약외품)?</p><p class="faq-a">A. No. Quasi-drugs require a separate pharmaceutical manufacturing or import license.</p></div>
</div>
<div class="cta-box"><h3>Register Your Cosmetics Manufacturing Business</h3><p>Vision Administrative Office handles cosmetics registration and MFDS compliance. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'cosmetics-manufacturing-registration',
    locale: 'zh',
    title: '韩国化妆品制造业登记指南2026',
    metaTitle: '韩国化妆品制造业登记2026 — 食药处GMP要求指南',
    metaDescription: '在韩国向食药处登记化妆品制造业的方法。设施要求、GMP标准、所需材料及申请流程详解。专业行政士免费初次咨询。',
    category: '化妆品',
    excerpt: '韩国化妆品制造业登记完整指南，涵盖食药处设施要求、GMP标准及登记程序。',
    content: `<div class="toc"><p>目录</p><ol><li>化妆品制造监管概述</li><li>哪些企业须登记</li><li>GMP设施要求</li><li>所需材料</li><li>申请流程</li><li>登记后义务</li><li>常见问题</li></ol></div>
<h2>1. 化妆品制造监管概述</h2>
<p>韩国化妆品制造受<strong>《化妆品法》</strong>监管。制造商（제조업）和责任销售商（책임판매업）须分别向食药处（MFDS）进行独立登记。</p>
<h2>2. 哪些企业须登记</h2>
<p>在韩国制造化妆品的任何公司（包括OEM/ODM制造商）都必须以化妆品制造商身份进行登记，无论产品在国内销售还是出口均适用。</p>
<h2>3. GMP设施要求</h2>
<ul><li>不同产品类型的独立制造区</li><li>相关产品的洁净室或受控环境</li><li>质量控制实验室</li><li>原料和成品储存区</li><li>病虫害防治和废物管理系统</li><li>GMP（良好生产规范）文件体系</li></ul>
<h2>4. 所需材料</h2>
<ul><li>化妆品制造业登记申请书</li><li>设施平面图</li><li>制造设施租赁或所有权证明</li><li>GMP符合性文件</li><li>代表身份证</li></ul>
<h2>5. 申请流程</h2>
<ol><li>按GMP标准准备设施</li><li>向地区食药处办公室提交申请</li><li>现场设施检查</li><li>颁发登记证（检查通过后约7~14个工作日）</li></ol>
<h2>6. 登记后义务</h2>
<ul><li>维护GMP记录和产品质量记录</li><li>报告与产品相关的任何严重不良事件</li><li>向食药处登记各产品配方（国内销售）</li><li>分别维护化妆品制造商和责任销售商登记证</li></ul>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 外国化妆品公司可以通过合同制造商在韩国生产吗？</p><p class="faq-a">A. 可以。韩国合同制造商持有制造登记证；外国公司或其韩国实体持有责任销售商登记证。</p></div>
<div class="faq-item"><p class="faq-q">Q. 此登记是否涵盖准药品？</p><p class="faq-a">A. 不涵盖。准药品需要单独的药品制造或进口许可证。</p></div>
</div>
<div class="cta-box"><h3>登记化妆品制造业</h3><p>Vision行政士事务所负责化妆品登记及食药处合规事务。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'cosmetics-manufacturing-registration',
    locale: 'ja',
    title: '韓国化粧品製造業登録ガイド2026',
    metaTitle: '韓国化粧品製造業登録2026 — 食薬処GMP要件ガイド',
    metaDescription: '韓国で食薬処（MFDS）に化粧品製造業を登録する方法。施設要件、GMP基準、必要書類と申請手続きを詳しく解説。行政書士による無料初回相談あり。',
    category: '化粧品',
    excerpt: '韓国の化粧品製造業登録完全ガイド — 食薬処の施設要件、GMP基準、登録手続きを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>化粧品製造規制の概要</li><li>登録が必要な企業</li><li>GMP施設要件</li><li>必要書類</li><li>申請手続き</li><li>登録後の義務</li><li>よくある質問</li></ol></div>
<h2>1. 化粧品製造規制の概要</h2>
<p>韓国の化粧品製造は<strong>化粧品法</strong>で規制されています。製造業者（제조업）と責任販売業者（책임판매업）はそれぞれ別々にMFDSに登録する必要があります。</p>
<h2>2. 登録が必要な企業</h2>
<p>韓国で化粧品を製造するすべての企業（OEM/ODM製造業者を含む）は、化粧品製造業者として登録する必要があります。製品が国内販売か輸出かを問わず適用されます。</p>
<h2>3. GMP施設要件</h2>
<ul><li>製品種類ごとに分離された製造ゾーン</li><li>関連製品向けのクリーンルームまたは管理環境</li><li>品質管理ラボ</li><li>原材料と完成品の保管エリア</li><li>害虫防除と廃棄物管理システム</li><li>GMP（適正製造規範）文書</li></ul>
<h2>4. 必要書類</h2>
<ul><li>化粧品製造業登録申請書</li><li>施設平面図</li><li>製造施設の賃貸借または所有権証明</li><li>GMP適合性文書</li><li>代表者の身分証明書</li></ul>
<h2>5. 申請手続き</h2>
<ol><li>GMP基準に合わせて施設を整備</li><li>地域MFDS事務所に申請書を提出</li><li>現地施設検査</li><li>登録証の発行（検査後約7〜14営業日）</li></ol>
<h2>6. 登録後の義務</h2>
<ul><li>GMP記録と製品品質記録の維持</li><li>製品に関連する重篤な有害事象の報告</li><li>個別製品の処方をMFDSに登録（国内販売の場合）</li><li>化粧品製造業と責任販売業の登録を別々に維持</li></ul>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 外国の化粧品会社が韓国の契約製造業者を通じて製造できますか？</p><p class="faq-a">A. はい。韓国の契約製造業者が製造登録を保有し、外国企業またはその韓国法人が責任販売業登録を保有します。</p></div>
<div class="faq-item"><p class="faq-q">Q. この登録は医薬部外品（준약품）をカバーしますか？</p><p class="faq-a">A. いいえ。医薬部外品には別途の医薬品製造または輸入許可が必要です。</p></div>
</div>
<div class="cta-box"><h3>化粧品製造業を登録しましょう</h3><p>ビジョン行政書士事務所が化粧品登録とMFDSコンプライアンスを担当します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 26–35: shortened but complete entries ─────────────────────────────
  {
    slug: 'corporate-rnd-center-requirements',
    locale: 'en',
    title: 'Corporate R&D Center Requirements in Korea — Researcher Qualifications & Space 2026',
    metaTitle: 'Korea Corporate R&D Center Requirements 2026 — Researcher & Facility Standards',
    metaDescription: 'Detailed requirements for establishing a recognized corporate R&D center in Korea. Researcher qualifications, dedicated facility standards, and documentation requirements. Free consultation.',
    category: 'Business Certification',
    excerpt: 'Detailed breakdown of researcher qualification and facility standards required for IITP-recognized corporate R&D centers in Korea.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Researcher Qualification Standards</li><li>Dedicated Facility Requirements</li><li>Documentation Requirements</li><li>Common Application Failures</li><li>FAQ</li></ol></div>
<h2>1. Researcher Qualification Standards</h2>
<p>Researchers must hold a bachelor's degree or higher in a relevant science, engineering, or IT field, OR have 3+ years of R&D experience. All researchers must be full-time employees of the company (not contractors). Head researcher must be a recognized specialist in the research area.</p>
<h2>2. Dedicated Facility Requirements</h2>
<ul><li>Physically separate and dedicated research space (not shared with office)</li><li>Clearly labeled with "Research Laboratory" signage</li><li>Equipped with appropriate research tools and instruments</li><li>Minimum space: no strict size requirement, but must be functionally adequate</li></ul>
<h2>3. Documentation Requirements</h2>
<ul><li>Research plan with specific objectives, methodology, and expected outcomes</li><li>Researcher employment certificates and academic credentials</li><li>Facility lease and floor plan</li><li>Equipment inventory list</li><li>Budget plan for R&D expenditures</li></ul>
<h2>4. Common Application Failures</h2>
<ul><li>Research plan is too generic or copied from another company</li><li>Researcher is listed but not actually employed full-time</li><li>Facility is shared with general office space with no physical separation</li><li>Equipment listed doesn't match the stated research activities</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a foreign national researcher qualify?</p><p class="faq-a">A. Yes, as long as they are legally employed in Korea and meet the degree/experience requirements.</p></div>
<div class="faq-item"><p class="faq-q">Q. What is the minimum number of researchers for a startup?</p><p class="faq-a">A. For small businesses (소기업), a minimum of 2 full-time researchers is required.</p></div>
</div>
<div class="cta-box"><h3>Set Up a Qualified Corporate R&D Center</h3><p>Vision Administrative Office prepares all IITP application documents. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'corporate-rnd-center-requirements',
    locale: 'zh',
    title: '韩国企业研发中心资格要求2026 — 研究人员资质与设施标准',
    metaTitle: '韩国企业研发中心要求2026 — 研究人员与设施标准',
    metaDescription: '韩国获认定企业研发中心的研究人员资格、专用设施标准及文件要求详解。专业行政士免费初次咨询。',
    category: '企业认证',
    excerpt: '韩国IITP认定企业研发中心的研究人员资质和设施标准详细解析。',
    content: `<h2>1. 研究人员资格标准</h2><p>研究人员须持有相关理、工、IT领域本科及以上学历，或具备3年以上研发经验。所有研究人员须为公司全职员工（非承包商）。</p><h2>2. 专用设施要求</h2><ul><li>物理独立的专用研究空间（不与办公室共用）</li><li>明确标注"研究实验室"标识</li><li>配备适当的研究工具和仪器</li><li>面积无严格要求，但须功能上足够</li></ul><h2>3. 文件要求</h2><ul><li>包含具体目标、方法和预期成果的研究计划</li><li>研究人员就业证明和学历证书</li><li>设施租赁合同和平面图</li><li>设备清单</li><li>研发支出预算计划</li></ul><h2>4. 常见申请失败原因</h2><ul><li>研究计划过于笼统或抄袭其他公司</li><li>列入名单的研究人员实际上非全职员工</li><li>设施与办公室共用，无物理隔离</li><li>列出的设备与申报研究活动不符</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 外国籍研究人员是否符合资格？</p><p class="faq-a">A. 符合，只要在韩国合法就业且满足学历/经验要求即可。</p></div></div><div class="cta-box"><h3>设立符合资格的企业研发中心</h3><p>Vision行政士事务所准备所有IITP申请材料。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'corporate-rnd-center-requirements',
    locale: 'ja',
    title: '韓国企業研究開発センター要件2026 — 研究者資格と施設基準',
    metaTitle: '韓国企業研究開発センター要件2026 — 研究者・施設基準',
    metaDescription: '韓国で認定を受けた企業研究開発センターを設立するための研究者資格、専用施設基準と書類要件の詳細解説。行政書士による無料初回相談あり。',
    category: '企業認証',
    excerpt: '韓国IITP認定企業研究開発センターの研究者資格と施設基準の詳細解説。',
    content: `<h2>1. 研究者資格基準</h2><p>研究者は関連する理工学またはIT分野の学士以上の学位、または3年以上の研究開発経験を持つ必要があります。すべての研究者が会社の正規フルタイム従業員（請負業者ではなく）であること。</p><h2>2. 専用施設要件</h2><ul><li>物理的に分離された専用研究スペース（オフィスと共用不可）</li><li>「研究室」の看板で明確に表示</li><li>適切な研究ツールと機器の設置</li><li>最低面積の厳格な規定はないが、機能的に十分であること</li></ul><h2>3. 書類要件</h2><ul><li>具体的な目標、方法論、期待される成果を含む研究計画書</li><li>研究者の雇用証明書と学歴証明書</li><li>施設の賃貸借契約書と平面図</li><li>設備一覧リスト</li><li>研究開発費の予算計画</li></ul><h2>4. よくある申請失敗理由</h2><ul><li>研究計画が汎用的すぎる、または他社からコピーされている</li><li>登録された研究者が実際には正規フルタイム雇用ではない</li><li>施設が物理的な分離なしに一般オフィスと共用されている</li><li>記載された設備が申告した研究活動と一致しない</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 外国人研究者でも資格がありますか？</p><p class="faq-a">A. はい。韓国で合法的に雇用されており、学位・経験要件を満たしていれば可能です。</p></div></div><div class="cta-box"><h3>適格な企業研究開発センターを設立しましょう</h3><p>ビジョン行政書士事務所がすべてのIITP申請書類を準備します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 27: cosmetics-manufacturing-facility-guide ────────────────────────
  {
    slug: 'cosmetics-manufacturing-facility-guide',
    locale: 'en',
    title: 'Cosmetics Manufacturing Facility Design in Korea — GMP Standards 2026',
    metaTitle: 'Korea Cosmetics Manufacturing Facility GMP Standards 2026',
    metaDescription: 'Facility design and GMP standards for cosmetics manufacturing in Korea. Zone separation, cleanroom requirements, air quality, and documentation. Free consultation.',
    category: 'Cosmetics',
    excerpt: 'Guidance on designing a GMP-compliant cosmetics manufacturing facility in Korea — zone separation, cleanroom requirements, and documentation standards.',
    content: `<h2>1. GMP Facility Layout Principles</h2><p>Korean cosmetics GMP requires a logical flow from raw materials to finished goods with no cross-contamination pathways. Key zones: receiving, raw material storage, weighing, manufacturing, filling, packaging, finished goods storage, and QC laboratory.</p><h2>2. Zone Separation Requirements</h2><ul><li>Raw material and finished product storage must be physically separated</li><li>High-risk manufacturing areas (emulsification, etc.) require controlled environments</li><li>Personnel flow must prevent contamination (changing rooms, airlocks)</li></ul><h2>3. Air Quality and Cleanliness</h2><ul><li>Cleanroom classifications per ISO 14644 for specific product types</li><li>HEPA filtration required for sterile or near-sterile products</li><li>Regular environmental monitoring (particle counts, microbial)</li></ul><h2>4. Documentation Requirements</h2><ul><li>Standard Operating Procedures (SOPs) for each manufacturing step</li><li>Batch manufacturing records</li><li>Equipment cleaning and calibration records</li><li>Environmental monitoring logs</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Is GMP mandatory for all cosmetics manufacturers?</p><p class="faq-a">A. GMP compliance is required for registration, and formal GMP certification is mandatory for exporters to many markets.</p></div></div><div class="cta-box"><h3>Get Your Cosmetics Facility GMP-Ready</h3><p>Vision Administrative Office advises on GMP documentation and MFDS registration. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'cosmetics-manufacturing-facility-guide',
    locale: 'zh',
    title: '韩国化妆品制造设施设计指南2026 — GMP标准',
    metaTitle: '韩国化妆品制造设施GMP标准2026',
    metaDescription: '韩国化妆品制造设施设计和GMP标准详解，包括区域分隔、洁净室要求及文件要求。专业行政士免费初次咨询。',
    category: '化妆品',
    excerpt: '韩国GMP合规化妆品制造设施设计指南，包括区域分隔、洁净室要求和文件标准。',
    content: `<h2>1. GMP设施布局原则</h2><p>韩国化妆品GMP要求从原料到成品有合理流程，不存在交叉污染路径。关键区域：收货、原料储存、称量、制造、灌装、包装、成品储存和质控实验室。</p><h2>2. 区域分隔要求</h2><ul><li>原料和成品储存须物理隔离</li><li>高风险制造区域（乳化等）须受控环境</li><li>人员流动须防止污染（更衣室、气闸）</li></ul><h2>3. 空气质量与洁净度</h2><ul><li>特定产品类型按ISO 14644洁净室分级</li><li>无菌或近无菌产品须HEPA过滤</li><li>定期环境监测（粒子计数、微生物）</li></ul><h2>4. 文件要求</h2><ul><li>每个生产步骤的标准操作程序（SOP）</li><li>批次生产记录</li><li>设备清洁和校准记录</li><li>环境监测日志</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. GMP是所有化妆品制造商的强制要求吗？</p><p class="faq-a">A. GMP合规是登记必要条件，正式GMP认证对出口到许多市场的企业是强制要求。</p></div></div><div class="cta-box"><h3>让化妆品设施达到GMP标准</h3><p>Vision行政士事务所提供GMP文件及食药处登记建议。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'cosmetics-manufacturing-facility-guide',
    locale: 'ja',
    title: '韓国化粧品製造施設設計ガイド2026 — GMP基準',
    metaTitle: '韓国化粧品製造施設GMP基準2026',
    metaDescription: '韓国の化粧品製造施設設計とGMP基準の詳解。ゾーン分離、クリーンルーム要件、文書要件を解説。行政書士による無料初回相談あり。',
    category: '化粧品',
    excerpt: '韓国のGMP適合化粧品製造施設の設計ガイド — ゾーン分離、クリーンルーム要件、文書基準を解説します。',
    content: `<h2>1. GMP施設レイアウトの原則</h2><p>韓国の化粧品GMPは、原材料から完成品まで交差汚染のない合理的な流れを要求します。主要ゾーン：受入、原材料保管、計量、製造、充填、包装、完成品保管、品質管理ラボ。</p><h2>2. ゾーン分離要件</h2><ul><li>原材料と完成品の保管を物理的に分離</li><li>高リスク製造エリア（乳化等）は管理環境が必要</li><li>人員の流れは汚染を防ぐこと（更衣室、エアロック）</li></ul><h2>3. 空気品質と清潔度</h2><ul><li>特定製品タイプにISO 14644クリーンルーム分類を適用</li><li>無菌または準無菌製品にはHEPAフィルタリングが必要</li><li>定期的な環境モニタリング（粒子数、微生物）</li></ul><h2>4. 文書要件</h2><ul><li>各製造ステップの標準作業手順書（SOP）</li><li>バッチ製造記録</li><li>設備の洗浄・校正記録</li><li>環境モニタリングログ</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. GMPはすべての化粧品製造業者に義務ですか？</p><p class="faq-a">A. GMP遵守は登録に必要で、多くの市場への輸出業者には正式なGMP認証が義務です。</p></div></div><div class="cta-box"><h3>化粧品施設をGMP対応にしましょう</h3><p>ビジョン行政書士事務所がGMP文書とMFDS登録をアドバイスします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 28: freight-forwarder-capital-bond-requirements ───────────────────
  {
    slug: 'freight-forwarder-capital-bond-requirements',
    locale: 'en',
    title: 'Freight Forwarder Capital and Surety Bond Requirements in Korea — 2026',
    metaTitle: 'Korea Freight Forwarder Capital & Bond Requirements 2026',
    metaDescription: 'Detailed guide to capital and surety bond requirements for freight forwarder registration in Korea. KRW 300M capital, KRW 100M bond, alternatives and documentation tips. Free consultation.',
    category: 'Logistics',
    excerpt: 'Comprehensive guide to the capital and surety bond requirements for international freight forwarding registration in Korea.',
    content: `<h2>1. Capital Requirement: KRW 300M</h2><p>International freight forwarders must demonstrate paid-in capital of at least KRW 300 million. This must be evidenced by a bank balance certificate issued within 3 months of the application date. The capital must be in the company's corporate account — personal accounts are not accepted.</p><h2>2. Surety Bond: KRW 100M</h2><p>In addition to capital, a surety bond (보증보험증권) of at least KRW 100 million must be maintained throughout the period of registration. The bond protects customers against losses caused by the forwarder's non-performance.</p><h2>3. Mutual Aid Association Alternative</h2><p>Members of a recognized logistics mutual aid association may substitute the surety bond with membership. Confirm which associations are recognized by the Regional Land Management Office before proceeding.</p><h2>4. Documenting Capital for Foreign-Invested Companies</h2><ul><li>Foreign capital must be remitted through the FIPA-registered process</li><li>Exchange records and FIPA report must be submitted alongside the bank certificate</li><li>Capital denominated in foreign currency must be converted at the exchange rate on the certificate date</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Does the KRW 300M need to stay in the account permanently?</p><p class="faq-a">A. No. It only needs to be demonstrated at the application date. Operating funds may be used from the account after registration.</p></div></div><div class="cta-box"><h3>Meet Freight Forwarder Capital Requirements</h3><p>Vision Administrative Office guides you through capital documentation. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'freight-forwarder-capital-bond-requirements',
    locale: 'zh',
    title: '韩国货运代理资本金与保证保险要求2026',
    metaTitle: '韩国货运代理资本金与保证要求2026',
    metaDescription: '韩国国际货运代理登记资本金和保证保险要求详解。3亿韩元资本金、1亿保证保险、替代方案及文件提示。专业行政士免费初次咨询。',
    category: '物流',
    excerpt: '韩国国际货运代理登记资本金和保证保险要求全面指南。',
    content: `<h2>1. 资本金要求：3亿韩元</h2><p>国际货运代理商须证明实缴资本金至少为3亿韩元，须提交申请日前3个月内出具的银行余额证明。资本金须存入公司对公账户，不接受个人账户。</p><h2>2. 保证保险：1亿韩元</h2><p>除资本金外，还须在整个登记期间维持至少1亿韩元的保证保险（보증보험증권）。该保险保护客户免受因承运人不履行而造成的损失。</p><h2>3. 互助联合会替代方案</h2><p>已认可物流互助联合会的成员可以用会员资格替代保证保险。在申请前确认地区国土管理厅认可哪些联合会。</p><h2>4. 外资企业资本金证明</h2><ul><li>外国资本须通过FIPA登记程序汇入</li><li>汇兑记录和FIPA报告须与银行证明一同提交</li><li>以外币计价的资本须按证明日期的汇率换算</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 3亿韩元是否需要永久保留在账户中？</p><p class="faq-a">A. 不需要，仅需在申请日证明即可。登记后账户资金可用于运营。</p></div></div><div class="cta-box"><h3>满足货运代理资本金要求</h3><p>Vision行政士事务所指导您完成资本金文件准备。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'freight-forwarder-capital-bond-requirements',
    locale: 'ja',
    title: '韓国物流主旋業者資本金・保証保険要件2026',
    metaTitle: '韓国物流主旋業者資本金・保証要件2026',
    metaDescription: '韓国の国際物流主旋業者登録の資本金と保証保険要件の詳細ガイド。3億ウォン資本金、1億ウォン保証保険、代替手段と書類のポイント。行政書士による無料初回相談あり。',
    category: '物流',
    excerpt: '韓国国際物流主旋業者登録の資本金と保証保険要件の包括的ガイド。',
    content: `<h2>1. 資本金要件：3億ウォン</h2><p>国際物流主旋業者は最低3億ウォンの払込資本金を証明する必要があります。申請日から3ヶ月以内に発行された銀行残高証明書で証明します。資本金は会社の法人口座でなければなりません — 個人口座は不可。</p><h2>2. 保証保険：1億ウォン</h2><p>資本金に加えて、登録期間中、最低1億ウォンの保証保険（보증보험증券）を維持する必要があります。この保険は、業者の不履行による顧客の損失を保護します。</p><h2>3. 共済組合による代替</h2><p>認定された物流共済組合の会員は、保証保険を会員資格で代替できます。申請前に地域国土管理事務所が認定する共済組合を確認してください。</p><h2>4. 外資系企業の資本金証明</h2><ul><li>外国資本はFIPA登録プロセスを通じて送金する必要がある</li><li>為替記録とFIPA報告書を銀行証明書とともに提出</li><li>外貨建ての資本は証明書日付の為替レートで換算</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 3億ウォンを口座に永久に維持する必要がありますか？</p><p class="faq-a">A. いいえ。申請日時点で証明するだけで十分です。登録後は口座から運転資金として使用できます。</p></div></div><div class="cta-box"><h3>物流主旋業者の資本金要件を満たしましょう</h3><p>ビジョン行政書士事務所が資本金書類の準備をガイドします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 29: sports-club-establishment-guide ──────────────────────────────
  {
    slug: 'sports-club-establishment-guide',
    locale: 'en',
    title: 'Sports Club (Designated Sports Business) Registration in Korea — 2026 Guide',
    metaTitle: 'Korea Sports Club Registration 2026 — Designated Sports Business License',
    metaDescription: 'How to register a sports club or designated sports business in Korea. Facility requirements, instructor qualifications, required documents, and application procedure. Free consultation.',
    category: 'Sports',
    excerpt: 'How to legally register a sports club (지정스포츠클럽) or martial arts gym as a designated sports business in Korea — requirements, documents, and procedure.',
    content: `<h2>1. What Is a Designated Sports Business?</h2><p>Under Korea's <strong>Sports Promotion Act</strong>, businesses that provide training in designated sports (taekwondo, judo, boxing, hapkido, etc.) must register as a <strong>designated sports business (체육도장업)</strong> with the local government.</p><h2>2. Eligibility Requirements</h2><ul><li>At least one certified instructor (단증 보유자) for the relevant sport</li><li>Facility must meet minimum area requirements (varies by sport)</li><li>Safety equipment and mats/flooring appropriate to the sport</li></ul><h2>3. Required Documents</h2><ul><li>Sports business registration application</li><li>Instructor's certification (단증, grade certificate)</li><li>Facility lease agreement</li><li>Floor plan showing training area</li><li>Safety equipment list</li></ul><h2>4. Application Procedure</h2><ol><li>Submit to local district office (시/군/구청)</li><li>Facility inspection</li><li>Registration certificate issued (approx. 7–14 business days)</li></ol><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Does a yoga studio need this registration?</p><p class="faq-a">A. Yoga is generally not a designated sport, so a different registration (체육시설업) may apply. Confirm with the local sports authority.</p></div></div><div class="cta-box"><h3>Register Your Sports Club Legally</h3><p>Vision Administrative Office handles sports business registrations. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'sports-club-establishment-guide',
    locale: 'zh',
    title: '韩国指定体育俱乐部设立登记指南2026',
    metaTitle: '韩国体育俱乐部登记2026 — 指定体育项目营业执照',
    metaDescription: '在韩国登记体育俱乐部或指定体育项目经营业的方法。设施要求、教练资格、所需材料及申请流程。专业行政士免费初次咨询。',
    category: '体育',
    excerpt: '韩国合法登记体育俱乐部（指定体育道场）为指定体育项目经营业的指南，包括要求、材料及程序。',
    content: `<h2>1. 什么是指定体育项目经营业？</h2><p>依据韩国《体育振兴法》，提供指定体育项目（跆拳道、柔道、拳击、合气道等）培训的企业须向当地政府登记为<strong>指定体育项目经营业（체육도장업）</strong>。</p><h2>2. 申请资格</h2><ul><li>相关体育项目至少一名持有证书的教练（단증보유者）</li><li>设施须满足最低面积要求（按项目不同而异）</li><li>适合该体育项目的安全设备和地板</li></ul><h2>3. 所需材料</h2><ul><li>体育事业登记申请书</li><li>教练证书（段位证书）</li><li>设施租赁合同</li><li>显示训练区域的平面图</li><li>安全设备清单</li></ul><h2>4. 申请流程</h2><ol><li>向当地区政府提交</li><li>设施检查</li><li>颁发登记证（约7~14个工作日）</li></ol><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 瑜伽馆需要此登记吗？</p><p class="faq-a">A. 瑜伽通常不是指定体育项目，可能需要其他登记（체육시설업）。请向当地体育管理部门确认。</p></div></div><div class="cta-box"><h3>合法登记体育俱乐部</h3><p>Vision行政士事务所负责体育事业登记。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'sports-club-establishment-guide',
    locale: 'ja',
    title: '韓国指定スポーツクラブ設立登録ガイド2026',
    metaTitle: '韓国スポーツクラブ登録2026 — 指定スポーツ事業許可',
    metaDescription: '韓国で体育道場（指定スポーツ事業）を登録する方法。施設要件、指導者資格、必要書類と申請手続き。行政書士による無料初回相談あり。',
    category: 'スポーツ',
    excerpt: '韓国でスポーツクラブ（指定スポーツ체育도장）を指定スポーツ事業として合法的に登録する方法 — 要件、書類、手続きを解説します。',
    content: `<h2>1. 指定スポーツ事業とは？</h2><p>韓国の<strong>スポーツ振興法</strong>に基づき、指定スポーツ（テコンドー、柔道、ボクシング、合気道など）の指導を提供する事業者は、地方政府に<strong>指定スポーツ事業（체육도장업）</strong>として登録する必要があります。</p><h2>2. 申請資格</h2><ul><li>関連スポーツに少なくとも1名の認定指導者（단증保有者）</li><li>施設はスポーツによって異なる最低面積要件を満たすこと</li><li>そのスポーツに適した安全設備とマット/床材</li></ul><h2>3. 必要書類</h2><ul><li>スポーツ事業登録申請書</li><li>指導者の資格証明書（段位証書）</li><li>施設賃貸借契約書</li><li>トレーニングエリアを示す平面図</li><li>安全設備リスト</li></ul><h2>4. 申請手続き</h2><ol><li>地方区役所（시/군/구청）に提出</li><li>施設検査</li><li>登録証の発行（約7〜14営業日）</li></ol><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. ヨガスタジオはこの登録が必要ですか？</p><p class="faq-a">A. ヨガは一般的に指定スポーツではないため、別の登録（체육시설업）が適用される場合があります。地方スポーツ当局にご確認ください。</p></div></div><div class="cta-box"><h3>スポーツクラブを合法的に登録しましょう</h3><p>ビジョン行政書士事務所がスポーツ事業登録を担当します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 30: manufacturing-business-registration-procedure ────────────────
  {
    slug: 'manufacturing-business-registration-procedure',
    locale: 'en',
    title: 'Manufacturing Business Registration in Korea — 2026 Step-by-Step Guide',
    metaTitle: 'Korea Manufacturing Business Registration 2026 — Complete Procedure',
    metaDescription: 'How to register a manufacturing business in Korea in 2026. Factory registration, business license, required documents, and compliance checklist. Free consultation from Vision Administrative Office.',
    category: 'Manufacturing',
    excerpt: 'A complete step-by-step guide to registering a manufacturing business in Korea, including factory registration, required permits, and compliance essentials.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Overview of Manufacturing Registration</li><li>Types of Manufacturing Licenses</li><li>Key Requirements</li><li>Required Documents</li><li>Application Procedure</li><li>Post-Registration Compliance</li><li>FAQ</li></ol></div><h2>1. Overview of Manufacturing Registration</h2><p>Starting a manufacturing business in Korea requires registering with the local government and, depending on the product, obtaining additional sector-specific permits. The primary framework is the <strong>Industrial Cluster Development and Factory Establishment Support Act</strong>.</p><h2>2. Types of Manufacturing Licenses</h2><ul><li><strong>Factory registration</strong> (공장등록) — for facilities ≥500 m²</li><li><strong>Business registration</strong> (사업자등록) — mandatory for all businesses</li><li><strong>Sector-specific permits</strong> — food, cosmetics, pharmaceuticals each require separate approval</li></ul><h2>3. Key Requirements</h2><ul><li>Zoning: facility must be in an area permitted for manufacturing</li><li>Minimum facility size requirements depending on product category</li><li>Environmental compliance: waste, noise, emissions permits if applicable</li><li>Fire safety inspection clearance</li></ul><h2>4. Required Documents</h2><ul><li>Factory establishment application form</li><li>Building permit or building use confirmation documents</li><li>Layout/floor plan of the facility</li><li>Environmental impact review (if required by product)</li><li>Corporate registration documents (for legal entities)</li></ul><h2>5. Application Procedure</h2><ol><li>Submit factory establishment application to local city/county office</li><li>Environmental and safety review (14–30 business days)</li><li>On-site inspection</li><li>Factory registration certificate issued</li><li>Apply for business registration at the tax office</li></ol><h2>6. Post-Registration Compliance</h2><ul><li>Annual factory status report required</li><li>Environmental compliance reports (quarterly or annual)</li><li>Notify authorities of facility changes within 30 days</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Can a foreigner or foreign company register a manufacturing business in Korea?</p><p class="faq-a">A. Yes. Foreign-invested companies follow the same registration procedure after completing foreign investment notification with KOTRA or a bank.</p></div><div class="faq-item"><p class="faq-q">Q. How long does the full process take?</p><p class="faq-a">A. Typically 4–8 weeks from application submission to receiving the factory registration certificate.</p></div></div><div class="cta-box"><h3>Start Your Manufacturing Business in Korea</h3><p>Vision Administrative Office handles factory and manufacturing business registration from start to finish. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'manufacturing-business-registration-procedure',
    locale: 'zh',
    title: '韩国制造业登记程序2026完全指南',
    metaTitle: '韩国制造业登记2026 — 完整申请流程',
    metaDescription: '2026年在韩国登记制造业的完整指南。工厂登记、营业执照、所需材料及合规清单。Vision行政士事务所免费初次咨询。',
    category: '制造业',
    excerpt: '在韩国登记制造业的完整分步指南，包括工厂登记、所需许可证及合规要点。',
    content: `<div class="toc"><p>目录</p><ol><li>制造业登记概述</li><li>制造许可证类型</li><li>主要要求</li><li>所需材料</li><li>申请流程</li><li>登记后合规</li><li>常见问题</li></ol></div><h2>1. 制造业登记概述</h2><p>在韩国开展制造业，须向当地政府登记，且根据产品类别，还需取得特定行业许可证。主要法律框架为<strong>《产业集群开发及工厂设立支持法》</strong>。</p><h2>2. 制造许可证类型</h2><ul><li><strong>工厂登记</strong>（공장등록）— 适用于500m²以上设施</li><li><strong>营业执照</strong>（사업자등록）— 所有企业必须办理</li><li><strong>特定行业许可证</strong> — 食品、化妆品、药品各需单独批准</li></ul><h2>3. 主要要求</h2><ul><li>用地分区：设施须位于允许制造业的区域</li><li>根据产品类别的最低设施面积要求</li><li>环境合规：如适用，需办理废物、噪音、排放许可证</li><li>消防安全检查合格</li></ul><h2>4. 所需材料</h2><ul><li>工厂设立申请表</li><li>建筑许可证或建筑用途确认文件</li><li>设施布局/平面图</li><li>环境影响评审（如产品要求）</li><li>企业登记文件（法人实体）</li></ul><h2>5. 申请流程</h2><ol><li>向当地市/郡办公室提交工厂设立申请</li><li>环境和安全审查（14~30个工作日）</li><li>现场检查</li><li>颁发工厂登记证</li><li>向税务局申请营业执照</li></ol><h2>6. 登记后合规</h2><ul><li>需年度工厂状态报告</li><li>环境合规报告（按类别每季度或每年提交）</li><li>设施变更须在30天内通知主管部门</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 外国人或外国公司能在韩国登记制造业吗？</p><p class="faq-a">A. 可以。外资企业在通过KOTRA或银行完成外国投资申报后，按相同流程办理登记。</p></div><div class="faq-item"><p class="faq-q">Q. 整个流程需要多长时间？</p><p class="faq-a">A. 从提交申请到收到工厂登记证通常需要4~8周。</p></div></div><div class="cta-box"><h3>在韩国开创制造业</h3><p>Vision行政士事务所全程代办工厂及制造业登记。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'manufacturing-business-registration-procedure',
    locale: 'ja',
    title: '韓国製造業登録手続き2026完全ガイド',
    metaTitle: '韓国製造業登録2026 — 完全申請手続き',
    metaDescription: '2026年に韓国で製造業を登録する方法。工場登録、事業許可、必要書類、コンプライアンスチェックリスト。ビジョン行政書士事務所による無料初回相談。',
    category: '製造業',
    excerpt: '韓国で製造業を登録するための完全なステップバイステップガイド。工場登録、必要許可、コンプライアンスの基礎を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>製造業登録の概要</li><li>製造許可の種類</li><li>主な要件</li><li>必要書類</li><li>申請手続き</li><li>登録後のコンプライアンス</li><li>よくある質問</li></ol></div><h2>1. 製造業登録の概要</h2><p>韓国で製造業を開始するには、地方自治体への登録が必要で、製品によっては追加の業種別許可も必要です。主要な法的枠組みは<strong>「産業クラスター開発および工場設立支援に関する法律」</strong>です。</p><h2>2. 製造許可の種類</h2><ul><li><strong>工場登録</strong>（공장등록）— 500m²以上の施設に適用</li><li><strong>事業者登録</strong>（사업자등록）— すべての事業者に必須</li><li><strong>業種別許可</strong> — 食品、化粧品、医薬品はそれぞれ別途承認が必要</li></ul><h2>3. 主な要件</h2><ul><li>ゾーニング：施設は製造業が許可された区域に位置すること</li><li>製品カテゴリーによる最低施設面積要件</li><li>環境コンプライアンス：該当する場合、廃棄物・騒音・排出許可</li><li>消防安全検査の合格</li></ul><h2>4. 必要書類</h2><ul><li>工場設立申請書</li><li>建築許可証または建物用途確認書類</li><li>施設のレイアウト/平面図</li><li>環境影響審査（製品によって必要な場合）</li><li>法人登記書類（法人の場合）</li></ul><h2>5. 申請手続き</h2><ol><li>地方市区町村役場に工場設立申請を提出</li><li>環境・安全審査（14〜30営業日）</li><li>現地検査</li><li>工場登録証の交付</li><li>税務署で事業者登録を申請</li></ol><h2>6. 登録後のコンプライアンス</h2><ul><li>年次工場状況報告が必要</li><li>環境コンプライアンス報告（カテゴリーにより四半期または年次）</li><li>施設の変更は30日以内に当局に通知</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 外国人や外国企業も韓国で製造業を登録できますか？</p><p class="faq-a">A. はい。外国投資企業はKOTRAまたは銀行で外国投資届出を完了した後、同じ登録手続きに従います。</p></div><div class="faq-item"><p class="faq-q">Q. 全体のプロセスにはどのくらいかかりますか？</p><p class="faq-a">A. 申請提出から工場登録証受取まで通常4〜8週間かかります。</p></div></div><div class="cta-box"><h3>韓国で製造業を始めましょう</h3><p>ビジョン行政書士事務所が工場・製造業登録を最初から最後まで対応します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 31: factory-registration-application-guide ───────────────────────
  {
    slug: 'factory-registration-application-guide',
    locale: 'en',
    title: 'Factory Registration in Korea — Application Guide 2026',
    metaTitle: 'Korea Factory Registration Application 2026 — Documents & Procedure',
    metaDescription: 'Step-by-step guide to factory registration in Korea. Zoning rules, required documents, inspection process, and common mistakes to avoid. Free consultation from Vision Administrative Office.',
    category: 'Manufacturing',
    excerpt: 'A practical guide to factory registration applications in Korea — zoning, documents, inspections, and how to avoid common rejection pitfalls.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is Factory Registration?</li><li>Who Must Register?</li><li>Zoning and Location Requirements</li><li>Required Documents</li><li>Application and Inspection Process</li><li>Common Rejection Reasons</li><li>FAQ</li></ol></div><h2>1. What Is Factory Registration?</h2><p>Factory registration (공장등록) is a legal requirement for manufacturing facilities exceeding 500 m² of floor area. It is managed by local city or county offices under the Factory Establishment Act.</p><h2>2. Who Must Register?</h2><ul><li>Any manufacturing facility with ≥500 m² total floor area</li><li>Facilities in industrial complex zones regardless of size</li><li>New constructions and existing facilities changing product categories</li></ul><h2>3. Zoning and Location Requirements</h2><ul><li>Industrial zones (준공업지역, 공업지역) are automatically eligible</li><li>Commercial and residential zones: manufacturing is restricted</li><li>Agricultural land requires land-use change before factory construction</li></ul><h2>4. Required Documents</h2><ul><li>Factory registration application</li><li>Architectural drawings (floor plan, elevation)</li><li>Building permit or completion inspection certificate</li><li>Business registration certificate</li><li>Environmental permit (if applicable)</li><li>Fire safety inspection certificate</li></ul><h2>5. Application and Inspection Process</h2><ol><li>Submit application to local city/county factory registration office</li><li>Document review (7–14 days)</li><li>On-site inspection by local officials</li><li>Factory registration certificate issued</li><li>Register with the factory information system (FAIS)</li></ol><h2>6. Common Rejection Reasons</h2><ul><li>Facility located in a non-permitted zone</li><li>Missing or incomplete architectural drawings</li><li>Outstanding building code violations</li><li>Environmental permit not yet obtained</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Is factory registration the same as business registration?</p><p class="faq-a">A. No. Factory registration (with local government) and business registration (with the tax office) are separate processes. Both are required.</p></div><div class="faq-item"><p class="faq-q">Q. Can I operate before registration is complete?</p><p class="faq-a">A. Operating a facility that requires factory registration without one can result in fines and mandatory closure orders.</p></div></div><div class="cta-box"><h3>Get Your Factory Registered Correctly</h3><p>Vision Administrative Office prepares and submits factory registration applications. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'factory-registration-application-guide',
    locale: 'zh',
    title: '韩国工厂登记申请指南2026',
    metaTitle: '韩国工厂登记申请2026 — 所需材料与流程',
    metaDescription: '韩国工厂登记分步指南。用地分区规定、所需材料、检查流程及常见错误规避。Vision行政士事务所免费初次咨询。',
    category: '制造业',
    excerpt: '韩国工厂登记申请实用指南，涵盖用地分区、材料、检查及避免常见被拒原因的要点。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是工厂登记？</li><li>哪些主体须进行登记？</li><li>用地分区与选址要求</li><li>所需材料</li><li>申请与检查流程</li><li>常见被拒原因</li><li>常见问题</li></ol></div><h2>1. 什么是工厂登记？</h2><p>工厂登记（공장등록）是建筑面积超过500m²的制造业设施的法定要求，由地方市/郡办公室依据《工厂设立法》管理。</p><h2>2. 哪些主体须进行登记？</h2><ul><li>总建筑面积≥500m²的任何制造设施</li><li>工业园区内的设施（无论规模大小）</li><li>新建设施及变更产品类别的现有设施</li></ul><h2>3. 用地分区与选址要求</h2><ul><li>工业区（준공업지역、공업지역）自动符合资格</li><li>商业区和住宅区：制造业受限</li><li>农业用地须先变更土地用途，方可建厂</li></ul><h2>4. 所需材料</h2><ul><li>工厂登记申请表</li><li>建筑图纸（平面图、立面图）</li><li>建筑许可证或竣工验收证明</li><li>营业执照</li><li>环保许可证（如适用）</li><li>消防安全检查证明</li></ul><h2>5. 申请与检查流程</h2><ol><li>向当地市/郡工厂登记办公室提交申请</li><li>材料审查（7~14天）</li><li>地方官员现场检查</li><li>颁发工厂登记证</li><li>在工厂信息系统（FAIS）登记</li></ol><h2>6. 常见被拒原因</h2><ul><li>设施位于非许可区域</li><li>建筑图纸缺失或不完整</li><li>存在未解决的建筑规范违规问题</li><li>尚未取得环保许可证</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 工厂登记与营业执照登记相同吗？</p><p class="faq-a">A. 不同。工厂登记（向地方政府）和营业执照登记（向税务局）是两个独立流程，均须办理。</p></div><div class="faq-item"><p class="faq-q">Q. 登记完成前能运营吗？</p><p class="faq-a">A. 在未完成必要工厂登记的情况下运营可能面临罚款及强制停业命令。</p></div></div><div class="cta-box"><h3>正确完成工厂登记</h3><p>Vision行政士事务所负责准备并提交工厂登记申请。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'factory-registration-application-guide',
    locale: 'ja',
    title: '韓国工場登録申請ガイド2026',
    metaTitle: '韓国工場登録申請2026 — 必要書類と手続き',
    metaDescription: '韓国の工場登録申請ステップバイステップガイド。ゾーニングルール、必要書類、検査プロセス、よくある却下理由。ビジョン行政書士事務所による無料初回相談。',
    category: '製造業',
    excerpt: '韓国の工場登録申請の実践ガイド — ゾーニング、書類、検査、よくある却下理由の回避方法を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>工場登録とは？</li><li>登録が必要な対象</li><li>ゾーニングと立地要件</li><li>必要書類</li><li>申請・検査プロセス</li><li>よくある却下理由</li><li>よくある質問</li></ol></div><h2>1. 工場登録とは？</h2><p>工場登録（공장등록）は、延べ床面積500m²を超える製造施設に義務付けられた法的要件です。工場設立法に基づき、地方市区町村役場が管理します。</p><h2>2. 登録が必要な対象</h2><ul><li>総延べ床面積が500m²以上の製造施設</li><li>工業団地内の施設（規模に関わらず）</li><li>新規建設および製品カテゴリーを変更する既存施設</li></ul><h2>3. ゾーニングと立地要件</h2><ul><li>工業地域（준공업지역、공업지역）は自動的に適格</li><li>商業地域・住宅地域：製造業は制限あり</li><li>農地は工場建設前に用途変更が必要</li></ul><h2>4. 必要書類</h2><ul><li>工場登録申請書</li><li>建築図面（平面図、立面図）</li><li>建築許可証または完工検査証明書</li><li>事業者登録証</li><li>環境許可証（該当する場合）</li><li>消防安全検査証明書</li></ul><h2>5. 申請・検査プロセス</h2><ol><li>地方市区町村の工場登録窓口に申請書を提出</li><li>書類審査（7〜14日）</li><li>地方担当者による現地検査</li><li>工場登録証の交付</li><li>工場情報システム（FAIS）に登録</li></ol><h2>6. よくある却下理由</h2><ul><li>施設が許可区域外に立地している</li><li>建築図面が不備または不完全</li><li>未解決の建築基準法違反がある</li><li>環境許可証がまだ取得できていない</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 工場登録と事業者登録は同じですか？</p><p class="faq-a">A. 異なります。工場登録（地方自治体）と事業者登録（税務署）は別々のプロセスで、両方必要です。</p></div><div class="faq-item"><p class="faq-q">Q. 登録完了前に操業できますか？</p><p class="faq-a">A. 工場登録が必要な施設を無登録で操業すると、罰金および強制閉鎖命令の対象となります。</p></div></div><div class="cta-box"><h3>工場を正しく登録しましょう</h3><p>ビジョン行政書士事務所が工場登録申請を準備・提出します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 32: venture-tax-benefits ────────────────────────────────────────
  {
    slug: 'venture-tax-benefits',
    locale: 'en',
    title: 'Venture Company Tax Benefits in Korea — 2026 Complete Guide',
    metaTitle: 'Korea Venture Company Tax Benefits 2026 — Reductions & Credits Explained',
    metaDescription: 'All tax benefits available to KOSME-certified venture companies in Korea: income tax reduction, acquisition tax exemption, capital gains benefits, and more. Free consultation.',
    category: 'Business Certification',
    excerpt: 'A comprehensive guide to the tax benefits available to certified venture companies in Korea, including income tax reductions, acquisition tax exemptions, and investment incentives.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Overview of Venture Tax Benefits</li><li>Income Tax Reduction</li><li>Acquisition Tax and Property Tax Exemptions</li><li>Capital Gains Tax Benefit for Investors</li><li>Stock Option Tax Deferral</li><li>How to Qualify</li><li>FAQ</li></ol></div><h2>1. Overview of Venture Tax Benefits</h2><p>Companies certified as venture enterprises by KOSME receive significant tax advantages under the <strong>Venture Enterprise Promotion Act</strong>. These incentives encourage R&amp;D-based growth.</p><h2>2. Income Tax Reduction</h2><ul><li>50% reduction in corporate income tax for 5 years from first profit date</li><li>Applies to SMEs with KOSME venture certification</li><li>Available for domestic and foreign-invested venture companies</li></ul><h2>3. Acquisition Tax and Property Tax Exemptions</h2><ul><li>100% exemption on acquisition tax for business-use real estate</li><li>50% reduction in property tax for 5 years</li><li>Exemptions apply only while venture certification is maintained</li></ul><h2>4. Capital Gains Tax Benefit for Investors</h2><ul><li>Individuals investing in certified venture companies: 100% income deduction up to KRW 30 million/year</li><li>Investments via venture funds or angel associations qualify for additional tax credit</li></ul><h2>5. Stock Option Tax Deferral</h2><ul><li>Employees can defer income tax until time of stock sale (not at grant or exercise)</li><li>Significant cash-flow benefit for startup employees</li></ul><h2>6. How to Qualify</h2><ul><li>Obtain venture certification from KOSME</li><li>Three main routes: technology evaluation, investment-based, research lab-based</li><li>Certification renewed every 2 years</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Can I claim venture tax benefits retroactively?</p><p class="faq-a">A. Tax benefits begin from the date of certification. You cannot retroactively claim benefits for periods before certification.</p></div><div class="faq-item"><p class="faq-q">Q. What happens to tax benefits if certification lapses?</p><p class="faq-a">A. Benefits cease immediately upon certification lapse. Previously claimed exemptions are generally not clawed back if certification was legitimately held.</p></div></div><div class="cta-box"><h3>Get Your Venture Certification and Tax Benefits</h3><p>Vision Administrative Office handles the full venture certification application process. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'venture-tax-benefits',
    locale: 'zh',
    title: '韩国风险企业税收优惠2026完全指南',
    metaTitle: '韩国风险企业税收优惠2026 — 减免与抵扣详解',
    metaDescription: '韩国KOSME认证风险企业可享受的全部税收优惠：所得税减免、取得税豁免、资本利得优惠等。免费初次咨询。',
    category: '企业认证',
    excerpt: '韩国认证风险企业可享受税收优惠的全面指南，包括所得税减免、取得税豁免及投资激励措施。',
    content: `<div class="toc"><p>目录</p><ol><li>风险企业税收优惠概述</li><li>所得税减免</li><li>取得税和财产税豁免</li><li>投资者资本利得税优惠</li><li>股票期权递延纳税</li><li>如何取得资格</li><li>常见问题</li></ol></div><h2>1. 风险企业税收优惠概述</h2><p>经KOSME认证为风险企业的公司，依据<strong>《风险企业促进法》</strong>享受显著税收优惠，旨在激励以研发为基础的增长。</p><h2>2. 所得税减免</h2><ul><li>自首次盈利之日起5年内，企业所得税减免50%</li><li>适用于持有KOSME风险企业认证的中小企业</li><li>适用于国内法人及外资风险企业</li></ul><h2>3. 取得税和财产税豁免</h2><ul><li>为商业用途取得的不动产，取得税100%豁免</li><li>商业用途不动产财产税5年减免50%</li><li>豁免仅在维持风险企业认证期间有效</li></ul><h2>4. 投资者资本利得税优惠</h2><ul><li>个人投资认证风险企业，每年最高享受3000万韩元所得100%扣除</li><li>通过风险基金或天使投资协会投资，可享受额外税收抵扣</li></ul><h2>5. 股票期权递延纳税</h2><ul><li>获得股票期权的员工可将所得税递延至股票出售时缴纳</li><li>对创业公司员工有显著的现金流优势</li></ul><h2>6. 如何取得资格</h2><ul><li>须从KOSME取得风险企业认证</li><li>三种主要途径：技术评估型、投资型、研究所型</li><li>认证每两年更新一次</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 可以追溯享受风险企业税收优惠吗？</p><p class="faq-a">A. 税收优惠自认证之日起生效，不能追溯享受认证前的优惠。</p></div><div class="faq-item"><p class="faq-q">Q. 认证失效后税收优惠会怎样？</p><p class="faq-a">A. 认证失效后优惠立即停止。若认证期间合法持有，此前已申报的豁免一般不会被追回。</p></div></div><div class="cta-box"><h3>取得风险企业认证，享受税收优惠</h3><p>Vision行政士事务所全程代办风险企业认证申请。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'venture-tax-benefits',
    locale: 'ja',
    title: '韓国ベンチャー企業の税制優遇2026完全ガイド',
    metaTitle: '韓国ベンチャー企業税制優遇2026 — 軽減・控除の詳細解説',
    metaDescription: '韓国でKOSME認定ベンチャー企業に適用される全税制優遇：法人税軽減、取得税免除、キャピタルゲイン優遇など。行政書士による無料初回相談。',
    category: '企業認証',
    excerpt: '韓国認定ベンチャー企業の税制優遇を網羅したガイド。法人税軽減、取得税免除、投資インセンティブを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>ベンチャー税制優遇の概要</li><li>所得税軽減</li><li>取得税・固定資産税免除</li><li>投資家向けキャピタルゲイン税優遇</li><li>ストックオプション課税繰延</li><li>資格取得の方法</li><li>よくある質問</li></ol></div><h2>1. ベンチャー税制優遇の概要</h2><p>KOSMEからベンチャー企業の認定を受けた会社は、<strong>「ベンチャー企業育成に関する特別措置法」</strong>に基づき大きな税制優遇を受けられます。</p><h2>2. 所得税軽減</h2><ul><li>初回利益計上日から5年間、法人税を50%軽減</li><li>KOSME認定を受けた中小企業に適用</li><li>国内法人および外国投資ベンチャー企業の両方に適用</li></ul><h2>3. 取得税・固定資産税免除</h2><ul><li>事業用途で取得した不動産の取得税を100%免除</li><li>事業用不動産の固定資産税を5年間50%軽減</li><li>免除はベンチャー認定を維持している間のみ適用</li></ul><h2>4. 投資家向けキャピタルゲイン税優遇</h2><ul><li>認定ベンチャー企業に投資した個人は年間最大3,000万ウォンまで所得から100%控除</li><li>ベンチャーファンドやエンジェル投資組合経由の投資は追加税額控除の対象</li></ul><h2>5. ストックオプション課税繰延</h2><ul><li>ストックオプションを受けた従業員は所得税を株式売却時まで繰り延べ</li><li>スタートアップ従業員にとって大きなキャッシュフロー上のメリット</li></ul><h2>6. 資格取得の方法</h2><ul><li>KOSMEからベンチャー認定を取得する必要がある</li><li>3つの主要ルート：技術評価型、投資型、研究所型</li><li>認定は2年ごとに更新</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. ベンチャー税制優遇を遡及的に申告できますか？</p><p class="faq-a">A. 税制優遇は認定日から開始されます。認定前の期間に遡及して優遇を申告することはできません。</p></div><div class="faq-item"><p class="faq-q">Q. 認定が失効した場合、税制優遇はどうなりますか？</p><p class="faq-a">A. 認定失効と同時に優遇は停止されます。認定が適法に保持されていた場合、以前に申告した免除は一般的に取り消されません。</p></div></div><div class="cta-box"><h3>ベンチャー認定を取得して税制優遇を活用しましょう</h3><p>ビジョン行政書士事務所がベンチャー認定申請を全面サポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 33: rnd-center-tax-credit ───────────────────────────────────────
  {
    slug: 'rnd-center-tax-credit',
    locale: 'en',
    title: 'Corporate R&D Center Tax Credit in Korea — 2026 Guide',
    metaTitle: 'Korea Corporate R&D Center Tax Credit 2026 — How to Claim',
    metaDescription: 'How IITP-recognized corporate research labs in Korea can claim R&D tax credits. Credit rates, eligible expenses, application process, and audit tips. Free consultation.',
    category: 'Business Certification',
    excerpt: 'A guide to the R&D tax credit available to IITP-recognized corporate research centers in Korea — eligible expenses, credit rates, and how to claim correctly.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>R&amp;D Tax Credit Overview</li><li>Credit Rates</li><li>Eligible R&amp;D Expenses</li><li>Non-Eligible Expenses</li><li>How to Claim</li><li>Audit Preparation</li><li>FAQ</li></ol></div><h2>1. R&amp;D Tax Credit Overview</h2><p>Companies with an IITP-recognized corporate research lab can claim income tax credits on qualifying R&amp;D expenses under the <strong>Tax Special Cases Control Act</strong>.</p><h2>2. Credit Rates</h2><ul><li><strong>SMEs:</strong> 25% of qualifying R&amp;D expense amount</li><li><strong>Mid-sized companies:</strong> 8–15% depending on method</li><li><strong>Large companies:</strong> 0–2% (incremental method primarily)</li></ul><h2>3. Eligible R&amp;D Expenses</h2><ul><li>Researcher salaries and benefits</li><li>Materials and consumables used directly in research</li><li>Depreciation of R&amp;D-dedicated equipment</li><li>Contract research fees paid to universities or certified institutes</li></ul><h2>4. Non-Eligible Expenses</h2><ul><li>General administrative costs</li><li>Marketing and sales expenses</li><li>Equipment not exclusively used for R&amp;D</li></ul><h2>5. How to Claim</h2><ol><li>Maintain quarterly R&amp;D expense records segregated from general accounts</li><li>Prepare R&amp;D expense statement for the tax year</li><li>Include the credit in the annual corporate income tax return</li><li>Attach IITP recognition certificate as supporting document</li></ol><h2>6. Audit Preparation</h2><ul><li>Keep all research documentation: lab notebooks, test reports, researcher time records</li><li>Ensure facility and personnel match what was declared to IITP</li><li>Separate R&amp;D bank account is recommended for clarity</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Can R&amp;D credits be carried forward if they exceed tax liability?</p><p class="faq-a">A. Yes. Excess credits can be carried forward for up to 10 years in Korea.</p></div><div class="faq-item"><p class="faq-q">Q. Do we need a separate research account to claim credits?</p><p class="faq-a">A. It is not legally required but strongly recommended for easy verification during audits.</p></div></div><div class="cta-box"><h3>Maximize Your R&amp;D Tax Credits</h3><p>Vision Administrative Office helps companies register their R&amp;D labs and optimize tax credit claims. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'rnd-center-tax-credit',
    locale: 'zh',
    title: '韩国企业研究所研发税收抵扣指南2026',
    metaTitle: '韩国企业研究所研发税收抵扣2026 — 申报方法详解',
    metaDescription: '韩国IITP认定企业研究所如何申报研发税收抵扣。抵扣比率、合规费用、申请流程及审核应对技巧。免费初次咨询。',
    category: '企业认证',
    excerpt: '韩国IITP认定企业研究中心研发税收抵扣指南，包括合规费用、抵扣比率及正确申报方法。',
    content: `<div class="toc"><p>目录</p><ol><li>研发税收抵扣概述</li><li>抵扣比率</li><li>合规研发费用</li><li>不合规费用</li><li>申报方法</li><li>审核准备</li><li>常见问题</li></ol></div><h2>1. 研发税收抵扣概述</h2><p>持有IITP认定企业附属研究所的公司，可依据<strong>《租税特例限制法》</strong>就合规研发费用申报所得税抵扣。</p><h2>2. 抵扣比率</h2><ul><li><strong>中小企业：</strong>合规研发费用的25%</li><li><strong>中型企业：</strong>根据方法为8~15%</li><li><strong>大型企业：</strong>0~2%（主要采用增量法）</li></ul><h2>3. 合规研发费用</h2><ul><li>研究人员薪酬和福利</li><li>直接用于研究的材料和耗材</li><li>研发专用设备的折旧</li><li>支付给大学或认定机构的合同研究费</li></ul><h2>4. 不合规费用</h2><ul><li>一般行政费用</li><li>营销和销售费用</li><li>非专用于研发的设备费用</li></ul><h2>5. 申报方法</h2><ol><li>按季度维护与一般账目分离的研发费用记录</li><li>准备税收年度研发费用报告</li><li>在年度企业所得税申报中包含抵扣</li><li>附上IITP认定证书作为支持文件</li></ol><h2>6. 审核准备</h2><ul><li>保存所有研究文件：实验记录、测试报告、研究人员时间记录</li><li>确保设施和人员与向IITP申报的内容一致</li><li>建议设立独立研发银行账户，便于核查</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 研发抵扣超过税款时可以结转吗？</p><p class="faq-a">A. 可以。韩国超额抵扣可结转最多10年。</p></div><div class="faq-item"><p class="faq-q">Q. 申报抵扣需要独立的研究账户吗？</p><p class="faq-a">A. 法律上不要求，但强烈建议，便于审核时核查。</p></div></div><div class="cta-box"><h3>最大化研发税收抵扣</h3><p>Vision行政士事务所协助企业登记研发实验室并优化税收抵扣申报。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'rnd-center-tax-credit',
    locale: 'ja',
    title: '韓国企業付設研究所R&D税額控除ガイド2026',
    metaTitle: '韓国企業研究所R&D税額控除2026 — 申告方法の詳細解説',
    metaDescription: 'IITP認定を受けた韓国の企業付設研究所がR&D税額控除を申告する方法。控除率、対象費用、申請プロセス、税務調査対策。行政書士による無料初回相談。',
    category: '企業認証',
    excerpt: '韓国IITP認定企業研究センターのR&D税額控除ガイド — 対象費用、控除率、正しい申告方法を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>R&amp;D税額控除の概要</li><li>控除率</li><li>対象R&amp;D費用</li><li>非対象費用</li><li>申告方法</li><li>税務調査への備え</li><li>よくある質問</li></ol></div><h2>1. R&amp;D税額控除の概要</h2><p>IITP認定の企業付設研究所を持つ会社は、<strong>「租税特例制限法」</strong>に基づき適格R&amp;D費用に対する所得税控除を申告できます。</p><h2>2. 控除率</h2><ul><li><strong>中小企業：</strong>適格R&amp;D費用の25%</li><li><strong>中規模企業：</strong>方法により8〜15%</li><li><strong>大企業：</strong>0〜2%（主に増分法）</li></ul><h2>3. 対象R&amp;D費用</h2><ul><li>研究者の給与と福利厚生</li><li>研究に直接使用する材料・消耗品</li><li>R&amp;D専用機器の減価償却費</li><li>大学または認定機関への委託研究費</li></ul><h2>4. 非対象費用</h2><ul><li>一般管理費</li><li>マーケティング・販売費用</li><li>R&amp;D専用でない機器の費用</li></ul><h2>5. 申告方法</h2><ol><li>四半期ごとに一般会計と分離したR&amp;D費用記録を維持する</li><li>税務年度のR&amp;D費用明細書を準備する</li><li>年次法人所得税申告に控除を含める</li><li>IITP認定証明書を添付書類として添付する</li></ol><h2>6. 税務調査への備え</h2><ul><li>すべての研究記録を保管：実験ノート、試験報告書、研究者の勤務時間記録</li><li>施設と人員がIITPへの申告内容と一致していることを確認</li><li>明確化のため専用R&amp;D銀行口座の設置を推奨</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. R&amp;D控除が税額を超えた場合、繰り越せますか？</p><p class="faq-a">A. はい。韓国では超過控除を最大10年間繰り越すことができます。</p></div><div class="faq-item"><p class="faq-q">Q. 控除を申告するために別の研究口座が必要ですか？</p><p class="faq-a">A. 法的には不要ですが、税務調査時の検証のために強く推奨します。</p></div></div><div class="cta-box"><h3>R&amp;D税額控除を最大限に活用しましょう</h3><p>ビジョン行政書士事務所が研究所の登録と税額控除の最適化をサポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 34: cosmetics-responsible-distributor ────────────────────────────
  {
    slug: 'cosmetics-responsible-distributor',
    locale: 'en',
    title: 'Cosmetics Responsible Distributor Registration in Korea — 2026 Guide',
    metaTitle: 'Korea Cosmetics Responsible Distributor 2026 — Registration Requirements',
    metaDescription: 'How to register as a cosmetics responsible distributor in Korea. MFDS requirements, labeling rules, safety data, and application procedure. Free consultation.',
    category: 'Cosmetics',
    excerpt: 'A guide to cosmetics responsible distributor registration in Korea — MFDS requirements, safety responsibilities, and step-by-step application.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is a Responsible Distributor?</li><li>Difference from Manufacturer Registration</li><li>MFDS Requirements</li><li>Required Documents</li><li>Application Procedure</li><li>Post-Registration Duties</li><li>FAQ</li></ol></div><h2>1. What Is a Responsible Distributor?</h2><p>Under Korea's <strong>Cosmetics Act</strong>, a responsible distributor (책임판매업자) is the entity legally responsible for ensuring a cosmetic product's safety, labeling, and compliance before it enters the Korean market.</p><h2>2. Difference from Manufacturer Registration</h2><ul><li><strong>Manufacturer:</strong> physical production facility, GMP required</li><li><strong>Responsible Distributor:</strong> brand/distributor responsible for product safety and market compliance — can source from manufacturers</li><li>One company can hold both registrations</li></ul><h2>3. MFDS Requirements</h2><ul><li>Must designate a Quality Control Manager with relevant qualifications</li><li>Must establish a product quality management system</li><li>Must maintain product safety data sheets for all marketed products</li></ul><h2>4. Required Documents</h2><ul><li>Responsible distributor registration application</li><li>Quality Control Manager's qualification documents</li><li>Business registration certificate</li><li>Facilities description (office is sufficient; no manufacturing facility required)</li></ul><h2>5. Application Procedure</h2><ol><li>Submit application to regional MFDS office</li><li>Document review (approx. 7–14 business days)</li><li>Registration certificate issued</li><li>Report each product to MFDS before launch</li></ol><h2>6. Post-Registration Duties</h2><ul><li>Report adverse events to MFDS within 15 days</li><li>Maintain product labeling in Korean</li><li>Annual quality management review</li><li>Notify MFDS of any changes to key personnel or business details</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Can a foreign company be a responsible distributor in Korea?</p><p class="faq-a">A. Yes, but the foreign company must designate a Korean legal entity or agent as the registered responsible distributor in Korea.</p></div><div class="faq-item"><p class="faq-q">Q. Do I need a separate registration for each product?</p><p class="faq-a">A. No. One responsible distributor registration covers all products. However, each product must be reported to MFDS before sale.</p></div></div><div class="cta-box"><h3>Register as a Cosmetics Responsible Distributor</h3><p>Vision Administrative Office handles cosmetics responsible distributor registration and MFDS filings. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'cosmetics-responsible-distributor',
    locale: 'zh',
    title: '韩国化妆品责任销售业者登记指南2026',
    metaTitle: '韩国化妆品责任销售业者登记2026 — 申请要求详解',
    metaDescription: '在韩国登记为化妆品责任销售业者的方法。MFDS要求、标签规定、安全数据及申请流程。免费初次咨询。',
    category: '化妆品',
    excerpt: '韩国化妆品责任销售业者登记指南，包括MFDS要求、安全责任及分步申请流程。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是责任销售业者？</li><li>与制造业者登记的区别</li><li>MFDS要求</li><li>所需材料</li><li>申请流程</li><li>登记后职责</li><li>常见问题</li></ol></div><h2>1. 什么是责任销售业者？</h2><p>依据韩国<strong>《化妆品法》</strong>，责任销售业者是在化妆品进入韩国市场前，对产品安全性、标签及合规性承担法律责任的主体。</p><h2>2. 与制造业者登记的区别</h2><ul><li><strong>制造业者：</strong>实体生产设施，须符合GMP标准</li><li><strong>责任销售业者：</strong>负责产品安全和市场合规的品牌/经销商，可向制造商采购</li><li>同一公司可同时持有两种登记</li></ul><h2>3. MFDS要求</h2><ul><li>须指定具备相关资质的质量管理负责人</li><li>须建立产品质量管理体系</li><li>须为所有上市产品维护产品安全数据表</li></ul><h2>4. 所需材料</h2><ul><li>责任销售业者登记申请表</li><li>质量管理负责人的资质证明</li><li>营业执照</li><li>设施说明（办公室即可）</li></ul><h2>5. 申请流程</h2><ol><li>向地区MFDS办公室提交申请</li><li>材料审查（约7~14个工作日）</li><li>颁发登记证</li><li>上市前向MFDS报告每种产品</li></ol><h2>6. 登记后职责</h2><ul><li>须在15天内向MFDS报告不良反应</li><li>维护韩文产品标签</li><li>年度质量管理审查</li><li>人员或企业信息变更须通知MFDS</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 外国公司能在韩国担任责任销售业者吗？</p><p class="faq-a">A. 可以，但须指定韩国法人或代理人作为注册责任销售业者。</p></div><div class="faq-item"><p class="faq-q">Q. 每种产品需要单独登记吗？</p><p class="faq-a">A. 不需要。一个登记涵盖所有产品，但每种产品须在销售前向MFDS报告。</p></div></div><div class="cta-box"><h3>登记为化妆品责任销售业者</h3><p>Vision行政士事务所代办化妆品责任销售业者登记及MFDS申报。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'cosmetics-responsible-distributor',
    locale: 'ja',
    title: '韓国化粧品責任販売業者登録ガイド2026',
    metaTitle: '韓国化粧品責任販売業者登録2026 — 申請要件の詳細',
    metaDescription: '韓国で化粧品責任販売業者として登録する方法。MFDS要件、ラベリングルール、安全データ、申請手続き。行政書士による無料初回相談。',
    category: '化粧品',
    excerpt: '韓国の化粧品責任販売業者登録ガイド — MFDS要件、安全責任、ステップバイステップの申請方法を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>責任販売業者とは？</li><li>製造業者登録との違い</li><li>MFDS要件</li><li>必要書類</li><li>申請手続き</li><li>登録後の義務</li><li>よくある質問</li></ol></div><h2>1. 責任販売業者とは？</h2><p>韓国の<strong>化粧品法</strong>に基づき、責任販売業者は化粧品が韓国市場に入る前にその安全性、ラベリング、コンプライアンスを法的に保証する主体です。</p><h2>2. 製造業者登録との違い</h2><ul><li><strong>製造業者：</strong>物理的な生産施設、GMP必須</li><li><strong>責任販売業者：</strong>製品安全と市場コンプライアンスに責任を持つブランド/販売業者</li><li>1社が両方の登録を保持できる</li></ul><h2>3. MFDS要件</h2><ul><li>関連資格を持つ品質管理担当者の指定が必要</li><li>製品品質管理システムの確立が必要</li><li>市販するすべての製品の製品安全データシートの維持が必要</li></ul><h2>4. 必要書類</h2><ul><li>責任販売業者登録申請書</li><li>品質管理担当者の資格書類</li><li>事業者登録証</li><li>施設説明書（事務所で十分）</li></ul><h2>5. 申請手続き</h2><ol><li>地域MFDSオフィスに申請書を提出</li><li>書類審査（約7〜14営業日）</li><li>登録証の交付</li><li>発売前に各製品をMFDSに報告</li></ol><h2>6. 登録後の義務</h2><ul><li>副作用は15日以内にMFDSに報告</li><li>韓国語の製品ラベルを維持</li><li>年次品質管理レビュー</li><li>主要人員や事業情報の変更はMFDSに通知</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 外国企業が韓国で責任販売業者になれますか？</p><p class="faq-a">A. はい。ただし、韓国の法人または代理人を登録責任販売業者として指定する必要があります。</p></div><div class="faq-item"><p class="faq-q">Q. 各製品に別々の登録が必要ですか？</p><p class="faq-a">A. いいえ。1つの登録ですべての製品をカバーします。ただし、各製品は販売前にMFDSに報告する必要があります。</p></div></div><div class="cta-box"><h3>化粧品責任販売業者として登録しましょう</h3><p>ビジョン行政書士事務所が化粧品責任販売業者登録とMFDS申告を担当します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 35: academy-establishment-registration-guide ─────────────────────
  {
    slug: 'academy-establishment-registration-guide',
    locale: 'en',
    title: 'Private Academy (Hagwon) Registration in Korea — 2026 Complete Guide',
    metaTitle: 'Korea Hagwon Registration 2026 — How to Register a Private Academy',
    metaDescription: 'How to register a private academy (학원, hagwon) in Korea. Facility requirements, qualified instructor rules, required documents, and registration procedure. Free consultation.',
    category: 'Education',
    excerpt: 'Step-by-step guide to registering a private academy (hagwon/학원) in Korea — facility, instructor, safety requirements, and the local office registration process.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Overview of Hagwon Registration</li><li>Types of Private Academies</li><li>Facility Requirements</li><li>Instructor Requirements</li><li>Required Documents</li><li>Registration Procedure</li><li>FAQ</li></ol></div><h2>1. Overview of Hagwon Registration</h2><p>Any private educational institution in Korea charging tuition fees must register as a <strong>학원 (hagwon)</strong> under the <strong>Private Educational Institutions Act</strong> with the local education office.</p><h2>2. Types of Private Academies</h2><ul><li>Academic subject academies (Korean, math, English, etc.)</li><li>Arts, music, and sports academies</li><li>Vocational training academies</li><li>Language schools (with foreign students)</li></ul><h2>3. Facility Requirements</h2><ul><li>Minimum 60 m² for general subject academies</li><li>Ventilation, restrooms, and fire safety compliance required</li><li>Facility must not be in a basement below certain depth limits</li><li>Building must be zoned for educational or permitted mixed use</li></ul><h2>4. Instructor Requirements</h2><ul><li>Academy director (원장): must hold an academy director's license or qualify by experience</li><li>Subject teachers: relevant degree or qualification recommended</li></ul><h2>5. Required Documents</h2><ul><li>Academy registration application</li><li>Facility floor plan</li><li>Building use confirmation document</li><li>Fire safety inspection certificate</li><li>Director's identity and qualification documents</li><li>Lease agreement</li></ul><h2>6. Registration Procedure</h2><ol><li>Submit application to district education office (교육지원청)</li><li>Facility inspection (fire, safety, zoning)</li><li>Registration certificate issued (approx. 14–21 business days)</li><li>Report tuition fees to education office before starting operations</li></ol><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Can a foreigner open a hagwon in Korea?</p><p class="faq-a">A. Yes, but the director's role may require a Korean co-director or proper visa status. Foreigners are eligible to own and operate hagwons with the right documentation.</p></div><div class="faq-item"><p class="faq-q">Q. Are there restrictions on tutoring hours?</p><p class="faq-a">A. Yes. Hagwons may not operate past 10 PM for minors. Violation can result in suspension or revocation of registration.</p></div></div><div class="cta-box"><h3>Register Your Academy Correctly</h3><p>Vision Administrative Office handles hagwon registration and compliance filings. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'academy-establishment-registration-guide',
    locale: 'zh',
    title: '韩国私立补习班（学院）登记指南2026',
    metaTitle: '韩国学院登记2026 — 私立补习班注册完整指南',
    metaDescription: '在韩国登记私立补习班（학원）的方法。设施要求、教师资质规定、所需材料及登记流程。专业行政士免费初次咨询。',
    category: '教育',
    excerpt: '在韩国登记私立补习班（학원）的分步指南，包括设施、教师、安全要求及地方教育部门登记流程。',
    content: `<div class="toc"><p>目录</p><ol><li>学院登记概述</li><li>私立学院类型</li><li>设施要求</li><li>教师要求</li><li>所需材料</li><li>登记流程</li><li>常见问题</li></ol></div><h2>1. 学院登记概述</h2><p>韩国任何收取学费的私立教育机构，须依据《私立学院法》向当地教育支援厅登记为학원（补习班/学院）。</p><h2>2. 私立学院类型</h2><ul><li>学科补习班（语文、数学、英语等）</li><li>艺术、音乐、体育学院</li><li>职业技能培训学院</li><li>语言学校（含外国学生）</li></ul><h2>3. 设施要求</h2><ul><li>一般学科补习班最低60m²</li><li>须符合通风、卫生间及消防安全规定</li><li>设施不得位于超过规定深度的地下室</li><li>建筑须分区为教育用途或允许教育的混合用途</li></ul><h2>4. 教师要求</h2><ul><li>院长须持有院长执照或凭经验取得资格</li><li>学科教师建议具备相关学位或资质</li></ul><h2>5. 所需材料</h2><ul><li>学院登记申请表</li><li>设施平面图</li><li>建筑用途确认文件</li><li>消防安全检查证明</li><li>院长身份及资质证明</li><li>租赁合同</li></ul><h2>6. 登记流程</h2><ol><li>向辖区教育支援厅提交申请</li><li>设施检查（消防、安全、分区）</li><li>颁发登记证（约14~21个工作日）</li><li>开业前向教育支援厅报告学费</li></ol><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 外国人能在韩国开设补习班吗？</p><p class="faq-a">A. 可以，但院长职务可能需要韩国联合院长或适当签证身份。外国人可凭正确文件拥有并经营补习班。</p></div><div class="faq-item"><p class="faq-q">Q. 授课时间有限制吗？</p><p class="faq-a">A. 有。补习班不得在晚上10点后为未成年人提供服务。违规可能导致停业或吊销登记。</p></div></div><div class="cta-box"><h3>正确登记您的补习班</h3><p>Vision行政士事务所代办学院登记及合规申报。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'academy-establishment-registration-guide',
    locale: 'ja',
    title: '韓国私立学習塾（学院）登録ガイド2026',
    metaTitle: '韓国ハグォン登録2026 — 私立学院設立の完全ガイド',
    metaDescription: '韓国で私立学習塾（학원）を登録する方法。施設要件、講師要件、必要書類、登録手続き。行政書士による無料初回相談。',
    category: '教育',
    excerpt: '韓国で私立学習塾（ハグォン/학원）を登録するためのステップバイステップガイド — 施設、講師、安全要件と地方教育支援庁の登録プロセスを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>学院登録の概要</li><li>私立学院の種類</li><li>施設要件</li><li>講師要件</li><li>必要書類</li><li>登録手続き</li><li>よくある質問</li></ol></div><h2>1. 学院登録の概要</h2><p>韓国で授業料を徴収するすべての私立教育機関は、<strong>学院法</strong>に基づき地方教育支援庁に学院（학원）として登録する必要があります。</p><h2>2. 私立学院の種類</h2><ul><li>学科補習塾（国語、数学、英語など）</li><li>芸術・音楽・スポーツ学院</li><li>職業訓練学院</li><li>語学学校（外国人学生を含む）</li></ul><h2>3. 施設要件</h2><ul><li>一般学科補習塾は最低60m²</li><li>換気・トイレ・消防安全への準拠が必要</li><li>一定深度を超える地下には施設を設けられない</li><li>建物は教育用途または許可される複合用途にゾーニングされている必要がある</li></ul><h2>4. 講師要件</h2><ul><li>学院長は学院長資格証の保持、または経験による資格取得が必要</li><li>科目担当教師は関連学位または資格が推奨される</li></ul><h2>5. 必要書類</h2><ul><li>学院登録申請書</li><li>施設平面図</li><li>建物用途確認書類</li><li>消防安全検査証明書</li><li>学院長の身分・資格書類</li><li>賃貸借契約書</li></ul><h2>6. 登録手続き</h2><ol><li>管轄教育支援庁に申請書を提出</li><li>施設検査（消防・安全・ゾーニング）</li><li>登録証の交付（約14〜21営業日）</li><li>開業前に授業料を教育支援庁に報告</li></ol><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 外国人が韓国で学習塾を開設できますか？</p><p class="faq-a">A. できます。ただし、院長の役割には韓国人共同院長または適切なビザステータスが必要な場合があります。</p></div><div class="faq-item"><p class="faq-q">Q. 授業時間に制限はありますか？</p><p class="faq-a">A. あります。未成年者に対しては午後10時以降の授業は禁止されています。</p></div></div><div class="cta-box"><h3>学院を正しく登録しましょう</h3><p>ビジョン行政書士事務所が学院登録とコンプライアンス申告を担当します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 36: laundry-business-permit-guide ────────────────────────────────
  {
    slug: 'laundry-business-permit-guide',
    locale: 'en',
    title: 'Laundry Business Permit in Korea — 2026 Registration Guide',
    metaTitle: 'Korea Laundry Business Registration 2026 — Permit Requirements',
    metaDescription: 'How to register a laundry business (세탁업) in Korea. Facility requirements, environmental permits, required documents, and registration procedure. Free consultation.',
    category: 'Service Business',
    excerpt: 'A guide to registering a laundry business (세탁업) in Korea — facility standards, environmental compliance, and step-by-step registration procedure.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Laundry Business Types in Korea</li><li>Registration Requirements</li><li>Facility Standards</li><li>Environmental Compliance</li><li>Required Documents</li><li>Registration Procedure</li><li>FAQ</li></ol></div><h2>1. Laundry Business Types in Korea</h2><ul><li><strong>Coin/General Laundry:</strong> customer self-service or staff-assisted laundry</li><li><strong>Dry Cleaning/Laundry Service:</strong> pick-up and delivery</li><li>Both require registration under the <strong>Public Health Management Act</strong></li></ul><h2>2. Registration Requirements</h2><ul><li>Registered business at local district office</li><li>Facility must meet minimum sanitation standards</li><li>Wastewater treatment equipment if using chemical solvents (dry cleaning)</li></ul><h2>3. Facility Standards</h2><ul><li>Minimum 16.5 m² for wash area</li><li>Separate customer area and washing area</li><li>Adequate ventilation (especially for solvent-based cleaning)</li><li>Fire-resistant materials for solvent storage areas</li></ul><h2>4. Environmental Compliance</h2><ul><li>Dry cleaning using perchloroethylene requires environmental registration</li><li>Wastewater discharge must comply with the Water Quality Conservation Act</li><li>Solvent waste must be disposed of by a licensed waste company</li></ul><h2>5. Required Documents</h2><ul><li>Public health business registration application</li><li>Facility floor plan</li><li>Equipment specification list</li><li>Environmental permit (if using chemical solvents)</li><li>Business registration certificate</li></ul><h2>6. Registration Procedure</h2><ol><li>Submit application to local district office health department</li><li>Facility inspection</li><li>Registration certificate issued (approx. 5–10 business days)</li></ol><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Can a laundry business operate from a residential building?</p><p class="faq-a">A. Commercial floors of mixed-use buildings are typically permitted. Pure residential buildings are generally not.</p></div><div class="faq-item"><p class="faq-q">Q. Is there a health inspection required before opening?</p><p class="faq-a">A. Yes. A facility inspection by the local health department is part of the registration process.</p></div></div><div class="cta-box"><h3>Register Your Laundry Business</h3><p>Vision Administrative Office handles public health business registrations including laundry businesses. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'laundry-business-permit-guide',
    locale: 'zh',
    title: '韩国洗衣业许可证申请指南2026',
    metaTitle: '韩国洗衣业登记2026 — 许可证申请要求',
    metaDescription: '在韩国登记洗衣业（세탁업）的方法。设施要求、环保许可、所需材料及登记流程。专业行政士免费初次咨询。',
    category: '服务业',
    excerpt: '韩国洗衣业（세탁업）登记指南，包括设施标准、环境合规及分步登记流程。',
    content: `<div class="toc"><p>目录</p><ol><li>韩国洗衣业类型</li><li>登记要求</li><li>设施标准</li><li>环境合规</li><li>所需材料</li><li>登记流程</li><li>常见问题</li></ol></div><h2>1. 韩国洗衣业类型</h2><ul><li><strong>投币/普通洗衣：</strong>顾客自助或员工协助洗衣</li><li><strong>干洗/洗衣服务：</strong>上门收取和送还服务</li><li>两者均须依据<strong>《公众卫生管理法》</strong>进行登记</li></ul><h2>2. 登记要求</h2><ul><li>在当地区/市政府办理营业登记</li><li>设施须符合最低卫生标准</li><li>使用化学溶剂须配备污水处理设备</li></ul><h2>3. 设施标准</h2><ul><li>洗涤区最低16.5m²</li><li>顾客区域与洗涤区域须分开</li><li>充足的通风（尤其是基于溶剂的清洁）</li><li>溶剂存储区须采用防火材料</li></ul><h2>4. 环境合规</h2><ul><li>使用全氯乙烯的干洗须进行环保登记</li><li>污水排放须符合《水质保护法》</li><li>溶剂废物须由持牌废物处理公司处置</li></ul><h2>5. 所需材料</h2><ul><li>公众卫生业登记申请表</li><li>设施平面图</li><li>设备规格清单</li><li>环保许可证（如使用化学溶剂）</li><li>营业执照</li></ul><h2>6. 登记流程</h2><ol><li>向当地区政府卫生部门提交申请</li><li>设施检查</li><li>颁发登记证（约5~10个工作日）</li></ol><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 洗衣业能在住宅楼运营吗？</p><p class="faq-a">A. 混合用途建筑的商业楼层通常允许。纯住宅楼一般不允许。</p></div><div class="faq-item"><p class="faq-q">Q. 开业前需要卫生检查吗？</p><p class="faq-a">A. 是的。当地卫生部门的设施检查是登记流程的一部分。</p></div></div><div class="cta-box"><h3>登记洗衣业务</h3><p>Vision行政士事务所代办包括洗衣业在内的公众卫生业登记。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'laundry-business-permit-guide',
    locale: 'ja',
    title: '韓国クリーニング業許可証登録ガイド2026',
    metaTitle: '韓国クリーニング業登録2026 — 許可要件の詳細',
    metaDescription: '韓国でクリーニング業（세탁업）を登録する方法。施設要件、環境許可、必要書類、登録手続き。行政書士による無料初回相談。',
    category: 'サービス業',
    excerpt: '韓国のクリーニング業（세탁업）登録ガイド — 施設基準、環境コンプライアンス、ステップバイステップの登録手続きを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>韓国のクリーニング業の種類</li><li>登録要件</li><li>施設基準</li><li>環境コンプライアンス</li><li>必要書類</li><li>登録手続き</li><li>よくある質問</li></ol></div><h2>1. 韓国のクリーニング業の種類</h2><ul><li><strong>コインランドリー/一般洗濯：</strong>顧客のセルフサービスまたはスタッフ補助による洗濯</li><li><strong>ドライクリーニング/洗濯サービス：</strong>集荷・配達サービス</li><li>両方とも公衆衛生管理法に基づく登録が必要</li></ul><h2>2. 登録要件</h2><ul><li>地方区役所での事業者登録</li><li>施設は最低衛生基準を満たすこと</li><li>化学溶剤使用時は排水処理設備が必要</li></ul><h2>3. 施設基準</h2><ul><li>洗濯エリアは最低16.5m²</li><li>顧客エリアと洗濯エリアを分離</li><li>十分な換気（特に溶剤系クリーニングの場合）</li><li>溶剤保管エリアは耐火材料を使用</li></ul><h2>4. 環境コンプライアンス</h2><ul><li>パークロロエチレンを使用するドライクリーニングは環境登録が必要</li><li>排水は水質保全法に準拠する必要がある</li><li>溶剤廃棄物は許可を受けた廃棄物会社が処分する必要がある</li></ul><h2>5. 必要書類</h2><ul><li>公衆衛生業登録申請書</li><li>施設平面図</li><li>設備仕様リスト</li><li>環境許可証（化学溶剤使用の場合）</li><li>事業者登録証</li></ul><h2>6. 登録手続き</h2><ol><li>地方区役所の衛生担当部署に申請書を提出</li><li>施設検査</li><li>登録証の交付（約5〜10営業日）</li></ol><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. クリーニング業は住宅ビルで営業できますか？</p><p class="faq-a">A. 複合用途ビルの商業フロアは一般的に許可されます。純住宅ビルは一般的に不可です。</p></div><div class="faq-item"><p class="faq-q">Q. 開業前に衛生検査が必要ですか？</p><p class="faq-a">A. はい。地方衛生担当部署による施設検査は登録プロセスの一部です。</p></div></div><div class="cta-box"><h3>クリーニング業を登録しましょう</h3><p>ビジョン行政書士事務所がクリーニング業を含む公衆衛生業の登録を担当します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 37: real-estate-agency-registration-guide ────────────────────────
  {
    slug: 'real-estate-agency-registration-guide',
    locale: 'en',
    title: 'Real Estate Agency Registration in Korea — 2026 Guide',
    metaTitle: 'Korea Real Estate Agency Registration 2026 — Requirements & Procedure',
    metaDescription: 'How to register a real estate agency in Korea. Brokerage license requirements, registration with local government, bond insurance, and compliance checklist. Free consultation.',
    category: 'Real Estate',
    excerpt: 'A guide to registering a licensed real estate agency in Korea — qualifications, required documents, local government registration, and compliance obligations.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Overview of Real Estate Agency Registration</li><li>Broker Qualifications Required</li><li>Required Documents</li><li>Surety Bond and Liability Insurance</li><li>Registration Procedure</li><li>Ongoing Compliance</li><li>FAQ</li></ol></div><h2>1. Overview of Real Estate Agency Registration</h2><p>In Korea, operating a real estate brokerage requires a license from the local government under the <strong>Act on Business Affairs of Licensed Real Estate Agents</strong>. Only holders of the <strong>공인중개사 (Certified Real Estate Agent)</strong> qualification can register a brokerage.</p><h2>2. Broker Qualifications Required</h2><ul><li>Must pass the national 공인중개사 examination</li><li>Cannot be disqualified due to criminal history or prior license revocation</li><li>Foreign nationals who passed the Korean real estate exam can also register</li></ul><h2>3. Required Documents</h2><ul><li>Brokerage registration application</li><li>Certified Real Estate Agent certificate</li><li>Photo ID</li><li>Facility lease agreement</li><li>Business registration certificate</li><li>Surety bond or liability insurance certificate</li></ul><h2>4. Surety Bond and Liability Insurance</h2><ul><li>KRW 100 million surety bond required for individual brokers</li><li>KRW 200 million for corporate brokerages</li><li>Alternatively, join a certified real estate agent cooperative</li></ul><h2>5. Registration Procedure</h2><ol><li>Submit application to local city/county office</li><li>Document review and qualification verification</li><li>Registration certificate issued (approx. 5–7 business days)</li><li>Post the registration certificate visibly in the office</li></ol><h2>6. Ongoing Compliance</h2><ul><li>Display commission rate table in office</li><li>Issue transaction confirmation documents for every deal</li><li>Annual renewal of liability insurance or cooperative membership</li><li>Mandatory continuing education (28 hours every 2 years)</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Can someone without the certificate employ a certified agent and open a brokerage?</p><p class="faq-a">A. No. The registered representative must personally hold the 공인중개사 certificate.</p></div><div class="faq-item"><p class="faq-q">Q. Can a foreigner open a real estate agency in Korea?</p><p class="faq-a">A. Yes, if the foreigner holds a valid 공인중개사 certificate and has legal residency status.</p></div></div><div class="cta-box"><h3>Register Your Real Estate Agency</h3><p>Vision Administrative Office handles real estate agency registration and business compliance filings. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'real-estate-agency-registration-guide',
    locale: 'zh',
    title: '韩国房产中介机构登记指南2026',
    metaTitle: '韩国房产中介登记2026 — 资质与申请流程',
    metaDescription: '在韩国登记房产中介机构的方法。经纪人执照要求、地方政府登记、保证金保险及合规清单。专业行政士免费初次咨询。',
    category: '房地产',
    excerpt: '韩国持牌房产中介机构登记指南，包括资质要求、所需材料、地方政府登记及合规义务。',
    content: `<div class="toc"><p>目录</p><ol><li>房产中介登记概述</li><li>经纪人资质要求</li><li>所需材料</li><li>保证金及责任险</li><li>登记流程</li><li>持续合规</li><li>常见问题</li></ol></div><h2>1. 房产中介登记概述</h2><p>在韩国经营房产中介业务，须依据<strong>《公认中介士业务法》</strong>取得当地政府颁发的执照。只有持有<strong>공인중개사（公认中介士）</strong>资格的人员才能登记中介机构。</p><h2>2. 经纪人资质要求</h2><ul><li>须通过全国公认中介士考试</li><li>不得因犯罪记录或以前执照被吊销而被取消资格</li><li>通过韩国房产考试的外国人也可登记</li></ul><h2>3. 所需材料</h2><ul><li>中介机构登记申请表</li><li>公认中介士证书</li><li>身份证件</li><li>设施租赁合同</li><li>营业执照</li><li>保证金或责任险证明</li></ul><h2>4. 保证金及责任险</h2><ul><li>个人中介须缴纳1亿韩元保证金</li><li>法人中介机构须缴纳2亿韩元</li><li>也可加入公认中介士合作社</li></ul><h2>5. 登记流程</h2><ol><li>向当地市/郡/区政府提交申请</li><li>材料审查及资质核验</li><li>颁发登记证（约5~7个工作日）</li><li>在办公室显眼处张贴登记证</li></ol><h2>6. 持续合规</h2><ul><li>在办公室展示中介费率表</li><li>为每笔交易出具交易确认文件</li><li>责任险或合作社会员资格年度更新</li><li>强制性继续教育（每两年28小时）</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 没有证书的人能雇用持证人员并开设中介机构吗？</p><p class="faq-a">A. 不能。中介机构的登记代表人须本人持有公认中介士证书。</p></div><div class="faq-item"><p class="faq-q">Q. 外国人能在韩国开设房产中介机构吗？</p><p class="faq-a">A. 可以，前提是该外国人持有有效证书及合法居留身份。</p></div></div><div class="cta-box"><h3>登记您的房产中介机构</h3><p>Vision行政士事务所代办房产中介机构登记及营业合规申报。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'real-estate-agency-registration-guide',
    locale: 'ja',
    title: '韓国不動産仲介業登録ガイド2026',
    metaTitle: '韓国不動産仲介業登録2026 — 資格と申請手続き',
    metaDescription: '韓国で不動産仲介業を登録する方法。仲介士資格要件、地方政府への登録、保証金保険、コンプライアンスチェックリスト。行政書士による無料初回相談。',
    category: '不動産',
    excerpt: '韓国の不動産仲介業登録ガイド — 資格要件、必要書類、地方政府登録、コンプライアンス義務を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>不動産仲介業登録の概要</li><li>必要な仲介士資格</li><li>必要書類</li><li>供託金・賠償責任保険</li><li>登録手続き</li><li>継続的コンプライアンス</li><li>よくある質問</li></ol></div><h2>1. 不動産仲介業登録の概要</h2><p>韓国で不動産仲介業を営むには、<strong>「公認仲介士業務に関する法律」</strong>に基づき地方自治体からの許可が必要です。<strong>공인중개사（公認仲介士）</strong>資格保有者のみが仲介業を登録できます。</p><h2>2. 必要な仲介士資格</h2><ul><li>全国公認仲介士試験に合格していること</li><li>犯罪歴や過去の資格取消しによる欠格事由がないこと</li><li>韓国の不動産試験に合格した外国人も登録可能</li></ul><h2>3. 必要書類</h2><ul><li>仲介業登録申請書</li><li>公認仲介士証明書</li><li>写真付き身分証明書</li><li>施設賃貸借契約書</li><li>事業者登録証</li><li>供託金または賠償責任保険証明書</li></ul><h2>4. 供託金・賠償責任保険</h2><ul><li>個人仲介業者：1億ウォンの保証保険が必要</li><li>法人仲介業：2億ウォン</li><li>代替として公認仲介士共済組合に加入も可能</li></ul><h2>5. 登録手続き</h2><ol><li>地方市区町村役場に申請書を提出</li><li>書類審査と資格確認</li><li>登録証の交付（約5〜7営業日）</li><li>登録証を事務所の見えるところに掲示</li></ol><h2>6. 継続的コンプライアンス</h2><ul><li>事務所に仲介報酬率表を掲示</li><li>すべての取引に取引確認書を発行</li><li>賠償責任保険または共済組合加入の年次更新</li><li>義務的継続教育（2年に28時間）</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 証明書がない人が資格保有者を雇って仲介業を開設できますか？</p><p class="faq-a">A. できません。仲介業の登録代表者は自身で証明書を保持している必要があります。</p></div><div class="faq-item"><p class="faq-q">Q. 外国人が韓国で不動産仲介業を開設できますか？</p><p class="faq-a">A. はい。有効な証明書と適法な在留資格を持っている場合に可能です。</p></div></div><div class="cta-box"><h3>不動産仲介業を登録しましょう</h3><p>ビジョン行政書士事務所が不動産仲介業の登録と事業コンプライアンス申告を担当します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 38: restaurant-food-service-license-guide ────────────────────────
  {
    slug: 'restaurant-food-service-license-guide',
    locale: 'en',
    title: 'Restaurant & Food Service License in Korea — 2026 Complete Guide',
    metaTitle: 'Korea Restaurant Food Service License 2026 — Requirements & Procedure',
    metaDescription: 'How to obtain a food service license (식품접객업) for a restaurant or café in Korea. Health permit, facility requirements, food hygiene training, and registration steps. Free consultation.',
    category: 'Food',
    excerpt: 'A complete guide to obtaining a food service license (식품접객업) for a restaurant, café, or bar in Korea — health permit, facility standards, and registration procedure.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Types of Food Service Business</li><li>Who Needs a License?</li><li>Facility Requirements</li><li>Food Hygiene Manager</li><li>Required Documents</li><li>Application Procedure</li><li>FAQ</li></ol></div><h2>1. Types of Food Service Business</h2><ul><li><strong>General restaurant (일반음식점):</strong> dine-in meals and alcohol</li><li><strong>Simple food service (휴게음식점):</strong> light meals and non-alcoholic beverages (cafés, bakeries, fast food)</li><li><strong>Bar (단란주점/유흥주점):</strong> higher license tier for establishments with performances or adult entertainment</li></ul><h2>2. Who Needs a License?</h2><p>Any business selling food or beverages for on-site consumption in Korea must obtain a food service business license from the local government (시/군/구청) under the <strong>Food Sanitation Act</strong>.</p><h2>3. Facility Requirements</h2><ul><li>Kitchen must have adequate ventilation and grease traps</li><li>Separate food preparation and dishwashing areas</li><li>Refrigeration equipment for perishables</li><li>Restrooms (can be shared in some cases)</li><li>Fire safety compliance</li></ul><h2>4. Food Hygiene Manager</h2><ul><li>At least one designated food hygiene manager (식품위생관리책임자) required</li><li>Must complete food hygiene training (6 hours initial, 3 hours every 2 years renewal)</li><li>In practice, business owner often takes this role</li></ul><h2>5. Required Documents</h2><ul><li>Food service business registration application</li><li>Facility floor plan showing kitchen layout</li><li>Building use confirmation (for food service)</li><li>Fire safety inspection certificate</li><li>Food hygiene manager training certificate</li><li>Business registration certificate</li></ul><h2>6. Application Procedure</h2><ol><li>Complete food hygiene training</li><li>Submit application to local district office (구청)</li><li>Health/facility inspection</li><li>License issued (approx. 3–7 business days)</li><li>Post license prominently in the establishment</li></ol><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Do I need a separate liquor license?</p><p class="faq-a">A. A general restaurant license (일반음식점) covers incidental alcohol sales. A dedicated bar (주점업) requires a separate liquor business permit.</p></div><div class="faq-item"><p class="faq-q">Q. Can a foreigner open a restaurant in Korea?</p><p class="faq-a">A. Yes, with a valid business visa (D-9 for investment) or F-visa. The business registration and license process is the same.</p></div></div><div class="cta-box"><h3>Get Your Restaurant License</h3><p>Vision Administrative Office handles food service business licensing and compliance. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'restaurant-food-service-license-guide',
    locale: 'zh',
    title: '韩国餐饮业营业执照申请指南2026',
    metaTitle: '韩国餐厅餐饮业执照2026 — 申请要求与流程',
    metaDescription: '如何在韩国取得餐厅或咖啡厅的餐饮业营业执照（식품접객업）。卫生许可证、设施要求、食品卫生培训及登记步骤。免费初次咨询。',
    category: '餐饮',
    excerpt: '在韩国取得餐厅、咖啡厅或酒吧餐饮业执照（식품접객업）的完整指南，包括卫生许可、设施标准及登记流程。',
    content: `<div class="toc"><p>目录</p><ol><li>餐饮业类型</li><li>谁需要执照？</li><li>设施要求</li><li>食品卫生管理负责人</li><li>所需材料</li><li>申请流程</li><li>常见问题</li></ol></div><h2>1. 餐饮业类型</h2><ul><li><strong>一般餐馆（일반음식점）：</strong>堂食及酒水销售</li><li><strong>简餐服务（휴게음식점）：</strong>轻食及非酒精饮料（咖啡厅、面包店、快餐）</li><li><strong>酒吧（단란주점/유흥주점）：</strong>提供表演或成人娱乐的更高级别许可证</li></ul><h2>2. 谁需要执照？</h2><p>在韩国销售食品或饮料供现场消费的任何企业，须依据<strong>《食品卫生法》</strong>从当地政府（市/郡/区政府）取得餐饮业营业执照。</p><h2>3. 设施要求</h2><ul><li>厨房须有充足的通风和油脂收集设备</li><li>食品准备区与洗碗区须分开</li><li>易腐食品的冷藏设备</li><li>卫生间（某些情况下可共用）</li><li>消防安全合规</li></ul><h2>4. 食品卫生管理负责人</h2><ul><li>须至少指定一名食品卫生管理负责人</li><li>须完成食品卫生培训（初次6小时，每两年更新3小时）</li><li>实际操作中，企业主通常担任此角色</li></ul><h2>5. 所需材料</h2><ul><li>餐饮业登记申请表</li><li>显示厨房布局的设施平面图</li><li>建筑用途确认文件（餐饮业用途）</li><li>消防安全检查证明</li><li>食品卫生管理负责人培训证书</li><li>营业执照</li></ul><h2>6. 申请流程</h2><ol><li>完成食品卫生培训</li><li>向当地区政府提交申请</li><li>卫生/设施检查</li><li>颁发执照（约3~7个工作日）</li><li>在店内显眼位置张贴执照</li></ol><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 我需要单独的酒类许可证吗？</p><p class="faq-a">A. 一般餐馆执照（일반음식점）涵盖附带的酒水销售。专门的酒吧（주점업）需要单独的酒类业务许可证。</p></div><div class="faq-item"><p class="faq-q">Q. 外国人能在韩国开餐厅吗？</p><p class="faq-a">A. 可以，凭有效的商务签证（投资类D-9）或F签证，营业登记和执照申请流程相同。</p></div></div><div class="cta-box"><h3>取得餐饮业执照</h3><p>Vision行政士事务所代办餐饮业执照申请及合规服务。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'restaurant-food-service-license-guide',
    locale: 'ja',
    title: '韓国レストラン・飲食業許可証ガイド2026',
    metaTitle: '韓国レストラン飲食業許可証2026 — 申請要件と手続き',
    metaDescription: '韓国でレストランやカフェの飲食業許可証（식품접객업）を取得する方法。保健許可、施設要件、食品衛生訓練、登録手順。行政書士による無料初回相談。',
    category: '飲食',
    excerpt: '韓国でレストラン、カフェ、バーの飲食業許可証（식품접객업）を取得するための完全ガイド — 保健許可、施設基準、登録手続きを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>飲食業の種類</li><li>許可証が必要な対象</li><li>施設要件</li><li>食品衛生管理責任者</li><li>必要書類</li><li>申請手続き</li><li>よくある質問</li></ol></div><h2>1. 飲食業の種類</h2><ul><li><strong>一般飲食店（일반음식점）：</strong>店内食事とアルコール販売</li><li><strong>簡易飲食サービス（휴게음식점）：</strong>軽食・ノンアルコール飲料（カフェ、ベーカリー、ファストフード）</li><li><strong>バー（단란주점/유흥주점）：</strong>パフォーマンスや成人向けエンターテインメントを提供する高次許可証</li></ul><h2>2. 許可証が必要な対象</h2><p>韓国で飲食物を販売して店内消費させるすべての事業者は、<strong>食品衛生法</strong>に基づき地方自治体（市/郡/区役所）から飲食業許可証を取得する必要があります。</p><h2>3. 施設要件</h2><ul><li>キッチンは十分な換気とグリーストラップを備えること</li><li>食品準備エリアと食器洗浄エリアを分離</li><li>生鮮食品用の冷蔵設備</li><li>トイレ（場合によっては共用可）</li><li>消防安全への準拠</li></ul><h2>4. 食品衛生管理責任者</h2><ul><li>少なくとも1名の食品衛生管理責任者の指定が必要</li><li>食品衛生訓練の受講が必要（初回6時間、2年ごとに3時間の更新）</li><li>実際には事業主がこの役割を担うことが多い</li></ul><h2>5. 必要書類</h2><ul><li>飲食業登録申請書</li><li>キッチンレイアウトを示す施設平面図</li><li>建物用途確認書類（飲食業用途）</li><li>消防安全検査証明書</li><li>食品衛生管理責任者訓練証明書</li><li>事業者登録証</li></ul><h2>6. 申請手続き</h2><ol><li>食品衛生訓練を受講する</li><li>地方区役所（구청）に申請書を提出する</li><li>衛生/施設検査</li><li>許可証の交付（約3〜7営業日）</li><li>店内の見えるところに許可証を掲示する</li></ol><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 別途酒類販売許可が必要ですか？</p><p class="faq-a">A. 一般飲食店許可証（일반음식점）は付随的なアルコール販売をカバーします。専門のバー（주점업）は別途酒類販売業許可が必要です。</p></div><div class="faq-item"><p class="faq-q">Q. 外国人が韓国でレストランを開けますか？</p><p class="faq-a">A. はい。有効なビジネスビザ（投資用D-9）またはFビザがあれば可能です。事業登録と許可証の手続きは同じです。</p></div></div><div class="cta-box"><h3>レストランの許可証を取得しましょう</h3><p>ビジョン行政書士事務所が飲食業許可証の申請とコンプライアンスを担当します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 39: medical-clinic-establishment-guide ───────────────────────────
  {
    slug: 'medical-clinic-establishment-guide',
    locale: 'en',
    title: 'Medical Clinic Establishment in Korea — 2026 Licensing Guide',
    metaTitle: 'Korea Medical Clinic Establishment 2026 — License Requirements',
    metaDescription: 'How to establish a medical clinic (의원) in Korea. Facility requirements, health ministry reporting, required documents, and compliance for foreign doctors. Free consultation.',
    category: 'Healthcare',
    excerpt: 'A guide to establishing a medical clinic (의원) in Korea — facility requirements, Ministry of Health reporting, and the full licensing procedure.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Types of Medical Institutions</li><li>Who Can Open a Clinic?</li><li>Facility Requirements</li><li>Required Documents</li><li>Application Procedure</li><li>Foreign Doctors in Korea</li><li>FAQ</li></ol></div><h2>1. Types of Medical Institutions</h2><ul><li><strong>의원 (clinic):</strong> small outpatient facility run by one or a few physicians</li><li><strong>병원 (hospital):</strong> inpatient facility with 30+ beds</li><li><strong>의원 is the most common type for private practice</strong></li></ul><h2>2. Who Can Open a Clinic?</h2><ul><li>Only holders of a Korean medical license (의사, 치과의사, or 한의사) can open a clinic</li><li>Korean medical license required — foreign licenses not directly recognized</li><li>Foreign doctors can practice only after passing Korean medical board exams</li></ul><h2>3. Facility Requirements</h2><ul><li>Examination room(s) meeting minimum area standards</li><li>Waiting room separate from examination areas</li><li>Medical waste disposal system</li><li>Compliance with Medical Act facility standards</li></ul><h2>4. Required Documents</h2><ul><li>Medical institution establishment notification form</li><li>Medical license certificate</li><li>Facility floor plan</li><li>Building use confirmation (medical use)</li><li>Fire safety inspection certificate</li><li>Medical waste contract</li></ul><h2>5. Application Procedure</h2><ol><li>Submit notification to local health authority (보건소)</li><li>Facility inspection</li><li>Registration with Health Insurance Review and Assessment Service (HIRA)</li><li>National Health Insurance (건강보험) registration for insurance billing</li></ol><h2>6. Foreign Doctors in Korea</h2><ul><li>Foreign doctors cannot practice without a Korean medical license</li><li>Pathway: pass KMLE (Korean Medical Licensing Examination) after completing required documents</li><li>Some government zones permit limited foreign medical services</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Can a non-doctor investor open a clinic in Korea?</p><p class="faq-a">A. No. Under the Medical Act, only licensed physicians can establish and operate medical institutions in Korea.</p></div><div class="faq-item"><p class="faq-q">Q. How long does clinic establishment take?</p><p class="faq-a">A. Typically 2–4 weeks from notification submission to starting practice, depending on facility inspection timing.</p></div></div><div class="cta-box"><h3>Establish Your Clinic in Korea</h3><p>Vision Administrative Office provides administrative support for medical clinic establishment. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'medical-clinic-establishment-guide',
    locale: 'zh',
    title: '韩国诊所设立许可指南2026',
    metaTitle: '韩国诊所设立2026 — 执照要求与流程',
    metaDescription: '如何在韩国设立诊所（의원）。设施要求、卫生部报告、所需材料及外国医生合规须知。免费初次咨询。',
    category: '医疗',
    excerpt: '韩国诊所（의원）设立指南，包括设施要求、卫生部报告及完整许可流程。',
    content: `<div class="toc"><p>目录</p><ol><li>医疗机构类型</li><li>谁可以开设诊所？</li><li>设施要求</li><li>所需材料</li><li>申请流程</li><li>外国医生在韩国</li><li>常见问题</li></ol></div><h2>1. 医疗机构类型</h2><ul><li><strong>의원（诊所）：</strong>由一名或少数医生开设的小型门诊设施</li><li><strong>병원（医院）：</strong>拥有30张以上床位的住院设施</li><li><strong>의원是私人执业最常见的类型</strong></li></ul><h2>2. 谁可以开设诊所？</h2><ul><li>只有持有韩国医疗执照（医师、牙科医师或韩医师）的人员才能开设诊所</li><li>须持有韩国医疗执照，外国执照不直接认可</li><li>外国医生只有通过韩国医疗委员会考试后方可执业</li></ul><h2>3. 设施要求</h2><ul><li>符合最低面积标准的检查室</li><li>与检查区域分开的候诊室</li><li>医疗废物处置系统</li><li>符合《医疗法》设施标准</li></ul><h2>4. 所需材料</h2><ul><li>医疗机构设立申报表</li><li>医疗执照证书</li><li>设施平面图</li><li>建筑用途确认文件（医疗用途）</li><li>消防安全检查证明</li><li>医疗废物处置合同</li></ul><h2>5. 申请流程</h2><ol><li>向当地保健所提交申报</li><li>设施检查</li><li>在健康保险审查评估院（HIRA）登记</li><li>登记国民健康保险（건강보험）以便保险结算</li></ol><h2>6. 外国医生在韩国</h2><ul><li>外国医生未持韩国医疗执照不得执业</li><li>途径：完成所需文件后通过KMLE（韩国医疗执照考试）</li><li>部分政府特区允许有限的外国医疗服务</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 非医生投资者能在韩国开设诊所吗？</p><p class="faq-a">A. 不能。依据《医疗法》，只有持牌医师才能在韩国设立和运营医疗机构。</p></div><div class="faq-item"><p class="faq-q">Q. 诊所设立需要多长时间？</p><p class="faq-a">A. 从提交申报到开始执业通常需要2~4周，具体取决于设施检查时间。</p></div></div><div class="cta-box"><h3>在韩国设立您的诊所</h3><p>Vision行政士事务所为诊所设立提供行政支持服务。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'medical-clinic-establishment-guide',
    locale: 'ja',
    title: '韓国診療所開設ガイド2026',
    metaTitle: '韓国診療所開設2026 — 許可要件と手続き',
    metaDescription: '韓国で診療所（의원）を開設する方法。施設要件、保健省への届出、必要書類、外国人医師の合規要件。行政書士による無料初回相談。',
    category: '医療',
    excerpt: '韓国の診療所（의원）開設ガイド — 施設要件、保健省への届出、完全な許可手続きを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>医療機関の種類</li><li>診療所を開設できる対象</li><li>施設要件</li><li>必要書類</li><li>申請手続き</li><li>韓国における外国人医師</li><li>よくある質問</li></ol></div><h2>1. 医療機関の種類</h2><ul><li><strong>의원（診療所）：</strong>1人または少数の医師が運営する小規模外来施設</li><li><strong>병원（病院）：</strong>30床以上の入院施設</li><li><strong>의원が個人開業で最も一般的な形態</strong></li></ul><h2>2. 診療所を開設できる対象</h2><ul><li>韓国医師免許（医師、歯科医師、または韓医師）保有者のみが診療所を開設できる</li><li>韓国医師免許が必要 — 外国の免許は直接認められない</li><li>外国人医師は韓国医師国家試験合格後のみ開業可能</li></ul><h2>3. 施設要件</h2><ul><li>最低面積基準を満たす診察室</li><li>診察エリアとは分離した待合室</li><li>医療廃棄物処理システム</li><li>医療法の施設基準への準拠</li></ul><h2>4. 必要書類</h2><ul><li>医療機関開設届出書</li><li>医師免許証</li><li>施設平面図</li><li>建物用途確認書類（医療用途）</li><li>消防安全検査証明書</li><li>医療廃棄物処理契約書</li></ul><h2>5. 申請手続き</h2><ol><li>管轄の保健所に届出を提出する</li><li>施設検査</li><li>健康保険審査評価院（HIRA）への登録</li><li>国民健康保険（건강보험）登録（保険請求のため）</li></ol><h2>6. 韓国における外国人医師</h2><ul><li>外国人医師は韓国医師免許なしに開業できない</li><li>途径：必要書類を揃えた上でKMLE（韓国医師国家試験）に合格する</li><li>一部の政府指定区域では限定的な外国医療サービスが認められる</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 非医師の投資家が韓国で診療所を開設できますか？</p><p class="faq-a">A. できません。医療法に基づき、韓国では免許を持つ医師のみが医療機関を設立・運営できます。</p></div><div class="faq-item"><p class="faq-q">Q. 診療所の開設にはどのくらいかかりますか？</p><p class="faq-a">A. 届出提出から開業まで通常2〜4週間かかります。施設検査のタイミングによります。</p></div></div><div class="cta-box"><h3>韓国で診療所を開設しましょう</h3><p>ビジョン行政書士事務所が診療所開設の行政手続きをサポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 40: postpartum-care-center-permit-guide ──────────────────────────
  {
    slug: 'postpartum-care-center-permit-guide',
    locale: 'en',
    title: 'Postpartum Care Center (Sanhujoriwon) Permit in Korea — 2026 Guide',
    metaTitle: 'Korea Postpartum Care Center License 2026 — Sanhujoriwon Permit',
    metaDescription: 'How to establish a postpartum care center (산후조리원) in Korea. Facility requirements, health ministry registration, staff qualifications, and compliance checklist. Free consultation.',
    category: 'Healthcare',
    excerpt: 'A guide to opening a postpartum care center (산후조리원/sanhujoriwon) in Korea — facility standards, government registration, staff requirements, and compliance.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is a Postpartum Care Center?</li><li>Government Registration Requirements</li><li>Facility Standards</li><li>Staff Requirements</li><li>Required Documents</li><li>Application Procedure</li><li>FAQ</li></ol></div><h2>1. What Is a Postpartum Care Center?</h2><p>A postpartum care center (산후조리원) is a residential facility where mothers rest and receive newborn care support for 2–4 weeks after delivery. It is regulated under the <strong>Mother and Child Health Act</strong>.</p><h2>2. Government Registration Requirements</h2><ul><li>Must notify and register with the local health authority (보건소)</li><li>Facility must meet the Mother and Child Health Act standards</li><li>Infection control protocols are mandatory</li></ul><h2>3. Facility Standards</h2><ul><li>Minimum 100 m² floor area</li><li>Separate rooms for mother and newborn</li><li>Newborn care room with temperature control</li><li>Adequate infection control: UV sterilization, hand-washing stations</li><li>Emergency medical equipment (basic)</li></ul><h2>4. Staff Requirements</h2><ul><li>At least one registered nurse (간호사) or nursing assistant (간호조무사) on duty 24/7</li><li>Nursing staff ratio: at least 1 per 3 pairs of mothers and newborns</li><li>Staff must complete infection control and newborn care training</li></ul><h2>5. Required Documents</h2><ul><li>Postpartum care center establishment notification form</li><li>Facility floor plan</li><li>Staff qualification certificates</li><li>Building use confirmation</li><li>Fire safety inspection certificate</li><li>Infection control plan</li></ul><h2>6. Application Procedure</h2><ol><li>Submit notification to local health authority</li><li>Facility and documentation inspection</li><li>Registration completed (approx. 14–21 days)</li><li>Annual compliance inspection required</li></ol><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Can a foreigner own and operate a postpartum care center in Korea?</p><p class="faq-a">A. Yes, with appropriate business registration and investor visa. All facility and staff standards apply equally.</p></div><div class="faq-item"><p class="faq-q">Q. What are the penalties for operating without registration?</p><p class="faq-a">A. Operating without proper notification can result in closure orders and significant fines under the Mother and Child Health Act.</p></div></div><div class="cta-box"><h3>Open Your Postpartum Care Center</h3><p>Vision Administrative Office handles postpartum care center registration and compliance. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'postpartum-care-center-permit-guide',
    locale: 'zh',
    title: '韩国产后护理中心（산후조리원）许可指南2026',
    metaTitle: '韩国产后护理中心执照2026 — 申请要求与流程',
    metaDescription: '如何在韩国设立产后护理中心（산후조리원）。设施要求、卫生部登记、人员资质及合规清单。免费初次咨询。',
    category: '医疗',
    excerpt: '韩国产后护理中心（산후조리원）开设指南，包括设施标准、政府登记、人员要求及合规须知。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是产后护理中心？</li><li>政府登记要求</li><li>设施标准</li><li>人员要求</li><li>所需材料</li><li>申请流程</li><li>常见问题</li></ol></div><h2>1. 什么是产后护理中心？</h2><p>产后护理中心（산후조리원）是产妇在分娩后2~4周内休养并接受新生儿护理支持的住宿设施，依据<strong>《母婴健康法》</strong>进行监管。</p><h2>2. 政府登记要求</h2><ul><li>须向当地保健所申报并登记</li><li>设施须符合《母婴健康法》标准</li><li>感染控制规程为强制要求</li></ul><h2>3. 设施标准</h2><ul><li>最低建筑面积100m²</li><li>母婴分开的独立房间</li><li>温控新生儿护理室</li><li>充分的感染控制措施：紫外线消毒、洗手站</li><li>基本急救医疗设备</li></ul><h2>4. 人员要求</h2><ul><li>须有至少一名注册护士（간호사）或护理助理（간호조무사）24小时值班</li><li>护理人员比例：每3对母婴至少1名护理人员</li><li>人员须完成感染控制和新生儿护理培训</li></ul><h2>5. 所需材料</h2><ul><li>产后护理中心设立申报表</li><li>设施平面图</li><li>人员资质证明</li><li>建筑用途确认文件</li><li>消防安全检查证明</li><li>感染控制计划</li></ul><h2>6. 申请流程</h2><ol><li>向当地保健所提交申报</li><li>设施及文件检查</li><li>完成登记（约14~21天）</li><li>需年度合规检查</li></ol><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 外国人能在韩国拥有并运营产后护理中心吗？</p><p class="faq-a">A. 可以，凭适当的营业登记和投资者签证，所有设施和人员标准同等适用。</p></div><div class="faq-item"><p class="faq-q">Q. 未登记运营的处罚是什么？</p><p class="faq-a">A. 未经适当申报运营可能导致停业命令，并依据《母婴健康法》处以重罚。</p></div></div><div class="cta-box"><h3>开设产后护理中心</h3><p>Vision行政士事务所代办产后护理中心登记及合规服务。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'postpartum-care-center-permit-guide',
    locale: 'ja',
    title: '韓国産後ケアセンター（산후조리원）許可ガイド2026',
    metaTitle: '韓国産後ケアセンター許可証2026 — 申請要件と手続き',
    metaDescription: '韓国で産後ケアセンター（산후조리원）を設立する方法。施設要件、保健省への登録、スタッフ資格、コンプライアンスチェックリスト。行政書士による無料初回相談。',
    category: '医療',
    excerpt: '韓国の産後ケアセンター（산후조리원）開設ガイド — 施設基準、政府登録、スタッフ要件、コンプライアンスを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>産後ケアセンターとは？</li><li>政府登録要件</li><li>施設基準</li><li>スタッフ要件</li><li>必要書類</li><li>申請手続き</li><li>よくある質問</li></ol></div><h2>1. 産後ケアセンターとは？</h2><p>産後ケアセンター（산후조리원）は、出産後2〜4週間、母親が休息し新生児ケアのサポートを受ける宿泊施設です。<strong>母子健康法</strong>に基づいて規制されています。</p><h2>2. 政府登録要件</h2><ul><li>地方の保健所に届出・登録が必要</li><li>施設は母子健康法の基準を満たす必要がある</li><li>感染管理プロトコルが義務付けられている</li></ul><h2>3. 施設基準</h2><ul><li>最低延べ床面積100m²</li><li>母親と新生児のための分離した部屋</li><li>温度管理付き新生児ケア室</li><li>十分な感染管理：UV殺菌、手洗いステーション</li><li>基本的な緊急医療機器</li></ul><h2>4. スタッフ要件</h2><ul><li>少なくとも1名の登録看護師（간호사）または看護助手（간호조무사）が24時間勤務</li><li>看護師比率：母子ペア3組につき最低1名</li><li>スタッフは感染管理と新生児ケアの訓練を完了する必要がある</li></ul><h2>5. 必要書類</h2><ul><li>産後ケアセンター開設届出書</li><li>施設平面図</li><li>スタッフ資格証明書</li><li>建物用途確認書類</li><li>消防安全検査証明書</li><li>感染管理計画書</li></ul><h2>6. 申請手続き</h2><ol><li>地方保健所に届出を提出する</li><li>施設・書類検査</li><li>登録完了（約14〜21日）</li><li>年次コンプライアンス検査が必要</li></ol><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 外国人が韓国で産後ケアセンターを所有・運営できますか？</p><p class="faq-a">A. はい。適切な事業者登録と投資家ビザがあれば可能です。すべての施設・スタッフ基準が同様に適用されます。</p></div><div class="faq-item"><p class="faq-q">Q. 未登録で運営した場合の罰則は？</p><p class="faq-a">A. 適切な届出なしの運営は、閉鎖命令と母子健康法に基づく重大な罰金の対象となります。</p></div></div><div class="cta-box"><h3>産後ケアセンターを開設しましょう</h3><p>ビジョン行政書士事務所が産後ケアセンターの登録とコンプライアンスを担当します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 41: building-use-change-permit-guide ─────────────────────────────
  {
    slug: 'building-use-change-permit-guide',
    locale: 'en',
    title: 'Building Use Change Permit in Korea — 2026 Complete Guide',
    metaTitle: 'Korea Building Use Change Permit 2026 — Requirements & Procedure',
    metaDescription: 'How to apply for a building use change (용도변경) permit in Korea. Zoning rules, required documents, construction permit implications, and application procedure. Free consultation.',
    category: 'Building',
    excerpt: 'A complete guide to building use change (용도변경) permits in Korea — zoning compatibility, required documents, construction implications, and application process.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is a Building Use Change?</li><li>Use Classification Groups</li><li>When Permit vs. Report is Required</li><li>Zoning Compatibility</li><li>Required Documents</li><li>Application Procedure</li><li>FAQ</li></ol></div><h2>1. What Is a Building Use Change?</h2><p>Under Korea's <strong>Building Act (건축법)</strong>, every building has a designated use (용도). Changing the use — for example, converting an office to a restaurant — requires a government permit or report depending on the scope of the change.</p><h2>2. Use Classification Groups</h2><p>Korea classifies buildings into groups. Moving between groups (e.g., Group 1 단독주택 to Group 2 공동주택) typically requires a permit. Moving within a group may only require a report.</p><h2>3. When Permit vs. Report is Required</h2><ul><li><strong>Permit (허가):</strong> changing to a use in a higher-tier group or changing to certain restricted uses</li><li><strong>Report (신고):</strong> minor changes within the same group or to lower-tier uses</li><li>When structural changes accompany the use change, a construction permit may also be needed</li></ul><h2>4. Zoning Compatibility</h2><ul><li>The new use must be permitted under the current zoning designation</li><li>Example: Converting a residence to a restaurant in a purely residential zone is typically not permitted</li><li>Always check with local planning authority before proceeding</li></ul><h2>5. Required Documents</h2><ul><li>Building use change application or report form</li><li>Building register (건축물대장)</li><li>Architectural drawings of the building</li><li>Proof of fire safety compliance for the new use</li><li>Owner's consent (if applicant is a tenant)</li></ul><h2>6. Application Procedure</h2><ol><li>Verify zoning permits the intended use</li><li>Submit application/report to local city/county office</li><li>Document review and inspection (if required)</li><li>Updated building register issued reflecting new use</li></ol><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. How long does a building use change take?</p><p class="faq-a">A. Simple reports can be processed in 1–2 weeks. Permits requiring inspection may take 4–8 weeks.</p></div><div class="faq-item"><p class="faq-q">Q. Can I start operating before the use change is approved?</p><p class="faq-a">A. No. Operating under an unauthorized use can result in fines and forced closure. Always secure the permit first.</p></div></div><div class="cta-box"><h3>Get Your Building Use Change Approved</h3><p>Vision Administrative Office handles building use change applications from start to finish. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'building-use-change-permit-guide',
    locale: 'zh',
    title: '韩国建筑用途变更许可指南2026',
    metaTitle: '韩国建筑用途变更许可2026 — 申请要求与流程',
    metaDescription: '如何在韩国申请建筑用途变更（용도변경）许可证。用地分区规定、所需材料、建筑许可影响及申请流程。免费初次咨询。',
    category: '建筑',
    excerpt: '韩国建筑用途变更（용도변경）许可完整指南，包括用地分区兼容性、所需材料、建筑影响及申请流程。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是建筑用途变更？</li><li>用途分类组别</li><li>何时需要许可证vs.申报</li><li>用地分区兼容性</li><li>所需材料</li><li>申请流程</li><li>常见问题</li></ol></div><h2>1. 什么是建筑用途变更？</h2><p>依据韩国<strong>《建筑法》</strong>，每栋建筑均有指定用途（용도）。变更用途（例如将办公室改为餐厅）须根据变更范围获得政府许可证或进行申报。</p><h2>2. 用途分类组别</h2><p>韩国将建筑按组别分类。跨组别变更（如从第1组단독주택变更为第2组공동주택）通常需要许可证。组别内变更可能只需申报。</p><h2>3. 何时需要许可证vs.申报</h2><ul><li><strong>许可证（허가）：</strong>变更为更高级别组别用途或变更为某些受限用途</li><li><strong>申报（신고）：</strong>同一组别内的细微变更或变更为较低级别用途</li><li>若用途变更伴随结构改变，可能还需要建筑许可证</li></ul><h2>4. 用地分区兼容性</h2><ul><li>新用途须在当前用地分区规定的允许范围内</li><li>例：在纯住宅区将住宅改为餐厅通常不被允许</li><li>进行任何操作前，务必向当地规划部门确认</li></ul><h2>5. 所需材料</h2><ul><li>建筑用途变更申请表或申报表</li><li>建筑登记簿（건축물대장）</li><li>建筑图纸</li><li>新用途的消防安全合规证明</li><li>业主同意书（如申请人为租客）</li></ul><h2>6. 申请流程</h2><ol><li>核实用地分区允许目标用途</li><li>向当地市/郡/区政府提交申请/申报</li><li>材料审查及检查（如需要）</li><li>颁发反映新用途的更新建筑登记簿</li></ol><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 建筑用途变更需要多长时间？</p><p class="faq-a">A. 简单申报可在1~2周内处理。需要检查的许可证可能需要4~8周。</p></div><div class="faq-item"><p class="faq-q">Q. 用途变更批准前能开始运营吗？</p><p class="faq-a">A. 不能。在未授权用途下运营可能导致罚款和强制停业。务必先取得许可证。</p></div></div><div class="cta-box"><h3>取得建筑用途变更批准</h3><p>Vision行政士事务所全程代办建筑用途变更申请。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'building-use-change-permit-guide',
    locale: 'ja',
    title: '韓国建物用途変更許可ガイド2026',
    metaTitle: '韓国建物用途変更許可2026 — 申請要件と手続き',
    metaDescription: '韓国で建物用途変更（용도변경）許可証を申請する方法。ゾーニングルール、必要書類、建築許可への影響、申請手続き。行政書士による無料初回相談。',
    category: '建築',
    excerpt: '韓国の建物用途変更（용도변경）許可の完全ガイド — ゾーニング適合性、必要書類、建築への影響、申請プロセスを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>建物用途変更とは？</li><li>用途分類グループ</li><li>許可と届出が必要な場合</li><li>ゾーニング適合性</li><li>必要書類</li><li>申請手続き</li><li>よくある質問</li></ol></div><h2>1. 建物用途変更とは？</h2><p>韓国の<strong>建築法</strong>に基づき、すべての建物には指定された用途（용도）があります。用途を変更する場合（例：事務所をレストランに変更）は、変更の範囲に応じて政府の許可または届出が必要です。</p><h2>2. 用途分類グループ</h2><p>韓国は建物をグループに分類しています。グループ間の移動（例：グループ1の단독주택からグループ2の공동주택へ）は一般的に許可が必要です。グループ内の移動は届出のみで済む場合があります。</p><h2>3. 許可と届出が必要な場合</h2><ul><li><strong>許可（허가）：</strong>より高い階層グループの用途への変更、または特定の制限用途への変更</li><li><strong>届出（신고）：</strong>同一グループ内の軽微な変更、または低次の用途への変更</li><li>構造変更を伴う場合は、建築許可も必要になる場合がある</li></ul><h2>4. ゾーニング適合性</h2><ul><li>新しい用途は現在のゾーニング指定の下で許可されている必要がある</li><li>例：純粋な住居地域で住宅をレストランに変更することは通常許可されない</li><li>手続きを進める前に必ず地方計画当局に確認する</li></ul><h2>5. 必要書類</h2><ul><li>建物用途変更申請書または届出書</li><li>建築物台帳（건축물대장）</li><li>建築図面</li><li>新用途に対する消防安全準拠証明</li><li>所有者の同意書（申請者が賃借人の場合）</li></ul><h2>6. 申請手続き</h2><ol><li>ゾーニングが意図する用途を許可していることを確認する</li><li>地方市区町村役場に申請書/届出書を提出する</li><li>書類審査と検査（必要な場合）</li><li>新用途を反映した更新建築物台帳が交付される</li></ol><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 建物用途変更にはどのくらいかかりますか？</p><p class="faq-a">A. 簡単な届出は1〜2週間で処理できます。検査が必要な許可は4〜8週間かかる場合があります。</p></div><div class="faq-item"><p class="faq-q">Q. 用途変更が承認される前に運営を開始できますか？</p><p class="faq-a">A. いいえ。無認可の用途での運営は罰金と強制閉鎖の対象となります。常に先に許可を取得してください。</p></div></div><div class="cta-box"><h3>建物用途変更を承認してもらいましょう</h3><p>ビジョン行政書士事務所が建物用途変更申請を最初から最後まで担当します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 42: administrative-license-permit-specialist-guide ───────────────
  {
    slug: 'administrative-license-permit-specialist-guide',
    locale: 'en',
    title: 'Why Use a Licensed Administrative Scrivener in Korea — 2026 Guide',
    metaTitle: 'Korea Administrative Scrivener (행정사) 2026 — Why You Need One',
    metaDescription: 'Why using a licensed administrative scrivener (행정사) in Korea saves time and avoids costly mistakes. Scope of services, legal protections, and how to find a qualified professional. Free consultation.',
    category: 'Administrative',
    excerpt: 'A guide to the role of a licensed administrative scrivener (행정사) in Korea — what they do, why they matter for license applications, and how to find a qualified one.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is an Administrative Scrivener?</li><li>Services Provided</li><li>Legal Protections When Using a Licensed Scrivener</li><li>Risks of Using Unlicensed Agents</li><li>How to Verify a Scrivener's License</li><li>Fee Structure</li><li>FAQ</li></ol></div><h2>1. What Is an Administrative Scrivener?</h2><p>A 행정사 (administrative scrivener / administrative agent) is a licensed professional in Korea who can prepare and submit government applications on behalf of clients. The profession is regulated under the <strong>Administrative Agent Act (행정사법)</strong>.</p><h2>2. Services Provided</h2><ul><li>Business license applications (restaurant, manufacturing, cosmetics, etc.)</li><li>Corporate registrations and permits</li><li>Government procurement registration</li><li>Venue, facility, and use-change applications</li><li>Translation and notarization support</li></ul><h2>3. Legal Protections When Using a Licensed Scrivener</h2><ul><li>Licensed scriveners carry professional liability insurance</li><li>Clients have recourse through the 행정사협회 (association) if misconduct occurs</li><li>Government offices recognize and trust submissions prepared by 행정사</li></ul><h2>4. Risks of Using Unlicensed Agents</h2><ul><li>No legal accountability or insurance coverage</li><li>Applications may be prepared incorrectly, causing rejection or delays</li><li>Some unlicensed "agencies" operate fraudulently</li></ul><h2>5. How to Verify a Scrivener's License</h2><ul><li>Check the Korean Administrative Agent Association website (행정사협회)</li><li>Request license number and cross-reference official registry</li><li>Legitimate offices display their registration certificate prominently</li></ul><h2>6. Fee Structure</h2><ul><li>Fees are negotiable but follow general market rates by service type</li><li>Reputable offices provide written fee agreements before work starts</li><li>Beware of unusually low fees — they often indicate unlicensed operators</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. What is the difference between an administrative scrivener and a lawyer?</p><p class="faq-a">A. Lawyers (변호사) handle legal disputes and court matters. Administrative scriveners (행정사) specialize in government applications and administrative procedures — a different and complementary scope.</p></div><div class="faq-item"><p class="faq-q">Q. Can I apply for business licenses myself without a scrivener?</p><p class="faq-a">A. Yes. Licenses can be applied for directly. A scrivener speeds up the process, reduces rejection risk, and handles complex multi-step applications.</p></div></div><div class="cta-box"><h3>Work with a Licensed Administrative Scrivener</h3><p>Vision Administrative Office is a licensed 행정사 office. We handle all business licensing and government applications. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'administrative-license-permit-specialist-guide',
    locale: 'zh',
    title: '为何在韩国选择持牌行政士 — 2026指南',
    metaTitle: '韩国行政士（행정사）2026 — 为何需要专业人士',
    metaDescription: '为何使用韩国持牌行政士（행정사）能节省时间并避免代价高昂的错误。服务范围、法律保护及如何找到合格的专业人士。免费初次咨询。',
    category: '行政',
    excerpt: '韩国持牌行政士（행정사）角色指南，包括其职责、对执照申请的重要性及如何找到合格的行政士。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是行政士？</li><li>提供的服务</li><li>使用持牌行政士的法律保护</li><li>使用无牌中介的风险</li><li>如何核实行政士执照</li><li>收费结构</li><li>常见问题</li></ol></div><h2>1. 什么是行政士？</h2><p>행정사（行政士/行政代理人）是韩国持牌专业人士，可代表客户准备并提交政府申请。该职业受<strong>《行政士法》</strong>监管。</p><h2>2. 提供的服务</h2><ul><li>营业执照申请（餐厅、制造业、化妆品等）</li><li>企业登记和许可证</li><li>政府采购登记</li><li>场所、设施及用途变更申请</li><li>翻译和公证支持</li></ul><h2>3. 使用持牌行政士的法律保护</h2><ul><li>持牌行政士持有职业责任保险</li><li>如发生不当行为，客户可通过행정사협회（协会）寻求救济</li><li>政府机关认可并信任由행정사准备的申请材料</li></ul><h2>4. 使用无牌中介的风险</h2><ul><li>无法律责任或保险保障</li><li>申请材料可能准备不当，导致拒绝或延误</li><li>部分无牌"代理机构"存在欺诈行为</li></ul><h2>5. 如何核实行政士执照</h2><ul><li>在韩国行政士协会网站（행정사협회）查询</li><li>索取执照号码并对照官方登记册核实</li><li>合法事务所会显眼地展示登记证书</li></ul><h2>6. 收费结构</h2><ul><li>费用可协商，但按服务类型遵循一般市场价格</li><li>信誉良好的事务所在工作开始前提供书面收费协议</li><li>警惕异常低收费，这通常意味着无牌运营者</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 行政士与律师有什么区别？</p><p class="faq-a">A. 律师（변호사）处理法律纠纷和法院事务。行政士（행정사）专注于政府申请和行政程序，两者职责不同但互补。</p></div><div class="faq-item"><p class="faq-q">Q. 我可以不通过行政士自己申请营业执照吗？</p><p class="faq-a">A. 可以。执照可以直接申请。行政士能加快流程、降低被拒风险，并处理复杂的多步骤申请。</p></div></div><div class="cta-box"><h3>与持牌行政士合作</h3><p>Vision行政士事务所是持牌행정사事务所，代办所有营业执照及政府申请事宜。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'administrative-license-permit-specialist-guide',
    locale: 'ja',
    title: '韓国で行政書士を活用する理由 — 2026ガイド',
    metaTitle: '韓国行政書士（행정사）2026 — なぜ専門家が必要か',
    metaDescription: '韓国の認定行政書士（행정사）を利用することで時間を節約し、コストのかかるミスを避けられる理由。サービス範囲、法的保護、資格ある専門家の見つけ方。行政書士による無料初回相談。',
    category: '行政',
    excerpt: '韓国の認定行政書士（행정사）の役割ガイド — 業務内容、許可申請における重要性、適格な行政書士の見つけ方を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>行政書士とは？</li><li>提供するサービス</li><li>認定行政書士利用時の法的保護</li><li>無許可代理人を使うリスク</li><li>行政書士の資格確認方法</li><li>報酬体系</li><li>よくある質問</li></ol></div><h2>1. 行政書士とは？</h2><p>행정사（行政書士/行政代理人）は、クライアントに代わって政府への申請書を作成・提出できる韓国の認定専門家です。この職業は<strong>「行政士法」</strong>によって規制されています。</p><h2>2. 提供するサービス</h2><ul><li>事業許可申請（レストラン、製造業、化粧品など）</li><li>法人登記と許可証</li><li>政府調達登録</li><li>施設・設備・用途変更申請</li><li>翻訳・公証サポート</li></ul><h2>3. 認定行政書士利用時の法的保護</h2><ul><li>認定行政書士は職業賠償責任保険に加入している</li><li>不正行為があった場合、クライアントは행정사협회（協会）を通じて救済を求められる</li><li>政府機関は行政書士が作成した申請書を認識し信頼する</li></ul><h2>4. 無許可代理人を使うリスク</h2><ul><li>法的責任や保険の補償がない</li><li>申請書が不正確に作成され、却下や遅延を引き起こす可能性がある</li><li>一部の無許可「代理店」は詐欺的に運営している</li></ul><h2>5. 行政書士の資格確認方法</h2><ul><li>韓国行政士協会ウェブサイト（행정사협회）で確認する</li><li>ライセンス番号を入手し公式登録簿と照合する</li><li>正当な事務所は登録証明書を見えるところに掲示している</li></ul><h2>6. 報酬体系</h2><ul><li>報酬は交渉可能だが、サービスの種類によって一般的な市場価格に従う</li><li>信頼できる事務所は仕事を開始する前に書面による報酬契約を提供する</li><li>異常に低い報酬には注意 — 多くの場合、無許可業者を示す</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 行政書士と弁護士の違いは何ですか？</p><p class="faq-a">A. 弁護士（변호사）は法的紛争と裁判事項を扱います。行政書士（행정사）は政府への申請と行政手続きを専門とします — 異なりますが補完的な業務範囲です。</p></div><div class="faq-item"><p class="faq-q">Q. 行政書士なしで自分で事業許可を申請できますか？</p><p class="faq-a">A. はい。許可証は直接申請できます。行政書士を使うとプロセスが速くなり、却下リスクが減り、複雑な多段階申請を処理できます。</p></div></div><div class="cta-box"><h3>認定行政書士と協力しましょう</h3><p>ビジョン行政書士事務所は認定행정사事務所です。すべての事業許可と政府申請を担当します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 43: location-based-service-business-registration-foreign-company ──
  {
    slug: 'location-based-service-business-registration-foreign-company',
    locale: 'en',
    title: 'Location-Based Service Business Registration for Foreign Companies in Korea — 2026',
    metaTitle: 'Korea Location-Based Service Registration Foreign Company 2026',
    metaDescription: 'How foreign companies register a location-based service (LBS) business in Korea. PIPA compliance, KCC notification, required documents, and foreign company-specific rules. Free consultation.',
    category: 'Technology',
    excerpt: 'A guide to location-based service (LBS) business registration in Korea for foreign companies — KCC notification, PIPA compliance, and required documents.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is a Location-Based Service Business?</li><li>Legal Framework</li><li>Foreign Company Requirements</li><li>KCC Registration Procedure</li><li>PIPA Compliance</li><li>Required Documents</li><li>FAQ</li></ol></div><h2>1. What Is a Location-Based Service Business?</h2><p>A location-based service (LBS) business collects or uses location data of individuals to provide services (navigation, delivery tracking, location-aware marketing, etc.). In Korea, this requires registration with the <strong>Korea Communications Commission (KCC / 방송통신위원회)</strong> under the <strong>Act on the Protection and Use of Location Information</strong>.</p><h2>2. Legal Framework</h2><ul><li>Location Information Protection Act (위치정보보호법) governs registration and compliance</li><li>Personal Information Protection Act (PIPA) applies to all personal data handling</li><li>Separate rules apply for location data of minors</li></ul><h2>3. Foreign Company Requirements</h2><ul><li>Foreign companies must designate a Korean representative (국내대리인) for KCC registration</li><li>A Korean business address is required</li><li>All filings are done through the Korean representative</li></ul><h2>4. KCC Registration Procedure</h2><ol><li>Prepare required documents including security management plan</li><li>Submit registration application to KCC</li><li>Review and approval (approx. 30 days)</li><li>Registration certificate issued</li><li>Notify KCC of material changes within 30 days</li></ol><h2>5. PIPA Compliance</h2><ul><li>Location data is considered sensitive personal data under PIPA</li><li>Explicit consent from users is required before collecting location data</li><li>Data retention periods must be defined and disclosed</li><li>Annual privacy impact assessments recommended for large-scale services</li></ul><h2>6. Required Documents</h2><ul><li>LBS business registration application</li><li>Security management plan for location data</li><li>Korean representative's authorization and contact</li><li>Business registration certificate (Korean entity or foreign company documentation)</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Can a foreign company register LBS without a Korean subsidiary?</p><p class="faq-a">A. Yes. A designated Korean representative can act on the foreign company's behalf for KCC filings.</p></div><div class="faq-item"><p class="faq-q">Q. Does a mobile app that uses device GPS need LBS registration?</p><p class="faq-a">A. If the app collects user location data to provide a service, LBS registration is likely required. Consult a specialist to assess your specific case.</p></div></div><div class="cta-box"><h3>Register Your LBS Business in Korea</h3><p>Vision Administrative Office handles location-based service registration for domestic and foreign companies. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'location-based-service-business-registration-foreign-company',
    locale: 'zh',
    title: '外国企业韩国位置信息服务事业登记指南2026',
    metaTitle: '韩国位置信息服务登记外国企业2026 — 申请要求',
    metaDescription: '外国企业如何在韩国登记位置信息服务（LBS）事业。PIPA合规、KCC申报、所需材料及外国企业特殊规定。免费初次咨询。',
    category: '科技',
    excerpt: '外国企业在韩国登记位置信息服务（LBS）事业指南，包括KCC申报、PIPA合规及所需材料。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是位置信息服务事业？</li><li>法律框架</li><li>外国企业要求</li><li>KCC登记流程</li><li>PIPA合规</li><li>所需材料</li><li>常见问题</li></ol></div><h2>1. 什么是位置信息服务事业？</h2><p>位置信息服务（LBS）事业收集或使用个人位置数据提供服务（导航、配送追踪、位置感知营销等）。在韩国，须依据<strong>《位置信息保护法》</strong>向<strong>韩国通信委员会（KCC/방송통신위원회）</strong>登记。</p><h2>2. 法律框架</h2><ul><li>《位置信息保护法》管辖登记和合规事项</li><li>《个人信息保护法（PIPA）》适用于所有个人数据处理</li><li>未成年人位置数据适用特殊规定</li></ul><h2>3. 外国企业要求</h2><ul><li>外国企业须指定韩国代理人（국내대리인）进行KCC登记</li><li>须提供韩国商业地址</li><li>所有申报均通过韩国代理人进行</li></ul><h2>4. KCC登记流程</h2><ol><li>准备所需材料，包括安全管理计划</li><li>向KCC提交登记申请</li><li>审查与批准（约30天）</li><li>颁发登记证</li><li>重大变更须在30天内通知KCC</li></ol><h2>5. PIPA合规</h2><ul><li>位置数据在PIPA下被视为敏感个人数据</li><li>收集位置数据前须获得用户明确同意</li><li>须定义并披露数据保留期限</li><li>建议大型服务进行年度隐私影响评估</li></ul><h2>6. 所需材料</h2><ul><li>LBS事业登记申请表</li><li>位置数据安全管理计划</li><li>韩国代理人授权书及联系方式</li><li>营业执照（韩国法人或外国企业文件）</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 外国企业无需韩国子公司也能登记LBS吗？</p><p class="faq-a">A. 可以。指定的韩国代理人可代表外国企业进行KCC申报。</p></div><div class="faq-item"><p class="faq-q">Q. 使用设备GPS的移动应用需要LBS登记吗？</p><p class="faq-a">A. 如果应用收集用户位置数据以提供服务，可能需要LBS登记。请咨询专业人士评估您的具体情况。</p></div></div><div class="cta-box"><h3>在韩国登记LBS事业</h3><p>Vision行政士事务所代办国内外企业位置信息服务登记。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'location-based-service-business-registration-foreign-company',
    locale: 'ja',
    title: '外国企業向け韓国位置情報サービス事業登録ガイド2026',
    metaTitle: '韓国位置情報サービス登録外国企業2026 — 申請要件',
    metaDescription: '外国企業が韓国で位置情報サービス（LBS）事業を登録する方法。PIPA準拠、KCC届出、必要書類、外国企業固有のルール。行政書士による無料初回相談。',
    category: 'テクノロジー',
    excerpt: '外国企業向け韓国の位置情報サービス（LBS）事業登録ガイド — KCC届出、PIPA準拠、必要書類を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>位置情報サービス事業とは？</li><li>法的枠組み</li><li>外国企業の要件</li><li>KCC登録手続き</li><li>PIPA準拠</li><li>必要書類</li><li>よくある質問</li></ol></div><h2>1. 位置情報サービス事業とは？</h2><p>位置情報サービス（LBS）事業は、サービス提供のために個人の位置データを収集または使用します（ナビゲーション、配達追跡、位置認識マーケティングなど）。韓国では、<strong>「位置情報保護法」</strong>に基づき<strong>韓国放送通信委員会（KCC / 방송통신위원회）</strong>への登録が必要です。</p><h2>2. 法的枠組み</h2><ul><li>位置情報保護法（위치정보보호법）が登録とコンプライアンスを規制</li><li>個人情報保護法（PIPA）がすべての個人データ処理に適用</li><li>未成年者の位置データには別の規則が適用</li></ul><h2>3. 外国企業の要件</h2><ul><li>外国企業はKCC登録のために韓国の代理人（국내대리인）を指定する必要がある</li><li>韓国のビジネスアドレスが必要</li><li>すべての申告は韓国代理人を通じて行われる</li></ul><h2>4. KCC登録手続き</h2><ol><li>セキュリティ管理計画を含む必要書類を準備する</li><li>KCCに登録申請書を提出する</li><li>審査と承認（約30日）</li><li>登録証の交付</li><li>重要な変更は30日以内にKCCに通知する</li></ol><h2>5. PIPA準拠</h2><ul><li>位置データはPIPAの下で機密個人データとみなされる</li><li>位置データを収集する前にユーザーの明示的な同意が必要</li><li>データ保持期間を定義して開示する必要がある</li><li>大規模サービスには年次プライバシー影響評価を推奨</li></ul><h2>6. 必要書類</h2><ul><li>LBS事業登録申請書</li><li>位置データのセキュリティ管理計画</li><li>韓国代理人の委任状と連絡先</li><li>事業者登録証（韓国法人または外国企業書類）</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 外国企業は韓国子会社なしでLBSを登録できますか？</p><p class="faq-a">A. はい。指定された韓国代理人が外国企業に代わってKCCへの申告を行えます。</p></div><div class="faq-item"><p class="faq-q">Q. デバイスGPSを使用するモバイルアプリはLBS登録が必要ですか？</p><p class="faq-a">A. アプリがサービス提供のためにユーザーの位置データを収集する場合、LBS登録が必要な可能性があります。専門家に相談して具体的なケースを評価してもらうことをお勧めします。</p></div></div><div class="cta-box"><h3>韓国でLBS事業を登録しましょう</h3><p>ビジョン行政書士事務所が国内外企業の位置情報サービス登録を担当します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 44: online-shop-communication-sales-registration-guide ───────────
  {
    slug: 'online-shop-communication-sales-registration-guide',
    locale: 'en',
    title: 'Online Shop & Communication Sales Registration in Korea — 2026 Guide',
    metaTitle: 'Korea Online Shop Registration 2026 — Communication Sales Business Permit',
    metaDescription: 'How to register an online shop or e-commerce business (통신판매업) in Korea. FTC registration, required documents, and compliance for foreign operators. Free consultation.',
    category: 'E-Commerce',
    excerpt: 'A guide to registering an online shop or communication sales business (통신판매업) in Korea — FTC registration, required documents, and foreign operator requirements.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is Communication Sales Business?</li><li>Who Must Register?</li><li>Required Documents</li><li>Application Procedure</li><li>Key Consumer Protection Obligations</li><li>Foreign Operators</li><li>FAQ</li></ol></div><h2>1. What Is Communication Sales Business?</h2><p>In Korea, selling goods or services online, via phone, TV shopping, or catalog is classified as <strong>communication sales business (통신판매업)</strong> and requires registration with the <strong>Fair Trade Commission (FTC / 공정거래위원회)</strong> under the E-Commerce Consumer Protection Act.</p><h2>2. Who Must Register?</h2><ul><li>Any business selling products online in Korea (domestic or foreign)</li><li>Exemption: businesses with fewer than 50 transactions AND under KRW 24 million in annual sales</li><li>Marketplace sellers: the marketplace platform registers; individual sellers on platforms may not need separate registration</li></ul><h2>3. Required Documents</html><ul><li>Communication sales business registration application</li><li>Business registration certificate</li><li>Identification of business representative</li><li>Bank account information for payment processing</li><li>Escrow or payment guarantee contract (for escrow-based payment)</li></ul><h2>4. Application Procedure</h2><ol><li>Register business with local tax office first (사업자등록)</li><li>Submit communication sales registration at district office (시/군/구청)</li><li>Registration completed immediately upon submission</li><li>Registration number displayed on all sales pages</li></ol><h2>5. Key Consumer Protection Obligations</h2><ul><li>Display business registration and communication sales registration numbers on website</li><li>Provide clear product information and pricing</li><li>Accept returns within 7 days of delivery (cooling-off period)</li><li>Process refunds within 3 business days of return receipt</li></ul><h2>6. Foreign Operators</h2><ul><li>Foreign businesses selling to Korean consumers must register in Korea</li><li>Must designate a Korean representative if the business has no Korean presence</li><li>Consumer protection law applies regardless of company origin</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Do I need communication sales registration to sell on Coupang or Naver Smart Store?</p><p class="faq-a">A. For marketplace platforms, the platform typically holds the master registration. However, if you reach the threshold or sell on your own website, individual registration is required.</p></div><div class="faq-item"><p class="faq-q">Q. Can I register as an online seller without a Korean company?</p><p class="faq-a">A. Foreign companies can register, but typically need a Korean business registration first. A representative or agent can assist.</p></div></div><div class="cta-box"><h3>Register Your Online Business in Korea</h3><p>Vision Administrative Office handles communication sales registration and e-commerce compliance. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'online-shop-communication-sales-registration-guide',
    locale: 'zh',
    title: '韩国网络商店及通信销售业者登记指南2026',
    metaTitle: '韩国网络商店登记2026 — 通信销售业务许可',
    metaDescription: '如何在韩国登记网络商店或电商业务（통신판매업）。公正交易委员会登记、所需材料及外国运营者合规须知。免费初次咨询。',
    category: '电商',
    excerpt: '韩国网络商店或通信销售业务（통신판매업）登记指南，包括FTC登记、所需材料及外国运营者要求。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是通信销售业务？</li><li>谁须登记？</li><li>所需材料</li><li>申请流程</li><li>主要消费者保护义务</li><li>外国运营者</li><li>常见问题</li></ol></div><h2>1. 什么是通信销售业务？</h2><p>在韩国，通过网络、电话、电视购物或目录销售商品或服务被归类为<strong>通信销售业务（통신판매업）</strong>，须依据《电商消费者保护法》向<strong>公正交易委员会（FTC/공정거래위원회）</strong>登记。</p><h2>2. 谁须登记？</h2><ul><li>在韩国在线销售产品的任何企业（国内或外国）</li><li>豁免：年交易次数少于50次且年销售额低于2400万韩元的企业</li><li>平台卖家：平台进行主登记，平台上的个人卖家通常无需单独登记</li></ul><h2>3. 所需材料</h2><ul><li>通信销售业务登记申请表</li><li>营业执照</li><li>企业代表人身份证明</li><li>支付处理的银行账户信息</li><li>托管或支付担保合同（如采用托管付款）</li></ul><h2>4. 申请流程</h2><ol><li>首先向当地税务局登记营业执照（사업자등록）</li><li>向区/市/郡政府提交通信销售登记</li><li>提交时立即完成登记</li><li>在所有销售页面显示登记号码</li></ol><h2>5. 主要消费者保护义务</h2><ul><li>在网站上显示营业执照和通信销售登记号码</li><li>提供清晰的产品信息和定价</li><li>接受交付后7天内的退货（冷静期）</li><li>在收到退货后3个工作日内处理退款</li></ul><h2>6. 外国运营者</h2><ul><li>向韩国消费者销售的外国企业须在韩国登记</li><li>如企业在韩国无实体存在，须指定韩国代理人</li><li>消费者保护法无论企业来源地均适用</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 在Coupang或Naver智能商店销售需要通信销售登记吗？</p><p class="faq-a">A. 对于市场平台，平台通常持有主登记。但如果达到门槛或在自己的网站销售，则需要单独登记。</p></div><div class="faq-item"><p class="faq-q">Q. 没有韩国公司能登记为网络卖家吗？</p><p class="faq-a">A. 外国公司可以登记，但通常需要先进行韩国营业登记。代理人或代理机构可提供协助。</p></div></div><div class="cta-box"><h3>在韩国登记您的网络业务</h3><p>Vision行政士事务所代办通信销售登记及电商合规服务。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'online-shop-communication-sales-registration-guide',
    locale: 'ja',
    title: '韓国オンラインショップ・通信販売業登録ガイド2026',
    metaTitle: '韓国オンラインショップ登録2026 — 通信販売業許可',
    metaDescription: '韓国でオンラインショップやEC事業（통신판매업）を登録する方法。FTC登録、必要書類、外国事業者のコンプライアンス。行政書士による無料初回相談。',
    category: 'Eコマース',
    excerpt: '韓国のオンラインショップや通信販売業（통신판매업）登録ガイド — FTC登録、必要書類、外国事業者の要件を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>通信販売業とは？</li><li>登録が必要な対象</li><li>必要書類</li><li>申請手続き</li><li>主な消費者保護義務</li><li>外国事業者</li><li>よくある質問</li></ol></div><h2>1. 通信販売業とは？</h2><p>韓国では、オンライン、電話、テレビショッピング、またはカタログによる商品・サービスの販売は<strong>通信販売業（통신판매업）</strong>に分類され、EC消費者保護法に基づき<strong>公正取引委員会（FTC / 공정거래위원회）</strong>への登録が必要です。</p><h2>2. 登録が必要な対象</h2><ul><li>韓国でオンライン販売を行うすべての事業者（国内・外国を問わず）</li><li>免除：年間取引件数50件未満かつ年間売上2,400万ウォン未満の事業者</li><li>マーケットプレイス出品者：プラットフォームがマスター登録を行う；プラットフォーム上の個人出品者は別途登録不要な場合が多い</li></ul><h2>3. 必要書類</h2><ul><li>通信販売業登録申請書</li><li>事業者登録証</li><li>事業代表者の身分証明</li><li>決済処理用銀行口座情報</li><li>エスクローまたは支払保証契約書（エスクロー決済の場合）</li></ul><h2>4. 申請手続き</h2><ol><li>まず地方税務署で事業者登録（사업자등록）を行う</li><li>区役所（시/군/구청）に通信販売登録を提出する</li><li>提出時に登録が即座に完了する</li><li>すべての販売ページに登録番号を表示する</li></ol><h2>5. 主な消費者保護義務</h2><ul><li>ウェブサイトに事業者登録番号と通信販売登録番号を表示する</li><li>明確な商品情報と価格を提供する</li><li>配達後7日以内の返品を受け付ける（クーリングオフ期間）</li><li>返品受領後3営業日以内に返金を処理する</li></ul><h2>6. 外国事業者</h2><ul><li>韓国消費者に販売する外国企業は韓国で登録する必要がある</li><li>韓国に拠点がない場合は韓国の代理人を指定する必要がある</li><li>消費者保護法は会社の出身地に関わらず適用される</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. CoupangやNaver Smart Storeで販売するには通信販売登録が必要ですか？</p><p class="faq-a">A. マーケットプレイスプラットフォームでは、通常プラットフォームがマスター登録を保持します。ただし、閾値に達するか自社ウェブサイトで販売する場合は個別登録が必要です。</p></div><div class="faq-item"><p class="faq-q">Q. 韓国企業なしでオンライン販売業者として登録できますか？</p><p class="faq-a">A. 外国企業は登録できますが、通常は先に韓国の事業者登録が必要です。代理人または代理機関が支援できます。</p></div></div><div class="cta-box"><h3>韓国でオンラインビジネスを登録しましょう</h3><p>ビジョン行政書士事務所が通信販売登録とECコンプライアンスを担当します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 45: health-functional-food-sales-registration-guide ─────────────
  {
    slug: 'health-functional-food-sales-registration-guide',
    locale: 'en',
    title: 'Health Functional Food Sales Registration in Korea — 2026 Guide',
    metaTitle: 'Korea Health Functional Food Sales Registration 2026 — Requirements',
    metaDescription: 'How to register a health functional food sales business in Korea. MFDS registration, labeling requirements, import procedures, and compliance checklist. Free consultation.',
    category: 'Food',
    excerpt: 'A guide to health functional food (건강기능식품) sales business registration in Korea — MFDS requirements, labeling rules, import procedures, and compliance.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Are Health Functional Foods?</li><li>Types of Businesses</li><li>MFDS Registration Requirements</li><li>Labeling Requirements</li><li>Import Procedure</li><li>Required Documents</li><li>FAQ</li></ol></div><h2>1. What Are Health Functional Foods?</h2><p>Health functional foods (건강기능식품) are products with scientifically proven health benefits beyond basic nutrition. In Korea, they are strictly regulated by the <strong>Ministry of Food and Drug Safety (MFDS / 식품의약품안전처)</strong> under the Health Functional Food Act.</p><h2>2. Types of Businesses</h2><ul><li><strong>Manufacturer (제조업):</strong> produces health functional foods — requires GMP facility certification</li><li><strong>Importer/Responsible Distributor (수입판매업):</strong> imports and sells — requires MFDS product notification/approval per product</li><li><strong>Sales business (판매업):</strong> sells domestically manufactured or approved imported products</li></ul><h2>3. MFDS Registration Requirements</h2><ul><li>Business registration with MFDS before selling</li><li>For manufacturers: GMP certification of the production facility</li><li>For importers: each product batch must pass import inspection</li><li>Functional ingredient claims must be pre-approved by MFDS</li></ul><h2>4. Labeling Requirements</h2><ul><li>Korean label required for all products sold in Korea</li><li>Must include: product name, ingredients, functional claims (MFDS-approved text only), serving size, expiry date, manufacturer/importer info</li><li>Unapproved health claims are prohibited and can result in product seizure</li></ul><h2>5. Import Procedure</h2><ol><li>Obtain MFDS product notification or approval before first import</li><li>Each import shipment goes through Customs and MFDS import inspection</li><li>Apply Korean labels before distribution</li><li>Maintain batch records for 3 years minimum</li></ol><h2>6. Required Documents</h2><ul><li>Health functional food business registration application</li><li>Business registration certificate</li><li>Product specification sheet</li><li>Certificate of Analysis (for each batch)</li><li>Country of origin documentation</li><li>MFDS product notification or approval certificate</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Can I sell imported health functional foods on Korean e-commerce platforms?</p><p class="faq-a">A. Yes, but each product must have MFDS approval or notification, Korean labeling, and the business must be registered as a health functional food sales business.</p></div><div class="faq-item"><p class="faq-q">Q. Are dietary supplements the same as health functional foods in Korea?</p><p class="faq-a">A. Not necessarily. Only products officially classified as 건강기능식품 by MFDS can make functional claims. Ordinary supplements sold without MFDS classification cannot make health benefit claims.</p></div></div><div class="cta-box"><h3>Register Your Health Functional Food Business</h3><p>Vision Administrative Office handles MFDS registration and compliance for health functional food businesses. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'health-functional-food-sales-registration-guide',
    locale: 'zh',
    title: '韩国健康功能食品销售业者登记指南2026',
    metaTitle: '韩国健康功能食品销售登记2026 — 申请要求',
    metaDescription: '如何在韩国登记健康功能食品销售业务。MFDS登记、标签要求、进口程序及合规清单。免费初次咨询。',
    category: '食品',
    excerpt: '韩国健康功能食品（건강기능식품）销售业者登记指南，包括MFDS要求、标签规定、进口程序及合规须知。',
    content: `<div class="toc"><p>目录</p><ol><li>什么是健康功能食品？</li><li>业务类型</li><li>MFDS登记要求</li><li>标签要求</li><li>进口流程</li><li>所需材料</li><li>常见问题</li></ol></div><h2>1. 什么是健康功能食品？</h2><p>健康功能食品（건강기능식품）是具有超越基础营养的科学证实健康功效的产品。在韩国，受<strong>食品药品安全处（MFDS/식품의약품안전처）</strong>依据《健康功能食品法》严格监管。</p><h2>2. 业务类型</h2><ul><li><strong>制造业（제조업）：</strong>生产健康功能食品，须获得GMP设施认证</li><li><strong>进口/责任销售业（수입판매업）：</strong>进口和销售，须按产品向MFDS申报/获批</li><li><strong>销售业（판매업）：</strong>销售国产或经批准的进口产品</li></ul><h2>3. MFDS登记要求</h2><ul><li>销售前须向MFDS进行业务登记</li><li>制造商：须获得生产设施GMP认证</li><li>进口商：每批产品须通过进口检查</li><li>功能成分声明须事先获得MFDS批准</li></ul><h2>4. 标签要求</h2><ul><li>在韩国销售的所有产品须有韩文标签</li><li>须包括：产品名称、成分、功能声明（仅限MFDS批准的文字）、每份用量、有效期、制造商/进口商信息</li><li>禁止未经批准的健康声明，违规可能导致产品被没收</li></ul><h2>5. 进口流程</h2><ol><li>首次进口前获得MFDS产品申报或批准</li><li>每批进口货物须通过海关和MFDS进口检查</li><li>在流通前粘贴韩文标签</li><li>至少保存3年批次记录</li></ol><h2>6. 所需材料</h2><ul><li>健康功能食品业务登记申请表</li><li>营业执照</li><li>产品规格表</li><li>检验报告（每批）</li><li>原产地证明文件</li><li>MFDS产品申报或批准证书</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 我能在韩国电商平台上销售进口健康功能食品吗？</p><p class="faq-a">A. 可以，但每种产品须获得MFDS批准或申报、韩文标签，且业务须登记为健康功能食品销售业者。</p></div><div class="faq-item"><p class="faq-q">Q. 膳食补充剂与健康功能食品在韩国是同一概念吗？</p><p class="faq-a">A. 不一定。只有MFDS正式分类为건강기능식품的产品才能做出功能声明。未经MFDS分类的普通补充剂不得声称健康功效。</p></div></div><div class="cta-box"><h3>登记健康功能食品业务</h3><p>Vision行政士事务所代办健康功能食品业务MFDS登记及合规服务。免费初次咨询。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'health-functional-food-sales-registration-guide',
    locale: 'ja',
    title: '韓国健康機能食品販売業登録ガイド2026',
    metaTitle: '韓国健康機能食品販売登録2026 — 申請要件',
    metaDescription: '韓国で健康機能食品販売業を登録する方法。MFDS登録、ラベリング要件、輸入手続き、コンプライアンスチェックリスト。行政書士による無料初回相談。',
    category: '食品',
    excerpt: '韓国の健康機能食品（건강기능식품）販売業登録ガイド — MFDS要件、ラベリングルール、輸入手続き、コンプライアンスを解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>健康機能食品とは？</li><li>事業の種類</li><li>MFDS登録要件</li><li>ラベリング要件</li><li>輸入手続き</li><li>必要書類</li><li>よくある質問</li></ol></div><h2>1. 健康機能食品とは？</h2><p>健康機能食品（건강기능식품）は、基本的な栄養を超える科学的に証明された健康上のメリットを持つ製品です。韓国では、健康機能食品法に基づき<strong>食品医薬品安全処（MFDS / 식품의약품안전처）</strong>によって厳しく規制されています。</p><h2>2. 事業の種類</h2><ul><li><strong>製造業（제조업）：</strong>健康機能食品を製造する — GMP施設認証が必要</li><li><strong>輸入業/責任販売業（수입판매업）：</strong>輸入・販売する — 製品ごとにMFDS届出/承認が必要</li><li><strong>販売業（판매업）：</strong>国内製造または承認済み輸入製品を販売する</li></ul><h2>3. MFDS登録要件</h2><ul><li>販売前にMFDSへの事業登録が必要</li><li>製造業者の場合：生産施設のGMP認証</li><li>輸入業者の場合：各製品ロットが輸入検査に合格する必要がある</li><li>機能性成分の表示はMFDSによる事前承認が必要</li></ul><h2>4. ラベリング要件</h2><ul><li>韓国で販売されるすべての製品に韓国語ラベルが必要</li><li>必須記載事項：製品名、成分、機能性表示（MFDS承認テキストのみ）、摂取量、有効期限、製造業者/輸入業者情報</li><li>未承認の健康表示は禁止され、製品の没収につながる場合がある</li></ul><h2>5. 輸入手続き</h2><ol><li>初回輸入前にMFDS製品届出または承認を取得する</li><li>各輸入ロットは税関とMFDS輸入検査を通過する必要がある</li><li>流通前に韓国語ラベルを貼付する</li><li>ロット記録を最低3年間保管する</li></ol><h2>6. 必要書類</h2><ul><li>健康機能食品事業登録申請書</li><li>事業者登録証</li><li>製品仕様書</li><li>試験成績書（各ロット）</li><li>原産地証明書類</li><li>MFDS製品届出または承認証明書</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 韓国のECプラットフォームで輸入健康機能食品を販売できますか？</p><p class="faq-a">A. はい。ただし、各製品にMFDS承認または届出、韓国語ラベルが必要で、事業は健康機能食品販売業として登録する必要があります。</p></div><div class="faq-item"><p class="faq-q">Q. 韓国でダイエタリーサプリメントと健康機能食品は同じですか？</p><p class="faq-a">A. 必ずしも同じではありません。MFDSによって正式に건강기능식품として分類された製品のみが機能性表示を行えます。MFDS分類のない通常のサプリメントは健康上のメリットを主張できません。</p></div></div><div class="cta-box"><h3>健康機能食品事業を登録しましょう</h3><p>ビジョン行政書士事務所が健康機能食品事業のMFDS登録とコンプライアンスを担当します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 46: yongdo-byeongyeong-haengjengsa ──────────────────────────────
  {
    slug: 'yongdo-byeongyeong-haengjengsa',
    locale: 'en',
    title: 'Building Usage Change in Korea — Administrative Agent Full Service Guide',
    metaTitle: 'Korea Building Usage Change Agent 2026 — Permit & Notification Service',
    metaDescription: 'Korea building usage change (용도변경) — permit vs. notification decision, step-by-step procedure, common cases, fees, and timeline. Handled start-to-finish by licensed administrative agents.',
    category: 'Building & Property',
    excerpt: 'Korea building usage change (용도변경) guide — permit vs. notification, procedure, common cases, and fees handled by licensed administrative agents.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Why You Need an Administrative Agent</li><li>Our Service Scope</li><li>Step-by-Step Procedure</li><li>Common Cases</li><li>Fees & Timeline</li><li>FAQ</li></ol></div><h2>1. Why You Need an Administrative Agent</h2><p>Building usage change (용도변경) in Korea sits at the intersection of the Building Act, National Land Planning Act, Fire Services Act, and Parking Lot Act. Common pitfalls include:</p><ul><li><strong>Permit vs. notification decision:</strong> Misclassifying the usage group direction risks unlicensed operation</li><li><strong>Inter-department coordination:</strong> Fire, environment, and traffic reviews must run simultaneously</li><li><strong>Re-applications after rejection:</strong> Unknown supplementary requirements cause repeated rejections</li><li><strong>Owner/tenant consent:</strong> Frequently missed in document preparation</li></ul><h2>2. Our Service Scope</h2><ul><li>Pre-assessment of permit, notification, or record-change requirement</li><li>Review of building register and land use plan certificate</li><li>Coordination with architects for drawing preparation</li><li>Fire safety certificate application support</li><li>Submission to district office and attendance at site inspections</li><li>Post-completion certificate follow-through</li></ul><h2>3. Step-by-Step Procedure</h2><ol><li>Free consultation — current use and change objective</li><li>Permit type decision — permit / notification / record change</li><li>Document preparation — architect assignment, document collection</li><li>Submission and coordination — district office submission + fire/traffic reviews</li><li>Site inspection support — responding to inspector visit</li><li>Certificate receipt — permit or notification certificate delivered</li></ol><h2>4. Common Cases</h2><table><thead><tr><th>Before</th><th>After</th><th>Key Review</th></tr></thead><tbody><tr><td>Detached house</td><td>Neighborhood facility (Class 1)</td><td>Parking & fire standards</td></tr><tr><td>Restaurant</td><td>Academy (education facility)</td><td>Permit + academy registration</td></tr><tr><td>Warehouse/factory</td><td>Retail facility</td><td>Fire & energy standards</td></tr><tr><td>Officetel</td><td>Office facility</td><td>Parking & elevator standards</td></tr></tbody></table><h2>5. Fees & Timeline</h2><ul><li>Agency fee: quoted after consultation (varies by scale and type)</li><li>Processing time: permit 30–60 days, notification 5–14 days</li><li>Architect drawing fee: separate, varies by scale</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Can a tenant apply without the building owner?</p><p class="faq-a">A. Yes. With the owner's written consent attached, the application can be filed in the tenant's name.</p></div><div class="faq-item"><p class="faq-q">Q. How long does usage change for an academy take?</p><p class="faq-a">A. Realistically 2–3 months for permit, 3–4 months including fire safety certification.</p></div><div class="faq-item"><p class="faq-q">Q. Can you help if a previous application was rejected?</p><p class="faq-a">A. Yes. We analyze the rejection reason, prepare supplementary documents, and manage the re-application.</p></div></div><div class="cta-box"><h3>Building Usage Change Consultation</h3><p>Vision Administrative Office handles building usage change from permit to completion, start to finish. Initial consultation is free.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'yongdo-byeongyeong-haengjengsa',
    locale: 'zh',
    title: '韩国建筑物用途变更行政士代理 — 许可·申报到完成一站式服务',
    metaTitle: '韩国建筑物用途变更代理2026 — 许可与申报服务',
    metaDescription: '韩国建筑物用途变更（용도변경）— 许可与申报判断、逐步流程、常见案例、费用及时间。由持证行政士全程代理。',
    category: '建筑·设施',
    excerpt: '韩国建筑物用途变更指南 — 许可与申报区分、流程、常见案例及费用，由持证行政士全程代理。',
    content: `<div class="toc"><p>目录</p><ol><li>为什么需要行政士代理</li><li>服务范围</li><li>逐步流程</li><li>常见案例</li><li>费用及时间</li><li>常见问题</li></ol></div><h2>1. 为什么需要行政士代理</h2><p>韩国建筑物用途变更（용도변경）涉及《建筑法》、《国土计划法》、《消防法》及《停车场法》等多部法律交叉。常见难点包括：</p><ul><li><strong>许可 vs 申报判断：</strong>用途分组移动方向判断错误，存在无证经营风险</li><li><strong>跨部门协商：</strong>消防、环境、交通须同步协商</li><li><strong>驳回后重新申请：</strong>不了解补充事项导致反复驳回</li><li><strong>所有人·承租人同意：</strong>文件整理中常被忽视</li></ul><h2>2. 服务范围</h2><ul><li>预判许可、申报或记载事项变更类型</li><li>审查建筑台账及土地利用计划确认书</li><li>联络建筑师协助图纸绘制</li><li>消防完备证明申请陪同</li><li>向辖区区厅提交并陪同现场确认</li><li>竣工后完结支持</li></ul><h2>3. 逐步流程</h2><ol><li>免费咨询 — 了解现有用途及变更目的</li><li>确定许可类型 — 许可/申报/记载变更</li><li>准备文件 — 指定建筑师，收集材料</li><li>提交及协商 — 区厅提交 + 消防·交通协商</li><li>陪同现场确认 — 配合负责公务员到访</li><li>领取许可证 — 完成后交付许可证</li></ol><h2>4. 常见案例</h2><table><thead><tr><th>变更前</th><th>变更后</th><th>主要审查事项</th></tr></thead><tbody><tr><td>独栋住宅</td><td>第一种近邻生活设施</td><td>停车·消防标准</td></tr><tr><td>一般餐厅</td><td>学院（教育研究设施）</td><td>许可+学院登记联动</td></tr><tr><td>仓库·工厂</td><td>销售设施</td><td>消防·能源标准</td></tr><tr><td>公寓式办公室</td><td>业务设施</td><td>停车·电梯标准</td></tr></tbody></table><h2>5. 费用及时间</h2><ul><li>代理费用：咨询后报价（因规模·类型而异）</li><li>处理时间：许可30~60天，申报5~14天</li><li>建筑师图纸费用：另计，因规模而异</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 承租人可以申请吗？</p><p class="faq-a">A. 可以。附上建筑所有人同意书，可以承租人名义申请。</p></div><div class="faq-item"><p class="faq-q">Q. 学院开设的用途变更需要多长时间？</p><p class="faq-a">A. 许可基准约2~3个月，含消防完备证明约3~4个月。</p></div><div class="faq-item"><p class="faq-q">Q. 之前被驳回，还能帮忙吗？</p><p class="faq-a">A. 可以。我们分析驳回原因，补充材料后进行重新申请。</p></div></div><div class="cta-box"><h3>建筑物用途变更咨询</h3><p>Vision行政士事务所从用途变更许可到完成提供全程代理服务。初次咨询免费。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'yongdo-byeongyeong-haengjengsa',
    locale: 'ja',
    title: '韓国建物用途変更の行政書士代行 — 許可・届出から完了まで',
    metaTitle: '韓国建物用途変更代行2026 — 許可・届出ワンストップサービス',
    metaDescription: '韓国建物用途変更（용도변경）— 許可と届出の判断、手順、よくある事例、費用・期間。行政書士が最初から最後まで代行します。',
    category: '建築・施設',
    excerpt: '韓国建物用途変更ガイド — 許可と届出の区分、手順、よくある事例、費用。行政書士による全行程代行。',
    content: `<div class="toc"><p>目次</p><ol><li>行政書士代行が必要な理由</li><li>サービス範囲</li><li>手順ステップ</li><li>よくある事例</li><li>費用・期間</li><li>よくある質問</li></ol></div><h2>1. 行政書士代行が必要な理由</h2><p>韓国の建物用途変更（용도변경）は建築法・国土計画法・消防法・駐車場法が交差します。実務でよく詰まる点は以下のとおりです。</p><ul><li><strong>許可 vs 届出の判断：</strong>用途グループの移動方向を誤ると無許可営業のリスク</li><li><strong>他部署との協議：</strong>消防・環境・交通を同時に協議する必要がある</li><li><strong>不受理後の再申請：</strong>補完事項を把握していないと繰り返し不受理になる</li><li><strong>所有者・賃借人の同意：</strong>書類作成で見落とすケースが多い</li></ul><h2>2. サービス範囲</h2><ul><li>許可・届出・記載事項変更の事前判断</li><li>建物登記簿・土地利用計画確認書のレビュー</li><li>建築士と連携した図面作成支援</li><li>消防完備証明申請の同行</li><li>管轄区役所への提出・現場確認対応</li><li>使用承認（竣工）後の完結支援</li></ul><h2>3. 手順ステップ</h2><ol><li>無料相談 — 現在の建物用途・変更目的の把握</li><li>許可類型の決定 — 許可/届出/記載変更の確定</li><li>書類準備 — 建築士選任、書類収集</li><li>提出・協議 — 区役所提出 + 消防・交通協議</li><li>現場確認同行 — 担当公務員の訪問対応</li><li>許可証受領 — 完了後に登録証・許可証を交付</li></ol><h2>4. よくある事例</h2><table><thead><tr><th>変更前</th><th>変更後</th><th>主な審査事項</th></tr></thead><tbody><tr><td>一戸建て住宅</td><td>第1種近隣生活施設</td><td>駐車・消防基準</td></tr><tr><td>一般飲食店</td><td>学院（教育研究施設）</td><td>許可+学院登録と連携</td></tr><tr><td>倉庫・工場</td><td>販売施設</td><td>消防・エネルギー基準</td></tr><tr><td>オフィステル</td><td>業務施設</td><td>駐車・エレベーター基準</td></tr></tbody></table><h2>5. 費用・期間</h2><ul><li>代行費用：相談後にご案内（規模・種類による）</li><li>処理期間：許可30〜60日、届出5〜14日</li><li>建築士図面費用：規模によって別途</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 賃借人が申請できますか？</p><p class="faq-a">A. 可能です。建物所有者の同意書を添付すれば、賃借人名義で申請できます。</p></div><div class="faq-item"><p class="faq-q">Q. 学院開設のための用途変更はどれくらいかかりますか？</p><p class="faq-a">A. 許可基準で2〜3ヶ月、消防完備を含めると3〜4ヶ月が現実的です。</p></div><div class="faq-item"><p class="faq-q">Q. 不受理歴がある場合も対応できますか？</p><p class="faq-a">A. はい。不受理の原因を分析し、補完して再申請する工程を専任で担当します。</p></div></div><div class="cta-box"><h3>建物用途変更のご相談</h3><p>ビジョン行政書士事務所が建物用途変更の許可から完了まで、ワンストップで代行します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 47: beauty-salon-notification-guide ─────────────────────────────
  {
    slug: 'beauty-salon-notification-guide',
    locale: 'en',
    title: 'Beauty Salon Business Registration in Korea — 2026 Guide',
    metaTitle: 'Korea Beauty Salon Business Notification 2026 — License & Registration',
    metaDescription: 'How to register a beauty salon (미용업) in Korea. Hairdresser license requirements, notification procedure, facility standards, and hygiene training. Free consultation.',
    category: 'Health & Sanitation',
    excerpt: 'Korea beauty salon (미용업) business notification guide — license requirements, procedure, facility standards, and hygiene training for foreigners.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Types of Beauty Businesses & Notification vs. Permit</li><li>Hairdresser License Requirements</li><li>Registration Procedure</li><li>Facility & Hygiene Standards</li><li>Mandatory Hygiene Training</li><li>FAQ</li></ol></div><h2>1. Types of Beauty Businesses & Notification vs. Permit</h2><p>Beauty businesses in Korea are regulated under the <strong>Public Health Control Act</strong> and require a <strong>business notification</strong> (not a permit) filed with the local district office. Meeting the requirements allows same-day operation after notification.</p><ul><li><strong>General beauty (일반 미용업):</strong> haircuts, perms, coloring, blowouts</li><li><strong>Skin care (피부 미용업):</strong> skin treatment, hair removal, eyebrow styling</li><li><strong>Nail care (네일 미용업):</strong> nail care, nail art</li><li><strong>Makeup (화장 미용업):</strong> makeup artistry</li><li><strong>Comprehensive (종합 미용업):</strong> 2+ categories combined</li></ul><h2>2. Hairdresser License Requirements</h2><ul><li>Graduation from a related department at high school, junior college, or university; OR</li><li>Pass the national hairdresser/beautician qualification exam</li><li>License issued by the mayor/governor of the relevant province</li><li>Foreigners must verify that their visa status allows employment</li></ul><h2>3. Registration Procedure</h2><ol><li>Confirm the hairdresser license is issued</li><li>Sign a lease for the business premises</li><li>Complete the interior fit-out to meet facility standards</li><li>Submit business notification to the district office sanitation department</li><li>Receive notification certificate and commence operations</li></ol><h2>4. Facility & Hygiene Standards</h2><ul><li>Changing room, washbasin, and sterilization facilities required</li><li>Working area separated from waiting area</li><li>Ventilation and lighting standards met</li><li>Sterilizer and disposable hygiene materials on hand</li></ul><h2>5. Mandatory Hygiene Training</h2><p>Operators must complete a 3-hour hygiene training course before opening or within 6 months of opening, at a designated institution such as the Korea Hairdressers Association.</p><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Can a foreigner open a beauty salon in Korea?</p><p class="faq-a">A. Yes, provided you hold a work-eligible visa (F-4, F-5, F-2, etc.) and obtain a Korean hairdresser/beautician license.</p></div><div class="faq-item"><p class="faq-q">Q. Is there an inspection after filing the notification?</p><p class="faq-a">A. A health center inspector may conduct a facility inspection. Deficiencies result in a remediation order.</p></div><div class="faq-item"><p class="faq-q">Q. Does a nail salon also need a business notification?</p><p class="faq-a">A. Yes, nail care (네일 미용업) is subject to business notification under the Public Health Control Act.</p></div></div><div class="cta-box"><h3>Beauty Salon Registration Consultation</h3><p>Vision Administrative Office provides end-to-end support for beauty salon business notification and hygiene training guidance. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'beauty-salon-notification-guide',
    locale: 'zh',
    title: '韩国美容业申报完整指南2026 — 执照·申报·卫生标准',
    metaTitle: '韩国美容业申报2026 — 执照与营业申报要求',
    metaDescription: '如何在韩国申报美容业（미용업）。美容师执照要求、申报流程、设施标准及卫生培训。免费初次咨询。',
    category: '卫生·服务',
    excerpt: '韩国美容业（미용업）营业申报指南 — 执照要求、申报流程、设施标准及外国人开业须知。',
    content: `<div class="toc"><p>目录</p><ol><li>美容业类型与申报制度</li><li>美容师执照要求</li><li>营业申报流程</li><li>设施·卫生标准</li><li>卫生教育义务</li><li>常见问题</li></ol></div><h2>1. 美容业类型与申报制度</h2><p>韩国美容业依据《公众卫生管理法》须向辖区市长·郡守·区厅长进行<strong>营业申报</strong>（非许可制）。满足要求后申报即可营业。</p><ul><li><strong>一般美容业（일반 미용업）：</strong>剪发·烫发·染发·吹干等</li><li><strong>皮肤美容业（피부 미용업）：</strong>皮肤管理·脱毛·眉毛修整等</li><li><strong>美甲业（네일 미용업）：</strong>手足甲护理·美甲艺术</li><li><strong>化妆美容业（화장 미용업）：</strong>化妆·彩妆</li><li><strong>综合美容业（종합 미용업）：</strong>两种以上类型合并经营</li></ul><h2>2. 美容师执照要求</h2><ul><li>相关学校（高中·专科·大学）相关专业毕业；或</li><li>通过美容师国家资格考试</li><li>执照由省市长颁发</li><li>外国人须确认签证类型是否允许就业</li></ul><h2>3. 营业申报流程</h2><ol><li>确认美容师执照已发放</li><li>签订经营场所租赁合同</li><li>按设施标准完成装修</li><li>向辖区区厅卫生科提交营业申报</li><li>领取申报证后开始营业</li></ol><h2>4. 设施·卫生标准</h2><ul><li>须设有更衣室、洗面台、消毒设施</li><li>工作区与等候区需分开</li><li>满足通风及照明标准</li><li>备有消毒器及一次性卫生材料</li></ul><h2>5. 卫生教育义务</h2><p>营业开始前或开始后6个月内，须在指定机构（如韩国美容师协会）完成3小时卫生教育。</p><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 外国人可以在韩国开设美容院吗？</p><p class="faq-a">A. 可以。但须持有允许就业的签证（F-4、F-5、F-2等），并单独取得韩国美容师执照。</p></div><div class="faq-item"><p class="faq-q">Q. 申报后会有检查吗？</p><p class="faq-a">A. 保健所卫生监察员可能进行设施现场确认，不达标将收到整改命令。</p></div><div class="faq-item"><p class="faq-q">Q. 美甲店也需要申报吗？</p><p class="faq-a">A. 是的，美甲业（네일 미용업）依据《公众卫生管理法》也属于营业申报对象。</p></div></div><div class="cta-box"><h3>美容业申报咨询</h3><p>Vision行政士事务所为美容业营业申报及卫生教育提供全程支持。初次咨询免费。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'beauty-salon-notification-guide',
    locale: 'ja',
    title: '韓国美容業届出完全ガイド2026 — 免許・届出・衛生基準',
    metaTitle: '韓国美容業届出2026 — 美容師免許と営業届出要件',
    metaDescription: '韓国で美容業（미용업）を届け出る方法。美容師免許要件、届出手続き、施設基準、衛生講習。行政書士による無料初回相談。',
    category: '衛生・サービス',
    excerpt: '韓国美容業（미용업）営業届出ガイド — 免許要件、届出手順、施設基準、外国人開業の注意点。',
    content: `<div class="toc"><p>目次</p><ol><li>美容業の種類と届出制度</li><li>美容師免許要件</li><li>営業届出手順</li><li>施設・衛生基準</li><li>衛生講習義務</li><li>よくある質問</li></ol></div><h2>1. 美容業の種類と届出制度</h2><p>韓国の美容業は<strong>公衆衛生管理法</strong>に基づき、管轄の市長・郡守・区庁長に<strong>営業届出</strong>（許可制ではなく届出制）を行う必要があります。要件を満たせば届出後すぐに営業が可能です。</p><ul><li><strong>一般美容業（일반 미용업）：</strong>カット・パーマ・カラー・ブローなど</li><li><strong>皮膚美容業（피부 미용업）：</strong>スキンケア・脱毛・眉毛ケアなど</li><li><strong>ネイル美容業（네일 미용업）：</strong>爪のケア・ネイルアート</li><li><strong>化粧美容業（화장 미용업）：</strong>メイクアップ・分装</li><li><strong>総合美容業（종합 미용업）：</strong>2種類以上の業種を統合して経営</li></ul><h2>2. 美容師免許要件</h2><ul><li>関連学校（高校・専門学校・大学）の関連学科を卒業、または</li><li>美容師国家資格試験に合格</li><li>免許証は都道府県知事（시도지사）に申請して発行</li><li>外国人は在留資格と就労可能かどうかの確認が必須</li></ul><h2>3. 営業届出手順</h2><ol><li>美容師免許証の発行確認</li><li>営業場所の賃貸借契約締結</li><li>施設基準に合わせた内装工事完了</li><li>管轄区役所衛生課に営業届出書を提出</li><li>届出証受領後に営業開始</li></ol><h2>4. 施設・衛生基準</h2><ul><li>更衣室・洗面台・消毒設備が必須</li><li>作業スペースと待合スペースを区分</li><li>換気・照明基準を満たす</li><li>消毒器および使い捨て衛生用品を備置</li></ul><h2>5. 衛生講習義務</h2><p>営業開始前または開始後6ヶ月以内に、韓国美容師会等の指定機関で衛生講習（3時間）を受講する義務があります。</p><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 外国人が韓国で美容院を開業できますか？</p><p class="faq-a">A. 可能です。ただし、就労可能な在留資格（F-4、F-5、F-2等）が必要で、韓国の美容師免許も別途取得する必要があります。</p></div><div class="faq-item"><p class="faq-q">Q. 届出後に検査がありますか？</p><p class="faq-a">A. 保健所の衛生監視員が施設の現場確認を行う場合があります。基準に満たない場合は是正命令が出されます。</p></div><div class="faq-item"><p class="faq-q">Q. ネイルサロンも営業届出が必要ですか？</p><p class="faq-a">A. はい、ネイル美容業（네일 미용업）も公衆衛生管理法上の営業届出対象です。</p></div></div><div class="cta-box"><h3>美容業届出のご相談</h3><p>ビジョン行政書士事務所が美容業営業届出から衛生講習案内までワンストップでサポートします。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 48: pet-shop-animal-sales-registration-guide ────────────────────
  {
    slug: 'pet-shop-animal-sales-registration-guide',
    locale: 'en',
    title: 'Pet Shop & Animal Sales Business Registration in Korea — 2026 Guide',
    metaTitle: 'Korea Pet Shop Animal Sales Registration 2026 — Requirements & Procedure',
    metaDescription: 'How to register an animal sales business (동물판매업) in Korea. Facility standards, training requirements, veterinary obligations, and foreigner registration. Free consultation.',
    category: 'Animals & Licensing',
    excerpt: 'Korea animal sales business (동물판매업) registration guide — facility requirements, training, veterinary obligations, and steps for foreigners to open a pet shop.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Overview</li><li>Registration Requirements</li><li>Registration Procedure</li><li>Facility Standards</li><li>Operational Obligations</li><li>FAQ</li></ol></div><h2>1. Overview</h2><p>Businesses selling companion animals must register as an <strong>animal sales business (동물판매업)</strong> under the <strong>Animal Protection Act</strong> with the local district office. Operating without registration can result in up to 2 years imprisonment or a fine of up to KRW 20 million.</p><h2>2. Registration Requirements</h2><ul><li>Personnel: A person who has completed animal protection training must be on duty at all times</li><li>Facility: Cage size, cleanliness, temperature, and ventilation standards must be met</li><li>Mandatory maintenance of animal health and sales records</li><li>No disqualifying history (e.g., animal abuse convictions)</li></ul><h2>3. Registration Procedure</h2><ol><li>Secure business premises and prepare to meet facility standards</li><li>Complete animal protection training at a designated institution (3–6 hours)</li><li>Submit animal sales business registration application to the district office</li><li>Receive registration certificate after site inspection</li></ol><h2>4. Facility Standards</h2><ul><li>Minimum space per animal species and size</li><li>Temperature and humidity control environment</li><li>Clean water and food provision facilities</li><li>Quarantine space for newly arrived animals</li></ul><h2>5. Operational Obligations</h2><ul><li>Provide a health certificate when selling each animal</li><li>Prohibition on selling animals under 2 months of age</li><li>Inform buyers of compensation policy for animals that die within 15 days</li><li>Maintain regular veterinary health inspection records</li></ul><div class="faq-section"><h2>FAQ</h2><div class="faq-item"><p class="faq-q">Q. Can a foreigner register an animal sales business in Korea?</p><p class="faq-a">A. Yes. You need a work-eligible visa (F-2, F-4, F-5, etc.) and must register a business entity first, then proceed with the animal sales registration.</p></div><div class="faq-item"><p class="faq-q">Q. Is registration required for online-only sales?</p><p class="faq-a">A. Yes. Online animal sales also constitute animal sales business activity and require registration.</p></div><div class="faq-item"><p class="faq-q">Q. Do reptile sales also require registration?</p><p class="faq-a">A. Any business selling animals classified as companion animals requires registration. Wild animals are subject to separate regulations.</p></div></div><div class="cta-box"><h3>Pet Shop Registration Consultation</h3><p>Vision Administrative Office handles animal sales business registration from start to finish. Free initial consultation.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'pet-shop-animal-sales-registration-guide',
    locale: 'zh',
    title: '韩国宠物店动物销售业者登记指南2026',
    metaTitle: '韩国宠物店动物销售业登记2026 — 要求与流程',
    metaDescription: '如何在韩国登记动物销售业（동물판매업）。设施标准、培训要求、兽医义务及外国人登记。免费初次咨询。',
    category: '动物·许可',
    excerpt: '韩国动物销售业（동물판매업）登记指南 — 设施要求、培训、兽医义务及外国人开店步骤。',
    content: `<div class="toc"><p>目录</p><ol><li>概述</li><li>登记要求</li><li>登记流程</li><li>设施标准</li><li>运营义务</li><li>常见问题</li></ol></div><h2>1. 概述</h2><p>销售伴侣动物的业务须依据<strong>《动物保护法》</strong>向辖区市长·郡守·区厅长登记为<strong>动物销售业者（동물판매업）</strong>。未登记营业可处2年以下有期徒刑或2000万韩元以下罚款。</p><h2>2. 登记要求</h2><ul><li>人员：须常时配置完成动物保护教育的人员</li><li>设施：笼具尺寸·清洁·温度·通风基准须满足</li><li>须管理动物健康及销售履历</li><li>无不良记录（无虐待动物前科）</li></ul><h2>3. 登记流程</h2><ol><li>确保经营场所并准备满足设施标准</li><li>在指定机构完成动物保护教育（3~6小时）</li><li>向辖区市·郡·区厅提交动物销售业登记申请</li><li>现场确认后领取登记证</li></ol><h2>4. 设施标准</h2><ul><li>按动物种类·体型规定最小饲养空间</li><li>可调控温湿度的环境</li><li>清洁的饮水·饲料提供设施</li><li>新进动物检疫隔离空间</li></ul><h2>5. 运营义务</h2><ul><li>销售动物时须提供健康确认书</li><li>禁止销售出生未满2个月的动物</li><li>须告知买家15日内死亡的赔偿规定</li><li>保存兽医定期健康检查记录</li></ul><div class="faq-section"><h2>常见问题</h2><div class="faq-item"><p class="faq-q">Q. 外国人可以在韩国登记动物销售业吗？</p><p class="faq-a">A. 可以。须持有允许就业的签证（F-2、F-4、F-5等），先完成企业登记后进行动物销售业登记。</p></div><div class="faq-item"><p class="faq-q">Q. 仅限网络销售也需要登记吗？</p><p class="faq-a">A. 需要。网络动物销售也属于动物销售业，须进行登记。</p></div><div class="faq-item"><p class="faq-q">Q. 爬行动物销售也需要登记吗？</p><p class="faq-a">A. 销售被分类为伴侣动物的动物均需登记。野生动物适用单独规定。</p></div></div><div class="cta-box"><h3>宠物店登记咨询</h3><p>Vision行政士事务所为动物销售业登记提供全程代理。初次咨询免费。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'pet-shop-animal-sales-registration-guide',
    locale: 'ja',
    title: '韓国ペットショップ・動物販売業者登録ガイド2026',
    metaTitle: '韓国動物販売業者登録2026 — 要件と手順',
    metaDescription: '韓国で動物販売業（동물판매업）を登録する方法。施設基準、研修要件、獣医義務、外国人の登録。行政書士による無料初回相談。',
    category: '動物・許認可',
    excerpt: '韓国動物販売業（동물판매업）登録ガイド — 施設要件、研修、獣医義務、外国人がペットショップを開業するための手順。',
    content: `<div class="toc"><p>目次</p><ol><li>概要</li><li>登録要件</li><li>登録手順</li><li>施設基準</li><li>運営義務</li><li>よくある質問</li></ol></div><h2>1. 概要</h2><p>伴侶動物を販売する事業者は<strong>動物保護法</strong>に基づき、管轄の市長・郡守・区庁長に<strong>動物販売業（동물판매업）の営業登録</strong>を行う必要があります。未登録で営業した場合、2年以下の懲役または2,000万ウォン以下の罰金が科せられます。</p><h2>2. 登録要件</h2><ul><li>人員：動物保護教育を修了した者を常時配置</li><li>施設：ケージのサイズ・清潔さ・温度・換気基準を満たすこと</li><li>動物の健康および販売記録の管理義務</li><li>欠格事由がないこと（動物虐待等の前歴がないこと）</li></ul><h2>3. 登録手順</h2><ol><li>営業場所を確保し、施設基準の準備</li><li>指定機関で動物保護教育を受講（3〜6時間）</li><li>管轄の市・郡・区役所に動物販売業登録を申請</li><li>現場確認後、登録証を受領</li></ol><h2>4. 施設基準</h2><ul><li>動物の種類・サイズに応じた最小飼育スペース</li><li>温湿度を調節できる環境</li><li>清潔な飲料水・飼料の提供設備</li><li>新規入荷動物の検疫用隔離スペースの確保</li></ul><h2>5. 運営義務</h2><ul><li>動物販売時に健康確認書の提供義務</li><li>生後2ヶ月未満の動物の販売禁止</li><li>購入者に対し15日以内の死亡時の補償規定を告知</li><li>獣医による定期健康診断記録の保持</li></ul><div class="faq-section"><h2>よくある質問</h2><div class="faq-item"><p class="faq-q">Q. 外国人も動物販売業を登録できますか？</p><p class="faq-a">A. 可能です。就労可能な在留資格（F-2、F-4、F-5等）が必要で、まず事業者登録を行った後、動物販売業の登録を進めます。</p></div><div class="faq-item"><p class="faq-q">Q. オンラインのみの販売でも登録が必要ですか？</p><p class="faq-a">A. はい。オンラインでの動物販売も動物販売業に該当するため、登録が必要です。</p></div><div class="faq-item"><p class="faq-q">Q. 爬虫類の販売も登録対象ですか？</p><p class="faq-a">A. 伴侶動物として分類された動物を販売する場合はすべて対象です。野生動物には別途の規定が適用されます。</p></div></div><div class="cta-box"><h3>ペットショップ登録のご相談</h3><p>ビジョン行政書士事務所が動物販売業の登録を最初から最後まで代行します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },
  // ── BLOG 49: cosmetics-import-sales-registration-guide ──────────────────────
  {
    slug: 'cosmetics-import-sales-registration-guide',
    locale: 'en',
    title: 'How to Register a Cosmetics Importer/Distributor in Korea — 2026 Guide',
    metaTitle: 'Korea Cosmetics Import Sales Registration 2026 — Complete Guide',
    metaDescription: 'Step-by-step guide to registering as a cosmetics responsible vendor (책임판매업) in Korea for foreign brands. Requirements, documents, and MFDS procedure explained. Free consultation.',
    category: 'Cosmetics',
    excerpt: 'Everything foreign cosmetics brands need to know about importing and selling in Korea — registration requirements, a responsible manager, and labeling compliance.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is Cosmetics Responsible Vendor Registration?</li><li>Who Must Register?</li><li>Registration Requirements</li><li>Required Documents</li><li>Registration Procedure</li><li>Post-Registration Compliance</li><li>Korean Labeling Requirements</li><li>FAQ</li></ol></div>
<h2>1. What Is Cosmetics Responsible Vendor Registration?</h2>
<p>Any company importing foreign cosmetics for sale in Korea must register as a <strong>cosmetics responsible vendor (화장품책임판매업)</strong> with the Ministry of Food and Drug Safety (MFDS) under <strong>Article 3 of the Cosmetics Act</strong>. Operating without registration carries penalties of up to 1 year imprisonment or KRW 10 million in fines.</p>
<div class="highlight-box"><strong>Key Distinction</strong><br/>Cosmetics manufacturer = owns a domestic production facility (manufacturing license required)<br/>Cosmetics responsible vendor = imports and distributes foreign brands (no manufacturing facility needed)</div>
<h2>2. Who Must Register?</h2>
<ul><li>Companies importing and selling foreign cosmetics brands in Korea</li><li>Companies selling Korea-manufactured products under their own brand via OEM overseas</li><li>Platforms selling customized cosmetics</li></ul>
<h2>3. Registration Requirements</h2>
<ul><li><strong>Responsible Manager:</strong> Graduated from cosmetics, pharmacy, or related fields, or 1+ year of relevant experience</li><li><strong>Business premises:</strong> Office or warehouse (no manufacturing facility required)</li><li><strong>Quality management:</strong> Comply with MFDS safety standards</li></ul>
<h2>4. Required Documents</h2>
<ul><li>Cosmetics responsible vendor registration application</li><li>Responsible manager credential (degree certificate or experience letter)</li><li>Business registration certificate copy</li><li>Office lease or building registry extract</li><li>Corporate registry extract (for corporations)</li></ul>
<h2>5. Registration Procedure</h2>
<ol><li>Appoint a responsible manager (confirm credentials)</li><li>Complete business registration</li><li>Apply online via MFDS Pharmaceutical Safety Gate (nedrug.mfds.go.kr)</li><li>Receive registration certificate after document review (approx. 7–14 business days)</li><li>File individual import notification per product</li></ol>
<h2>6. Post-Registration Compliance</h2>
<ul><li>Maintain safety data for each imported product</li><li>Report serious adverse events to MFDS</li><li>Keep import and sales records for 3 years</li><li>Renew responsible manager appointment if personnel changes</li></ul>
<h2>7. Korean Labeling Requirements</h2>
<p>All imported cosmetics must display the following in Korean on the container or packaging:</p>
<ul><li>Product name and responsible vendor name/address</li><li>Country of manufacture and manufacturer name</li><li>Full ingredient list (MFDS-designated INCI names)</li><li>Expiry date or period after opening</li><li>Net content and price</li><li>Precautions for use</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Is the responsible manager required to be a full-time employee?</p><p class="faq-a">A. The business owner may serve as responsible manager if they meet the credentials. For small businesses, employing a qualified staff member is advisable due to continuous duty requirements.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can foreigners register as cosmetics responsible vendors?</p><p class="faq-a">A. Yes. Foreigners with a visa that permits business activities (F-5, F-4, D-8, etc.) may register under the same conditions as Korean nationals.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does a distribution-only exclusive agreement allow immediate sales?</p><p class="faq-a">A. No. The cosmetics responsible vendor registration must be completed regardless of any exclusive distribution contract. Selling without registration is penalized.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is small-scale personal import subject to registration?</p><p class="faq-a">A. No. Personal-use small imports are exempt. Registration is only required when products are imported for commercial sale.</p></div>
</div>
<div class="cta-box"><h3>Need Help with Cosmetics Vendor Registration?</h3><p>Vision Administrative Office handles the entire process from document preparation to MFDS registration. Initial consultation is free.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'cosmetics-import-sales-registration-guide',
    locale: 'zh',
    title: '韩国化妆品责任销售业注册完全指南2026 — 海外品牌韩国进口流程',
    metaTitle: '韩国化妆品责任销售业注册方法2026 — 进口化妆品韩国销售必备',
    metaDescription: '韩国化妆品责任销售业（책임판매업）注册要求、所需材料、食药处申请流程详解。专业行政士代理，免费初次咨询。',
    category: '化妆品',
    excerpt: '海外化妆品品牌进入韩国市场必须了解的化妆品责任销售业注册要求、所需材料及申请流程完全指南。',
    content: `<div class="toc"><p>目录</p><ol><li>化妆品责任销售业概述</li><li>注册义务对象</li><li>注册要求</li><li>所需材料</li><li>注册申请流程</li><li>注册后合规义务</li><li>进口化妆品标签要求</li><li>常见问题</li></ol></div>
<h2>1. 化妆品责任销售业概述</h2>
<p>在韩国进口并销售海外化妆品品牌的企业，须依据<strong>《化妆品法》第3条</strong>向食品医药品安全处（食药处）办理<strong>化妆品责任销售业登记</strong>。未经登记销售将被处以1年以下有期徒刑或1千万韩元以下罚款。</p>
<div class="highlight-box"><strong>核心区别</strong><br/>化妆品制造业 = 拥有国内生产设施（需制造许可）<br/>化妆品责任销售业 = 进口并在国内销售（无需生产设施）</div>
<h2>2. 注册义务对象</h2>
<ul><li>在韩国进口销售海外化妆品品牌的企业</li><li>以自有品牌委托海外OEM生产后在韩国销售的企业</li><li>销售定制化妆品的平台</li></ul>
<h2>3. 注册要求</h2>
<ul><li><strong>责任销售管理员：</strong>化妆品学、药学等相关学科毕业，或1年以上相关工作经验者</li><li><strong>业务场所：</strong>办公室或仓库（无需生产设施）</li><li><strong>质量管理：</strong>遵守食药处安全标准</li></ul>
<h2>4. 所需材料</h2>
<ul><li>化妆品责任销售业登记申请书</li><li>责任销售管理员资质证明（学位证或经历证明）</li><li>营业执照副本</li><li>事务所租赁合同或建筑物登记簿摘本</li><li>法人登记簿摘本（法人适用）</li></ul>
<h2>5. 注册申请流程</h2>
<ol><li>确认并选定责任销售管理员</li><li>完成营业执照注册</li><li>通过食药处医药品安全门户网站（nedrug.mfds.go.kr）在线申请</li><li>材料审核后领取登记证（约7~14个工作日）</li><li>按产品分别进行进口申报</li></ol>
<h2>6. 进口化妆品标签要求</h2>
<p>所有进口化妆品须在容器或包装上以韩文标注以下内容：</p>
<ul><li>产品名称及责任销售业者名称/地址</li><li>制造国及制造商名称</li><li>全成分表（使用食药处规定的INCI名称）</li><li>有效期或开封后使用期限</li><li>净含量及价格</li><li>注意事项</li></ul>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 外国人可以办理化妆品责任销售业登记吗？</p><p class="faq-a">A. 可以。持有允许经营活动签证（F-5、F-4、D-8等）的外国人可与韩国人同等条件办理登记。</p></div>
<div class="faq-item"><p class="faq-q">Q. 仅拥有独家分销合同是否可以直接开始销售？</p><p class="faq-a">A. 不可以。化妆品责任销售业登记必须单独完成，与任何分销合同无关。未经登记销售将被处罚。</p></div>
<div class="faq-item"><p class="faq-q">Q. 责任销售管理员必须是专职员工吗？</p><p class="faq-a">A. 若经营者本人满足资质要求，可自任管理员。但因常驻要求，建议中小企业招聘具备相关资质的专职员工担任。</p></div>
</div>
<div class="cta-box"><h3>需要化妆品责任销售业注册代理服务？</h3><p>Vision行政士事务所提供从材料准备到食药处登记的一站式代理服务。初次咨询免费。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'cosmetics-import-sales-registration-guide',
    locale: 'ja',
    title: '韓国化粧品責任販売業登録完全ガイド2026 — 海外ブランドの韓国輸入手続き',
    metaTitle: '韓国化粧品責任販売業登録方法2026 — 輸入化粧品韓国販売の必須手続き',
    metaDescription: '韓国での化粧品責任販売業（책임판매업）登録要件・必要書類・食品医薬品安全処への申請手順を詳解。行政書士による無料初回相談。',
    category: '化粧品',
    excerpt: '海外化粧品ブランドを韓国で輸入・販売するために必要な化粧品責任販売業登録の要件、書類、手続きの完全ガイド。',
    content: `<div class="toc"><p>目次</p><ol><li>化粧品責任販売業とは？</li><li>登録義務対象</li><li>登録要件</li><li>必要書類</li><li>登録申請手順</li><li>輸入化粧品の表示要件</li><li>よくある質問</li></ol></div>
<h2>1. 化粧品責任販売業とは？</h2>
<p>韓国で海外化粧品を輸入・販売するには、<strong>化粧品法第3条</strong>に基づき食品医薬品安全処（食薬処）に<strong>化粧品責任販売業登録</strong>を行う必要があります。未登録での輸入・販売は1年以下の懲役または1,000万ウォン以下の罰金の対象となります。</p>
<div class="highlight-box"><strong>重要な区分</strong><br/>化粧品製造業 = 国内に製造施設を保有（製造許可が必要）<br/>化粧品責任販売業 = 海外ブランドを輸入・流通（製造施設不要）</div>
<h2>2. 登録義務対象</h2>
<ul><li>海外化粧品ブランドを韓国に輸入・販売する企業</li><li>自社ブランドで海外OEM製品を韓国で販売する企業</li><li>カスタマイズ化粧品を販売するプラットフォーム</li></ul>
<h2>3. 登録要件</h2>
<ul><li><strong>責任販売管理者：</strong>化粧品学・薬学等関連分野の卒業者または1年以上の実務経験者</li><li><strong>事業場の確保：</strong>事務所または倉庫（製造施設不要）</li><li><strong>品質管理：</strong>食薬処安全基準への準拠</li></ul>
<h2>4. 必要書類</h2>
<ul><li>化粧品責任販売業登録申請書</li><li>責任販売管理者の資格証明（学位証または経歴証明書）</li><li>事業者登録証写し</li><li>事業場の賃貸借契約書または建物登記簿謄本</li><li>法人登記簿謄本（法人の場合）</li></ul>
<h2>5. 登録申請手順</h2>
<ol><li>責任販売管理者の選任・資格確認</li><li>事業者登録完了</li><li>食薬処医薬品安全ゲート（nedrug.mfds.go.kr）でオンライン申請</li><li>書類審査後に登録証受領（約7〜14営業日）</li><li>製品ごとの輸入申告</li></ol>
<h2>6. 輸入化粧品の表示要件</h2>
<p>輸入化粧品の容器・包装には韓国語で以下を表示する義務があります：</p>
<ul><li>製品名と責任販売業者の名称・住所</li><li>製造国と製造業者名</li><li>全成分表示（食薬処規定のINCIネーム使用）</li><li>使用期限または開封後使用期間</li><li>内容量・価格</li><li>使用上の注意事項</li></ul>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 外国人でも化粧品責任販売業に登録できますか？</p><p class="faq-a">A. 可能です。就業可能な在留資格（F-5、F-4、D-8等）をお持ちの外国人は韓国人と同じ条件で登録できます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 独占販売契約があれば登録なしで販売できますか？</p><p class="faq-a">A. できません。どのような契約があっても、化粧品責任販売業登録は別途必要です。未登録販売は処罰対象です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 責任販売管理者は専任でなければなりませんか？</p><p class="faq-a">A. 資格を満たす経営者自身が管理者を兼務することは可能です。ただし常勤義務があるため、小規模事業者は資格を持つ専任スタッフの採用を推奨します。</p></div>
</div>
<div class="cta-box"><h3>化粧品責任販売業登録でお困りですか？</h3><p>ビジョン行政書士事務所が書類準備から食薬処への登録まで一括代行します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },
  // ── BLOG 50: location-based-service-domestic-registration-guide ───────────
  {
    slug: 'location-based-service-domestic-registration-guide',
    locale: 'en',
    title: 'Location-Based Service Business Notification in Korea — 2026 Guide',
    metaTitle: 'Korea Location-Based Service Business Notification 2026 — LBS Registration',
    metaDescription: 'Guide to notifying the Korea Communications Commission (KCC) for location-based service businesses. Delivery, navigation, and real estate apps must notify before launch. Free consultation.',
    category: 'IT/Telecom',
    excerpt: 'Navigation apps, delivery platforms, and real estate apps using location data in Korea must notify the Korea Communications Commission (KCC) before service launch.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Overview</li><li>Who Must Notify?</li><li>Notification Exemptions</li><li>Required Documents</li><li>Notification Procedure</li><li>Post-Notification Obligations</li><li>FAQ</li></ol></div>
<h2>1. Overview</h2>
<p>Under <strong>Article 9 of the Act on the Protection and Use of Location Information</strong>, companies providing location-based services (LBS) using the real-time location of mobile devices or persons must file a <strong>business notification</strong> with the Korea Communications Commission (KCC) before launching. Operating without notification carries fines of up to KRW 30 million.</p>
<div class="highlight-box"><strong>LBS Business vs. Location Information Business</strong><br/>LBS Business = uses location data to provide a service (apps, platforms): KCC notification<br/>Location Information Business = collects and provides location data itself (GPS solutions): KCC license</div>
<h2>2. Who Must Notify?</h2>
<ul><li><strong>Delivery/rider apps:</strong> Real-time driver/vehicle location display</li><li><strong>Navigation and map services:</strong> Real-time traffic and routing</li><li><strong>Real estate platforms:</strong> Location-based nearby listing search</li><li><strong>Parking/charging apps:</strong> Nearby facility locator</li><li><strong>Emergency alert services:</strong> Location-based safety features</li><li><strong>Pet/senior tracking:</strong> Guardian location sharing</li></ul>
<h2>3. Notification Exemptions</h2>
<ul><li>Apps that embed maps without collecting location data</li><li>Delivery services where users manually enter an address (no real-time GPS collection)</li><li>Government/public institution operated services</li></ul>
<h2>4. Required Documents</h2>
<ul><li>LBS business notification form</li><li>Corporate registry extract or business registration certificate</li><li>Service description (data collection method, purpose, retention period)</li><li>Personal location information protection policy</li><li>Personal location data protection plan</li></ul>
<h2>5. Notification Procedure</h2>
<ol><li>Draft a service overview (what location data is collected, for what purpose, how long retained)</li><li>Establish a personal location data protection plan</li><li>File notification via the KCC online portal</li><li>Receive notification confirmation after document review (approx. 7–14 business days)</li><li>Launch service</li></ol>
<h2>6. Post-Notification Obligations</h2>
<ul><li>Obtain consent before collecting location data in each service session</li><li>No use beyond the consented purpose</li><li>Destroy location data after the retention period</li><li>Encrypt and control access to location data</li><li>Report data breaches to KCC and the Personal Information Protection Commission</li></ul>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can we notify after launching the app?</p><p class="faq-a">A. No. Notification must be completed before service launch. Operating without prior notification is subject to fines from the date of launch until notification is accepted.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do foreign companies serving Korean users need to notify?</p><p class="faq-a">A. Yes. Foreign companies providing location-based services to Korean users are subject to the same notification requirement.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is there a notification fee?</p><p class="faq-a">A. No government fee. However, drafting the service description and protection plan often requires professional assistance.</p></div>
</div>
<div class="cta-box"><h3>Need Help with LBS Business Notification?</h3><p>Vision Administrative Office handles documentation and KCC submission for location-based service notifications. Initial consultation is free.</p><a href="/en/contact">Request Free Consultation</a></div>`,
  },
  {
    slug: 'location-based-service-domestic-registration-guide',
    locale: 'zh',
    title: '韩国位置基础服务事业申报完全指南2026 — 导航·外卖·房产APP必读',
    metaTitle: '韩国位置基础服务事业申报方法2026 — LBS企业合规指南',
    metaDescription: '在韩国提供位置基础服务（LBS）的企业须在服务上线前向放送通信委员会申报。导航、外卖、房产平台必备合规手续。行政士专业代理，免费初次咨询。',
    category: 'IT/通信',
    excerpt: '在韩国使用位置数据的导航、外卖、房产平台等企业，须在上线前向放送通信委员会完成位置基础服务事业申报。',
    content: `<div class="toc"><p>目录</p><ol><li>申报概述</li><li>申报义务对象</li><li>免除申报的情形</li><li>所需材料</li><li>申报流程</li><li>申报后合规义务</li><li>常见问题</li></ol></div>
<h2>1. 申报概述</h2>
<p>根据<strong>《位置信息的保护及利用等相关法律》第9条</strong>，利用移动终端或人员的实时位置信息提供服务的企业，须在服务上线前向放送通信委员会（方通委）完成<strong>位置基础服务事业申报</strong>。未申报营业将被处以3千万韩元以下罚款。</p>
<h2>2. 申报义务对象</h2>
<ul><li><strong>外卖/骑手APP：</strong>实时显示骑手/车辆位置</li><li><strong>导航和地图服务：</strong>实时交通和路线信息</li><li><strong>房产平台：</strong>基于用户当前位置搜索附近房源</li><li><strong>停车/充电站APP：</strong>显示附近设施位置</li><li><strong>紧急安全服务：</strong>基于位置的安全预警</li></ul>
<h2>3. 所需材料</h2>
<ul><li>位置基础服务事业申报书</li><li>法人登记簿摘本或营业执照副本</li><li>服务说明书（位置数据收集方式、目的、保存期限）</li><li>个人位置信息保护方针</li><li>个人位置数据保护措施计划书</li></ul>
<h2>4. 申报流程</h2>
<ol><li>撰写服务说明书（明确位置数据收集内容、目的、保存期限）</li><li>制定个人位置数据保护措施计划</li><li>通过方通委在线门户网站提交申报</li><li>材料审核后收到申报受理通知（约7~14个工作日）</li><li>正式上线运营</li></ol>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 可以APP上线后再申报吗？</p><p class="faq-a">A. 不可以。申报必须在服务上线前完成。上线后申报将从上线之日起被视为未申报营业，面临罚款风险。</p></div>
<div class="faq-item"><p class="faq-q">Q. 向韩国用户提供服务的外国企业也需要申报吗？</p><p class="faq-a">A. 是的。向韩国用户提供位置基础服务的外国企业同样适用申报义务。</p></div>
<div class="faq-item"><p class="faq-q">Q. 申报有费用吗？</p><p class="faq-a">A. 无政府申报费。但服务说明书和保护措施计划书的撰写通常需要专业人士协助。</p></div>
</div>
<div class="cta-box"><h3>需要位置基础服务申报代理？</h3><p>Vision行政士事务所提供从材料准备到方通委申报的一站式代理服务。初次咨询免费。</p><a href="/zh/contact">申请免费咨询</a></div>`,
  },
  {
    slug: 'location-based-service-domestic-registration-guide',
    locale: 'ja',
    title: '韓国位置情報サービス事業届出ガイド2026 — ナビ・配達・不動産アプリ必読',
    metaTitle: '韓国位置情報サービス事業届出2026 — LBS事業開始前の必須手続き',
    metaDescription: '韓国で位置情報サービス（LBS）を提供するには放送通信委員会への届出が必要。配達アプリ・ナビ・不動産プラットフォームの事前届出手順を解説。無料初回相談。',
    category: 'IT・通信',
    excerpt: '韓国でナビ・配達・不動産アプリなど位置情報を活用するサービスを提供する企業は、サービス開始前に放送通信委員会（放通委）へ届出が必要です。',
    content: `<div class="toc"><p>目次</p><ol><li>届出概要</li><li>届出義務対象</li><li>届出免除ケース</li><li>必要書類</li><li>届出手順</li><li>届出後の義務</li><li>よくある質問</li></ol></div>
<h2>1. 届出概要</h2>
<p><strong>位置情報の保護及び利用等に関する法律第9条</strong>に基づき、移動端末や人の位置情報を利用してサービスを提供する企業は、サービス開始前に放送通信委員会（放通委）へ<strong>位置情報サービス事業の届出</strong>を行う必要があります。届出なしの営業は3,000万ウォン以下の過料の対象です。</p>
<h2>2. 届出義務対象</h2>
<ul><li><strong>配達・ライダーアプリ：</strong>リアルタイムのドライバー・車両位置表示</li><li><strong>ナビ・地図サービス：</strong>リアルタイム交通・経路情報</li><li><strong>不動産プラットフォーム：</strong>現在地ベースの近隣物件検索</li><li><strong>駐車場・充電スタンドアプリ：</strong>近隣施設位置案内</li><li><strong>緊急安全サービス：</strong>位置情報ベースの安全警報</li></ul>
<h2>3. 必要書類</h2>
<ul><li>位置情報サービス事業届出書</li><li>法人登記簿謄本または事業者登録証写し</li><li>サービス説明書（位置データ収集方法・目的・保存期間）</li><li>個人位置情報保護方針</li><li>個人位置情報保護措置計画書</li></ul>
<h2>4. 届出手順</h2>
<ol><li>サービス概要書の作成（収集する位置データ・目的・保存期間を明記）</li><li>個人位置情報保護措置計画の策定</li><li>放通委オンラインポータルで届出</li><li>書類確認後に届出受理通知（約7〜14営業日）</li><li>サービス開始</li></ol>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. アプリリリース後に届出することはできますか？</p><p class="faq-a">A. できません。届出はサービス開始前に完了させる必要があります。リリース後の届出は、開始日から届出受理まで無届け営業として過料の対象となりえます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 韓国ユーザーにサービスを提供する外国企業も届出が必要ですか？</p><p class="faq-a">A. はい。韓国ユーザーに位置情報サービスを提供する外国企業にも同様の届出義務があります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 届出に費用はかかりますか？</p><p class="faq-a">A. 政府への届出費用はありません。ただし、サービス説明書と保護措置計画書の作成には専門家の支援が必要な場合が多いです。</p></div>
</div>
<div class="cta-box"><h3>位置情報サービス届出でお困りですか？</h3><p>ビジョン行政書士事務所が書類作成から放通委への届出まで一括代行します。初回相談無料です。</p><a href="/ja/contact">無料相談を申し込む</a></div>`,
  },

  // ── BLOG 116: mainbiz-certification-requirements-process ────────────────────
  {
    slug: 'mainbiz-certification-requirements-process',
    locale: 'en',
    title: 'Mainbiz Certification in Korea — Requirements, Evaluation & Application Process',
    metaTitle: 'Mainbiz Certification Korea — Requirements and Application Guide 2026',
    metaDescription: 'Complete guide to Mainbiz (Management Innovation SME) certification in Korea. Eligibility, 1,000-point evaluation system, step-by-step process, and benefits including tax audit deferral and interest rate reductions. Free consultation.',
    category: 'Business Certification',
    excerpt: 'Mainbiz (Main-Biz) is a Korean government certification for SMEs demonstrating superior management innovation. Learn eligibility criteria, the 1,000-point evaluation system, required documents, and preferential benefits.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What Is Mainbiz Certification?</li><li>Eligibility Requirements</li><li>Evaluation Criteria and Scoring</li><li>Step-by-Step Application Process</li><li>Required Documents</li><li>Benefits After Certification</li><li>Common Pitfalls and How to Avoid Them</li><li>FAQ</li></ol></div>

<h2>1. What Is Mainbiz Certification?</h2>
<p>Mainbiz (Main-Biz) stands for <strong>MAnagement INnovation Business</strong> — a government certification program administered by the Ministry of SMEs and Startups (중소벤처기업부) that recognizes small and medium-sized enterprises with outstanding management innovation capabilities. The program is based on the OECD Oslo Manual definition of management innovation and covers strategic, organizational, and marketing innovation — making it distinct from technology-focused Innobiz certification.</p>
<p>Target companies are those currently conducting management innovation activities or those that have done so within the past three years and are achieving measurable results. The certificate is valid for three years and is renewable.</p>
<div class="highlight-box"><strong>[Management Innovation SME (Main-Biz) Operating Regulations — MOTSS Notice No. 2023-90]</strong> Mainbiz certification targets SMEs under the SME Basic Act that are currently engaged in management innovation activities or have conducted such activities within the past three years and achieved innovation results.</div>

<h2>2. Eligibility Requirements</h2>
<p>Applicants must be SMEs under the SME Basic Act (중소기업기본법) with at least 3 years of business history. The following conditions disqualify a company from applying:</p>
<table>
<thead><tr><th>Category</th><th>Disqualifying Condition</th></tr></thead>
<tbody>
<tr><td>Credit Status</td><td>Companies listed in credit information databases due to default or tax delinquency</td></tr>
<tr><td>Bill Clearance</td><td>Companies that received a transaction suspension from a bill exchange</td></tr>
<tr><td>Insolvency</td><td>Companies undergoing bankruptcy, rehabilitation, or liquidation proceedings</td></tr>
<tr><td>Financial Ratio</td><td>Debt-to-equity ratio exceeding 1,000% as of the end of the prior fiscal year</td></tr>
<tr><td>Capital Impairment</td><td>Complete capital impairment (완전 자본잠식)</td></tr>
<tr><td>Industry Exclusion</td><td>Gambling equipment manufacturing, tobacco wholesale, certain entertainment industries</td></tr>
</tbody>
</table>

<h2>3. Evaluation Criteria and Scoring</h2>
<p>Mainbiz uses a 1,000-point evaluation system. A company must score 600+ points on the online self-assessment to proceed to the on-site evaluation, and must score 700+ points during the on-site evaluation to receive certification.</p>
<table>
<thead><tr><th>Category</th><th>Points</th><th>Key Items</th></tr></thead>
<tbody>
<tr><td>Management Innovation Infrastructure</td><td>350</td><td>Leadership, innovation strategy, resource management, performance management</td></tr>
<tr><td>Innovation Activities</td><td>400</td><td>Organizational, product/service, process, and marketing innovation</td></tr>
<tr><td>Innovation Outcomes</td><td>250</td><td>Financial performance, non-financial performance (customer satisfaction, ESG)</td></tr>
</tbody>
</table>
<p>As of June 22, 2026, the Ministry revised the evaluation indicators to reflect ESG-related trust activities. Companies applying under the new framework should prepare ESG-related documentation in advance.</p>

<h2>4. Step-by-Step Application Process</h2>
<table>
<thead><tr><th>Step</th><th>Action</th><th>Timeline</th></tr></thead>
<tbody>
<tr><td>1. Registration</td><td>Enter company, factory, and financial data on mainbiz.go.kr</td><td>1–2 days</td></tr>
<tr><td>2. Online Self-Assessment</td><td>Score 600+ points to qualify for on-site evaluation</td><td>1–3 days</td></tr>
<tr><td>3. Apply for On-site Evaluation</td><td>Pay fee: KRW 550,000 (new) / KRW 440,000 (renewal), VAT included</td><td>Upon application</td></tr>
<tr><td>4. On-site Evaluation</td><td>Evaluator visits company; 700+ points required; completed within 3 weeks</td><td>Up to 3 weeks</td></tr>
<tr><td>5. Regional Office Approval</td><td>Ministry regional SME office reviews and approves; KakaoTalk/SMS notification</td><td>1–2 weeks</td></tr>
<tr><td>6. Certificate Issuance</td><td>Online issuance; valid 3 years</td><td>Immediately</td></tr>
</tbody>
</table>
<p>Total processing time from document submission is approximately <strong>5–8 weeks</strong>. If the self-assessment score falls below 600, on-site evaluation cannot be requested — so pre-assessment preparation per evaluation category is essential.</p>

<div class="cta-block">
  <h3>Get Expert Consultation</h3>
  <p>Vision Administrative Office guides you from pre-assessment diagnosis to certificate issuance for Mainbiz certification.</p>
  <a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=mainbiz-certification">Get Expert Consultation</a>
</div>

<h2>5. Required Documents</h2>
<ul>
<li>Business registration certificate copy</li>
<li>Corporate registry extract (for legal entities)</li>
<li>Financial statements for the past 2 fiscal years (audit report or tax adjustment statement)</li>
<li>Management innovation activity evidence (new product/service development materials, process improvement reports)</li>
<li>Organizational chart and HR-related materials</li>
<li>Marketing innovation materials (online channels, brand strategy)</li>
<li>ESG activity documentation (environmental, social, governance improvement records)</li>
</ul>

<h2>6. Benefits After Certification</h2>
<table>
<thead><tr><th>Area</th><th>Benefit</th></tr></thead>
<tbody>
<tr><td>Finance</td><td>Interest rate reduction up to 1.65%p on corporate loans; guarantee fee reduction 0.1–0.2%p; loan limit expansion up to KRW 7 billion</td></tr>
<tr><td>Tax</td><td>Regular tax audit deferral by 2–3 years</td></tr>
<tr><td>Customs</td><td>Customs inspection waiver for companies with imports under USD 100 million</td></tr>
<tr><td>Human Resources</td><td>Public research institute staff dispatch up to 3 years with 50% salary support</td></tr>
<tr><td>R&D</td><td>1–2 preferential points in technology development and industry-academic collaboration grants</td></tr>
<tr><td>Trade/Export</td><td>70% discount on TV/radio advertising; priority access to export incubators</td></tr>
<tr><td>Other</td><td>33% discount on technology escrow fees; 70% government support for tech dispute legal fees</td></tr>
</tbody>
</table>

<h2>7. Common Pitfalls and How to Avoid Them</h2>
<p>The most common reasons for Mainbiz failure are <strong>insufficient self-assessment scores</strong> and <strong>lack of documented innovation evidence</strong>. Key points to note:</p>
<ul>
<li>Self-assessment below 600 blocks on-site evaluation entirely — run a mock assessment and address weak areas first</li>
<li>Innovation activities without documentation are not reflected in scores</li>
<li>Missing prior-year financial statements or debt-to-equity exceeding 1,000% results in automatic disqualification</li>
<li>Post-June 2026 applications require ESG activity documentation under the revised criteria</li>
<li>Renewal applications must be submitted within 90 days before the certificate expires</li>
</ul>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a company with less than 3 years of business history apply?</p><p class="faq-a">A. No. Only SMEs with at least 3 years of operation are eligible. Startups should consider Venture certification first.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can Mainbiz and Innobiz certification be held simultaneously?</p><p class="faq-a">A. Yes. The two certifications are independent and dual certification is permitted. Companies often pursue both to maximize preferential benefits.</p></div>
<div class="faq-item"><p class="faq-q">Q. Are there costs beyond the on-site evaluation fee?</p><p class="faq-a">A. Fees vary by case. We provide accurate quotes during free consultation.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if the company exceeds SME thresholds during the certification period?</p><p class="faq-a">A. The certification becomes void if the company no longer qualifies as an SME. Notify the managing institution immediately upon any change in company scale.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can a company reapply after scoring below 600 on the self-assessment?</p><p class="faq-a">A. Yes. There is no limit on reapplication attempts. Address weak evaluation areas and resubmit the self-assessment.</p></div>
</div>

<div class="cta-block">
  <h3>Get Expert Consultation</h3>
  <p>From pre-assessment to certificate issuance, Vision Administrative Office is with you every step of the way.</p>
  <a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=mainbiz-certification">Get Expert Consultation</a>
</div>

<p class="author-block">Vision Administrative Office (Head Administrative Scrivener: Lee Won-jung) · Based on Management Innovation SME (Main-Biz) Operating Regulations (MOTSS Notice No. 2023-90) · Last reviewed: Jul 7, 2026</p>`,
  },
  {
    slug: 'mainbiz-certification-requirements-process',
    locale: 'zh',
    title: '韩国Main-Biz认证指南 — 申请条件·评估标准·办理流程详解',
    metaTitle: '韩国Main-Biz经营创新型中小企业认证2026 — 条件与流程',
    metaDescription: '韩国Main-Biz认证申请条件、1000分评估体系、所需材料及优惠政策全解析。有效期3年，享受利率优惠、税务检查延期等政策红利。免费咨询。',
    category: '企业认证',
    excerpt: 'Main-Biz（经营创新型中小企业）是韩国中小风险企业部颁发的政府认证，面向经营创新能力突出的中小企业。本文详解申请资格、1000分评估体系及优惠政策。',
    content: `<div class="toc"><p>目录</p><ol><li>Main-Biz认证概述</li><li>申请资格条件</li><li>评估标准与分值体系</li><li>申请流程分步说明</li><li>所需材料清单</li><li>认证后优惠政策</li><li>注意事项与常见失误</li><li>常见问题（FAQ）</li></ol></div>

<h2>1. Main-Biz认证概述</h2>
<p>Main-Biz（경영혁신형 중소기업）是韩国中小风险企业部（중소벤처기업부）运营的政府认证制度，全称"MAnagement INnovation Business"，以OECD奥斯陆手册（Oslo Manual）的经营创新定义为基础，<strong>专门认定经营创新能力优秀的中小企业</strong>。与以技术能力为核心的Innobiz认证不同，Main-Biz着重评估战略规划、组织管理、营销创新等经营全局的革新能力。</p>
<p>认证有效期为3年，到期前可申请续期。目前正在开展经营创新活动或近3年内有创新成果的中小企业均可申请。</p>
<div class="highlight-box"><strong>[경영혁신형 중소기업(Main-Biz) 제도 운영규정 — 中小风险企业部告示第2023-90号]</strong> Main-Biz认证面向依据《中小企业基本法》第2条认定的中小企业，要求企业正在开展或近3年内已开展经营创新活动并取得成果。</div>

<h2>2. 申请资格条件</h2>
<p>申请企业须为《中小企业基本法》第2条规定的中小企业，且业龄满3年以上。以下情形将丧失申请资格：</p>
<table>
<thead><tr><th>类别</th><th>不符合条件</th></tr></thead>
<tbody>
<tr><td>信用状况</td><td>因违约、欠税等被列入信用信息数据库的企业</td></tr>
<tr><td>票据交易</td><td>受到票据交换所交易停止处分的企业</td></tr>
<tr><td>破产程序</td><td>正在进行破产、回生、清算等程序的企业</td></tr>
<tr><td>财务要求</td><td>上一财年末负债比率超过1,000%的企业</td></tr>
<tr><td>资本状况</td><td>完全资本侵蚀（완전 자본잠식）的企业</td></tr>
<tr><td>排除行业</td><td>博彩设备制造、烟草批发、部分娱乐行业等</td></tr>
</tbody>
</table>

<h2>3. 评估标准与分值体系</h2>
<p>Main-Biz采用1,000分满分评估体系。网络自我诊断须达600分以上方可申请现场评估，现场评估须达700分以上方可获得认证。</p>
<table>
<thead><tr><th>评估领域</th><th>分值</th><th>主要评估项目</th></tr></thead>
<tbody>
<tr><td>经营创新基础</td><td>350分</td><td>领导力、创新战略、资源管理、绩效管理</td></tr>
<tr><td>创新活动</td><td>400分</td><td>组织创新、产品/服务创新、流程创新、营销创新</td></tr>
<tr><td>创新成果</td><td>250分</td><td>财务绩效、非财务绩效（客户满意度、ESG等）</td></tr>
</tbody>
</table>
<p>自2026年6月22日起，评估指标已修订，ESG相关诚信活动项目纳入评估范围。新申请企业应提前准备ESG相关佐证材料。</p>

<h2>4. 申请流程分步说明</h2>
<table>
<thead><tr><th>步骤</th><th>内容</th><th>所需时间</th></tr></thead>
<tbody>
<tr><td>1. 企业注册</td><td>在mainbiz.go.kr系统录入企业、工厂及财务信息</td><td>1～2天</td></tr>
<tr><td>2. 网络自我诊断</td><td>获得600分以上，取得现场评估申请资格</td><td>1～3天</td></tr>
<tr><td>3. 申请现场评估</td><td>缴纳费用：新申请55万韩元 / 续期44万韩元（含增值税）</td><td>受理后分配</td></tr>
<tr><td>4. 现场评估</td><td>评估委员到访企业，须达700分以上，3周内完成</td><td>最多3周</td></tr>
<tr><td>5. 地方厅审批</td><td>中小风险企业部地方厅审核批准，Kakao/短信通知</td><td>1～2周</td></tr>
<tr><td>6. 认证书发放</td><td>网络颁发，有效期3年</td><td>即时</td></tr>
</tbody>
</table>
<p>自材料完备起，整体流程约需<strong>5～8周</strong>。自我诊断未达600分则无法申请现场评估，建议提前按评估项目逐一整理佐证材料。</p>

<div class="cta-block">
  <h3>申请专家咨询</h3>
  <p>VISION行政士事务所为您提供从认证前诊断到证书发放的全程专业支持。</p>
  <a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=mainbiz-certification">申请专家咨询</a>
</div>

<h2>5. 所需材料清单</h2>
<ul>
<li>营业执照副本</li>
<li>法人登记簿摘本（法人企业）</li>
<li>近2个财年财务报表（审计报告或税务调整计算书）</li>
<li>经营创新活动佐证材料（新产品/服务开发资料、流程改善报告等）</li>
<li>组织结构图及人事相关资料</li>
<li>营销创新材料（线上渠道、品牌战略等）</li>
<li>ESG活动佐证材料（环境、社会、治理改善实绩）</li>
</ul>

<h2>6. 认证后优惠政策</h2>
<table>
<thead><tr><th>领域</th><th>优惠内容</th></tr></thead>
<tbody>
<tr><td>金融</td><td>企业贷款利率最高优惠1.65%p；保证手续费减免0.1～0.2%p；贷款额度最高扩大至70亿韩元</td></tr>
<tr><td>税务</td><td>正式税务检查延期2～3年</td></tr>
<tr><td>通关</td><td>年进口额不足1亿美元企业免除通关检查</td></tr>
<tr><td>人才</td><td>公共研究机构研究人员派遣最长3年，人工费50%国家支持</td></tr>
<tr><td>研发</td><td>技术开发、产学合作课题优先加分1～2分</td></tr>
<tr><td>贸易/出口</td><td>电视·广播广告费70%折扣；出口孵化器优先入驻</td></tr>
<tr><td>其他</td><td>技术寄存费33%折扣；技术纠纷法律支持费70%由政府承担</td></tr>
</tbody>
</table>

<h2>7. 注意事项与常见失误</h2>
<ul>
<li>自我诊断低于600分将无法申请现场评估——建议提前模拟测评，针对薄弱项补充材料</li>
<li>有创新活动但缺乏佐证材料，将无法计入评分</li>
<li>未提交上一财年财务报表或负债比率超1,000%将自动失格</li>
<li>2026年6月指标修订后，ESG项目佐证材料不可缺少</li>
<li>续期申请须在证书有效期届满前90天内提交</li>
</ul>

<div class="faq-section"><h2>常见问题（FAQ）</h2>
<div class="faq-item"><p class="faq-q">Q. 创业不足3年的企业可以申请吗？</p><p class="faq-a">A. 不可以。仅业龄满3年以上的中小企业方可申请。初创企业建议优先考虑风险企业认证。</p></div>
<div class="faq-item"><p class="faq-q">Q. Main-Biz与Innobiz认证可以同时持有吗？</p><p class="faq-a">A. 可以。两项认证相互独立，允许同时获得，企业可享受双重优惠政策。</p></div>
<div class="faq-item"><p class="faq-q">Q. 除现场评估费用外还有其他费用吗？</p><p class="faq-a">A. 费用因案件而异，免费咨询时为您提供准确报价。</p></div>
<div class="faq-item"><p class="faq-q">Q. 认证有效期内企业规模超过中小企业标准怎么办？</p><p class="faq-a">A. 认证效力自动失效。规模发生变化时须立即通知主管机关。</p></div>
<div class="faq-item"><p class="faq-q">Q. 自我诊断低于600分后可以重新申请吗？</p><p class="faq-a">A. 可以，重新申请次数不受限制。针对薄弱项完善材料后可再次参加自我诊断。</p></div>
</div>

<div class="cta-block">
  <h3>申请专家咨询</h3>
  <p>从认证前诊断到证书发放，VISION行政士事务所全程陪同。</p>
  <a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=mainbiz-certification">申请专家咨询</a>
</div>

<p class="author-block">VISION行政士事务所（代表行政士 이원중） · 依据경영혁신형 중소기업(Main-Biz) 제도 운영규정（中小风险企业部告示第2023-90号）编写 · 最终审核日期：2026年7月7日</p>`,
  },
  {
    slug: 'mainbiz-certification-requirements-process',
    locale: 'ja',
    title: '韓国メインビズ認証ガイド — 申請要件・評価基準・手続き完全解説',
    metaTitle: '韓国メインビズ(Main-Biz)認証2026 — 申請要件と手続きガイド',
    metaDescription: '韓国メインビズ（経営革新型中小企業）認証の申請資格・1000点評価体系・必要書類・優遇措置を徹底解説。有効期間3年、金利優遇・税務調査猶予など政策支援あり。無料相談受付中。',
    category: '企業認証',
    excerpt: 'メインビズ（Main-Biz）は韓国中小ベンチャー企業部が運営する、経営革新能力に優れた中小企業を認定する政府認証制度です。申請資格・1000点評価体系・認証後の優遇措置を詳しく解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>메인비즈 인증이란?（メインビズ認証とは）</li><li>申請資格要件</li><li>評価基準と点数体系</li><li>申請手順ステップ別解説</li><li>必要書類一覧</li><li>認証後の優遇措置</li><li>注意事項と不認定防止策</li><li>よくある質問（FAQ）</li></ol></div>

<p class="mainbiz-summary-box">この記事でわかること<br>① メインビズ認証の申請資格（業歴3年以上の中小企業）<br>② 1,000点満点評価体系と合格ライン（自己診断600点・現地評価700点）<br>③ 認証後の主要優遇措置（金利最大1.65%p優遇、税務調査2〜3年猶予）</p>

<h2>1. メインビズ認証とは（Main-Biz 경영혁신형 중소기업）</h2>
<p>メインビズ（Main-Biz）は「MAnagement INnovation Business」の略称で、韓国中小ベンチャー企業部（중소벤처기업부）が運営する<strong>経営革新型中小企業認証制度</strong>です。OECD オスロ・マニュアル（Oslo Manual）に基づく経営革新の定義を採用し、戦略・組織・マーケティングなど経営全体の革新能力を評価します。技術力を主軸とするイノビズ認証（Innobiz）とは評価の観点が異なります。</p>
<p>認証有効期間は3年で、期限前に更新申請が可能です。現在経営革新活動を実施中、または過去3年以内に実施して成果を挙げている中小企業が対象となります。</p>
<div class="highlight-box"><strong>[경영혁신형 중소기업(Main-Biz) 제도 운영규정（韓国行政士事務所に相当する韓国の行政士事務所） — 中小ベンチャー企業部告示第2023-90号]</strong>メインビズ認証は「中小企業基本法（중소기업기본법）」第2条に規定される中小企業であり、経営革新活動を実施中または過去3年以内に実施して成果を挙げている企業を対象とする。</div>

<h2>2. 申請資格要件</h2>
<p>申請企業は「中小企業基本法」第2条に規定される中小企業で、業歴3年以上であることが必要です。下記に該当する場合は申請資格が制限されます。</p>
<table>
<thead><tr><th>区分</th><th>不適格条件</th></tr></thead>
<tbody>
<tr><td>信用状況</td><td>延滞・国税滞納等により信用情報データベースに登録されている企業</td></tr>
<tr><td>手形取引</td><td>手形交換所から取引停止処分を受けた企業</td></tr>
<tr><td>倒産手続き</td><td>破産・会生・清算等の手続き中の企業</td></tr>
<tr><td>財務要件</td><td>直前事業年度末時点の負債比率が1,000%以上の企業</td></tr>
<tr><td>資本状況</td><td>完全資本侵食（완전 자본잠식）状態の企業</td></tr>
<tr><td>除外業種</td><td>ギャンブル機器製造業、タバコ卸売業、一部の接待業等</td></tr>
</tbody>
</table>

<h2>3. 評価基準と点数体系</h2>
<p>メインビズは1,000点満点の評価体系を採用しています。オンライン自己診断で600点以上を取得して初めて現地評価の申請資格が生じ、現地評価で700点以上を取得して初めて認証が付与されます。</p>
<table>
<thead><tr><th>評価領域</th><th>配点</th><th>主な評価項目</th></tr></thead>
<tbody>
<tr><td>経営革新基盤</td><td>350点</td><td>リーダーシップ、革新戦略、リソース管理、成果管理</td></tr>
<tr><td>革新活動</td><td>400点</td><td>組織革新、製品・サービス革新、プロセス革新、マーケティング革新</td></tr>
<tr><td>革新成果</td><td>250点</td><td>財務的成果、非財務的成果（顧客満足、ESGなど）</td></tr>
</tbody>
</table>
<p>2026年6月22日より評価指標が改定され、ESG関連の信頼活動項目が追加されました。新規申請企業はESG関連の証拠書類を事前に整備してください。</p>

<h2>4. 申請手順ステップ別解説</h2>
<table>
<thead><tr><th>ステップ</th><th>内容</th><th>所要期間</th></tr></thead>
<tbody>
<tr><td>1. 企業登録</td><td>mainbiz.go.kr に企業・工場・財務情報を入力</td><td>1〜2日</td></tr>
<tr><td>2. オンライン自己診断</td><td>600点以上を取得し、現地評価申請資格を獲得</td><td>1〜3日</td></tr>
<tr><td>3. 現地評価申請</td><td>手数料納付：新規55万ウォン / 更新44万ウォン（消費税込）</td><td>受付後に配定</td></tr>
<tr><td>4. 現地評価実施</td><td>評価委員が企業訪問、700点以上が必要、3週間以内に完了</td><td>最大3週間</td></tr>
<tr><td>5. 地方庁承認</td><td>中小ベンチャー企業部地方庁が審査・承認、Kakao/SMSで通知</td><td>1〜2週間</td></tr>
<tr><td>6. 認証書発行</td><td>オンライン発行、有効期間3年</td><td>即日</td></tr>
</tbody>
</table>
<p>書類完備から全手続き完了まで約<strong>5〜8週間</strong>が目安です。自己診断が600点未満では現地評価の申請自体ができないため、評価項目ごとの証拠書類整備が最重要です。</p>

<div class="cta-block">
  <h3>専門家相談を申し込む</h3>
  <p>ビジョン行政書士事務所がメインビズ認証の事前診断から認証書取得まで全面サポートします。</p>
  <a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=mainbiz-certification">専門家相談を申し込む</a>
</div>

<h2>5. 必要書類一覧</h2>
<ul>
<li>事業者登録証のコピー</li>
<li>法人登記簿謄本（法人の場合）</li>
<li>直近2事業年度の財務諸表（監査報告書または税務調整計算書）</li>
<li>経営革新活動の証拠書類（新製品・サービス開発資料、プロセス改善報告書など）</li>
<li>組織図および人事関連資料</li>
<li>マーケティング革新資料（オンラインチャネル、ブランド戦略など）</li>
<li>ESG活動の証拠書類（環境・社会・ガバナンス改善実績）</li>
</ul>

<h2>6. 認証後の優遇措置</h2>
<table>
<thead><tr><th>分野</th><th>優遇内容</th></tr></thead>
<tbody>
<tr><td>金融</td><td>企業融資の金利最大1.65%p優遇、保証料0.1〜0.2%p減免、融資限度70億ウォンまで拡大</td></tr>
<tr><td>税務</td><td>定期税務調査2〜3年猶予</td></tr>
<tr><td>通関</td><td>輸入額1億ドル未満の企業は通関検査免除</td></tr>
<tr><td>人材</td><td>公共研究機関の研究員を最長3年派遣、人件費50%を国が補助</td></tr>
<tr><td>研究開発</td><td>技術開発・産学協力課題の選定で加点1〜2点</td></tr>
<tr><td>貿易・輸出</td><td>テレビ・ラジオ広告費70%割引、輸出インキュベーター優先入居</td></tr>
<tr><td>その他</td><td>技術寄託手数料33%割引、技術紛争の法律支援費70%を政府が負担</td></tr>
</tbody>
</table>

<h2>7. 注意事項と不認定防止策</h2>
<ul>
<li>自己診断600点未満は現地評価の申請自体が不可 — 模擬診断を行い、弱点項目を事前補強することが必須</li>
<li>革新活動があっても証拠書類がなければ得点に反映されない</li>
<li>直前事業年度の財務諸表未提出または負債比率1,000%超は自動失格</li>
<li>2026年6月の指標改定後はESG項目の証拠書類が不可欠</li>
<li>更新申請は有効期限満了の90日前以内に行うこと</li>
</ul>

<div class="faq-section"><h2>よくある質問（FAQ）</h2>
<div class="faq-item"><p class="faq-q">Q. 業歴3年未満の企業でも申請できますか？</p><p class="faq-a">A. できません。業歴3年以上の中小企業のみ申請可能です。創業初期企業はベンチャー企業認証を先にご検討ください。</p></div>
<div class="faq-item"><p class="faq-q">Q. メインビズとイノビズ認証を同時に取得できますか？</p><p class="faq-a">A. はい。両認証は独立した制度であり、重複取得が認められています。双方の優遇措置をすべて受けられるため、同時取得を目指す企業も多くあります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 現地評価手数料以外に費用はかかりますか？</p><p class="faq-a">A. 費用は案件ごとに異なります。無料相談時に正確にご案内いたします。</p></div>
<div class="faq-item"><p class="faq-q">Q. 認証有効期間中に中小企業の規模要件を超えた場合はどうなりますか？</p><p class="faq-a">A. 認証の効力が失効します。規模変更が生じた場合は直ちに主管機関へ通知してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 自己診断で600点未満だった場合、再申請はできますか？</p><p class="faq-a">A. はい。再申請回数の制限はありません。弱点項目の証拠書類を補充した後、再度自己診断を実施できます。</p></div>
</div>

<div class="cta-block">
  <h3>専門家相談を申し込む</h3>
  <p>事前診断から認証書取得まで、ビジョン行政書士事務所（韓国の行政士事務所に相当）が全行程をサポートします。</p>
  <a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=mainbiz-certification">専門家相談を申し込む</a>
</div>

<p class="author-block">ビジョン行政書士事務所（代表行政士 이원중） · 경영혁신형 중소기업(Main-Biz) 제도 운영규정（中小ベンチャー企業部告示第2023-90号）基準で作成 · 最終確認日：2026年7月7日</p>`,
  },
  {
    locale: 'en',
    slug: 'innobiz-vs-mainbiz-comparison-guide',
    title: 'Inno-Biz vs Main-Biz Certification — Key Differences and How to Choose (2026)',
    excerpt: "Compare South Korea's Inno-Biz (technology innovation) and Main-Biz (management innovation) certifications: evaluation criteria, benefits, difficulty, and cost. Find out which is better for your company.",
    meta_title: 'Inno-Biz vs Main-Biz Certification Differences 2026 — Vision Administrative Office',
    meta_description: 'Full comparison of Inno-Biz and Main-Biz government certifications for Korean SMEs. Evaluation criteria, required scores, benefits, renewal, and how to choose the right one for your business.',
    content: `<div class="toc"><p>Contents</p><ol><li>What's the Difference Between Inno-Biz and Main-Biz?</li><li>Evaluation Criteria Comparison</li><li>Benefits Comparison</li><li>Difficulty and Cost Comparison</li><li>Which Certification Suits Your Business?</li><li>Can You Hold Both Certifications?</li><li>Application Process Comparison</li><li>FAQ</li></ol></div>

<h2>1. What's the Difference Between Inno-Biz and Main-Biz?</h2>
<p>Both Inno-Biz and Main-Biz are <strong>Korean government certification programs for SMEs operated by the Ministry of SMEs and Startups (MSS)</strong>, but they evaluate different types of innovation. Inno-Biz focuses on <strong>technology innovation</strong>, while Main-Biz centers on <strong>management innovation</strong>.</p>
<div class="highlight-box"><strong>[Inno-Biz Operating Regulations · Main-Biz Program Operating Regulations — MSS Notification]</strong> Inno-Biz is based on Article 15 of the Act on Promotion of Technology Innovation of Small and Medium Enterprises; Main-Biz is based on Article 2 of the Framework Act on Small and Medium Enterprises.</div>
<table><thead><tr><th>Category</th><th>Inno-Biz</th><th>Main-Biz</th></tr></thead><tbody><tr><td>Innovation type</td><td>Technology innovation</td><td>Management innovation</td></tr><tr><td>Governing body</td><td>MSS</td><td>MSS</td></tr><tr><td>Evaluation agency</td><td>TIPA</td><td>KBIZ / Private agencies</td></tr><tr><td>Validity period</td><td>3 years</td><td>3 years</td></tr><tr><td>Annual certifications</td><td>~5,000–6,000 companies</td><td>~3,000–4,000 companies</td></tr></tbody></table>

<h2>2. Evaluation Criteria Comparison</h2>
<p>Both certifications use a <strong>1,000-point scale</strong> with a 700-point passing threshold, but the evaluation items are entirely different.</p>
<table><thead><tr><th>Item</th><th>Inno-Biz (Technology)</th><th>Main-Biz (Management)</th></tr></thead><tbody><tr><td>Core activity</td><td>R&amp;D investment and technology development (main weight)</td><td>Strategy, marketing, organizational, and process innovation (main weight)</td></tr><tr><td>Technology assets</td><td>Patents, certifications, prototypes, etc.</td><td>Not evaluated</td></tr><tr><td>Management performance</td><td>Secondary indicator</td><td>Innovation outcomes, customer satisfaction, financial structure</td></tr><tr><td>Passing threshold</td><td>700 / 1,000</td><td>700 / 1,000</td></tr><tr><td>Grades</td><td>A (900+) / B (800+) / C (700+)</td><td>No grade system</td></tr><tr><td>Business age requirement</td><td>None</td><td>3 years or more</td></tr></tbody></table>

<h2>3. Benefits Comparison</h2>
<table><thead><tr><th>Benefit area</th><th>Inno-Biz</th><th>Main-Biz</th></tr></thead><tbody><tr><td>R&amp;D support</td><td>SME R&amp;D project preference, R&amp;D tax credit linkage</td><td>Partial preference for management innovation R&amp;D</td></tr><tr><td>Interest rate discount</td><td>IBK, Shinhan, etc. (~0.3–0.5%p)</td><td>IBK, etc. (~0.2–0.5%p)</td></tr><tr><td>Tax audit deferral</td><td>3-year deferral (conditions apply)</td><td>3-year deferral (conditions apply)</td></tr><tr><td>Public procurement advantage</td><td>Up to 3 bonus points in tech-price split bidding</td><td>Partial bonus points in PPS procurement</td></tr><tr><td>Patent linkage</td><td>Priority patent examination, technology transfer priority</td><td>None</td></tr><tr><td>Policy funds</td><td>KOSME, KODIT preference</td><td>KOSME, KODIT preference</td></tr></tbody></table>

<h2>4. Difficulty and Cost Comparison</h2>
<table><thead><tr><th>Item</th><th>Inno-Biz</th><th>Main-Biz</th></tr></thead><tbody><tr><td>Self-assessment threshold</td><td>600+ to apply for on-site evaluation</td><td>600+ to apply for on-site evaluation</td></tr><tr><td>Evaluation fee</td><td>Small biz KRW 110,000 / Medium KRW 220,000</td><td>Small biz KRW 110,000 / Medium KRW 220,000</td></tr><tr><td>Documentation</td><td>Tech development records (notebooks, patents, certs)</td><td>Management innovation records (plans, case studies)</td></tr><tr><td>Preparation time</td><td>4–8 weeks (document gathering)</td><td>2–6 weeks (innovation activity documentation)</td></tr><tr><td>Without R&amp;D record</td><td>Difficult (tech innovation proof is essential)</td><td>Possible (management innovation cases sufficient)</td></tr></tbody></table>

<h2>5. Which Certification Suits Your Business?</h2>
<table><thead><tr><th>Company type</th><th>Recommended</th><th>Reason</th></tr></thead><tbody><tr><td>Manufacturing / tech (patents, R&amp;D records)</td><td>Inno-Biz first</td><td>Existing tech proof translates to high scores</td></tr><tr><td>Service / distribution (no R&amp;D)</td><td>Main-Biz first</td><td>Management innovation focus; no R&amp;D required</td></tr><tr><td>Startup under 3 years old</td><td>Inno-Biz</td><td>Main-Biz 3-year requirement unavailable; Inno-Biz only option</td></tr><tr><td>Planning public procurement</td><td>Both</td><td>Procurement bonus points apply to both; dual certification maximizes advantage</td></tr><tr><td>Applying for R&amp;D grants</td><td>Inno-Biz</td><td>Stronger preference for tech development grant applications</td></tr></tbody></table>

<h2>6. Can You Hold Both Certifications?</h2>
<p>Yes — <strong>holding both Inno-Biz and Main-Biz simultaneously is allowed</strong>. Dual certification provides the broadest range of benefits across public procurement, policy loans, and tax preferential treatment.</p>

<h2>7. Application Process Comparison</h2>
<table><thead><tr><th>Step</th><th>Inno-Biz</th><th>Main-Biz</th></tr></thead><tbody><tr><td>1. Online self-assessment</td><td>innobiz.go.kr (600+: apply for on-site eval)</td><td>mainbiz.go.kr (600+: apply)</td></tr><tr><td>2. On-site evaluation application</td><td>TIPA application + fee payment</td><td>Private agency application + fee payment</td></tr><tr><td>3. On-site evaluation</td><td>Evaluator visit (1–2 days)</td><td>Evaluator visit (1 day)</td></tr><tr><td>4. Result notification</td><td>2–4 weeks after evaluation</td><td>2–4 weeks after evaluation</td></tr><tr><td>5. Certificate issuance</td><td>Inno-Biz certificate (3-year validity)</td><td>Main-Biz certificate (3-year validity)</td></tr></tbody></table>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Which is easier to obtain — Inno-Biz or Main-Biz?</p><p class="faq-a">A. For companies without R&D or patents, Main-Biz is generally more accessible. For technology-focused companies, Inno-Biz fits better. It depends on your company's profile.</p></div>
<div class="faq-item"><p class="faq-q">Q. If I already have Inno-Biz, do I still need Main-Biz?</p><p class="faq-a">A. The two certifications offer different benefit ranges. For maximum procurement and financing advantages, holding both is recommended.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is there any exception to the 3-year business age rule for Main-Biz?</p><p class="faq-a">A. In principle, Main-Biz requires 3+ years of business history. Startups under 3 years should pursue Inno-Biz first, then apply for Main-Biz later.</p></div>
<div class="faq-item"><p class="faq-q">Q. I'm struggling to score 600 on the Inno-Biz self-assessment. What should I do?</p><p class="faq-a">A. Systematically compile your R&D investment record, patent/certification holdings, and R&D personnel data. Working with a professional will help you maximize your score without missing any criteria.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do both certifications require renewal every 3 years?</p><p class="faq-a">A. Yes. Both Inno-Biz and Main-Biz are valid for 3 years and must be renewed through the same self-assessment and on-site evaluation process.</p></div>
</div>

<div class="cta-block">
  <h3>Prepare for Inno-Biz or Main-Biz with Expert Support</h3>
  <p>Vision Administrative Office (Korea) supports you from pre-assessment screening through certificate issuance for both certifications. Initial consultation is free.</p>
  <a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=innobiz-vs-mainbiz">Book Free Consultation</a>
</div>

<p class="author-block">Vision Administrative Office (Representative Administrative Agent: Lee Won-joong) · Based on Inno-Biz Operating Regulations and Main-Biz Program Operating Regulations (MSS Notification) · Last reviewed 2026-07-08</p>`
  },
  {
    locale: 'zh',
    slug: 'innobiz-vs-mainbiz-comparison-guide',
    title: 'Inno-Biz vs Main-Biz认证对比——差异解析与2026年选择指南',
    excerpt: '对比韩国中小企业两大政府认证：Inno-Biz（技术创新型）与Main-Biz（经营创新型）。从评估标准、认证优惠、难度到费用，帮您选出最适合企业的认证路径。',
    meta_title: 'Inno-Biz vs Main-Biz认证差异对比2026 — 비전行정사사무소',
    meta_description: '韩国中小企业Inno-Biz与Main-Biz政府认证全面对比。评估标准、所需分数、认证优惠、有效期及选择建议一览，专业行政士为您指导。',
    content: `<div class="toc"><p>目录</p><ol><li>Inno-Biz与Main-Biz有何不同？</li><li>评估标准对比</li><li>认证优惠对比</li><li>申请难度与费用对比</li><li>哪种认证更适合您的企业？</li><li>能否同时持有两项认证？</li><li>申请流程对比</li><li>常见问题（FAQ）</li></ol></div>

<h2>1. Inno-Biz与Main-Biz有何不同？</h2>
<p>Inno-Biz和Main-Biz均是<strong>韩国中小风险企业部（MSS）运营的中小企业政府认证制度</strong>，但评估的创新类型不同。Inno-Biz侧重<strong>技术创新</strong>，Main-Biz侧重<strong>经营创新</strong>。</p>
<div class="highlight-box"><strong>[技术创新型中小企业（Inno-Biz）运营规定·经营创新型中小企业（Main-Biz）制度运营规定 — 中小风险企业部告示]</strong> Inno-Biz依据《中小企业技术创新促进法》第15条，Main-Biz依据《中小企业基本法》第2条。</div>
<table><thead><tr><th>类别</th><th>Inno-Biz（技术创新）</th><th>Main-Biz（经营创新）</th></tr></thead><tbody><tr><td>创新类型</td><td>技术创新</td><td>经营创新</td></tr><tr><td>主管部门</td><td>中小风险企业部</td><td>中小风险企业部</td></tr><tr><td>评估机构</td><td>TIPA（中小企业技术信息振兴院）</td><td>KBIZ/民间评估机构</td></tr><tr><td>有效期</td><td>3年</td><td>3年</td></tr><tr><td>年认证规模</td><td>约5,000~6,000家</td><td>约3,000~4,000家</td></tr></tbody></table>

<h2>2. 评估标准对比</h2>
<p>两项认证均采用<strong>1,000分满分制</strong>，700分以上为合格，但评估项目完全不同。</p>
<table><thead><tr><th>项目</th><th>Inno-Biz（技术创新）</th><th>Main-Biz（经营创新）</th></tr></thead><tbody><tr><td>核心活动</td><td>研发投入与技术开发活动（主要配分）</td><td>战略·营销·组织·流程创新活动（主要配分）</td></tr><tr><td>技术资产</td><td>专利·认证·样品等</td><td>不评估</td></tr><tr><td>经营能力</td><td>辅助指标</td><td>创新成果·客户满意度·财务结构</td></tr><tr><td>合格标准</td><td>700/1,000分</td><td>700/1,000分</td></tr><tr><td>等级</td><td>A（900+）/B（800+）/C（700+）</td><td>无等级</td></tr><tr><td>业龄要求</td><td>无限制</td><td>满3年以上</td></tr></tbody></table>

<h2>3. 认证优惠对比</h2>
<table><thead><tr><th>优惠领域</th><th>Inno-Biz</th><th>Main-Biz</th></tr></thead><tbody><tr><td>研发支持</td><td>中小企业R&amp;D课题加分，研究所税收抵免联动</td><td>部分经营创新R&amp;D加分</td></tr><tr><td>利率优惠</td><td>企业银行·新韩等约0.3~0.5%p</td><td>企业银行等约0.2~0.5%p</td></tr><tr><td>税务调查缓期</td><td>满足条件可缓期3年</td><td>满足条件可缓期3年</td></tr><tr><td>政府采购加分</td><td>技术·价格分离招标最高3分</td><td>调达厅物品·服务招标部分加分</td></tr><tr><td>专利联动</td><td>专利优先审查、技术转让优先支持</td><td>无</td></tr><tr><td>政策资金</td><td>中振公·技保等优待</td><td>中振公·技保等优待</td></tr></tbody></table>

<h2>4. 申请难度与费用对比</h2>
<table><thead><tr><th>项目</th><th>Inno-Biz</th><th>Main-Biz</th></tr></thead><tbody><tr><td>自我诊断门槛</td><td>600分以上可申请现场评估</td><td>600分以上可申请现场评估</td></tr><tr><td>现场评估费</td><td>小型企业11万韩元/中型企业22万韩元</td><td>小型企业11万韩元/中型企业22万韩元</td></tr><tr><td>准备资料</td><td>技术开发证明（研究笔记、专利、认证书等）</td><td>经营创新活动证明（经营计划书、创新案例等）</td></tr><tr><td>准备周期</td><td>通常4~8周</td><td>通常2~6周</td></tr><tr><td>无研发记录时</td><td>较困难（技术创新证明是核心）</td><td>可行（有经营创新案例即可）</td></tr></tbody></table>

<h2>5. 哪种认证更适合您的企业？</h2>
<table><thead><tr><th>企业类型</th><th>推荐认证</th><th>理由</th></tr></thead><tbody><tr><td>制造/技术企业（有专利、研发记录）</td><td>优先Inno-Biz</td><td>技术创新证明已备，得分优势明显</td></tr><tr><td>服务/流通企业（无研发）</td><td>优先Main-Biz</td><td>以经营创新活动为主，不要求研发记录</td></tr><tr><td>成立不足3年的初创企业</td><td>Inno-Biz</td><td>Main-Biz需满3年，Inno-Biz是唯一选项</td></tr><tr><td>计划参与政府采购的企业</td><td>两项均申</td><td>两项认证均可获采购加分，双证效益最大</td></tr><tr><td>计划申请研发补贴</td><td>Inno-Biz</td><td>技术开发课题加分及优先支持力度更强</td></tr></tbody></table>

<h2>6. 能否同时持有两项认证？</h2>
<p>可以。<strong>同时持有Inno-Biz与Main-Biz是被允许的</strong>。双认证可在政府采购、政策资金和税收优惠方面享受最广泛的优待。</p>

<h2>7. 申请流程对比</h2>
<table><thead><tr><th>步骤</th><th>Inno-Biz</th><th>Main-Biz</th></tr></thead><tbody><tr><td>1. 在线自我诊断</td><td>innobiz.go.kr（600分以上：申请现场评估）</td><td>mainbiz.go.kr（600分以上：申请）</td></tr><tr><td>2. 申请现场评估</td><td>向TIPA申请 + 缴纳费用</td><td>向民间评估机构申请 + 缴纳费用</td></tr><tr><td>3. 现场评估</td><td>评审员上门审核（通常1~2天）</td><td>评审员上门审核（通常1天）</td></tr><tr><td>4. 结果通知</td><td>评估后2~4周</td><td>评估后2~4周</td></tr><tr><td>5. 颁发认证书</td><td>Inno-Biz认证书（有效期3年）</td><td>Main-Biz认证书（有效期3年）</td></tr></tbody></table>

<div class="faq-section"><h2>常见问题（FAQ）</h2>
<div class="faq-item"><p class="faq-q">Q. Inno-Biz和Main-Biz哪个更容易获得？</p><p class="faq-a">A. 对于没有研发或专利记录的企业，Main-Biz相对容易。对于技术型企业，Inno-Biz准备更顺畅。具体取决于企业性质。</p></div>
<div class="faq-item"><p class="faq-q">Q. 已有Inno-Biz，还需要申请Main-Biz吗？</p><p class="faq-a">A. 两项认证的优惠范围不同。若希望全面覆盖政府采购加分和贷款优惠，建议双证齐备。</p></div>
<div class="faq-item"><p class="faq-q">Q. Main-Biz的3年业龄要求是否有例外？</p><p class="faq-a">A. 原则上须满3年。未满3年的企业可先申请Inno-Biz，达到业龄后再申请Main-Biz。</p></div>
<div class="faq-item"><p class="faq-q">Q. 自我诊断难以达到600分，该怎么办？</p><p class="faq-a">A. 需系统整理研发投入记录、专利/认证持有情况及研发人员资料。建议与专业行政士合作，逐项核查以避免遗漏。</p></div>
<div class="faq-item"><p class="faq-q">Q. 两项认证都需要每3年更新吗？</p><p class="faq-a">A. 是的。Inno-Biz与Main-Biz有效期均为3年，到期须重新进行自我诊断及现场评估。</p></div>
</div>

<div class="cta-block">
  <h3>专业咨询，助您顺利通过Inno-Biz·Main-Biz认证</h3>
  <p>비전行정사사무소（韩国）提供从预评估诊断到认证书颁发的全程一站式服务。初次咨询免费。</p>
  <a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=innobiz-vs-mainbiz">预约免费咨询</a>
</div>

<p class="author-block">비전行政士事务所（代表行政士 이원중） · 依据技术创新型中小企业（Inno-Biz）运营规定及经营创新型中小企业（Main-Biz）制度运营规定（中小风险企业部告示）撰写 · 最终审核日 2026-07-08</p>`
  },
  {
    locale: 'ja',
    slug: 'innobiz-vs-mainbiz-comparison-guide',
    title: 'イノビズ vs メインビズ認証の違いと選び方 — 2026年版完全ガイド',
    excerpt: '韓国中小企業向け政府認証制度のイノビズ（技術革新型）とメインビズ（経営革新型）を徹底比較。評価基準・取得メリット・難易度・費用の違いを解説し、自社に合った認証選択をサポートします。',
    meta_title: 'イノビズ vs メインビズ認証の違いと選び方2026 — ビジョン行政書士事務所',
    meta_description: '韓国中小企業のイノビズ・メインビズ政府認証を徹底比較。評価基準・合格ライン・取得メリット・有効期間・費用の違いを一覧で解説。専門行政士が最適な認証選択をご案内します。',
    content: `<div class="toc"><p>目次</p><ol><li>イノビズとメインビズの違いとは？</li><li>評価基準の比較</li><li>取得メリットの比較</li><li>申請難易度と費用の比較</li><li>どちらの認証が自社に有利か？</li><li>2つの認証を同時に取得できるか？</li><li>申請手続きの比較</li><li>よくある質問（FAQ）</li></ol></div>

<h2>1. イノビズとメインビズの違いとは？</h2>
<p>イノビズ（Inno-Biz）とメインビズ（Main-Biz）はともに<strong>中小ベンチャー企業部（MSS）が運営する中小企業向け政府認証制度</strong>ですが、評価する革新の種類が異なります。イノビズは<strong>技術革新</strong>、メインビズは<strong>経営革新</strong>が核心です。</p>
<div class="highlight-box"><strong>[技術革新型中小企業（Inno-Biz）運営規定・経営革新型中小企業（Main-Biz）制度運営規定 — 中小ベンチャー企業部告示]</strong> イノビズは「中小企業技術革新促進法」第15条、メインビズは「中小企業基本法」第2条を根拠とする。</div>
<table><thead><tr><th>区分</th><th>イノビズ（技術革新型）</th><th>メインビズ（経営革新型）</th></tr></thead><tbody><tr><td>革新タイプ</td><td>技術革新</td><td>経営革新</td></tr><tr><td>主管省庁</td><td>中小ベンチャー企業部</td><td>中小ベンチャー企業部</td></tr><tr><td>評価機関</td><td>TIPA（中小企業技術情報振興院）</td><td>KBIZ/民間評価機関</td></tr><tr><td>有効期間</td><td>3年</td><td>3年</td></tr><tr><td>年間認証規模</td><td>約5,000〜6,000社</td><td>約3,000〜4,000社</td></tr></tbody></table>

<h2>2. 評価基準の比較</h2>
<p>両認証とも<strong>1,000点満点・700点以上で合格</strong>ですが、評価項目はまったく異なります。</p>
<table><thead><tr><th>項目</th><th>イノビズ（技術革新）</th><th>メインビズ（経営革新）</th></tr></thead><tbody><tr><td>中心活動</td><td>R&amp;D投資・技術開発活動（主配点）</td><td>戦略・マーケティング・組織・工程革新活動（主配点）</td></tr><tr><td>技術資産</td><td>特許・認証・試作品など</td><td>評価なし</td></tr><tr><td>経営能力</td><td>補助指標として反映</td><td>革新成果・顧客満足・財務構造を反映</td></tr><tr><td>合格基準</td><td>700/1,000点</td><td>700/1,000点</td></tr><tr><td>等級</td><td>A（900+）/B（800+）/C（700+）</td><td>等級なし</td></tr><tr><td>業歴要件</td><td>制限なし</td><td>業歴3年以上</td></tr></tbody></table>

<h2>3. 取得メリットの比較</h2>
<table><thead><tr><th>メリット分野</th><th>イノビズ</th><th>メインビズ</th></tr></thead><tbody><tr><td>R&amp;D支援</td><td>中小企業R&amp;D課題加点、研究所税額控除連携</td><td>一部経営革新R&amp;Dに加点</td></tr><tr><td>金利優遇</td><td>IBK・新韓等（約0.3〜0.5%p）</td><td>IBK等（約0.2〜0.5%p）</td></tr><tr><td>税務調査猶予</td><td>要件充足時3年猶予</td><td>要件充足時3年猶予</td></tr><tr><td>公共入札加点</td><td>技術・価格分離入札で最大3点</td><td>調達庁物品・サービス入札で一部加点</td></tr><tr><td>特許連携</td><td>特許優先審査・技術移転優先支援</td><td>なし</td></tr><tr><td>政策資金</td><td>中振公・技保等優遇</td><td>中振公・技保等優遇</td></tr></tbody></table>

<h2>4. 申請難易度と費用の比較</h2>
<table><thead><tr><th>項目</th><th>イノビズ</th><th>メインビズ</th></tr></thead><tbody><tr><td>自己診断基準</td><td>600点以上で現場評価申請可</td><td>600点以上で現場評価申請可</td></tr><tr><td>現場評価手数料</td><td>小企業11万ウォン/中企業22万ウォン</td><td>小企業11万ウォン/中企業22万ウォン</td></tr><tr><td>準備書類</td><td>技術開発証拠（研究ノート・特許・認証書等）</td><td>経営革新活動証拠（経営計画書・革新事例等）</td></tr><tr><td>準備期間</td><td>通常4〜8週間</td><td>通常2〜6週間</td></tr><tr><td>R&amp;D実績なしの場合</td><td>難しい（技術革新証明が核心）</td><td>可能（経営革新事例のみで申請可）</td></tr></tbody></table>

<h2>5. どちらの認証が自社に有利か？</h2>
<table><thead><tr><th>企業タイプ</th><th>推奨認証</th><th>理由</th></tr></thead><tbody><tr><td>製造・技術企業（特許・R&amp;D実績あり）</td><td>イノビズ優先</td><td>技術革新証明が揃っており高得点が狙える</td></tr><tr><td>サービス・流通企業（R&amp;D実績なし）</td><td>メインビズ優先</td><td>経営革新活動中心の評価、R&amp;D不要</td></tr><tr><td>業歴1〜2年のスタートアップ</td><td>イノビズ</td><td>メインビズの業歴3年要件を満たさない場合、唯一の選択肢</td></tr><tr><td>公共調達への参入を計画する企業</td><td>両認証とも</td><td>入札加点は両認証に適用、ダブル認証で効果最大化</td></tr><tr><td>R&amp;D補助金申請予定</td><td>イノビズ</td><td>技術開発課題加点・優先支援のメリットが大きい</td></tr></tbody></table>

<h2>6. 2つの認証を同時に取得できるか？</h2>
<p>はい、<strong>イノビズとメインビズの同時保有は可能</strong>です。ダブル認証により、公共入札・政策資金・税制優遇のあらゆる面で最大限の恩恵を受けることができます。</p>

<h2>7. 申請手続きの比較</h2>
<table><thead><tr><th>ステップ</th><th>イノビズ</th><th>メインビズ</th></tr></thead><tbody><tr><td>1. オンライン自己診断</td><td>innobiz.go.kr（600点以上：現場評価申請）</td><td>mainbiz.go.kr（600点以上：申請）</td></tr><tr><td>2. 現場評価申請</td><td>TIPA申請 + 手数料納付</td><td>民間評価機関申請 + 手数料納付</td></tr><tr><td>3. 現場評価</td><td>評価委員訪問審査（通常1〜2日）</td><td>評価委員訪問審査（通常1日）</td></tr><tr><td>4. 結果通知</td><td>評価後2〜4週間</td><td>評価後2〜4週間</td></tr><tr><td>5. 認証書発行</td><td>イノビズ認証書（3年有効）</td><td>メインビズ認証書（3年有効）</td></tr></tbody></table>

<div class="faq-section"><h2>よくある質問（FAQ）</h2>
<div class="faq-item"><p class="faq-q">Q. イノビズとメインビズはどちらが取得しやすいですか？</p><p class="faq-a">A. R&amp;D・特許実績のない企業にはメインビズが比較的容易です。技術系企業にはイノビズの方が準備を進めやすいケースが多いです。企業の特性によって異なります。</p></div>
<div class="faq-item"><p class="faq-q">Q. イノビズを持っていれば、メインビズは不要ですか？</p><p class="faq-a">A. 2つの認証は異なる優遇範囲をカバーします。公共調達加点・融資優遇を最大限受けるには、両方の保有が有利です。</p></div>
<div class="faq-item"><p class="faq-q">Q. メインビズの業歴3年要件に例外はありますか？</p><p class="faq-a">A. 原則として業歴3年以上が対象です。未満の場合はまずイノビズを取得し、業歴を満たしてからメインビズに挑戦するのが一般的です。</p></div>
<div class="faq-item"><p class="faq-q">Q. イノビズの自己診断で600点を超えられません。どう準備すれば？</p><p class="faq-a">A. R&amp;D投資実績、特許・認証の保有状況、R&amp;D人材を体系的に整理することが重要です。専門家と項目ごとに確認すれば、漏れなく得点を最大化できます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 両認証とも3年ごとに更新が必要ですか？</p><p class="faq-a">A. はい。イノビズ・メインビズとも有効期間は3年で、更新時は新規申請と同様に自己診断・現場評価を受ける必要があります。</p></div>
</div>

<div class="cta-block">
  <h3>イノビズ・メインビズ認証、専門家と一緒に準備しましょう</h3>
  <p>ビジョン行政書士事務所（韓国）は事前診断から認証書取得まで、両認証をワンストップでサポートします。初回相談は無料です。</p>
  <a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=innobiz-vs-mainbiz">無料相談を申し込む</a>
</div>

<p class="author-block">ビジョン行政書士事務所（代表行政士 이원중） · 技術革新型中小企業（Inno-Biz）運営規定及び経営革新型中小企業（Main-Biz）制度運営規定（中小ベンチャー企業部告示）基準で作成 · 最終確認日：2026年7月8日</p>`
  },
]

export function getBlogI18n(locale: Locale, slug: string): BlogI18n | null {
  return blogData.find((b) => b.locale === locale && b.slug === slug) ?? null
}

export function getAllTranslatedSlugs(locale: Locale): string[] {
  return blogData.filter((b) => b.locale === locale).map((b) => b.slug)
}
