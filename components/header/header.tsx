import Link from "next/link";
import React from "react";

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
					<ul className="flex">
						{Links.map(({ href, label }) => (
							<li key={href}>
								<Link href={href} className="btn btn-ghost rounded-btn">
									{label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default header;
