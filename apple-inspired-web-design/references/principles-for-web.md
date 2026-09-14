# İlkelerden web kararlarına

## Kaynak ve güven düzeyi

Kaynak: paket oluşturulurken çalışma klasöründe bulunan `PRINCIPLES.md`, “Apple Tasarım Sistemi, İlkeleri ve Renk Kütüphanesi Kılavuzu”. Kaynak dosyanın SHA-256 özeti: `4360a2972918b680ec6722ddfa9113ceb7e24fe464a1354106b767edb3bbdfcd`.

Belgede birincil kaynak bağlantıları veya hangi işletim sistemi sürümünün esas alındığı belirtilmiyor. Bu paket hazırlanırken haricî Apple belgeleri veya adı geçen çalışmalar doğrulanmadı. Aşağıdaki öneriler kaynak belgenin web için editoryal uyarlamasıdır; Apple'a ait normatif gereksinimler değildir. Paket çalışmak için özgün dosyanın aynı klasörde bulunmasına ihtiyaç duymaz.

Üç tür bilgiyi ayır:

- **Tasarım ilkesi:** Amaç, tutarlılık, geri bildirim gibi karar vermeye yarayan rehber.
- **Kaynak değeri:** Belgede geçen platform ölçüsü, renk veya animasyon parametresi; bağlamı doğrulanmadan standart kabul edilmez.
- **Web uyarlaması:** Responsive düzen, semantik HTML, font fallback'i ve tercih sorguları gibi bu paketin önerileri.

## Sekiz ilkenin uygulaması

| Kaynaktaki ilke | Web'deki karar | İncelenebilir sonuç |
| --- | --- | --- |
| Purpose / Amaç | İçeriği ana kullanıcı görevine göre sırala. | Kullanıcı başlangıç noktasını ve temel eylemi ayırt edebilir. |
| Agency / Kullanıcı iradesi | İptal, geri dönüş ve düzeltme yollarını görünür tut. | Kullanıcı akıştan çıkabilir; işlem sonucu ve geri alınabilirliği anlaşılır. |
| Responsibility / Sorumluluk | İzin, ücret ve veri kullanımını dürüstçe açıkla. | İzin nedeni ilgili eylemle birlikte sunulur; aldatıcı varsayılan yoktur. |
| Familiarity / Tanıdıklık | Yerleşik web kalıplarını ve anlamlı etiketleri kullan. | Link gezinir, buton eylem yapar; ikonların anlamı tahmine bırakılmaz. |
| Flexibility / Esneklik | Girdi türü, ekran, metin boyutu ve tercihleri destekle. | Temel görev fareye, hover'a veya sabit genişliğe bağımlı değildir. |
| Simplicity / Sadelik | Önceliklendir; gereksiz tekrarları kaldır. | Gerekli bilgi yalnızca minimal görünmek için gizlenmez. |
| Craft / Özen | Hizalama, durumlar, metin kırılması ve geçiş ayrıntılarını düzelt. | Uzun başlık, yüklenme, boş sonuç ve hata durumları bozulmaz. |
| Delight / Memnuniyet | Hızlı, anlaşılır ve saygılı etkileşimi öncele. | Süs animasyonları görevi geciktirmez; gereksiz sürpriz yoktur. |

Bu sekiz başlığın güncel HIG'nin resmî ve eksiksiz listesi olduğu iddiasını yineleme; bunun için ayrı doğrulama gerekir.

## Tarihsel ilkeler ve Rams

Kaynakta estetik bütünlük, tutarlılık, doğrudan manipülasyon, geri bildirim, metaforlar ve kullanıcı kontrolü birlikte ele alınıyor. Web uyarlaması:

- Üretkenlik sayfasıyla eğlence sayfasına aynı görünümü dayatma.
- Aynı işlem aynı bileşen, ad ve davranışla sunulsun.
- Sürükleme varsa sürüklemeden çalışan alternatif de sağla; klavye veya butonlarla sıralama örneğin.
- İşleme anında anlaşılır yanıt ver; ağ işlemi bitmeden başarı gösterme.
- Dosya veya sepet gibi metaforları anlaşılırlık sağladığında kullan, fiziksel nesnenin bütün görünümünü kopyalama.

