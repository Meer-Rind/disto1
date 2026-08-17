'use client';
import dynamic from'next/dynamic';
const BrowserApp=dynamic(()=>import('./BrowserApp'),{ssr:false,loading:()=> <div className="route-loading"><span/><span/><span/></div>});
export default function ClientApp(){return <BrowserApp/>}
