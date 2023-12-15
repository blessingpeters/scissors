"use client"
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import PriceCard from "@/components/PriceCard";
import Shortner from "@/components/Shortner";
import Faq from "@/components/Faq";
import { useRouter } from "next/navigation";
import { signOut, useSession } from 'next-auth/react'
import StatsSection from "@/components/StatsSection";
import FeatureSection from "@/components/FeatureSection";
// import { redirect } from "next/navigation";


export default function Home() {
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  const router = useRouter();

  // const session = useSession({
  //   required: true,
  //   onUnauthenticated(){
  //     redirect('/signup')
  //   }
  // })

  return (
    <main className="">
      <section className="hero min-h-screen text-[#141414]">
        <Nav />
        <Header />
      </section>
      <StatsSection />
      <FeatureSection />
      <PriceCard />
      {isAuthenticated && <Shortner />}
      {!isAuthenticated && (
        <section className='bg-[#1E3448] flex flex-col justify-center items-center py-20 px-3'>
          <h2 className="text-4xl text-white font-bold mb-10 text-center">Revolutionizing Link Optimization</h2>
          <button
            className='text-white bg-blue-600 px-6 py-3 rounded-full cursor-pointer'
            onClick={() => router.push("/signup")}
          >
            Get Started
          </button>
        </section>
      )}
      <Faq />
    </main>
  )
}
