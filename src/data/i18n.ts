import { Lang } from '../types';

export interface Strings {
  dir: 'rtl' | 'ltr';
  htmlLang: string;
  brand: string;
  nav: { home: string; products: string; cart: string; about: string };
  heroTitle1: string;
  heroTitle2: string;
  heroSub: string;
  heroCta: string;
  heroCta2: string;
  statUsers: string;
  statProducts: string;
  statRating: string;
  sectionFeatured: string;
  sectionFeaturedSub: string;
  catAll: string;
  catConsole: string;
  catPC: string;
  catAccessory: string;
  catChair: string;
  catHeadset: string;
  addToCart: string;
  added: string;
  off: string;
  new: string;
  hot: string;
  sortBy: string;
  sortPopular: string;
  sortPriceLow: string;
  sortPriceHigh: string;
  sortNew: string;
  cartTitle: string;
  cartEmpty: string;
  cartEmptyBtn: string;
  subtotal: string;
  shipping: string;
  freeShipping: string;
  total: string;
  checkout: string;
  remove: string;
  quantity: string;
  close: string;
  checkoutTitle: string;
  stepShipping: string;
  stepPayment: string;
  stepDone: string;
  fullName: string;
  phone: string;
  address: string;
  city: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  payNow: string;
  back: string;
  next: string;
  orderSuccess: string;
  orderSuccessSub: string;
  backHome: string;
  features: string;
  feat1t: string;
  feat1d: string;
  feat2t: string;
  feat2d: string;
  feat3t: string;
  feat3d: string;
  feat4t: string;
  feat4d: string;
  newsletterTitle: string;
  newsletterSub: string;
  newsletterPlaceholder: string;
  subscribe: string;
  footerRights: string;
  footerDesc: string;
  quickLinks: string;
  support: string;
  contactUs: string;
  themeToggle: string;
  searchPlaceholder: string;
  reviews: string;
  specs: string;
  madeBy: string;
  developer: string;
}

