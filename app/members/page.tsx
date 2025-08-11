// members
import Image from "next/image";
import styles from "./page.module.css";
import { headers } from "next/headers";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デイビッド・チャン",
      position: "CEO",
      prifile: "うわあああああああああああああああああああああああああああああああああああああああ",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "エミリー・サンダース",
      position: "COO",
      prifile: "なにいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "堀江由衣",
      position: "CTO",
      prifile: "ほあああああああああああああああああああああああああああああああああああああああああああ",
    },
  ],
};

export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image src={member.image.url} alt="" width={member.image.width} height={member.image.height} className={styles.image} />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.prifile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
