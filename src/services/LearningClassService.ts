import api from "../api";
class LearningClassService {
  getAll() {
    return api.get("/available-classes");
  }
  get(id: any) {
    return api.get(`/learning-class?id=${id}`);
  }
  create(data: any) {
    return api.post("/join-class", data);
  }
}
export default new LearningClassService();