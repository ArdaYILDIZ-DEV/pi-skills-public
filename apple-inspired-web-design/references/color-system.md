# Renk sistemi: kaynak kaydı ve web uyarlaması

## Bu tabloların statüsü

Aşağıdaki altı tablo `PRINCIPLES.md` dosyasının 2.1–2.6 bölümlerinden değerleri değiştirilmeden aktarılmıştır. Kaynak kökeni ve dosya özeti [ilkeler rehberindedir](principles-for-web.md). “Tüm”, “kesin” veya “resmî” oldukları iddiası bu paket tarafından doğrulanmış değildir. İşletim sistemi sürümü, gamut ve gözlem koşulları belirtilmediğinden bunları güncel Apple API değerleri olarak sunma.

Tablodaki kullanım açıklamaları da kaynak belgenin yorumlarıdır; tarayıcı için normatif atama değildir. Özellikle düşük opaklıklı etiket ve placeholder renkleri erişilebilir aktif metin varsayılanı olarak kullanılamaz. “Yüksek kontrast” başlığı, her zemin ve kullanımda WCAG uygunluğu garantilemez.

Bu arşiv paleti ile [web token başlangıcı](../assets/web-tokens.css) farklı amaçlara hizmet eder: ilki kaynak değerlerini korur, ikincisi seçilmiş roller için uyarlanmış bir başlangıçtır. CSS dosyası bütün tabloyu uygulamayı veya Apple'ın native dinamik renk davranışını taklit etmeyi amaçlamaz.

## Kaynak 2.1: Sistem vurgu renkleri

| Renk İsmi | Varsayılan Açık Mod (Hex / RGB) | Varsayılan Koyu Mod (Hex / RGB) | Yüksek Kontrast Açık Mod (Hex / RGB) | Yüksek Kontrast Koyu Mod (Hex / RGB) |
| :--- | :--- | :--- | :--- | :--- |
| **Blue (Mavi)** | `#0088FF`<br>`rgb(0, 136, 255)` | `#0091FF`<br>`rgb(0, 145, 255)` | `#1E6EF4`<br>`rgb(30, 110, 244)` | `#5CB8FF`<br>`rgb(92, 184, 255)` |
| **Green (Yeşil)** | `#34C759`<br>`rgb(52, 199, 89)` | `#30D158`<br>`rgb(48, 209, 88)` | `#008932`<br>`rgb(0, 137, 50)` | `#4AD968`<br>`rgb(74, 217, 104)` |
| **Indigo (Çivit)** | `#6155F5`<br>`rgb(97, 85, 245)` | `#6D7CFF`<br>`rgb(109, 124, 255)` | `#564ADE`<br>`rgb(86, 74, 222)` | `#A7AAFF`<br>`rgb(167, 170, 255)` |
| **Orange (Turuncu)** | `#FF8D28`<br>`rgb(255, 141, 40)` | `#FF9230`<br>`rgb(255, 146, 48)` | `#C55300`<br>`rgb(197, 83, 0)` | `#FFA056`<br>`rgb(255, 160, 86)` |
| **Pink (Pembe)** | `#FF2D55`<br>`rgb(255, 45, 85)` | `#FF375F`<br>`rgb(255, 55, 95)` | `#E7124D`<br>`rgb(231, 18, 77)` | `#FF8AC4`<br>`rgb(255, 138, 196)` |
| **Purple (Mor)** | `#CB30E0`<br>`rgb(203, 48, 224)` | `#DB34F2`<br>`rgb(219, 52, 242)` | `#B02FC2`<br>`rgb(176, 47, 194)` | `#EA8DFF`<br>`rgb(234, 141, 255)` |
| **Red (Kırmızı)** | `#FF383C`<br>`rgb(255, 56, 60)` | `#FF4245`<br>`rgb(255, 66, 69)` | `#E9152D`<br>`rgb(233, 21, 45)` | `#FF6165`<br>`rgb(255, 97, 101)` |
| **Teal (Camgöbeği)** | `#00C3D0`<br>`rgb(0, 195, 208)` | `#00D2E0`<br>`rgb(0, 210, 224)` | `#008198`<br>`rgb(0, 129, 152)` | `#3BDDEC`<br>`rgb(59, 221, 236)` |
| **Yellow (Sarı)** | `#FFCC00`<br>`rgb(255, 204, 0)` | `#FFD600`<br>`rgb(255, 214, 0)` | `#A16A00`<br>`rgb(161, 106, 0)` | `#FEDF43`<br>`rgb(254, 223, 67)` |
| **Mint (Nane)** | `#00C8B3`<br>`rgb(0, 200, 179)` | `#00DAC3`<br>`rgb(0, 218, 195)` | `#008575`<br>`rgb(0, 133, 117)` | `#54DFC3`<br>`rgb(84, 223, 203)` |
| **Cyan (Açık Mavi)** | `#00C0E8`<br>`rgb(0, 192, 232)` | `#3CD3FE`<br>`rgb(60, 211, 254)` | `#007EAE`<br>`rgb(0, 126, 174)` | `#6DD9FF`<br>`rgb(109, 217, 255)` |
| **Brown (Kahve)** | `#AC7F5E`<br>`rgb(172, 127, 94)` | `#B78A66`<br>`rgb(183, 138, 102)` | `#956D51`<br>`rgb(149, 109, 81)` | `#DBA679`<br>`rgb(219, 166, 121)` |

