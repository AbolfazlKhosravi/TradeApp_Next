import iranyekanFont from "@/constants/localFonts";
import Providers from "@/app/Providers";
import "../../globals.css";

export const metadata = {
  title: "اهراز هویت",
  description: "صفحه اهراز هویت سایت ترید هوم",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" dir="rtl">
      <body
        className={`${iranyekanFont.variable} -z-50  font-sans bg-foreground-50 dark:bg-[#2D2E2F]`}
      >
        <Providers>
          <main className="min-h-screen w-full container flex flex-col xl:px-40">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
