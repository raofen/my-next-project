// not-found 404
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つかりませんでした</dt>
        <dd className={styles.text}>
          あなたがアクセスしようとしたページはありません
          <br />
          URLを再度ご確認ください。
        </dd>
      </dl>
    </div>
  );
}
