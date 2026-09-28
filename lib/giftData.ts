// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Habiby",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `From the very moment you came into my life, everything changed for the better. You brought a warmth and a light that I never knew I was missing. Every little detail about you—your smile, your laughter, and the way you 
  caremakes me fall deeper in love with you every single day.Thank you for being my safe place, my greatest comfort,
 and the absolute best part of my everyday life. No matter where life takes us or what tomorrow brings,
 I want you to know that my heart will always belong to you,
and I will always choose you, over and over againNo matter where life takes us or what tomorrow bringsand the absolute best part of my everyday life. 
From the very moment you came into my life, everything changed for the better. You brought a warmth and a light that I never knew I was missing. Every little detail about you—your smile, your laughter, and the way you 
  caremakes me fall deeper in love with you every single day.Thank you for being my safe place, my greatest comfort,
 and the absolute best part of my everyday life. No matter where life takes us or what tomorrow brings,
 I want you to know that my heart will always belong to you,
and I will always choose you, over and over againNo matter where life takes us or what tomorrow bringsand the absolute best part of my everyday life.`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;