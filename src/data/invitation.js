const whatsappMessage =
  "Merhaba, Sümeyye ve Bayram'ın nişan davetine katılım sağlayacağım.";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const invitation = {
  meta: {
    title: "Sümeyye & Bayram | Nişan Davetiyesi",
  },
  couple: {
    names: "Sümeyye & Bayram",
    initials: "S & B",
  },
  event: {
    type: "Nişan",
    location: "İnkılap Mahallesi, Ümraniye / İstanbul",
    dateTimeLabel: "Tarih & Saat yakında eklenecek",
  },
  hero: {
    subtitle: "Nişanımıza davetlisiniz",
    intro:
      "Bu özel günümüzde mutluluğumuza ortak olmanızdan onur duyarız.",
    scrollLabel: "Aşağı kaydır",
  },
  intro: {
    openLabel: "Davetiyeyi aç",
    openHint: "Mührü açmak için dokunun",
  },
  garden: {
    previewLabel: "Dijital nişan davetiyesi",
    category: "Nişan Davetiyesi",
    sampleLabel: "Nişanımıza davetlisiniz",
    quoteTitle: "İki kalp tek ritim",
    quoteBody: "Sevgiyle başlayan bu yolculukta, en güzel anımıza şahitlik etmeniz bizi mutlu eder.",
    quote:
      "Sevgi zamanla büyüyen, paylaştıkça güzelleşen ve kalpleri aynı yolda buluşturan en zarif hikayedir.",
    withLove: "Sevgiyle",
    countdownTitle: "Büyük güne geri sayım",
    countdownPlaceholder: "Tarih netleştiğinde geri sayım başlayacak",
    whenWhereTitle: "Ne Zaman & Nerede",
    venueTitle: "Nişan Alanı",
    mapLabel: "Google Maps'te Aç",
    scheduleTitle: "Günün Programı",
    schedule: [
      { time: "18:00", title: "Misafirlerin Gelişi" },
      { time: "19:00", title: "Nişan Töreni" },
      { time: "20:00", title: "Tebrik & İkram" },
      { time: "21:00", title: "Fotoğraf & Kutlama" },
    ],
    storyTitle: "Hikayemiz",
    storyLead: "Sümeyye & Bayram",
    storyBody:
      "Bu mutlu başlangıçta ailemiz ve dostlarımızla yan yana olmak, hikayemizin en güzel sayfalarından biri olacak.",
    finalNote: "Sizi bu özel günümüzde aramızda görmekten mutluluk duyarız.",
    footerLine: "Mutluluğumuzu birlikte paylaşmak dileğiyle",
  },
  invite: {
    eyebrow: "Davet",
    title: "Davet Metni",
    body:
      "Sevgiyle başlayan yolculuğumuzun ilk adımında, siz değerli ailemiz ve dostlarımızı yanımızda görmekten mutluluk duyarız.",
  },
  details: {
    eyebrow: "Bilgiler",
    title: "Etkinlik Bilgileri",
    items: [
      {
        id: "event",
        label: "Etkinlik",
        value: "Nişan",
      },
      {
        id: "location",
        label: "Konum",
        value: "İnkılap Mahallesi, Ümraniye / İstanbul",
      },
      {
        id: "date",
        label: "Tarih & Saat",
        value: "Yakında eklenecek",
      },
    ],
  },
  dateReveal: {
    eyebrow: "Tarih",
    title: "Tarih & Saat",
    copy: "Kartlara dokunarak bilgileri aç",
    placeholder: "Tarih & Saat yakında eklenecek",
    hiddenText: "•••",
    hiddenHelper: "Açmak için dokun",
    items: [
      {
        id: "date",
        label: "Tarih",
        value: "Yakında",
        helper: "Eklenecek",
      },
      {
        id: "time",
        label: "Saat",
        value: "Yakında",
        helper: "Eklenecek",
      },
      {
        id: "location",
        label: "Konum",
        value: "Ümraniye",
        helper: "İstanbul",
      },
    ],
  },
  letter: {
    eyebrow: "Davet",
    title: "Davet Notu",
    copy: "Zarfın içinden çıkan küçük notumuz",
  },
  map: {
    eyebrow: "Konum",
    title: "Harita",
    body: "İnkılap Mahallesi, Ümraniye / İstanbul",
    buttonLabel: "Konuma Git",
    href: "#",
  },
  countdown: {
    eyebrow: "Geri Sayım",
    title: "Geri Sayım",
    body: "Tarih belirlendiğinde geri sayım başlayacak.",
    targetISO: "2026-12-31T20:00:00+03:00",
    isActive: false,
    units: [
      { key: "days", label: "Gün" },
      { key: "hours", label: "Saat" },
      { key: "minutes", label: "Dakika" },
      { key: "seconds", label: "Saniye" },
    ],
  },
  rsvp: {
    eyebrow: "Katılım",
    title: "Katılım Bilgisi",
    body: "Yanıtınızı WhatsApp üzerinden iletebilirsiniz.",
    buttonLabel: "Katılım Bilgisi Ver",
    whatsappNumber: "",
    whatsappHref: "#",
    message: whatsappMessage,
  },
  closing: {
    body: "Mutluluğumuza ortak olmanız dileğiyle...",
    names: "Sümeyye & Bayram",
  },
  visual: {
    backgroundImage: assetPath("assets/romantic-abstract-bg.png"),
    sceneImage: assetPath("assets/istanbul-terrace-invitation.png"),
    particles: [
      { left: "9%", top: "12%", size: 3, delay: 0.2, duration: 7 },
      { left: "82%", top: "15%", size: 2, delay: 1.1, duration: 8 },
      { left: "19%", top: "36%", size: 2, delay: 0.7, duration: 7.5 },
      { left: "88%", top: "45%", size: 4, delay: 1.6, duration: 9 },
      { left: "13%", top: "64%", size: 3, delay: 2.1, duration: 8.5 },
      { left: "76%", top: "71%", size: 2, delay: 0.4, duration: 7.8 },
      { left: "44%", top: "9%", size: 2, delay: 1.9, duration: 8.2 },
      { left: "53%", top: "87%", size: 3, delay: 1.3, duration: 9.4 },
      { left: "29%", top: "81%", size: 2, delay: 2.6, duration: 8.8 },
      { left: "67%", top: "30%", size: 3, delay: 0.9, duration: 7.2 },
      { left: "35%", top: "55%", size: 2, delay: 1.4, duration: 8.7 },
      { left: "91%", top: "83%", size: 2, delay: 2.2, duration: 9.2 },
    ],
  },
};

export function getWhatsappHref(rsvp) {
  if (!rsvp.whatsappNumber) {
    return rsvp.whatsappHref;
  }

  const number = rsvp.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(rsvp.message)}`;
}
