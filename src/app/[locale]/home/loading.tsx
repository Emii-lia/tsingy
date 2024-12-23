import {HeroSk} from "@/_components/skeleton/hero/HeroSk";
import AboutSk from "@/app/[locale]/home/@about/loading";

export default function HomeLoading() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between gap-36">
            <HeroSk/>
            <AboutSk/>
        </main>
    )
}