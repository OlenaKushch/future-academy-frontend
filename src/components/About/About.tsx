import styles from "./About.module.css";

export const About = () => {
	return (
		<section className={styles.about} aria-label="Про платформу Future Academy">
			<div className={styles.hero}>
				<h2 className={styles.title}>Освiтня платформа</h2>
				<h3 className={styles.brand}>Future Academy</h3>
				<p className={styles.subtitle}>Актуальнi знання для новачкiв та професiоналiв</p>
				<span className={styles.lineLeft} aria-hidden="true" />
				<span className={styles.lineRight} aria-hidden="true" />
			</div>

			<div className={styles.bubbleWrap}>
				<div className={styles.bubble}>
					<h4>Ким ви хочете стати?</h4>
					<p>Час знайти себе та обрати пiдходящий курс!</p>
					<p className={styles.cta}>Let&apos;s go!</p>
				</div>
				<img className={styles.owl} src="/owl.svg" alt="Сова Future Academy" />
			</div>
		</section>
	);
};
