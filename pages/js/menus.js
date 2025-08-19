$(function () {
  const navElement = $("#main-menu-nav");
  const contentElement = $("#menu-content-area");

  $.getJSON("steak.json", function (menuData) {
    const categories = Object.keys(menuData);

    const menuButtons = categories.map((category) => {
      return $("<button></button>")
        .text(category.replace(/ & /g, " & "))
        .on("click", function () {
          $(this).addClass("active").siblings().removeClass("active");
          displayMenu(menuData, category);
          // 셀렉트 박스도 동기화
          $(".submenu").val(category).trigger("change", { fromButton: true });
        });
    });
    navElement.append(menuButtons);

    // URL 파라미터 읽기
    const urlParams = new URLSearchParams(window.location.search);
    const submenuParam = urlParams.get("submenu");

    // 파라미터 값이 있고, categories에 있을 때 직접 메뉴 표시
    if (submenuParam && categories.includes(submenuParam)) {
      displayMenu(menuData, submenuParam);
      navElement
        .find("button")
        .filter(function () {
          return $(this).text().trim() === submenuParam;
        })
        .addClass("active")
        .siblings()
        .removeClass("active");
      $(".submenu").val(submenuParam);
    } else if (categories.length > 0) {
      // 기본 3번째 버튼 표시
      navElement.find("button").eq(2).trigger("click");
    }
  }).fail(function (error) {
    console.error("데이터 로딩 실패:", error);
    contentElement.html(
      `<p style="color: red; text-align: center;">
         메뉴 데이터를 불러오는 데 실패했습니다. steak.json 파일이 올바른 위치에 있는지 확인해주세요.
       </p>`
    );
  });
});

function displayMenu(allData, categoryName) {
  const contentElement = $("#menu-content-area");
  const categoryData = allData[categoryName];

  contentElement.empty();

  const categoryClass = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  if (categoryName !== "BEVERAGES & ALCOHOL") {
    const title = $("<h2></h2>")
      .text(categoryName)
      .addClass(`category-${categoryClass}`);
    contentElement.append(title);
  }

  const container = $(
    `<div class="menu-items-container category-${categoryClass}"></div>`
  );
  contentElement.append(container);

  if (categoryName === "BLACK LABEL CHEF EDITION") {
    const subCategoryObject = categoryData[0];
    for (const subCategoryName in subCategoryObject) {
      const subTitle = $("<h3></h3>").text(subCategoryName);
      const subContainer = $('<div class="menu-items-container sub"></div>');
      container.append(subTitle, subContainer);

      const items = subCategoryObject[subCategoryName];
      if (Array.isArray(items)) {
        const menuElements = items.map((item) =>
          createMenuItemElement(item, categoryName)
        );
        subContainer.append(menuElements);
      }
    }
  } else if (categoryName === "BEVERAGES & ALCOHOL") {
    for (const subCategoryName in categoryData) {
      const subTitle = $("<h3></h3>").text(subCategoryName);
      const subContainer = $(
        '<div class="menu-items-container sub category-beverages-alcohol"></div>'
      );
      container.append(subTitle, subContainer);

      const items = categoryData[subCategoryName];
      if (Array.isArray(items)) {
        const menuElements = items.map((item) =>
          createMenuItemElement(item, categoryName)
        );
        subContainer.append(menuElements);
      }
    }
  } else if (Array.isArray(categoryData)) {
    const menuElements = categoryData.map((item) =>
      createMenuItemElement(item, categoryName)
    );
    container.append(menuElements);
  } else if (typeof categoryData === "object" && categoryData !== null) {
    if (categoryData.items && categoryData.headerImageUrl) {
      const headerImg = $("<img>")
        .attr("src", categoryData.headerImageUrl)
        .addClass("category-header-image");
      container.append(headerImg);
      const lunchElements = categoryData.items.map((item) =>
        createMenuItemElement(item, categoryName)
      );
      container.append(lunchElements);
    } else {
      for (const subCategory in categoryData) {
        const subTitle = $("<h3></h3>").text(subCategory);
        const subContainer = $('<div class="menu-items-container sub"></div>');
        container.append(subTitle, subContainer);

        if (Array.isArray(categoryData[subCategory])) {
          const subMenuElements = categoryData[subCategory].map((item) =>
            createMenuItemElement(item, categoryName)
          );
          subContainer.append(subMenuElements);
        }
      }
    }
  }

  // 가격 포맷 처리
  $(".item-price").each(function () {
    const html = $(this).html();

    const parts = html.split(" / ");
    if (parts.length === 2) {
      const menuName = $(this)
        .closest(".menu-item")
        .find(".item-name")
        .text()
        .trim();

      const excludeSeparator =
        menuName.includes("테라") || menuName.includes("하이네켄");

      const firstPart = `<div class="price-part">${parts[0].trim()}</div>`;
      const secondPart = `<div class="price-part">${parts[1].trim()}</div>`;
      $(this).html(firstPart + secondPart);
      $(this).css({
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center",
        "max-width": "320px",
        margin: "0 auto",
        "font-size": "15px",
        "border-left": "1px solid transparent",
      });

      $(this).css("position", "relative");

      if (!excludeSeparator) {
        if (!$(this).find(".separator").length) {
          $("<span class='separator'></span>")
            .css({
              position: "absolute",
              top: "10%",
              bottom: "10%",
              left: "50%",
              width: "1px",
              "background-color": "#999",
              transform: "translateX(-50%)",
              "z-index": "1",
            })
            .appendTo($(this));
        }
      }

      $(this).children(".price-part").css({
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        width: "48%",
        "z-index": "2",
      });
    } else {
      const newHtml = html
        .replace(/(\d+ml)/g, '<span class="ml-small">$1</span>')
        .replace(/ \/ /g, " <br> ");
      $(this).html(newHtml);
    }
  });
}

