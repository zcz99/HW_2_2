import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	function HandleClickForward() {
		if (activeIndex === data.length - 1) {
			setActiveIndex(0);
		} else {
			setActiveIndex(activeIndex + 1);
		}
	}

	function HandleClickBack() {
		setActiveIndex(activeIndex - 1);
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{data[`${activeIndex}`].content}
					</div>
					<ul className={styles['steps-list']}>
						{data.map(({ title, id }, index) => (
							<li
								key={id}
								className={
									(index > activeIndex && styles['steps-item']) ||
									(index < activeIndex &&
										styles['steps-item'] + ' ' + styles.done) ||
									(index === activeIndex &&
										styles['steps-item'] +
											' ' +
											styles.done +
											' ' +
											styles.active)
								}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => {
										setActiveIndex(index);
									}}
								>
									{id.slice(2)}
								</button>
								{title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							disabled={activeIndex === 0 ? true : false}
							className={styles.button}
							onClick={HandleClickBack}
						>
							Назад
						</button>
						<button className={styles.button} onClick={HandleClickForward}>
							{activeIndex <= data.length - 2 ? 'Далее' : 'Начать сначала'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
