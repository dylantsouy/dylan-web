export const scrollTo = (number, time, element) => {
    if (!time) {
      document.body.scrollTop = document.documentElement.scrollTop = number;
      return number;
    }
    const top1 = document.documentElement.scrollTop;
    const top2 = document.querySelector(element).offsetTop - 56;
    const spacingTime = 20; // 設置循環的間隔時間  值越小消耗性能越高
    let spacingInex = time / spacingTime; // 計算循環的次數
    let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 獲取當前滾動條位置
    let everTop = (top2 - top1) / spacingInex; // 計算每次滑動的距離
    let scrollTimer = setInterval(function () {
      if (spacingInex > 0) {
        spacingInex--;
        scrollTo((nowTop += everTop));
      } else {
        clearInterval(scrollTimer);
      }
    }, spacingTime);
  };