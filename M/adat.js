const Urlapleiro = {
  nev: {
    megj: "név",
    type: "text",
    placeholder: "valaki vagyok",
    value: "",
    regex: "[A-Z][a-z]{2-15}",
    valid:"ha nagybetü és legalább 3 betü"
  },
  sul: {
    megj: "Születési idő",
    type: "number",
    placeholder: "2000",
    value: "2000",
    regex: { min: 1000, max: 2023 },
    valid:"ha min: 1000, max: 2023"
  },
};
export default Urlapleiro;