## Kaynak 2.2: Sistem grileri

| Gri Seviyesi | Varsayılan Açık Mod | Varsayılan Koyu Mod | Yüksek Kontrast Açık | Yüksek Kontrast Koyu | Kullanım Amacı |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **systemGray** | `#8E8E93`<br>`rgb(142, 142, 147)` | `#8E8E93`<br>`rgb(142, 142, 147)` | `#6C6C70`<br>`rgb(108, 108, 112)` | `#AEAEB2`<br>`rgb(174, 174, 178)` | Nötr referans taban grisi |
| **systemGray2** | `#AEAEB2`<br>`rgb(174, 174, 178)` | `#636366`<br>`rgb(99, 99, 102)` | `#8E8E93`<br>`rgb(142, 142, 147)` | `#7C7C80`<br>`rgb(124, 124, 128)` | İkincil sınır çizgileri, hafif konturlar |
| **systemGray3** | `#C7C7CC`<br>`rgb(199, 199, 204)` | `#48484A`<br>`rgb(72, 72, 74)` | `#AEAEB2`<br>`rgb(174, 174, 178)` | `#545456`<br>`rgb(84, 84, 86)` | Pasif buton zeminleri, ikincil dolgular |
| **systemGray4** | `#D1D1D6`<br>`rgb(209, 209, 214)` | `#3A3A3C`<br>`rgb(58, 58, 60)` | `#BCBCC0`<br>`rgb(188, 188, 192)` | `#444446`<br>`rgb(68, 68, 70)` | Gruplanmış aralıklar, form ayrım hatları |
| **systemGray5** | `#E5E5EA`<br>`rgb(229, 229, 234)` | `#2C2C2E`<br>`rgb(44, 44, 46)` | `#D8D8DC`<br>`rgb(216, 216, 220)` | `#363638`<br>`rgb(54, 54, 56)` | Arama çubukları, metin girdi alanları |
| **systemGray6** | `#F2F2F7`<br>`rgb(242, 242, 247)` | `#1C1C1E`<br>`rgb(28, 28, 30)` | `#EBEBF0`<br>`rgb(235, 235, 240)` | `#242426`<br>`rgb(36, 36, 38)` | En açık arka plan / En koyu yüzey katmanı |

## Kaynak 2.3: Arka plan hiyerarşisi

