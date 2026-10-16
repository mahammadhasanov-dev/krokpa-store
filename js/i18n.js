/* KROKPA — English / Azerbaijani language switcher
   Every translatable string lives in DICT (key -> {en, az}).
   Elements are tagged data-i18n="key" and get their innerHTML set
   from DICT on load and whenever the language changes. Product
   catalog text has its own table (PRODUCT_DICT) since it's rendered
   from JS, not sitting in the DOM as static markup. */

const LANG_KEY = 'krokpa_lang';

const DICT = {
  /* ---- nav / shared ---- */
  'nav.shop': { en: 'Shop', az: 'Mağaza' },
  'nav.about': { en: 'About', az: 'Haqqımızda' },
  'nav.shipping': { en: 'Shipping', az: 'Çatdırılma' },
  'nav.returns': { en: 'Returns', az: 'Qaytarma' },
  'nav.bag': { en: 'Bag', az: 'Səbət' },
  'nav.secure_checkout': { en: 'Secure Checkout', az: 'Təhlükəsiz Ödəniş' },

  /* ---- ticker ---- */
  'ticker.free_shipping': { en: 'FREE SHIPPING OVER 150 ₼', az: '150 ₼-DƏN YUXARI PULSUZ ÇATDIRILMA' },
  'ticker.new_drop': { en: 'NEW: T-SHIRT DROP IS LIVE', az: 'YENİ: FUTBOLKA KOLLEKSİYASI SATIŞDA' },
  'ticker.chrome_limited': { en: 'CHROME TEE — LIMITED RUN, NO RESTOCK', az: 'CHROME TEE — MƏHDUD SAY, TƏKRAR SATIŞA ÇIXMAYACAQ' },
  'ticker.made_to_order': { en: 'MADE TO ORDER — SHIPS IN 2–3 DAYS', az: 'SİFARİŞLƏ HAZIRLANIR — 2–3 GÜNƏ GÖNDƏRİLİR' },

  /* ---- hero (index.html) ---- */
  'hero.tag': { en: 'SS26 — SEVEN-WAY DROP', az: 'SS26 — YEDDİ MODELLİK KOLLEKSİYA' },
  'hero.h1': { en: 'T-SHIRTS FOR THE <em>UNBOTHERED</em>', az: '<em>ALDIRMAYANLAR</em> ÜÇÜN FUTBOLKALAR' },
  'hero.lead': {
    en: "Heavyweight oversized T-shirts, made to order in small batches. Twelve colorways. No seasons, no filler — just pieces built for whatever you're getting into.",
    az: 'Ağır parçadan hazırlanmış oversize futbolkalar, kiçik partiyalarla sifarişlə istehsal olunur. On iki rəng seçimi. Mövsüm yoxdur, artıq detal yoxdur — sadəcə nə etsən də uyğun gələn geyimlər.'
  },
  'hero.shop_drop': { en: 'Shop the drop', az: 'Kolleksiyaya bax' },
  'hero.our_story': { en: 'Our story', az: 'Hekayəmiz' },

  /* ---- trust strip (index.html) ---- */
  'strip.shipping': { en: '&#9889; <b>Free shipping</b>&nbsp;over 150 ₼', az: '&#9889; <b>Pulsuz çatdırılma</b>&nbsp;150 ₼-dən yuxarı' },
  'strip.returns': { en: '&#8635; <b>30-day</b>&nbsp;returns', az: '&#8635; <b>30 günlük</b>&nbsp;qaytarma' },
  'strip.cotton': { en: '&#9878; <b>Heavyweight</b>&nbsp;cotton', az: '&#9878; <b>Ağır</b>&nbsp;pambıq parça' },
  'strip.secure': { en: '&#128274; <b>Secure</b>&nbsp;checkout', az: '&#128274; <b>Təhlükəsiz</b>&nbsp;ödəniş' },

  /* ---- shop section (index.html) ---- */
  'shop.eyebrow': { en: 'The Drop', az: 'Kolleksiya' },
  'shop.h2': { en: 'Twelve Tees.<br>Zero Filler.', az: 'On İki Futbolka.<br>Artıq Söz Yox.' },
  'shop.lead': {
    en: 'Every tee is produced in small batches. Limited pieces are clearly marked, while core pieces stay easy to wear and easy to rotate.',
    az: 'Hər futbolka kiçik partiyalarla istehsal olunur. Məhdud sayda modellər aydın qeyd olunur, əsas modellər isə həmişə rahat geyilən və asan uyğunlaşan olaraq qalır.'
  },
  'shop.add_to_bag': { en: 'Add to bag', az: 'Səbətə əlavə et' },
  'badge.new': { en: 'NEW', az: 'YENİ' },
  'badge.limited': { en: 'LIMITED', az: 'MƏHDUD' },

  /* ---- about teaser (index.html) + about.html ---- */
  'about.eyebrow': { en: 'Who We Are', az: 'Biz Kimik' },
  'about.headline': { en: 'STARTED WITH ONE HAT AND A BAD ATTITUDE.', az: 'BİR PAPAQ VƏ PİS ƏHVAL-RUHİYYƏ İLƏ BAŞLADI.' },
  'about.teaser': {
    en: "KROKPA isn't trying to fit in. We cut small runs, we don't chase seasons, and when a colorway sells out, it doesn't come back. If that means you have to move fast — good. That's the point.",
    az: 'KROKPA uyğunlaşmağa çalışmır. Biz kiçik partiyalarla istehsal edirik, mövsümlərin ardınca qaçmırıq, bir rəng bitəndə isə bir daha geri qayıtmır. Bunun üçün tez tərpənmək lazımdırsa — əla, məsələ elə budur.'
  },
  'about.read_full': { en: 'Read the full story', az: 'Tam hekayəni oxu' },
  'about.hero_tag': { en: 'Our Story', az: 'Hekayəmiz' },
  'about.p1': {
    en: 'KROKPA didn\'t come out of a boardroom. It came out of being tired of headwear that looked like everything else on the rack — safe colorways, safe logos, made to move volume instead of make a statement.',
    az: 'KROKPA idarə heyəti otağından çıxmadı. O, rəfdəki hər şey kimi görünən baş geyimlərindən — təhlükəsiz rənglərdən, təhlükəsiz loqolardan, iddia yaratmaq əvəzinə həcm satmaq üçün hazırlanan məhsullardan bezməkdən yarandı.'
  },
  'about.p2': {
    en: "So we cut it down to seven caps. Heavyweight construction, real cotton twill, a claw mark instead of a script logo, and colorways that don't apologize for being loud — or for being all-black. Every run is made to order in small batches. When a limited drop like Chrome sells out, we don't reprint it. That's not a marketing trick, it's just how we'd want a hat brand to run if we were buying instead of building.",
    az: 'Beləliklə, onu yeddi papağa endirdik. Ağır konstruksiya, əsl pambıq twill parça, yazılı loqo əvəzinə caynaq işarəsi və nə bərkdən, nə də tam qara olmaqdan üzr istəməyən rənglər. Hər partiya kiçik miqdarda, sifarişlə hazırlanır. Chrome kimi məhdud bir kolleksiya bitəndə, biz onu yenidən çap etmirik. Bu marketinq hiyləsi deyil — sadəcə alıcı olsaydıq, bir papaq brendinin necə işləməsini istərdik, elədir.'
  },
  'about.p3': {
    en: 'No seasons. No filler colorways. No restocks on the drops that say limited. Just caps built for whatever you\'re getting into next.',
    az: 'Mövsüm yoxdur. Artıq rənglər yoxdur. "Məhdud" yazılan kolleksiyalarda təkrar satış yoxdur. Sadəcə növbəti addımın üçün hazırlanmış papaqlar.'
  },
  'about.strip1': { en: '&#9878; <b>6-panel</b>&nbsp;cotton twill construction', az: '&#9878; <b>6 panelli</b>&nbsp;pambıq twill konstruksiya' },
  'about.strip2': { en: '&#9997; <b>Small-batch</b>&nbsp;made to order', az: '&#9997; <b>Kiçik partiya</b>&nbsp;sifarişlə istehsal' },
  'about.strip3': { en: '&#128683; <b>No restocks</b>&nbsp;on limited drops', az: '&#128683; <b>Təkrar satış yoxdur</b>&nbsp;məhdud kolleksiyalarda' },
  'about.cta_h2': { en: 'READY TO PICK YOUR COLORWAY?', az: 'RƏNGİNİ SEÇMƏYƏ HAZIRSAN?' },
  'about.cta_btn': { en: 'Shop the Drop', az: 'Kolleksiyaya Bax' },

  /* ---- footer (shared) ---- */
  'footer.tagline': { en: 'T-shirts for the unbothered. Heavyweight construction, small-batch drops, zero apologies.', az: 'Aldırmayanlar üçün futbolkalar. Ağır konstruksiya, kiçik partiyalı kolleksiyalar, sıfır üzrxahlıq.' },
  'footer.shop_h4': { en: 'Shop', az: 'Mağaza' },
  'footer.shop_all_caps': { en: 'All Caps', az: 'Bütün Papaqlar' },
  'footer.shop_all_tees': { en: 'All T-Shirts', az: 'Bütün Futbolkalar' },
  'footer.new_acid': { en: 'New: Acid Mark Tee', az: 'Yeni: Acid Mark Tee' },
  'footer.limited_chrome': { en: 'Limited: Chrome Tee', az: 'Məhdud: Chrome Tee' },
  'footer.help_h4': { en: 'Help', az: 'Kömək' },
  'footer.returns_refunds': { en: 'Returns &amp; Refunds', az: 'Qaytarma və Geri Ödəmə' },
  'footer.privacy': { en: 'Privacy', az: 'Məxfilik' },
  'footer.terms': { en: 'Terms of Service', az: 'İstifadə Şərtləri' },
  'footer.company_h4': { en: 'Company', az: 'Şirkət' },
  'footer.contact': { en: 'Contact', az: 'Əlaqə' },
  'footer.copyright': { en: '&copy; 2026 KROKPA. All rights reserved.', az: '&copy; 2026 KROKPA. Bütün hüquqlar qorunur.' },
  'footer.madetoorder_index': { en: 'Made to order. Limited pieces are not restocked.', az: 'Sifarişlə hazırlanır. Məhdud modellər təkrar satışa çıxmır.' },
  'footer.madetoorder_other': { en: 'Made to order. No restocks on limited drops.', az: 'Sifarişlə hazırlanır. Məhdud kolleksiyalarda təkrar satış yoxdur.' },
  'footer.legal_taxid': { en: 'KROKPA &middot; portfolio demo', az: 'KROKPA &middot; portfolio demo' },
  'footer.legal_address': {
    en: 'Azerbaijan &middot; support@example.com',
    az: 'Azerbaijan &middot; support@example.com'
  },

  /* ---- cart drawer (main.js) ---- */
  'cart.title': { en: 'Your Bag', az: 'Səbətiniz' },
  'cart.empty': { en: 'Your bag is empty.', az: 'Səbətiniz boşdur.' },
  'cart.shop_drop_arrow': { en: 'Shop the drop &rarr;', az: 'Kolleksiyaya bax &rarr;' },
  'cart.each': { en: 'each', az: '/ ədəd' },
  'cart.remove': { en: 'Remove', az: 'Sil' },
  'cart.subtotal': { en: 'Subtotal', az: 'Aralıq cəm' },
  'cart.checkout_btn': { en: 'Checkout', az: 'Ödənişə keç' },

  /* ---- product detail page ---- */
  'pdp.add_to_bag': { en: 'Add to Bag', az: 'Səbətə əlavə et' },
  'pdp.fit': { en: 'Fit', az: 'Kəsim' },
  'pdp.material': { en: 'Material', az: 'Material' },
  'pdp.origin': { en: 'Origin', az: 'Mənşə' },
  'pdp.you_might_like': { en: 'You Might Also Like', az: 'Bunlar da Xoşunuza Gələ Bilər' },
  'pdp.more_from_drop': { en: 'More From The Drop', az: 'Kolleksiyadan Daha Çox' },

  /* ---- checkout page ---- */
  'checkout.payments_secured': { en: 'Payments secured &amp; encrypted &middot; processed by', az: 'Ödənişlər təhlükəsiz şifrələnir &middot; təchizatçı:' },
  'checkout.contact_h': { en: 'Contact', az: 'Əlaqə' },
  'checkout.email': { en: 'Email', az: 'E-poçt' },
  'checkout.shipping_address_h': { en: 'Shipping Address', az: 'Çatdırılma Ünvanı' },
  'checkout.first_name': { en: 'First name', az: 'Ad' },
  'checkout.last_name': { en: 'Last name', az: 'Soyad' },
  'checkout.address': { en: 'Address', az: 'Ünvan' },
  'checkout.city': { en: 'City', az: 'Şəhər' },
  'checkout.state': { en: 'State', az: 'Bölgə' },
  'checkout.zip': { en: 'ZIP', az: 'Poçt indeksi' },
  'checkout.payment_h': { en: 'Payment', az: 'Ödəniş' },
  'checkout.card_info': { en: 'Card information', az: 'Kart məlumatları' },
  'checkout.expiry': { en: 'Expiry', az: 'Son istifadə tarixi' },
  'checkout.cvc': { en: 'CVC', az: 'CVC' },
  'checkout.name_on_card': { en: 'Name on card', az: 'Kartda olan ad' },
  'checkout.pay_prefix': { en: 'Pay', az: 'Ödə' },
  'checkout.demo_note': { en: 'Demo checkout — payment provider connection required', az: 'Demo ödəniş — ödəniş təchizatçısı bağlantısı tələb olunur' },
  'checkout.order_summary': { en: 'Order Summary', az: 'Sifariş Xülasəsi' },
  'checkout.subtotal': { en: 'Subtotal', az: 'Aralıq cəm' },
  'checkout.shipping_label': { en: 'Shipping', az: 'Çatdırılma' },
  'checkout.est_tax': { en: 'Estimated tax', az: 'Təxmini vergi' },
  'checkout.total': { en: 'Total', az: 'Cəmi' },
  'checkout.free': { en: 'FREE', az: 'PULSUZ' },
  'checkout.processing': { en: 'Processing…', az: 'Emal olunur…' },
  'checkout.order_confirmed': { en: 'Order Confirmed', az: 'Sifariş Təsdiqləndi' },
  'checkout.order_label': { en: 'Order', az: 'Sifariş' },
  'checkout.demo_note2': {
    en: 'This is a demo store — no payment was actually processed. A real confirmation email would land in your inbox here.',
    az: 'Bu demo mağazadır — heç bir ödəniş faktiki olaraq həyata keçirilməyib. Real vəziyyətdə təsdiq e-poçtu buraya gələcəkdi.'
  },
  'checkout.back_to_shop': { en: 'Back to Shop', az: 'Mağazaya Qayıt' },
  'checkout.bag_empty': { en: 'Your bag is empty.', az: 'Səbətiniz boşdur.' },
  'checkout.go_shop': { en: 'Go shop the drop.', az: 'Kolleksiyaya bax.' },
  'checkout.qty': { en: 'Qty', az: 'Say' },

  /* ---- policy shared ---- */
  'policy.updated': { en: 'Last updated: August 30, 2026', az: 'Son yenilənmə: 30 avqust 2026' },
  'policy.business_block': {
    en: 'KROKPA (portfolio demo).<br>Business Address: Azerbaijan<br>Support: <a href="mailto:support@example.com">support@example.com</a>',
    az: 'KROKPA (portfolio demo).<br>Biznes Ünvanı: Azerbaijan<br>Dəstək: <a href="mailto:support@example.com">support@example.com</a>'
  },
  'policy.contact_h2': { en: 'Contact Us', az: 'Bizimlə Əlaqə' },

  /* ---- shipping policy ---- */
  'pshipping.h1': { en: 'Shipping Policy', az: 'Çatdırılma Siyasəti' },
  'pshipping.processing_h2': { en: 'Processing Time', az: 'Hazırlanma Müddəti' },
  'pshipping.processing_p': {
    en: 'Every cap is made to order. Orders placed before 2:00 PM PT begin production the same day; otherwise production starts the next business day. Standard production takes 1–3 business days before your order ships.',
    az: 'Hər papaq sifarişlə hazırlanır. Saat 14:00-dan (PT) əvvəl verilən sifarişlərin istehsalı həmin gün başlayır; əks halda istehsal növbəti iş günü başlayır. Standart istehsal müddəti sifarişiniz göndərilməzdən əvvəl 1–3 iş günüdür.'
  },
  'pshipping.delivery_h2': { en: 'Delivery Timeframes', az: 'Çatdırılma Müddətləri' },
  'pshipping.delivery_li1': { en: 'United States: 2–5 business days after production', az: 'ABŞ: istehsaldan sonra 2–5 iş günü' },
  'pshipping.delivery_li2': { en: 'Canada: 4–8 business days after production', az: 'Kanada: istehsaldan sonra 4–8 iş günü' },
  'pshipping.delivery_li3': { en: 'International: 7–14 business days after production', az: 'Beynəlxalq: istehsaldan sonra 7–14 iş günü' },
  'pshipping.costs_h2': { en: 'Shipping Costs', az: 'Çatdırılma Xərcləri' },
  'pshipping.costs_p': {
    en: 'Shipping is free on orders over 150 ₼. Orders under 150 ₼ ship for a flat ₼8.90 rate within Azerbaijan. Shipping outside Azerbaijan is calculated at checkout based on destination and package weight.',
    az: '150 ₼-dən yuxarı sifarişlərdə çatdırılma pulsuzdur. 150 ₼-dən aşağı sifarişlər Azərbaycan daxilində sabit ₼8.90 qiymətə göndərilir. Azərbaycandan kənara çatdırılma ödəniş zamanı təyinat və bağlama çəkisinə əsasən hesablanır.'
  },
  'pshipping.customs_h2': { en: 'Customs &amp; International Orders', az: 'Gömrük və Beynəlxalq Sifarişlər' },
  'pshipping.customs_p': {
    en: 'International orders may be subject to customs duties and import taxes on arrival. These charges are set by your local customs authority and are the responsibility of the customer.',
    az: 'Beynəlxalq sifarişlər gəlişdə gömrük rüsumlarına və idxal vergilərinə cəlb oluna bilər. Bu xərclər yerli gömrük orqanınız tərəfindən müəyyən edilir və müştərinin məsuliyyətindədir.'
  },
  'pshipping.damaged_h2': { en: 'Damaged or Incorrect Items', az: 'Zədələnmiş və ya Səhv Göndərilən Məhsullar' },
  'pshipping.damaged_p': {
    en: "If your order arrives damaged, defective, or incorrect, contact us within 7 days of delivery with photos and your order number and we'll sort out a replacement or refund.",
    az: 'Sifarişiniz zədəli, qüsurlu və ya səhv gəlibsə, çatdırılmadan 7 gün ərzində şəkillər və sifariş nömrənizlə bizimlə əlaqə saxlayın, biz əvəzetmə və ya geri ödəmə ilə məsələni həll edəcəyik.'
  },
  'pshipping.tracking_h2': { en: 'Order Tracking', az: 'Sifarişin İzlənməsi' },
  'pshipping.tracking_p': {
    en: "You'll get an order confirmation email at checkout, and a tracking link by email as soon as your cap ships.",
    az: 'Ödəniş zamanı sifariş təsdiq e-poçtu alacaqsınız, papağınız göndəriləndə isə izləmə linki e-poçtla göndəriləcək.'
  },
  'pshipping.contact_p': {
    en: 'Questions about a shipment? Email <a href="mailto:support@example.com">support@example.com</a> — we typically respond within 1–2 business days.',
    az: 'Göndərmə ilə bağlı sualınız var? <a href="mailto:support@example.com">support@example.com</a> ünvanına yazın — adətən 1–2 iş günü ərzində cavab veririk.'
  },

  /* ---- returns policy ---- */
  'preturns.h1': { en: 'Returns &amp; Refunds Policy', az: 'Qaytarma və Geri Ödəmə Siyasəti' },
  'preturns.window_h2': { en: 'Returns Window', az: 'Qaytarma Müddəti' },
  'preturns.window_p': {
    en: 'We accept returns within 30 days of the delivery date. Items must be unworn, unwashed, in original condition, and in their original packaging, along with proof of purchase.',
    az: 'Çatdırılma tarixindən 30 gün ərzində qaytarmaları qəbul edirik. Məhsullar geyilməmiş, yuyulmamış, orijinal vəziyyətdə və orijinal qablaşdırmada olmalı, alış sənədi ilə birlikdə təqdim edilməlidir.'
  },
  'preturns.nonreturn_h2': { en: 'Non-Returnable Items', az: 'Qaytarıla Bilməyən Məhsullar' },
  'preturns.nonreturn_li1': { en: 'Worn, washed, or altered caps', az: 'Geyilmiş, yuyulmuş və ya dəyişdirilmiş papaqlar' },
  'preturns.nonreturn_li2': { en: 'Items returned beyond the 30-day window', az: '30 günlük müddətdən sonra qaytarılan məhsullar' },
  'preturns.nonreturn_li3': { en: 'Limited-drop colorways once marked final sale', az: '"Son satış" kimi qeyd olunmuş məhdud kolleksiya rəngləri' },
  'preturns.refund_h2': { en: 'Refund Processing', az: 'Geri Ödəmənin Emalı' },
  'preturns.refund_p': {
    en: "Once your return is received and inspected, approved refunds are issued to your original payment method within 5–10 business days. Original shipping costs are non-refundable; return shipping is on us if the return is due to our error, otherwise it's deducted from the refund.",
    az: 'Qaytarılan məhsul bizə çatıb yoxlanıldıqdan sonra, təsdiqlənmiş geri ödəmələr 5–10 iş günü ərzində ilkin ödəniş üsulunuza edilir. İlkin çatdırılma xərcləri geri qaytarılmır; qaytarma bizim səhvimizdən irəli gəlirsə, çatdırılma xərcini biz ödəyirik, əks halda bu xərc geri ödəmədən çıxılır.'
  },
  'preturns.exchange_h2': { en: 'Exchanges', az: 'Dəyişdirmə' },
  'preturns.exchange_p': {
    en: "Received a defective or incorrect cap? Contact us within 7 days of delivery and we'll arrange a free exchange.",
    az: 'Qüsurlu və ya səhv papaq aldınız? Çatdırılmadan 7 gün ərzində bizimlə əlaqə saxlayın, pulsuz dəyişdirmə təşkil edək.'
  },
  'preturns.intl_h2': { en: 'International Returns', az: 'Beynəlxalq Qaytarmalar' },
  'preturns.intl_p': {
    en: 'Customers outside the US are responsible for return shipping costs. Customs duties and taxes already paid are non-recoverable, and processing times vary by location.',
    az: 'ABŞ-dan kənarda olan müştərilər qaytarma çatdırılma xərclərinə görə məsuliyyət daşıyırlar. Artıq ödənilmiş gömrük rüsumları və vergilər geri qaytarılmır, emal müddəti məkana görə dəyişə bilər.'
  },
  'preturns.contact_p': {
    en: 'To start a return or ask a question, email <a href="mailto:support@example.com">support@example.com</a> with your order number.',
    az: 'Qaytarma başlatmaq və ya sual vermək üçün sifariş nömrənizlə <a href="mailto:support@example.com">support@example.com</a> ünvanına yazın.'
  },

  /* ---- privacy policy ---- */
  'pprivacy.h1': { en: 'Privacy Policy', az: 'Məxfilik Siyasəti' },
  'pprivacy.overview_h2': { en: 'Overview', az: 'Ümumi Baxış' },
  'pprivacy.overview_p': {
    en: 'KROKPA operates the KROKPA store to give you a straightforward shopping experience. This policy explains how we collect, use, and share information about you when you visit or buy from us.',
    az: 'KROKPA sadə alış-veriş təcrübəsi təqdim etmək üçün KROKPA mağazasını idarə edir. Bu siyasət saytımıza daxil olduğunuzda və ya bizdən alış-veriş etdiyinizdə məlumatlarınızı necə topladığımızı, istifadə etdiyimizi və paylaşdığımızı izah edir.'
  },
  'pprivacy.collect_h2': { en: 'Personal Information We Collect', az: 'Topladığımız Şəxsi Məlumatlar' },
  'pprivacy.collect_p': {
    en: "Depending on how you use our site, we may collect: contact details (name, address, phone, email), order and payment details (card information is entered directly into our payment processor's secure fields and never touches our servers), account information if you create one, and general device and usage data.",
    az: 'Saytımızdan necə istifadə etdiyinizdən asılı olaraq aşağıdakıları toplaya bilərik: əlaqə məlumatları (ad, ünvan, telefon, e-poçt), sifariş və ödəniş məlumatları (kart məlumatları birbaşa ödəniş təchizatçımızın təhlükəsiz sahələrinə daxil edilir və heç vaxt serverlərimizə çatmır), hesab yaratdığınız halda hesab məlumatları və ümumi cihaz və istifadə məlumatları.'
  },
  'pprivacy.source_h2': { en: 'Where We Get This Information', az: 'Bu Məlumatları Haradan Əldə Edirik' },
  'pprivacy.source_p': {
    en: 'Directly from you at checkout or account signup, automatically as you browse via cookies and analytics, and from the service providers who help us run the store.',
    az: 'Birbaşa sizdən ödəniş zamanı və ya hesab qeydiyyatında, cookie və analitika vasitəsilə saytda gəzərkən avtomatik olaraq, və mağazamızı idarə etməyə kömək edən xidmət təchizatçılarından.'
  },
  'pprivacy.use_h2': { en: 'How We Use Your Information', az: 'Məlumatlarınızdan Necə İstifadə Edirik' },
  'pprivacy.use_li1': { en: 'To process and fulfill your orders', az: 'Sifarişlərinizi emal etmək və yerinə yetirmək üçün' },
  'pprivacy.use_li2': { en: "To send order updates and, where you've opted in, marketing emails", az: 'Sifariş yeniliklərini göndərmək və razılıq verdiyiniz halda marketinq e-poçtları üçün' },
  'pprivacy.use_li3': { en: 'For fraud prevention and account security', az: 'Fırıldaqçılığın qarşısını almaq və hesab təhlükəsizliyi üçün' },
  'pprivacy.use_li4': { en: 'To provide customer support', az: 'Müştəri dəstəyi təqdim etmək üçün' },
  'pprivacy.use_li5': { en: 'To comply with legal obligations', az: 'Qanuni öhdəlikləri yerinə yetirmək üçün' },
  'pprivacy.share_h2': { en: 'Third-Party Sharing', az: 'Üçüncü Tərəflərlə Paylaşım' },
  'pprivacy.share_p': {
    en: "We share information with the vendors who help us operate: our payment processor (Stripe) to securely process payments, our shipping partners to deliver orders, and analytics providers to understand site usage. We don't sell your personal information.",
    az: 'Məlumatları fəaliyyətimizə kömək edən təchizatçılarla paylaşırıq: ödənişləri təhlükəsiz şəkildə emal etmək üçün ödəniş təchizatçımız (Stripe), sifarişləri çatdırmaq üçün çatdırılma tərəfdaşlarımız və sayt istifadəsini anlamaq üçün analitika təchizatçıları. Şəxsi məlumatlarınızı satmırıq.'
  },
  'pprivacy.rights_h2': { en: 'Your Rights', az: 'Hüquqlarınız' },
  'pprivacy.rights_p': {
    en: 'Depending on where you live, you may have the right to access, correct, delete, or receive a copy of your personal information. To exercise these rights, contact us at <a href="mailto:support@example.com">support@example.com</a>.',
    az: 'Yaşadığınız yerdən asılı olaraq, şəxsi məlumatlarınıza baxmaq, onları düzəltmək, silmək və ya surətini almaq hüququnuz ola bilər. Bu hüquqlardan istifadə etmək üçün <a href="mailto:support@example.com">support@example.com</a> ünvanı ilə əlaqə saxlayın.'
  },
  'pprivacy.children_h2': { en: "Children's Privacy", az: 'Uşaqların Məxfiliyi' },
  'pprivacy.children_p': {
    en: 'KROKPA is not directed at children, and we do not knowingly collect personal information from anyone under 13.',
    az: 'KROKPA uşaqlara yönəlməyib və biz bilərəkdən 13 yaşından kiçik hər hansı şəxsdən şəxsi məlumat toplamırıq.'
  },
  'pprivacy.contact_p': {
    en: 'Questions about this policy can be sent to <a href="mailto:support@example.com">support@example.com</a> or mailed to the address above.',
    az: 'Bu siyasətlə bağlı suallarınızı <a href="mailto:support@example.com">support@example.com</a> ünvanına göndərə və ya yuxarıdakı ünvana poçtla yolla bilərsiniz.'
  },

  /* ---- terms of service ---- */
  'pterms.h1': { en: 'Terms of Service', az: 'İstifadə Şərtləri' },
  'pterms.overview_h2': { en: 'Overview', az: 'Ümumi Baxış' },
  'pterms.overview_p': {
    en: "By accessing or purchasing from this site, you agree to these Terms of Service. If you don't agree with any part, please don't use the site.",
    az: 'Bu saytdan istifadə edərək və ya alış-veriş edərək bu İstifadə Şərtlərini qəbul etmiş olursunuz. Hər hansı bir hissə ilə razı deyilsinizsə, xahiş edirik saytdan istifadə etməyin.'
  },
  'pterms.use_h2': { en: 'Use of the Site', az: 'Saytdan İstifadə' },
  'pterms.use_p': {
    en: 'You agree to use this site only for lawful purposes and not to attempt to disrupt, hack, or misuse it. We may suspend access for anyone who violates these terms.',
    az: 'Bu saytdan yalnız qanuni məqsədlər üçün istifadə etməyi, ona zərər vermək, hack etmək və ya sui-istifadə etməyə cəhd göstərməməyi qəbul edirsiniz. Bu şərtləri pozan hər kəsin girişini dayandıra bilərik.'
  },
  'pterms.products_h2': { en: 'Products &amp; Pricing', az: 'Məhsullar və Qiymətlər' },
  'pterms.products_p': {
    en: "All caps are made to order in limited batches. We reserve the right to limit quantities, discontinue a colorway, or correct pricing errors at any time. Prices are listed in USD and don't include applicable taxes or duties.",
    az: 'Bütün papaqlar məhdud partiyalarla sifarişlə hazırlanır. Miqdarı məhdudlaşdırmaq, hər hansı rəngi istehsaldan çıxarmaq və ya qiymət səhvlərini istənilən vaxt düzəltmək hüququnu özümüzdə saxlayırıq. Qiymətlər ABŞ dolları ilə göstərilib və müvafiq vergi və rüsumları əhatə etmir.'
  },
  'pterms.orders_h2': { en: 'Orders &amp; Payment', az: 'Sifarişlər və Ödəniş' },
  'pterms.orders_p': {
    en: "Payment is processed securely through Stripe at the time of order. We reserve the right to refuse or cancel an order for reasons including suspected fraud, pricing errors, or inventory issues — if we cancel, you'll be refunded in full.",
    az: 'Ödəniş sifariş zamanı Stripe vasitəsilə təhlükəsiz şəkildə emal olunur. Şübhəli fırıldaqçılıq, qiymət səhvləri və ya anbar problemləri kimi səbəblərə görə sifarişi rədd etmək və ya ləğv etmək hüququnu özümüzdə saxlayırıq — ləğv etdiyimiz halda, ödənişiniz tam şəkildə geri qaytarılacaq.'
  },
  'pterms.ip_h2': { en: 'Intellectual Property', az: 'Əqli Mülkiyyət' },
  'pterms.ip_p': {
    en: 'The KROKPA name, logo, claw mark, and all site content are the property of KROKPA and may not be reproduced without permission.',
    az: 'KROKPA adı, loqosu, caynaq işarəsi və saytın bütün məzmunu KROKPA-a məxsusdur və icazəsiz təkrar istifadə edilə bilməz.'
  },
  'pterms.liability_h2': { en: 'Limitation of Liability', az: 'Məsuliyyətin Məhdudlaşdırılması' },
  'pterms.liability_p': {
    en: 'KROKPA is not liable for indirect, incidental, or consequential damages arising from your use of the site or products, to the fullest extent permitted by law.',
    az: 'Qanunla icazə verilən maksimum həddə, KROKPA saytdan və ya məhsullardan istifadənizdən yaranan dolayı, təsadüfi və ya nəticə xarakterli zərərlərə görə məsuliyyət daşımır.'
  },
  'pterms.law_h2': { en: 'Governing Law', az: 'Tətbiq Olunan Qanunvericilik' },
  'pterms.law_p': {
    en: 'These terms are governed by the laws of the State of California, without regard to conflict-of-law principles.',
    az: 'Bu şərtlər, qanunların ziddiyyəti prinsiplərinə baxmayaraq, Kaliforniya ştatının qanunları ilə tənzimlənir.'
  },
  'pterms.changes_h2': { en: 'Changes to These Terms', az: 'Bu Şərtlərə Dəyişikliklər' },
  'pterms.changes_p': {
    en: 'We may update these terms from time to time. Continued use of the site after changes means you accept the updated terms.',
    az: 'Bu şərtləri vaxtaşırı yeniləyə bilərik. Dəyişikliklərdən sonra saytdan istifadəyə davam etməyiniz yenilənmiş şərtləri qəbul etdiyiniz anlamına gəlir.'
  },
  'pterms.contact_p': {
    en: 'Questions about these terms? Email <a href="mailto:support@example.com">support@example.com</a>.',
    az: 'Bu şərtlərlə bağlı sualınız var? <a href="mailto:support@example.com">support@example.com</a> ünvanına yazın.'
  }
};

