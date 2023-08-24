"use client"


import AppBar from '@/src/components/AppBar'
import Login from '@/src/components/Login'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function Home() {
	const router = useRouter()
	const clickhandler = () => {
		router.push('/login');
	}
	return (
		<div>
			<AppBar></AppBar>
			<p>This is main page</p>
			<button onClick={clickhandler}> move the login</button>
		</div>
	)
}
