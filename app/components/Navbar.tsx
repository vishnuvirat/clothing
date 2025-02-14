"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, BadgeIndianRupee, ShoppingCart } from "lucide-react";
import { CalendarDays, Search, Heart, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

import { CircleUser, Menu, Package2 } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { AnimatedButton } from "../../components/ui/moving-border";
import image1 from "../../public/MenuPhotos/Home.jpg";
import image2 from "../../public/MenuPhotos/MenMenu.jpg";
import image3 from "../../public/MenuPhotos/Women.jpg";
import image4 from "../../public/MenuPhotos/Kids.jpg";
import image5 from "../../app/components/images/Shirt.jpg";
import image6 from "../../app/components/images/BottomWear.jpeg";
import image7 from "../../app/components/images/Tshirt.jpg";
import image8 from "../../app/components/images/sports.jpg";
import image9 from "../../app/components/images/outerwear.jpg";
import image10 from "../../app/components/images/ethinic.jpg";
import image11 from "../../app/components/images/seasonal.jpeg";
import logo from "../../public/Archanalogo.png";
import AnimatedSearch from "./AnimatedSearch";
import Image from "next/image";
const links = [
    { name: "Home", href: "/", img: image1 },
    { name: "Shirts", href: "/Shirts", img: image5 },
    { name: "Bottom Wear", href: "/Bottom-Wear", img: image6 },
    { name: "Mens T-Shirts", href: "/Mens-TShirts", img: image7 },
    { name: "Sports Wear", href: "/Sports-Wear", img: image8 },
    { name: "Outer Wear", href: "/Outer-Wear", img: image9 },
    { name: "Ethinic Wear", href: "/Ethinic-Wear", img: image10 },
    {
        name: "Women",
        href: "/Women",
        img: image3,
    },
    { name: "Kids", href: "/Kids", img: image4 },
    { name: "Seasonal", href: "/Seasonal", img: image11 },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div>
            <div className="flex justify-center bg-primary h-10 md:gap-48 lg:gap-96">
                <div className="">
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button className="text-black" variant="link">
                                @Meet our new clothing store of different
                                brands!
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="flex justify-between space-x-4">
                                <Avatar>
                                    <AvatarImage src="https://github.com/vercel.png" />
                                    <AvatarFallback>VC</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">
                                        @clothing
                                    </h4>
                                    <p className="text-sm">
                                        This Clothing Store - created and
                                        maintained by @team magnus.
                                    </p>
                                    <div className="flex items-center pt-2">
                                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                                        <span className="text-xs text-muted-foreground">
                                            Created June 2024
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div className="hidden md:flex lg:flex h-10 items-center text-sm ">
                    <Button className="text-black" variant={"link"}>
                        Sign In
                    </Button>
                    <Separator
                        className="h-4 bg-black"
                        orientation="vertical"
                    />
                    <Button className="text-black" variant={"link"}>
                        Rewards
                    </Button>
                    <Separator
                        className="h-4 bg-black"
                        orientation="vertical"
                    />
                    <Button className="text-black" variant={"link"}>
                        Blog
                    </Button>
                </div>
            </div>
            <div className="md:flex p-2 border-b border-gray-200">
                <div className="flex justify-center items-center md:block md:flex-1">
                    <AnimatedButton
                        borderRadius="1.75rem"
                        containerClassName="w-60"
                        className="text-sm bg-white dark:bg-slate-900 text-primary font-bold dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <BadgeIndianRupee className="mr-2" />
                        Buy now Offers on the Way
                    </AnimatedButton>
                </div>

                <Link
                    href="/"
                    className="my-1 flex justify-center items-center"
                >
                    <Image src={logo} width={50} alt="Logo" height={50} />
                    <h1 className="text-2xl justify-center items-center sm:text-2xl md:text-3xl font-bold">
                        Archana
                        <span className="text-primary"> Garments</span>
                    </h1>
                </Link>

                <div className="hidden md:flex flex-1 justify-end items-center gap-4">
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />

                        <AvatarFallback>ENG</AvatarFallback>
                    </Avatar>
                    <div>
                        <Heart className="text-primary" />
                    </div>
                    <div>
                        <User className="text-primary" />
                    </div>
                    <div>
                        <ShoppingCart className="text-primary" />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-lg font-semibold md:text-base"
                            >
                                <Package2 className="h-6 w-6 text-primary " />
                                <span className="sr-only">Acme Inc</span>
                            </Link>
                            {links.map((link, idx) => (
                                <div key={idx}>
                                    {pathname === link.href ? (
                                        <Link
                                            className="text-sx hover:text-foreground text-primary"
                                            href={link.href}
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-sx   font-semibold text-grey-600 transition duration-100 hover:text-primary"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="shrink-0 md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">
                                        Toggle navigation menu
                                    </span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <nav className="grid gap-6 text-lg font-medium">
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2 text-lg font-semibold"
                                    >
                                        <Package2 className="h-6 w-6" />
                                        <span className="sr-only">
                                            Acme Inc
                                        </span>
                                    </Link>

                                    {links.map((link, idx) => (
                                        <div
                                            className="flex border-b border-gray-200 justify-center items-center"
                                            key={idx}
                                        >
                                            <div className="mx-4 mb-1">
                                                <Image
                                                    className="rounded-full"
                                                    src={link.img}
                                                    width={30}
                                                    alt=""
                                                    height={30}
                                                />
                                            </div>
                                            {pathname === link.href ? (
                                                <SheetClose asChild>
                                                    <Link
                                                        className="text-sx hover:text-foreground text-primary"
                                                        href={link.href}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </SheetClose>
                                            ) : (
                                                <SheetClose asChild>
                                                    <Link
                                                        href={link.href}
                                                        className="text-sx font-semibold text-grey-600 transition duration-100 hover:text-primary"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </SheetClose>
                                            )}
                                            <div className="flex flex-1 justify-end">
                                                <ArrowRight />
                                            </div>
                                        </div>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                            <form className="ml-auto flex-1 sm:flex-initial">
                                <AnimatedSearch />
                            </form>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        className="rounded-full"
                                    >
                                        <CircleUser className="h-5 w-5 text-primary" />
                                        <span className="sr-only">
                                            Toggle user menu
                                        </span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                        My Account
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
}
