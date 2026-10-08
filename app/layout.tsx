import './globals.css';
import type { Metadata, Viewport } from 'next';
export const metadata: Metadata={title:'My Little Day',description:'A gentle daily planner for work, home, motherhood and me time.',manifest:'/manifest.json'};
export const viewport: Viewport={themeColor:'#FFF9F4',width:'device-width',initialScale:1,viewportFit:'cover'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
