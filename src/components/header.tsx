import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/logo.png";
import { navigation } from "@/content/site";
import { MobileNav } from "@/components/mobile-nav";
import { SectionLink } from "@/components/section-link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="Dimas portfolio home">
          <Image src={logo} alt="" width={46} height={46} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <SectionLink key={item.href} href={item.href}>{item.label}</SectionLink>)}
        </nav>
        <ThemeToggle />
        <SectionLink className="button button-primary header-cta" href="/#contact">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" />
        </SectionLink>
        <MobileNav />
      </div>
    </header>
  );
}
