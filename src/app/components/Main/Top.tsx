import styles from "../../styles/top.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Top() {
  return (
    <div className={styles.main_container}>
      <div className={styles.topMainWrap}>
        <div className={styles.mainilust}>
          <div className={`${styles.island} "w-full h-full relative overflow-hidden"`}>
            <img src="/island.svg" alt="islandImage" />
          </div>
          <div className={styles.clouds}>
            <img src="/clouds1.svg" alt="" />
            <img src="/clouds2.svg" alt="" />
            <img src="/clouds3.svg" alt="" />
            <img src="/clouds4.svg" alt="" />
            <img src="/clouds5.svg" alt="" />
            <img src="/clouds6.svg" alt="" />
            <img src="/airplane.svg" alt="" />
          </div>
        </div>

        <div className={styles.projects}>
          <p>resent works</p>
          <Link href="/">PROJECT1</Link>
          <Link href="/">PROJECT2</Link>
          <Link href="/">PROJECT3</Link>
        </div>
      </div>
      <div className={styles.deg_wrapper}></div>
      <div className={styles.background}>
        <div className={styles.about}>
          <div className={styles.about_text_box}>
            <h2>ABOUT</h2>
            <p>“저는 새로운 경험을 두려워하지 않는 자신감을 가졌습니다.”</p>
            <p>
              저에게 경험은 문제를 해결하는 힌트이며 응용은 새로운 답을 만드는 가능성입니다. 눈에 보이는 영역을 제어하고 사용자의 경험을 위해 고민하는 시간이 즐겁기에 그 시간들을 경험으로 여겨
              묵묵하지만 부지런히 나아가고 싶습니다.
            </p>
            <p>스스로 행동할 줄 알고 배움에 게으르지 않은 퍼블리셔가 되겠습니다. 감사합니다.</p>
          </div>
          <div className={styles.illustContain}>
            <img className="mountain" src="/mountain.png" alt="" />
            <img className={styles.climber} src="/climber.png" alt="" />
            <img className={styles.mount_biker} src="/mountain_biker.png" alt="" />
          </div>

          <h2 className={styles.skills_title}>SKILLS</h2>
          <div className={styles.mid_container}>
            <div className={styles.skills1_container}>
              <h2 className="main_title">PUBLISHING</h2>
              <div className="flex gap-x-52">
                <div className="detail_skills">
                  <h4 className={styles.h4_title}>HTML & CSS3</h4>
                  <ul>
                    <li>웹 사이트 구축 및 디자인</li>
                    <li>웹 표준 & 웹 접근성을 고려하여 시멘틱 태그 활용</li>
                    <li>flex, grid, position 사용</li>
                    <li>애니메이션 구현</li>
                    <li>미디어쿼리 이용 반응형 웹 제작</li>
                  </ul>
                </div>
                <div className="detail_skills">
                  <h4 className={styles.h4_title}>JavaScript & jQuery</h4>
                  <ul>
                    <li>ES6+ 문법</li>
                    <li>jQuery 라이브러리 사용 가능</li>
                    <li>이벤트 메소드 구현</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.skills2_container}>
              <h2 className="main_title">DESIGN</h2>
              <div className="detail_skills">
                <h4 className={styles.h4_title}>figma & illustrator & photoshop</h4>
                <ul className="flex">
                  <li>이미지 편집 & 앱 및 웹화면구현</li>
                  <li>UX & UI 를 고려한 디자인 가능</li>
                  <li>프로토타입 제작</li>
                  <li>앱 스플래시 화면 디자인</li>
                </ul>
              </div>
            </div>
            <div className={styles.skills3_container}>
              <h2 className="main_title">OTHER</h2>
              <div className="detail_skills">
                <h4 className={styles.h4_title}>git & github</h4>
                <ul>
                  <li>CLI 방식 Bash 사용 가능</li>
                  <li>git hub pages를 통한 작업 결과물 구현</li>
                  <li>git hub organization을 이용한 실시간 작업 공유</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.bottom_container}></div>
        </div>
      </div>
    </div>
  );
}
