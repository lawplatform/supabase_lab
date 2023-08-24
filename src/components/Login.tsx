"use client"; // 필수!
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
	const { data: session } = useSession();
	const { status } = useSession();
	const router = useRouter()

	useEffect(() => {
		if (status === 'unauthenticated') {
			router.push('/login');
		}
	}, [status]);
	return (
		<div>

			<button onClick={() => signIn()}>
				Sign In
			</button>

			<button onClick={() => signOut()}>
				Sign Out
			</button>
		</div>)
}
