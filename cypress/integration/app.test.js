// - [ ] 유튜브 검색 API를 사용해 내가 보고 싶은 영상들을 검색할 수 있다.
//   - 엔터키를 눌러 검색할 수 있다.
//   - 검색 버튼을 클릭해 검색할 수 있다.
//   - 디바운스를 사용하여 API호출을 최소화한다.
// - [ ] 데이터를 불러오는 동안 현재 데이터를 불러오는 중임을 skeleton UI로 보여준다.
// - [ ] 검색 결과가 없는 경우 결과 없음 이미지를 보여준다.
// - [ ] 최초 검색 결과는 10개까지만 보여준다.
//   - 브라우저 스크롤 바를 끝까지 내려 그 다음 10개 아이템을 추가로 불러온다.
//   - 스로틀를 사용하여 이벤트 콜백함수 호출을 최소화한다.
// - [ ] 내가 검색한 영상들의 JSON 데이터를 localStorage에 저장한다.
//   - 저장 가능한 최대 동영상의 갯수는 100개이다.
// - [ ] 이미 저장된 영상이라면 저장 버튼이 보이지 않도록 한다.

import YoutubeApp from "../../src/js/YoutubeApp";

// before(() => {
//   cy.visit("./index.html");
// });

it("메인 화면에서 검색 버튼을 누르면 검색 모달창이 나타난다.", () => {
  cy.visit("./index.html");

  cy.get("#search-modal-button").click();

  cy.get(".modal-container").should("be.visible");
});

it("데이터를 불러오는 동안 skeleton UI로 보여준다.", () => {
  cy.visit("./index.html");

  cy.get("#search-modal-button").click();
  cy.get("#search-button").click();

  cy.get(".skeleton").should("be.visible");
});

it("검색 결과가 없는 경우 결과 없음 이미지를 보여준다.", () => {
  const errorSearchKeyword = `\!\@\!\@\$\!\%\@\$\^\%\&\$\^\*\%\!\@\!\$\!\%\&\(\^\*\%\$\!\@!@$$!#@!#)_)&_%^_)&%_^)&_@!@#!#$@#$%$@#^%&$%^&#$@$^#%&$%^$^%*$^&^@#$@#$@#%@#$^#%&^**#^#$%@#$@#$^@#$!$@#%@#$%#$^#$%^$%@#$!@#!@#%)^_&)%_^$%#$%#$^#%^#%^#^&_%^_)&_#$)%_)#_$)%#_$%!@#!@$#$!#@!#)_)&_%^_)&%_^)&_%)^_&)%_^&_%^_)&_#$)%_)#_$)%#_$\%`;

  cy.visit("./index.html");

  cy.get("#search-modal-button").click();
  cy.get("#search-input-keyword").type(errorSearchKeyword);
  cy.get("#search-button").click();

  cy.get(".search-result--no-result").should("be.visible");
});