| Belirteç (Token) | Açık Mod Değeri | Koyu Mod Değeri | Açıklama ve Kullanım |
| :--- | :--- | :--- | :--- |
| `systemBackground` | `#FFFFFF` (Saf Beyaz) | `#000000` (Saf Siyah) | Ana ekranın veya sayfanın genel tabanı |
| `secondarySystemBackground` | `#F2F2F7` | `#1C1C1E` | Taban üzerindeki kartlar ve gruplar |
| `tertiarySystemBackground` | `#FFFFFF` | `#2C2C2E` | Kartların içine yerleşen ikincil panel/kutular |
| `systemGroupedBackground` | `#F2F2F7` | `#000000` | Gruplanmış liste/tablo görünümünün tabanı |
| `secondarySystemGroupedBackground` | `#FFFFFF` | `#1C1C1E` | Gruplanmış tablodaki hücrelerin/kartların zemini |
| `tertiarySystemGroupedBackground` | `#F2F2F7` | `#2C2C2E` | Gruplanmış tablodaki alt hücre/girdi zeminleri |

## Kaynak 2.4: Metin ve içerik

| Belirteç (Token) | Açık Mod Tanımı | Koyu Mod Tanımı | Anlamsal Rolü |
| :--- | :--- | :--- | :--- |
| `label` | `rgba(0, 0, 0, 1.0)` / `#000000` | `rgba(255, 255, 255, 1.0)` / `#FFFFFF` | Birincil başlıklar ve ana içerik metni |
| `secondaryLabel` | `rgba(60, 60, 67, 0.60)` / `#3C3C4399` | `rgba(235, 235, 245, 0.60)` / `#EBEBF599` | Alt başlıklar, açıklamalar, meta veriler |
| `tertiaryLabel` | `rgba(60, 60, 67, 0.30)` / `#3C3C434D` | `rgba(235, 235, 245, 0.30)` / `#EBEBF54D` | Pasif etiketler, girdi ipuçları (hints) |
| `quaternaryLabel` | `rgba(60, 60, 67, 0.18)` / `#3C3C432E` | `rgba(235, 235, 245, 0.18)` / `#EBEBF52E` | Su damgası, devre dışı elemanlar |
| `placeholderText` | `rgba(60, 60, 67, 0.30)` | `rgba(235, 235, 245, 0.30)` | Form alanlarındaki yer tutucu metinler |
| `link` | `#007AFF` / `rgb(0, 122, 255)` | `#0984FF` / `rgb(9, 132, 255)` | Tıklanabilir bağlantı metinleri |
| `separator` | `rgba(60, 60, 67, 0.29)` | `rgba(84, 84, 88, 0.60)` | Alttaki içeriğin hafifçe sızdığı ince ayırıcı |
| `opaqueSeparator` | `#C6C6C8` / `rgb(198, 198, 200)` | `#38383A` / `rgb(56, 56, 58)` | Işık geçirmeyen opak ayırıcı çizgi |

## Kaynak 2.5: Sistem dolguları

| Belirteç (Token) | Açık Mod Değeri | Koyu Mod Değeri | Kullanım Amacı |
| :--- | :--- | :--- | :--- |
| `systemFill` | `rgba(120, 120, 128, 0.20)` | `rgba(120, 120, 128, 0.36)` | İnce ve küçük şekiller (Örnek: Slider iz çizgisi) |
| `secondarySystemFill` | `rgba(120, 120, 128, 0.16)` | `rgba(120, 120, 128, 0.32)` | Orta boy şekiller (Örnek: Toggle anahtar arka planı) |
| `tertiarySystemFill` | `rgba(118, 118, 128, 0.12)` | `rgba(118, 118, 128, 0.24)` | Büyük şekiller (Örnek: Metin girdi kutusu, arama barı) |
| `quaternarySystemFill` | `rgba(116, 116, 128, 0.08)` | `rgba(118, 118, 128, 0.18)` | Karmaşık içerik barındıran geniş kapsayıcı paneller |

