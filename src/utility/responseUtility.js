export function mapModalProjectSelection(projects, projectTypes) {
    const result = [];
    projectTypes.forEach((type) => {
        console.log("Tipo: ",type.nome)
        const typeEntity = {
            label: type.nome,
            value: type.id,
            children: []
        }
        let prjPos = 1;
        projects.forEach((project) => {
            if (project.parent_id === type.id) {
                typeEntity.children.push({
                    label: project.nome,
                    value: type.id + "-" + prjPos,
                })
                prjPos++;
            }
        })
        result.push(typeEntity);
    })
    return result;
}