Rams'ın kaynakta listelenen on ilkesi şu sorulara dönüştürülebilir:

1. **Yenilik:** Yeni yaklaşım gerçek bir kullanıcı sorununu çözüyor mu?
2. **Kullanışlılık:** Ana görevi kolaylaştırıyor mu?
3. **Estetik:** Görsel bütünlük ürünün kullanımına hizmet ediyor mu?
4. **Anlaşılabilirlik:** İçerik ve denetimler ne yaptıklarını anlatıyor mu?
5. **Göze batmama:** Arayüz içerikten daha fazla dikkat istiyor mu?
6. **Dürüstlük:** Gerçekte olmayan fayda, sonuç veya sosyal kanıt sunuluyor mu?
7. **Uzun ömür:** Geçici bir efekt olmadan da düzen işe yarıyor mu?
8. **Ayrıntılarda tutarlılık:** Kenar durumları ana ekran kadar özenli mi?
9. **Kaynak sorumluluğu:** Gereksiz görsel, video, JavaScript veya sürekli animasyon ekleniyor mu? Ölçmeden çevresel kazanç iddia etme.
10. **Daha az, daha iyi:** Bir öğeyi çıkarmak görevi zayıflatmadan karmaşıklığı azaltıyor mu?

Apple, Braun ve Rams arasındaki tarihsel etki anlatısını bu pratik kontrol sorularından ayrı tut; bu paket tarih araştırması değildir.

## Yerleşim ve algısal gruplama

Kaynağın Gestalt başlıklarını doğrudan kullanılabilir kararlar olarak ele al:

- **Yakınlık:** Aynı grubun iç boşluğu gruplar arası boşluktan genellikle küçüktür.
- **Benzerlik:** Görsel benzerlik aynı rolü veya davranışı temsil etsin.
- **Devamlılık:** Hizalanmış listeler ve tutarlı sütunlar taramayı kolaylaştırsın.
- **Kapanma:** Bir grubu sınır, boşluk veya yüzeyle anlaşılır kıl; zorunlu olarak kart çizme.
- **Şekil/zemin:** İçeriği kontrast ve katmanla ayır. Blur bunun önkoşulu değildir.
- **Ortak hareket:** Birlikte hareket eden öğelerin ilişkisi anlamlı olsun; azaltılmış hareket altında ilişki yine anlaşılabilsin.

Kaynakta Reber, Schwarz ve Winkielman (2004) adıyla anılan akıcılık açıklaması burada bağımsız doğrulanmış bir etki büyüklüğü olarak kullanılmaz. “Bu düzen beyni şu kadar rahatlatır” gibi ölçülmemiş sonuçlar üretme.

### Ölçülerin web'e çevrilmesi

| Kaynaktaki öneri | Web'de kullanım |
| --- | --- |
| 4/8 noktalı ölçek | `rem` tabanlı boşluk tokenlarına başlangıç; her ölçüyü bu ızgaraya zorlamama. |
| iPhone 16pt, iPad 20pt kenar boşluğu | Cihaz adına bağlı sabit değer yerine akışkan sayfa padding'i ve içerik genişliği. |
| Kart içi 16/20pt | İçerik yoğunluğuna göre ayarlanan ortak bileşen boşluğu. |
| 44 × 44pt dokunma hedefi | Dokunma için 44 × 44 CSS px tercih hedefi; birim eşitliği iddiası değil. |
| Sabit çentik, home bar ve tab bar yükseklikleri | Web'e kopyalama. Gerekiyorsa `env(safe-area-inset-bottom, 0px)` gibi tarayıcı değerleri. |

CSS `pt`, iOS yerleşim noktası, CSS px ve fiziksel ekran pikseli aynı kavram değildir. Yazı ve boşluklarda göreli birimler kullan; kök font boyutunu kullanıcı tercihini etkisizleştirmek için sabitleme.

## Tipografi

Kaynak, Large Title 34/41, Title 1 28/34, Title 2 22/28, Title 3 20/25, Headline ve Body 17/22, Callout 16/21, Subhead 15/20, Footnote 13/18, Caption 1 12/16 ve Caption 2 11/13 değerlerini iOS point cinsinden sunuyor. Bunlar web'in zorunlu font veya satır yüksekliği ölçeği değildir.

