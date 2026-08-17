import type{Metadata}from'next';
import'../styles/global.css';
import'../styles/layout-fix.css';
import'../styles/ui-qa.css';
export const metadata:Metadata={title:{default:'Meridian Supply Co. — Wholesale Distribution',template:'%s | Meridian Supply Co.'},description:'Professional multi-category wholesale distribution platform for qualified business buyers.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth"><head><link rel="preload" href="/images/hero-global-marketplace.webp" as="image" type="image/webp"/><meta name="color-scheme" content="light"/></head><body>{children}</body></html>}