/* ---- product catalog translations (name kept as styled EN product name) ---- */
const PRODUCT_DICT = {
  'void-tee': { tagline: 'Ağır qara. Artıq heç nə yox.', desc: 'KROKPA nişanı qəsdən sakit saxlanılmış ağır oversize futbolka. Sıx pambıq, aşağı düşən çiyinlər və təmiz streetwear silueti.', fit: 'Oversize, uniseks', material: '240qsm ağır pambıq', origin: 'Sifarişlə hazırlanır' },
  'acid-mark-tee': { tagline: 'Nişan, sonuna qədər gücləndirilib.', desc: 'Sinə üzərində fərqləndirici üç xətli nişanı olan yuyulmuş-qara ağır pambıq. Hər yuyulmadan sonra daha yaxşı görünmək üçün hazırlanıb.', fit: 'Oversize, uniseks', material: '240qsm yuyulmuş pambıq', origin: 'Sifarişlə hazırlanır' },
  'chrome-tee': { tagline: 'Soyuq qrafika. Ağır hiss.', desc: 'Metalik üslublu KROKPA qrafikası olan kömür-boz rəngli ağır futbolka. Məhdud istehsal həcmi, təkrar istehsal planlaşdırılmır.', fit: 'Oversize, uniseks', material: '240qsm ağır pambıq', origin: 'Məhdud say' },
  'bone-tee': { tagline: 'Krem rəng, təmiz, rahat oturan.', desc: 'Minimal qara sinə nişanı olan isti sümük rəngli futbolka. Rahat geyilir, qəsdən sadə saxlanılıb və rahat oversize kəsimlə hazırlanıb.', fit: 'Rahat oversize', material: '220qsm daranmış pambıq', origin: 'Sifarişlə hazırlanır' },
  'riot-tee': { tagline: 'Qırmızı siqnal. Qara baza.', desc: 'Kəskin qırmızı KROKPA qrafikası olan tünd qara pambıq. Qarışıqlıq yerinə kontrast ətrafında dizayn edilmiş daha "səsli" bir model.', fit: 'Oversize, uniseks', material: '240qsm ağır pambıq', origin: 'Sifarişlə hazırlanır' },
  'static-tee': { tagline: 'Maneə üçün hazırlanıb.', desc: 'Turşu-yaşıl təhrif qrafikası olan kömür-boz futbolka. Ağır parça və strukturlu yaxa siluetin kəskin qalmasını təmin edir.', fit: 'Oversize, uniseks', material: '240qsm pambıq', origin: 'Sifarişlə hazırlanır' },
  'signal-tee': { tagline: 'Siqnalı bərk saxla.', desc: 'Yığcam qara-turşu sinə qrafikası olan krem-ağ ağır futbolka. Uzaqdan minimal, yaxından detallı.', fit: 'Rahat oversize', material: '220qsm pambıq', origin: 'Sifarişlə hazırlanır' },
  'night-run-tee': { tagline: 'Qaranlıqdan sonra, qəsdən.', desc: 'Əks etdirici üslublu gümüşü qrafika və kiçik turşu aksenti olan yuyulmuş kömür-boz rəng. Gec gecələr və gündəlik geyim üçün hazırlanıb.', fit: 'Oversize, uniseks', material: '230qsm yuyulmuş pambıq', origin: 'Sifarişlə hazırlanır' },
  'raw-tee': { tagline: 'Cilalanmaya ehtiyac yoxdur.', desc: 'Təbii pambıq tonu üzərində sərt qara qrafika. Kolleksiyadakı ən sadə model, oversize kəsilib və gündəlik geyim üçün hazırlanıb.', fit: 'Rahat oversize', material: '220qsm təbii pambıq', origin: 'Sifarişlə hazırlanır' },
  'ghost-tee': { tagline: 'Aşağı kontrast. Yüksək təsir.', desc: 'Tonlu "xəyal" loqosu olan solmuş boz futbolka. Yumşaq vizual dil, ağır konstruksiya və rahat kəsim.', fit: 'Oversize, uniseks', material: '230qsm hazır məhsul boyalı pambıq', origin: 'Sifarişlə hazırlanır' },
  'green-room-tee': { tagline: 'Səs-küysüz turşu.', desc: 'Təmiz turşu-yaşıl qrafikası olan tünd meşə-yaşılı pambıq. Gündəlik geyimdə də işləyən güclü rəng seçimi.', fit: 'Oversize, uniseks', material: '240qsm ağır pambıq', origin: 'Sifarişlə hazırlanır' },
  'mono-tee': { tagline: 'Qara. Ağ. Bitdi.', desc: 'Təmiz həndəsi kompozisiyada düzülmüş KROKPA yazı loqosu olan monoxrom ağır futbolka.', fit: 'Oversize, uniseks', material: '240qsm ağır pambıq', origin: 'Sifarişlə hazırlanır' }
};

