let fontInriaSansBold;
let fontInriaSansBoldItalic;
let fontInriaSansItalic;
let fontInriaSansLight;
let fontInriaSansLightItalic;
let fontInriaSansRegular;

let imageAd1;
let imageAd2;
let imageAd3;
let imageAd4;
let imageAd5;
let imageAd6;

function preload() {
  fontInriaSansBold = loadFont("../fonts/InriaSans-Bold.ttf");
  fontInriaSansBoldItalic = loadFont("../fonts/InriaSans-BoldItalic.ttf");
  fontInriaSansItalic = loadFont("../fonts/InriaSans-Italic.ttf");
  fontInriaSansLight = loadFont("../fonts/InriaSans-Light.ttf");
  fontInriaSansLightItalic = loadFont("../fonts/InriaSans-LightItalic.ttf");
  fontInriaSansRegular = loadFont("../fonts/InriaSans-Regular.ttf");

  imageAd1 = loadImage("../ads/ad1.png");
  imageAd2 = loadImage("../ads/ad2.png");
  imageAd3 = loadImage("../ads/ad3.png");
  imageAd4 = loadImage("../ads/ad4.png");
  imageAd5 = loadImage("../ads/ad5.png");
  imageAd6 = loadImage("../ads/ad6.png");
}

function setup() {
  createCanvas(3840, 1080);
}

function destinationBoard(station, trainNumber) {
  fill(0, 181, 226);
  rect(0, 0, 1920, 1080);

  fill(0, 181, 226);
  stroke(255);
  rect(0, 864, 340, 216);
  fill(255);
  noStroke();
  textSize(128);
  text(trainNumber, 36, 895);

  fill(255);
  textSize(574);
  textFont(fontInriaSansBold);
  text("acela", 311, 81);

  if (station != null) {
    fill(255);
    noStroke();
    rect(340, 864, 1580, 216);
    fill(0, 181, 226);
    textSize(128);
    text(`to ${station}`, 392, 895);
  }
}

function thisIs(station) {
  noStroke();
  fill(255);
  rect(1920, 0, 1920, 1080);

  fill(0, 181, 226);

  textFont(fontInriaSansRegular);
  textSize(96);
  text("This is", 2021, 406);

  textFont(fontInriaSansBold);
  textSize(150);
  text(station, 2021, 500);
}

