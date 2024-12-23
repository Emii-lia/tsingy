import {NextIntlClientProvider, useMessages} from "next-intl";
import ReactQueryProvider from "@/provider/reactQuery.provider";
import {Toaster} from "@/components/ui/toaster";
import React from "react";
import Footer from "@/_components/footer/page";

export default function LocaleLayout({
    children,
    params: {locale}
}: Readonly<{
      children: React.ReactNode;
      params: { locale: string };
  }>
) {
    const messages = useMessages()
  return (
      <html lang={locale}>
      <head>
          <title>Tsingy</title>
      </head>
      <body className={`overflow-x-hidden`}>
      <ReactQueryProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
              <div className={"flex flex-col gap-24 max-md:gap-16 overflow-x-hidden max-sm:gap-24"}>
                  {children}
                  <Footer/>
              </div>
              <Toaster/>
          </NextIntlClientProvider>
      </ReactQueryProvider>
      </body>
      </html>
);
}