import Link from "next/link";
import React from "react";
import Menu from "./Menu";

const Links = [
	{ href: "/", label: "Cart" },
	{ href: "/notes", label: "Sign in" },
];

const header = () => {
	return (
		<header>
			<nav>
				<div className="navbar justify-between bg-base-300">
					<Link href={"/"} className="btn btn-ghost text-lg">
						Student-Stitch
					</Link>
					<Menu />
				</div>
			</nav>
		</header>
	);
};

export default header;
