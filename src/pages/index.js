import { useRef, useState } from "react";
import { Link } from "umi";
import styles from "../layouts/index.css";

export default function HomePage() {
  let shuoMing1 = useRef("dispaly");
  //   let shuoMing2 = useRef("none");
  let kaiQi = useRef("none");
  let optimize = useRef(null);

  const [count, setConst] = useState(0); // 金额
  const [insertNode, setInserNode] = useState(false); // 原生js插入节点，触发重新渲染
  // 余额减少时的显示数据
  //   const [domTmp, setTmp] = useState(
  //     <div className={styles.zrShuoming} ref={shuoMing2}>
  //       <div className={styles.yh}>
  //         <div className={styles.yonghu2}>用户</div>
  //         <div className={styles.zhanshi}>
  //           <h4>我是一个友好的用户</h4>
  //           <p>我是一条平平无奇的转出说明</p>
  //           <span>今天 13.14</span>
  //         </div>
  //         <div className={styles.shisan}>-5.20</div>
  //       </div>
  //     </div>
  //   );
  //   const [shuoming3, setShuoming3] = useState(domTmp); //初始化显示的转出数据

  // 余额的减少
  function minus() {
    setConst(count - 13.14);
    // setShuoming3({
    //   ...shuoming3,
    //   domTmp,
    // });
    const newNode = document.createElement("div");
    newNode.className = styles.zrShuoming;
    newNode.innerHTML = `
        <div className=${styles.yh}>
        <div className=${styles.yonghu2}>用户</div>
        <div className=${styles.zhanshi}>
            <h4>我是一个友好的用户</h4>
            <p>我是一条平平无奇的转出说明</p>
            <span>今天 13.14</span>
        </div>
        <div className=${styles.shisan}>-5.20</div>
    `;
    optimize.current.appendChild(newNode); // 插入新节点
    shuoMing1.current.style.display = "none"; // 隐藏默认内容
    // setInserNode(false);
    setInserNode(true); // 触发重新渲染
    // 但是也有bug啊，要更新他的值才行，就第一次更新了，后面重复了。
    // 试试重置,重置也不行，底层应该有不能连续调用的限制？
  }
  function kaiqi() {
    kaiQi.current.style.display = "block";
    setTimeout(() => {
      kaiQi.current.style.display = "none";
    }, 1200);
  }

  // 账单和统计的切换
  function gaoliang() {}

  return (
    <>
      <div>
        {/* 上面的背景图 */}

        <div className={styles.head1}>
          {/* 弹出的弹框 */}
          <div className={styles.kaiqiquanyi} ref={kaiQi}>
            已开始权益
            {/* <p>点击确认</p> */}
          </div>
          <div className={styles.yonghu}>用户</div>
        </div>

        {/* 下面的背景图 */}
        <div className={styles.head2}>
          {/* <div className={styles.header}>
          用户头像

        </div> */}
          {/* 攒私房钱 */}
          <div className={styles.sifangqian}>
            <div className={styles.shang}>
              <h3>攒私房钱</h3>
              <p>自己用</p>
              <a href="#">设置&gt;</a>
            </div>

            {/* 总金额 */}
            <div className={styles.zhongjin}>
              <span className={styles.zhongjine}>
                总金额(元) <i></i>
              </span>
              <span className={styles.jinge}>{count.toFixed(2)}</span>
              <p onClick={kaiqi}>开启权益</p>
            </div>
            {/* 转入和转出 */}
            <div className={styles.zhuan}>
              <Link to="/comProperty" className={styles.add}>
                转入
              </Link>
              <span className={styles.minus} onClick={minus}>
                转出
              </span>
            </div>
          </div>

          {/* 小应用 */}
          <div className={styles.xiaoyingyong}>
            <ul>
              <li>
                <a href="#">
                  <i></i>
                  <span>付款</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i></i>
                  <span>收款</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i></i>
                  <span>自动攒</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i></i>
                  <span>限额</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i></i>
                  <span>权益</span>
                </a>
              </li>
            </ul>
          </div>
          {/* 账单 */}
          <div className={styles.zd}>
            <ul>
              <li className={styles.active} onClick={gaoliang}>
                账单
              </li>
              <li className={styles.tongji}>统计</li>
            </ul>
            {/* 下面的说明 */}
            <div>
              <div className={styles.tishi} ref={shuoMing1}>
                <p>我是账单</p>
                <p>转入/转出/消费等记录</p>
                <p>会在这里展示</p>
              </div>
              {/* 转出记录 */}

              {/* {shuoming3} */}
            </div>
            <div ref={optimize}>
              {/* 初始插入节点 */}
              {insertNode && (
                <div className={styles.zrShuoming}>
                  <div className={styles.yh}>
                    <div className={styles.yonghu2}>用户</div>
                    <div className={styles.zhanshi}>
                      <h4>我是一个友好的用户</h4>
                      <p>我是一条平平无奇的转出说明</p>
                      <span>今天 13.14</span>
                    </div>
                    <div className={styles.shisan}>-5.20</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* 底部字体 */}
          <div className={styles.bottom}>
            本服务由支付宝(杭州)信息技术有限公司提供
          </div>
        </div>
      </div>
    </>
  );
}
