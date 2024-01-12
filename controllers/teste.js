
module.exports = {
    testecloud: async (req, res) => {
        const projects = [{ id: 1, title: "Um novo post" }];
        return res.json(projects);
       
    }
}