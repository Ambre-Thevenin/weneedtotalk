import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import axios from 'axios';

import "swiper/css";
import "swiper/css/effect-cards";

import styles from './Game.module.css';



const Game = () => {
  let { id } = useParams();
	const [ questions, setQuestions ] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:5005/theme/${id}`)
		.then ((res) => res.data)
		.then((data) => setQuestions(data))
	}, [id])

  return (
		<div className={styles.gameScreen}>
			<Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.questionSwiper}
      >
				{questions.map((element)=> <SwiperSlide className={styles.swiperSlide}>{element.question}</SwiperSlide>)}
			</Swiper>
		</div>
    )

}

export default Game;