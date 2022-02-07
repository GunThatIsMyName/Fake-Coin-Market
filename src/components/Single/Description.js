import React, { useState } from "react";
import { useSelector } from "react-redux";

const Description = () => {
  const [isKorean, setKorean] = useState(true);
  const { singleItem } = useSelector((state) => state.singleCoin);

  const {description} = singleItem;
  return (
    <div className="box">
      <div className="box__btn">
        <button onClick={() => setKorean(true)}>한국어</button>
        <button onClick={() => setKorean(false)}>ENG</button>
      </div>
      <h4
        dangerouslySetInnerHTML={{
          __html: isKorean
            ? description.ko
              ? description.ko
              : "한국어 정보가 없습니다. 죄송합니다."
            : description.en
            ? description.en
            : "NO English Information Sorry.",
        }}
      />
    </div>
  );
};

export default Description;
