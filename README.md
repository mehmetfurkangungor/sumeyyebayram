# Sümeyye & Bayram Nişan Davetiyesi

Modern, mobil öncelikli, animasyonlu dijital nişan davetiyesi.

## Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda Vite'ın verdiği local adresi açın.

## Düzenleme

Tüm davetiye metinleri ve placeholder linkler `src/data/invitation.js` içinde tutulur.

- Tarih ve saat için `event.dateTimeLabel`, `details.items` içindeki tarih satırı ve `countdown.targetISO` alanlarını güncelleyin.
- Geri sayımı aktif etmek için `countdown.isActive` değerini `true` yapın.
- Google Maps bağlantısı için `map.href` alanını güncelleyin.
- WhatsApp cevabı için `rsvp.whatsappNumber` alanına ülke koduyla birlikte telefon numarası ekleyin veya `rsvp.whatsappHref` alanını doğrudan değiştirin.

## Build

```bash
npm run build
```

## Online

GitHub Pages linki:

https://mehmetfurkangungor.github.io/sumeyyebayram/

`main` branch'ine yapılan her push sonrası `.github/workflows/deploy.yml` workflow'u siteyi yeniden build edip yayınlar.
