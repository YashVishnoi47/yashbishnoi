import "./globals.css";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400", // ✅ ONLY 400 is supported
});

export const metadata = {
  title: "Yash Bishnoi | Full-Stack Web Developer | India",
  description: "I am Yash Bishnoi. Full-Stack Web Developer from India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${vt323.className} bg-[#0C0C04] h-screen w-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
