function colorPresets(value) {
  let preset;

  switch (value) {
    case "default":
      preset = {
        statusColors: {
          successColor: "rgba(47, 158, 68, 1)",
          successColorSecondary: "rgba(199, 235, 207, 1)",
          warningColor: "rgba(242, 180, 28, 1)",
          warningColorSecondary: "rgba(255, 231, 170, 1)",
          destructiveColor: "rgba(214, 69, 69, 1)",
          destructiveColorSecondary: "rgba(247, 199, 199, 1)",
        },
        chartColors: {
          primary: "rgba(242, 180, 28, 1)",
          secondary: "rgba(242, 180, 28, 0.6)",
          accent: "rgba(242, 180, 28, 0.8)",
        },
      };
      break;

    case "ocean":
      preset = {
        statusColors: {
          successColor: "rgba(13, 148, 136, 1)",
          successColorSecondary: "rgba(204, 251, 241, 1)",
          warningColor: "rgba(217, 119, 6, 1)",
          warningColorSecondary: "rgba(254, 215, 170, 1)",
          destructiveColor: "rgba(190, 24, 93, 1)",
          destructiveColorSecondary: "rgba(251, 207, 232, 1)",
        },
        chartColors: {
          primary: "rgba(37, 99, 235, 1)",
          secondary: "rgba(6, 182, 212, 0.6)",
          accent: "rgba(147, 197, 253, 0.8)",
        },
      };
      break;

    case "forest":
      preset = {
        statusColors: {
          successColor: "rgba(22, 101, 52, 1)",
          successColorSecondary: "rgba(220, 252, 231, 1)",
          warningColor: "rgba(161, 98, 7, 1)",
          warningColorSecondary: "rgba(254, 240, 138, 1)",
          destructiveColor: "rgba(153, 27, 27, 1)",
          destructiveColorSecondary: "rgba(254, 202, 202, 1)",
        },
        chartColors: {
          primary: "rgba(22, 101, 52, 1)",
          secondary: "rgba(101, 163, 13, 0.6)",
          accent: "rgba(212, 167, 44, 0.8)",
        },
      };
      break;

    case "sunset":
      preset = {
        statusColors: {
          successColor: "rgba(13, 148, 136, 1)",
          successColorSecondary: "rgba(204, 251, 241, 1)",
          warningColor: "rgba(234, 88, 12, 1)",
          warningColorSecondary: "rgba(255, 237, 213, 1)",
          destructiveColor: "rgba(153, 27, 27, 1)",
          destructiveColorSecondary: "rgba(254, 202, 202, 1)",
        },
        chartColors: {
          primary: "rgba(234, 88, 12, 1)",
          secondary: "rgba(249, 115, 22, 0.6)",
          accent: "rgba(190, 24, 93, 0.8)",
        },
      };
      break;

    default:
      return;
  }

  return preset;
}

export default colorPresets;