function krokpaLang() {
  try { return localStorage.getItem(LANG_KEY) || 'en'; }
  catch (e) { return 'en'; }
}

function krokpaSetLang(lang) {
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  krokpaApply();
}

/* Translate a static UI string. Supports {placeholders}. */
function t(key, vars) {
  const entry = DICT[key];
  if (!entry) return key;
  let str = entry[krokpaLang()] || entry.en;
  if (vars) Object.keys(vars).forEach(k => { str = str.replace(`{${k}}`, vars[k]); });
  return str;
}

/* Merge Azerbaijani product copy onto a PRODUCTS entry when AZ is active. */
function trProduct(p) {
  if (krokpaLang() !== 'az') return p;
  const az = PRODUCT_DICT[p.id];
  if (!az) return p;
  return { ...p, tagline: az.tagline, desc: az.desc, facts: { fit: az.fit, material: az.material, origin: az.origin } };
}

function trBadge(badge) {
  if (!badge) return badge;
  return badge === 'LIMITED' ? t('badge.limited') : badge === 'NEW' ? t('badge.new') : badge;
}

function krokpaApply() {
  const lang = krokpaLang();
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (DICT[key]) el.innerHTML = DICT[key][lang] || DICT[key].en;
  });
  document.querySelectorAll('[data-lang-btn]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang-btn') === lang);
  });
  document.dispatchEvent(new CustomEvent('krokpa:langchange', { detail: { lang } }));
}

function krokpaLangSwitchHTML() {
  return `<div class="lang-switch">
    <button type="button" data-lang-btn="en">EN</button>
    <button type="button" data-lang-btn="az">AZ</button>
  </div>`;
}

function initLangSwitcher() {
  document.querySelectorAll('[data-lang-switch-slot]').forEach(slot => {
    slot.innerHTML = krokpaLangSwitchHTML();
  });
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => krokpaSetLang(btn.getAttribute('data-lang-btn')));
  });
  krokpaApply();
}

document.addEventListener('DOMContentLoaded', initLangSwitcher);