## Kaynak 2.6: macOS bağlamındaki kaynak değerleri

| Renk İsmi | Açık Mod Hex | Koyu Mod Hex | Açıklama |
| :--- | :--- | :--- | :--- |
| `windowBackgroundColor` | `#ECECEC` | `#262626` | Pencere ana zemin rengi |
| `controlBackgroundColor` | `#FFFFFF` | `#1E1E1E` | Liste, tablo veya tarayıcı zeminleri |
| `controlColor` | `#E1E1E1` | `#3A3A3A` | Buton ve kontrol yüzeyi |
| `controlTextColor` | `#000000` | `#FFFFFF` | Aktif kontrolün üzerindeki metin |
| `disabledControlTextColor` | `rgba(0,0,0,0.26)` | `rgba(255,255,255,0.26)` | Kullanılamayan pasif kontrol metni |
| `selectedControlColor` | `#007AFF` | `#007AFF` | Seçili kontrol yüzeyi |
| `selectedControlTextColor` | `#FFFFFF` | `#FFFFFF` | Seçili yüzey üzerindeki metin |
| `keyboardFocusIndicatorColor`| `#007AFF` | `#007AFF` | Klavye sekme (Tab) odak halkası rengi |
| `findHighlightColor` | `#FFFF00` | `#FFFF00` | Metin içi arama vurgu sarısı |

## Web için rol eşlemesi

| Rol | Kullanım | Kontrol |
| --- | --- | --- |
| `--aw-surface-page` | Sayfa tabanı | İçerik ve kenar katmanlarından ayırt ediliyor mu? |
| `--aw-surface-raised` | Panel veya gruplanmış içerik | Her grubu karta dönüştürmeden kullanılıyor mu? |
| `--aw-text-primary`, `--aw-text-secondary` | Ana ve yardımcı metin | İkisinin de gerçek zeminde yeterli kontrastı var mı? |
| `--aw-accent`, `--aw-on-accent` | Birincil eylem ve üzerindeki metin | Metin/yüzey çifti ile komşu yüzey ayrımı ayrı kontrol edildi mi? |
| `--aw-border-subtle` | Dekoratif ayırıcı | Bir denetimi tanımak için tek gerekli sınır olarak kullanılmıyor mu? |
| `--aw-border-control` | Gerekli denetim sınırı | Kullanıldığı komşu zeminle ilgili kontrast şartını karşılıyor mu? |
| `--aw-status-*` | Hata, başarı, uyarı metni/işareti | Anlam metin veya başka görünür ipucuyla da sunuluyor mu? |
| `--aw-focus-ring` | Klavye odağı | Gerçek komşu renklerle görünür mü; kesiliyor veya örtülüyor mu? |

Marka rengi varsa onu koru; gerekirse erişilebilir etkileşim varyantını ayrı bir role bağla. Mavi zorunlu değildir. Kaynakta `Blue` ile `link` değerleri farklıdır; tek bir “kesin Apple mavisi” üretmek için bunları sessizce eşitleme.

### Kontrastı nasıl yorumlamalı?

- Normal metin için 4.5:1, büyük metin için 3:1 hedefle. WCAG büyük metin tanımı yaklaşık 24 CSS px normal veya 18.67 CSS px kalın yazıya karşılık gelir; yalnız bir tokenın adının `title` olması yeterli değildir.
- Gerekli kontrol sınırları ve grafik/durum bilgileri için ilgili 3:1 metin dışı kontrast koşullarını değerlendir. Her dekoratif ayırıcının bu oranı sağlaması gerekmez; dekoratif çizgiyi zorunlu kontrol sınırı yerine kullanma.
- Alfa varsa önce gerçek zeminle bileştir, sonra bağıl parlaklık ve kontrast hesapla. Arka plan görseli veya cam varsa tek düz renk ölçümü bütün durumları kanıtlamaz.
- Pasif denetimlere ilişkin istisnayı aktif yardımcı metin, placeholder veya hata mesajını soluklaştırmak için kullanma. Görünür bir form etiketi yine gereklidir.
- Odak halkasını renk dışında kalınlık, offset, clipping ve örtülme açısından da kontrol et. Otomatik araç puanını tam erişilebilirlik uygunluğu sayma.

