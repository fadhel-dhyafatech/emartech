import { Icon } from "@iconify/react/dist/iconify.js";

const PaginationComponent = () => {
    return (
        <div className="pagination">
            <p>The page you’re on</p>
            <select className="form-select" aria-label="Default select example">
                <option selected>1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
            </select>
            <div className="arrow">
                <Icon icon="vaadin:arrow-left" style={{ color: "#747474" }} />
            </div>
            <div className="arrow">
                <Icon icon="vaadin:arrow-right" style={{ color: "#747474" }} />
            </div>

        </div>
    )
}

export default PaginationComponent;