function connectionsTo(
  pageNumber,
  connection1,
  connection2,
  connection3,
  connection4
) {
  fill(255);
  rect(1920, 0, 1920, 1080);

  let con1BgYPos = 216;
  let con2BgYPos = 432;
  let con3BgYPos = 648;
  let con4BgYPos = 864;

  let con1ProviderTextYPos = 235;
  let con2ProviderTextYPos = 451;
  let con3ProviderTextYPos = 667;
  let con4ProviderTextYPos = 883;

  let con1ServiceTextYPos = 298;
  let con2ServiceTextYPos = 514;
  let con3ServiceTextYPos = 730;
  let con4ServiceTextYPos = 946;

  let con1SingleLineTextYPos = 266;
  let con2SingleLineTextYPos = 482;
  let con3SingleLineTextYPos = 698;
  let con4SingleLineTextYPos = 914;

  let defaultColor = [96, 96, 96];

  fill(0, 181, 226);
  noStroke();

  textFont(fontInriaSansBold);
  textSize(96);
  text("Interchange is available for", 2021, 50);

  textFont(fontInriaSansRegular);
  textSize(48);
  textAlign(RIGHT);
  text(pageNumber, 3739, 79);
  textAlign(LEFT);

  if (connection1) {
    // bg
    fill(connection1[2][0], connection1[2][1], connection1[2][2]);
    stroke(255);
    rect(1920, con1BgYPos, 1920, 216);

    noStroke();

    if (connection1[3]) {
      fill(0);
    } else {
      fill(255);
    }

    if (connection1[0] != null) {
      // provider
      textFont(fontInriaSansBold);
      textSize(64);
      text(connection1[0], 2021, con1ProviderTextYPos);

      // service
      textFont(fontInriaSansRegular);
      textSize(96);
      text(connection1[1], 2021, con1ServiceTextYPos);
    } else {
      textFont(fontInriaSansRegular);
      textSize(96);
      text(connection1[1], 2021, con1SingleLineTextYPos);
    }
  }
  if (connection2) {
    // bg
    fill(connection2[2][0], connection2[2][1], connection2[2][2]);
    stroke(255);
    rect(1920, con2BgYPos, 1920, 216);

    noStroke();

    if (connection2[3]) {
      fill(0);
    } else {
      fill(255);
    }

    if (connection2[0] != null) {
      // provider
      textFont(fontInriaSansBold);
      textSize(64);
      text(connection2[0], 2021, con2ProviderTextYPos);

      // service
      textFont(fontInriaSansRegular);
      textSize(96);
      text(connection2[1], 2021, con2ServiceTextYPos);
    } else {
      textFont(fontInriaSansRegular);
      textSize(96);
      text(connection2[1], 2021, con2SingleLineTextYPos);
    }
  }
  if (connection3) {
    // bg
    fill(connection3[2][0], connection3[2][1], connection3[2][2]);
    stroke(255);
    rect(1920, con3BgYPos, 1920, 216);

    noStroke();

    if (connection3[3]) {
      fill(0);
    } else {
      fill(255);
    }

    if (connection3[0] != null) {
      // provider
      textFont(fontInriaSansBold);
      textSize(64);
      text(connection3[0], 2021, con3ProviderTextYPos);

      // service
      textFont(fontInriaSansRegular);
      textSize(96);
      text(connection3[1], 2021, con3ServiceTextYPos);
    } else {
      textFont(fontInriaSansRegular);
      textSize(96);
      text(connection3[1], 2021, con3SingleLineTextYPos);
    }
  }
  if (connection4) {
    // bg
    fill(connection4[2][0], connection4[2][1], connection4[2][2]);
    stroke(255);
    rect(1920, con4BgYPos, 1920, 216);

    noStroke();

    if (connection4[3]) {
      fill(0);
    } else {
      fill(255);
    }

    if (connection4[0] != null) {
      // provider
      textFont(fontInriaSansBold);
      textSize(64);
      text(connection4[0], 2021, con4ProviderTextYPos);

      // service
      textFont(fontInriaSansRegular);
      textSize(96);
      text(connection4[1], 2021, con4ServiceTextYPos);
    } else {
      textFont(fontInriaSansRegular);
      textSize(96);
      text(connection4[1], 2021, con4SingleLineTextYPos);
    }
  }
}

let adLength = 0;
let ad = 0;

function ads() {
  if (ad == 0) {
    ad = 1;
  } else if (ad == 1) {
    image(imageAd1, 1920, 0);
  } else if (ad == 2) {
    image(imageAd2, 1920, 0);
  } else if (ad == 3) {
    image(imageAd3, 1920, 0);
  } else if (ad == 4) {
    image(imageAd4, 1920, 0);
  } else if (ad == 5) {
    image(imageAd5, 1920, 0);
  } else if (ad == 6) {
    image(imageAd6, 1920, 0);
  } else if (ad == 7) {
    ad = 0;
  }

  if (adLength != 3840) {
    adLength = adLength + 5;
  }
  if (adLength == 3840) {
    adLength = 0;
    ad++;
  }
}

let pageLength = 0;
let page = 0;

