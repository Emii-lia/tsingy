"use client"
import { ReactNode} from "react";
import {QueryClientProvider} from "react-query";
import {queryClient} from "@/lib/queryClient";

export default function ReactQueryProvider({children}: Readonly<{ children: ReactNode }>) {
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}