// 억, 조 단위 계산기
export const currencyConverter = (price) => {
    let count = price.toString().length;
    let temp = price.toString();
    let text;
    let real;
    if(count > 12){
      text = "조";
      real = temp.slice(0, -12);
    } else if (count <= 12 && count > 9) {
      text = "억";
      real = temp.slice(0, -9);
    }else if (count <= 9 && count > 6) {
      real = temp.slice(0, -6)*100;
      text = "만원";
    }else{
      text = "원";
      real = temp.slice(0);
    }
    return `${parseInt(real)} ${text}`;
  };


  export const myTotalCoin=(list)=>{
    return list.reduce((total,curr)=>{
      return total+= curr.currentPrice * curr.newCount
    },0)
  }