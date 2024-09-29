<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import first_slide from '../../assets/img/home/first_slide.png';
import second_slide from '../../assets/img/home/second_slide.png';

import 'swiper/css';
import 'swiper/css/pagination';

const sliders = [
	{
		id: 1,
		pertitle: 'Welcome to GreenShop',
		titledark: 'Let’s Make a',
		titleprimary: 'Better Planet',
		descr:
			'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
		img: first_slide,
		btn: 'Shop Now',
	},
	{
		id: 2,
		pertitle: 'Welcome to GreenShop',
		titledark: 'Better Planet',
		titleprimary: 'is Better Life',
		descr:
			'Our green Planet is a better life. We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
		img: second_slide,
		btn: 'Shop Now',
	},
];

let breakpoints = {
	320: {
		slidesPerView: 1,
		spaceBetween: 0,
	},
};
</script>

<template>
	<div class="mx-auto flex items-center justify-center">
		<swiper
			class="bg-gray-20 mx-auto flex items-center justify-center"
			:style="{
				'--swiper-pagination-color': '#46a358',
			}"
			:slides-per-view="3"
			:space-between="50"
			:breakpoints="breakpoints"
			:modules="[Autoplay, Pagination, Scrollbar, A11y]"
			:autoplay="{
				loop: true,
				delay: 2000,
				longSwipes: true,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}"
			:pagination="{
				clickable: true,
			}"
		>
			<swiper-slide v-for="slider in sliders" :key="slider.id">
				<div
					class="flex items-center justify-between lg:justify-around cursor-pointer sm:px-10"
				>
					<!-- slider info -->
					<div
						class="text-dark-10 pl-5 sm:pl-0 -mr-20 sm:-mr-10 md:-mr-16 lg:-mr-10 xl:mr-20 2xl:-mr-24"
					>
						<div
							class="uppercase text-3xl sm:text-4xl lg:text-7xl font-normal space-y-1 mb-2"
						>
							<p class="text-sm text-dark-20">{{ slider.pertitle }}</p>

							<h1>
								{{ slider.titledark }}
							</h1>

							<h2 class="text-primary">
								{{ slider.titleprimary }}
							</h2>
						</div>

						<p class="text-sm text-dark-20 mb-11">{{ slider.descr }}</p>

						<button
							class="uppercase text-white bg-primary hover:bg-primary/75 active:bg-primary duration-150 rounded-md text-base font-bold px-6 py-2.5"
						>
							{{ slider.btn }}
						</button>
					</div>

					<img
						:class="[slider.active]"
						class="hidden sm:block max-w-3xl md:min-w-3xl"
						:src="slider.img"
						alt="slide"
					/>

					<img
						:class="[slider.active]"
						class="block sm:hidden"
						:src="slider.mobile"
						alt="slide"
					/>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>
