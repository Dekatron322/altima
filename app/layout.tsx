import { Metadata } from "next"
import "styles/tailwind.css"

export const metadata: Metadata = {
  title: "Allinonsol",
  description: "$ALLIN or nothing his is the memecoin dream - One Token, Lives Changed! We do this FOR THE CULTURE",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://allinonsol.com/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Dekatron322/allinonsol/main/public/venus.png",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