- Önce projenin marka fontunu koru. Kısıt yoksa yerel `system-ui` ailesini kullan; SF Pro dosyasını indirip dağıtma.
- Başlık, gövde ve yardımcı metin rollerini tanımla. Mobil ve masaüstü başlıkları için gerekirse sınırlı `clamp()` kullan; sabit `vw` ile erişilebilir büyümeyi engelleme.
- Kaynaktaki tracking değerlerini başka fonta taşıma. Font, dil ve boyutta gerçek okunabilirliği incele.
- Gövde satır yüksekliğini içerik için yeterli tut; Türkçe karakterler, çok satırlı etiketler ve uzun sayılarla dene.
- Metin büyüyünce kesilen sabit yüksekliklerden kaçın. Küçük meta metinlerle zayıf kontrastı birleştirme.

## Köşeler ve geometri

Kaynak G1/G2 sürekliliği, süperelips ve Figma %60 smoothing üzerinden yuvarlatmayı açıklıyor. Süperelips, Euler spirali ve Apple'ın gerçek köşe uygulamasını birbirinin kanıtlanmış eşdeğeri gibi sunma. %60 değerini tüm iOS veya web bileşenlerinin zorunlu standardı sayma.

- Standart `border-radius`, çoğu web bileşeni için yeterli ve meşru varsayılandır.
- Birkaç rol tabanlı radius kullan; her paneli pill veya aynı büyük radius yapma.
- İç/dış köşe ilişkisinde `dış radius ≈ iç radius + aralık` tutarlı paralel sınırlar için rehberdir; border kalınlığı, asimetrik padding ve farklı şekillerde gözle kontrol et.
- Özel sürekli köşe ancak tasarım gerektiriyorsa ve tarayıcı desteği doğrulanabiliyorsa progressive enhancement olarak eklenir. Focus halkasını veya içeriği kesen clip-path kullanma.

Bar & Neta (2006/2007) ve `p < 0.03` iddiaları kaynak belgedeki atıflardır; çalışmalar bu paket için incelenmedi. “Keskin köşeler korku yaratır”, “eğri köşeler güven sağlar” veya “G2 dönüşümü artırır” sonuçlarını kullanıcı arayüzleri için kurulmuş nedensellik gibi aktarma.

## Hareket

Kaynağın fizik modeli `m·x'' + c·x' + k·x = 0`; sönümleme oranı yaklaşık 1 veya 0.75–0.80, response değeri 0.3–0.45 saniye olarak veriliyor. Bunlar kaynakta sunulan ayarlardır, bütün Apple animasyonlarının ölçülmüş parametreleri değildir. Kütüphanelerde `response`, `duration` ve `stiffness` aynı parametreler değildir.

- Hover/focus gibi küçük durum değişimleri için kısa CSS geçişleri yeterlidir.
- Doğrudan manipülasyonda devam eden harekete yeni kullanıcı girdisi cevap verebilmeli.
- Yay gerekiyorsa projede zaten bulunan kütüphanenin belgelenmiş parametrelerini kullan; farklı API'lere sayı kopyalama.
- Kaynaktaki rubber-banding ve momentum projeksiyonu ifadeleri bağlam, birim ve sınır koşulları verilmediğinden üretime hazır algoritmalar sayılmaz.
- Scroll-jacking, zorunlu sekme ve giriş animasyonları ekleme. Tarayıcının yerel kaydırmasını sırf fizik taklidi için değiştirme.
- `prefers-reduced-motion: reduce` CSS tokenlarını tüketen geçişlerde işe yarar; bağımsız JS hareketlerini otomatik olarak durdurmaz.

## Dokunsal geri bildirim ve cam

Core Haptics success/warning/error, impact ve selection sınıfları native platform bağlamıdır. Web sayfası bunların varlığını veya erişilebilir olduğunu varsayamaz. Anlaşılır görsel ve metinsel geri bildirim sağla; titreşim veya ses zorunlu değildir ve açık kapsam olmadan eklenmez.

Kaynağın visionOS ve Liquid Glass anlatıları bir web sayfasında saydam pencere zorunluluğu oluşturmaz. Camı içerik üzerinde okunurluk, kaydırma performansı ve fallback ile birlikte değerlendir. Sayfa tabanı çoğu durumda opak kalabilir.
