export default class SearchTermHistory {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.$target.innerHTML = `
      <span class="text-gray-700">최근 검색어: </span>
      <a class="chip">메이커준</a>
      <a class="chip">우아한테크코스</a>
      <a class="chip">우아한형제들</a>
    `;
  }
}