export const sidebar = [
  // {
  //   label: "Computer Graphics",
  //   translations: {
  //     nl: "Computergrafiek",
  //   },
  //   collapsed: true,
  //   items: [
  //     // Each item here is one entry in the navigation menu.
  //     {
  //       label: "Introduction",
  //       slug: "computer_science",
  //       translations: {
  //         nl: "Introductie",
  //       },
  //     },
  //     { label: "Example Guide", slug: "computer_science/example" },
  //   ],
  // },
  {
    label: "Computer Science",
    translations: {
      nl: "Informatica",
    },
    collapsed: true,
    items: [
      // Each item here is one entry in the navigation menu.
      {
        label: "Introduction",
        slug: "computer_science",
        translations: {
          nl: "Introductie",
        },
      },
      // { label: "Example Guide", slug: "computer_science/example" },
    ],
  },
  {
    label: "Mathematics",
    collapsed: true,
    translations: {
      nl: "Wiskunde",
    },
    items: [
      {
        label: "Introduction",
        slug: "mathematics",
        translations: {
          nl: "Introductie",
        },
      },
      // {
      //   label: "Linear Algebra",
      //   slug: "mathematics/linear_algebra",
      //   translations: {
      //     nl: "Lineaire algebra",
      //   },
      // },
    ],
  },
  {
    label: "Reference",
    translations: {
      nl: "Naslagwerk",
    },
    collapsed: true,
    items: [{ autogenerate: { directory: "reference" } }],
  },
];