export const STR: Record<Lang, Strings> = {
  fa: {
    dir: 'rtl',
    htmlLang: 'fa',
    brand: 'نئوارنا',
    nav: { home: 'خانه', products: 'محصولات', cart: 'سبد خرید', about: 'درباره ما' },
    heroTitle1: 'وارد میدان نبرد شو',
    heroTitle2: 'با سلاح‌های نسل بعد',
    heroSub: 'برترین گیرهای گیمینگ، کنسول‌ها و لوازم جانبی با تحویل فوری و گارانتی اصالت کالا',
    heroCta: 'مشاهده محصولات',
    heroCta2: 'پیشنهادهای ویژه',
    statUsers: 'گیمر فعال',
    statProducts: 'محصول اصل',
    statRating: 'رضایت مشتری',
    sectionFeatured: 'محصولات داغ ',
    sectionFeaturedSub: 'پرفروش‌ترین‌های این هفته رو از دست نده',
    catAll: 'همه',
    catConsole: 'کنسول',
    catPC: 'کامپیوتر',
    catAccessory: 'لوازم جانبی',
    catChair: 'صندلی گیمینگ',
    catHeadset: 'هدست',
    addToCart: 'افزودن به سبد',
    added: 'اضافه شد به سبد!',
    off: 'تخفیف',
    new: 'جدید',
    hot: 'پرفروش',
    sortBy: 'مرتب‌سازی',
    sortPopular: 'محبوب‌ترین',
    sortPriceLow: 'ارزان‌ترین',
    sortPriceHigh: 'گران‌ترین',
    sortNew: 'جدیدترین',
    cartTitle: 'سبد خرید شما',
    cartEmpty: 'سبد خریدت خالیه، وقتشه یه چیز خفن اضافه کنی!',
    cartEmptyBtn: 'برو به فروشگاه',
    subtotal: 'جمع جزء',
    shipping: 'هزینه ارسال',
    freeShipping: 'رایگان',
    total: 'مبلغ نهایی',
    checkout: 'تسویه حساب',
    remove: 'حذف',
    quantity: 'تعداد',
    close: 'بستن',
    checkoutTitle: 'تکمیل خرید',
    stepShipping: 'اطلاعات ارسال',
    stepPayment: 'پرداخت',
    stepDone: 'تایید نهایی',
    fullName: 'نام و نام خانوادگی',
    phone: 'شماره تماس',
    address: 'آدرس کامل',
    city: 'شهر',
    cardNumber: 'شماره کارت',
    cardExpiry: 'تاریخ انقضا',
    cardCvv: 'CVV2',
    payNow: 'پرداخت نهایی',
    back: 'بازگشت',
    next: 'مرحله بعد',
    orderSuccess: 'سفارش شما با موفقیت ثبت شد! ',
    orderSuccessSub: 'کد پیگیری سفارش:',
    backHome: 'بازگشت به فروشگاه',
    features: 'چرا نئوارنا؟',
    feat1t: 'ارسال سریع',
    feat1d: 'تحویل کمتر از ۲۴ ساعت در سراسر کشور',
    feat2t: 'ضمانت اصالت',
    feat2d: 'تمامی کالاها دارای گارانتی رسمی هستند',
    feat3t: 'پشتیبانی ۲۴/۷',
    feat3d: 'تیم پشتیبانی همیشه در کنار شماست',
    feat4t: 'پرداخت امن',
    feat4d: 'درگاه پرداخت رمزنگاری‌شده و مطمئن',
    newsletterTitle: 'عضو باشگاه گیمرها شو',
    newsletterSub: 'از تخفیف‌های ویژه و محصولات جدید باخبر شو',
    newsletterPlaceholder: 'ایمیل خود را وارد کنید',
    subscribe: 'عضویت',
    footerRights: 'تمامی حقوق محفوظ است.',
    footerDesc: 'مقصد نهایی گیمرهای حرفه‌ای برای بهترین تجهیزات روز دنیا.',
    quickLinks: 'لینک‌های سریع',
    support: 'پشتیبانی',
    contactUs: 'تماس با ما',
    themeToggle: 'تغییر تم',
    searchPlaceholder: 'دنبال چی می‌گردی؟',
    reviews: 'نظر مشتریان',
    specs: 'مشخصات فنی',
    madeBy: 'ساخته شده توسط',
    developer: 'امیرعلی محمدی',
  },
  en: {
    dir: 'ltr',
    htmlLang: 'en',
    brand: 'NeoArena',
    nav: { home: 'Home', products: 'Products', cart: 'Cart', about: 'About' },
    heroTitle1: 'Enter the Arena',
    heroTitle2: 'With Next-Gen Weapons',
    heroSub: 'Top-tier gaming gear, consoles and accessories with express delivery and authenticity guarantee',
    heroCta: 'Shop Now',
    heroCta2: 'Hot Deals',
    statUsers: 'Active Gamers',
    statProducts: 'Genuine Products',
    statRating: 'Satisfaction',
    sectionFeatured: 'Hot Picks ',
    sectionFeaturedSub: "Don't miss this week's best sellers",
    catAll: 'All',
    catConsole: 'Consoles',
    catPC: 'PC',
    catAccessory: 'Accessories',
    catChair: 'Gaming Chairs',
    catHeadset: 'Headsets',
    addToCart: 'Add to Cart',
    added: 'Added to cart!',
    off: 'OFF',
    new: 'NEW',
    hot: 'HOT',
    sortBy: 'Sort by',
    sortPopular: 'Popular',
    sortPriceLow: 'Price: Low',
    sortPriceHigh: 'Price: High',
    sortNew: 'Newest',
    cartTitle: 'Your Cart',
    cartEmpty: 'Your cart is empty, time to add something epic!',
    cartEmptyBtn: 'Go Shopping',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    freeShipping: 'Free',
    total: 'Total',
    checkout: 'Checkout',
    remove: 'Remove',
    quantity: 'Qty',
    close: 'Close',
    checkoutTitle: 'Complete Purchase',
    stepShipping: 'Shipping Info',
    stepPayment: 'Payment',
    stepDone: 'Confirmation',
    fullName: 'Full Name',
    phone: 'Phone Number',
    address: 'Full Address',
    city: 'City',
    cardNumber: 'Card Number',
    cardExpiry: 'Expiry Date',
    cardCvv: 'CVV2',
    payNow: 'Pay Now',
    back: 'Back',
    next: 'Next Step',
    orderSuccess: 'Your order was placed successfully! ',
    orderSuccessSub: 'Order tracking code:',
    backHome: 'Back to Store',
    features: 'Why NeoArena?',
    feat1t: 'Fast Delivery',
    feat1d: 'Delivery in less than 24 hours nationwide',
    feat2t: 'Authenticity Guarantee',
    feat2d: 'All products come with official warranty',
    feat3t: '24/7 Support',
    feat3d: 'Our support team is always by your side',
    feat4t: 'Secure Payment',
    feat4d: 'Encrypted and trusted payment gateway',
    newsletterTitle: 'Join the Gamers Club',
    newsletterSub: 'Get notified about special deals and new arrivals',
    newsletterPlaceholder: 'Enter your email',
    subscribe: 'Subscribe',
    footerRights: 'All rights reserved.',
    footerDesc: 'The ultimate destination for pro gamers to get the best gear in the world.',
    quickLinks: 'Quick Links',
    support: 'Support',
    contactUs: 'Contact Us',
    themeToggle: 'Toggle theme',
    searchPlaceholder: 'What are you looking for?',
    reviews: 'Reviews',
    specs: 'Specifications',
    madeBy: 'Made by',
    developer: 'Amirali Mohammadi',
  },
};

export function formatPrice(n: number, lang: Lang): string {
  const formatted = n.toLocaleString(lang === 'fa' ? 'fa-IR' : 'en-US');
  return lang === 'fa' ? `${formatted} تومان` : `$${(n / 400000).toFixed(2)}`;
}