function createMenuItemElement(item, categoryName) {
  const itemElement = $('<div class="menu-item"></div>');

  const categoryClass = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  itemElement.addClass(`category-${categoryClass}`);

  const noImageCategories = [
    "BEVERAGES & ALCOHOL",
    "DESSERTS",
    "SIDES & ADD ON MATES",
  ];

  if (!noImageCategories.includes(categoryName)) {
    const imageUrl =
      item.imageUrl || "https://via.placeholder.com/150?text=No+Image";
    const nameForAlt = formatName(item).replace(/<[^>]*>?/gm, "");
    const image = $("<img>").attr("src", imageUrl).attr("alt", nameForAlt);
    itemElement.append(image);
  } else {
    itemElement.addClass("no-image");
  }

  const nameHTML = formatName(item);
  const priceHTML = formatPrice(item);

  const name = $('<div class="item-name"></div>').html(nameHTML);
  const price = $('<div class="item-price"></div>').html(priceHTML);

  itemElement.append(name, price);

  if (item.description) {
    let descText = "";
    if (typeof item.description === "object" && item.description.summary) {
      descText = item.description.summary;
    } else if (typeof item.description === "string") {
      descText = item.description;
    }
    const description = $('<p class="item-description"></p>').text(descText);
    itemElement.append(description);
  }

  return itemElement;
}

function formatName(item) {
  if (typeof item.name === "object" && item.name !== null) {
    return `${item.name.korean} <span class="en-name">${item.name.english}</span>`;
  }
  if (item.name) {
    return item.name;
  }
  if (item.name_korean) {
    const enName = item.name_english
      ? `<span class="en-name">${item.name_english}</span>`
      : "";
    return `${item.name_korean} ${enName}`;
  }
  return "이름 없음";
}

function formatPrice(item) {
  // WINES 섹션의 특별한 가격 구조 처리
  if (item.price && Array.isArray(item.price)) {
    return item.price
      .map((p) => `${p.type} ${p.value.toLocaleString()}원`)
      .join(" / ");
  }

  // 기존 price 속성 처리
  if (item.price && typeof item.price === "number") {
    return `${item.price.toLocaleString()}원`;
  }

  // prices 배열 처리
  if (item.prices) {
    return item.prices
      .map(
        (p) =>
          `${(p.type || p.size).replace(
            /\n/g,
            "<br>"
          )}<br>${p.price.toLocaleString()}원`
      )
      .join(" / ");
  }

  // 100g당 가격 처리
  if (item.price_per_100g) {
    return `${item.price_per_100g.toLocaleString()}원 / 100g`;
  }

  return "가격 정보 없음";
}

$(function () {
  $(".submenu").on("change", function (event, extra) {
    // extra.fromButton가 true면 버튼 클릭 이벤트에서 온거라 무한 루프 방지
    if (extra && extra.fromButton) {
      // 셀렉트 박스에서 온 이벤트는 무시
      return;
    }

    const selectedCategory = $(this).find("option:selected").text().trim();

    const $btn = $("#main-menu-nav button").filter(function () {
      return $(this).text().trim() === selectedCategory;
    });

    if ($btn.length) {
      $btn.first().click();
    } else {
      console.warn("해당하는 카테고리 버튼이 없습니다:", selectedCategory);
    }

    // appetiNotice 보여주기/숨기기 제어
    if (selectedCategory === "APPETIZERS & SALADS") {
      $(".appetiNotice").show();
    } else {
      $(".appetiNotice").hide();
    }

    if (selectedCategory === "BLACK LABEL CHEF EDITION") {
      $(".blackLabelNotice").show();
    } else {
      $(".blackLabelNotice").hide();
    }
  });

  // 초기 로딩시 select 박스와 버튼 상태 동기화
  const selectedCategoryOnLoad = $(".submenu")
    .find("option:selected")
    .text()
    .trim();
  const $btnOnLoad = $("#main-menu-nav button").filter(function () {
    return $(this).text().trim() === selectedCategoryOnLoad;
  });

  if ($btnOnLoad.length) {
    $btnOnLoad.first().click();
  } else {
    console.warn("초기 로딩 시 버튼 없음:", selectedCategoryOnLoad);
  }

  // blackLabelNotice 기본 노출
  $(".blackLabelNotice").show();
});
