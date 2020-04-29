const filter = require("../filter");
const data = require("../data/data.json");

describe("Filter", () => {
  describe("Status", () => {
    it("Returns only the living", () => {
      const response = filter.filterByStatus(data.results, "Alive");
      expect(response.length).toBe(8);
    });

    it("Returns only the dead", () => {
      const response = filter.filterByStatus(data.results, "Dead");
      expect(response.length).toBe(6);
    });

    it("Returns only the unknown", () => {
      const response = filter.filterByStatus(data.results, "unknown");
      expect(response.length).toBe(6);
    });
  });
  describe("Gender", () => {
    it("Returns only Man", () => {
      const response = filter.filterByGender(data.results, "Male");
      expect(response.length).toBe(15);
    });

    it("Returns only Woman", () => {
      const response = filter.filterByGender(data.results, "Female");
      expect(response.length).toBe(4);
    });

    it("Returns only unknown", () => {
      const response = filter.filterByGender(data.results, "unknown");
      expect(response.length).toBe(1);
    });
  });
  describe("Episodies", () => {
    it("returns if Jerry is in episode 23", () => {
      const episodiesJerry = data.results[4].episode;

      const response = filter.haveInEpisodie(episodiesJerry, 23);      
      expect(response).toBe(true);
    });

    it("Returns only characters from episode 1", () => {
      const response = filter.filterByEpisodie(data.results, 1);
      expect(response.length).toBe(2);
      expect(response[1].name).toBe("Morty Smith");
    });

    it("Returns only characters from episode 6", () => {
      const response = filter.filterByEpisodie(data.results, 6);
      expect(response.length).toBe(5);
      expect(response[4].name).toBe("Jerry Smith");
    });
  });
});
