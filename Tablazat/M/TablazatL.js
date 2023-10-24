export const Tablazattleiro = {
    nev: {
      megj: "Név",
      type: "text",
      placeholder: "valaki vagyok",
      value: "",
      regex: "^[A-Z][a-z]{2,15}$",
      valid: "Ha nagybetűvel kezdődik és legalább 3 karakterből, de legfeljebb 15 karakterből áll",
    },
    sul: {
      megj: "Születési idő",
      type: "number",
      placeholder: "2000",
      value: "2000",
      regex: { min: 1000, max: 2023 },
      valid: "Legalább 1000 és legfeljebb 2023 közötti érték",
    }
   /*  check: {
      megj: "Benne vagyok, mért ne",
      type: "checkbox",
      checked: false,
      valid: "A feltételeket el kell fogadni",
    },
    radio: {
      megj: "Válassz egy lehetőséget",
      type: "radio",
      options: [
        {
          label: "Első lehetőség",
          value: "első",
        },
        {
          label: "Második lehetőség",
          value: "második",
        },
        {
          label: "Harmadik lehetőség",
          value: "harmadik",
        },
      ],
      valid: "Válassz egy lehetőséget",
    }, */
  };