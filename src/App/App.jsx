import styles from "./styles.module.css";
function App() {
  return (
    <div className={styles.container}>
      <div className={` ${styles.item} ${styles["item-1"]}`}>
        <p>
          Social Media <span>10x</span> Faster with AI
        </p>
        <img src="/assets/images/illustration-five-stars.webp" alt="" />
        <p className={styles.subtext}>Over 4,000 5-star reviews</p>
      </div>
      <div className={` ${styles.item} ${styles["item-2"]}`}>
        <img src="/assets/images/illustration-multiple-platforms.webp" alt="" />
        <p>Manage multiple accounts and platforms.</p>
      </div>
      <div className={` ${styles.item} ${styles["item-3"]}`}>
        <p>Maintain a consistent posting schedule.</p>
        <img src="/assets/images/illustration-consistent-schedule.webp" />
      </div>
      <div className={` ${styles.item} ${styles["item-4"]}`}>
        <p className={styles.title}>Schedule to social media.</p>
        <img src="/assets/images/illustration-schedule-posts.webp" alt="" />
        <p className={styles.subtitle}>
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </div>
      <div className={` ${styles.item} ${styles["item-5"]}`}>
        <img src="/assets/images/illustration-grow-followers.webp" alt="" />
        <p>Grow followers with non-stop content.</p>
      </div>
      <div className={` ${styles.item} ${styles["item-6"]}`}>
        <p className={styles.title}>+56%</p>
        <p className={styles.subtitle}>faster audience growth</p>
        <img src="/assets/images/illustration-audience-growth.webp" alt="" />
      </div>
      <div className={` ${styles.item} ${styles["item-7"]}`}>
        <p>
          Create a schedule content<span> quicker.</span>
        </p>
        <img src="/assets/images/illustration-create-post.webp" alt="" />
      </div>
      <div className={` ${styles.item} ${styles["item-8"]}`}>
        <p>Write your content using AI.</p>
        <img src="/assets/images/illustration-ai-content.webp" alt="" />
      </div>
      <div class={styles.attribution}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Caminaur">Julian Caminaur</a>.
      </div>
    </div>
  );
}

export default App;
