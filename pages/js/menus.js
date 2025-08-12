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
        });
    });
    navElement.append(menuButtons);

    if (categories.length > 0) {
      navElement.find("button").eq(2).trigger("click"); // 3번째 버튼 클릭 시도
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

  // 카테고리 고유 클래스 생성
  const categoryClass = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  if (categoryName !== "BEVERAGES & ALCOHOL") {
    // h2에 클래스 추가
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
    // 여기서 subContainer에 category-beverages-alcohol 클래스 추가
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

  $(".item-price").each(function () {
    const html = $(this).html();
    const newHtml = html
      .replace(/(\d+ml)/g, '<span class="ml-small">$1</span>')
      .replace(/ \/ /g, " <br> ");
    $(this).html(newHtml);
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
  if (item.price) {
    return `${item.price.toLocaleString()}`;
  }
  if (item.prices) {
    return item.prices
      .map((p) => `${p.type || p.size} ${p.price.toLocaleString()}원`)
      .join(" / ");
  }
  if (item.price_per_100g) {
    return `${item.price_per_100g.toLocaleString()}원 / 100g`;
  }
  return "가격 정보 없음";
}

$(function () {
  $(".submenu").on("change", function () {
    const selectedCategory = $(this).find("option:selected").text().trim();

    const $btn = $("#main-menu-nav button").filter(function () {
      return $(this).text().trim() === selectedCategory;
    });

    if ($btn.length) {
      $btn.click();
    } else {
      console.warn("해당하는 카테고리 버튼이 없습니다:", selectedCategory);
    }
  });

  const selectedCategoryOnLoad = $(".submenu")
    .find("option:selected")
    .text()
    .trim();
  const $btnOnLoad = $("#main-menu-nav button").filter(function () {
    return $(this).text().trim() === selectedCategoryOnLoad;
  });

  if ($btnOnLoad.length) {
    $btnOnLoad.click();
  } else {
    console.warn("초기 로딩 시 버튼 없음:", selectedCategoryOnLoad);
  }
});

$(".submenu").on("change", function () {
  const selectedText = $(this).find("option:selected").text().trim();

  const $btn = $("#main-menu-nav button").filter(function () {
    return $(this).text().trim() === selectedText;
  });

  if ($btn.length) {
    $btn.first().click();
  } else {
    console.warn("해당하는 버튼이 없습니다:", selectedText);
  }
});
