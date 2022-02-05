import React, { useState } from "react";
import { InfoWrapper } from "../../styles/SingleBox.style";

const InfoBox = ({ description }) => {
  const [isKorean, setKorean] = useState(true);
  return (
    <InfoWrapper className="box">
      <div className="box__btn">
        <button onClick={() => setKorean(true)}>한국어</button>
        <button onClick={() => setKorean(false)}>ENG</button>
      </div>
      <h4
        dangerouslySetInnerHTML={{
          __html: isKorean ? description.ko?description.ko:"한국어 정보가 없습니다. 죄송합니다." : description.en?description.en:"NO English Information Sorry.",
        }}
      />
    </InfoWrapper>
  );
};

export default InfoBox;