function stationBostonSouthStation(terminating) {
  if (page == 0) {
    thisIs("Boston South");
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 1) {
    connectionsTo(
      "1/4",
      ["Amtrak", "Lake Shore Limited", [4, 80, 124], false],
      ["Amtrak", "Northeast Regional", [4, 80, 124], false],
      ["MBTA Commuter Rail", "Fairmount Line", [128, 39, 108], false],
      ["MBTA Commuter Rail", "Framingham/Worcester Line", [128, 39, 108], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 2) {
    connectionsTo(
      "2/4",
      ["MBTA Commuter Rail", "Franklin/Foxboro Line", [128, 39, 108], false],
      ["MBTA Commuter Rail", "Needham Line", [128, 39, 108], false],
      ["MBTA Commuter Rail", "Old Colony Lines", [128, 39, 108], false],
      ["MBTA Commuter Rail", "Greenbush Line", [128, 39, 108], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 3) {
    connectionsTo(
      "3/4",
      [
        "MBTA Commuter Rail",
        "Providence/Stoughton Line",
        [128, 39, 108],
        false,
      ],
      ["MBTA Subway", "Red Line", [218, 41, 28], false],
      ["MBTA Subway", "Silver Line", [124, 135, 142], false],
      [null, "Interctiy bus service", [96, 96, 96], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 4) {
    connectionsTo("4/4", [null, "MBTA bus services", [255, 199, 44], true]);
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 5 && terminating) {
    noStroke();
    fill(255);
    rect(1920, 0, 1920, 1080);

    fill(0, 181, 226);

    textFont(fontInriaSansBold);
    textSize(150);
    text("This train terminates here.", 2021, 500);

    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else {
    page = 0;
    station++;
  }

  if (pageLength != 1920) {
    pageLength = pageLength + 5;
  }
  if (pageLength == 1920) {
    page++;
    pageLength = 0;
  }
}

function stationBostonBackBay(terminating) {
  if (page == 0) {
    thisIs("Boston Back Bay");
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 1) {
    connectionsTo(
      "1/2",
      ["Amtrak", "Northeast Regional", [4, 80, 124], false],
      ["Amtrak", "Lake Shore Limited", [4, 80, 124], false],
      [
        "MBTA Commuter Rail",
        "Framingham/Worcester Line",
        [128, 39, 108],
        false,
      ],
      ["MBTA Commuter Rail", "Franklin/Foxboro Line", [128, 39, 108], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 2) {
    connectionsTo(
      "2/2",
      ["MBTA Commuter Rail", "Needham Line", [128, 39, 108], false],
      [
        "MBTA Commuter Rail",
        "Providence/Stoughton Line",
        [128, 39, 108],
        false,
      ],
      ["MBTA Subway", "Orange Line", [237, 139, 0], false],
      [null, "MBTA bus services", [255, 199, 44], true]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 3 && terminating) {
    noStroke();
    fill(255);
    rect(1920, 0, 1920, 1080);

    fill(0, 181, 226);

    textFont(fontInriaSansBold);
    textSize(150);
    text("This train terminates here.", 2021, 500);

    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else {
    page = 0;
    station++;
  }

  if (pageLength != 1920) {
    pageLength = pageLength + 5;
  }
  if (pageLength == 1920) {
    page++;
    pageLength = 0;
  }
}

function stationRoute128(terminating) {
  if (page == 0) {
    thisIs("Route 128");
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 1) {
    connectionsTo(
      "1/1",
      ["Amtrak", "Northeast Regional", [4, 80, 124], false],
      [
        "MBTA Commuter Rail",
        "Providence/Stoughton Line ",
        [128, 39, 108],
        false,
      ]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 2 && terminating) {
    noStroke();
    fill(255);
    rect(1920, 0, 1920, 1080);

    fill(0, 181, 226);

    textFont(fontInriaSansBold);
    textSize(150);
    text("This train terminates here.", 2021, 500);

    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else {
    page = 0;
    station++;
  }

  if (pageLength != 1920) {
    pageLength = pageLength + 5;
  }
  if (pageLength == 1920) {
    page++;
    pageLength = 0;
  }
}

function stationProvidence(terminating) {
  if (page == 0) {
    thisIs("Providence");
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 1) {
    connectionsTo(
      "1/1",
      ["Amtrak", "Northeast Regional", [4, 80, 124], false],
      [
        "MBTA Commuter Rail",
        "Providence/Stoughton Line ",
        [128, 39, 108],
        false,
      ],
      [
        "Local bus",
        "Rhode Island Public Transit Authority",
        [96, 96, 96],
        false,
      ],
      ["Amtrak", "Thruway", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 2 && terminating) {
    noStroke();
    fill(255);
    rect(1920, 0, 1920, 1080);

    fill(0, 181, 226);

    textFont(fontInriaSansBold);
    textSize(150);
    text("This train terminates here.", 2021, 500);

    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else {
    page = 0;
    station++;
  }

  if (pageLength != 1920) {
    pageLength = pageLength + 5;
  }
  if (pageLength == 1920) {
    page++;
    pageLength = 0;
  }
}

function stationNewHavenUnion(terminating) {
  if (page == 0) {
    thisIs("New Haven Union Station");
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 1) {
    connectionsTo(
      "1/2",
      ["Amtrak", "Hartford Line", [4, 80, 124], false],
      ["Amtrak", "Northeast Regional", [4, 80, 124], false],
      ["Amtrak", "Vermonter", [4, 80, 124], false],
      ["CTrail", "Hartford Line", [234, 22, 39], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 2) {
    connectionsTo(
      "2/2",
      ["CTrail", "Shore Line East", [234, 22, 39], false],
      ["Metro-North", "New Haven Line", [238, 0, 52], false],
      ["Local bus", "CTtransit New Haven", [96, 96, 96], false],
      [null, "Intercity bus services", [96, 96, 96], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 3 && terminating) {
    noStroke();
    fill(255);
    rect(1920, 0, 1920, 1080);

    fill(0, 181, 226);

    textFont(fontInriaSansBold);
    textSize(150);
    text("This train terminates here.", 2021, 500);

    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else {
    page = 0;
    station++;
  }

  if (pageLength != 1920) {
    pageLength = pageLength + 5;
  }
  if (pageLength == 1920) {
    page++;
    pageLength = 0;
  }
}

function stationStamford(terminating) {
  if (page == 0) {
    thisIs("Stamford");
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 1) {
    connectionsTo(
      "1/2",
      ["Amtrak", "Northeast Regional", [4, 80, 124], false],
      ["Amtrak", "Vermonter", [4, 80, 124], false],
      ["Metro-North", "New Haven Line", [238, 0, 52], false],
      ["Metro-North", "Danbury Branch", [238, 0, 52], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 2) {
    connectionsTo(
      "2/2",
      ["Metro-North", "New Canaan Branch", [238, 0, 52], false],
      ["Metro-North", "Waterbury Branch", [238, 0, 52], false],
      ["Local bus", "CTtransit Stamford", [96, 96, 96], false],
      [null, "Intercity bus services", [96, 96, 96], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 3 && terminating) {
    noStroke();
    fill(255);
    rect(1920, 0, 1920, 1080);

    fill(0, 181, 226);

    textFont(fontInriaSansBold);
    textSize(150);
    text("This train terminates here.", 2021, 500);

    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else {
    page = 0;
    station++;
  }

  if (pageLength != 1920) {
    pageLength = pageLength + 5;
  }
  if (pageLength == 1920) {
    page++;
    pageLength = 0;
  }
}

function stationNewYorkPenn(terminating) {
  if (page == 0) {
    thisIs("New York-Penn Station");
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 1) {
    connectionsTo(
      "1/8",
      ["Amtrak", "Cardinal", [4, 80, 124], false],
      ["Amtrak", "Crescent", [4, 80, 124], false],
      ["Amtrak", "Lake Shore Limited", [4, 80, 124], false],
      ["Amtrak", "Palmetto", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 2) {
    connectionsTo(
      "2/8",
      ["Amtrak", "Silver Meteor", [4, 80, 124], false],
      ["Amtrak", "Silver Star", [4, 80, 124], false],
      ["Amtrak", "Adirondack", [4, 80, 124], false],
      ["Amtrak", "Berkshire Flyer", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 3) {
    connectionsTo(
      "3/8",
      ["Amtrak", "Carolinian", [4, 80, 124], false],
      ["Amtrak", "Empire Service", [4, 80, 124], false],
      ["Amtrak", "Ethan Allen Express", [4, 80, 124], false],
      ["Amtrak", "Keystone Service", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 4) {
    connectionsTo(
      "4/8",
      ["Amtrak", "Maple Leaf", [4, 80, 124], false],
      ["Amtrak", "Northeast Regional", [4, 80, 124], false],
      ["Amtrak", "Pennsylvanian", [4, 80, 124], false],
      ["Amtrak", "Vermonter", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 5) {
    connectionsTo(
      "5/8",
      ["Long Island Rail Road", "City Terminal Zone", [77, 83, 87], false],
      ["Long Island Rail Road", "Port Washington Branch", [199, 11, 48], false],
      ["NJ Transit", "North Jersey Coast Line", [0, 164, 228], false],
      ["NJ Transit", "Northeast Corridor Line", [228, 60, 63], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 6) {
    connectionsTo(
      "6/8",
      ["NJ Transit", "Gladstone Branch", [162, 213, 174], true],
      ["NJ Transit", "Montclair-Boonton Line", [230, 107, 91], true],
      ["NJ Transit", "Morristown Line", [0, 169, 79], false],
      ["NJ Transit", "Raritan Valley Line", [250, 166, 52], true]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 7) {
    connectionsTo(
      "7/8",
      ["NYC Subway", "1 Line", [239, 50, 42], false],
      ["NYC Subway", "2 Line", [239, 50, 42], false],
      ["NYC Subway", "3 Line", [239, 50, 42], false],
      ["NYC Subway", "A Line", [0, 54, 167], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 8) {
    connectionsTo(
      "8/8",
      ["NYC Subway", "C Line", [0, 54, 167], false],
      ["NYC Subway", "E Line", [0, 54, 167], false],
      [null, "Local bus services", [96, 96, 96], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 9 && terminating) {
    noStroke();
    fill(255);
    rect(1920, 0, 1920, 1080);

    fill(0, 181, 226);

    textFont(fontInriaSansBold);
    textSize(150);
    text("This train terminates here.", 2021, 500);

    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else {
    page = 0;
    station++;
  }

  if (pageLength != 1920) {
    pageLength = pageLength + 5;
  }
  if (pageLength == 1920) {
    page++;
    pageLength = 0;
  }
}

function stationNewarkPenn(terminating) {
  if (page == 0) {
    thisIs("Newark Penn Station");
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 1) {
    connectionsTo(
      "1/4",
      ["Amtrak", "Cardinal", [4, 80, 124], false],
      ["Amtrak", "Carolinian", [4, 80, 124], false],
      ["Amtrak", "Crescent", [4, 80, 124], false],
      ["Amtrak", "Keystone Service", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 2) {
    connectionsTo(
      "2/4",
      ["Amtrak", "Palmetto", [4, 80, 124], false],
      ["Amtrak", "Pennsylvanian", [4, 80, 124], false],
      ["Amtrak", "Silver Meteor", [4, 80, 124], false],
      ["Amtrak", "Silver Star", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 3) {
    connectionsTo(
      "3/4",
      ["Amtrak", "Vermonter", [4, 80, 124], false],
      ["NJ Transit", "Newark Light Rail", [96, 96, 96], false],
      ["NJ Transit", "North Jersey Coast Line", [0, 164, 228], false],
      ["NJ Transit", "Northeast Corridor Line", [239, 62, 66], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 4) {
    connectionsTo(
      "4/4",
      ["NJ Transit", "Raritan Valley Line", [250, 166, 52], true],
      ["PATH", "NWK-WTC", [239, 57, 65], false],
      ["Local bus", "NJ Transit Bus", [96, 96, 96], false],
      [null, "Intercity bus service", [96, 96, 96], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 5 && terminating) {
    noStroke();
    fill(255);
    rect(1920, 0, 1920, 1080);

    fill(0, 181, 226);

    textFont(fontInriaSansBold);
    textSize(150);
    text("This train terminates here.", 2021, 500);

    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else {
    page = 0;
    station++;
  }

  if (pageLength != 1920) {
    pageLength = pageLength + 5;
  }
  if (pageLength == 1920) {
    page++;
    pageLength = 0;
  }
}

function stationMetropark(terminating) {
  if (page == 0) {
    thisIs("Metropark");
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 1) {
    connectionsTo(
      "1/2",
      ["Amtrak", "Keystone Service", [4, 80, 124], false],
      ["Amtrak", "Northeast Regional", [4, 80, 124], false],
      ["Amtrak", "Vermonter", [4, 80, 124], false],
      ["NJ Transit", "Northeast Corridor Line", [239, 62, 66], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 2) {
    connectionsTo("2/2", ["Local bus", "NJ Transit Bus", [96, 96, 96], false]);
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 3 && terminating) {
    noStroke();
    fill(255);
    rect(1920, 0, 1920, 1080);

    fill(0, 181, 226);

    textFont(fontInriaSansBold);
    textSize(150);
    text("This train terminates here.", 2021, 500);

    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else {
    page = 0;
    station++;
  }

  if (pageLength != 1920) {
    pageLength = pageLength + 5;
  }
  if (pageLength == 1920) {
    page++;
    pageLength = 0;
  }
}

function stationPhiladelphia30thSt(terminating) {
  if (page == 0) {
    thisIs("Philadelphia 30th Street");
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 1) {
    connectionsTo(
      "1/5",
      ["Amtrak", "Cardinal", [4, 80, 124], false],
      ["Amtrak", "Carolinian", [4, 80, 124], false],
      ["Amtrak", "Crescent", [4, 80, 124], false],
      ["Amtrak", "Keystone Service", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 2) {
    connectionsTo(
      "2/5",
      ["Amtrak", "Northeast Regional", [4, 80, 124], false],
      ["Amtrak", "Palmetto", [4, 80, 124], false],
      ["Amtrak", "Pennsylvanian", [4, 80, 124], false],
      ["Amtrak", "Silver Meteor", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 3) {
    connectionsTo(
      "3/5",
      ["Amtrak", "Silver Star", [4, 80, 124], false],
      ["Amtrak", "Vermonter", [4, 80, 124], false],
      ["SEPTA", "all routes", [25, 78, 164], false],
      ["NJ Transit", "Atlantic City Line", [0, 93, 170], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 4) {
    connectionsTo(
      "4/5",
      ["SEPTA City Transit", "Market-Frankford", [0, 125, 195], false],
      ["SEPTA City Transit", "Subway-Surface", [93, 151, 49], false],
      ["Local bus", "SEPTA City Bus", [96, 96, 96], false],
      ["Local bus", "SEPTA Suburban Bus", [96, 96, 96], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 5) {
    connectionsTo(
      "5/5",
      ["Local bus", "NJ Transit Bus", [96, 96, 96], false],
      [null, "Intercity bus services", [96, 96, 96], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 6 && terminating) {
    noStroke();
    fill(255);
    rect(1920, 0, 1920, 1080);

    fill(0, 181, 226);

    textFont(fontInriaSansBold);
    textSize(150);
    text("This train terminates here.", 2021, 500);

    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else {
    page = 0;
    station++;
  }

  if (pageLength != 1920) {
    pageLength = pageLength + 5;
  }
  if (pageLength == 1920) {
    page++;
    pageLength = 0;
  }
}

function stationWilmington(terminating) {
  if (page == 0) {
    thisIs("Wilmington");
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 1) {
    connectionsTo(
      "1/3",
      ["Amtrak", "Cardinal", [4, 80, 124], false],
      ["Amtrak", "Carolinian", [4, 80, 124], false],
      ["Amtrak", "Crescent", [4, 80, 124], false],
      ["Amtrak", "Northeast Regional", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 2) {
    connectionsTo(
      "2/3",
      ["Amtrak", "Palmetto", [4, 80, 124], false],
      ["Amtrak", "Silver Meteor", [4, 80, 124], false],
      ["Amtrak", "Silver Star", [4, 80, 124], false],
      ["Amtrak", "Vermonter", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 3) {
    connectionsTo(
      "3/3",
      ["SEPTA Regional Rail", "Wilmington/Newark Line", [142, 209, 106], true],
      ["Local bus", "DART First State", [96, 96, 96], false],
      [null, "Intercity bus services", [96, 96, 96], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 4 && terminating) {
    noStroke();
    fill(255);
    rect(1920, 0, 1920, 1080);

    fill(0, 181, 226);

    textFont(fontInriaSansBold);
    textSize(150);
    text("This train terminates here.", 2021, 500);

    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else {
    page = 0;
    station++;
  }

  if (pageLength != 1920) {
    pageLength = pageLength + 5;
  }
  if (pageLength == 1920) {
    page++;
    pageLength = 0;
  }
}

function stationBaltimorePenn(terminating) {
  if (page == 0) {
    thisIs("Baltimore Penn Station");
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 1) {
    connectionsTo(
      "1/3",
      ["Amtrak", "Cardinal", [4, 80, 124], false],
      ["Amtrak", "Carolinian", [4, 80, 124], false],
      ["Amtrak", "Crescent", [4, 80, 124], false],
      ["Amtrak", "Northeast Regional", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 2) {
    connectionsTo(
      "2/3",
      ["Amtrak", "Palmetto", [4, 80, 124], false],
      ["Amtrak", "Pennsylvanian", [4, 80, 124], false],
      ["Amtrak", "Silver Meteor", [4, 80, 124], false],
      ["Amtrak", "Silver Star", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 3) {
    connectionsTo(
      "3/3",
      ["Amtrak", "Vermonter", [4, 80, 124], false],
      ["MARC", "Penn Line", [218, 42, 56], false],
      ["Baltimore", "Light RailLink", [0, 95, 128], false],
      [null, "Local bus services", [96, 96, 96], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 4 && terminating) {
    noStroke();
    fill(255);
    rect(1920, 0, 1920, 1080);

    fill(0, 181, 226);

    textFont(fontInriaSansBold);
    textSize(150);
    text("This train terminates here.", 2021, 500);

    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else {
    page = 0;
    station++;
  }

  if (pageLength != 1920) {
    pageLength = pageLength + 5;
  }
  if (pageLength == 1920) {
    page++;
    pageLength = 0;
  }
}

function stationBWI(terminating) {
  if (page == 0) {
    thisIs("BWI Airport");
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 1) {
    connectionsTo(
      "1/2",
      ["Amtrak", "Crescent", [4, 80, 124], false],
      ["Amtrak", "Northeast Regional", [4, 80, 124], false],
      ["Amtrak", "Vermonter", [4, 80, 124], false],
      ["MARC", "Penn Line", [218, 42, 56], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 2) {
    connectionsTo(
      "2/2",
      ["Shuttle to", "Airport", [4, 80, 124], false],
      [null, "Local bus services", [96, 96, 96], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 3 && terminating) {
    noStroke();
    fill(255);
    rect(1920, 0, 1920, 1080);

    fill(0, 181, 226);

    textFont(fontInriaSansBold);
    textSize(150);
    text("This train terminates here.", 2021, 500);

    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else {
    page = 0;
    station++;
  }

  if (pageLength != 1920) {
    pageLength = pageLength + 5;
  }
  if (pageLength == 1920) {
    page++;
    pageLength = 0;
  }
}

function stationWashingtonDC(terminating) {
  if (page == 0) {
    thisIs("Washington D.C.");
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 1) {
    connectionsTo(
      "1/5",
      ["Amtrak", "Capitol Limited", [4, 80, 124], false],
      ["Amtrak", "Cardinal", [4, 80, 124], false],
      ["Amtrak", "Carolinian", [4, 80, 124], false],
      ["Amtrak", "Crescent", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 2) {
    connectionsTo(
      "2/5",
      ["Amtrak", "Northeast Regional", [4, 80, 124], false],
      ["Amtrak", "Palmetto", [4, 80, 124], false],
      ["Amtrak", "Silver Meteor", [4, 80, 124], false],
      ["Amtrak", "Silver Star", [4, 80, 124], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 3) {
    connectionsTo(
      "3/5",
      ["Amtrak", "Vermonter", [4, 80, 124], false],
      ["Amtrak", "Thruway", [4, 80, 124], false],
      ["MARC", "Brunswick Line", [254, 169, 46], false],
      ["MARC", "Camden Line", [255, 86, 36], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 4) {
    connectionsTo(
      "4/5",
      ["MARC", "Penn Line", [218, 42, 56], false],
      ["VRE", "Manassas Line", [26, 69, 139], false],
      ["VRE", "Fredericksburg Line", [235, 27, 35], false],
      ["Metro", "Red Line", [250, 40, 41], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 5) {
    connectionsTo(
      "5/5",
      ["DC Streetcar", "H Street/Benning Road Line", [239, 42, 45], false],
      [null, "Local bus services", [96, 96, 96], false],
      [null, "Intercity bus services", [96, 96, 96], false]
    );
    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else if (page == 6 && terminating) {
    noStroke();
    fill(255);
    rect(1920, 0, 1920, 1080);

    fill(0, 181, 226);

    textFont(fontInriaSansBold);
    textSize(150);
    text("This train terminates here.", 2021, 500);

    fill(0, 181, 226);
    rect(1920, 0, pageLength, 10);
  } else {
    page = 0;
    station++;
  }

  if (pageLength != 1920) {
    pageLength = pageLength + 5;
  }
  if (pageLength == 1920) {
    page++;
    pageLength = 0;
  }
}

let station = 0;

function draw() {
  noStroke();
  textAlign(LEFT, TOP);

  destinationBoard("Washington, D.C.", "2251");

  if (station == 1) {
    stationBostonSouthStation();
  } else if (station == 3) {
    stationBostonBackBay(false);
  } else if (station == 5) {
    stationRoute128(false);
  } else if (station == 7) {
    stationProvidence(false);
  } else if (station == 9) {
    stationNewHavenUnion(false);
  } else if (station == 11) {
    stationStamford();
  } else if (station == 13) {
    stationNewYorkPenn(false);
  } else if (station == 15) {
    stationNewarkPenn(false);
  } else if (station == 17) {
    stationMetropark(false);
  } else if (station == 19) {
    stationPhiladelphia30thSt(false);
  } else if (station == 21) {
    stationWilmington(false);
  } else if (station == 23) {
    stationBaltimorePenn(false);
  } else if (station == 25) {
    stationBWI(false);
  } else if (station == 27) {
    stationWashingtonDC(true);
  } else {
    ads();
  }
}

function keyPressed() {
  if (key == "'") {
    station++;
  }
  if (key == "=") {
    // page++;
  }
}