### Tema, gamut ve malzeme kararları

1. **Vurgu ekonomisi:** Etkileşim rengini tutarlı tut; durum, grafik serisi ve marka kullanımını ayrı anlamlandır. “Renkli olan her şey tıklanır” varsayımını veri görselleştirmeye dayatma.
2. **Koyu tema:** Katmanları yeterince ayır. Saf siyah taban kaynakta bir seçenek olsa da her web projesinin zorunluluğu değildir.
3. **Renk dışı anlam:** Hata alanında açıklama, seçili öğede durum işareti veya uygun semantik nitelik kullan.
4. **P3:** Önce sRGB fallback'i sağla. P3 ancak gerekçesi ve hedef tarayıcı desteği varsa eklenir; sRGB sayıları `display-p3` içine koymak renk uzayı dönüşümü değildir. Bu asset P3 varyantı içermez.
5. **Cam:** `backdrop-filter` yokken opak yüzey kullan. Destek bulunması okunabilirlik veya performans kanıtı değildir. Yüksek kontrast ve zorlanmış renklerde camı kaldır.
6. **Tercihler:** Açık kullanıcı seçimi sistem temasını geçersiz kılmalı. `prefers-contrast: more` bir iyileştirmedir; bütün ortamların bildirdiği veya yüksek kontrast desteğinin tamamı olduğu varsayılmaz. `forced-colors` altında sistem renklerine izin ver.

## CSS başlangıcını kullanma

Asset yalnızca `--aw-*` değişkenlerini tanımlar; global reset, font yüklemesi, bileşen sınıfı, tema düğmesi veya JavaScript içermez. Projedeki token sistemine gerektiği kadar eşle. `data-apple-theme="light"` veya `data-apple-theme="dark"` kök HTML öğesinde açık seçim içindir; nitelik yoksa sistem tercihi kullanılır. Mevcut projede başka tema seçicisi varsa onu değiştirmek yerine eşlemeyi uyarla.

Örnek uygulama; sınıf ve dosya adları bir projede gözlenmiş gerçekler değil, örnektir:

```css
.account-page {
  color: var(--aw-text-primary);
  background: var(--aw-surface-page);
  font-family: var(--aw-font-sans);
  line-height: var(--aw-leading-body);
  padding: var(--aw-page-gutter);
}

.account-action {
  font: inherit;
  min-inline-size: var(--aw-target-touch);
  min-block-size: var(--aw-target-touch);
  padding-inline: var(--aw-space-4);
  color: var(--aw-on-accent);
  background: var(--aw-accent);
  border: 1px solid transparent;
  border-radius: var(--aw-radius-control);
  transition: background-color var(--aw-motion-duration) var(--aw-motion-easing);
}

.account-action:hover:not(:disabled) {
  background: var(--aw-accent-hover);
}

.account-action:active:not(:disabled) {
  background: var(--aw-accent-pressed);
}

.account-action:focus-visible {
  outline: var(--aw-focus-width) solid var(--aw-focus-ring);
  outline-offset: var(--aw-focus-offset);
}

.account-action:disabled {
  color: var(--aw-text-disabled);
  background: var(--aw-surface-inset);
  border-color: var(--aw-border-subtle);
}
```

`button` için gerçek `disabled` niteliği gerekir; bu CSS tek başına davranış sağlamaz. Focus offset çevresindeki gerçek zemini ayrıca kontrol et. Statik web tokenları native vibrancy, haptik veya sürekli köşe çizimi sağlamaz. Glass tokenlarını kullanan bileşenlerde içerik/zemin kombinasyonu için ayrıca görsel ve kontrast kontrolü gerekir.
