"use client"
import './globals.css'
import {useLocale} from "use-intl";
import {useRouter} from "next/navigation";
export default function Home() {
    const currentLocale = useLocale()
    const route = useRouter()
    route.push(currentLocale+"/home")
  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
      </main>
  );
}
