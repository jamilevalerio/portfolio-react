import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

const Slider = () => {

  const projectsImg = [
    {name: "afroflix", image: "./src/img/projects/afroflix.png", link: "https://jamilevalerio.github.io/afroflix/"},
    {name: "snakegame", image: "./src/img/projects/snakeGame.png", link: "https://jamilevalerio.github.io/jogo-da-cobrinha/"},
    {name: "typography", image: "./src/img/projects/typography.png", link: "https://jamilevalerio.github.io/typography"},
    {name: "luxurycars", image: "./src/img/projects/luxuryCars.png", link: "https://jamilevalerio.github.io/luxury-cars"},
    {name: "musicstore", image: "./src/img/projects/musicStore.png", link: "https://jamilevalerio.github.io/music-store"},];

  return (
    <Swiper
    modules={[Navigation]}
    navigation
    spaceBetween={40}
    slidesPerView={2}
    loop
    className='projects-slide'
    >
      {projectsImg.map((slide) => 
        <SwiperSlide key={slide.name}>
          <a href={slide.link} target="_blank"><img src={slide.image} alt="" className='project-img'/></a>
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default Slider
