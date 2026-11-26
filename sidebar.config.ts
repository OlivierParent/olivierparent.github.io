export const sidebar = [
  {
    collapsed: true,
    items: [{ autogenerate: { directory: "reference_works" } }],
    label: "Reference Works",
    translations: {
      nl: "Naslagwerken",
    },
  },
  {
    collapsed: true,
    items: [{ autogenerate: { directory: "computer_graphics" } }],
    label: "Computer Graphics",
    translations: {
      nl: "Computergrafiek",
    },
  },
  {
    collapsed: true,
    items: [{ autogenerate: { directory: "computer_science" } }],
    label: "Computer Science",
    translations: {
      nl: "Informatica",
    },
  },
  {
    collapsed: true,
    items: [
      "mathematics",
      "mathematics/00-terms",
      {
        collapsed: true,
        items: [
          { autogenerate: { directory: "mathematics/00-linear_algebra" } },
        ],
        label: "Linear Algebra",
        translations: {
          nl: "Lineaire algebra",
        },
      },
      {
        collapsed: true,
        items: [{ autogenerate: { directory: "mathematics/99-appendix" } }],
        label: "Appendix",
      },
    ],
    label: "Mathematics",
    translations: {
      nl: "Wiskunde",
    },
  },
];
