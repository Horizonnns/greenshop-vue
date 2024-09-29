<script setup>
import IconLogo from './icons/IconLogo.vue';
import IconSearch from './icons/IconSearch.vue';
import IconCart from './icons/IconCart.vue';
import IconLogout from './icons/IconLogout.vue';

const navLinks = [
	{ name: 'Home', href: '/home' },
	{ name: 'Shop', href: '/shop' },
	{ name: 'Plant Care', href: '/care' },
	{ name: 'Blogs', href: '/blogs' },
];
</script>

<template>
	<header class="flex items-center justify-between border-b mx-28 pt-6 pb-4">
		<div class="flex items-center space-x-2">
			<IconLogo />
			<h2 class="text-xl text-center text-primary">GREENSHOP</h2>
		</div>

		<nav class="flex items-center space-x-12">
			<ul
				v-for="link in navLinks"
				:key="link.name"
				class="flex justify-center space-x-5"
			>
				<li>
					<a :href="link.href">{{ link.name }}</a>
				</li>
			</ul>
		</nav>

		<nav class="flex items-center space-x-8">
			<IconSearch />
			<IconCart />

			<button
				class="flex items-center text-white bg-primary rounded-md px-4 py-2 space-x-2"
			>
				<IconLogout />
				<span>Logout</span>
			</button>
		</nav>
	</header>
</template>
