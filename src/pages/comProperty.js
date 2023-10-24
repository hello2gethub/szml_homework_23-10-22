import React, { useState, useRef } from "react";
import { Link } from "umi";
import s from "../layouts/comProperty.css";

export default function HomePage() {
  const tx = useRef(null);
  const jinE = () => {
    console.log("1");
  };

  /* 字数提示 */
  let sz = 0;
  const [content, setContent] = useState("");
  console.log(content);
  sz = content.length;
  return (
    <>
      <div>
        {/* 上面的头部 */}
        <div className={s.box1}>
          <h1>
            <Link to="/">&lt;</Link>转入“攒私房钱”
          </h1>
        </div>

        {/* 中间部分 输入金额 */}
        <div className={s.box2}>
          <h3>转入金额</h3>
          <div className={s.shuru}>
            <span>￥</span>
            <input
              type="number"
              placeholder={"请输入金额，单人单日最高5万元"}
            ></input>
          </div>
          <ul className={s.jine} onClick={jinE}>
            <li>￥50</li>
            <li>￥100</li>
            <li>￥1000</li>
            <li>￥13.14</li>
            <li>￥520</li>
          </ul>
          <div className={s.shuoming}>
            <textarea
              type="text"
              placeholder="填写转入说明"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <i>{`${sz}/30`}</i>
          </div>
        </div>

        {/* 确认转入 */}
        <div className={s.box3}>
          <button className={s.queren}>确认转入</button>
        </div>

        {/* 特别说明 */}
        <div className={s.box4}>
          <h2>特别说明</h2>
          <p>
            ·转入支付宝小荷包的资金，后续提现到银行卡。会收取0.1%的服务费（最低0.1元/笔）。
            <a href="#">查看提现免费额度</a>
          </p>
        </div>
      </div>
    </>
  );
}
